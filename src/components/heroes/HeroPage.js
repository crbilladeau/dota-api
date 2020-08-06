import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Spinner from '../Spinner';
import StatsTable from './StatsTable';
import strength from '../../images/strength.png';
import agility from '../../images/agility.png';
import intelligence from '../../images/intelligence.png';

const HeroPage = ({ filteredHeroes }) => {
  const [hero, setHero] = useState(null);
  const [loading, setLoading] = useState(true);
  const { heroName } = useParams();

  useEffect(() => {
    const newHero = filteredHeroes.filter((filteredHero) => {
      return filteredHero.localized_name === heroName;
    });
    setHero(newHero[0]);
    setLoading(false);
  }, [setHero, heroName, filteredHeroes]);

  return loading ? (
    <Spinner />
  ) : (
    <>
      {hero ? (
        <HeroPageStyles className='my-5 p-3'>
          <Row className='justify-content-around align-items-center'>
            <HeroInfo lg={6} md={10} sm={12}>
              <h2 className='pt-5 px-2'>
                {hero.localized_name}
                <img
                  className='py-4 px-3'
                  src={
                    hero.primary_attr === 'str'
                      ? strength
                      : hero.primary_attr === 'agi'
                      ? agility
                      : intelligence
                  }
                  alt={hero.primary_attr}
                />
                <span>{hero.attack_type}</span>
              </h2>
              <Attributes className='px-3 mx-1 my-2 justify-content-around align-items-center'>
                <img src={strength} alt='Strength' />
                <p className='m-0'>
                  {hero.base_str} + {hero.str_gain}
                </p>
                <img src={agility} alt='Agility' />
                <p className='m-0'>
                  {hero.base_agi} + {hero.agi_gain}
                </p>
                <img src={intelligence} alt='Intelligence' />
                <p className='m-0'>
                  {hero.base_int} + {hero.int_gain}
                </p>
              </Attributes>
              <Col>
                <StatsTable hero={hero} />
              </Col>
              <Bio>
                <h4 className='px-1'>Bio</h4>
                <p className='p-2'>{hero.description}</p>
              </Bio>
            </HeroInfo>

            <HeroPic
              lg={6}
              md={10}
              sm={12}
              className='justify-content-center text-center'
            >
              <img
                className='px-1'
                src={`http://cdn.dota2.com${hero.img}`}
                alt={hero.localized_name}
              />

              <Row className='justify-content-center m-3'>
                {hero.roles.map((role) => (
                  <li key={role} className='px-2'>
                    {role}
                  </li>
                ))}
              </Row>
            </HeroPic>
          </Row>
        </HeroPageStyles>
      ) : null}
    </>
  );
};

const HeroPageStyles = styled(Container)`
  background-color: #292929;
  border-radius: 5px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.07),
    0 4px 8px rgba(0, 0, 0, 0.07), 0 8px 16px rgba(0, 0, 0, 0.07),
    0 16px 32px rgba(0, 0, 0, 0.07), 0 32px 64px rgba(0, 0, 0, 0.07);
`;

const HeroInfo = styled(Col)`
  color: #d9d9d9;
  h2 {
    font-size: 3rem;
    @media screen and (max-width: 425px) {
      font-size: 2rem;
    }
  }

  h2,
  h4 {
    text-transform: uppercase;
    font-family: 'Rowdies', cursive;
    font-weight: 400;
    line-height: 1rem;
  }

  span {
    font-family: 'Lora', serif;
    font-weight: 400;
    font-style: normal;
    font-size: 1.4rem;
  }

  img {
  }
  p {
    font-size: 1.1rem;
    font-family: 'Lora', serif;
    font-weight: 500;
    font-style: normal;
  }
`;

const Bio = styled(Col)`
  p {
    font-size: 0.9rem;
    font-family: 'Lora', serif;
    font-weight: 400;
    font-style: normal;
  }
`;

const Attributes = styled(Row)`
  max-width: 350px;
  img {
    height: 100%;
  }
`;

const HeroPic = styled(Col)`
  max-width: 300px;
  img {
    width: 100%;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.25), 0 2px 2px rgba(0, 0, 0, 0.2),
      0 4px 4px rgba(0, 0, 0, 0.15), 0 8px 8px rgba(0, 0, 0, 0.1),
      0 16px 16px rgba(0, 0, 0, 0.05);
  }
  li {
    font-family: 'Lora', serif;
    font-style: italic;
    font-weight: 500;
    font-size: 1.1rem;
    color: #d9d9d9;
    list-style: none;
  }
`;

export default HeroPage;
