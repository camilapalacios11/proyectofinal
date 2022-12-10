import React from "react";
import Tapiz2 from "../src/components/Tapiz2";

const StackScreen = ({ route }) => {
    return <Tapiz2 id={route.params.id}/>
    
}
export default StackScreen;