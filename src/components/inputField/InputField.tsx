import React from 'react';
import { View, TextInput,TouchableOpacity, Image } from 'react-native';
import { AppImages } from '../../utils/imageGenerator';
import { styles } from './styles'

interface Props {
    placeholder: string,
    rightImg?:any,
    onPress?:any
}

class InputField extends React.Component<Props>{
    render() {
        return (
            <View style = {styles.inputStyle}>
            <View style={{ flex: 1,marginRight:0,paddingRight:0 }}>
                <TextInput style={styles.container} placeholder={this.props.placeholder}  />
            </View>
            {
                this.props.rightImg == null ? null :
                  <TouchableOpacity  onPress={() => this.props.onPress()} activeOpacity={0.8}>
                    <Image style={styles.eyeicon} source={this.props.rightImg} />
                  </TouchableOpacity>
              }
              </View>
        )
    }
}

export default InputField;

