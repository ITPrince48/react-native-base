import { createAppContainer } from "react-navigation"
import { createStackNavigator } from 'react-navigation-stack'
import SignIn from '../screens/Guest/SignIn'

/**
 * Guest Navigator
 */
const Navigator = createStackNavigator(
	{
		SignInScreen: {
			screen: SignIn,
			navigationOptions: { headerShown: false },
		},
	},
	{
		initialRouteName: 'SignInScreen'
	}
)

export default createAppContainer(Navigator)