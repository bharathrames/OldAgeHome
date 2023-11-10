import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { AiOutlineLeft } from 'react-icons/ai';

const BackButton = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const HeroBanner = styled.p`
  font-size: 24px;
  font-weight: bold;
  color: #333;
`;

const Heading = styled.h5`
  font-size: 20px;
  margin-bottom: 10px;
`;

const TableWrapper = styled.div`
  margin-top: 20px;
`;

const TableCellHeading = styled.th`
  background-color: #4caf50;
  color: white;
  padding: 10px;
`;

const TableCell = styled.td`
  padding: 10px;
  border: 1px solid #ddd;
`;

const AdditionalInfoWrapper = styled.div`
  margin-top: 20px;
`;

const AdditionalInfoHeading = styled.h5`
  font-size: 18px;
  color: #333;
  margin-top: 10px;
`;

const AdditionalInfoItem = styled.p`
  font-size: 16px;
  margin-bottom: 5px;
`;
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
          memberCount: requirement.memberCount,
          paymentNumber: requirement.paymentNumber,
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
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
        <BackButton>
          <Link to="/">
            <AiOutlineLeft /> Back
          </Link>
        </BackButton>
        <HeroBanner>Hero Banner</HeroBanner>
        <hr />
        <div>
          <Heading>Home Name: {selectedHomeName}</Heading>
          {selectedHomeName && (
            <div>
              <Heading>Home Description: {groupedRequirements[selectedHomeName].homeDescription}</Heading>
            </div>
          )}
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
        <Heading>
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
        </Heading>
      </motion.div>
      <TableWrapper>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <table>
            <thead>
              <tr>
                <TableCellHeading>Priority</TableCellHeading>
                <TableCellHeading>DateofPosting</TableCellHeading>
                <TableCellHeading>ItemCat</TableCellHeading>
                <TableCellHeading>Item</TableCellHeading>
                <TableCellHeading>Unit</TableCellHeading>
                <TableCellHeading>SKU(Stock keeping unit)</TableCellHeading>
                <TableCellHeading>Budget</TableCellHeading>
              </tr>
            </thead>
            <tbody>
              {selectedHomeName
                ? groupedRequirements[selectedHomeName].items.map((item, index) => (
                    <tr key={index}>
                      <TableCell>{item.priority}</TableCell>
                      <TableCell>{item.dateOfPosting}</TableCell>
                      <TableCell>{item.itemCat}</TableCell>
                      <TableCell>{item.item}</TableCell>
                      <TableCell>{item.unit}</TableCell>
                      <TableCell>{item.SKU}</TableCell>
                      <TableCell>{item.budget}</TableCell>
                    </tr>
                  ))
                : requirements.map((item, index) => (
                    <tr key={index}>
                      <TableCell>{item.priority}</TableCell>
                      <TableCell>{formatDate(item.dateOfPosting)}</TableCell>
                      <TableCell>{item.itemCat}</TableCell>
                      <TableCell>{item.item}</TableCell>
                      <TableCell>{item.unit}</TableCell>
                      <TableCell>{item.SKU}</TableCell>
                      <TableCell>{item.budget}</TableCell>
                    </tr>
                  ))}
            </tbody>
          </table>
        </motion.div>
        <AdditionalInfoWrapper>
        {selectedHomeName && (
          <div>
            <AdditionalInfoHeading>Contact Information</AdditionalInfoHeading>
            <AdditionalInfoItem>Contact: {groupedRequirements[selectedHomeName].contact}</AdditionalInfoItem>
            <AdditionalInfoItem>Address: {groupedRequirements[selectedHomeName].address}</AdditionalInfoItem>

            <AdditionalInfoHeading>Bank Account Details</AdditionalInfoHeading>
            <AdditionalInfoItem>Bank Name: {groupedRequirements[selectedHomeName].bankDetails.bankName}</AdditionalInfoItem>
            <AdditionalInfoItem>Account No: {groupedRequirements[selectedHomeName].bankDetails.accountNo}</AdditionalInfoItem>
            <AdditionalInfoItem>IFSC code: {groupedRequirements[selectedHomeName].bankDetails.ifscCode}</AdditionalInfoItem>
            <AdditionalInfoItem>Branch Name: {groupedRequirements[selectedHomeName].bankDetails.branchName}</AdditionalInfoItem>

            <AdditionalInfoHeading>Payment Information</AdditionalInfoHeading>
            <AdditionalInfoItem>
              Gpay, Phonepay, Paytm Number: {groupedRequirements[selectedHomeName].paymentNumber}
            </AdditionalInfoItem>

            <AdditionalInfoHeading>Member Information</AdditionalInfoHeading>
            <AdditionalInfoItem>Member Count: {groupedRequirements[selectedHomeName].memberCount}</AdditionalInfoItem>
          </div>
        )}
      </AdditionalInfoWrapper>
      </TableWrapper>
    </>
  );
};

export default RequirementsPage;
