package services

import (
	"errors"

	"github.com/task2/models/domains"
	"github.com/task2/repositories"
)

type IUserService interface {
	Create(user *domains.User) (*domains.User, error)
	GetAll() ([]*domains.User, error)
	GetByID(id int) (*domains.User, error)
	Update(id int, userData *domains.User) (*domains.User, error)
}

type UserService struct {
	userRepository repositories.IUserRepository
}

func NewUserService(
	userRepository repositories.IUserRepository,
) IUserService {
	return &UserService{
		userRepository: userRepository,
	}
}

func (h *UserService) Create(user *domains.User) (*domains.User, error) {
	createdUser, err := h.userRepository.Create(user)
	if err != nil {
		return nil, err
	}
	return createdUser, nil
}
func (h *UserService) GetAll() ([]*domains.User, error) {
	return h.userRepository.GetAll()
}

func (h *UserService) GetByID(id int) (*domains.User, error) {
	return h.userRepository.GetByID(id)
}

func (h *UserService) Update(id int, userData *domains.User) (*domains.User, error) {
	userToUpdate, err := h.GetByID(id)
	if err != nil {
		return nil, errors.New("user not found")
	}
	userToUpdate.Email = userData.Email
	userToUpdate.Name = userData.Name
	userToUpdate.UserName = userData.UserName
	updatedUser, err := h.userRepository.Update(userToUpdate)
	if err != nil {
		return nil, errors.New("failed to update user")
	}
	return updatedUser, nil
}
