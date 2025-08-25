import Image from 'next/image';
import React from 'react';
import dbconnection, { CollectionNameobj } from '../lib/db-conactor';
import Link from 'next/link';
import Hero from './Hero';


const ProductHighlights = async () => {

const serveces=  dbconnection(CollectionNameobj.Addproductcollection) 
const data = await serveces.find({}).toArray()
console.log(data)

    return (
        <div>
          <Hero></Hero>
            <h1 className='text-5xl font-black text-center my-8'>Product Highlights</h1>
        <div className='grid grid-cols-12 gap-8 p-6 '>
        {data.map((items)=>{
            return (
                <div className='lg:col-span-4  md:col-span-6 col-span-12' key={items._id}>
                <div className="card shadow-sm bg-white">
  <figure>
    <Image className=' w-full h-64' width={300} height={208}
      src={items.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title text-black">{items.title}</h2>
    <p className='text-black font-semibold'><span className='font-black text-black'>Price: $</span>{items.price}</p>
    <p className='text-black '>{items.description}</p>
    <div className="card-actions  ">
      {/* <Link href={`/services/${items._id}`}> 
 <button className="btn btn-primary w-full rounded-lg">view ditels</button> 
      </Link> */}
     
    </div>
  </div>
</div>
                </div>
            )
        })}
        </div>
       
        </div>
        
    );
};

export default ProductHighlights;