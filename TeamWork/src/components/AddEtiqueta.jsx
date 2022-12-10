import react, {useState} from "react";
import { View, StyleSheet, Text, TouchableOpacity, Modal, Image, TextInput} from "react-native";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import close from '../images/X.png'
import { initializeApp } from "@firebase/app";
import firebaseConfig from "../../firebase"
import { getFirestore } from "firebase/firestore"
import { collection, addDoc, doc, setDoc } from "firebase/firestore"
import { async } from "@firebase/util";

const AddEtiqueta = ({ id }) => {
    const [view, setView] = useState(false);
    const [nombre, setNombre] = useState("")
    const [fecha, setFecha] = useState("")
    const [tarea, setTarea] = useState("")
    
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    const crearTarea = async() =>{
        if (nombre == "" || fecha == "" || tarea == "")
        {
            alert("No dejes campos vacios")
        }
        else
        {
            try {
                await setDoc(doc(db, "grupos", id, "TODO", nombre), {
                    "nombre": nombre,
                    "fecha": fecha,
                    "tarea": tarea
                });
                alert("Tarea creada con exito")
                setView(false)
            
            } catch (e) {
                alert("Error al crear la tarea");
            }
        }
    }


    return(

        <>
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
                        height: 200,
                        width: 330,
                        borderColor: "rgba(2, 38, 73, 0.7)",
                        borderWidth: 2,
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
                        <Text style={styles.titulo}> CREAR UNA NUEVA ETIQUETA</Text>
                        <View style={styles.input_box}>
                            <Text style={styles.input}> NOMBRE: </Text>
                            <TextInput style= {styles.input}
                            placeholder="Nombre de tu proyecto"
                            placeholderTextColor= "00000030"
                            onChangeText= {(text) => setNombre(text)}
                            />
                        </View>

                        <View style={styles.input_box}>
                            <Text style={styles.input}> FECHA LIMITE: </Text>
                            <TextInput style= {styles.input}
                            placeholder="Fecha de entrega"
                            placeholderTextColor= "00000030"
                            onChangeText= {(text) => setFecha(text)}
                            />
                        </View>

                        <View style={styles.input_box}>
                            <Text style={styles.input}> TAREA: </Text>
                            <TextInput style= {styles.input}
                            placeholder="¿De que trata esta tarea?"
                            placeholderTextColor= "00000030"
                            onChangeText= {(text) => setTarea(text)}
                            />
                        </View>
                        
                    </View>
                        <View>
                            <TouchableOpacity
                            onPress={crearTarea}>
                                <Text style={styles.send}>CREAR</Text>
                            </TouchableOpacity>
                        </View>
                </View>
            </Modal>
        </>
        
    )
}
export default AddEtiqueta

const styles = StyleSheet.create({
    input_box: {
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: 10,
        paddingTop: -5,
        fontSize: 20,

    },
    plus:{
        fontSize: 58,
        color: "#F5F3DE",
        position: "absolute", 
        top: -10,
        left: 17,
        fontStyle: "italic",
        fontWeight: 'bold',
    },
    boton: {

        width: 65,
        height: 65,
        backgroundColor: "#FD5F51", 
        position: "absolute",
        left: 300,
        top: 680,
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
        marginLeft: 3,
        color: "#022649",
        flexDirection: "row",
        fontStyle: "italic",
        fontWeight: 'bold',
        
    },
    titulo: {
        textAlign: "center",
        fontSize: 80,
        color: "rgba(2, 38, 73, 0.7)",
        fontStyle: "italic",
        fontWeight: 'bold',
        fontSize: 20,
    },
    send: {
        backgroundColor: "#FD5F51",
        textAlign: "center",  
        color: "#F5F3DE", 
        height: 30,
        width: 80,
        borderRadius: 10,
        marginTop: 10,
        paddingTop: 2,
        fontSize: 20,
        fontStyle: "italic",
        fontWeight: 'bold',
    }
  });