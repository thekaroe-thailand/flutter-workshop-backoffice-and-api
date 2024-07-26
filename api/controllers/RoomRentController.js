const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

module.exports = {
  list: async (req, res) => {
    try {
      const results = await prisma.roomRent.findMany({
        include: {
          RoomRentDetails: {
            include: {
              Room: true,
            },
          },
        },
      });

      return res.send({ results: results });
    } catch (e) {
      return res.status(500).send({ error: e.message });
    }
  },
  checkFreeRoom: async (req, res) => {
    const roomId = passeInt(req.params.id);
    const checkinDate = req.body.checkinDate;
    const checkoutDate = req.body.checkoutDate;
  },
  rent: async (req, res) => {
    const customerName = req.body.customerName;
    const customerPhone = req.body.customerPhoe;
    const rooms = req.body.rooms;
  },
};
