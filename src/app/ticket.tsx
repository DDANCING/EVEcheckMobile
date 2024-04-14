import { Header } from "@/components/header"
import { View, StatusBar, Text, ScrollView, TouchableOpacity, Alert, Modal, Share } from "react-native"
import { Credential } from "@/components/credential"
import { FontAwesome } from "@expo/vector-icons"
import { colors } from "@/styles/colors"
import { Button } from "@/components/button"
import { useState } from "react"
import * as ImagePicker from "expo-image-picker"
import { QRCode } from "@/components/qrcode"
import { useBadgeStore } from "@/store/badge-store"
import { Redirect } from "expo-router"
import { MotiView } from "moti"



export default function Ticket(){
  const [ expandQRCode, setExpandQRCode ] = useState(false)
  const badgeStore = useBadgeStore()
  
  async function handleShare() {
    try{
    if(badgeStore.data?.checkInURL){
      await Share.share({
        message: `Olá gostaria de compartilhar este evento com você ${badgeStore.data?.checkInURL}`,
      })
    }
    } catch(error){
    console.log(error)
    Alert.alert("Compartilhar", "Não foi possível compartilhar o ingresso")
    }
  }
  
  async function handleSelectImage() {
    try{
const result = await ImagePicker.launchImageLibraryAsync({
  mediaTypes: ImagePicker.MediaTypeOptions.Images,
  allowsEditing: true,
  aspect: [4, 4],

})

if(result.assets){
 badgeStore.updateAvatar(result.assets[0].uri)
}
    }catch(error) {
      console.log(error)
      Alert.alert("Foto", "Não foi possível carregar a imagem")

    }
  }
   
  if(!badgeStore.data?.checkInURL){
   return <Redirect href="/"/>
  }

  return (
    <View className="flex-1 bg-gray-300">
  
      <StatusBar barStyle={"light-content"}/>
      <Header title="Credencial"  />
      <ScrollView >
      <Credential data={badgeStore.data} onChangeAvatar={handleSelectImage} onShowQRCode={() => setExpandQRCode(true)}/>
      
      <MotiView
      from={{
        translateY: 0
      }}
      animate={{
        translateY: -10
      }}
      transition={{
        loop: true,
      }}
      >
      <FontAwesome 
       name="angle-double-down"
       size={24} 
       color={colors.green[400]} 
       className="self-center my-6"/>
       </MotiView>
       <Text 
       className="font-bold text-green-400 self-center -mt-6 mb-10"
       >
        Compartilhar credencial
        </Text>
        <Button title="Compartilhar " event={badgeStore.data.eventTitle} onPress={handleShare}/>
        
        <TouchableOpacity  onPress={() => badgeStore.remove()}>
          <Text className="text-base text-zinc-50 text-center pb-8"> Remover Ingresso  </Text>
        </TouchableOpacity>

       </ScrollView>
       <Modal visible={expandQRCode} statusBarTranslucent animationType="fade">
        <View className="flex-1 bg-gray-300 items-center justify-center">
        < TouchableOpacity activeOpacity={0.5} >
        <QRCode value="a" size={350}/>
        <Text className=" text-green-400 font-bold text-center text-xl mt-10 border border-green-200 p-2 rounded-lg">
          Fechar
        </Text>
        </TouchableOpacity>
        </View>
       </Modal>
    </View>
  )
}