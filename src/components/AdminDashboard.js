import React, { useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const isAdminAuthenticated = localStorage.getItem('isAdminAuthenticated') === 'true';
  const navigate = useNavigate();

  if (!isAdminAuthenticated) {
    navigate('/adminlogin');
  }

  const [requirement, setRequirement] = useState({
    homeName: '',
    homeDescription: '',
    priority: '',
    dateOfPosting: '',
    itemCat: '',
    item: '',
    unit: '',
    SKU: '',
    budget: 0,
    contact: '',
    address: '',
    bankDetails: {
      bankName: '',
      accountNo: '',
      ifscCode: '',
      branchName: '',
    },
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith('bankDetails.')) {
      const bankDetailsKey = name.split('.')[1];
      setRequirement((prevState) => ({
        ...prevState,
        bankDetails: {
          ...prevState.bankDetails,
          [bankDetailsKey]: value,
        },
      }));
    } else {
      setRequirement({
        ...requirement,
        [name]: name === 'budget' ? parseFloat(value) : value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if any required field is empty
    for (const key in requirement) {
      if (requirement[key] === '') {
        alert('Please fill in all required fields');
        return;
      }
    }

    try {
      const response = await fetch('https://oldagehome.onrender.com/api/requirements', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requirement),
      });

      if (response.ok) {
        alert('Requirement added successfully');
      } else {
        alert('Failed to add requirement');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h1>Admin Dashboard <span> <Link to="/adminlogin">Logout</Link></span></h1>
      <h2>Add a New Requirement</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Home Description:</label>
          <input type="text" name="homeDescription" value={requirement.homeDescription} onChange={handleInputChange} required />
        </div>
        <div>
          <label>Home Name:</label>
          <input type="text" name="homeName" value={requirement.homeName} onChange={handleInputChange} required />
        </div>
        <div>
          <label>Priority:</label>
          <input type="text" name="priority" value={requirement.priority} onChange={handleInputChange} required />
        </div>
        <div>
          <label>Date of Posting:</label>
          <input type="date" name="dateOfPosting" value={requirement.dateOfPosting} onChange={handleInputChange} required />
        </div>
        <div>
          <label>Item Category:</label>
          <input type="text" name="itemCat" value={requirement.itemCat} onChange={handleInputChange} required />
        </div>
        <div>
          <label>Item:</label>
          <input type="text" name="item" value={requirement.item} onChange={handleInputChange} required />
        </div>
        <div>
          <label>Unit:</label>
          <input type="text" name="unit" value={requirement.unit} onChange={handleInputChange} required />
        </div>
        <div>
          <label>SKU:</label>
          <input type="text" name="SKU" value={requirement.SKU} onChange={handleInputChange} />
        </div>
        <div>
          <label>Budget:</label>
          <input type="number" name="budget" value={requirement.budget} onChange={handleInputChange} required />
        </div>
        <div>
          <label>Contact:</label>
          <input type="text" name="contact" value={requirement.contact} onChange={handleInputChange} />
        </div>
        <div>
          <label>Address:</label>
          <input type="text" name="address" value={requirement.address} onChange={handleInputChange} />
        </div>
        <div>
          <label>Bank Name:</label>
          <input type="text" name="bankDetails.bankName" value={requirement.bankDetails.bankName} onChange={handleInputChange} />
        </div>
        <div>
          <label>Account No:</label>
          <input type="text" name="bankDetails.accountNo" value={requirement.bankDetails.accountNo} onChange={handleInputChange} />
        </div>
        <div>
          <label>IFSC Code:</label>
          <input type="text" name="bankDetails.ifscCode" value={requirement.bankDetails.ifscCode} onChange={handleInputChange} />
        </div>
        <div>
          <label>Branch Name:</label>
          <input type="text" name="bankDetails.branchName" value={requirement.bankDetails.branchName} onChange={handleInputChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
      <Outlet />
    </div>
  );
};

export default AdminDashboard;
