import { Image, ImageBackground, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import ImagePath from '../../constant/ImagePath';
import TextView from '../../components/TextView';
import { BanglaSvg, EnglishSvg, HindiSvg, KannadaSvg, TamilSvg, TelguSvg } from '../../assets/svgIcons/Index';
import Colors from '../../styles/Colors';

const Login = () => {
  const langugae = [{
    id: 1,
    langIcon: <EnglishSvg />,
    title: 'English', code: 'en'
  },
  {
    id: 2,
    langIcon: <HindiSvg />,
    title: 'Hindi', code: 'hi'
  },
  {
    id: 3,
    langIcon: <BanglaSvg />,
    title: 'Bangla', code: 'bn'
  },{
    id: 1,
    langIcon: <TelguSvg />,
    title: 'English', code: 'en'
  },
  {
    id: 2,
    langIcon: <TamilSvg />,
    title: 'Hindi', code: 'hi'
  },
  {
    id: 3,
    langIcon: <KannadaSvg />,
    title: 'Bangla', code: 'bn'
  }
  ]
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={ImagePath.splashTopRight}
        style={{ width: '100%', height: '100%' }}>
        <View style={{ flex: 1, marginTop: 130, borderTopRightRadius: 28, borderTopLeftRadius: 28, backgroundColor: '#6C789F' }}>
          <TextView>dsfdsf</TextView>

          <View style={{justifyContent:'center',flexDirection:'row',flexWrap:'wrap'}}>
            {langugae?.map(item => {
              return (
                <View style={{marginHorizontal:30,alignItems:'center',marginTop:20}}>
                  <View style={{ backgroundColor: Colors.White, padding: 10, borderRadius: 35, height: 70, width: 70, alignItems: 'center', justifyContent: 'center' }}>
                    {item?.langIcon}
                  </View>
                  <TextView textSty={{fontSize:16,color:Colors.White,}}>{item?.title}</TextView>
                </View>
              )
            })}
          </View>

        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({});
