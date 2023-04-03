const { UserService } = require("./user-service");

const userService = new UserService();


const getUser = async (req, res) => {
  const userId = req.params.id;
  const userRecord = await userService.getUser(userId);
  return res.status(200).json({
    success: true,
    data: userRecord,
    message: 'User fetched successfully',
  });
};

const createUser = async (req, res) => {
  const { name, email, password } = req.body;
  const userData = {
    name,
    email,
    password
  };
  const userRecord = await userService.createUser(userData);
  return res.status(201).json({
    success: true,
    data: userRecord,
    message: 'User created succesfully',
  });
}

const updateUser = async (req, res) => {
  const data = req.body.data;
  const userId = req.body.id;
  const userRecord = await userService.updateUser(userId, data);
  return res.status(201).json({
    success: true,
    data: userRecord,
    message: 'User updated a successfully',
  });

}

const deleteUser = async (req, res) => {
  const userId = req.params.id;
  const response = await userService.deleteUser(userId);
  return res.stauts(201).json({
    success: true,
    data: response,
    message: 'User deleted a successfully',
  });
}


module.exports = {
  getUser,
  createUser,
  updateUser,
  deleteUser,
}

