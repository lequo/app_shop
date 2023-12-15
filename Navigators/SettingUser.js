import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import ManageUser from "../Screens/User/ManageUser"
import EditUser from "../Screens/User/EditUser";

const Stack = createStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator>
            {/* <Stack.Screen 
                name="Products"
                component={Products}
                options={{
                    title: "Products"
                }}
            />
            <Stack.Screen name="Categories" component={Categories} />
            <Stack.Screen name="Orders" component={Orders} /> */}
            <Stack.Screen name="ManageUser" component={ManageUser} options={{
                headerShown: false
            }}/>
             <Stack.Screen name="EditUser" component={EditUser} options={{
                headerShown: false
            }}/>
        </Stack.Navigator>
    )
}
export default function SettingNavigator() {
    return <MyStack />
}