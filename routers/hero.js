const express=require("express")
const router=express.Router()
const multer = require('multer');
const { uploadHero, getHeros, getHeroById, deleteHero, updateHero } = require("../controllers/hero");
const storage = multer.memoryStorage(); 
const upload = multer({ storage: storage });

const RequireAuth=require("../middleware/auth")


router.use(RequireAuth)

router.post("/hero",upload.single("image"),uploadHero)
router.get("/hero", getHeros)
router.get("/heroById", getHeroById)
router.put("/hero", updateHero)
router.delete("/hero", deleteHero)





module.exports=router