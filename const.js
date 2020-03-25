const Constant = {
    localDBUrl: "mongodb://127.0.0.1:27017/performance",
    cloudDBUrl: "mongodb+srv://shubham:Tkspa2wbCn7LXZYh@cluster0-f5wfw.mongodb.net/test?retryWrites=true&w=majority",
    videoUrl: [
        {
            title: "Passenger on the bus",
            link: "https://pain-pal-cog.s3-ap-southeast-1.amazonaws.com/PassengerOnTheBusV1.mp4"
        },

        {
            title: "Unwelcome visitor",
            link: "https://pain-pal-cog.s3-ap-southeast-1.amazonaws.com/UnwelcomedVisitorV1.mp4"
        },
        {
            title: "Tug of war",
            link: "https://pain-pal-cog.s3-ap-southeast-1.amazonaws.com/TUGOWARV2.mp4"
        },
        {
            title: "Sample",
            link: "https://pain-pal-cog.s3-ap-southeast-1.amazonaws.com/_1583135549650.mp4"
        }
    ],
    error: {
        internalServerMsg: "Internal Server Error",
        mongooseErrorMsg: "Connection failed with - ",
        badRequest: "Bad Request",
        userNotFound: "User Not Found",
        userAlreadyExist: "User already exist.",
    },
    jwtKey: "PERFORMANCE",
    WEB_URL: "https://localhost:7979", //Localhost

};

module.exports = Constant;