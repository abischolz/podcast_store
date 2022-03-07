import React, { useEffect, useState } from 'react';

const Home = (props) => {
  useEffect(() => {
    console.log('HOME');
  }, []);
  return <div>this is home component</div>;
};


export const Home;