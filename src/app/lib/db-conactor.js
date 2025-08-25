import { MongoClient, ServerApiVersion } from "mongodb";

  export const CollectionNameobj ={
    ServicesCollection :"items",
    usercollection :"text_user",
    Addproductcollection :"products"
}
 export default function dbconnection(collectioName) {
  const uri = process.env.NEXT_PUBLIC_MONGDB_URL
  
// Create a MongoClient with a MongoClientOptions object to set the Stable API version

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
  return client.db(process.env.DB_NAME).collection(collectioName)
}

// name : my-products
// pass : S6WeQC3PpmA4HLcf
