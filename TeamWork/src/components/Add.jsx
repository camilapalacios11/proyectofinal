import react, {useState} from "react";
import { View, StyleSheet, Text, TouchableOpacity, Modal, Image, TextInput} from "react-native";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import close from '../images/X.png'

//input values 

const Add =() => {
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
                    alignItems: "center",
                }}>

                    <View style= {{
                        height: 650,
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
                        <Text> CREAR UN NUEVO PROYECTO</Text>
                        <Text> ASIGNACION: </Text>
                        <View>
                            <TextInput style= {styles.input}
                            placeholder="Nombre de la tarea"
                            placeholderTextColor= "00000030"
                            onChangeText= {(text) => setNombre(text)}
                            />
                        </View>

                        <Text> FECHA LIMITE: </Text>
                        <DateTimePickerAndroid
                        value= {fecha}
                        model={"time"}
                        is24hour={true}
                        onChange = {(event, selectedDate) => setFecha(selectedDate)}
                        style={{width: 80}}>
                        </DateTimePickerAndroid>

                        <Text> CONCEPTO: </Text>
                        
                    </View>
                </View>

            </Modal>

        </View>

            
        
    )
}
export default Add

const styles = StyleSheet.create({

    plus:{
        fontSize: 40,
        color: "white",
        position: "absolute", 
        top: -6,
        left: 9,

    },
    boton: {
        width: 42,
        height: 42,
        borderBottomEndRadius: 21,
        backgroundColor: "#022649", 
        position: "absolute",
        bottom: 50, 
        right: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 5,
    },
  });