import React from 'react'
import PropTypes from 'prop-types'
import Resume from '../components/Resume'

const ResumeScreen = ({ navigation }) => <Resume navigation={navigation} />

ResumeScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
}

export default ResumeScreen
