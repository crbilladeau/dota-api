import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';

const HeroCard = ({ hero }) => {
  return (
    <HeroContainer xl={2} lg={3} md={3} sm={4} xs={6} className='p-0'>
      <Link to={`/heroes/${hero.localized_name}`}>
        <HeroPortrait src={hero.url} alt={hero.localized_name} />
      </Link>
    </HeroContainer>
  );
};

const HeroContainer = styled(Col)`
  &:hover {
    cursor: pointer;
    transform: scale(1.3);
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0, 1);
    z-index: 1;
  }
`;

const HeroPortrait = styled(Image)`
  width: 100%;
`;

export default HeroCard;
