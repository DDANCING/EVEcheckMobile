import { Header } from "@/components/header"
import { View, StatusBar, Text, ScrollView, TouchableOpacity, Alert } from "react-native"
import { Credential } from "@/components/credential"
import { FontAwesome } from "@expo/vector-icons"
import { colors } from "@/styles/colors"
import { Button } from "@/components/button"
import { useState } from "react"
import * as ImagePicker from "expo-image-picker"


export default function Ticket(){
  const [image, setImage] = useState("")

  async function handleSelectImage() {
    try{
const result = await ImagePicker.launchImageLibraryAsync({
  mediaTypes: ImagePicker.MediaTypeOptions.Images,
  allowsEditing: true,
  aspect: [4, 4],

})

if(result.assets){
 setImage(result.assets[0].uri)
}
    }catch(error) {
      console.log(error)
      Alert.alert("Foto", "Não foi possível carregar a imagem")

    }
    
  }
  return (
    <View className="flex-1 bg-gray-300">
  
      <StatusBar barStyle={"light-content"}/>
      <Header title="Credencial"  />
      <ScrollView contentContainerClassName="px-3">
      <Credential image={image} onChangeAvatar={handleSelectImage}/>
      <TouchableOpacity >
      <FontAwesome 
       name="angle-double-down"
       size={24} 
       color={colors.green[400]} 
       className="self-center my-6"/>
       <Text 
       className="font-bold text-green-400 self-center -mt-6 mb-10"
       >
        Compartilhar credencial
        </Text>
        <Button title="Compartilhar"/>
        
        <TouchableOpacity>
          <Text className="text-base text-zinc-50 text-center pb-8"> Remover Ingresso  </Text>
        </TouchableOpacity>


       </TouchableOpacity>
       </ScrollView>
    </View>
  )
}