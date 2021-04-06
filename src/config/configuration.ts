export default () => ({
     mongourl: process.env.MONGO_URL,
     supersecret: process.env.SUPER_SECRET_KEY,
     privatetoken: process.env.PRIVATE_TOKEN,
});
