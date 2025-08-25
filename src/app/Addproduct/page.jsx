'use client'

import React from 'react'
import toast from 'react-hot-toast';
export default function Addproduct() {
    const hendelAddproduct = async (e)=>{
       e.preventDefault();
        const form = e.target;
        const title = form.title.value
        const image = form.image.value
        const description = form.description.value
        const price = form.price.value
        const AddData = {title,image,description,price}
        // console.log(AddData)
const rest=  await fetch("http://localhost:3000/api/service",{
    method:"POST",
    body:JSON.stringify(AddData)
   }) 
    const postresponse = await rest.json()
    console.log(postresponse )
     toast.success( 'data success fully',)
    }
    
   
  return (
    <div className= 'flex justify-center items-center p-4 lg:my-10'>
      <div className="max-w-lg mx-auto bg-white shadow-lg rounded-2xl p-6 mt-10">
      <h2 className="text-2xl  text-center font-bold mb-4">Add New Product</h2>

      <form onSubmit={hendelAddproduct} className="space-y-4">
        <input
         name= "title"
          placeholder="Product Name"
          className="w-full border p-2 rounded"
        />
        <input
          type="text"
          name = "image"
          placeholder="Image URL"
          className="w-full border p-2 rounded"
        />
        <textarea
          name="description"
          placeholder="Product Description"
          className="w-full border p-2 rounded"
        />

        <input
          type="number"
           name="price"
          placeholder="Price"
          className="w-full border p-2 rounded"
        />

        <button
          type="submit"
        //   disabled={loading}
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-700"
        >
         Add Product
        </button>
      </form>

    
      </div>
      </div>
  )
}
