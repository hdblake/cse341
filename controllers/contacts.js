const mongodb = require("../db/connect");
const ObjectId = require("mongodb").ObjectId;

const getAllContacts = async (req, res, next) => {
  const results = await mongodb.getDb().db().collection("contacts").find();
  results.toArray().then((contacts) => {
    res.status(200).json(contacts);
  });
};

const getSingleContact = async (req, res, next) => {
  const contactId = new ObjectId(req.params.id);
  const result = await mongodb
    .getDb()
    .db()
    .collection("contacts")
    .find({ _id: contactId });
  result.toArray().then((contacts) => {
    res.status(200).json(contacts[0]);
  });
};

const createContact = async (req, res) => {
  const contact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favColor: req.body.favColor,
    birthday: req.body.birthday
  };

  const result = await mongodb
    .getDb()
    .db()
    .collection("contacts")
    .insertOne(contact);

  if (result.acknowledged) {
    res.status(201).json(result);
  } else {
    res
      .status(500)
      .json(
        result.error ||
          "An error occurred creating the contact, please try again later."
      );
  }
};

const updateContact = async (req, res) => {
  const contactId = new ObjectId(req.params.id);
  const contact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favColor: req.body.favColor,
    birthday: req.body.birthday
  };

  const result = await mongodb
    .getDb()
    .db()
    .collection("contacts")
    .replaceOne({ _id: contactId }, contact);

  if (result.modifiedCount > 0) {
    res.status(201).send();
  } else {
    res
      .status(500)
      .json(
        result.error ||
          "An error occurred updating the contact, please try again later."
      );
  }
};

const deleteContact = async (req, res) => {
  const contactId = new ObjectId(req.params.id);

  const result = await mongodb
    .getDb()
    .db()
    .collection("contacts")
    .deleteOne({ _id: contactId }, contactId);

  if (result.deletedCount > 0) {
    res.status(201).send();
  } else {
    res
      .status(500)
      .json(
        result.error ||
          "An error occurred deleting the contact, please try again later."
      );
  }
};

module.exports = {
  getAllContacts,
  getSingleContact,
  createContact,
  updateContact,
  deleteContact
};
