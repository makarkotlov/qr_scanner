import React from 'react'
import PropTypes from 'prop-types'
import Main from '../components/Main'

const Home = ({ navigation }) => <Main navigation={navigation} />

Home.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
}

export default Home
