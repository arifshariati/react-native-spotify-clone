import React from 'react'
import { View, Text, Image } from 'react-native'

import { Song } from '../../types';
import styles from './style';

export type SongListItemProps = {
    song:Song;
}
const SongListItem = (props:SongListItemProps) => {
    const { song } = props;

    return (
        <View style={styles.container}>
            <Image source={{uri:song.imageUri}} style={styles.image} />
            <View style={styles.rightContainer}>
                <Text style={styles.title}>{song.title}</Text>
                <Text style={styles.artist}>{song.artist}</Text>
            </View>
        </View>
    )
}

export default SongListItem;