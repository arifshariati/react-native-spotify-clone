import React from 'react'
import { View, Text, FlatList } from 'react-native'

import { Album } from '../../types';

import styles from './style';

//components
import AlbumComponent from '../Album';

export type AlbumCategoryProps = {
    title:string;
    albums:[Album]
}
const AlbumCatrogy = (props:AlbumCategoryProps) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{props.title}</Text>
            <FlatList 
                data={props.albums}
                renderItem={({item})=><AlbumComponent album={item} />}
                keyExtractor={( item )=>item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

export default AlbumCatrogy;