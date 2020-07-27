module.exports = {
    HOST: "localhost",
    USER: "mfw",
    PASSWORD: "Moment4Women",
    DB: "api",
    dialect: "postgres",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};