'use strict';
module.exports = (sequelize, DataTypes) => {
  const Donor = sequelize.define(
    'Donor',
    {
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
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Email is required'
          }
        }
      },
      phoneNo: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Phone no is required'
          }
        }
      },
      lastCommsDate: {
        type: DataTypes.DATEONLY
      },
      methodOfComms: DataTypes.STRING,
      pastDonations: DataTypes.STRING
    },
    {}
  );
  Donor.associate = function(models) {
    // associations can be defined here
  };
  return Donor;
};
