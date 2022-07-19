package repositories

import (
	"github.com/task2/db"
	"github.com/task2/models/domains"
)

type IUserRepository interface {
	Create(user *domains.User) (*domains.User, error)
	GetAll() ([]*domains.User, error)
	GetByID(id int) (*domains.User, error)
	GetByFilter(filter interface{}, arg ...interface{}) (*domains.User, error)
	Update(updatedUser *domains.User) (*domains.User, error)
}

type UserRepository struct {
	*BaseRepository
}

func NewUserRepository(db *db.DB) IUserRepository {
	return &UserRepository{
		&BaseRepository{
			db: db.Table(domains.UserTable),
		},
	}
}

func (repo *UserRepository) Create(user *domains.User) (*domains.User, error) {
	if err := repo.db.Create(&user).Error; err != nil {
		return nil, err
	}
	return user, nil
}

func (repo *UserRepository) GetAll() ([]*domains.User, error) {
	var users []*domains.User
	if err := repo.db.Find(&users).Error; err != nil {
		return nil, err
	}
	return users, nil
}

func (repo *UserRepository) GetByFilter(filter interface{}, arg ...interface{}) (*domains.User, error) {
	var user domains.User
	if err := repo.db.Where(filter, arg...).First(&user).Error; err != nil {
		return nil, err
	}
	return &user, nil
}

func (repo *UserRepository) GetByID(id int) (*domains.User, error) {
	var user domains.User
	if err := repo.db.Where("id=?", id).First(&user).Error; err != nil {
		return nil, err
	}
	return &user, nil
}

func (repo *UserRepository) Update(updatedUser *domains.User) (*domains.User, error) {
	if err := repo.db.Save(updatedUser).Error; err != nil {
		return nil, err
	}
	return updatedUser, nil
}
