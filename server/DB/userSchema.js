const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    _id: Number,
    firstName: String,
    lastName: String,
    email: String,
    phone: Number,
    address: { city: String, street: String, number: Number },
    hight: Number,
    weight: { startWeight: Number, meetings: [{ date: { type: Date, default: Date.now }, weight: Number }] },
    mealsDiary: [{ date: { type: Date, default: Date.now }, Breakfast: [String], Lunch: [String], Dinner: [String] }]
});

const user = mongoose.model('User', userSchema);