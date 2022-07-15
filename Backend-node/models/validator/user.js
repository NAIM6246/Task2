//scaffolding
const userDtos = {};

// userDtos.UserUpsertDto = {
//     Name,
//     Email,
//     Phone,
//     Password
// }

userDtos.Validate = (data) => {
    if(!data.Name){
        return "name can not be empty";
    }
    if (!data.Email){
        return "Email required";
    }
    if(!data.Phone) {
        return "Phone required";
    }
    if(!data.Password){
        return "password can not be empty";
    }
    return null
}


module.exports = userDtos;