/* eslint-disable react/jsx-wrap-multilines */
import React from 'react'
import PropTypes from 'prop-types'
import { Text, Button } from 'native-base'
import { RNCamera } from 'react-native-camera'
import { StyleSheet, View } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'

const Scanner = ({ navigation: { navigate } }) => (
  <RNCamera
    style={styles.camera}
    onBarCodeRead={() => navigate('Resume')}
    aspect={1}
    barCodeTypes={[RNCamera.Constants.BarCodeType.qr]}
  >
    <Text style={styles.cameraTopText}>Наведите на QR код</Text>
    <View style={styles.markerContainer}>
      <View style={styles.marker} />
    </View>
    <Button style={styles.btn} onPress={() => navigate('Home')} transparent>
      <Text style={styles.btnText}>Отмена</Text>
    </Button>
  </RNCamera>
)

const styles = StyleSheet.create({
  btn: { alignSelf: 'center', marginBottom: hp('12%') },
  btnText: { color: 'white' },
  camera: { width: wp('100%'), height: hp('100%') },
  cameraTopText: { color: 'white', alignSelf: 'center', marginTop: hp('4%') },
  marker: {
    height: hp('30%'),
    width: hp('30%'),
    borderWidth: 2,
    borderColor: '#00FF00',
    backgroundColor: 'transparent',
  },
  markerContainer: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'transparent' },
})

Scanner.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
}

export default Scanner
