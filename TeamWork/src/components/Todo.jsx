import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, ScrollView, Modal} from 'react-native';

import Tarjeta from './Tarjeta';
import close from '../images/X.png'

const alto = Dimensions.get ('window').height
const ancho = Dimensions.get ('window').width

const Todo = () => {
    const [view, setView] = useState(false);
    
    return (
        <View>

        <ScrollView style = {style.scroll}> 
        <Tarjeta imagen = { require ("../images/tarjeta3.png")} tarea = "hacer las tarjetas"
        action = {() => {setView(true)}}
        />
        </ScrollView>

        <Modal animationType='fade' 
        onDismiss={ () => console.log("close") }
        onShow={ () => console.log("show")} 
        visible = {false}>

            <View style= {{
                flex: 1, 
                backgroundColor: "rgba(1, 1, 1, 0.5)",
                justifyContent: "center",
                alignItems: "center",
            }}>

                <View style= {{
                    height: 70,
                    width: 80,
                    backgroundColor: "#B9C3CD",
                    borderBottomEndRadius: 20,
                    borderBottomStartRadius: 20, 
                }}>

                    <View
                    style= {{
                        height: 45,
                        width: 100,
                        flexDirection: "row",
                        justifyContent: "flex-end",
                        alignItems: "center",
                        paddingHorizontal: 15, 
                        paddingVertical: 15,
                    }}>
                        
                        <TouchableOpacity
                        onPress={() => setView(false)}
                        >

                        <Image
                            source ={close}
                            style = {{
                                height: 30,
                                width: 30,

                            }}
                        />

                        </TouchableOpacity>
                        

                    </View>

                </View>
                
            </View>

        </Modal>

        </View>
    )
}
export default Todo

const style = StyleSheet.create( {
    
    scroll: {
        backgroundColor: "white",
        height: 1000,
        width: 1000,
        position: "absolute",
        marginLeft: 100,
        marginTop: 170 ,
    },
})