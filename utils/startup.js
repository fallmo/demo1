module.exports = {
  checkEnvironment: function () {
    const required = ["MONGO_URI"];
    for (const key of required) {
      const exists = process.env[key];
      if (exists) continue;
      console.error(`Missing Environment Variable '${key}'`);
      process.exit(1);
    }
  },
};
