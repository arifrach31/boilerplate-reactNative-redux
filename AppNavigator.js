import { StackNavigator } from 'react-navigation'
import App from './app/containers/App'

const AppNavigator = StackNavigator(
    {
        App: { screen: App }
    }, {
        initialRouteName: 'App',
        headerMode: 'none'
    }
)

export default AppNavigator