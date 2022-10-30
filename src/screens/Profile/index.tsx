import { Button, Center } from "native-base";
import { useAuth } from "../../contexts/auth";

export function ProfileScreen() {
    const { signOut } = useAuth()
    return (
        <Center height="full" width="full">
            <Button
                size="md"
                colorScheme="red"
                onPress={signOut}
            >
                Sair
            </Button>
        </Center>
    )
}