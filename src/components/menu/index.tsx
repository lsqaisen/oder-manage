import * as React from 'react';
import { View, Navigator, Text } from 'remax/one';
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
  // return <Button>test</Button>;
  return (
    <View className="class-menu">
      {data.map((v) => (
        <Navigator
          className={`class-menu-item ${
            v.value === '5' ? 'class-menu-item-selected' : ''
          }`}
          key={v.value}
          url="#"
          action="navigate"
        >
          {v.label}
        </Navigator>
      ))}
    </View>
  );
};

export default ClassMenu;
