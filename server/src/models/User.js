module.exports = (sequelize, DataTypes) =>
    sequelize.define('User', {
        email: {
            type: DataTypes.STRING,
            unique: true
        },
        password: DataTypes.STRING
    })


// module.exports = (sequelize, DataTypes) => {
//     const User = sequelize.define('User', {
//         email: {
//             type: DataTypes.STRING,
//             unique: true
//         },
//         password: DataTypes.STRING
//     })
//     return User
// }