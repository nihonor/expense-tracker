import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { StyleSheet } from "react-native";

export default function TabLayout() {
  return (
        <Tabs
       screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#3462eb",
        tabBarInactiveTintColor: "#94a3b8",
        tabBarActiveBackgroundColor:"#efedfc",
        tabBarStyle: {
          backgroundColor: "#FFFFFF",
          borderTopColor: "grey",
          borderTopWidth:0.5,
         
        },
      }}
    >

        <Tabs.Screen name="index" options={{title:"Home",tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),}} />
        <Tabs.Screen name="add"  options={{title:"Add",tabBarIcon: ({ color, size }) => (
            <Ionicons name="add-outline" size={size} color={color} />
          ),}}/>
        <Tabs.Screen name="analytics" options={{title:"Analytics",tabBarIcon: ({ color, size }) => (
            <Ionicons name="analytics-outline" size={size} color={color} />
          ),}} />
        <Tabs.Screen name="search"  options={{title:"Search",tabBarIcon: ({ color, size }) => (
            <Ionicons name="search-outline" size={size} color={color} />
          ),}}/>
        <Tabs.Screen name="settings" options={{title:"Settings",tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings-outline" size={size} color={color} />
          ),}}/>
    </Tabs>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

});