import { View, Text, StyleSheet } from "react-native";
import React from "react";
import styled from "styled-components";
import { Avatar, Button, Card, Paragraph } from "react-native-paper";

const RestaurantCard = styled(Card)`
background-color: white;`;

const RestaurantCardCover = styled(Card.Cover)`
padding: 20px;
background-color: white;`
;


const Title = styled.Text`
padding: 16px;
color: red;
`; 

const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon,
    photos = [
      "https://ad962edbae8ba7b03b7f-d10007df79b5b7a4e475a291e50a08cf.ssl.cf3.rackcdn.com/ouvrir-un-restaurant/comment-ouvrir-un-restaurant.png",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;

  return (
   
    <Card elevation = {5}>
      
    <Card.Cover key = {name} source ={{ uri: photos[0] }} />
      
      
      <Title>{name}</Title>
      
    </Card>
  
  )

};



export default RestaurantInfoCard;
