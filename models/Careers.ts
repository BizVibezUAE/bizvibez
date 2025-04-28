import mongoose from "mongoose";

const careerSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  applyingFor: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  linkedInProfile: {
    type: String,
  },
});

const Career = mongoose.models.Career || mongoose.model("Career", careerSchema);

export default Career;
