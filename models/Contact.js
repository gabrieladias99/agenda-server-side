const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contactSchema = new Schema({
  name: String,
  ddd: Number,
  telephone: Number
});

const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;
