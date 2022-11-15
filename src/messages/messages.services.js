const messageControllers = require('./messages.controllers')

const getMsgByConversationId = (req, res) => {
  const { id: conversationId } = req.params
  messageControllers.getMsgByConversationId(conversationId)
    .then(data => {
      res.status(200).json(data)
    })
    .catch(err => {
      res.status(400).json({message: err.message})
    })
}

const createMessage = (req, res) => {
  const { id: conversationId } = req.params
  const userId = req.user.id //? Este es el id del usuario loggeado
  const { message } = req.body
  if( message && conversationId){
    messageControllers.createMessage({message, conversationId, userId })
      .then(data => {
        res.status(201).json(data)
      })
      .catch(err => {
        res.status(400).json(err.message)
      })
  } else {
    res.status(400).json({
      message: 'Missing Data',
      fields: {
        message: 'string',
        userId: 'uuid',
        conversationId: 'uuid'
      }
    })
  }
}

const getMsgByMessageId = (req, res) => {
  const { id: conversationId, messageId } = req.params
  console.log({conversationId, messageId})
  messageControllers.getMsgByMessageId(messageId, conversationId)
    .then(data => {
      res.status(200).json(data)
    })
    .catch(err => {
      res.status(400).json({message: err.message})
    })
}

const deleteMsgByMessageId = (req, res) => {
  const { id: conversationId, messageId } = req.params
  messageControllers.deleteMsgByMessageId(messageId, conversationId)
    .then((data) => {
      if (data) {
        res.status(204).json();
      } else {
        res.status(404).json({ message: "Invalid ID" });
      }
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
};

module.exports = {
  getMsgByConversationId,
  createMessage,
  getMsgByMessageId,
  deleteMsgByMessageId
}