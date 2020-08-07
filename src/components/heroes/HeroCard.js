import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';

const HeroCard = ({ hero, setSearch }) => {
  const heroName = hero.localized_name;
  return (
    <Container xl={2} lg={3} md={4} sm={6} xs={8} className='p-0'>
      <Link to={`/${heroName}`} onClick={() => setSearch('')}>
        <HeroPortrait
          src={`http://cdn.dota2.com${hero.img}`}
          alt={hero.localized_name}
        />
      </Link>
    </Container>
  );
};

const Container = styled(Col)`
  &:hover {
    cursor: pointer;
    transform: scale(1.2);
    transition: all 700ms cubic-bezier(0.175, 0.885, 0, 1);
    z-index: 1;
  }
`;

const HeroPortrait = styled(Image)`
  width: 100%;
`;

export default HeroCard;
