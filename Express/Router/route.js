
const express = require("express");

const router = express.Router();

// router.get('/product/:slug', (req, res) => {
//     const slug = req.params.slug; // URL se slug nikal lo
//     res.send(`Product slug is: ${slug}`);
// });

//dynamic route
router.get('/user/:id', (req, res) => {
  const userId = req.params.id;
  res.send(`User ID is: ${userId}`);
});

router.get('/product', (req, res) => {
    res.send('Product page');
});
router.get('/product/page1', (req, res) => {
    res.send('Product one page')
})

router.get('/product/page2', (req, res) => {
    res.send('Product two page')
})

router.get('/product/page3', (req, res) => {
    res.send('Product three page')
})

router.get('/product/page4', (req, res) => {
    res.send('Product four page')
})


module.exports = router