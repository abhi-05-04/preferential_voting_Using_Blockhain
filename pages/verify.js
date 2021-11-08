import { connectToDatabase } from "../lib/";

export default async (req, res) => {
  const { db } = await connectToDatabase();
  const data = req.query;
  const response = await db.collection("xyz").insertOne(data);
  
  res.json(response);  
};
