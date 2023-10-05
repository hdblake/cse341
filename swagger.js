const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "Contacts API",
    description: "Documentation to utilize API"
  },
  host: "cse341-o9h4.onrender.com",
  schemes: "https"
};

const outputFile = "./swagger.json";
const endpointFiles = ["./routes/index.js"];

swaggerAutogen(outputFile, endpointFiles, doc);

// Builds documentation at startup
// swaggerAutogen(outputFile, endpointFiles, doc).then(() => {
//   require("./server.js");
// });
