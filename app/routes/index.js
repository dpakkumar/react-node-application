const router = require('express').Router();
const { getAllUserData, postUserData, deleteUserData } = require('../service/userData');

router.get('/users', async (req, res) => {
  try {
    const data = await getAllUserData();
    if(data.success)
      res.status(200).send(data.users);
    res.status(500)
  } catch(error) {
    res.status(500).send(error);
  }
});

router.post('/users', async (req, res) => {
  try {
    const response = await postUserData(req.body);
    if(response.success)
      res.status(200).send(response.response);
    res.status(500)
  } catch(error) {
    res.status(500).send(error);
  }
});

router.delete('/users/:id', async (req, res) => {
  try {
    const response = await deleteUserData(req.params.id);
    if(response.success)
      res.status(200).send(response.response);
    res.status(500);
  } catch(error) {
    res.status(500).send(error);
  }
})

module.exports = router;