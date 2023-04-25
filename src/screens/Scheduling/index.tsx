import React from "react";
import { useTheme } from "styled-components";
import { BackButtton } from "../../components/BackButtton";
import ArrowSvg from "../../assets/arrow.svg";
import {
  Container,
  Header,
  Title,
  RentalPeriod,
  DateInfo,
  DateTitle,
  DateValue,
  Content,
  Footer,
} from "./styles";
import { StatusBar } from "react-native";
import { Button } from "../../components/Button";

export function Scheduling() {
  const theme = useTheme();
  return (
    <Container>
      <Header>
        <StatusBar
          barStyle="light-content"
          translucent
          backgroundColor="transparent"
        />
        <BackButtton onPress={() => {}} color={theme.colors.shape} />
        <Title>
          Escolha uma {"\n"}data de início e {"\n"}fim do aluguel
        </Title>
        <RentalPeriod>
          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue selected={false}></DateValue>
          </DateInfo>

          <ArrowSvg />

          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue selected={false}></DateValue>
          </DateInfo>
        </RentalPeriod>
      </Header>
      <Content></Content>
      <Footer>
        <Button title="Confirmar" />
      </Footer>
    </Container>
  );
}
