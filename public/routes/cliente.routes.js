const express = require("express")
const router = express.Router();


router.get("/cliente",(req,res)=>{
    res.render("pages/clientes")
})

router.post("/cliente",(req,res)=>{
    res.render("pages/clientes")
})



module.exports=router;