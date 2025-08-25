'use server'
import bcrypt from "bcrypt";
import dbconnection, { CollectionNameobj } from "@/app/lib/db-conactor"

export const registeruser =  async (payload) =>{
  const usercollection = dbconnection(CollectionNameobj.usercollection)
      // Validation
    const { email, password } = payload;
    if (!email || !password) return null;
    const user = await usercollection.findOne({ email: payload.email })
    if(!user){
        const hashedPassword = await bcrypt.hash(password, 10)
        payload.password = hashedPassword
  const result = await usercollection.insertOne(payload)
  result.insertedId= result.insertedId.toString()
  return result
    }
  return null ;
}