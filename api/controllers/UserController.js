const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = {
    signIn: async (req, res) => {
        try {
            const row = await prisma.user.findFirst({
                select: {
                    id: true,
                    name: true,
                    user: true,
                    level: true
                },
                where: {
                    user: req.body.username,
                    pass: req.body.password,
                    status: 'use'
                }
            });

            if (row != undefined) return res.send('login success');
            return res.status(401).send('unauthorized');
        } catch (e) {
            return res.status(500).send({ error: e.message });
        }
    }
}