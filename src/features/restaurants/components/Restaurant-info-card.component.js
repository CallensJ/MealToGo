import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import styled from "styled-components";
import { Avatar, Button, Card, Paragraph } from "react-native-paper";
import { SvgXml } from "react-native-svg";

import Spacer from "../../../components/spacer/spacer.component";
import star from "../../../../assets/star";
import open from "../../../../assets/open";


const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;
const Address = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

const Title = styled(Text)`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.body};
  color: ${(props) => props.theme.colors.ui.primary};
`;

const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const Rating = styled.View`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;
const Section = styled.View`
  flex-direction: row;
  align-items: center;
`;

const SectionEnd = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;




const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon = "https://img.icons8.com/external-xnimrodx-lineal-xnimrodx/64/undefined/external-open-mall-xnimrodx-lineal-xnimrodx.png",
    photos = [
      "https://ad962edbae8ba7b03b7f-d10007df79b5b7a4e475a291e50a08cf.ssl.cf3.rackcdn.com/ouvrir-un-restaurant/comment-ouvrir-un-restaurant.png",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = restaurant;



  const ratingArray = Array.from(new Array(Math.ceil(rating)));
  console.log(ratingArray);
  return (
    <Card elevation={5}>
      <Card.Cover key={name} source={{ uri: photos[0] }} />

      <Info>
        <Title>{name}</Title>
        <Section>
          <Rating>
            
            {ratingArray.map((key) => (
              <SvgXml xml={star} key={key} width={20} height={20} />
            ))}
          </Rating>
          <SectionEnd>
            {isClosedTemporarily && (
              <Text style = {{color: "red"}}>
              CLOSED TEMPORARILY 
              </Text>
              )}
            <Spacer variant="left.large"/>
            {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            <Spacer variant="left.large"/>

            <Image style = {{ width: 15, height: 15 }} source = {{uri: icon }} />
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </Info>
    </Card>
  );
};

export default RestaurantInfoCard;
