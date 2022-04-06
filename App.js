import React, {useState, useEffect, useRef} from 'react';
import {
  SafeAreaView,
  Platform,
  Text,
  View,
  StatusBar,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import {Modalize} from 'react-native-modalize';

import 'react-native-gesture-handler';
import {colors} from './src/theme';
import Button from './src/components/button';
import Box from './src/components/box';
import T from './src/components/text';

const App = () => {
  const [statusBarColor, setStatusBarColor] = useState(colors.green);
  const modalizeRef = useRef();
  const [text, onChangeText] = useState('Useless Text');
  const [number, onChangeNumber] = useState(null);

  const onOpen = () => {
    modalizeRef.current?.open();
    setStatusBarColor(colors.green);
  };

  return (
    <>
      <SafeAreaView style={{flex: 0, backgroundColor: statusBarColor}} />
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
        <Box bg="black" flex={1}>
          <T
            fontSize={24}
            fontWeight="bold"
            py={16}
            px={1}
            color={colors.white}
            letterSpacing={1}>
            Öncelik Matrixi
          </T>
          <Box
            alignItems="center"
            flexDirection="row"
            justifyContent="space-around"
            flexWrap="wrap">
            <Box
              alignItems="center"
              justifyContent="center"
              width={50}
              height={50}
              borderRadius={50}
              bg={colors.darkGrey}
              position="absolute"
              top="0"
              right="0"
              style={{opacity: 0.2}}>
              <T
                fontWeight="bold"
                fontSize={24}
                color={colors.white}
                style={{opacity: 1}}>
                5
              </T>
            </Box>

            <Button
              alignItems="center"
              justifyContent="center"
              my={2}
              bg={colors.green}
              width="48%"
              borderRadius={10}
              height={160}
              onPress={onOpen}>
              <Box
                alignItems="center"
                justifyContent="center"
                width={50}
                height={50}
                borderRadius={50}
                bg={colors.darkGrey}
                position="absolute"
                top="0"
                right="0"
                style={{opacity: 0.2}}>
                <T
                  fontWeight="bold"
                  fontSize={24}
                  color={colors.white}
                  style={{opacity: 1}}>
                  4
                </T>
              </Box>
              <T color={colors.white} fontWeight="bold" mb={2} fontSize={20}>
                Acil ve Önemsiz
              </T>
              <T color={colors.white}>İşi Devret</T>
            </Button>

            <Button
              alignItems="center"
              justifyContent="center"
              bg={colors.blue}
              width="48%"
              borderRadius={10}
              height={160}
              onPress={() => setStatusBarColor(colors.blue)}>
              <Box
                alignItems="center"
                justifyContent="center"
                width={50}
                height={50}
                borderRadius={50}
                bg={colors.darkGrey}
                position="absolute"
                top="0"
                right="0"
                style={{opacity: 0.2}}>
                <T
                  fontWeight="bold"
                  fontSize={24}
                  color={colors.white}
                  style={{opacity: 1}}>
                  4
                </T>
              </Box>
              <T color={colors.white} fontWeight="bold" mb={2} fontSize={20}>
                Acil ve Önemsiz
              </T>
              <T color={colors.white}>İşi Devret</T>
            </Button>
            <Button
              alignItems="center"
              justifyContent="center"
              bg={colors.yellow}
              width="48%"
              borderRadius={10}
              height={160}>
              <Box
                alignItems="center"
                justifyContent="center"
                width={50}
                height={50}
                borderRadius={50}
                bg={colors.darkGrey}
                position="absolute"
                top="0"
                right="0"
                style={{opacity: 0.2}}>
                <T
                  fontWeight="bold"
                  fontSize={24}
                  color={colors.white}
                  style={{opacity: 1}}>
                  4
                </T>
              </Box>
              <T color={colors.white} fontWeight="bold" mb={2} fontSize={20}>
                Önemsiz Acil Değil
              </T>
              <T color={colors.white}> Ertele</T>
            </Button>
            <Button
              alignItems="center"
              justifyContent="center"
              bg={colors.red}
              width="48%"
              borderRadius={10}
              px={1}
              height={160}>
              <Box
                alignItems="center"
                justifyContent="center"
                width={50}
                height={50}
                borderRadius={50}
                bg={colors.darkGrey}
                position="absolute"
                top="0"
                right="0"
                style={{opacity: 0.2}}>
                <T
                  fontWeight="bold"
                  fontSize={24}
                  color={colors.white}
                  style={{opacity: 1}}>
                  4
                </T>
              </Box>
              <T color={colors.white} fontWeight="bold" mb={2} fontSize={20}>
                Önemli Acil Değil
              </T>
              <T color={colors.white}> Planla</T>
            </Button>
          </Box>
        </Box>

        <Modalize
          handlePosition={true}
          ref={modalizeRef}
          modalStyle={{
            paddingTop: 20,
            border: 10,
            borderColor: 'red',
            borderStyle: 'solid',
          }}
          HeaderComponent={
            <View>
              <T color={colors.green} fontSize={20} fontWeight="bold">
                Acil ve Önemsiz
              </T>
            </View>
          }
          FooterComponent={
            <KeyboardAvoidingView style={{paddingTop: 20, paddingBottom: 20}}>
              <Box bg={colors.green}>
                <Box py={3}>
                  <Box display="flex" flexDirection="row">
                    <TextInput
                      style={{
                        height: 40,
                        width: 300,
                        margin: 12,
                        borderWidth: 1,
                        color: colors.white,
                        borderColor: '#fff',
                        padding: 10,
                      }}
                      onChangeText={onChangeText}
                      value={text}
                    />
                    <Button border="1px solid">
                      <T>Ekle</T>
                    </Button>
                  </Box>
                </Box>
              </Box>
            </KeyboardAvoidingView>
          }>
          <Box flex={1}>
            <Box bg="red">
              <T>Modal</T>
            </Box>
            <Box bg="yellow">
              <T>deneme</T>
            </Box>
          </Box>
        </Modalize>
      </SafeAreaView>
    </>
  );
};
export default App;
