const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");

// Pegar todos os contatos
router.get("/all", (req, res, next) => {
  Contact.find()
    .then(deps => {
      res.status(200).json(deps);
    })
    .catch(e => console.log(e));
});

// Pegar um deputado específico
router.get("/:idContato", (req, res, next) => {
  let { idContato } = req.params;

  Contact.find({ _id: idContato })
    .then(dep => {
      res.status(200).json(dep);
    })
    .catch(e => console.log(e));
});

router.post("/add", (req, res, next) => {
  const { name, ddd, telephone } = req.body;

  Contact.create(
    new Contact({
      name,
      ddd,
      telephone
    })
  )
    .then(user => res.status(200).json(user))
    .catch(err => res.status(400).json(err));
});

router.delete("/:idContato", (req, res, next) => {
  let { idContato } = req.params;
  Contact.deleteOne({ _id: idContato })
    .then(dep => {
      res.status(200).json(dep);
    })
    .catch(e => console.log(e));
});

router.put("/:idContato", (req, res, next) => {
  const { idContato } = req.params;
  const { name, email } = req.body;

  Contact.findByIdAndUpdate(
    { _id: idContato },
    { $set: { email, name } },
    { new: true }
  )
    .then(dep => {
      res.status(200).json(dep);
    })
    .catch(e => console.log(e));
});

module.exports = router;
