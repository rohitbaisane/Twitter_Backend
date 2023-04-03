const { UserService } = require('../repository/index');

class UserService {

  constructor() {
    this.userService = new UserService();
  }
  async createUser(data) {
    const user = await this.userService.createUser(data);
    return user;
  }

  async getUser(userId) {
    const user = await this.userService.getUserById(userId);
    return user;
  }

  async updateUser(userId, data) {
    const user = await this.userService.findByIdAndUpdate(userId);
    return user;
  }

  async deleteUser(userId) {
    const resonse = await this.userService.deleteUser(userId);
    return true;
  }

}

module.exports = UserService;