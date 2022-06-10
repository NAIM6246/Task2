package domains

type News struct {
	ID          int
	Name        string
	Description string
	Category    string
	AuthorID    int
}

const NewsTable = "newses"

func NewsTableName() string {
	return "newses"
}
