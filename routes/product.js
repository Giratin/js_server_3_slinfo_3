const { showCreateProduct, createProduct, getAllProducts, getDetailsById, deleteProduct } = require("../controllers/product.controller");

const router = require("express").Router();
const multer = require("multer");
const { storage } = require("../middlewares/upload");

const upload = multer({ storage: storage })

/**
 * @Path /products
 */

router.get("/", getAllProducts);

router.route("/add")
        .get(showCreateProduct)
        .post(upload.single('avatar') , createProduct);

router.get("/details/:id", getDetailsById);
router.get("/delete/:id", deleteProduct);

module.exports = router;