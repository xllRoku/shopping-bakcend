import { model, Schema } from "mongoose";

const schema = new Schema({
  _id: { type: String, _id: false, required: true },
  name: { type: String, required: true },
  note: { type: String, required: true },
  image: { type: String, required: true },
  category: { type: String, required: true },
});

export const ItemSchema = model("User", schema);
