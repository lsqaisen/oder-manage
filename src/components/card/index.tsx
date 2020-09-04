import * as React from 'react';
import { View, Image, Text, Button } from 'remax/one';
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

const Card = () => {
  // return <Button>test</Button>;
  return (
    <View className="card-box">
      {data.map((v) => (
        <View className="card-item">
          <View className="card-item-left">
            <Image
              src="/images/1.jpg"
              className="card-item-img"
              mode="widthFix"
            ></Image>
          </View>
          <View className="card-item-right">
            <View className="card-item-title">{v.label}</View>
            <View className="card-item-desc">desc</View>
            <View className=".card-item-price-box">
              <Text className=".card-item-price">¥212</Text>
              <Text className=".card-item-num">x2</Text>
            </View>
            <Button className="card-item-button">+</Button>
          </View>
        </View>
      ))}
    </View>
  );
};

export default Card;
