//@ts-ignore
import ScaleSheet from 'react-native-scalesheet';

export const styles = ScaleSheet.create({
    checkBoxImg: {
        height: 20,
        width: 20,
        resizeMode: 'contain'
    },
    sociallogos:{
        flex:1,
        flexDirection:"row"
    },
    logo:{
        width:50,
        height:50
    },
    signuptext:{
        marginLeft:62,
        marginTop:12
    },
    checkBoxBtn: {
        marginTop: 7,
        height: 30,
        width: 30,
        alignItems: 'flex-start',
    },
    title: {
        marginLeft: 0.5,
        fontWeight: "bold",
        fontStyle: "italic",
        fontFamily: "times new roman"
    },
    loginText:{
        marginLeft:220,
        marginTop:63,
        flex:1,
        flexDirection:"row"
    },
    cbText: {
        marginTop: 8
    },
    textStyle: {
        marginLeft: 30,
        marginRight: 30,
        marginTop: 10,
        textAlign: "center"
    },

    rbtlogo:{
        height: 15, 
        width: 15,
        resizeMode: 'contain',
        marginHorizontal:12
    },

    loginButton: {
        alignItems: "center",
        backgroundColor: "green",
        padding: 10,
        margin: 30,
        marginTop: 10,
        width: 200,
        alignSelf: "center",
        justifyContent: "center",
        borderRadius:8
    },

    checkbox: {
        display: "flex",
        flexDirection: "row",
        marginLeft: 30,
        marginTop: 10
    },
    backgroundImage:{
        position: 'absolute',
        height:750,
        width: 500,
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        // opacity: 0.2,
         resizeMode:"contain"
    },
    signupText:{
        marginTop: 200,
        flex:1,
        flexDirection:"row",
        marginLeft:30
    },

    signupButton: {
        alignItems: "center",
        backgroundColor:"#E30513",
        padding: 10,
        marginLeft: 30,
        marginRight: 30,
        marginTop: 10,
        width: 200,
        alignSelf: "center",
        justifyContent: "center",
        borderRadius:8
    },

    container: {
        flex: 1,
        paddingHorizontal: 10,
    },
})
