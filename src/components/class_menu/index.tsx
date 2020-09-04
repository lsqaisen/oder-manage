import * as React from 'react';
import { View, Button, Text } from 'remax/one';
import './index.less';

const data = [
  {
    label: 'All Foods',
    value: '1',
    disabled: false,
  },
  {
    label: 'Chinese Food',
    value: '2',
  },
  {
    label: 'Hot Pot',
    value: '3',
  },
  {
    label: 'Buffet',
    value: '4',
  },
  {
    label: 'Fast Food',
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
    label: 'Leisure Food',
    value: '10',
  },
];

const ClassMenu = () => {
  return (
    <View className="class-menus">
      {data.map((v) => (
        <Button
          className={`class-menu-label ${
            v.value === '5' ? 'class-menu-selected' : ''
          }`}
          key={v.value}
        >
          {v.label}
        </Button>
      ))}
    </View>
  );
};

export default ClassMenu;
