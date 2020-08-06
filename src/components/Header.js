import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import dotalogo2 from '../images/dotalogo2.png';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

const Header = () => {
  return (
    <LogoContainer className='mx-auto mt-5'>
      <Link to='/'>
        <Logo src={dotalogo2} alt='dota logo' />
      </Link>
    </LogoContainer>
  );
};

const LogoContainer = styled(Row)`
  width: 350px;
`;

const Logo = styled(Image)`
  width: 100%;
`;

export default Header;
