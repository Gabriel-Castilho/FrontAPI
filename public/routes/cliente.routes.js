const express = require("express")
const router = express.Router();


router.get("/cliente",(req,res)=>{
    res.render("pages/clientes")
})

router.post("/cliente",(req,res)=>{
   let{nome_clientes, telefone}=req.body;
   //let dados = [nome_clientes, telefone];
})

router.delete("/cliente/:id",(req,res)=>{
        var id_clientes = parseInt(req.params.id)      
        
})
 
module.exports=router;