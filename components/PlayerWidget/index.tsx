import React,{ useState, useEffect} from 'react'
import { View, Text, Image,TouchableOpacity } from 'react-native'
import { AntDesign, FontAwesome } from '@expo/vector-icons'

import { Audio } from 'expo-av'
import { Sound } from 'expo-av/build/Audio/Sound';

import { Song } from '../../types';
import styles from './style';

//mock Data
import AlbumDetails from '../../data/albumDetails';
import Colors from '../../constants/Colors';



const song =AlbumDetails.songs[0];

const PlayerWidget = () => {

    const [sound,setSound]=useState<Sound | null>(null);
    const [isPlaying,setIsPlaying] = useState<boolean>(true);
    const [duration, setDuration] = useState<number | null>(null);
    const [position,setPosition] = useState<number | null>(null);
    
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

        playCurrentSong();

    },[])

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
                        <AntDesign name="hearto" size={30} color={Colors.light.background} />
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