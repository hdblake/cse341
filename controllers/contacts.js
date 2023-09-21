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
		.find({_id: contactId});
	result.toArray().then((contacts) => {
		res.status(200).json(contacts[0]);
	});
};

module.exports = {
	getAllContacts,
	getSingleContact,
};
