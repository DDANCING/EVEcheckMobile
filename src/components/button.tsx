
import { Text, TouchableOpacity, ActivityIndicator, TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
  title: string
  isLoading?: boolean
}

export function Button({title, isLoading = false, ...rest }: Props){
  return(
    <TouchableOpacity 
    activeOpacity={0.6}
    disabled={isLoading}
     className="w-full h-14 bg-yellow-500 items-center justify-center rounded-lg"
     
     >
      {
        isLoading ? (<ActivityIndicator className="text-gray-300"/>
      ) : (

        
        <Text className="text-gray-300 text-base font-bold uppercase">
        {title}
      </Text>
     ) }
    </TouchableOpacity>
  )
}