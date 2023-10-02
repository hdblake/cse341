const router = require("express").Router();

const contactController = require("../controllers/contacts");

router.get("/", contactController.getAllContacts);

router.get("/:id", contactController.getSingleContact);

// CRUD routes for controller
router.post("/", contactController.createContact);
router.put("/:id", contactController.updateContact);
router.delete("/:id", contactController.deleteContact);

module.exports = router;
