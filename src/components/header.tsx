import { View, Text } from 'react-native';



type Props = {
  title: string
}

export function Header({title}: Props){
  return(
    <View className=' w-full h-32 flex-row items-end bg-black/30 px-8 pb-4 border-b border-green-400/30'>
      
      <Text className='flex-1 text-green-400/80 font-bold text-2xl px-4'>
        {title}
        </Text>
      </View>
  )
}