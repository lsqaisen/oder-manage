import * as React from 'react';
import { View, Image, Text, Button } from 'remax/one';
import './index.less';

const data = [
  {
    label: 'Foods',
    value: '1',
    disabled: false,
  },
  {
    label: 'HotPot',
    value: '3',
  },
  {
    label: 'Buffet',
    value: '4',
  },
  {
    label: 'Fast',
    value: '5',
  },
  {
    label: 'Snack',
    value: '6',
  },
  {
    label: 'Bread',
    value: '7',
  },
  {
    label: 'Fruit',
    value: '8',
  },
  {
    label: 'Noodle',
    value: '9',
  },
  {
    label: 'Leisure',
    value: '10',
  },
];

const Header = () => {
  return (
    <View
      style={{
        overflow: 'scroll',
        width: '100vw',
      }}
    >
      <View className="header-box" style={{ width: `${data.length * 9}rem` }}>
        {data.map((v) => (
          <View
            className={`header-item ${
              v.value === '1' ? 'header-item-selected' : ''
            }`}
          >
            {v.label}
          </View>
        ))}
      </View>
    </View>
  );
};

export default Header;
