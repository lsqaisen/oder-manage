import * as React from 'react';
import { View, Image, Text } from 'remax/one';
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
              src="/images/icon.png"
              className="card-item-img"
              mode="widthFix"
            ></Image>
          </View>
          <View className="card-item-right">
            <View className="card-item-title">{v.label}</View>
            <View className="card-item-desc">desc</View>
            <View className="price-box">
              <text className="price">price</text>
              <text className="num">xnum</text>
            </View>
            <View className="illustrate">
              <text>支持7天无理由退货</text>
              <a className="more">价格说明</a>
            </View>
          </View>
        </View>
      ))}
    </View>
  );
};

export default Card;
