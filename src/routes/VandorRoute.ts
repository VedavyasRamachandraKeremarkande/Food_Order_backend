import express, { Request, Response, NextFunction } from 'express'
import { AddFood, GetFoods, GetVendorProfile, UpdateVendorCoverImage, UpdateVendorProfile, UpdateVendorService, VendorLogin } from '../controllers'
import { Authenticate } from '../middleware'
import multer from 'multer'

const router = express.Router()
const imageStorage1 = multer.diskStorage({
  destination: function(req,file, cb){
      cb(null, 'images')
  },
  filename: function(req,file,cb){
      cb(null, new Date().getDate() +'_'+file.originalname);
  }
})

const imageStorage = multer.diskStorage({
  destination: function(req, file, cb) {
      cb(null, '/Users/vedrk/Documents/codes/source_code/GIT/Food_Order_backend/src/images');
  },
  filename: function(req, file, cb) {
      cb(null, new Date().toISOString() + file.originalname) // this is wrong

  }
});

const images = multer({ storage: imageStorage}).array('images', 10);


router.get('/login', VendorLogin);

router.use(Authenticate);
router.get('/profile',GetVendorProfile);
router.patch('/profile', UpdateVendorProfile);
router.patch('/service', UpdateVendorService);

router.patch('/coverimage', images,UpdateVendorCoverImage);
router.post('/food', images,AddFood);
router.get('/food', GetFoods)

export { router as VandorRoute }
