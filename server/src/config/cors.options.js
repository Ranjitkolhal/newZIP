corsOptions = {
    origin: process.env.NODE_ENV === 'production' ? "http://localhost:5173" : "http://localhost:5173",
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true
}

module.exports = corsOptions