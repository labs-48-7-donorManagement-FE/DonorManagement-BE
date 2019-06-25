import { hashPassword } from '../helpers/utils'; 

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'First name is required.'
        }
      }
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Last name is required'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        isEmail: {
          msg: 'Email field must be an email.'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Password is required.'
        }
      }
    },
    isBoard: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {});
  User.beforeCreate(async (newUser) => {
    newUser.password = hashPassword(newUser.password);
  })

  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};
