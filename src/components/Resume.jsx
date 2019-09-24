/* eslint-disable react/jsx-wrap-multilines */
import React from 'react'
import { Container, Content, Text, Button, Icon } from 'native-base'
import { StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen'

const Resume = ({ navigation: { navigate } }) => (
  <Container style={styles.container}>
    <Content scrollEnabled={false} contentContainerStyle={styles.content}>
      <Icon type="FontAwesome" name="thumbs-o-up" style={styles.bigIcon} />
      <Button
        success
        style={styles.btn}
        onPress={() => {
          navigate('Home')
        }}
      >
        <Text style={styles.btnText}>Продолжить</Text>
      </Button>
    </Content>
  </Container>
)

const styles = StyleSheet.create({
  bigIcon: { fontSize: hp('20%'), color: 'white' },
  btn: {
    position: 'absolute',
    bottom: hp('5%'),
    width: wp('55%'),
    justifyContent: 'center',
  },
  btnText: { fontSize: hp('2.5%'), fontFamily: 'Rubik-Regular' },
  container: { backgroundColor: 'black' },
  content: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  smallIcon: { fontSize: hp('4%') },
})

Resume.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
}

export default Resume
