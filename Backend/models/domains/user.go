package domains

type User struct {
	ID       int
	Name     string
	Email    string
	Password string
}

const UserTable = "Users"

func UserTableName() string {
	return "Users"
}
