package handlers

import (
	"encoding/json"
	"net/http"

	"github.com/go-chi/chi/v5"
	"github.com/task2/handlers/param"
	"github.com/task2/models/domains"
	"github.com/task2/services"
)

type INewsHandler interface{ IHandler }

type NewsHandler struct {
	newsService services.INewsService
}

func NewNewsHandler(
	newsService services.INewsService,
) INewsHandler {
	return &NewsHandler{
		newsService: newsService,
	}
}

func (h *NewsHandler) Handle(router chi.Router) {
	router.Post("/", h.createNews)
	router.Get("/", h.getAllNews)
	router.Get("/{id}", h.getNewsByID)
	router.Put("/{id}", h.updateNews)
	router.Delete("/{id}", h.deleteNews)
	router.Get("/category/{category}", h.getNewsByCategory)
}

func (h *NewsHandler) createNews(w http.ResponseWriter, r *http.Request) {
	news := domains.News{}
	parsingErr := json.NewDecoder(r.Body).Decode(&news)
	if parsingErr != nil {
		BadRequest(w, parsingErr)
		return
	}
	createdNews, err := h.newsService.Create(&news)
	if err != nil {
		BadRequest(w, err)
		return
	}
	Created(w, createdNews)
}
func (h *NewsHandler) getAllNews(w http.ResponseWriter, r *http.Request) {
	newses, err := h.newsService.GetAll()
	if err != nil {
		NotFound(w, err)
		return
	}
	Ok(w, newses)
}
func (h *NewsHandler) getNewsByID(w http.ResponseWriter, r *http.Request) {
	id := param.Int(r, "id")
	News, err := h.newsService.GetByID(id)
	if err != nil {
		NotFound(w, err)
		return
	}
	Ok(w, News)
}
func (h *NewsHandler) updateNews(w http.ResponseWriter, r *http.Request) {
	id := param.Int(r, "id")
	news := domains.News{}
	parsingErr := json.NewDecoder(r.Body).Decode(&news)
	if parsingErr != nil {
		BadRequest(w, parsingErr)
		return
	}
	updatedNews, err := h.newsService.Update(id, &news)
	if err != nil {
		BadRequest(w, err)
		return
	}
	Ok(w, updatedNews)
}
func (h *NewsHandler) deleteNews(w http.ResponseWriter, r *http.Request) {}

func (h *NewsHandler) getNewsByCategory(w http.ResponseWriter, r *http.Request) {

}
