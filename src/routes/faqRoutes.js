const express = require('express');
const router = express.Router();
const { createFaq, getFaqs } = require('../controllers/faqController');
const { validateFaq } = require('../middlewares/validator');

router.post('/', validateFaq, createFaq);
router.get('/', getFaqs);

module.exports = router;


const { body } = require('express-validator');

exports.validateFaq = [
  body('question').notEmpty().trim(),
  body('answer').notEmpty().trim(),
];