# Cartografia da Cultura Backend

Desenvolvimento da plataforma Cartografia da Cultura de Campo Grande-MS.

This project is made with [Nest](https://github.com/nestjs/nest) and MongoDB.

## Installation

```bash
$ npm install
```

### Cleaning and setting up the database initial data:

```bash
$ npm run reset:database
```

### Environment variables

Take a look at `.env.development` file:

 - Create a copy and name it as `.env.development.local` - the `.local` file is git ignored;
 - Do not change the `.env.development` file;
 - Then fill your `.local` env file with your database connection strings (we recommend the [Mongo Cloud service](https://cloud.mongodb.com/));
 - Also we are using a NodeMailer service to sent emails, thus email information is required for testing;

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Client application

The client application is in [another git repository](https://github.com/vanessametonini/PlataformaCultural).

## License

Cartografia da Cultura de Campo Grande is [MIT licensed](LICENSE).
