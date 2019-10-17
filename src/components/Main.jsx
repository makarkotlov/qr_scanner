import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet } from 'react-native'
import { Button, Text, Icon, Container, Content } from 'native-base'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'

const Main = ({ navigation: { navigate } }) => (
  <Container style={styles.container}>
    <Content scrollEnabled={false} contentContainerStyle={styles.content}>
      <Text style={styles.topText}>QR SCANNER</Text>
      <Icon type="FontAwesome" name="qrcode" style={styles.bigIcon} />
      <Button success style={styles.btn} onPress={() => navigate('Scanner')}>
        <Icon type="FontAwesome" name="qrcode" style={styles.smallIcon} />
        <Text style={styles.btnText}>СКАНИРОВАТЬ QR</Text>
      </Button>
    </Content>
  </Container>
)

const styles = StyleSheet.create({
  bigIcon: { fontSize: hp('20%'), color: 'white' },
  btn: { position: 'absolute', bottom: hp('5%'), width: wp('65%'), justifyContent: 'center' },
  btnText: { fontSize: hp('2.5%'), fontFamily: 'Rubik-Regular' },
  container: { backgroundColor: 'black' },
  content: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  smallIcon: { fontSize: hp('4%') },
  topText: {
    position: 'absolute',
    top: hp('5%'),
    color: 'white',
    fontSize: hp('3.5%'),
    fontFamily: 'Rubik-Regular',
  },
})

Main.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
}

export default Main
