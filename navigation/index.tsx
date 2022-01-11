/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import {  FontAwesome5, Octicons, Foundation } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ModalScreen from '../screens/DonateMoney';
import NotFoundScreen from '../screens/NotFoundScreen';
import GiveDonateTabScreen from '../screens/GiveDonateTabScreen';
import HistoryTabScreen from '../screens/HistoryTabScreen';
import SupportTabScreen from '../screens/SupportTabScreen';
import SettingsTabScreen from '../screens/SettingsTabScreen';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="GiveDonateTab"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}>
      <BottomTab.Screen
        name="GiveDonate"
        component={GiveDonateTabScreen}
        options={({ navigation }: RootTabScreenProps<'GiveDonateTab'>) => ({
          title: 'Give/Donate',
          tabBarIcon: ({ color }) => <TabBarIcon name="donate"  color='#dd7a58' />,
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('Modal')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.4 : 1,
              })}>
              <FontAwesome5
                name="donate"
                size={33}
                color={Colors[colorScheme].text}
                style={{ marginRight: 33.33 }}
              />
            </Pressable>
          ),
        })}
      />
      <BottomTab.Screen
        name="History"
        component={HistoryTabScreen}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="history"  color='#dd7a58' />,
        }}
      />
          <BottomTab.Screen
        name="Support"
        component={SupportTabScreen}
        options={{
          tabBarIcon: ({ color }) => <Foundation name="telephone" size={25} color='#dd7a58' />,
        }}
      />
          <BottomTab.Screen
        name="Settings"
        component={SettingsTabScreen}
        options={{
          tabBarIcon: ({ color }) => <Octicons name="settings" size={25}  color='#dd7a58' />,
        }}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome5>['name'];
  color: string;
}) {
  return <FontAwesome5 size={25} style={{ marginBottom: -1.05 }} {...props} />;
}
