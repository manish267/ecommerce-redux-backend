

const productData=require('./data/products')
const connectDB=require('./config/db')
const Product=require('./models/Product');

connectDB()
const importData=async()=>{
    try{
        await Product.deleteMany({})
      const data=  await Product.insertMany(productData);

        console.log('Data Import Success',data);

        process.exit();
    }catch(err){
        console.log("Error in data import",err)
        process.exit()
    }
}

importData()