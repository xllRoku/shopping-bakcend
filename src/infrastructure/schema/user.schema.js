import { model, Schema } from "mongoose";

const schema = new Schema({
  _id: { type: String, _id: false, required: true },
  email: { type: String, unique: true, index: true, required: true },
  name: { type: String, required: true },
  password: { type: String, required: true },
  categories: {
    type: Schema.Types.ObjectId,
    ref: "Category",
  },
});

export const UserSchema = model("User", schema);
