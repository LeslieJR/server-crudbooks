const mongo = require("./mongo");
const server = require("./server");

server.set("port", 4000);
server.listen(process.env.PORT || server.get("port"), () => {
  console.log("listening to port number: ", server.get("port"));
});

async (arg1, arg2, arg3) => {
  await mongo().then(async (mongoose) => {
    try {
      console.log("Connected to mongo!!");
      await command.execute(client, message, args);
    } finally {
      mongoose.connection.close();
    }
  });
};
