# SETUP

1. Install Node.js and MongoDB.
2. Run `npm install` to inll all required dependencies.
3. Run `npm run dev` to run webpack and compile JSX to bundle.js.
4. Run `npm start` to start the server.

## Development

- API routes are managed from `./routers/`.
- Mongoose models are created to `./models/`.
- All the front-end are composed by editing the contents of `./src`.
- There are multiple layers of reducers added. Though the implementation didn't required usage of State Management at complex level, but design is done for scale.

## Data Mocking

- All the data is mocked, and are kept in JSON files.
- From the API layer in NodeJS, the JSONs are called, instead of that we can connect to MongoDB to fetch data and return the similar data structure

## Limitations and further improvements

- Mocked data used instead of DB integration
- The design is not responsive right now
- There can be features added to add, update and delete addresses.
