import { Center, Text } from "native-base";
import { useAuth } from "../../contexts/auth";

export function FeedScreen() {
    const { authData } = useAuth()
    return (
        <Center height="full">
            <Text>{authData?.name}</Text>
        </Center>
    )
}