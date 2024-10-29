const express = require ("express");
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended : true }))

const userData = [
    {id :1 , name:"shamnad" , company:"google"},
    {id :2 , name:"Ansaf" , company:"Amazone"},
    {id :3 , name:"Asger" , company:"Flipkart"},
    {id :4 , name:"Habeeb" , company:"Uber"},
]

app.post("/user", (req , res ) =>{
    res.json(userData)
})

app.post("/user/:id", (req , res ) =>{
    const userID = parseInt(req.params.id)
    const filterdData = userData.filter((data)=> data.id === userID)
    res.json(filterdData)
})




app.get("*" ,(req , res ) =>{
    res.json("No Route Available")

})


const PORT = process.env.PORT || 3008;

app.listen(PORT)
