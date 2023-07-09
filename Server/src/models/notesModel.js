

module.exports = (sequelize, DataTypes) => {

    const Notes = sequelize.define('notes', {
          textData: {
                type: DataTypes.STRING,
                allowNull: false
          },
          isDeleted:{
                type: DataTypes.BOOLEAN,
                defaultValue:false
          }
    }, {
          tableName: 'notes',
          timestamps: true
    })
    return Notes;
}