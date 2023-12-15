import { View, Text,Dimensions,TextInput } from 'react-native'
import React from 'react'




const width = Dimensions.get('screen').width

const InputText = ({value = null,onChangeText = ()=> {},title = null}) => {
  return (
    <View style={{height: 120,width: width - 20,padding: 20,alignSelf: 'center'}}>
        <Text style={{fontWeight: 'bold',fontSize: 14,marginBottom: 10}}>{title}</Text>
        <TextInput
            value={value}
            onChangeText={onChangeText}
            style={{width: '100%',padding:10,height: 60,borderRadius: 10,borderWidth: 1}}
        />
    </View>
  )
}

export default InputText