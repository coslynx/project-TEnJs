const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Function to get the current prefix
const getPrefix = async () => {
    try {
        const prefix = await prisma.prefix.findUnique({
            where: {
                id: 1, // Assuming there is only one prefix in the database
            },
        });
        return prefix.value;
    } catch (error) {
        console.error('Error getting prefix:', error);
        return '!';
    }
};

// Function to set a new prefix
const setPrefix = async (newPrefix) => {
    try {
        await prisma.prefix.upsert({
            where: {
                id: 1,
            },
            update: {
                value: newPrefix,
            },
            create: {
                id: 1,
                value: newPrefix,
            },
        });
        console.log('Prefix set successfully');
    } catch (error) {
        console.error('Error setting prefix:', error);
    }
};

module.exports = { getPrefix, setPrefix };