// eslint-disable-next-line
const postgres = require('postgres');

const getSql = (): any => {
  const sql = postgres('postgres://username:password@host:port/database', {
    host: 'saturn.perinazzo.com', // Postgres ip address or domain name
    port: 45432, // Postgres server port
    path: '', // unix socket path (usually '/tmp')
    database: 'BioChipDerivation', // Name of database to connect to
    username: 'postgres', // Username of database user
    password: 'postgres', // Password of database user
    ssl: false, // True, or options for tls.connect
    max: 10, // Max number of connections
    timeout: 0, // Idle connection timeout in seconds
    types: [], // Array of custom types, see more below
    connection: {
      application_name: 'postgres.js', // Default application_name
      // Other connection parameters
    },
  });
  return sql;
};

export default getSql;
