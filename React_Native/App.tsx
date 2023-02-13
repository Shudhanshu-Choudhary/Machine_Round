import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';
import { useFonts } from 'expo-font';
import store from './src/redux/store/store';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './src/routes/StackNavigation';

export default function App() {
  let [fontLoaded] = useFonts({
    "NunitoSans-BlackItalic": require('./assets/fonts/NunitoSans-BlackItalic.ttf'),
    "NunitoSans-Regular": require('./assets/fonts/NunitoSans-Regular.ttf'),
    "NunitoSans-Black": require('./assets/fonts/NunitoSans-Black.ttf'),
    "NunitoSans-Bold": require('./assets/fonts/NunitoSans-Bold.ttf'),
    "DancingFont-SemiBold": require('./assets/fonts/DancingScript-SemiBold.ttf'),
  });
  
  return (
    <>
      {
        fontLoaded &&
        //@ts-ignore
        <Provider store={store}>
          <PaperProvider>
            <SafeAreaProvider>
              <NavigationContainer>
                <StackNavigation />
              </NavigationContainer>
            </SafeAreaProvider>
          </PaperProvider>
        </Provider>
      }
    </>
  );
}


