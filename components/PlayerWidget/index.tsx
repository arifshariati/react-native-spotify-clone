import React,{ useState, useEffect, useContext } from 'react'
import { View, Text, Image,TouchableOpacity } from 'react-native'
import { AntDesign, FontAwesome } from '@expo/vector-icons'

import { Audio } from 'expo-av'
import { Sound } from 'expo-av/build/Audio/Sound';

import { Song } from '../../types';
import styles from './style';


import Colors from '../../constants/Colors';

import {API, graphqlOperation } from 'aws-amplify'
import { getSong } from '../../amplify/graphql/queries'

import { AppContext } from '../../AppContext'


const PlayerWidget = () => {

    const [song, setSong] = useState(null);
    const [sound,setSound]=useState<Sound | null>(null);
    const [isPlaying,setIsPlaying] = useState<boolean>(true);
    const [duration, setDuration] = useState<number | null>(null);
    const [position,setPosition] = useState<number | null>(null);

    const { songId } = useContext(AppContext);
    
    const onPlayBackStatusUpdate = (status) =>{

        
        setIsPlaying(status.isPlaying);
        setDuration(status.playableDurationMillis);
        setPosition(status.positionMillis);

    } 

    const playCurrentSong = async () =>{

        if(sound){
            await sound.unloadAsync();
        }

        const { sound:newSound } = await Sound.createAsync(
            { uri: song.uri},
            { shouldPlay: isPlaying },
            onPlayBackStatusUpdate
            )

        setSound(newSound)
    }

    useEffect(()=>{

        if(song){
            
            playCurrentSong();

        }

    },[song])

    const onPlayPausePress = async () => {

        if(!sound){
            return;
        }

        if(isPlaying){
            
            await sound.stopAsync();

        }else{
            
            await sound.playAsync();
        }
    }

    const getProgress = () => {

        if(sound === null || duration === null || position === null){
            return 0;
        }

        return (position/duration) * 100;
    }

    useEffect(()=>{

        const fetchSong = async () =>{

            try{
                const data = await API.graphql(
                    graphqlOperation(
                        getSong,{
                            id:songId
                        }
                    )
                );

                setSong(data.data.getSong);
            }
            catch(error){
                console.log(error.message);
            }
        }
        fetchSong();

    },[songId])


    if(!song){

        return null;
        
    }
    return (
        <View style={styles.container}>
            <View style={[styles.progress,{ width:`${getProgress()}%`}] } />

            <View style={styles.row}>
                <Image source={{uri:song.imageUri}} style={styles.image} />
                <View style={styles.rightContainer}>
                    <View style={styles.nameContainer}>
                        <Text style={styles.title}>{song.title}</Text>
                        <Text style={styles.artist}>{song.artist}</Text>
                    </View>
                    <View style={styles.iconContainer}>
                        {/* <AntDesign name="hearto" size={30} color={Colors.light.background} /> */}
                        <TouchableOpacity onPress={onPlayPausePress}>
                        <FontAwesome name={isPlaying ? 'pause' : 'play'} size={30} color={Colors.light.background} />
                        </TouchableOpacity>
                        
                    </View>
                </View>
            </View>
            
            
            
        </View>
    )
}

export default PlayerWidget;