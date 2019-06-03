import React from 'react';

import avatar from '../resources/images/avatar.png';
import shore from '../resources/images/shore.png';

export const UserCard = () => (
  <div style={ { width: 460, height: 420, backgroundColor: 'white', margin: 10, position: 'relative' } }>
    <div style={ { width: '100%', height: 150, backgroundImage: `url(${shore})`, backgroundSize: 'cover', display: 'flex', color: 'white', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' } }>
      <span style={ { fontSize: 21 } }>Ononto Jolil</span>
      <span style={ { fontSize: 15 } }>Joker in Dhallywood</span>
    </div>
    <div style={ { border: '3px solid white', position: 'absolute', top: 120, left: 195, borderRadius: 100, height: 63, width: 63 } }>
      <img src={ avatar } />
    </div>
    <div style={ { margin: '0 45px', textAlign: 'center', marginTop: 80 } }>
      <span>“Lorem ipsum dolor sit amet, consectetur adipising elieat, sed do eiusmod tempor incididunt utmabor edolore exercitation ullamco laboris nisi ut aliquip” ex ea</span>
    </div>
    <div style={ { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 45px', marginTop: 10 } }>
      <div style={ { textAlign: 'center' } }>
        <span style={ { fontSize: 33, lineHeight: '40px' } }>179</span><br />
        <span style={ { color: '#78909c', fontSize: 17 } }>Customers</span>
      </div>
      <div style={ { height: 48, width: 1, backgroundColor: '#cfd8dc' } } />
      <div style={ { textAlign: 'center' } }>
        <span style={ { fontSize: 33, lineHeight: '40px' } }>19K</span><br />
        <span style={ { color: '#78909c', fontSize: 17 } }>Products</span>
      </div>
      <div style={ { height: 48, width: 1, backgroundColor: '#cfd8dc' } } />
      <div style={ { textAlign: 'center' } }>
        <span style={ { fontSize: 33, lineHeight: '40px' } }>15K</span><br />
        <span style={ { color: '#78909c', fontSize: 17 } }>Followers</span>
      </div>
    </div>
  </div>
);
