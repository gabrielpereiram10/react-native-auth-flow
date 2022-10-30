import { NavigationContainer } from "@react-navigation/native";
import { Loading } from "../components/Loading";
import { useAuth } from "../contexts/auth";
import { AuthenticatedRoute } from "./authenticated.d.routes";
import { UnauthenticatedRoute } from "./unauthenticated.d.routes";

export function Routes() {
    const { authData, isLoading } = useAuth()

    if (isLoading) {
        return <Loading />;
    }

    return (
        <NavigationContainer>
            {!authData?.token ? <UnauthenticatedRoute /> : <AuthenticatedRoute />}
        </NavigationContainer>
    )
}