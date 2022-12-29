
const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    instructor: { type: String, required: true },
    
    sub_topics: [{
        subTopic_Title: {type: String, required:true, unique:true},
        lessons: [
            {
              lesson_number: { type: Number },
              lesson_title: { type: String },
              lesson_body: { type: String },
            },
    ],
  }],
    price: { type: Number, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Courses', courseSchema);


