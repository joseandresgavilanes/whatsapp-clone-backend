const router = require("express").Router();
const passport = require("passport");
const conversationsServices = require("./conversations.services");
const messagesServices = require("../messages/messages.services")
const participantsServices = require("../participants/participants.services")
require("../middlewares/auth.middleware")(passport);

router
  .route("/")
  .get(
    passport.authenticate("jwt", { session: false }),
    conversationsServices.getAllConversations
  )
  .post(
    passport.authenticate("jwt", { session: false }),
    conversationsServices.createConversation
  );

//? /api/v1/conversations/:id
router
  .route("/:id")
  .get(
    passport.authenticate("jwt", { session: false }),
    conversationsServices.getConversationById
  )
  .patch(
    passport.authenticate("jwt", { session: false }),
    conversationsServices.patchConversation
  )
  .delete(
    passport.authenticate("jwt", { session: false }),
    conversationsServices.deleteConversation
  );


//? c y d
router
  .route('/:id/messages')
  .get(
    passport.authenticate("jwt", { session: false }),
    messagesServices.getMsgByConversationId
  )
  .post(
    passport.authenticate("jwt", { session: false }),
    messagesServices.createMessage
  )

router
  .route('/:id/messages/:messageId')
  .get(
    passport.authenticate("jwt", { session: false }),
    messagesServices.getMsgByMessageId
  )
  .delete(
    passport.authenticate("jwt", { session: false }),
    messagesServices.deleteMsgByMessageId
  )


//? Optionals a y b
router
  .route('/:id/participants')
  .get(
    passport.authenticate("jwt", { session: false }),
    participantsServices.getAllParticipants
  )
  .post(
    passport.authenticate("jwt", { session: false }),
    participantsServices.postParticipant
  )

router
  .route('/:id/participants/:participantId')
  .get(
    passport.authenticate("jwt", { session: false }),
    participantsServices.getParticipantById
  )
  .delete(
    passport.authenticate("jwt", { session: false }),
    participantsServices.deleteParticipant
  )

module.exports = router;
