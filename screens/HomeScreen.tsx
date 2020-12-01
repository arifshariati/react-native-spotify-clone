import React, { useState, useEffect} from 'react';
import { StyleSheet, FlatList, View } from 'react-native';


//components
import AlbumCategory from '../components/AlbumCategory';

import { API, graphqlOperation } from 'aws-amplify'

import { listAlbumCategorys } from '../amplify/graphql/queries'

//mock data
//import albumCategories from '../data/albumCategories';


export default function HomeScreen() {

  const [categories, setCategories] = useState([]);

  useEffect(()=>{

    const fetchAlbumCategories = async () => {

      try{

        const data = await API.graphql(
          graphqlOperation(
            listAlbumCategorys
          )
        );
        
        setCategories(data.data.listAlbumCategorys.items);
        
      }
      catch(error){
        console.log(error.message);
      }
    }
    fetchAlbumCategories();
  },[])

  return (
    <View style={styles.container}>
      <FlatList 
        data={categories}
        renderItem={({item}) => <AlbumCategory title={item.title} albums={item.albums.items} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
