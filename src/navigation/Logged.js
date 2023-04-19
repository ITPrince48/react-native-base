import { createAppContainer } from "react-navigation"
import { createDrawerNavigator } from "react-navigation-drawer"
import { createStackNavigator } from 'react-navigation-stack'
import Home from '../screens/Logged/Home'

/**
 * Home Navigator
 */
const Navigator = createStackNavigator(
	{
		HomeScreen: {
			screen: Home,
			navigationOptions: { headerShown: false },
		},
	},
	{
		initialRouteName: 'HomeScreen'
	}
)

const RootStack = createDrawerNavigator({
	Home: {
		screen: Navigator,
	},
})

export default createAppContainer(RootStack)