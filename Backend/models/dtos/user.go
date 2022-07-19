package dtos

type LoginDto struct {
	Email    string `json:"email"`
	Password string `json:"pass"`
}

type UserDto struct {
	Name     string `json:"name"`
	UserName string `json:"user_name"`
	Email    string `json:"email"`
}

type UserCreteDto struct {
	Name     string `json:"name"`
	Email    string `json:"email"`
	Password string `json:"pass"`
}

type AccessTokenDto struct {
	Bearer string
}
