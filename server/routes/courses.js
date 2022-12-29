const express = require('express')
const router = express.Router()
const Course= require('../models/courses')

router.post("/create", async (req, res)=>{
    const newCourse = await Course(req.body)
    try{
        const savedCourse = await newCourse.save()
        res.status(201).json(savedCourse)
    }catch(err){
        res.status(500).json(err)
    }
})

// GET /courses/:id: Returns a single course with the specified id
router.get('/get/:id', (req, res) => {
    Course.findById(req.params.id, (error, result) => {
      if (error) {
        console.error(error);
        res.status(500).send('Error finding course');
      } else if (result) {
        res.json(result);
      } else {
        res.status(404).send(`Course with id ${req.params.id} not found`);
      }
    });
  });
  
  // PUT /courses/:id: Updates an existing course with the specified id
  router.put('/update/:id', (req, res) => {
    Course.findByIdAndUpdate(req.params.id, req.body, (error, result) => {
      if (error) {
        console.error(error);
        res.status(500).send('Error updating course');
      } else if (result) {
        res.json(result);
      } else {
        res.status(404).send(`Course with id ${req.params.id} not found`);
      }
    });
  });
  
  // DELETE /courses/:id: Deletes an existing course with the specified id
  router.delete('/delete/:id', (req, res) => {
    Course.findByIdAndDelete(req.params.id, (error, result) => {
      if (error) {
        console.error(error);
        res.status(500).send('Error deleting course');
      } else if (result) {
        res.status(204).send('course deleted');
      } else {
        res.status(404).send(`Course with id ${req.params.id} not found`);
      }
    });
  });

module.exports = router