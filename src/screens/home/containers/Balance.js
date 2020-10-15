import React from 'react';

import {
  View,
} from 'react-native';
import {useTranslation} from 'react-i18next';

import {Text, ButtonBalances} from 'src/components';
import {white, blue} from 'src/components/config/colors';
import {borderRadius, margin, padding} from 'src/components/config/spacing';

const Balance = (props) => {
  const {t} = useTranslation();
  // const paddingImages = pad * (col - 1);
  // const width = (widthView - paddingImages) / col;
  // const height = (width * heightImage) / widthImage;

  return (
    <View style={styles.content}>
      <View style={[{alignItems: 'flex-end'}, styles.viewBalance]}>
        <Text style={styles.text}>{'Saldo anda hari ini'}</Text>
        <Text style={styles.text}>{'VIP'}</Text>
      </View>
      <View style={[styles.viewBalance]}>
        <Text style={styles.textBalance}>{'Rp 123.000'}</Text>
      </View>
      <View style={styles.lineAllignment} />
      <View style={styles.buttonBalance}>
        <ButtonBalances
          title={t('home:text_deposit')}
          width={25}
          height={25}
          source={require('src/assets/images/plusButton.png')}
          contentContainerStyle={[
            {backgroundColor: white},
            styles.contentContainerStyle,
          ]}
        />
        <ButtonBalances
          title={t('home:text_exchange')}
          width={20}
          height={20}
          source={require('src/assets/images/plusButton.png')}
          contentContainerStyle={[
            {backgroundColor: white},
            styles.contentContainerStyle,
          ]}
        />
        <ButtonBalances
          title={t('home:text_shopping')}
          width={25}
          height={25}
          source={require('src/assets/images/plusButton.png')}
          contentContainerStyle={[
            {backgroundColor: white},
            styles.contentContainerStyle,
          ]}
        />
        <ButtonBalances
          title={t('home:text_history')}
          width={25}
          height={25}
          source={require('src/assets/images/plusButton.png')}
          contentContainerStyle={[
            {backgroundColor: white},
            styles.contentContainerStyle,
          ]}
        />
      </View>
    </View>
  );
};

const styles = {
  viewBalance: {
    flexDirection: 'row',
    marginLeft: margin.large,
  },

  contentContainerStyle: {
    width: 50,
    height: 50,
    justifyContent: 'center',
  },
  content: {
    height: 240,
    backgroundColor: blue,
    marginHorizontal: margin.large,
    marginVertical: margin.base,
    paddingTop: margin.base + 10,

    justifyContent: 'center',
    paddingHorizontal: padding.large - 1,
    borderRadius: borderRadius.base,
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: white,
    paddingHorizontal: 1,
  },
  textBalance: {
    color: white,
    fontSize: 50,
  },
  lineAllignment: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginTop: margin.base,
    color: white,
  },
  buttonBalance: {
    marginVertical: margin.base,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
};

export default Balance;
