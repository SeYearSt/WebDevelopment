import React from 'react';

export const SmallCard = ({ color, caption, pretext, text, Icon }) => (
  <div style={ { width: 220, height: 100, backgroundColor: 'white', margin: 10, display: 'flex' } }>
    <div style={{ height: '100%', width: 70, backgroundColor: color, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {Icon}
    </div>
    <div style={{ height: '100%', display: 'flex', justifyContent: 'center', flexDirection: 'column', paddingLeft: 25 }}>
      <span style={{ color, textTransform: 'uppercase', fontSize: 15 }}>{caption}</span>
      <div>
        {pretext && <sup>{pretext}</sup>}
        {text && <span style={{ fontSize: 20 }}>{text}</span>}  
      </div>
    </div>
  </div>
);

export const SmallSquareCard = ({ src, isTop }) => (
  <div style={ { width: 220, height: 200, backgroundColor: 'white', marginBottom: isTop ? 20 : 0 } }>
    <img src={src} style={{ width: '100%', height: '100%' }} />
  </div>
);

export const BigSquareCard = ({ src }) => (
  <div style={ { width: 460, height: 420, backgroundColor: 'white', margin: 10 } }>
    <img src={src} style={{ width: '100%', height: '100%' }} />
  </div>
);