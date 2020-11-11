import React from 'react';
import CompaniesList from '../components/CompaniesList';
import AntHeader from '../components/AntHeader';

function companies() {
  return (
    <div>
      <AntHeader />
      <CompaniesList />
    </div>
  );
}

export default companies;
