import React, { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {
  const [customers, setCustomers] = useState([]);

  // Dynamic field name selection
const [selectedFields, setSelectedFields] = useState({
  name: "name",
  occupation: "occupation",
  mobile: "mobile",
  earning: "earning"
});

const handleFieldSelect = (field, value) => {
  setSelectedFields(prev => ({
    ...prev,
    [field]: value
  }));
};



  //  Form state
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    dob: "",
    gender: "",
    city: "",
    pincode: "",
    cibil: "",
    occupation: "",
    earning: "",
    email: "",
    mobile: "",
  });

  // Input change handle
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  //  POST API (UI se backend me bhejna)
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "http://localhost:4000/api/customer/add",
        formData
      );

      alert("Customer Added Successfully ");

      fetchCustomers(); // new data refresh karo

      // form clear
      setFormData({
        name: "",
        age: "",
        dob: "",
        gender: "",
        city: "",
        pincode: "",
        cibil: "",
        occupation: "",
        earning: "",
        email: "",
        mobile: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  //  GET API
  const fetchCustomers = async () => {
    try {
      const res = await axios.get(
        "http://localhost:4000/api/customer/all"
      );
      if (res.data.success) {
        setCustomers(res.data.customers);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-700">
        Customer Excel Dashboard
      </h2>

      {/*  ADD CUSTOMER FORM */}
      <div className="bg-white p-6 rounded shadow mb-8">
        <h3 className="text-xl font-semibold mb-4">Add Customer</h3>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-3 gap-4">
  <div>
  <select onChange={(e) => handleFieldSelect("name", e.target.value)} className="border p-2 mb-1 w-full">
    <option value="name">Name</option>
    <option value="fullName">Full Name</option>
  </select>

  <input name="name" placeholder="Enter Name" value={formData.name} onChange={handleChange}className="border p-2 w-full"/>
</div>

          <input name="age" placeholder="Age" value={formData.age} onChange={handleChange} className="border p-2"/>
          <input type="date" name="dob" value={formData.dob} onChange={handleChange} className="border p-2"/>
          <input name="gender" placeholder="Gender" value={formData.gender} onChange={handleChange} className="border p-2"/>
          <input name="city" placeholder="City" value={formData.city} onChange={handleChange} className="border p-2"/>
          <input name="pincode" placeholder="Pincode" value={formData.pincode} onChange={handleChange} className="border p-2"/>
          <div class="row-span-1">
          <input name="cibil" placeholder="Cibil" value={formData.cibil} onChange={handleChange} className="border p-2 "/></div>

          <div>
  <select onChange={(e) => handleFieldSelect("occupation", e.target.value)} className="border p-2 mb-1 w-full">
    <option value="occupation">Occupation</option>
    <option value="profession">Profession</option>
  </select>
          <input name="occupation" placeholder="Occupation" value={formData.occupation} onChange={handleChange} className="border p-2"/> </div>

          <div>
  <select onChange={(e) => handleFieldSelect("earning", e.target.value)} className="border p-2 mb-1 w-full">
    <option value="earning">Earning</option>
    <option value="income">Income</option>
  </select>
          <input name="earning" placeholder="Earning" value={formData.earning} onChange={handleChange} className="border p-2"/></div>

        <div>
  <select onChange={(e) => handleFieldSelect("email", e.target.value)} className="border p-2 mb-1 w-full">
    <option value="email">Email</option>
    <option value="personal gmail">Personal Gmail</option>
  </select>

          <input name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="border p-2"/></div>

          <div>
  <select onChange={(e) => handleFieldSelect("mobile", e.target.value)} className="border p-2 mb-1 w-full">
    <option value="mobile">Mobile</option>
    <option value="contact number">Contact Number</option>
  </select>
          <input name="mobile" placeholder="Mobile" value={formData.mobile} onChange={handleChange} className="border p-2"/></div>

          <button className="col-span-3 bg-green-600 text-white py-2 rounded hover:bg-green-700">
            Add Customer
          </button>
        </form>
      </div>

      {/*  TABLE */}
      <div className="bg-white shadow-xl rounded-lg overflow-x-auto border">
        <table className="min-w-full border-collapse text-sm">
          <thead className="bg-green-600 text-white">
            <tr>
              <th className="px-4 py-3 border">S.No</th>
              <th className="px-4 py-3 border">Name</th>
              <th className="px-4 py-3 border">Age</th>
              <th className="px-4 py-3 border">DOB</th>
              <th className="px-4 py-3 border">Gender</th>
              <th className="px-4 py-3 border">City</th>
              <th className="px-4 py-3 border">Pincode</th>
              <th className="px-4 py-3 border">Cibil</th>
              <th className="px-4 py-3 border">Occupation</th>
              <th className="px-4 py-3 border">Earning</th>
              <th className="px-4 py-3 border">Email</th>
              <th className="px-4 py-3 border">Mobile</th>
            </tr>
          </thead>

          <tbody>
            {customers.map((item, index) => (
              <tr key={index} className="text-center even:bg-gray-50">
                <td className="border px-2">{index + 1}</td>
                <td className="border px-2">{item.name}</td>
                <td className="border px-2">{item.age}</td>
                <td className="border px-2">{item.dob}</td>
                <td className="border px-2">{item.gender}</td>
                <td className="border px-2">{item.city}</td>
                <td className="border px-2">{item.pincode}</td>
                <td className="border px-2">{item.cibil}</td>
                <td className="border px-2">{item.occupation}</td>
                <td className="border px-2">₹ {item.earning}</td>
                <td className="border px-2">{item.email}</td>
                <td className="border px-2">{item.mobile}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}


export default Dashboard;


