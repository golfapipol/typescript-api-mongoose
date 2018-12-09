const configs = {
    app: {
        port: process.env.PORT || 3000
    },
    mongo: {
        uri: process.env.MONGO_URI || 'localhost:27017/CRMdb'
    }
}
export default  configs;