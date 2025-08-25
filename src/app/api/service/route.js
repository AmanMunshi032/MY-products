import dbconnection, { CollectionNameobj } from "@/app/lib/db-conactor"
import { NextResponse } from "next/server"



export  const POST = async(req)=>{
    const body = await req.json()
    const Addproductcollection = dbconnection(CollectionNameobj.Addproductcollection)
    const result = await Addproductcollection.insertOne(body)
    return NextResponse.json({result})
}