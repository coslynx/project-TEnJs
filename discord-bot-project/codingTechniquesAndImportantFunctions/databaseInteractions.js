const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const createUser = async (userData) => {
  try {
    const user = await prisma.user.create({
      data: {
        username: userData.username,
        email: userData.email,
        role: userData.role,
      },
    });
    return user;
  } catch (error) {
    console.error(error);
    throw new Error('Could not create user');
  }
};

const updateUser = async (userId, newData) => {
  try {
    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: newData,
    });
    return updatedUser;
  } catch (error) {
    console.error(error);
    throw new Error('Could not update user');
  }
};

const deleteUser = async (userId) => {
  try {
    const deletedUser = await prisma.user.delete({
      where: { id: userId },
    });
    return deletedUser;
  } catch (error) {
    console.error(error);
    throw new Error('Could not delete user');
  }
};

const getAllUsers = async () => {
  try {
    const users = await prisma.user.findMany();
    return users;
  } catch (error) {
    console.error(error);
    throw new Error('Could not get users');
  }
};

const getUserById = async (userId) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });
    return user;
  } catch (error) {
    console.error(error);
    throw new Error('Could not get user by id');
  }
};

module.exports = {
  createUser,
  updateUser,
  deleteUser,
  getAllUsers,
  getUserById,
};