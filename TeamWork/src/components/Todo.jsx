import { useState } from 'react';
import { View, Modal,  Text, StyleSheet, TouchableOpacity, Dimensions, Button,  ScrollView, Image,
     TextInput} from 'react-native';

import Tarjeta from './Tarjeta';
import close from '../images/X.png'

import Add from './Add';


const alto = Dimensions.get ('window').height
const ancho = Dimensions.get ('window').width

const NuevoTodo = [
    {
        "img" : require("../images/tarjeta4.png"),
        "nombre": "tarea",

    },
    {
        "img" : require("../images/tarjeta2.png"),
        "nombre": "tarea2",

    },
    {
        "img" : require("../images/tarjeta3.png"),
        "nombre": "tarea3",

    },
    {
        "img" : require("../images/tarjeta1.png"),
        "nombre": "tarea4",

    }
]

const Todo = () => {

    
    const [view, setView] = useState(false);
    return (
        <View>
        <ScrollView style = {style.scroll}> 
        {NuevoTodo.map ((t)=> {
            return (
                <TouchableOpacity
                    onPress = {() => {setView(true)}}
                >
                    <Tarjeta
                imagen={t.img} tarea = {t.nombre} 
            />
            </TouchableOpacity>
            )
        })}
        
        </ScrollView>

            <Modal animationType='fade' 
            onDismiss={ () => console.log("close") }
            onShow={ () => console.log("show")} 
            visible = {view}>

                <View style= {{
                    flex: 1, 
                    backgroundColor: "rgba(1, 1, 1, 0.5)",
                    justifyContent: "center",
                    alignItems: "center",
                }}>

                    <View style= {{
                        height: 450,
                        width: 330,
                        backgroundColor: "#B9C3CD",
                        borderBottomEndRadius: 20,
                        borderBottomStartRadius: 20, 
                        borderTopRightRadius: 20,
                        borderTopLeftRadius: 20,
                    }}>

                        <View
                        style= {{
                            height: 45,
                            width: -130,
                            flexDirection: "row",
                            justifyContent: "flex-end",
                            alignItems: "center",
                            paddingHorizontal: 10, 
                            paddingVertical: 10,
                        }}>
                            
                            <TouchableOpacity
                            onPress={() => setView(false)}
                            >

                            <Image
                                source ={close}
                                style = {{
                                    height: 20,
                                    width: 40,
                                }}
                            />
                            </TouchableOpacity>

                        </View> 

                            <View
                            style={{
                                marginLeft: 15,
                                
                            }}>
                                <Text style={style.titulo}> ASIGNACION: </Text>
                                    <TextInput style={style.respuesta}> </TextInput>
                                <Text style={style.titulo}> FECHA LIMITE: </Text>
                                    <TextInput style={style.respuesta}></TextInput>
                                <Text style={style.titulo}> CONCEPTO: </Text>
                                    <TextInput style={style.respuesta}></TextInput>
                            </View>
                        
                    </View>
                    
                </View>

            </Modal>

             <Add/>
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
        marginTop: -10,
    },
    text: {
        color: "white",   

    },
    titulo: {
        color: "#022649",
        fontSize: 17,
        fontStyle: "italic",
        fontWeight: 'bold',
    },
    respuesta: {
        color: "#47617B",
        fontSize: 17,
        fontStyle: "italic",
        fontWeight: 'bold',
    },
})