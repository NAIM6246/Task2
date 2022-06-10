package services

import (
	"github.com/task2/models/domains"
	"github.com/task2/repositories"
)

type INewsService interface {
	Create(newNews *domains.News) (*domains.News, error)
	GetAll() ([]*domains.News, error)
	GetByID(id int) (*domains.News, error)
	Update(id int, news *domains.News) (*domains.News, error)
}

type NewsService struct {
	newsRepository repositories.INewsRepository
}

func NewNewsService(
	newsRepository repositories.INewsRepository,
) INewsService {
	return &NewsService{
		newsRepository: newsRepository,
	}
}

func (h *NewsService) Create(newnews *domains.News) (*domains.News, error) {
	return h.newsRepository.Create(newnews)
}

func (h *NewsService) GetAll() ([]*domains.News, error) {
	return h.newsRepository.GetAll()
}

func (h *NewsService) GetByID(id int) (*domains.News, error) {
	return h.newsRepository.GetByID(id)
}


func (h *NewsService) Update(id int, news *domains.News) (*domains.News, error) {
	newsToUpdate, err := h.GetByID(id)
	if err != nil {
		return nil, err
	}
	newsToUpdate.Category = news.Category
	newsToUpdate.Description = news.Description
	newsToUpdate.Name = news.Name
	return h.newsRepository.Update(newsToUpdate)
}
