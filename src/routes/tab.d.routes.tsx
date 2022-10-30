import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { FeedScreen } from "../screens/Feed"
import { ProfileScreen } from "../screens/Profile"
import { MaterialIcons } from "@expo/vector-icons"
import { IconButton } from "native-base"
import { useNavigation } from "@react-navigation/native"

const Tab = createBottomTabNavigator()

export const TabRoutes = () => {
    const navigation = useNavigation()

    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Home Screen"
                component={FeedScreen}
                options={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons
                            name="home"
                            color={color}
                            size={size}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Perfil"
                component={ProfileScreen}
                options={{
                    headerTitleAlign: "center",
                    tabBarShowLabel: false,
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons
                            name="settings"
                            color={color}
                            size={size}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}