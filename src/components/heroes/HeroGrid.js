import React from 'react';
import Row from 'react-bootstrap/Row';
import HeroCard from './HeroCard';
import Spinner from '../Spinner';

const HeroGrid = ({ loading, filteredHeroes, setSearch }) => {
  return loading ? (
    <Spinner />
  ) : (
    <>
      <Row className='mx-1 justify-content-center'>
        {filteredHeroes.map((hero) => (
          <HeroCard key={hero.id} hero={hero} setSearch={setSearch} />
        ))}
      </Row>
    </>
  );
};

export default HeroGrid;
