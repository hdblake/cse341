const router = require("express").Router();

const contactController = require("../controllers/contacts");

router.get("/", contactController.getAllContacts);

router.get("/:id", contactController.getSingleContact);

module.exports = router;
