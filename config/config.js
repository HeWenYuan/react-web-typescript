const environment = {
  development: {
    name: "development",
    host: "http://localhost",
    port: "5000"
  },
  production: {
    name: "production",
    host: "http://localhost",
    port: "5000"
  }
}[process.env.NODE_ENV || 'development'];

const common = {
  project: "react-web-typescript"
};
module.exports = Object.assign(common, environment);