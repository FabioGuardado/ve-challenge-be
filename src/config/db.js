import { connect } from "mongoose";

const connectToDb = async () => {
  try {
    const db = await connect(
      "mongodb+srv://ve_backend:GgPx1ine84dZHVn9@ve-challenge.wgvok8h.mongodb.net/"
    );
    console.log("DB Connected successfully!");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default connectToDb;
