import react, {useState} from "react";
import { View, StyleSheet, Text, TouchableOpacity, Modal, Image, TextInput} from "react-native";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import close from '../images/X.png'
import { initializeApp } from "@firebase/app";
import firebaseConfig from "../../firebase"
import { getFirestore } from "firebase/firestore"
import { collection, addDoc, doc, setDoc } from "firebase/firestore"
import { async } from "@firebase/util";

const FloatingButton = () => {
    const [view, setView] = useState(false);
    const [nombre, setNombre] = useState("")
    const [fecha, setFecha] = useState("")
    
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    const crearGrupo = async() =>{

        try {
            const docRef = await addDoc(collection(db, "grupos"), {
              nombre: nombre,
              fecha: fecha,
            });
            

            
            await setDoc(doc(db, "grupos", docRef.id, "TODO", "lista1"), {});
            await setDoc(doc(db, "grupos", docRef.id, "PROCESO", "lista1"), {});
            await setDoc(doc(db, "grupos", docRef.id, "PRUEBA", "lista1"), {});
            await setDoc(doc(db, "grupos", docRef.id, "HECHO", "lista1"), {});
            alert("Grupo creado con exito")
          } catch (e) {
            console.error("Error adding document: ", e);
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
                        <Text style={styles.titulo}> CREAR UN NUEVO PROYECTO</Text>
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
                        
                    </View>
                        <View>
                            <TouchableOpacity
                            onPress={crearGrupo}>
                                <Text style={styles.send}>CREAR</Text>
                            </TouchableOpacity>
                        </View>
                </View>
            </Modal>
        </>
        
    )
}
export default FloatingButton

const styles = StyleSheet.create({
    input_box: {
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: 10,
        paddingTop: -5,
        fontSize: 20,

    },
    plus:{
        fontSize: 60,
        color: "white",
        position: "absolute", 
        top: -10,
        left: 18,
    },
    boton: {

        width: 70,
        height: 70,
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