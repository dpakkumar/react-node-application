const router = require('express').Router();
const { getAllUserData } = require('../service/userData');

router.get('/users', async (req, res) => {
  try {
    const data = await getAllUserData();
    if(data.success)
      res.status(200).send(data.users);
    res.status(500)
  } catch(error) {
    res.status(500).send({error})
  }
});

module.exports = router;