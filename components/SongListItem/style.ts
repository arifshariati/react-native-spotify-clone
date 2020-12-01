import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        margin:10

    },
    rightContainer:{
        justifyContent:'space-around',
        marginLeft:10
    },
    image:{
        width:75,
        height:75,
        borderRadius:7
    },
    title:{
        fontWeight:'bold',
        fontSize:20
    },
    artist:{
        fontSize:20
    }
})

export default styles;