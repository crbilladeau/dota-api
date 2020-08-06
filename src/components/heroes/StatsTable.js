import React from 'react';
import Table from 'react-bootstrap/Table';
import styled from 'styled-components';

const StatsTable = ({ hero }) => {
  return (
    <TableStyles
      responsive='sm'
      striped
      bordered
      hover
      variant='dark'
      className='my-4'
    >
      <thead>
        <tr>
          <th>Base Health</th>
          <th>Base Mana</th>
          <th>Base Damage Range</th>
          <th>Base Movement Speed</th>
          <th>Base Armor</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{hero.base_health}</td>
          <td>{hero.base_mana}</td>
          <td>
            {hero.base_attack_min} - {hero.base_attack_max}
          </td>
          <td>{hero.move_speed}</td>
          <td>{hero.base_armor}</td>
        </tr>
      </tbody>
    </TableStyles>
  );
};

const TableStyles = styled(Table)`
  background-color: #292929;
  box-shadow: 0 1px 1px rgba(0,0,0,0.15), 
              0 2px 2px rgba(0,0,0,0.15), 
              0 4px 4px rgba(0,0,0,0.15), 
              0 8px 8px rgba(0,0,0,0.15);
}


  th,
  td {
    font-family: 'Lora', cursive;
    font-weight: 400;
  }
  th {
    line-height: 1.2rem;
  }
`;

export default StatsTable;
