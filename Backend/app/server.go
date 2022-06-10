package app

import (
	"net/http"

	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
	"github.com/rs/cors"
	"github.com/task2/auth"
	"github.com/task2/config"
	"github.com/task2/db"
	"github.com/task2/handlers"
	"github.com/task2/repositories"
	"github.com/task2/services"
	"go.uber.org/dig"
)

func buildContainer() *dig.Container {
	container := dig.New()
	//
	container.Provide(config.NewDBConfig)
	container.Provide(db.ConnectDB)

	//user
	container.Provide(repositories.NewUserRepository)
	container.Provide(services.NewUserService)

	//Article
	container.Provide(repositories.NewNewsRepository)
	container.Provide(services.NewNewsService)
	//Authentication
	container.Provide(services.NewAuthService)
	container.Provide(auth.NewAuth)

	//Handlers
	container.Provide(handlers.NewUserHandler)
	container.Provide(handlers.NewNewsHandler)
	container.Provide(handlers.NewAuthHandler)

	//server
	container.Provide(NewServer)

	return container
}

//System	:
type App struct {
}

//NewApp	:
func NewApp() {
	container := buildContainer()
	err := container.Invoke(func(server *Server) {
		server.run()
	})
	if err != nil {
		panic(err)
	}
}

//Server	:
type Server struct {
	userHandler handlers.IUserHandler
	newsHandler handlers.INewsHandler
	authHandler handlers.IAuthHandler

	router    *chi.Mux
	dbContext *db.DB
}

//Constructor of server	:
func NewServer(
	userHandler handlers.IUserHandler,
	newsHandler handlers.INewsHandler,
	authHandler handlers.IAuthHandler,
	dbContext *db.DB) *Server {

	return &Server{
		userHandler: userHandler,
		newsHandler: newsHandler,
		authHandler: authHandler,
		router:      chi.NewRouter(),
		dbContext:   dbContext,
	}
}

const port = ":3000"

func (s *Server) run() {
	s.setMiddlewares()
	s.mapHandlers()
	defer s.dispose()
	http.ListenAndServe(port, s.router)
}

func (s *Server) setMiddlewares() {
	s.router.Use(middleware.Logger)
	s.router.Use(ResponseInJSON)
	//s.router.Use(middleware.Timeout(0 * time.Millisecond))
	s.dbContext.Migration()
	s.router.Use(cors.AllowAll().Handler)
}

func (s *Server) mapHandlers() {
	s.router.Route("/auth", s.authHandler.Handle)
	s.router.Route("/newses", s.newsHandler.Handle)
	s.router.Route("/users", s.userHandler.Handle)
}

func (s *Server) dispose() {
	s.dbContext.Close()
}
