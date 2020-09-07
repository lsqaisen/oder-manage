import * as React from 'react';
import { View, Text, Image } from 'remax/one';
import Menu from '@/components/menu';
import Card from '@/components/card';
import Header from '@/components/header/';
import './index.less';

export default () => {
  return (
    <View className="app">
      <View className="header">
        <Header />
      </View>
      {/* <Image className={styles.bg} src="/images/bg.jpg" /> */}
      {/* <View className={styles.header}>
        <Image
          src="https://gw.alipayobjects.com/mdn/rms_b5fcc5/afts/img/A*OGyZSI087zkAAAAAAAAAAABkARQnAQ"
          className={styles.logo}
        />
      </View> */}
      <View className="menu">
        <Menu />
      </View>
      <View className="content">
        <Card />
      </View>
    </View>
  );
};
