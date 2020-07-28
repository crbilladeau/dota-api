import React from 'react';
import { useParams } from 'react-router-dom';

const HeroPage = () => {
  const { localized_name } = useParams();
  return <div>Hello {localized_name} </div>;
};

export default HeroPage;
