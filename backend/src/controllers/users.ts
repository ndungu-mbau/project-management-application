import { Request, Response } from 'express'
import { v4 as uuid } from 'uuid'
import bcrypt from 'bcrypt'
import { Connection } from '../database'

const connection = new Connection()

export const register = async (req: Request, res: Response) => {
  try {
    let { fullName, email, password, cpassword } = req.body

    let user_id = uuid()

    const hashedPwd = await bcrypt.hash(password, 5)

    if (password == cpassword) {
      console.log(password)
    } else {
      return res.status(401).json({
        message: 'Password do not match',
      })
    }

    let result = connection.execute('registerUser', {
      user_id,
      fullName,
      email,
      password: hashedPwd,
      cpassword: hashedPwd,
    })

    return res.status(200).json({
      message: 'Employee registered successfully',
    })
  } catch (error) {
    return res.json({
      error: error,
    })
  }
}
