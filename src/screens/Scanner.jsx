/* eslint-disable react/jsx-wrap-multilines */
import React from 'react'
import PropTypes from 'prop-types'
import { Container, Content } from 'native-base'
import Scanner from '../components/Scanner'

const ScannerScreen = ({ navigation }) => (
  <Container>
    <Content scrollEnabled={false}>
      <Scanner navigation={navigation} />
    </Content>
  </Container>
)

ScannerScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
}

export default ScannerScreen
