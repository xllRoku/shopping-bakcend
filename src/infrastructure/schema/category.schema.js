import { model, Schema } from "mongoose";

const schema = new Schema({
  _id: { type: String, _id: false, required: true },
  name: { type: String, required: true },
  itemId: { type: String, required: true },
  ownerId: { type: String, required: true },
});

export const CategorySchema = model("Category", schema);
