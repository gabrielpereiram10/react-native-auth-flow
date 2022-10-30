import { createStackNavigator } from "@react-navigation/stack"
import { TabRoutes } from "./tab.d.routes";

const Stack = createStackNavigator()

export function AuthenticatedRoute() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Root"
                component={TabRoutes}
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    );
}