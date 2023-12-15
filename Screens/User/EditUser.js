import { View, Text,FlatList, ScrollView, TouchableOpacity,ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { InputText } from './component'
import Toast from 'react-native-toast-message';
import baseURL from '../../assets/common/baseUrl';
import AsyncStorage from '@react-native-community/async-storage';

const EditUser = ({route}) => {


    const index = route?.params?.index;

    const data =  route?.params?.data;


    const [email, setEmail] = useState(data?.email)

    const [name, setName] = useState(data?.name)

    const [isAdmin, setIsAdmin] = useState()


    const [phone, setPhone] = useState(data?.phone)


    const [country, setCoutry] = useState(data?.country)


    const [city, setCity] = useState(data?.city)

    const [isLoading, setIsLoading] = useState(false)


    const [token, setToken] = useState()


    useEffect(() => {
        AsyncStorage.getItem("jwt")
        .then((res) => {
            setToken(res)
        })
        .catch((error) => console.log(error))
    }, [])
    


    if(!!isLoading){
        return  <View style={{flex: 1,backgroundColor: 'white',alignItems: 'center',justifyContent: 'center'}}><ActivityIndicator size="large" color="#00ff00" /></View>
    }




    const handleUpdate = () => {
        const dataUser =  {
            name,
            email,
            city,
            country,
            isAdmin,
            phone,
            id: data?._id
        }

        setIsLoading(true)
        fetch(`${baseURL}categories/updateuser`, {
            method: "POST",
            body: JSON.stringify(dataUser),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
        })
        .then((res) => res.json())
        .then((data) => {
        setIsLoading(false)
            Toast.show({
                topOffset: 60,
                type: "success",
                text1: data?.message,
            });
         
        }).catch(e => {
          setIsLoading(false)
          Toast.show({
            topOffset: 60,
            type: "error",
            text1: "Can not update user",
            text2: ""
        });
        })
    }


    return (
        <ScrollView style={{flex: 1}}>
             <InputText title={'Email'} value={email} onChangeText={(txt)=>{
                setEmail(txt)
             }}/>
             <InputText title={'Name'} value={name} onChangeText={(txt)=>{
                setName(txt)
             }}/>

<InputText title={'Phone'} value={phone} onChangeText={(txt)=>{
                setPhone(txt)
             }}/>
             <InputText title={'City'} value={city} onChangeText={(txt)=>{
                setCity(txt)
             }}/>
             <InputText title={'Country'} value={country} onChangeText={(txt)=>{
                setCoutry(txt)
             }}/>
               <InputText title={'Admin'} value={isAdmin} onChangeText={(txt)=>{
                setIsAdmin(txt)
             }}/>

             <TouchableOpacity onPress={handleUpdate} style={{marginTop:10,justifyContent: 'center',alignItems: 'center',width: 350,height: 40,backgroundColor: 'blue',marginBottom: 30,borderRadius: 15,alignSelf: 'center'}}>
                <Text style={{color: 'white',fontSize: 15}}>{'Update'}</Text>
             </TouchableOpacity>
        </ScrollView>
    )
}

export default EditUser