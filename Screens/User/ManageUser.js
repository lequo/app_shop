import { View, Text, FlatList, TouchableOpacity,ScrollView,StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { UserGrid } from './component';
import { useNavigation } from "@react-navigation/native";
import baseURL from '../../assets/common/baseUrl';
import Toast from 'react-native-toast-message';

const ManageUser = () => {

    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);





    useEffect(() => {

      setLoading(true)

      fetch(`${baseURL}categories/getData`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
    })
    .then((res) => res.json())
    .then((data) => {
      if(!!data?.data){
        setData(data?.data)
        setLoading(false)
      }
     
    }).catch(e => {
      setLoading(false)
      Toast.show({
        topOffset: 60,
        type: "error",
        text1: "Can not get list user",
        text2: ""
    });
    })
    }, [])
    
    
  
    const navigation = useNavigation();
  
    // const update = useSelector((states) => states.User.update);
  
    // const dispatch = useDispatch();
  
    // const user = useSelector((states) => states.User.user[0]);

    if (loading) {
        // return <Loading />;
      }

    const showListUser = ({ item,index }) => {
        return <UserGrid data={item} index={index}/>;
      };

      const handleAddUser = () => {
       
      };
    
      const handleManagePermission = () => {
        //navigation.navigate("ManagePermission");
      };



      console.log('AAAAAAAAA',data?.length);
    

  return (
    <ScrollView style={styles.container}>
        <TouchableOpacity style={styles.addUser} onPress={handleAddUser}>
        <Text style={styles.layoutTextHeader}>Thêm tài khoản</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.managePermission}
        onPress={handleManagePermission}
      >
        <Text style={styles.layoutTextHeader}>
          Quản lý người quản lý khu vực
        </Text>
      </TouchableOpacity>
    <View style={styles.layout}>
      <View style={styles.layoutGrid}>
        <View style={styles.stt}>
          <Text style={styles.layoutTextHeader}>TT</Text>
        </View>
        <View style={styles.userName}>
          <Text style={styles.layoutTextHeader} numberOfLines={1}>
          Email 
          </Text>
        </View>
        <View style={styles.position}>
          <Text style={styles.layoutTextHeader}>User</Text>
        </View>
        <View style={[styles.boxIcon]}>
          <Text style={styles.layoutTextHeader}>HĐ</Text>
        </View>
      </View>
      <FlatList
        listKey={(item) => item.id.toString()}
        renderItem={showListUser}
        data={data}
      />
    </View>
  </ScrollView>
  )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 20,
      paddingVertical: 20,
      backgroundColor: "#EBFBFF",
    },
    layout: {
      backgroundColor: 'white',
      shadowColor:'black',
      shadowOffset: {
        width: 1,
        height: 2,
      },
      shadowOpacity: 0.2,
      shadowRadius: 5,
      elevation: 5,
      
    },
    layoutTitle: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: 'green',
      height: 40
    },
    column: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    layoutTextHeader:{
      fontWeight: 'bold',
      color: 'white'
    },
    layoutGrid: {
      backgroundColor: 'green',
      flexDirection: "row",
      paddingVertical: 12,
      borderBottomWidth:1
    },
    column1:{
      width:50,
      justifyContent: "center",
      alignItems: "center",
    },
    boxIcon:{
      width: 50,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems:'center',
    },
    icon:{
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems:'center',
    },
    layoutTextHeader:{
      color: 'green'
    },
    stt:{
      width: 50,
      justifyContent: 'center',
      alignItems: 'center',
    },
    userName:{
      width: 170,
      marginRight:10
    },
    position:{
      width: 80
    },
    layoutTextHeader:{
      color: 'white'
    },
    addUser:{
      width: 126,
      height: 30,
      backgroundColor: 'green',
      justifyContent:'center',
      alignItems: 'center',
      marginBottom: 20,
      borderRadius: 9
    },
    managePermission:{
      position: 'absolute',
      width: 209,
      height: 30,
      backgroundColor: 'red',
      justifyContent:'center',
      alignItems: 'center',
      marginBottom: 20,
      borderRadius: 9,
      right: 0
    }
  });

export default ManageUser