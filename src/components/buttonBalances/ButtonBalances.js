import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Image, Text} from 'src/components';
import {white, greenBlue} from 'src/components/config/colors';
import {
  ViewPropTypes,
  withTheme,
  fonts,
  spacing,
  sizes,
} from 'src/components/config';
import {borderRadius, margin, padding} from 'src/components/config/spacing';

const ButtonBalances = ({
  radius,
  clickButton,
  contentContainerStyle,
  title,
  language,
  width,
  height,
  style,
  source,
}) => {
  return (
    <View style={styles.borderView}>
      <TouchableOpacity
        style={[styles.touchView, contentContainerStyle]}
        activeOpacity={0.5}
        onPress={clickButton ? clickButton : () => {}}>
        <Image
          resizeMode="cover"
          containerStyle={
            radius && {
              borderRadius: radius,
              width: width - 20,
            }
          }
          style={[{width, height}, style && style]}
          source={source}
        />
      </TouchableOpacity>

      <Text style={[styles.text]} medium>
        {title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  borderView: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: 60,
    height: 70,
    marginHorizontal: margin.large,
    marginVertical: margin.base,
  },
  image: {},
  touchView: {
    alignItems: 'center',
    borderRadius: borderRadius.large,
    paddingVertical: 10,
    width: 45,
    height: 45,
  },
  text: {
    textAlign: 'center',
    paddingVertical: 5,
    fontSize: sizes.base - 2,
  },
  touchStyle: {
    alignItems: 'center',
  },
});

ButtonBalances.defaultProps =  {
  width: 20,
  height: 20,
  language: 'en',
};

export default ButtonBalances;
