const express = require('express');
require('./database/conn');
const TODO = require('./database/modalSchema');
const port = process.env.port || 5500;

const app = express(); 
 

app.use(express.json());
app.set('view engine','ejs');
app.use(express.urlencoded({extended:false}));
app.use(express.static("public")); 




//home page route
app.get('/', async (req,resp)=>{
    const todo = await TODO.find({});
    newtodo = todo
    resp.render("home",{
        title:"TODO List",
        datas:todo
    });
});

// delete (when we click on delete button , the data will be deleted)
app.get('/delete/:id', async (req,resp)=>{
    const {id} = req.params; 
    const deletetodo = await TODO.findByIdAndDelete({_id:id});
    resp.redirect("/");
 
})

//add list (post method)
app.post('/addlist', async (req,resp)=>{
    const {name} = req.body;
    const todo = new TODO({name});
    const newtodo = await todo.save();
    resp.redirect('/');

    //console.log(newtodo) => single data store

});


app.listen(port,()=>{
    console.log(`app is listen on port no. = ${port}`);
});
 