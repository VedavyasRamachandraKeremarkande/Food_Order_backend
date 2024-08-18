import express, { Request, Response, NextFunction } from 'express'
import { GetVendorProfile, UpdateVendorProfile, UpdateVendorService, VendorLogin } from '../controllers'
import { Authenticate } from '../middleware'

const router = express.Router()
router.get('/login', VendorLogin);

router.use(Authenticate);
router.get('/profile',GetVendorProfile);
router.patch('/profile', UpdateVendorProfile);
router.patch('/service', UpdateVendorService);


export { router as VandorRoute }
