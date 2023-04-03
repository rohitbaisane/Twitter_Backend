const { User } = require("../models/index");



class UserRepository {

  async createUser(data) {
    const user = await User.create(data);
    return user;
  }

  async getUser(userId) {
    const user = await User.findById(userId);
  }

  async updateUser(userId, data) {
    const user = await User.findByIdAndUpdate(userId, data, { runValidators: true }, { new: true });
    return user;
  }

  async deleteUser(userId) {
    await User.findByIdAndDelete(userId);
    return true;
  }

}

module.exports = UserRepository;