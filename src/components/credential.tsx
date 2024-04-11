import { View, Image, ImageBackground, Text, TouchableOpacity } from "react-native"
import { Feather } from "@expo/vector-icons"
import { colors } from "@/styles/colors"

type Props = {
  image?: string 
  onChangeAvatar?: () => void
}

export function Credential({onChangeAvatar, image }: Props){
  return (
    <View className="w-full self-stretch items-center">
      <Image source={require("@/assets/ticket/band.png")} 
      className="w-24 h-52 z-10"
    />
     <View className="bg-black/30 self-stretch items-center pb-6 border border-green-400/30 
     mx-3 rounded-2xl -mt-16">
      <ImageBackground source={require("@/assets/ticket/header.png")} className="px-6 py-8 h-64 items-center self-stretch border-b border-green-400/30 overflow-hidden"> 
    <View className="w-full flex-row items-center justify-between">
      <Text className="text-zinc-50 font-bold text-lg" > Evento teste </Text>
       <Text className="text-zinc-50 text-lg font-bold">#123</Text>
       </View>

     
      </ImageBackground>
      <View className="w-28 h-28 bg-black/40 rounded-full mt-2 justify-center items-center">
      { image? (
         <TouchableOpacity 
         activeOpacity={0.5} 
         className="w-24 h-24 rounded-full items-center justify-center"
         onPressOut={onChangeAvatar}
         >
         <Image source={{uri: image}} 
        className="w-24 h-24  rounded-full"/>
         </TouchableOpacity> 
       
      ) : ( 
      <TouchableOpacity 
      activeOpacity={0.5} 
      className="w-24 h-24 rounded-full items-center justify-center"
      onPressOut={onChangeAvatar}
      >
      <Feather name="camera" color={colors.green[400]} size={32} />
      </TouchableOpacity> 
    )}
      </View>

      <Text className="font-bold text-zinc-50 text-3xl mt-4"> Marcelo Mazzonetto </Text>
      <Text className="font-bold text-zinc-50/50 text-lg mt-1"> Marcmaker@outlook.com </Text>
      <Image source={require("@/assets/ticket/qrcode.png")} className="mt-1 w-48 h-48"/>
      <TouchableOpacity activeOpacity={0.7}>
      <Text className="font-bold text-green-400 zinc-50 text-lg mt-1"> Ampliar QrCode </Text>
      </TouchableOpacity>
      </View>
    </View>
  )
}