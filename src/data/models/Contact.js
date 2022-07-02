module.exports = (sequelize, dataTypes) => {
    let alias = 'Contact';
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        numberCall: {
            type: dataTypes.STRING(100),
            allowNull: true
        },
        email: {
            type: dataTypes.STRING(100),
            allowNull: true
        }
    };
    let config = {
        timestamps: false
        
    }
    const Contact = sequelize.define(alias, cols, config); 

    Contact.associate=((models)=>{
        
        Contact.belongsTo(models.User,
            {
                as: "user",
                foreignKey: "user_id",
            }
        )

    })
 
    return Contact
};