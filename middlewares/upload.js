const multer = require("multer");

const storage = multer.diskStorage(
    {
        destination: (req,file,clb)=>{
            clb(null, './public/images/');
        },
        filename: (req,file,clb)=>{
            const newFileName = (+ new Date()) + "_" + file.originalname;
            clb(null, newFileName);
        }
    }
);


module.exports = { storage }