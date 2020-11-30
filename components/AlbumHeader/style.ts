import { StyleSheet } from 'react-native';

import Colors from '../../constants/Colors';

const styles = StyleSheet.create({
    container:{
        alignItems:'center'
    },
    image:{
        width:200,
        height:200,
        margin:15
    },
    name:{
        fontSize:30,
        fontWeight:'bold'
    },
    creatorContainer:{
        flexDirection:'row'
    },
    creator:{
        margin:5,
        fontSize:20
    },
    likes:{
        margin:5,
        fontSize:20
    },
    button:{
        backgroundColor:Colors.light.tint,
        height:40,
        width:150,
        borderRadius:50,
        justifyContent:'center',
        alignItems:'center',
        marginVertical:20
    },
    buttonText:{
        color:'white',
        fontSize:20,
        fontWeight:'bold'
    }
})

export default styles;