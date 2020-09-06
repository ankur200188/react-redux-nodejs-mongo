// This file is for development usage
// Configure enviroment variables separatedly on production

/* Set the name of your database */
const dbname = 'conviva';

/* Export API keys here */
module.exports = {
    mongoURI: `mongodb://localhost:27017/${dbname}`,
    apiURL: 'http://localhost:3000'
};
