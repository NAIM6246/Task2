package handlers

import (
	"encoding/json"
	"errors"
	"fmt"
	"net/http"

	"github.com/go-chi/chi/v5"
	"github.com/task2/auth"
	"github.com/task2/handlers/param"
	"github.com/task2/models/dtos"
	"github.com/task2/services"
)

type IUserHandler interface{ IHandler }

type UserHandler struct {
	userService services.IUserService
	auth        auth.IAuth
}

func NewUserHandler(userService services.IUserService,
	auth auth.IAuth) IUserHandler {
	return &UserHandler{
		userService: userService,
		auth:        auth,
	}
}

func (h *UserHandler) Handle(router chi.Router) {
	router.With(h.auth.Authentication).Get("/", h.getAllUser)
	router.Post("/", h.createUser)
	router.Get("/{userID}", h.getUserByID)
	router.With(h.auth.Authentication).Put("/{userID}", h.updateUser)
}

func (h *UserHandler) getAllUser(w http.ResponseWriter, r *http.Request) {
	users, err := h.userService.GetAll()
	if err != nil || len(users) == 0 {
		NotFound(w, errors.New("no user"))
		return
	}
	Ok(w, users)
}
func (h *UserHandler) createUser(w http.ResponseWriter, r *http.Request) {
	user := dtos.UserCreteDto{}
	parSingErr := json.NewDecoder(r.Body).Decode(&user)
	if parSingErr != nil {
		BadRequest(w, parSingErr)
		return
	}
	createdUser, err := h.userService.Create(&user)
	if err != nil {
		BadRequest(w, err)
		return
	}
	fmt.Println(user)
	Created(w, createdUser)
}

func (h *UserHandler) getUserByID(w http.ResponseWriter, r *http.Request) {
	id := param.Int(r, "userID")
	fmt.Println("hi", id)
	user, err := h.userService.GetByID(id)
	if err != nil {
		NotFound(w, err)
		return
	}
	fmt.Println("asdf")
	Ok(w, user)
}

func (h *UserHandler) updateUser(w http.ResponseWriter, r *http.Request) {
	id := param.Int(r, "userID")
	userData := dtos.UserCreteDto{}
	parsingErr := json.NewDecoder(r.Body).Decode(&userData)
	if parsingErr != nil {
		BadRequest(w, parsingErr)
		return
	}
	updatedUser, err := h.userService.Update(id, &userData)
	if err != nil {
		BadRequest(w, err)
		return
	}
	Ok(w, updatedUser)
}
