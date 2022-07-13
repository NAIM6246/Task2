//scaffolding
const user = {};

user.UserUpsertDto = {
    Name,
    Email,
    Phone,
    Password
}

user.ValidateUserData = (data) => {
    if(data.Name){
        return "name can not be empty";
    }
    if (data.Email){
        return "Email required";
    }
    if(data.Phone) {
        return "Phone required";
    }
    if(data.Password){
        return "password can not be empty";
    }
}

