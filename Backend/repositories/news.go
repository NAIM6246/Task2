package repositories

import (
	"github.com/task2/db"
	"github.com/task2/models/domains"
)

type INewsRepository interface {
	Create(newNews *domains.News) (*domains.News, error)
	GetAll() ([]*domains.News, error)
	GetByID(id int) (*domains.News, error)
	Update(news *domains.News) (*domains.News, error)
}

type NewsRepository struct {
	*BaseRepository
}

func NewNewsRepository(db *db.DB) INewsRepository {
	return &NewsRepository{
		&BaseRepository{
			db: db.Table(domains.NewsTableName()),
		},
	}
}

func (repo *NewsRepository) Create(newNews *domains.News) (*domains.News, error) {
	if err := repo.db.Create(&newNews).Error; err != nil {
		return nil, err
	}
	return newNews, nil
}

func (repo *NewsRepository) GetAll() ([]*domains.News, error) {
	var newss []*domains.News
	if err := repo.db.Find(&newss).Error; err != nil {
		return nil, err
	}
	return newss, nil
}

func (repo *NewsRepository) GetByID(id int) (*domains.News, error) {
	var news domains.News
	if err := repo.db.Where("id=?", id).First(&news).Error; err != nil {
		return nil, err
	}
	return &news, nil
}

func (repo *NewsRepository) Update(news *domains.News) (*domains.News, error) {
	if err := repo.db.Save(news).Error; err != nil {
		return nil, err
	}
	return news, nil
}
