const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
    {
        title: String,
        price: Number,
        quantity: {
            type: Number,
            default: 0
        },
        description: String,
        image: String,
        userCreator: {
            type: mongoose.Types.ObjectId,
            ref: 'user'
        }
    }
)


const userSchema = mongoose.Schema(
    {
        name: String,
        relatedProducts: [
            {
                type: mongoose.Types.ObjectId,
                ref: 'product'
            }
        ]
    }
)

const Product  = mongoose.model('product', productSchema);
const User  = mongoose.model('user', userSchema);

module.exports = { Product, User };