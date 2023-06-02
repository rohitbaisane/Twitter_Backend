const { UserRepository } = require('../repository/index');

class UserService {

  constructor() {
    this.userRepository = new UserRepository();
  }
  async createUser(data) {
    const user = await this.userRepository.createUser(data);
    return user;
  }

  async getUser(userId) {
    const user = await this.userRepository.getUserById(userId);
    return user;
  }

  async updateUser(userId, data) {
    const user = await this.userRepository.findByIdAndUpdate(userId);
    return user;
  }

  async deleteUser(userId) {
    const resonse = await this.userRepository.deleteUser(userId);
    return true;
  }

}

module.exports = UserService;