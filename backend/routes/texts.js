const router = require('express').Router();
const Text = require('../models/text.model');

// get all texts
router.route('/').get((req, res) => {
  Text
    .find(
      alphabetFilter(req.query.alphabet),
      { bodyFull: 0 }
    )
    .find(searchFilter(req.query.search))
    .sort(sortByFilter(req.query.sortBy))
    .then(texts => res.json(texts))
    .catch(err => res.status(400).json('Error: ' + err));
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

// add alphabet filter
const alphabetFilter = (alphabet) => {
  return alphabet === 'noalphabet'
    ? {}
    : { language: alphabet }
}

// add search field filter (caption, bodyShort, tags only)
const searchFilter = (keyWords) => {
  console.log(keyWords)
  if (keyWords !== 'nosearch') {
    return { caption: { $regex: keyWords, $options: "$i" } }
  }
}

// add sorting filter
const sortByFilter = (sort) => {
  switch (sort) {
    case 'nosort': return {}
    case 'rate': return { rate: -1 }
    case 'date': return { createdAt: -1 }
    default: return {}
  }
}

module.exports = router;