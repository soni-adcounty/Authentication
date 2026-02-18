import customerModel from "../models/customerModel.js";

// Add customer
export const addCustomer = async (req, res) => {
  try {
    const customer = new customerModel(req.body);
    await customer.save();
    res.json({ success: true });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

// Get all customers
export const getCustomers = async (req, res) => {
  try {
    const customers = await customerModel.find();
    res.json({ success: true, customers });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};
