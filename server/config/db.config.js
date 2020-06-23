module.exports = {
    HOST: "premium42.agenetwork.org",
    USER: "agenet5_mfw-user",
    PASSWORD: "Moment4Women",
    DB: "agenet5_momentForWomen",
    dialect: "postgres",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};