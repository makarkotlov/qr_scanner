import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Home from './screens/Home'
import Resume from './screens/Resume'
import Scanner from './screens/Scanner'

const AppNavigator = createStackNavigator(
  {
    Home,
    Scanner,
    Resume,
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
  }
)

const App = createAppContainer(AppNavigator)

export default App
