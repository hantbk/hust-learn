const {PrismaClient} = require('@prisma/client');
const db = new PrismaClient();

async function main() {
    try {
        await db.category.createMany({
            data: [
                {name: "Computer Science"},
                {name: "Machine Learning"},
                {name: "Deep Learning"},
                {name: "Data Science"},
                {name: "Data Analytics"},
                {name: "Web Development"},
                {name: "Mobile Development"},
                {name: "Game Development"},
                {name: "Software Engineering"},
            ]
        });
        console.log("Categories seeded successfully");
    } catch (error) {
        console.log("Error seeding the database categories", error);
    } finally{
        await db.$disconnect();
    }
}

main();
