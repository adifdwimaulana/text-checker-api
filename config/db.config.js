const config = {
    url: "mongodb://localhost:27017/text-checker?readPreference=primary&appname=MongoDB%20Compass&ssl=false",
    // url: "mongodb://textchecker:textchecker@checkerdb-shard-00-00.eie7n.mongodb.net:27017,checkerdb-shard-00-01.eie7n.mongodb.net:27017,checkerdb-shard-00-02.eie7n.mongodb.net:27017/text-checker?authSource=admin&replicaSet=atlas-13lshf-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true",
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