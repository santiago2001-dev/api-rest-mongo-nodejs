const { client } = require("../database/configDb");

const getAllProducts = async (req, res) => {
  try {
    const db = client.db("challenge");
    const collection = db.collection("products");
    const product = await collection.find({}).toArray();
    res.status(200).json({
      products : product
    });


  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

module.exports = { getAllProducts };
