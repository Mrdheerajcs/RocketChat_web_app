const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const { body, validationResult } = require('express-validator');

const Message = require('../model/Message');
const Conversation = require('../model/Conversation');



router.use(bodyParser.json())


//Route 1: 
router.post('/add', [
    body('senderId', "Sender Id is not found").isLength({ min: 5 }),
    body('receiverId', 'Riciever not Exits').isLength({ min: 5 }),
    body('conversationId', 'Riciever not Exits').isLength({ min: 5 }),
], async function (req, res) {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const newMessage = new Message(req.body);
        await newMessage.save();

        await Conversation.findByIdAndUpdate(req.body.conversationId,{message:req.body.text})
        return res.status(200).json("message save");

    } catch (err) {
        return res.status(500).json(err.Message);
    }


})

// Route:2 Get
router.get('/get/:id', async (req, res) => {
    try {
        const messages= await Message.find({conversationId:req.params.id });
        return res.status(200).json(messages);
       
    } catch (error) {
        res.status(500).json(error);
    }
})

module.exports = router;