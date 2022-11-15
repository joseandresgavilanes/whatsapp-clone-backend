const Conversations = require("../models/conversations.models");
const Participants = require("../models/participants.models")
const uuid = require("uuid");
const Users = require("../models/users.models");
const Messages = require("../models/messages.models");

const getAllConversations = async (userId) => {
  const users = await Conversations.findAll({ 
    where: { userId },
    attributes: {
      exclude: ['userId', 'createdAt', 'updatedAt']
    },
    include: [
      {
        model: Users,
        attributes: {
          exclude: ['status', 'createdAt', 'updatedAt']
        },
        include: [
          {
            model: Messages
          }
        ]
      },
      {
        model: Messages,
        attributes: {
          exclude: ['conversationId', 'createdAt', 'updatedAt']
        }
      }
    ]
  });
  return users;
};

const getConversationById = async (userId, id) => {
  const data = await Conversations.findOne({
    where: {
      userId,
      id,
    },
    attributes: {
      exclude: ['userId', 'createdAt', 'updatedAt']
    },
    include: [
      {
        model: Users,
        attributes: {
          exclude: ['status', 'createdAt', 'updatedAt']
        }
      },
      {
        model: Messages,
        attributes: {
          exclude: ['conversationId', 'createdAt', 'updatedAt']
        }
      }
    ]
  });
  return data;
};

//title,  imageUrl, userId

const postConversation = async (data) => {
  const response = await Conversations.create({
    id: uuid.v4(),
    title: data.title,
    imageUrl: data.imageUrl,
    userId: data.userId,
  });
  return response;
};

const updateConversation = async (userId, id, data) => {
  const result = await Conversations.update(data, {
    where: {
      userId,
      id
    },
  });
  return result;
};

const deleteConversation = async (userId, id) => {
  const result = await Conversations.destroy({
    where: {
      userId,
      id
    },
  });
  return result;
};

module.exports = {
  getAllConversations,
  postConversation,
  getConversationById,
  updateConversation,
  deleteConversation
};
