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
  Text.findById(req.params.id, { bodyShort: 0 })
    .then(texts => res.json(texts))
    .catch(err => res.status(400).json('Error: ' + err));
});

// upload new text
router.route('/add').post((req, res) => {
  console.log(req.body)
  const newText = new Text(
    {
      ...req.body,
      bodyShort: bodyShort(req.body.bodyFull),
      words: words(req.body.bodyFull)
    }
  );
  newText.save()
    .then(() => res.json('Text added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// update text
router.route('/update/:id').post((req, res) => {
  Text.findByIdAndUpdate(
    req.params.id, 
    {...req.body}, 
    {useFindAndModify: false}
  )
    .then(() => {
      console.log('server: new record save in db: ', req.body)
    }) 
    .catch(err => res.status(400).json('server error: ' + err));
});               
              

/* 
router.route('/:id').delete((req, res) => {
  Text.findByIdAndDelete(req.params.id)
    .then(() => res.json('Text deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});
*/


/**
 *  functions for searching
 * 
*/

// add alphabet filter
const alphabetFilter = (alphabet) => {
  return alphabet === 'noalphabet'
    ? {}
    : { language: alphabet }
}

// add search field filter (caption, bodyShort, tags only)
const searchFilter = (keyWords) => {
  const searchParams = {
    $regex: keyWords, 
    $options: "$i"
  }

  if (keyWords !== 'nosearch') {
    return { 
      $or: [
        {caption: searchParams},
        {bodyShort: searchParams},
        {tags: searchParams},
      ] 
    }
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

/**
 *  functions for upload new text
 * 
*/

// trim bodyFull for bodyShort
const bodyShort = (bodyFull) => {
  return bodyFull.length > 420 ? bodyFull.slice(0, 420) + ' . . .' : bodyFull
}

const words = bodyFull => bodyFull.split(' ').length

module.exports = router;