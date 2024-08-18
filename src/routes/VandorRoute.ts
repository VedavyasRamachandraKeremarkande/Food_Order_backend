import express, { Request, Response, NextFunction } from 'express'
import {
  UpdateVendorProfile,
  UpdateVendorService,
  VendorLogin,
} from '../controllers'

const router = express.Router()

// router.get('/', (req: Request, res: Response, next: NextFunction) => {
//   res.json({ message: 'Hello from Vendor' })
// })
router.get('/login', VendorLogin)
//router.use(Authenticate)
router.get('/profile', VendorLogin)
router.patch('/profile', UpdateVendorProfile)
//router.patch('/coverimage', images, UpdateVendorCoverImage)
router.patch('/service', UpdateVendorService)

export { router as VandorRoute }
