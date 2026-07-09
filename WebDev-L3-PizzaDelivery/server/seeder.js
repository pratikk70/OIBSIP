const mongoose = require('mongoose');
const dotenv = require('dotenv');
const colors = require('colors');

const connectDb = require('./config/db');

const Admin = require('./schemas/adminUserSchema');
const User = require('./schemas/userSchema');
const Pizza = require('./schemas/pizzaSchema');
const Order = require('./schemas/orderSchema');
const { Base, Sauce, Cheese, Veggie } = require('./schemas/inventorySchema');

const { users, admins } = require('./data/users');
const pizzas = require('./data/pizzas');
const { base, sauce, cheese, veggie } = require('./data/inventory');

dotenv.config();

// Connect to MongoDB
connectDb();

const importData = async () => {
  try {
    // 1. Wipe existing data first to prevent duplicate key errors on re-runs
    await Admin.deleteMany();
    await Order.deleteMany();
    await Pizza.deleteMany();
    await User.deleteMany();
    await Base.deleteMany();
    await Sauce.deleteMany();
    await Cheese.deleteMany();
    await Veggie.deleteMany();

    // 2. Insert Users and Admins, capturing the Admin data
    await User.insertMany(users);
    const createdAdmins = await Admin.insertMany(admins);
    const adminId = createdAdmins[0]._id; // Grab the first admin's ObjectId

    // 3. Insert Ingredients and capture the returned documents with their ObjectIds
    const createdBases = await Base.insertMany(base);
    const createdSauces = await Sauce.insertMany(sauce);
    const createdCheeses = await Cheese.insertMany(cheese);
    const createdVeggies = await Veggie.insertMany(veggie);

    // 4. Map the string names in your raw pizza data to the new ObjectIds
    const formattedPizzas = pizzas.map(pizza => {
      return {
        ...pizza,
        createdBy: adminId,
        // Match the string name to the inserted document and extract the _id
        base: createdBases.find(b => b.name === pizza.base)?._id,
        sauces: pizza.sauces.map(sauceName => createdSauces.find(s => s.name === sauceName)?._id),
        cheeses: pizza.cheeses.map(cheeseName => createdCheeses.find(c => c.name === cheeseName)?._id),
        veggies: pizza.veggies.map(veggieName => createdVeggies.find(v => v.name === veggieName)?._id)
      };
    });

    // 5. Insert the correctly formatted pizzas
    await Pizza.insertMany(formattedPizzas);

    console.log('Dummy Data Created!'.green.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Admin.deleteMany();
    await Order.deleteMany();
    await Pizza.deleteMany();
    await User.deleteMany();
    await Base.deleteMany();
    await Sauce.deleteMany();
    await Cheese.deleteMany();
    await Veggie.deleteMany();

    console.log('Data Destroyed!'.red.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}