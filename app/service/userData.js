"use strict";
const { userModal } = require('../model/userModal');

const getAllUserData = async () => {
  try {
    const users = await userModal.find();
    return {users, success: true};
  } catch (e) {
    console.log(e);
    return { success: false };
  }
};

const postUserData = async (user) => {
  try {
    const response = await userModal.create({ ...user, joiningDate: new Date() });
    return {success: true, response}
  } catch(e) {
    console.log(e);
    return { success: false };
  }
};

const deleteUserData = async (userId) => {
  try {
    const response = await userModal.findOneAndDelete({userId});
    return {response, success: true}
  } catch (e) {
    console.log(e);
    return { success: false };
  }
}

module.exports = {
  getAllUserData,
  postUserData,
  deleteUserData,
};