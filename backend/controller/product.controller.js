import Product from "../models/product.model.js";
import mongoose from "mongoose";

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json({ success: true, data: products });
  } catch (error) {
    console.error("Erro ao buscar produtos: ", error.message);
    res.status(500).json({ success: false, message: "Erro no servidor" });
  }
};

export const createProduct = async (req, res) => {
  const product = req.body;

  if (!product.name || !product.price || !product.image)
    res
      .status(400)
      .json({ success: false, message: "Please provide all fields" });

  const newProduct = new Product(product);

  try {
    await newProduct.save();
    res.status(201).json({ success: true, data: newProduct });
  } catch (error) {
    console.error("Erro ao criar um Produto: ", error.message);
    res.status(500).json({ success: false, message: "Erro no Servidor" });
  }
};

export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const product = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    res.status(400).json({ success: false, message: "ID inválido" });

  try {
    const updatedProduct = await Product.findByIdAndUpdate(id, product, {
      new: true,
    });
    res.status(200).json({ success: true, data: updatedProduct });
  } catch (error) {
    console.error(`Erro: ${error.message}`);

    res.status(500).json({ success: false, message: "Erro no Servidor" });
  }
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    await Product.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: "Produto deletado" });
  } catch (error) {
    console.error(error.message);

    res
      .status(404)
      .json({ success: false, message: "Produto não encontrado." });
  }
};
