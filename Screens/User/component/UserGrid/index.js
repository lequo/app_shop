import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./styles";
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const UserGrid = ({data,setIsUpdate,index}) => {

  const navigation = useNavigation();


  const handleGoDetail = () => { 
    navigation.navigate('EditUser',{data,index})
   }

  const handleGoEdit = () => { 

   }

  return (
    <View key={index.toString()} style={styles.layoutGrid}>
      <View style={styles.stt}>
        <Text style={styles.layoutTextHeader}>{index}</Text>
      </View>
      <View style={styles.userName}>
        <Text style={styles.layoutTextHeader} numberOfLines={1}>{data?.email}</Text>
      </View>
      <View style={styles.position}>
        <Text style={styles.layoutTextHeader} numberOfLines={1}>{data?.name}</Text>
      </View>
      <View style={[ styles.boxIcon]}>
        <TouchableOpacity style={styles.icon} onPress={handleGoDetail}>
          <FontAwesome name="eye" size={14} color={'green'} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon} onPress={handleGoEdit}>
          <FontAwesome name="trash" size={14} color={'red'} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default UserGrid