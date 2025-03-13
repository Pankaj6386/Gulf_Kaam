import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Colors from '../styles/Colors';
import TextView from './TextView';
import {RightArrowSvg} from '../assets/svgIcons/Index';
import FontFamily from '../styles/FontFamily';

const Button = props => {
  const {
    arrowicon,
    fontWeight,
    btnName,
    fontSize,
    onClick = () => {},
    disabled,
    lineHeight,
    buttonColor,
  } = props;

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onClick}
      style={{
        ...styles.allButtonSty,
        ...props.allButtonSty,
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      {...props}
      disabled={disabled}>
      <TextView
        heading
        headingTextSty={{
          fontSize: fontSize ? fontSize : 15,
          lineHeight:lineHeight? lineHeight:20,
          color: buttonColor,
          fontFamily: FontFamily.Bold,
        }}>
        {btnName}
      </TextView>
      {arrowicon && (
        <View style={{left: 8}}>
          <RightArrowSvg />
        </View>
      )}
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  allButtonSty: {
    backgroundColor: Colors.MantisGreen,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    marginHorizontal: 15,
  },
});
