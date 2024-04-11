import { View, Image, StatusBar, Alert } from "react-native"
import { Input } from "@/components/input"
import { FontAwesome, MaterialIcons } from "@expo/vector-icons"
import { Link, router } from "expo-router"
import { useState } from "react"



import { colors } from "@/styles/colors"
import { Button } from "@/components/button"

export default function register() {
   const [name, setName] = useState("")
   const [email, setEmail] = useState("")

  function handleRegister(){
    if(!name.trim() || !email.trim()){
      return Alert.alert("Atenção", "Preencha todos os campos")
}
router.push("/ticket")
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
  <FontAwesome
  name="user-circle" 
  color={colors.green[200]} size={25} /> 
  <Input.Field 
  className="font-regular w-full text-base text-green-200" 
  placeholder="Nome completo"
  onChangeText={setName} />
  </Input> 
  <Input>
  <MaterialIcons
  name="alternate-email" 
  color={colors.green[200]} size={25} /> 
  <Input.Field 
  className="font-regular w-full text-base text-green-200" 
  placeholder="E-mail" 
  keyboardType="email-address"
  onChangeText={setEmail}
  />
  </Input> 
  <Button title="Realizar inscrição" onPress={handleRegister} />

  <Link  
  href="/" 
  className="text-green-200 text-base font-bold text-center mt-8" > 
  Já possui ingresso? 
  </Link>
   </View>
     </View>
    
  )
}
