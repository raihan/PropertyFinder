/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import {
  StackNavigator,
} from 'react-navigation';

import SearchPage from './SearchPage';
import SearchResults from './SearchResults';
import PropertyDetails from './PropertyDetails';

const App = StackNavigator({
  Home: { screen: SearchPage },
  Results: { screen: SearchResults },
  PropertyDetails: { screen: PropertyDetails},
});
export default App;
