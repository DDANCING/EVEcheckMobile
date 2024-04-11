import { View, Image, StatusBar, Alert } from "react-native"
import { useState } from "react"
import { Input } from "@/components/input"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { Link } from "expo-router"


import { colors } from "@/styles/colors"
import { Button } from "@/components/button"

export default function Home() {
  const [code, setCode] = useState("")

  function handleAccessCredential(){
    if(!code.trim()){
        return Alert.alert("Atenção", "Informe o código do ingresso")
}else{
       
    }
  }

  return (
    <View 
    className="flex-1 bg-gray-300 items-center justify-center p-8 gap-3" >
    <StatusBar barStyle={"light-content"}/>  
  <Image 
  className="h-20"
  resizeMode="contain" 
  source={require("@/assets/logo.png")} 
  alt="Logo" 
  />
  <View 
  className="items-center gap-3 w-full"> 
  <Input>
  <MaterialCommunityIcons 
  name="ticket-confirmation-outline" 
  color={colors.green[200]} size={25} /> 
  <Input.Field 
  className="font-regular w-full text-base text-green-200" 
  placeholder="Código do ingresso" 
  onChangeText={setCode}
  />
  </Input> 
  <Button 
  title="Acessar credencial" 
  onPress={handleAccessCredential} />

  <Link  
  href="/register" 
  className="text-green-200 text-base font-bold text-center mt-8" > 
  Ainda não possui ingresso? 
  </Link>
   </View>
     </View>
  )
}
