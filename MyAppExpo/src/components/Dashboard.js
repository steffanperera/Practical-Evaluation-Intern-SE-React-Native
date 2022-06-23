import React from "react";

// packages
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { createDrawerNavigator } from "@react-navigation/drawer";

// screens
import Home from "../screens/Home";
import Explore from "../screens/Explore";
import Profile from "../screens/Profile";

const homeName = "Home";
const exploreName = "Explore";
const profileName = "Profile";

const Tab = createBottomTabNavigator();

const Dashboard = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? "home" : "home-outline";
            } else if (rn === exploreName) {
              iconName = focused ? "search" : "search-outline";
            } else if (rn === profileName) {
              iconName = focused ? "settings" : "settings-outline";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name={homeName} component={Home} />
        <Tab.Screen name={exploreName} component={Explore} />
        <Tab.Screen name={profileName} component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Dashboard;
