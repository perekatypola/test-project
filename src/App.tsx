/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from "react";
 import type { FC } from "react";
 import Navigator from "./Navigation/Navigator";
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
 } from "react-native";
 
 import {
   Colors,
   DebugInstructions,
   Header,
   LearnMoreLinks,
   ReloadInstructions,
 } from "react-native/Libraries/NewAppScreen";
 
 const App: FC = () => {
   return (
     <SafeAreaView>
       <Navigator/>
     </SafeAreaView>
   );
 };
 
 export default App;