import React, { useState, useEffect } from 'react'
import { View, Text, FlatList } from 'react-native'

import { useRoute } from '@react-navigation/native'


import { API, graphqlOperation } from 'aws-amplify'
import { getAlbum } from '../amplify/graphql/queries'

//component
import SongListItem from '../components/SongListItem'

//mock data
import albumDetails from '../data/albumDetails';
import AlbumHeader from '../components/AlbumHeader';

const AlbumScreen = () => {

    const [album, setAlbum] = useState(null);

    const route = useRoute();

    const albumId = route.params.id;


    useEffect(()=>{

        const fetchAlbulDetails = async () => {

            try{

                const data = await API.graphql(
                    graphqlOperation(
                        getAlbum,{
                            id:albumId
                        }
                    )
                )
                
                setAlbum(data.data.getAlbum);
            }
            catch(error){
                console.log(error.message);
            }
        }
        fetchAlbulDetails();        
    },[])

    if(!album){
        return <Text>Loading</Text>
    }

    return (
        <View>
            <FlatList 
                data={album.songs.items}
                renderItem={({item}) => <SongListItem song={item} />}
                keyExtractor={(item) => item.id}
                ListHeaderComponent={()=><AlbumHeader album={album} />}
            />
        </View>
    )
}

export default AlbumScreen;