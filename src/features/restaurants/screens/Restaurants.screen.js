import { StatusBar as ExpoStatusBar  } from 'expo-status-bar';
import { StatusBar, StyleSheet, Text, View ,SafeAreaView, Platform, } from 'react-native';
import { Searchbar } from 'react-native-paper';
import RestaurantInfoCard from '../components/Restaurant-info-card.component';
import styled from 'styled-components';

const SafeArea = styled(SafeAreaView)`
flex: 1;
marginTop: ${StatusBar.currentHeight}px;
`;

const SearchContainer = styled.View `
padding: 16px;`;

const RestaurantListContainer = styled.View`
flex: 1,
padding: 16px,
backgroundColor: blue;
`;

const RestaurantsScreen = () => {
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar/>
      </SearchContainer>
      <RestaurantListContainer>
        <RestaurantInfoCard />
      </RestaurantListContainer>

    </SafeArea>
  )
}


export default RestaurantsScreen