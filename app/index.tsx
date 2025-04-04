import CustomButton from "@/components/Title";
import React, { useState } from "react";
import { View, Text, Button } from "react-native";

export default function HomeScreen(){
    const [count, setCount] = useState(0);

    return(
        <View>
            <Text>Bem Vindo ao meu app!</Text>
            <Text>contador: {count}</Text>
            <Button title="Aumentar" onPress={() => {setCount(count + 1)}}/>
            <Button title="Diminuir" onPress={() =>{setCount(count - 1)}}/>
            <Button title="reiniciar" onPress={() =>{setCount(0)}}/>
                <CustomButton title="NOME"/>
        </View>
        
    );
}