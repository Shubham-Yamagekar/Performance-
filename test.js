const { MongoClient } = require("mongodb");

describe("insert", () => {
    let connection;
    let db;

    beforeAll(async () => {
        connection = await MongoClient.connect(
            "mongodb+srv://shubham:Tkspa2wbCn7LXZYh@cluster0-f5wfw.mongodb.net/test?retryWrites=true&w=majority",
            {
                useNewUrlParser: true
            }
        );
        db = await connection.db("test");
    });

    afterAll(async () => {
        await connection.close();
        await db.close();
    });

    it("should insert a doc into collection", async () => {
        const products = db.collection("videos");

        const mockUser = { name: "chiku", price: "900" };
        await products.insertOne(mockUser);

        const insertedUser = await products.findOne({ name: "chiku" });
        expect(insertedUser).toEqual(mockUser);
    });
});
