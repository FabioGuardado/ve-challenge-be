import { connect } from "mongoose";

const connectToDb = async () => {
  try {
    const connectionString = process.env.MONGO_URI || "";
    await connect(connectionString);
    console.log("DB Connected successfully!");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default connectToDb;
