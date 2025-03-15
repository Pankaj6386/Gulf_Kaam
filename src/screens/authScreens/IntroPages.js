// import { StyleSheet, View, Image, SafeAreaView } from 'react-native';
// import React from 'react';
// import { responsiveWidth } from 'react-native-responsive-dimensions';
// import TextView from '../../components/TextView';
// import Colors from '../../styles/Colors';
// import ImagePath from '../../constant/ImagePath';
// import Button from '../../components/Button';
// import { useNavigation } from '@react-navigation/native';

// const IntroPages = () => {
//   const navigation = useNavigation();

//   const handleSkip = () => {
//     navigation.navigate('Home'); // Replace 'Home' with your desired screen name
//   };

//   const handleNext = () => {
//     navigation.navigate('NextIntro'); // Navigate to the next intro page
//   };

//   return (
//     <SafeAreaView style={styles.safeView}>
//       <View style={{ flex: 1 }}>
//         {/* Top Section - Image */}
//         <View style={styles.imageContainer}>
//           <Image
//             source={ImagePath.intro}
//             resizeMode="contain"
//             style={styles.image}
//           />
//         </View>

//         {/* Middle Section - Text */}
//         <View style={styles.contentContainer}>
//           <TextView style={styles.title}>Welcome to Our App</TextView>
//           <TextView style={styles.text}>
//             Discover amazing features and improve your experience.
//           </TextView>
//         </View>

//         {/* Bottom Section - Buttons */}
//         <View style={styles.buttonContainer}>
//           <Button title="Skip" onPress={handleSkip} style={styles.skipButton} />
//           <Button title="Next" onPress={handleNext} style={styles.nextButton} />
//         </View>
//       </View>
//     </SafeAreaView>
//   );
// };

// export default IntroPages;

// const styles = StyleSheet.create({
//   safeView: { 
//     flex: 1, 
//     backgroundColor: Colors.bgColor, 
//   },
//   imageContainer: {
//     flex: 0.4,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   image: {
//     width: '100%',
//     height: '100%',
//   },
//   contentContainer: {
//     flex: 0.4,
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingHorizontal: 20,
//   },
//   title: {
//     width: responsiveWidth(70),
//     textAlign: 'center',
//     color: Colors.TealBlue,
//     textTransform: 'uppercase',
//     fontSize: 22,
//     marginBottom: 10,
//   },
//   text: {
//     textAlign: 'center',
//     color: Colors.LightGray,
//     marginHorizontal: 20,
//     width: responsiveWidth(80),
//     marginTop: 10,
//   },
//   buttonContainer: {
//     flex: 0.2,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     paddingHorizontal: 20,
//     alignItems: 'center',
//   },
//   skipButton: {
//     backgroundColor: Colors.LightGray,
//     flex: 1,
//     marginRight: 10,
//   },
//   nextButton: {
//     backgroundColor: Colors.MantisGreen,
//     flex: 1,
//     marginLeft: 10,
//   },
// });

import { StyleSheet, View, Image, Animated, SafeAreaView, ImageBackground } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { responsiveWidth } from 'react-native-responsive-dimensions';
import TextView from '../../components/TextView';
import Colors from '../../styles/Colors';
// import NavigationString from '../../Navigations/NavigationString';
import ImagePath from '../../constant/ImagePath';
import Button from '../../components/Button';
import { useNavigation } from '@react-navigation/native';



const IntroPages = () => {
  const navigation = useNavigation();


  return (
    <SafeAreaView style={styles.safeView}>
      <View style={{ flex: 1 }}>
        <View style={styles.skipView}>
          <Image source={ImagePath.intro}
            resizeMode='stretch'
            style={{
              width: '100%',
              height: '100%'
            }} />
        </View>
        <View style={{ flex: 0.3, paddingHorizontal: 40, paddingTop: 25, }}>
          <TextView heading headingTextSty={{
            fontSize: 22, color: Colors.Black
            , fontWeight: 400, textAlign: 'center'
          }}>
            More than 1000 of jobs waiting for you in Gulf Countries
          </TextView>
          <TextView heading headingTextSty={{
            fontSize: 16, color: Colors.Black
            , fontWeight: 400, textAlign: 'center'
            , marginTop: 20
          }}>Looking to switch career paths? Need a new job in a new Place? Looking for new company to grow your potential? Let us help you find what you're looking for.
          </TextView>
        </View>
        <View style={{ flex: 0.3, }}>
          <ImageBackground source={ImagePath.bottomImg} style={{
            justifyContent: 'center', width: '100%', height: '100%',
          }} >

            <Button btnName={'Register / Sign In'}
              onClick={() => navigation.replace('Login')}
              fontSize={26}
              lineHeight={30}
              allButtonSty={{ paddingVertical: 15, backgroundColor: '#838FB5', width: '80%', alignSelf: 'center' }}
              buttonColor={'#fff'}
            />

            <TextView textSty={{ textAlign: 'center', color: Colors.Black, fontSize: 11, top: 8 }}>Register With Easy Steps</TextView>
          </ImageBackground>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default IntroPages;

const styles = StyleSheet.create({
  safeView: { flex: 1, backgroundColor: Colors.bgColor, },
  skipView: {
    flex: 0.4,
    alignItems: 'center'
  },

  title: {
    width: responsiveWidth(70),
    textAlign: 'center',
    color: Colors.TealBlue,
    textTransform: 'uppercase',

    fontSize: 22,
  },
  text: {
    textAlign: 'center',
    color: Colors.LightGray,
    marginHorizontal: 20,
    width: responsiveWidth(80),
    marginTop: 20,
  },
  container: {
    flex: 0.95,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.White,
  },
  nextBtnSty: {
    paddingVertical: 15,
  },
  dotStyle: {
    backgroundColor: '#13556Daa',
    top: -110,
  },
  activeDotStyle: {
    backgroundColor: Colors.LightGray,
    top: -110,
  },
  bottomContainer: {
    paddingBottom: 20,
  },

  pagination: {
    // marginVertical: 40,

    flexDirection: 'row',
    alignSelf: 'center',
  },
  paginationDot: {
    width: 42,
    height: 6,
    backgroundColor: Colors['Tea Green'],
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: Colors.MantisGreen,
  },
});
