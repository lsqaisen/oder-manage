import * as React from 'react';
import { View, Text, Image } from 'remax/one';
import Menu from '@/components/menu';
import Card from '@/components/card';
import styles from './index.less';

export default () => {
  return (
    <View className={styles.app}>
      {/* <Image className={styles.bg} src="/images/bg.jpg" /> */}
      {/* <View className={styles.header}>
        <Image
          src="https://gw.alipayobjects.com/mdn/rms_b5fcc5/afts/img/A*OGyZSI087zkAAAAAAAAAAABkARQnAQ"
          className={styles.logo}
        />
      </View> */}
      <View className={styles.menu}>
        <Menu />
      </View>
      <View className={styles.content}>
        <Card />
      </View>
    </View>
  );
};
