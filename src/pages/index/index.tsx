import * as React from 'react';
import { View, Text, Image } from 'remax/one';
import styles from './index.css';

export default () => {
  return (
    <View className={styles.app}>
      <Image className={styles.bg} src="/images/bg.jpg" />
      {/* <View className={styles.header}>
        test
        <Image
          src="https://gw.alipayobjects.com/mdn/rms_b5fcc5/afts/img/A*OGyZSI087zkAAAAAAAAAAABkARQnAQ"
          className={styles.logo}
          alt="logo"
        />
      </View> */}
    </View>
  );
};