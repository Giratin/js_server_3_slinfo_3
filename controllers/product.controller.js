const { Product } = require("../models/product.model");
const fs = require("fs")
module.exports = {
    showCreateProduct: (req, res) => {
        res.render('create');
    },
    createProduct: (req, res) => {
        let product = new Product(req.body);
        if(req.file){
            product.image = req.file.filename;
        }

        product.save()
            .then((doc)=>{
                res.status(201).render('create')
            })
            .catch((ex)=>{
                res.status(400).json({ ex });
            })
    },
    getAllProducts: async (req,res)=>{
        const products = await Product.find();
        res.render("all", {products})
    },
    getDetailsById: async (req,res)=>{
        const { id }= req.params;
        const product = await Product.findById(id);
        res.render("details", { product })

    },
    deleteProduct: (req,res)=>{
        const { id }= req.params;
        Product.findByIdAndDelete(id, (err,doc)=>{
            // image = doc.image
            console.log(doc);
            if(doc.image){
                fs.rmSync(`./public/images/${doc.image}`)
            }
            res.redirect("/products")
        })
    }
}