const axios = require("axios");

const ClientAxios = axios.create({
  baseURL:
    "https://cors-anywhere.herokuapp.com/http://18.204.47.116:8091/grweb",
  headers: { store: "0001", Accept: "application/json" }
});

module.exports = ClientAxios;
