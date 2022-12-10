import react, { useState, useLayoutEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, ScrollView, Modal, Image, Text} from 'react-native';
import firebaseConfig from "../../firebase"
import { getFirestore } from "firebase/firestore"
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import Tarjeta from './Tarjeta';
import { initializeApp } from "@firebase/app";
import close from '../images/X.png'

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
let img = 0
const NuevoTodo = [require("../images/tarjeta4.png"), require("../images/tarjeta2.png"), require("../images/tarjeta1.png"), require("../images/tarjeta3.png")]

const Todo = ({ id }) => {
    const [listApp, setListApp] = useState([])
    const [view, setView] = useState(false)
    const [tarea, setTarea] = useState("")
    
    useLayoutEffect(() => {
        //Extraer datos de una subcoleccion
        const direc = "grupos" + "/" + id + "/" + "TODO"
        const  datos = onSnapshot(collection(db, direc), (querySnapshot) => {
            setListApp([])
            querySnapshot.forEach((doc) => {
                setListApp((listApp) => [...listApp, doc.data()])
            });
        });
        return datos
    }, [])

        
    
    return (
        <View>
        <ScrollView style = {style.scroll}> 
        {listApp.map ((t)=> {
            (img>= 3) ? img = 0 : img = img+1
            return (
                <TouchableOpacity
                    onPress = {() => {
                        setTarea(t.tarea)
                        setView(true)
                    }}
                >
                    <Tarjeta
                imagen={NuevoTodo[img]} tarea = {t.tarea} 
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
                        <Text style={styles.titulo}> {tarea}</Text>
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

const styles = StyleSheet.create({
    input_box: {
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: 10,
        paddingTop: -5,
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
        
    },
    titulo: {
        textAlign: "center",
        fontSize: 21,
        color: "#FD5F51"
    },
    send: {
        backgroundColor: "#FD5F51",
        textAlign: "center",  
        color: "white", 
        height: 30,
        width: 80,
        borderRadius: 10,
        marginTop: 10,
        paddingTop: 5,
        fontSize: 20,
    }
  });