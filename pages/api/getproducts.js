import connectDb from "../../middleware/mongoose"
import Product from "../../models/Product"
const handler = async (req,res)=> {
    let products = await Product.find()

    res.status(200).json({ products})
    }

  export default connectDb(handler);