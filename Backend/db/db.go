package db

import (
	"fmt"
	"log"
	"sync"

	"github.com/task2/config"
	"github.com/task2/models/domains"

	"github.com/jinzhu/gorm"

	//sqlite
	_ "github.com/jinzhu/gorm/dialects/sqlite"
)

const dbType = "sqlite3"

var (
	connDBOnce sync.Once
	dbInstance *DB
)

type DB struct {
	*gorm.DB
}

func connectDB(config *config.DBConfig) error {
	connectionString := fmt.Sprintf("%s.db", config.DbName)
	conn, err := gorm.Open(dbType, connectionString)
	if err != nil {
		log.Fatal("Database connection failed")
		return err
	}
	fmt.Println("Database connected successfully.")
	dbInstance = &DB{conn}
	return nil
}

func ConnectDB(config *config.DBConfig) *DB {
	connDBOnce.Do(func() {
		err := connectDB(config)
		if err != nil {
			panic("failed to connect DB: " + err.Error())
		}
	})
	return dbInstance
}

func (db *DB) Migration() {
	db.AutoMigrate(
		&domains.User{},
	)
}
