import React, {useEffect } from 'react'
import { View, Text, FlatList } from 'react-native'

import { useRoute } from '@react-navigation/native'

//component
import SongListItem from '../components/SongListItem'

//mock data
import albumDetails from '../data/albumDetails';
import AlbumHeader from '../components/AlbumHeader';

const AlbumScreen = () => {

    const route = useRoute();

    useEffect(()=>{

        
    },[])


    return (
        <View>
            <FlatList 
                data={albumDetails.songs}
                renderItem={({item}) => <SongListItem song={item} />}
                keyExtractor={(item) => item.id}
                ListHeaderComponent={()=><AlbumHeader album={albumDetails} />}
            />
        </View>
    )
}

export default AlbumScreen;