import * as React from 'react';
import { View, Text, Image } from 'remax/one';
import ClassMenu from '@/components/class_menu/';
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
        <ClassMenu />
      </View>
    </View>
  );
};
