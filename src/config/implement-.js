try {
    var url;
    if (process.env.DB_HOST.includes(',')) {
        //replica set
        const DB_HOST = process.env.DB_HOST.split(',')
        const DB_PASSWORD = encodeURIComponent(process.env.DB_PASSWORD);
        const DB_PORT = process.env.DB_PORT
        url = `mongodb://${process.env.DB_USERNAME}:${DB_PASSWORD}@${DB_HOST[0]}:${DB_PORT},${DB_HOST[1]}:${DB_PORT},${DB_HOST[2]}:${DB_PORT}/${process.env.DB_DATABASE}?replicaSet=${process.env.MONGO_INITDB_AUTHSOURCE}&authSource=${process.env.MONGO_INITDB_AUTHSOURCE}`;
    } else
        url = `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}?authSource=${process.env.MONGO_INITDB_AUTHSOURCE}`;

    var option = {
        user: process.env.DB_USERNAME,
        pass: process.env.DB_PASSWORD,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
    };
    mongoose.connect(url, option);
    mongoose.connection.on("connected", function () {
        console.log("DB Connection");
    });
    mongoose.connection.on("error", function (err) {
        console.log("DB Connection error: " + err);
    });
    // console.log('DB Connect');
} catch (error) {
    console.log(error);
}
