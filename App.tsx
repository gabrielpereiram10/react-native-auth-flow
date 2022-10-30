import { NativeBaseProvider } from 'native-base';
import 'react-native-gesture-handler';
import { AuthProvider } from './src/contexts/auth';
import { Routes } from './src/routes';

export default function App() {
  return (
    <NativeBaseProvider>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </NativeBaseProvider>
  );
}
