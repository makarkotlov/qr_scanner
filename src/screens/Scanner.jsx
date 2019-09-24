/* eslint-disable react/jsx-wrap-multilines */
import React from 'react'
import { Container, Content } from 'native-base'
import PropTypes from 'prop-types'
import Scanner from '../components/Scanner'

const ScannerScreen = ({ navigation }) => (
  <Container>
    <Content scrollEnabled={false}>
      <Scanner navigation={navigation} />
    </Content>
  </Container>
)

ScannerScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
}

export default ScannerScreen
