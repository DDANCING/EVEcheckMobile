import "@/styles/global.css";
import { Slot } from "expo-router"
import { useFonts, Economica_400Regular , Economica_700Bold ,Economica_400Regular_Italic  } from "@expo-google-fonts/economica"
import { Loading } from "@/components/loading";

export default function layout(){
 const [fontsLoaded] = useFonts({
  Economica_400Regular,
   Economica_700Bold,
   Economica_400Regular_Italic, 
 })
 if(!fontsLoaded){
  return <Loading/>
 }


  return <Slot />
}