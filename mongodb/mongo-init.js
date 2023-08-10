db.createUser(
    {
        user: "devoneconference",
        pwd: "devoneconference",
        roles: [
            {
                role: "readWrite",
                db: "devoneconference"
            }
        ]
    }
);