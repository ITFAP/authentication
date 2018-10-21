const router = require('express').Router();
const pass = require('passport');

router.get('/login', (req, res) => {
  res.render('login')
})

router.get('/google', pass.authenticate('google', {
  scope: ['profile']
}))

router.get('/google/redirect', (req, res) => {
  res.render('index')
})

module.exports = router;
