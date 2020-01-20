const userRouter = require('express').Router();
const User = require('./../models/User');
const Class = require('./../models/Class');
var generator = require('generate-password');

// GET ALL Users
userRouter.get('/', async (req, res) => {
  try {
    const result = await User.find({});
    res.send(result);
  } catch (e) {
    res.status(500).send(e);
  }
});

// ADD COURSE TO USER'S WATCH
userRouter.post('/:uid/add-course', async (req, res) => {
  try {
    const { classNumber } = req.body;
    const { uid } = req.params;
    const targetClass = await Class.findOne({ classNumber });
    let user = await User.findOne({ uid });
    
    if (!user) {
      var email = generator.generate({
          length: 10,
          numbers: false
      });
      await new User({ uid, email }).save();
      user = await User.findOne({ uid });
    }
    
    if (!targetClass) {
      res.status(400).send({ message: 'Course ID does not exist'})
    }
    
    let newWatching = user.watching;
    if (!newWatching.includes(targetClass._id)) {
      newWatching.push(targetClass._id);
    }
    user.watching = newWatching;
    const updatedUser = await user.save();
    
    res.send(updatedUser);
  } catch (e) {
    res.status(500).send(e);
    console.log(e);
  }
});

// DELETE COURSE FROM USER'S WATCH
userRouter.post('/:uid/remove-course', async (req, res) => {
  try {
    const { _id } = req.body;
    const { uid } = req.params;
    const user = await User.findOne({ uid })
    let newWatching = user.watching;
    if (newWatching.includes(_id)) {
      newWatching.splice(newWatching.indexOf(_id), 1)
    }
    user.watching = newWatching;
    const updatedUser = await user.save();
    res.send(updatedUser);
  } catch (e) {
    res.status(500).send(e);
  }
});

// GET User BY ID
userRouter.get('/:uid', async (req, res) => {
  try {
    const { uid } = req.params;
    const user = await User.findOne({ uid }).populate('watching');
    if (!user) {
      res.status(400).send({ message: 'User does not exist'})
    }
    res.send(user);
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = userRouter;
