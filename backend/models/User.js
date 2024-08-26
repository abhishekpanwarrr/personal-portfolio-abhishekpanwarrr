import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    placeId: {
      type: String,
      required: true,
    },
    osmId: {
      type: String,
    },
    osmType: {
      type: String,
    },
    lat: {
      type: String,
      required: true,
    },
    lon: {
      type: String,
      required: true,
    },
    displayName: {
      type: String,
      required: true,
    },
    address: {
      type: Object,
    },
    boundingBox: {
      type: Array,
    },
  },
  {
    timestamps: true,
  }
);
const User = mongoose.model("Users", UserSchema);
export default User;
