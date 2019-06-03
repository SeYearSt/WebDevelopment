import React from 'react';

export const MenuItem = ({ isActive, count, Icon, caption, onClick }) => (
  <div
    style={{
      borderLeft: `2px solid ${isActive ? '#00bfe8' : 'transparent'}`,
      backgroundColor: isActive ? '#2a3344' : 'transparent',
      height: 53,
      paddingLeft: 30,
      paddingRight: 30,
      display: 'flex',
      justifyContent: 'space-between',
      userSelect: 'none',
      cursor: 'pointer',
      alignItems: 'center',
    }}
    onClick={onClick}
  >
    <div style={{ display: 'flex', alignItems: 'center' }}>
      {Icon && <span style={{ width: 30, height: 30, marginRight: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{Icon}</span>}
      <span style={{ color: '#b0bec5', fontSize: 18, lineHeight: '23px' }}>{caption}</span>
    </div>
    {count && <span style={{ backgroundColor: '#00bfe8', borderRadius: 50, padding: '4px 13px', color: 'white', fontSize: 11 }}>{count}</span>}
  </div>
);