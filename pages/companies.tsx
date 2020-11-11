import React from 'react';
import CompaniesList from '../components/CompaniesList';
import AntHeader from '../components/Header';

function companies() {
  return (
    <div>
      <AntHeader />
      <CompaniesList />
    </div>
  );
}

export default companies;
