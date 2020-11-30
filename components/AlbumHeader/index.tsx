import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'

import styles from './style'

import { Album } from '../../types';

export type AlbumHeaderProps = {
    album:Album
}
const AlbumHeader = (props:AlbumHeaderProps) => {

    const { album } = props;

    const onPress = () => {

    }

    return (
        <View style={styles.container}>
            <Image source={{uri:album.imageUri}} style={styles.image} />
            <Text style={styles.name}>{album.name}</Text>
            <View style={styles.creatorContainer}>
                <Text style={styles.creator}>By {album.by}</Text>
                <Text style={styles.likes}>{album.numberOfLikes} LiKes</Text>
            </View>

            <TouchableOpacity onPress={onPress}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>PLAY</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default AlbumHeader