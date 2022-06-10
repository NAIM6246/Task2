package services

import (
	"errors"
	"fmt"

	"github.com/task2/auth"
	"github.com/task2/models/domains"
	"github.com/task2/models/dtos"
	"github.com/task2/repositories"
)

type IAuthService interface {
	Login(loginDto *dtos.LoginDto) (*dtos.AccessTokenDto, error)
}

type AuthService struct {
	auth           auth.IAuth
	userRepository repositories.IUserRepository
}

func NewAuthService(
	auth auth.IAuth,
	userRepository repositories.IUserRepository,
) IAuthService {
	return &AuthService{
		auth:           auth,
		userRepository: userRepository,
	}
}

func (that *AuthService) Login(loginDto *dtos.LoginDto) (*dtos.AccessTokenDto, error) {
	user, err := that.userRepository.GetByFilter("email=?", loginDto.Email)
	fmt.Println(user.Password, loginDto.Password)
	if err != nil {
		fmt.Println(err)
		return nil, errors.New("this email is not registerred")
	}
	if user.Password != loginDto.Password {
		return nil, errors.New("password didn't match")
	}
	fmt.Println(user)
	token, err := that.auth.GenerateToken(&domains.User{ID: user.ID})
	if err != nil {
		fmt.Println(err)
		return nil, err
	}
	fmt.Println("logged in")
	return &dtos.AccessTokenDto{
		Bearer: token,
	}, nil
}
