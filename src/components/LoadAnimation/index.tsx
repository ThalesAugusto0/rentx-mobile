import React from "react";
import LottieView from "lottie-react-native";
import CarTypes from "../../assets/CarTypes.json";
import { Container } from "./styles";

export function LoadAnimation() {
  return (
    <Container>
      <LottieView
        source={CarTypes}
        style={{ height: 200 }}
        resizeMode="contain"
        autoPlay
        loop
      />
    </Container>
  );
}
