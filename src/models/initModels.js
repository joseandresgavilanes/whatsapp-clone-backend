const Users = require('./users.models')
const Messages = require("./messages.models")
const Participants = require("./participants.models")
const Conversations = require('./conversations.models')

const initModels = () => {
  Users.hasMany(Messages)
  Users.hasMany(Conversations)
  Users.hasMany(Participants)

  Messages.belongsTo(Users)
  Messages.belongsTo(Conversations)

  Participants.belongsTo(Users)
  Participants.belongsTo(Conversations)

  Conversations.belongsTo(Users)
  Conversations.hasMany(Messages)
  Conversations.hasMany(Participants)
}


module.exports = initModels