const { userModal } = require('../model/userModal');

const getAllUserData = async () => {
  try {
    const users = await userModal.find();
    return {users, success: true};
  } catch (e) {
    console.log(e);
    return { success: false };
  }
}

module.exports = { getAllUserData };