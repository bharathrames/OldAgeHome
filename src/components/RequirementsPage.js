import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const RequirementsPage = () => {
  const [requirements, setRequirements] = useState([]);
  const [selectedHomeName, setSelectedHomeName] = useState(null);

  useEffect(() => {
    let apiUrl = 'http://localhost:3001/api/requirements';
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setRequirements(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    const day = date.getUTCDate().toString().padStart(2, '0');
    const month = (date.getUTCMonth() + 1).toString().padStart(2, '0');
    const year = date.getUTCFullYear();
    return `${day}/${month}/${year}`;
  };

  const groupRequirementsByHome = () => {
    const groupedRequirements = {};
    requirements.forEach((requirement) => {
      const homeName = requirement.homeName;
      if (!groupedRequirements[homeName]) {
        groupedRequirements[homeName] = {
          homeDescription: requirement.homeDescription,
          contact: requirement.contact,
          address: requirement.address,
          bankDetails: requirement.bankDetails,
          items: [],
        };
      }
      groupedRequirements[homeName].items.push({
        priority: requirement.priority,
        dateOfPosting: formatDate(requirement.dateOfPosting),
        itemCat: requirement.itemCat,
        item: requirement.item,
        unit: requirement.unit,
        SKU: requirement.SKU,
        budget: requirement.budget,
      });
    });
    return groupedRequirements;
  };

  const groupedRequirements = groupRequirementsByHome();

  return (
    <>
      <div>
        <button className="backbutton">
          <Link to="/">⬅️ Back</Link>
        </button>
        <p className="herobanner">Hero Banner</p>
        <hr />
        <div>
          <h3>Home Name: {selectedHomeName}</h3>
          {selectedHomeName && (
            <div>
              <h3>Home Description: {groupedRequirements[selectedHomeName].homeDescription}</h3>
            </div>
          )}
        </div>
      </div>
      <div>
        <h3>
          HOME{' '}
          <span>
            <select onChange={(e) => setSelectedHomeName(e.target.value)}>
              <option value="">All</option>
              {Object.keys(groupedRequirements).map((homeName, index) => (
                <option key={index} value={homeName}>
                  {homeName}
                </option>
              ))}
            </select>
          </span>
        </h3>
      </div>
      <table>
        <thead>
          <tr>
            <th className="coloumnheading">Priority</th>
            <th className="coloumnheading">DateofPosting</th>
            <th className="coloumnheading">ItemCat</th>
            <th className="coloumnheading">Item</th>
            <th className="coloumnheading">Unit</th>
            <th className="coloumnheading">SKU(Stock keeping unit)</th>
            <th className="coloumnheading">Budget</th>
          </tr>
        </thead>
        <tbody>
          {selectedHomeName
            ? groupedRequirements[selectedHomeName].items.map((item, index) => (
                <tr key={index}>
                  <td>{item.priority}</td>
                  <td>{item.dateOfPosting}</td>
                  <td>{item.itemCat}</td>
                  <td>{item.item}</td>
                  <td>{item.unit}</td>
                  <td>{item.SKU}</td>
                  <td>{item.budget}</td>
                </tr>
              ))
            : requirements.map((item, index) => (
                <tr key={index}>
                  <td>{item.priority}</td>
                  <td>{formatDate(item.dateOfPosting)}</td>
                  <td>{item.itemCat}</td>
                  <td>{item.item}</td>
                  <td>{item.unit}</td>
                  <td>{item.SKU}</td>
                  <td>{item.budget}</td>
                </tr>
              ))}
        </tbody>
      </table>
      <div>
      {selectedHomeName && (
            <div>
              <h3>Contact: {groupedRequirements[selectedHomeName].contact}</h3>
              <h3>Address: {groupedRequirements[selectedHomeName].address}</h3>
              <h3>Bank Acc Details</h3>
              <h5>Bank Name: {groupedRequirements[selectedHomeName].bankDetails.bankName}</h5>
              <h5>Account No: {groupedRequirements[selectedHomeName].bankDetails.accountNo}</h5>
              <h5>IFSC code: {groupedRequirements[selectedHomeName].bankDetails.ifscCode}</h5>
              <h5>Branch Name: {groupedRequirements[selectedHomeName].bankDetails.branchName}</h5>
            </div>
          )}
      </div>
    </>
  );
};

export default RequirementsPage;
