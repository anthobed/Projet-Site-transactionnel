const { app } = require("../app");

app.use((err, req, res, next) => {
  if (err) {
    const result = err.errors ? Object.values(err.errors).map(e => e.message) : [ err.message ]
    res.status(500).send(result);
  }
});
