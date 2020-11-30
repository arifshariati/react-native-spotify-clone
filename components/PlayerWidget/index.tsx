import React from 'react'
import { View, Text, Image } from 'react-native'
import { AntDesign, FontAwesome } from '@expo/vector-icons'
import { Song } from '../../types';
import styles from './style';

//mock Data
import AlbumDetails from '../../data/albumDetails';
import Colors from '../../constants/Colors';

const song =AlbumDetails.songs[0];

const PlayerWidget = () => {
    

    return (
        <View style={styles.container}>
            <Image source={{uri:song.imageUri}} style={styles.image} />
            <View style={styles.rightContainer}>
                <View style={styles.nameContainer}>
                    <Text style={styles.title}>{song.title}</Text>
                    <Text style={styles.artist}>{song.artist}</Text>
                </View>
                <View style={styles.iconContainer}>
                    <AntDesign name="hearto" size={30} color={Colors.light.background} />
                    <FontAwesome name="play" size={30} color={Colors.light.background} />
                </View>
            </View>
            
            
        </View>
    )
}

export default PlayerWidget;