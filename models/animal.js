module.exports = function(sequelize, DataTypes) {
  var Animals = sequelize.define(
    "Animals",
    {
      img: DataTypes.STRING,
      type: DataTypes.STRING,
      name: DataTypes.STRING,
      color: DataTypes.STRING,
      size: DataTypes.STRING,
      description: DataTypes.TEXT,
      lostFound: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
      },
      lastSeen: DataTypes.TEXT,
      contactInfo: DataTypes.TEXT,
      zip: DataTypes.STRING
    },
    {
      timestamps: false
    }
  );
  return Animals;
};
