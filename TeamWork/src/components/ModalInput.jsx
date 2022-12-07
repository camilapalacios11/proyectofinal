import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Button, Modal, Image, TextInput} from 'react-native';
import DatePicker from 'react-native-datepicker';
import Tarjeta from './Tarjeta';
import close from '../images/X.png'

const alto = Dimensions.get ('window').height
const ancho = Dimensions.get ('window').width

const ModalInput = (props) => {
    const [view, setView] = useState(props.view);
    
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)
    return(
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
                    <Text> ASIGNACION: </Text>
                    <TextInput> </TextInput>
                    <Text> FECHA LIMITE: </Text>
                    <TextInput></TextInput>
                    <Text> CONCEPTO: </Text>
                    
                    <Button title="FECHA" onPress={() => setOpen(true)} />
                        <DatePicker
                            modal
                            open={open}
                            date={date}
                            onConfirm={(date) => {
                            setOpen(false)
                            setDate(date)
                            }}
                            onCancel={() => {
                            setOpen(false)
                            }}
                        > </DatePicker>


                </View>
                
            </View>

        </Modal>
    )
}
export default ModalInput

const style = StyleSheet.create( {
    
    scroll: {
        backgroundColor: "white",
        height: 1000,
        width: 1000,
        position: "absolute",
        marginLeft: 100,
        marginTop: 3,
    },
    text: {
        color: "white",   
        
    }
})