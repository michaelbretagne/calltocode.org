const UserModel = require('../database/models/User')

const newPasswordController = {
  _init (User = UserModel) {
    this.User = User
    return this
  }
}

module.exports = newPasswordController
