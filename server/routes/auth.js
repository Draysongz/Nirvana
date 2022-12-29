const express = require('express');
const router= express.Router();
const Student = require('../models/student');
const cryptoJS = require('crypto-js');
const jwt = require('jsonwebtoken');
const crypto = require('crypto')

router.post('/register', async (req, res)=>{
    const newStudent = new Student({
        username: req.body.username,
        email: req.body.email,
        password: cryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString()

    })
    try{
        const savedStudent = await newStudent.save()
        res.status(201).json(savedStudent)
    }catch(err){
        res.status(500).json(err)
    }
})



router.post('/login', async (req,res)=>{
    try {
        const student = await Student.findOne({username: req.body.username})
        !student && res.status(401).json('User not found')

        const hashedPassword = cryptoJS.AES.decrypt(student.password, process.env.SECRET_KEY)

        const originalPassword = hashedPassword.toString(cryptoJS.enc.Utf8)

        originalPassword !==req.body.password && res.status(401).json('wrong password')

        const accessToken = jwt.sign({
            id: student._id,
            isAdmin:student.isAdmin
        }, process.env.JWT_SEC, 
        {expiresIn:"3d"})

      const  { password, ...others } = student._doc;

      res.status(200).json({...others, accessToken})
    } 
    catch (error) {
        res.status(500).json(error)
    }
})



// Route to request a password reset
router.post('/password-reset', (req, res) => {
    User.findOne({
      username: req.body.username
    }, (err, user) => {
      if (err) {
        res.status(400).send(err);
      } else if (user) {
        // Generate a reset token and expiry date
        user.resetPasswordToken = crypto.randomBytes(32).toString('hex');
        user.resetPasswordExpiry = Date.now() + 3600; // 1 hour
        user.save((err) => {
          if (err) {
            res.status(400).send(err);
          } else {
            // Send an email to the user with a link to reset their password
            sendResetPasswordEmail(user.username, user.resetPasswordToken);
            res.send();
          }
        });
      } else {
        res.status(404).send();
      }
    });
  });
  
  // Route to reset a password
  router.post('/password-reset/:token', (req, res) => {
    User.findOne({
      resetPasswordToken: req.params.token,
      resetPasswordExpiry: {
        $gt: Date.now()
      }
    }, (err, user) => {
      if (err) {
        res.status(400).send(err);
      } else if (user) {
        user.password = req.body.password;
        user.resetPasswordToken = null;
        user.resetPasswordExpiry = null;
        user.save((err) => {
          if (err) {
            res.status(400).send(err);
          } else {
            res.send();
          }
        });
      } else {
        res.status(401).send();
      }
    });
  });
  
 
  
  
  
  
  

module.exports = router