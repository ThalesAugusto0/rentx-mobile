import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "../screens/Home";
import { CarDetails } from "../screens/CarDetails";
import { Scheduling } from "../screens/Scheduling";
import { SchedulingComplete } from "../screens/SchedulingComplete";
import { SchedulingDatails } from "../screens/SchedulingDatails";
import { MyCars } from "../screens/MyCars";
import { Splash } from "../screens/Splash";
import { Signin } from "../screens/Signin";

const { Navigator, Screen } = createStackNavigator();

export function StackRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }} initialRouteName="Signin">
      {/* <Screen name="Splash" component={Splash} /> */}
      <Screen name="Signin" component={Signin} />
      <Screen
        name="Home"
        component={Home}
        options={{ gestureEnabled: false }}
      />
      <Screen name="CarDetails" component={CarDetails} />
      <Screen name="Scheduling" component={Scheduling} />
      <Screen name="SchedulingComplete" component={SchedulingComplete} />
      <Screen name="SchedulingDatails" component={SchedulingDatails} />
      <Screen name="MyCars" component={MyCars} />
    </Navigator>
  );
}
