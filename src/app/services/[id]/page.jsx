
import dbconnection, { CollectionNameobj } from '@/app/lib/db-conactor'
import { ObjectId } from 'mongodb'
import Image from 'next/image'
import Link from 'next/link'
//  import { useRouter } from 'next/navigation'

export default  async function ServicesDitelspage({params}) {
  const p = await params
  const servicescollection = dbconnection(CollectionNameobj.ServicesCollection)
const data = await servicescollection.findOne({_id:new ObjectId (p.id)})
  // const router =useRouter
  return (
   <div className='max-w-5xl mx-auto  md:p-8 px-4'>
    <div className=' md:flex space-x-6 '>
      <div className='flex-1'>
   <Image  className=" lg:max-w-md rounded-xl h-full w-full " width={300} height={200} src={data.image} alt="hi" />
      </div>
      <div className='flex-1'>
       <h1 className='text-2xl' ><span className='font-bold '>Name :</span>{data.title}</h1>
        <h1 className='text-2xl' ><span className='font-bold '>price :</span>{data.price}</h1>
        <h1 className='text-2xl font-bold'> Products features</h1>
        <ul>
          <li>1 {data.features[0]}</li>
          <li>2 {data.features[1]}</li>
          <li>3 {data.features[2]}</li>
          <li>4 {data.features[3]}</li>
        </ul>
       
      </div>  
    </div>
     <h1 className='' ><span className='font-bold text-2xl'>Discription:</span>{data.description}</h1>
    <Link href="/products">
    <button 
     className='px-8 py-2 bg-blue-500 rounded-lg font-bold text-white'>back</button>
    </Link>
     
    
    </div> 
  
  )
}
