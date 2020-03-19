import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import reducers from './reducers'
import {Provider} from "react-redux";
import {createStackNavigator} from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BookList from "./components/bookList";
import AddBook from "./components/addBook";
import SingleBook from "./components/singleBook";

const store = createStore(reducers, applyMiddleware(thunk));
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
      <Provider store = {store}>
          <NavigationContainer>
              <Stack.Navigator>
                  <Stack.Screen name="Book List" component={BookList} />
                  <Stack.Screen name="Add Book" component={AddBook} />
                  <Stack.Screen name="Single Book" component={SingleBook} />
              </Stack.Navigator>
          </NavigationContainer>
      </Provider>
  );
}