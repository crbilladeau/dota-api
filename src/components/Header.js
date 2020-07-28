import React from 'react';
import styled from 'styled-components';
import dotalogo from '../images/dotalogo.png';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

const Header = () => {
  return (
    <LogoContainer className='mx-auto mt-5'>
      <Logo src={dotalogo} alt='dota logo' />
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
