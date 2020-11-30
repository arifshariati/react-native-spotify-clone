import { StyleSheet } from 'react-native';

import Colors from '../../constants/Colors';

const styles = StyleSheet.create({
    container:{
        position:'absolute',
        bottom:78,
        
        width:'100%',
        borderBottomWidth:2,
        borderBottomColor:"#18AE68",
    },
    rightContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        flex:1,
        alignItems:'center'
    },
    nameContainer:{
        flexDirection:'row',
        flex:0.75,
        alignItems:'center'
    },
    iconContainer:{
        flexDirection:'row',
        justifyContent:'space-around',
        flex:0.25
    },
    image:{
        width:75,
        height:75
    },
    title:{
        fontWeight:'bold',
        fontSize:20,
        color:Colors.light.background,
        marginLeft:10
    },
    artist:{
        fontSize:15,
        color:Colors.light.text,
        marginLeft:10
    },
    progress:{
        height:10,
        backgroundColor:"darkgray",
        borderTopRightRadius:5,
        borderBottomRightRadius:5,
    },
    row:{
        flexDirection:'row',
        backgroundColor: Colors.light.tint,
    }
})

export default styles;