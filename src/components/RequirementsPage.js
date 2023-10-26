import React from 'react';
import { Link } from 'react-router-dom'
const RequirementsPage = () => {
  return (
    <>
    <div>
        <button className='backbutton'><Link to="/">⬅️ Back</Link></button>
      <p className='herobanner'>Hero Banner</p>
      <hr/>
      <div>
        <h3>Home Name:</h3>
        <h3>Home Description:</h3>
      </div>
    </div>
    <h3>Requirements</h3>
    <table>
      <thead>
        <tr>
          <th className='coloumnheading'>Priority</th>
          <th className='coloumnheading'>DateofPosting</th>
          <th className='coloumnheading'>ItemCat</th>
          <th className='coloumnheading'>Item</th>
          <th className='coloumnheading'>Unit</th>
          <th className='coloumnheading'>Budget</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
        </tr>
        <tr>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
        </tr>
        <tr>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
        </tr>
        <tr>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
        </tr>
        <tr>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
        </tr>
        <tr>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
        </tr>
      </tbody>
    </table>

    <div>
        <h3>Contact:</h3>
        <h3>Address:</h3>
        <h3>Bank Acc Details:</h3>
      </div>
    </>
  );
};

export default RequirementsPage;
