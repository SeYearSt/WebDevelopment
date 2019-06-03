import React from 'react';

import logo from '../resources/images/logo.png';
import avatar from '../resources/images/avatar.png';

import { MenuItem } from './MenuItem';
import { HomeIcon, MessageIcon, LabIcon, ChartIcon, CalendarIcon } from './Icons';

export const LeftMenu = ({ style }) => {
  const [isActive, setActive] = React.useState(0);
  return (
    <div style={ { backgroundColor: '#2f3b4c', minWidth: 315, maxWidth: 315, ...style } }>
      <div style={ { width: '100%', height: 80, backgroundColor: '#00bfe8', display: 'flex', alignItems: 'center' } }>
        <img src={ logo } style={ { marginLeft: 35 } } />
      </div>
      <div>
        <div style={ { display: 'flex', marginTop: 40, marginLeft: 35, marginBottom: 25, alignItems: 'center' } }>
          <div style={ { position: 'relative', marginRight: 20 } }>
            <img src={ avatar } />
            <div style={ { position: 'absolute', width: 16, height: 16, backgroundColor: 'lime', border: '4px solid #2f3b4c', borderRadius: 100, bottom: 4, right: -4 } } />
          </div>
          <div>
            <span style={ { fontSize: 20, color: 'white' } }>Ononto Jolil</span>
            <br />
            <span style={ { fontSize: 15, color: '#b0bec5' } }>Jolilpur, Mars</span>
          </div>
        </div>
        <div>
          <MenuItem
            isActive={ isActive === 0 }
            onClick={ () => setActive(0) }
            Icon={ <HomeIcon /> }
            caption="Dashboard"
          />
          <MenuItem
            isActive={ isActive === 1 }
            onClick={ () => setActive(1) }
            Icon={ <MessageIcon /> }
            caption="Messages"
            count={ 32 }
          />
          <MenuItem
            isActive={ isActive === 2 }
            onClick={ () => setActive(2) }
            Icon={ <LabIcon /> }
            caption="UI Elements"
          />
          <MenuItem
            isActive={ isActive === 3 }
            onClick={ () => setActive(3) }
            Icon={ <ChartIcon /> }
            caption="Charts"
          />
          <MenuItem
            isActive={ isActive === 4 }
            onClick={ () => setActive(4) }
            Icon={ <CalendarIcon /> }
            caption="Calendar"
          />
          <div style={ { height: 1, backgroundColor: '#555f72', marginLeft: 30, marginRight: 40, marginTop: 15, marginBottom: 15 } } />
          <MenuItem
            isActive={ isActive === 5 }
            onClick={ () => setActive(5) }
            caption="User"
          />
          <MenuItem
            isActive={ isActive === 6 }
            onClick={ () => setActive(6) }
            caption="Security"
          />
          <MenuItem
            isActive={ isActive === 7 }
            onClick={ () => setActive(7) }
            caption="Customers"
          />
        </div>
      </div>
    </div>
  );
}