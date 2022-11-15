const conversationsControllers = require("./conversations.controller");

const getAllConversations = (req, res) => {
  const id = req.user.id;
  conversationsControllers
    .getAllConversations(id)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => res.status(400).json({ message: err.message }));
};

const getConversationById = (req, res) => {
  const userId = req.user.id;
  const id = req.params.id;
  conversationsControllers
    .getConversationById(userId, id)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => res.status(404).json({ message: err.message }));
};

const createConversation = (req, res) => {
  const userId = req.user.id;
  const { title, imageUrl } = req.body;
  if (title) {
    conversationsControllers
      .postConversation({
        title,
        imageUrl,
        userId,
      })
      .then((data) => res.status(201).json(data))
      .catch((err) => res.status(400).json(err.message));
  } else {
    res.status(400).json({
      message: "Missing Data",
      fields: {
        title: "string",
        imageUrl: "string",
      },
    });
  }
};

const patchConversation = (req, res) => {
  const userId = req.user.id;
  const id = req.params.id;
  const { title, imageUrl } = req.body;
  conversationsControllers
    .updateConversation(userId, id, { title, imageUrl })
    .then((data) => {
      if (data[0]) {
        res
          .status(200)
          .json({ message: `User with ID: ${id}, edited succesfully!` });
      }else{
        res.status(404).json({message: 'Invalid id'})
      }
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
};

const deleteConversation = (req, res) => {
  const userId = req.user.id;
  const id = req.params.id;
  conversationsControllers
    .deleteConversation(userId, id)
    .then((data) => {
      if (data) {
        res.status(204).json(data);
      } else {
        res.status(404).json({ message: "Invalid ID" });
      }
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
};

module.exports = {
  getAllConversations,
  createConversation,
  getConversationById,
  patchConversation,
  deleteConversation
};
