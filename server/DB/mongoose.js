async = () => {
    const url = `mongodb://localhost:${process.env.HOST || 27017}/${process.env.DB || ""}`;
    await mongoose.connect(url);
    console.log(`mongoose DB connected!`);
};