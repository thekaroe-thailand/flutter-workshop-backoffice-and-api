const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

module.exports = {
  create: async (req, res) => {
    try {
      const fileRoom = req.files.fileRoom;
      fileRoom.mv("./uploads/" + fileRoom.name, (err) => {
        if (err) throw err;
        return res.send({ message: "success" });
      });
    } catch (e) {
      return res.status(500).send({ error: e.message });
    }
  },
};
