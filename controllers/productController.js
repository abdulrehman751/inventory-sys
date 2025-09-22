const Product = require("../models/Product");


exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find()
    res.status(200).json(products)
  } catch (error) {
    res.status(500).json({ message: error.message })

  }
}

exports.createProducts = async (req, res) => {
  try {
    const { name, quantity, price, category } = req.body;
    const product = await Product.create({ name, quantity, price, category });
    res.status(201).json({message: "product create successfully" ,product});
  } catch (error) {
    res.status(500).json({ message: error.message });

  }
}

exports.updateProducts = async (req, res) => {
  try {
    const products = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true })
    if (!products)
      return res.status(404).json({ message: "Products not found" })
     return res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "product not found" })
  }

}

exports.deleteProducts = async (req, res) => {
  try {
    const products = await Product.findByIdAndDelete(req.params.id)
    if (!products) return res.status(404).json({ message: "Products not found" })
    return res.status(204).json(products)

  } catch (error) {

    res.status(500).json({ message: "product not found" })
  }

}