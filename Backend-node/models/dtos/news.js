

//scaffolding
const news = {};

news.CreateNewsDto = {
    Title,
    Description,
    AuthorID,
};

news.UpdateNewsDto = {
    Title,
    Description
};

news.ValidateNews = (data) => {
    if(data.Title){
        return "Title can not be empty";
    }
    if (data.Description) {
        return "description required";
    }
    if (data.AuthorID){
        return "Author needed";
    }
}