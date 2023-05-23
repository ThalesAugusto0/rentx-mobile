import React from "react";
import { BackButtton } from "../../../components/BackButtton";
import { Bullet } from "../../../components/Bullet";
import { Input } from "../../../components/Input";
import { Button } from "../../../components/Button";
import { useNavigation } from "@react-navigation/native";
import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

import {
  Container,
  Header,
  Steps,
  Title,
  SubTitle,
  Form,
  FormTitle,
} from "./styles";

export function SignUpFirstStep() {
  const navigation = useNavigation();

  function handleBack() {
    navigation.goBack();
  }

  function handleNextStep() {
    navigation.navigate("SignUpSecondStep");
  }
  return (
    <KeyboardAvoidingView behavior="position" enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <Header>
            <BackButtton onPress={handleBack} />
            <Steps>
              <Bullet active />
              <Bullet />
            </Steps>
          </Header>

          <Title>Crie sua{"\n"}conta</Title>
          <SubTitle>Faça seu cadastro{"\n"}forma rápida e fácil</SubTitle>

          <Form>
            <FormTitle>1. Dados</FormTitle>
            <Input iconName="user" placeholder="Nome" />
            <Input
              iconName="mail"
              placeholder="E-mail"
              keyboardType="email-address"
            />
            <Input
              iconName="credit-card"
              placeholder="CNH"
              keyboardType="numeric"
            />
          </Form>
          <Button title="Próximo" onPress={handleNextStep} />
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
