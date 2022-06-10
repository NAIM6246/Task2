package handlers

import (
	"encoding/json"
	"fmt"
	"net/http"

	"github.com/go-chi/chi/v5"
	"github.com/task2/auth"
	"github.com/task2/models/dtos"
	"github.com/task2/services"
)

type IAuthHandler interface{ IHandler }

type AuthHandler struct {
	authService services.IAuthService
	auth        auth.IAuth
}

func NewAuthHandler(
	authService services.IAuthService,
	auth auth.IAuth,
) IAuthHandler {
	return &AuthHandler{
		authService: authService,
		auth:        auth,
	}
}

func (h *AuthHandler) Handle(router chi.Router) {
	router.Post("/login", h.login)
}

func (h *AuthHandler) login(w http.ResponseWriter, r *http.Request) {
	var loginDto dtos.LoginDto
	parsingErr := json.NewDecoder(r.Body).Decode(&loginDto)
	if parsingErr != nil {
		BadRequest(w, parsingErr)
		return
	}
	fmt.Println("asdf")
	token, err := h.authService.Login(&loginDto)
	if err != nil {
		fmt.Println(err)
		BadRequest(w, err)
		return
	}
	Ok(w, token)
}
