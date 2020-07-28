import React from 'react';
import Row from 'react-bootstrap/Row';
import HeroCard from './HeroCard';
import Spinner from '../Spinner';

const HeroGrid = ({ filteredHeroes, loading }) => {
  return loading ? (
    <Spinner />
  ) : (
    <Row>
      {filteredHeroes.map((hero) => (
        <HeroCard key={hero.id} hero={hero} />
      ))}
    </Row>
  );
};

export default HeroGrid;
