import React from 'react';
import {View,Text,TouchableOpacity} from 'react-native';

interface Props{
    title:string,
    style:any,
    onPress:any
}

class Button extends React.Component<Props>{
    render(){
        return(
            // <View>
                <TouchableOpacity onPress={() => this.props.onPress()} style = {this.props.style }>
                    <Text style={{color:"white"}}>{this.props.title}</Text>
                </TouchableOpacity>
            // </View>
        )
    }
}

export default Button;
