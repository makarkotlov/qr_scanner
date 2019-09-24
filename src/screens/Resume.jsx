import React from 'react'
import PropTypes from 'prop-types'
import Resume from '../components/Resume'

const ResumeScreen = ({ navigation }) => <Resume navigation={navigation} />

ResumeScreen.propTypes = {
  navigation: PropTypes.any.isRequired,
}

export default ResumeScreen
