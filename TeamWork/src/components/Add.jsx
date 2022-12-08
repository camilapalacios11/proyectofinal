import react, {useState} from "react";
import { View, StyleSheet, Text, TouchableOpacity, Modal, Image, TextInput} from "react-native";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import close from '../images/X.png'

//input values 

const Add = () => {
    const [view, setView] = useState(false);
    const [nombre, setNombre] = useState("")
    const [fecha, setFecha] = useState(new Date())
    return(

        <View>
        <TouchableOpacity style={styles.boton}
        onPress = {() => {setView(true)}}>
            <Text style={styles.plus}>+</Text>
        </TouchableOpacity>

        <Modal animationType='fade' 
            onDismiss={ () => console.log("close") }
            onShow={ () => console.log("show")} 
            visible = {view}>

                <View style= {{
                    flex: 1, 
                    backgroundColor: "rgba(1, 1, 1, 0.5)",
                    justifyContent: "center",
                    alignItems: "center"}}>
                    
                    <View style= {{
                        height: 350,
                        width: 330,
                        borderColor: "rgba(2, 38, 73, 0.7)",
                        borderWidth: 3,
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
                        <Text style={styles.titulo}> CREAR UN NUEVO PROYECTO</Text>
                        <View style={styles.input_box}>
                            <Text> NOMBRE: </Text>
                            <TextInput style= {styles.input}
                            placeholder="Nombre de tu proyecto"
                            placeholderTextColor= "00000030"
                            onChangeText= {(text) => setNombre(text)}
                            />
                        </View>

                        <View style={styles.input_box}>
                            <Text> FECHA LIMITE: </Text>
                            <TextInput style= {styles.input}
                            placeholder="Fecha de entrega"
                            placeholderTextColor= "00000030"
                            />
                        </View>
                        <View style={styles.input_box}>
                            <Text> CONCEPTO: </Text>
                            <TextInput style= {styles.input}
                            placeholder="¿De que trata tu proyecto grupal?"
                            placeholderTextColor= "00000030"
                            />
                        </View>
                        <View>
                            <TouchableOpacity
                            style={styles.send}>
                                <Text>CREAR</Text>
                            </TouchableOpacity>
                        </View>
                        
                    </View>
                </View>
            </Modal>
        </View>
        
    )
}
export default Add

const styles = StyleSheet.create({
    input_box: {
        flexDirection: "row",
        alignItems: "center"
    },
    plus:{
        fontSize: 70,
        color: "white",
        position: "absolute", 
        top: -10,
        left: 20,


    },
    boton: {

        width: 80,
        height: 80,
        backgroundColor: "#FF3A2E", 
        position: "absolute",
        left: 277,
        top: 700,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 5,
        borderRadius: 50,
    },
    input: { 
        color: "#022649",
        flexDirection: "row",
        
    },
    titulo: {
        textAlign: "center",
        fontSize: 21
    },
    send: {
        backgroundColor: "red",
    }
  });