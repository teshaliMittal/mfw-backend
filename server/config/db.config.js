module.exports = {
    HOST: "localhost",
    USER: "agenet5",
    PASSWORD: "Moment4Women",
    DB: "agenet5_momentforwomen",
    dialect: "postgres",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};