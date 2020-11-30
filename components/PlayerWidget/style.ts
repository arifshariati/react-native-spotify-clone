import { StyleSheet } from 'react-native';

import Colors from '../../constants/Colors';

const styles = StyleSheet.create({
    container:{
        position:'absolute',
        bottom:78,
        backgroundColor: Colors.light.tint,
        width:'100%',
        flexDirection:'row',
        borderBottomWidth:2,
        borderBottomColor:"#18AE68",
        alignItems:'center'
    },
    rightContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        flex:1
    },
    nameContainer:{
        flexDirection:'row',
        flex:0.75
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
        fontSize:20,
        color:Colors.light.text,
        marginLeft:10
    }
})

export default styles;