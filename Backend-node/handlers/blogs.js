const db = require('../conn/connection');

//scaffolding
const blogsHandler = {};

const Blogs = db.blogs


blogsHandler.createBlogs = async (req,res)=> {
    var blogToCreate = {
        title : req.body.title,
        description : req.body.description,
        authorID : req.body.authorID,
        isDeleted : req.body.isDeleted ?  req.body.isDeleted : false
    };
    let blog = await Blogs.create(blogToCreate);
    res.status(201).send(blog);
}

blogsHandler.getAllBlogs = async (req,res) => {
    let blogs = await Blogs.findAll();
    if(blogs) {
        res.status(200).send(blogs);
    } else {
        res.status(404).send('no Blogs found');
    }
}

blogsHandler.getBlogByID = async (req,res) => {
    let blogID = req.params.BlogsID
    console.log(blogID);
    let blog= await Blogs.findOne({where :{id : blogID}});
    if(blog) {
        res.status(200).send(blog);
    } else {
        res.status(404).send('Blogs not found');
    }
}

blogsHandler.updateBlog = async (req,res) => {
    let blogID = req.param.blogID
    
    let flag = await Blogs.update(
        req.body, {where:{id : blogID}}
    )
    if(flag){
    res.status(200).send('Blogs updated');
    } else {
        res.status(400).send('failed to update Blogs');
    }
}

blogsHandler.getBlogsByAuthorID = async (req,res) => {
    let authorID  = req.params.userID
    let blogs = await Blogs.findAll({
        where: {
          authorID: authorID
        }
      });
    if(blogs.lenght) {
        res.status(200).send(blogs);
    } else {
        res.status(404).send('this author published no Blogs!');
    }
}

blogsHandler.deleteBlogs = async (req,res) => {
    let blogID = req.params.blogID
    await Blogs.destroy({ where : {id: blogID } })
    res.status(204).send('Blogs deleted');
}

module.exports = blogsHandler;