require('dotenv').config();

const suffix = {
  production: '',
  development: '-dev',
  test: '-test',
};

const DB_SUFFIX = suffix[process.env.NODE_ENV] || suffix.production;

const options = {
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || '3306',
  database: `${process.env.DB_NAME || 'blogs-api'}${DB_SUFFIX}`,
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'P@ssw0rd',
  dialect: process.env.DB_DIALECT || 'mysql',
  dialectOptions: {
    timezone: 'Z',
  },
  logging: process.env.DEBUG !== 'false',
};

module.exports = options;
