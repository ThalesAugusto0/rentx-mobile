import React from "react";
import LogoSvg from "../../assets/logo_background_gray.svg";
import DoneSvg from "../../assets/done.svg";
import { StatusBar, useWindowDimensions } from "react-native";
import { Container, Title, Content, Message, Footer } from "./styles";
import { ConfirmButton } from "../../components/ConfirmButton";
import { useNavigation, useRoute } from "@react-navigation/native";

interface Params {
  title: string;
  message: string;
  nextScreenRoute: any;
}

interface NavigationProps {
  goBack: any;
  navigate: (
    screen: string
    // carObject: {
    //   car: CarDTO;
    // }
  ) => void;
}

export function Confirmation() {
  const { width } = useWindowDimensions();

  const route = useRoute();

  const navigation = useNavigation<NavigationProps>();
  const { title, message, nextScreenRoute } = route.params as Params;

  function handleConfirm() {
    navigation.navigate(nextScreenRoute);
  }
  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <LogoSvg width={width} height={80} />
      <Content>
        <DoneSvg width={80} height={80} />
        <Title>{title}</Title>
        <Message>{message}</Message>
      </Content>
      <Footer>
        <ConfirmButton title="OK" onPress={handleConfirm} />
      </Footer>
    </Container>
  );
}
