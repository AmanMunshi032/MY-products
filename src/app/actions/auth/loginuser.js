"use server";

import bcrypt from "bcrypt"

import dbconnection, { CollectionNameobj } from "@/app/lib/db-conactor";

export const loginUser = async (payload) => {

    const { email, password } = payload;

    const userCollection = dbconnection(CollectionNameobj.usercollection);
    const user = await userCollection.findOne({ email })

    if (!user) return null
    const isPasswordOK = bcrypt.compare(user.password, password)
    if (!isPasswordOK) return null

    return user;
}