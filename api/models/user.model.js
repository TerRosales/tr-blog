import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: "string",
      required: true,
      unique: true,
    },
    email: {
      type: "string",
      required: true,
      unique: true,
    },
    password: {
      type: "string",
      required: true,
    },
    profilePicture: {
      type: String,
      default:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fvectors%2Fblank-profile-picture-mystery-man-973460%2F&psig=AOvVaw13s7ExQPafSwflOi7Vb4yj&ust=1708701355969000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCKDEieCev4QDFQAAAAAdAAAAABAE",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
