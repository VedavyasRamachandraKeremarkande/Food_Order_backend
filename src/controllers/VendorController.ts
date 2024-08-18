import { Request, Response, NextFunction } from 'express'
import { VendorLoginInput } from '../dto'
import { FindVendor } from './AdminController'
import { ValidatePassword, GenerateSignature } from '../utility'

export const VendorLogin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email, password } = <VendorLoginInput>req.body

  const existingUser = await FindVendor('', email)

  if (existingUser !== null) {
    const validation = await ValidatePassword(
      password,
      existingUser.password,
      existingUser.salt
    )
    // if (validation) {
    //   const signature = await GenerateSignature({
    //     _id: existingUser._id,
    //     email: existingUser.email,
    //     name: existingUser.name,
    //   })
    //   return res.json(signature)
    // }
    if (validation) {
      const signature = await GenerateSignature({
        _id: existingUser._id,
        email: existingUser.email,
        name: existingUser.name,
      })
      return res.json(existingUser)
    } else {
      return res.json({ message: 'Password is not valid' })
    }
  }

  return res.json({ message: 'Login credential is not valid' })
}

export const UpdateVendorProfile = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  //   const user = req.user

  //   const { foodType, name, address, phone } = <EditVendorInput>req.body

  //   if (user) {
  //     const existingVendor = await FindVendor(user._id)

  //     if (existingVendor !== null) {
  //       existingVendor.name = name
  //       existingVendor.address
  //       existingVendor.phone = phone
  //       existingVendor.foodType = foodType
  //       const saveResult = await existingVendor.save()

  //       return res.json(saveResult)
  //     }
  //   }
  return res.json({ message: 'Unable to Update vendor profile ' })
}

export const UpdateVendorService = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  //   const user = req.user

  //   const { lat, lng } = req.body

  //   if (user) {
  //     const existingVendor = await FindVendor(user._id)

  //     if (existingVendor !== null) {
  //       existingVendor.serviceAvailable = !existingVendor.serviceAvailable
  //       if (lat && lng) {
  //         existingVendor.lat = lat
  //         existingVendor.lng = lng
  //       }
  //       const saveResult = await existingVendor.save()

  //       return res.json(saveResult)
  //     }
  //   }
  return res.json({ message: 'Unable to Update vendor profile ' })
}
