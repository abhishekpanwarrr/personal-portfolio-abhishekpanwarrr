import User from "../models/User.js";

export const storeUser = async (req, res) => {
  try {
    const {
      placeId,
      osmId,
      osmType,
      lat,
      lon,
      displayName,
      address,
      boundingBox,
    } = req.body;
    const newUser = new User({
      placeId,
      osmId,
      osmType,
      lat,
      lon,
      displayName,
      address,
      boundingBox,
    });
    await newUser.save();
    const user = await User.find();
    res.status(201).json(user);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
