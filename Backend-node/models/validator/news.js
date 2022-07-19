

//scaffolding
const newsDtos = {};

// newsDtos.CreateNewsDto = {
//     Title,
//     Description,
//     AuthorID,
// };

// newsDtos.UpdateNewsDto = {
//     Title,
//     Description
// };

newsDtos.ValidateNewsCreateDto = (data) => {
    if(!data.Title){
        return "Title can not be empty";
    }
    if (!data.Description) {
        return "description required";
    }
    if (!data.AuthorID){
        return "Author needed";
    }
}


newsDtos.ValidateUpdateDtos = (data) => {
    if(!data.Title){
        return "Title can not be empty";
    }
    if (!data.Description) {
        return "description required";
    }
    return null
}

module.exports = newsDtos;