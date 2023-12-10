// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import styled from 'styled-components';
// import { motion } from 'framer-motion';
// import { AiOutlineLeft } from 'react-icons/ai';

// const FilterWrapper = styled.div`
//   display: flex;
//   gap:15px;
// `;

// const HeroBanner = styled.div`
//   background-image: url('https://cdn.pixabay.com/photo/2016/01/28/10/20/old-man-1166066_640.jpg');
//   background-size: cover;
//   background-position: center;
//   color: #fff;
//   text-align: center;
//   padding: 50px;
//   font-size: 36px;
// `;

// const BackButton = styled.button`
//   background-color: #4caf50;
//   color: white;
//   padding: 10px;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;
//   position: absolute;
//   top: 10px;
//   left: 10px;
// `;

// const Heading = styled.h5`
//   font-size: 20px;
//   margin-bottom: 10px;
// `;

// const TableWrapper = styled.div`
//   margin-top: 20px;
// `;

// const TableCellHeading = styled.th`
//   background-color: #4caf50;
//   color: white;
//   padding: 10px;
//   text-align: center;
// `;

// const TableCell = styled.td`
//   padding: 10px;
//   border: 1px solid #ddd;
// `;

// const AdditionalInfoWrapper = styled.div`
//   margin-top: 10px;
// `;

// const AdditionalInfoHeading = styled.h5`
//   font-size: 18px;
//   color: #333;
// `;

// const AdditionalInfoItem = styled.p`
//   font-size: 16px;
//   font-weight: 500;
// `;

// const RequirementsPage = () => {
//   const [requirements, setRequirements] = useState([]);
//   const [selectedHomeName, setSelectedHomeName] = useState(null);
//   const [selectedPriority, setSelectedPriority] = useState('');
//   const [sortOrder, setSortOrder] = useState('');

//   useEffect(() => {
//     //let apiUrl = 'http://localhost:3001/api/requirements';
//      let apiUrl = 'https://oldagehome.onrender.com/api/requirements'
//     // let apiUrl = 'https://oldagehome-vert.vercel.app/requirements';

//     fetch(apiUrl)
//       .then((response) => response.json())
//       .then((data) => setRequirements(data))
//       .catch((error) => console.error('Error fetching data:', error));
//   }, []);

//   const formatDate = (isoDate) => {
//     const date = new Date(isoDate);
//     const day = date.getUTCDate().toString().padStart(2, '0');
//     const month = (date.getUTCMonth() + 1).toString().padStart(2, '0');
//     const year = date.getUTCFullYear();
//     return `${day}/${month}/${year}`;
//   };

//   const groupRequirementsByHome = () => {
//     const groupedRequirements = {};
//     requirements.forEach((requirement) => {
//       const homeName = requirement.homeName;
//       if (!groupedRequirements[homeName]) {
//         groupedRequirements[homeName] = {
//           homeDescription: requirement.homeDescription,
//           contact: requirement.contact,
//           address: requirement.address,
//           bankDetails: requirement.bankDetails,
//           items: [],
//           memberCount: requirement.memberCount,
//           paymentNumber: requirement.paymentNumber,
//         };
//       }
//       groupedRequirements[homeName].items.push({
//         priority: requirement.priority,
//         dateOfPosting: formatDate(requirement.dateOfPosting),
//         itemCat: requirement.itemCat,
//         item: requirement.item,
//         unit: requirement.unit,
//         budget: requirement.budget,
//       });
//     });
//     return groupedRequirements;
//   };

//   const sortItemsByBudget = (items) => {
//     if (sortOrder === 'LowToHigh') {
//       return items.slice().sort((a, b) => a.budget - b.budget);
//     } else if (sortOrder === 'HighToLow') {
//       return items.slice().sort((a, b) => b.budget - a.budget);
//     } else {
//       return items;
//     }
//   };

//   const groupedRequirements = groupRequirementsByHome();

//   return (
//     <>
//       <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
//         <HeroBanner>
//           <span>
//             <BackButton>
//               <Link to="/">
//                 <AiOutlineLeft /> Back
//               </Link>
//             </BackButton>
//           </span>
//           <motion.p
//             initial={{ opacity: 0, y: -50 }}
//             animate={{ opacity: 1, y: 0, transition: { delay: 0.5, duration: 1.5 } }}
//             exit={{ opacity: 0, y: -50 }}
//           >
//             Embracing Golden Years with Dignity and Care
//           </motion.p>
//         </HeroBanner>
//         <div>
//           <Heading>
//             Home Name: <span className='homedes'>{selectedHomeName}</span>
//           </Heading>
//           {selectedHomeName && (
//             <div>
//               <Heading>
//                 Home Description: <span className='homedes'>{groupedRequirements[selectedHomeName].homeDescription}</span>
//               </Heading>
//             </div>
//           )}
//         </div>
//       </motion.div>
//       <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
//       <FilterWrapper>
//           <Heading>
//             HOME{' '}
//             <span>
//               <select onChange={(e) => setSelectedHomeName(e.target.value)}>
//                 <option value="">All</option>
//                 {Object.keys(groupedRequirements).map((homeName, index) => (
//                   <option key={index} value={homeName}>
//                     {homeName}
//                   </option>
//                 ))}
//               </select>
//             </span>
//           </Heading>
//           <Heading>
//             Priority{' '}
//             <span>
//               <select onChange={(e) => setSelectedPriority(e.target.value)}>
//                 <option value="">All</option>
//                 <option value="High">High</option>
//                 <option value="Medium">Medium</option>
//                 <option value="Low">Low</option>
//               </select>
//             </span>
//           </Heading>
//           <Heading>
//             Budget{' '}
//             <span>
//               <select onChange={(e) => setSortOrder(e.target.value)}>
//                 <option value="">All</option>
//                 <option value="LowToHigh">Low to High</option>
//                 <option value="HighToLow">High to Low</option>
//               </select>
//             </span>
//           </Heading>
//         </FilterWrapper>
//       </motion.div>
//       <TableWrapper>
//         <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
//           <table>
//             <thead>
//               <tr>
//                 <TableCellHeading>Priority</TableCellHeading>
//                 <TableCellHeading>Date of Posting</TableCellHeading>
//                 <TableCellHeading>Item category</TableCellHeading>
//                 <TableCellHeading>Item</TableCellHeading>
//                 <TableCellHeading>Unit</TableCellHeading>
//                 <TableCellHeading>Budget ₹</TableCellHeading>
//               </tr>
//             </thead>
//             <tbody>
//               {selectedHomeName
//                 ? sortItemsByBudget(groupedRequirements[selectedHomeName].items)
//                     .filter((item) => !selectedPriority || item.priority === selectedPriority)
//                     .map((item, index) => (
//                       <tr key={index}>
//                         <TableCell>{item.priority}</TableCell>
//                         <TableCell>{item.dateOfPosting}</TableCell>
//                         <TableCell>{item.itemCat}</TableCell>
//                         <TableCell>{item.item}</TableCell>
//                         <TableCell>{item.unit}</TableCell>
//                         <TableCell>{item.budget}</TableCell>
//                       </tr>
//                     ))
//                 : sortItemsByBudget(requirements)
//                     .filter((item) => !selectedPriority || item.priority === selectedPriority)
//                     .map((item, index) => (
//                       <tr key={index}>
//                         <TableCell>{item.priority}</TableCell>
//                         <TableCell>{formatDate(item.dateOfPosting)}</TableCell>
//                         <TableCell>{item.itemCat}</TableCell>
//                         <TableCell>{item.item}</TableCell>
//                         <TableCell>{item.unit}</TableCell>
//                         <TableCell>{item.budget}</TableCell>
//                       </tr>
//                     ))}
//             </tbody>
//           </table>
//         </motion.div>
//         <AdditionalInfoWrapper>
//           {selectedHomeName && (
//             <div>
//               <AdditionalInfoHeading>Contact Information</AdditionalInfoHeading>
//               <AdditionalInfoItem>
//                 Contact: <span className='alldetails'>{groupedRequirements[selectedHomeName].contact}</span>
//               </AdditionalInfoItem>
//               <AdditionalInfoItem>
//                 Address: <span className='alldetails'>{groupedRequirements[selectedHomeName].address}</span>
//               </AdditionalInfoItem>

//               <AdditionalInfoHeading>Bank Account Details</AdditionalInfoHeading>
//               <AdditionalInfoItem>
//                 Bank Name: <span className='alldetails'>{groupedRequirements[selectedHomeName].bankDetails.bankName}</span>
//               </AdditionalInfoItem>
//               <AdditionalInfoItem>
//                 Account No: <span className='alldetails'>{groupedRequirements[selectedHomeName].bankDetails.accountNo}</span>
//               </AdditionalInfoItem>
//               <AdditionalInfoItem>
//                 IFSC code: <span className='alldetails'>{groupedRequirements[selectedHomeName].bankDetails.ifscCode}</span>
//               </AdditionalInfoItem>
//               <AdditionalInfoItem>
//                 Branch Name: <span className='alldetails'>{groupedRequirements[selectedHomeName].bankDetails.branchName}</span>
//               </AdditionalInfoItem>

//               <AdditionalInfoHeading>Payment Information</AdditionalInfoHeading>
//               <AdditionalInfoItem>
//                 Gpay, Phonepay, Paytm Number: <span className='alldetails'>{groupedRequirements[selectedHomeName].paymentNumber}</span>
//               </AdditionalInfoItem>

//               <AdditionalInfoHeading>Member Information</AdditionalInfoHeading>
//               <AdditionalInfoItem>
//                 Member Count:<span className='alldetails'> {groupedRequirements[selectedHomeName].memberCount}</span>
//               </AdditionalInfoItem>
//             </div>
//           )}
//         </AdditionalInfoWrapper>
//       </TableWrapper>
//     </>
//   );
// };

// export default RequirementsPage;




// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import styled from 'styled-components';
// import { motion } from 'framer-motion';
// import { AiOutlineLeft } from 'react-icons/ai';
// import Loading from './Loading';

// const FilterWrapper = styled.div`
//   display: flex;
//   gap:15px;
// `;

// const HeroBanner = styled.div`
//   background-image: url('https://cdn.pixabay.com/photo/2016/01/28/10/20/old-man-1166066_640.jpg');
//   background-size: cover;
//   background-position: center;
//   color: #fff;
//   text-align: center;
//   padding: 50px;
//   font-size: 36px;
// `;

// const BackButton = styled.button`
//   background-color: #4caf50;
//   color: white;
//   padding: 10px;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;
//   position: absolute;
//   top: 10px;
//   left: 10px;
// `;

// const Heading = styled.h5`
//   font-size: 20px;
//   margin-bottom: 10px;
// `;

// const TableWrapper = styled.div`
//   margin-top: 20px;
// `;

// const TableCellHeading = styled.th`
//   background-color: #4caf50;
//   color: white;
//   padding: 10px;
//   text-align: center;
// `;

// const TableCell = styled.td`
//   padding: 10px;
//   border: 1px solid #ddd;
// `;

// const AdditionalInfoWrapper = styled.div`
//   margin-top: 10px;
// `;

// const AdditionalInfoHeading = styled.h5`
//   font-size: 18px;
//   color: #333;
// `;

// const AdditionalInfoItem = styled.p`
//   font-size: 16px;
//   font-weight: 500;
// `;

// const RequirementsPage = () => {
//   const [requirements, setRequirements] = useState([]);
//   const [selectedHomeName, setSelectedHomeName] = useState(null);
//   const [selectedPriority, setSelectedPriority] = useState('');
//   const [sortOrder, setSortOrder] = useState('');
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     //let apiUrl = 'http://localhost:3001/api/requirements';
//      let apiUrl = 'https://oldagehome.onrender.com/api/requirements'
//     // let apiUrl = 'https://oldagehome-vert.vercel.app/requirements';
    
//     fetch(apiUrl)
//       .then((response) => response.json())
//       .then((data) => {
//         setRequirements(data);
//         setLoading(false); // Set loading to false once data is fetched
//       })
//       .catch((error) => {
//         console.error('Error fetching data:', error);
//         setLoading(false); // Set loading to false in case of an error
//       });
//   }, []);

//   const formatDate = (isoDate) => {
//     const date = new Date(isoDate);
//     const day = date.getUTCDate().toString().padStart(2, '0');
//     const month = (date.getUTCMonth() + 1).toString().padStart(2, '0');
//     const year = date.getUTCFullYear();
//     return `${day}/${month}/${year}`;
//   };

//   const groupRequirementsByHome = () => {
//     const groupedRequirements = {};
//     requirements.forEach((requirement) => {
//       const homeName = requirement.homeName;
//       if (!groupedRequirements[homeName]) {
//         groupedRequirements[homeName] = {
//           homeDescription: requirement.homeDescription,
//           contact: requirement.contact,
//           address: requirement.address,
//           bankDetails: requirement.bankDetails,
//           items: [],
//           memberCount: requirement.memberCount,
//           paymentNumber: requirement.paymentNumber,
//         };
//       }
//       groupedRequirements[homeName].items.push({
//         priority: requirement.priority,
//         dateOfPosting: formatDate(requirement.dateOfPosting),
//         itemCat: requirement.itemCat,
//         item: requirement.item,
//         unit: requirement.unit,
//         budget: requirement.budget,
//       });
//     });
//     return groupedRequirements;
//   };

//   const sortItemsByBudget = (items) => {
//     if (sortOrder === 'LowToHigh') {
//       return items.slice().sort((a, b) => a.budget - b.budget);
//     } else if (sortOrder === 'HighToLow') {
//       return items.slice().sort((a, b) => b.budget - a.budget);
//     } else {
//       return items;
//     }
//   };

//   const groupedRequirements = groupRequirementsByHome();

//   return (
//     <>
//      {loading ? ( // Render Loading component while data is being fetched
//         <Loading />
//       ) : (
//     <>
//       <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
//         <HeroBanner>
//           <span>
//             <BackButton>
//               <Link to="/">
//                 <AiOutlineLeft /> Back
//               </Link>
//             </BackButton>
//           </span>
//           <motion.p
//             initial={{ opacity: 0, y: -50 }}
//             animate={{ opacity: 1, y: 0, transition: { delay: 0.5, duration: 1.5 } }}
//             exit={{ opacity: 0, y: -50 }}
//           >
//             Embracing Golden Years with Dignity and Care
//           </motion.p>
//         </HeroBanner>
//         <div>
//           <Heading>
//             Home Name: <span className='homedes'>{selectedHomeName}</span>
//           </Heading>
//           {selectedHomeName && (
//             <div>
//               <Heading>
//                 Home Description: <span className='homedes'>{groupedRequirements[selectedHomeName].homeDescription}</span>
//               </Heading>
//             </div>
//           )}
//         </div>
//       </motion.div>
//       <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
//       <FilterWrapper>
//           <Heading>
//             HOME{' '}
//             <span>
//               <select onChange={(e) => setSelectedHomeName(e.target.value)}>
//                 <option value="">All</option>
//                 {Object.keys(groupedRequirements).map((homeName, index) => (
//                   <option key={index} value={homeName}>
//                     {homeName}
//                   </option>
//                 ))}
//               </select>
//             </span>
//           </Heading>
//           <Heading>
//             Priority{' '}
//             <span>
//               <select onChange={(e) => setSelectedPriority(e.target.value)}>
//                 <option value="">All</option>
//                 <option value="High">High</option>
//                 <option value="Medium">Medium</option>
//                 <option value="Low">Low</option>
//               </select>
//             </span>
//           </Heading>
//           <Heading>
//             Budget{' '}
//             <span>
//               <select onChange={(e) => setSortOrder(e.target.value)}>
//                 <option value="">All</option>
//                 <option value="LowToHigh">Low to High</option>
//                 <option value="HighToLow">High to Low</option>
//               </select>
//             </span>
//           </Heading>
//         </FilterWrapper>
//       </motion.div>
//       <TableWrapper>
//         <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
//           <table>
//             <thead>
//               <tr>
//                 <TableCellHeading>Priority</TableCellHeading>
//                 <TableCellHeading>Date of Posting</TableCellHeading>
//                 <TableCellHeading>Item category</TableCellHeading>
//                 <TableCellHeading>Item</TableCellHeading>
//                 <TableCellHeading>Unit</TableCellHeading>
//                 <TableCellHeading>Budget ₹</TableCellHeading>
//               </tr>
//             </thead>
//             <tbody>
//               {selectedHomeName
//                 ? sortItemsByBudget(groupedRequirements[selectedHomeName].items)
//                     .filter((item) => !selectedPriority || item.priority === selectedPriority)
//                     .map((item, index) => (
//                       <tr key={index}>
//                         <TableCell>{item.priority}</TableCell>
//                         <TableCell>{item.dateOfPosting}</TableCell>
//                         <TableCell>{item.itemCat}</TableCell>
//                         <TableCell>{item.item}</TableCell>
//                         <TableCell>{item.unit}</TableCell>
//                         <TableCell>{item.budget}</TableCell>
//                       </tr>
//                     ))
//                 : sortItemsByBudget(requirements)
//                     .filter((item) => !selectedPriority || item.priority === selectedPriority)
//                     .map((item, index) => (
//                       <tr key={index}>
//                         <TableCell>{item.priority}</TableCell>
//                         <TableCell>{formatDate(item.dateOfPosting)}</TableCell>
//                         <TableCell>{item.itemCat}</TableCell>
//                         <TableCell>{item.item}</TableCell>
//                         <TableCell>{item.unit}</TableCell>
//                         <TableCell>{item.budget}</TableCell>
//                       </tr>
//                     ))}
//             </tbody>
//           </table>
//         </motion.div>
//         <AdditionalInfoWrapper>
//           {selectedHomeName && (
//             <div>
//               <AdditionalInfoHeading>Contact Information</AdditionalInfoHeading>
//               <AdditionalInfoItem>
//                 Contact: <span className='alldetails'>{groupedRequirements[selectedHomeName].contact}</span>
//               </AdditionalInfoItem>
//               <AdditionalInfoItem>
//                 Address: <span className='alldetails'>{groupedRequirements[selectedHomeName].address}</span>
//               </AdditionalInfoItem>

//               <AdditionalInfoHeading>Bank Account Details</AdditionalInfoHeading>
//               <AdditionalInfoItem>
//                 Bank Name: <span className='alldetails'>{groupedRequirements[selectedHomeName].bankDetails.bankName}</span>
//               </AdditionalInfoItem>
//               <AdditionalInfoItem>
//                 Account No: <span className='alldetails'>{groupedRequirements[selectedHomeName].bankDetails.accountNo}</span>
//               </AdditionalInfoItem>
//               <AdditionalInfoItem>
//                 IFSC code: <span className='alldetails'>{groupedRequirements[selectedHomeName].bankDetails.ifscCode}</span>
//               </AdditionalInfoItem>
//               <AdditionalInfoItem>
//                 Branch Name: <span className='alldetails'>{groupedRequirements[selectedHomeName].bankDetails.branchName}</span>
//               </AdditionalInfoItem>

//               <AdditionalInfoHeading>Payment Information</AdditionalInfoHeading>
//               <AdditionalInfoItem>
//                 Gpay, Phonepay, Paytm Number: <span className='alldetails'>{groupedRequirements[selectedHomeName].paymentNumber}</span>
//               </AdditionalInfoItem>

//               <AdditionalInfoHeading>Member Information</AdditionalInfoHeading>
//               <AdditionalInfoItem>
//                 Member Count:<span className='alldetails'> {groupedRequirements[selectedHomeName].memberCount}</span>
//               </AdditionalInfoItem>
//             </div>
//           )}
//         </AdditionalInfoWrapper>
//       </TableWrapper>
//     </>
//       )}
//       </>
//   );
// };

// export default RequirementsPage;


import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { AiOutlineLeft } from 'react-icons/ai';
import Loading from './Loading';

const FilterWrapper = styled.div`
  display: flex;
  gap:15px;
`;

const HeroBanner = styled.div`
  background-image: url('https://cdn.pixabay.com/photo/2016/01/28/10/20/old-man-1166066_640.jpg');
  background-size: cover;
  background-position: center;
  color: #fff;
  text-align: center;
  padding: 50px;
  font-size: 36px;
`;

const BackButton = styled.button`
  background-color: #4caf50;
  color: black;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  position: absolute;
  top: 10px;
  left: 10px;
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
  text-align: center;
`;

const TableCell = styled.td`
  padding: 10px;
  border: 1px solid #ddd;
`;

const AdditionalInfoWrapper = styled.div`
  margin-top: 10px;
`;

const AdditionalInfoHeading = styled.h5`
  font-size: 18px;
  color: #333;
`;

const AdditionalInfoItem = styled.p`
  font-size: 16px;
  font-weight: 500;
`;

const RequirementsPage = () => {
  const [requirements, setRequirements] = useState([]);
  const [selectedHomeName, setSelectedHomeName] = useState(null);
  const [selectedPriority, setSelectedPriority] = useState('');
  const [sortOrder, setSortOrder] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //let apiUrl = 'http://localhost:3001/api/requirements';
     let apiUrl = 'https://oldagehome.onrender.com/api/requirements'
    // let apiUrl = 'https://oldagehome-vert.vercel.app/requirements';
    
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setRequirements(data);
        setLoading(false); 
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false); 
      });
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
        budget: requirement.budget,
      });
    });
    return groupedRequirements;
  };

  const sortItemsByBudget = (items) => {
    if (sortOrder === 'LowToHigh') {
      return items.slice().sort((a, b) => a.budget - b.budget);
    } else if (sortOrder === 'HighToLow') {
      return items.slice().sort((a, b) => b.budget - a.budget);
    } else {
      return items;
    }
  };

  const groupedRequirements = groupRequirementsByHome();

  return (
    <>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
        <HeroBanner>
          <span>
            <BackButton>
              <Link to="/">
              <div class="arrow"></div>
              </Link>
            </BackButton>
          </span>
          <motion.p
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.5, duration: 1.5 } }}
            exit={{ opacity: 0, y: -50 }}
          >
            Embracing Golden Years with Dignity and Care
          </motion.p>
        </HeroBanner>
        <div>
          <Heading>
            Home Name: <span className='homedes'>{selectedHomeName || 'All Oldage Homes Requirements'}</span>
          </Heading>
          {selectedHomeName && (
            <div>
              <Heading>
                Home Description: <span className='homedes'>{groupedRequirements[selectedHomeName].homeDescription}</span>
              </Heading>
            </div>
          )}
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <FilterWrapper>
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
          <Heading>
            Priority{' '}
            <span>
              <select onChange={(e) => setSelectedPriority(e.target.value)}>
                <option value="">All</option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
            </span>
          </Heading>
          <Heading>
            Budget{' '}
            <span>
              <select onChange={(e) => setSortOrder(e.target.value)}>
                <option value="">All</option>
                <option value="LowToHigh">Low to High</option>
                <option value="HighToLow">High to Low</option>
              </select>
            </span>
          </Heading>
        </FilterWrapper>
      </motion.div>
      <TableWrapper>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
        {loading && <Loading />}
        {!loading && (
          <table>
            <thead>
              <tr>
                <TableCellHeading>Priority</TableCellHeading>
                <TableCellHeading>Date of Posting</TableCellHeading>
                <TableCellHeading>Item category</TableCellHeading>
                <TableCellHeading>Item</TableCellHeading>
                <TableCellHeading>Unit</TableCellHeading>
                <TableCellHeading>Budget ₹</TableCellHeading>
              </tr>
            </thead>
            <tbody>
              {selectedHomeName
                ? sortItemsByBudget(groupedRequirements[selectedHomeName].items)
                    .filter((item) => !selectedPriority || item.priority === selectedPriority)
                    .map((item, index) => (
                      <tr key={index}>
                        <TableCell>{item.priority}</TableCell>
                        <TableCell>{item.dateOfPosting}</TableCell>
                        <TableCell>{item.itemCat}</TableCell>
                        <TableCell>{item.item}</TableCell>
                        <TableCell>{item.unit}</TableCell>
                        <TableCell>{item.budget}</TableCell>
                      </tr>
                    ))
                : sortItemsByBudget(requirements)
                    .filter((item) => !selectedPriority || item.priority === selectedPriority)
                    .map((item, index) => (
                      <tr key={index}>
                        <TableCell>{item.priority}</TableCell>
                        <TableCell>{formatDate(item.dateOfPosting)}</TableCell>
                        <TableCell>{item.itemCat}</TableCell>
                        <TableCell>{item.item}</TableCell>
                        <TableCell>{item.unit}</TableCell>
                        <TableCell>{item.budget}</TableCell>
                      </tr>
                    ))}
            </tbody>
          </table>
        )}
        </motion.div>
        <AdditionalInfoWrapper>
          {selectedHomeName && (
            <div>
              <AdditionalInfoHeading>Contact Information</AdditionalInfoHeading>
              <AdditionalInfoItem>
                Contact: <span className='alldetails'>{groupedRequirements[selectedHomeName].contact}</span>
              </AdditionalInfoItem>
              <AdditionalInfoItem>
                Address: <span className='alldetails'>{groupedRequirements[selectedHomeName].address}</span>
              </AdditionalInfoItem>

              <AdditionalInfoHeading>Bank Account Details</AdditionalInfoHeading>
              <AdditionalInfoItem>
                Bank Name: <span className='alldetails'>{groupedRequirements[selectedHomeName].bankDetails.bankName}</span>
              </AdditionalInfoItem>
              <AdditionalInfoItem>
                Account No: <span className='alldetails'>{groupedRequirements[selectedHomeName].bankDetails.accountNo}</span>
              </AdditionalInfoItem>
              <AdditionalInfoItem>
                IFSC code: <span className='alldetails'>{groupedRequirements[selectedHomeName].bankDetails.ifscCode}</span>
              </AdditionalInfoItem>
              <AdditionalInfoItem>
                Branch Name: <span className='alldetails'>{groupedRequirements[selectedHomeName].bankDetails.branchName}</span>
              </AdditionalInfoItem>

              <AdditionalInfoHeading>Payment Information</AdditionalInfoHeading>
              <AdditionalInfoItem>
                Gpay, Phonepay, Paytm Number: <span className='alldetails'>{groupedRequirements[selectedHomeName].paymentNumber}</span>
              </AdditionalInfoItem>

              <AdditionalInfoHeading>Member Information</AdditionalInfoHeading>
              <AdditionalInfoItem>
                Member Count:<span className='alldetails'> {groupedRequirements[selectedHomeName].memberCount}</span>
              </AdditionalInfoItem>
            </div>
          )}
        </AdditionalInfoWrapper>
      </TableWrapper>
    </>
  );
};

export default RequirementsPage;
