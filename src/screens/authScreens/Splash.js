import {
  Image,
  SafeAreaView,
  StyleSheet,

} from 'react-native';
import React, { useEffect, } from 'react';
import ImagePath from '../../constant/ImagePath';
import { useNavigation } from '@react-navigation/native';

const Splash = () => {
  const navigation = useNavigation();


  useEffect(() => {
    let timer = setTimeout(() => {
      navigation.replace('IntroScreen');
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={ImagePath.splashTopRight}
        style={{ width: '100%', height: '100%' }} />
    </SafeAreaView>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },


});
