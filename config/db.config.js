const config = {
    url: "mongodb://localhost:27017/text-checker?readPreference=primary&appname=MongoDB%20Compass&ssl=false",
    options: {
        useNewUrlParser: true,
        useCreateIndex: true,
        poolSize: 10,
        keepAlive: true,
        useUnifiedTopology: true,
        keepAliveInitialDelay: 3e6,
    }
}

module.exports = config