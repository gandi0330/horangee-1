import {useState} from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import {color, font} from '../../styles/colorAndFontTheme';
import Btn from '../common/Btn_short';
import SelectModal from './SelectModal';

const styles = StyleSheet.create({
  // selected
  modalBackground: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  openModal: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: 20,
    opacity: 0.5,
    backgroundColor: color.BLACK_3A,
  },
  // main area
  body: {backgroundColor: color.BACK_SUB, width: '100%', height: '100%'},
  section1: {flex: 5},
  section2: {flex: 23, paddingHorizontal: 24, alignItems: 'center'},
  section3: {flex: 5},
  // option area
  subSection1: {flex: 5, justifyContent: 'center'},
  subSection2: {
    flex: 16,
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 30,
  },
  subSection3: {
    flex: 2,
    paddingHorizontal: 40,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  subSection4: {flex: 2},
  // option
  optionBox: {
    position: 'absolute',
    resizeMode: 'stretch',
    width: '100%',
    height: '100%',
  },
  title: {fontSize: 40, fontFamily: font.beeBold, textAlign: 'center'},
  // background
  leftArrowArea: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'contain',
  },
  background: {
    flex: 8,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  rightArrowArea: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'contain',
  },
});

const BackgroundOption = ({navigation}: any) => {
  const [isSelect, setIsSelect] = useState<boolean>(true);
  const buyBackground = () => {
    navigation.navigate('SelectModal');
  };

  return (
    <>
      <View style={styles.body}>
        <View style={styles.section1}></View>
        <View style={styles.section2}>
          <Image
            source={require('../../assets/image/background_option.png')}
            style={styles.optionBox}
          />
          <View style={styles.subSection1}>
            <Text style={styles.title}>배경화면 설정</Text>
          </View>
          <View style={styles.subSection2}>
            <TouchableOpacity style={styles.leftArrowArea}>
              <Image source={require('../../assets/image/leftArrow.png')} />
            </TouchableOpacity>
            <Image
              style={styles.background}
              source={require('../../assets/image/background1.png')}
            />
            <TouchableOpacity style={styles.rightArrowArea}>
              <Image source={require('../../assets/image/rightArrow.png')} />
            </TouchableOpacity>
          </View>
          <View style={styles.subSection3}>
            <Btn
              txt={'적용하기'}
              clickEvent={() => navigation.navigate('SelectModal')}
            />
            <Btn txt={'닫기'} clickEvent={() => navigation.navigate('Home')} />
          </View>
          <View style={styles.subSection4}></View>
        </View>
        <View style={styles.section3}></View>
      </View>
    </>
  );
};

export default BackgroundOption;
