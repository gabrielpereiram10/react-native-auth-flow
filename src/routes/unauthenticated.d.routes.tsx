import { createStackNavigator } from "@react-navigation/stack"
import { SignInScreen } from "../screens/SignIn"

const Stack = createStackNavigator()

export function UnauthenticatedRoute() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Sign In Screen"
                component={SignInScreen}
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    )
}