const router = require('express').Router();
const Text = require('../models/text.model');

// get text list
router.route('/').get((req, res) => {
  switch (req.query.sortBy) {
    case 'rate':
        console.log('sort by rate')
        Text.find({}, { bodyFull: 0 }).sort({ rate: -1 })
          .then(texts => res.json(texts))
          .catch(err => res.status(400).json('Error: ' + err));
        break;

    case 'date':
        console.log('sort by date')
        Text.find({}, { bodyFull: 0 }).sort({ createdAt: -1 })
          .then(texts => res.json(texts))
          .catch(err => res.status(400).json('Error: ' + err));
        break;

    default:
      console.log('nosort', req.query.alphabet)
      Text.find(
        alphabetFilter(req.query.alphabet), 
        { bodyFull: 0 }
      )
        .then(texts => res.json(texts))
        .catch(err => res.status(400).json('Error: ' + err));
  }
});

// get one text by id
router.route('/:id').get((req, res) => {
  Text.findById(req.params.id)
    .then(texts => res.json(texts))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const newText = new Text(
    req.body
  );

  newText.save()
  .then(() => res.json('Text added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

/* router.route('/:id').get((req, res) => {
  Exercise.findById(req.params.id)
    .then(exercise => res.json(exercise))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Exercise.findByIdAndDelete(req.params.id)
    .then(() => res.json('Exercise deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Exercise.findById(req.params.id)
    .then(exercise => {
      exercise.username = req.body.username;
      exercise.description = req.body.description;
      exercise.duration = Number(req.body.duration);
      exercise.date = Date.parse(req.body.date);

      exercise.save()
        .then(() => res.json('Exercise updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
}); */

// add to find texts in db matching language field
const alphabetFilter = (alphabet) => {
  return alphabet === 'noalphabet' 
    ? {} 
    : { language: alphabet }
}

module.exports = router;