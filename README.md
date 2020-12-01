# react-native-spotify-clone

Spotify let's you listen music online via spotify mobile app (android and IOS). This repo will focus on UI design and implementing minimal features of Spotify.

## Work Flow

### Front-End

This section lists step by step activities i will carry out for designing front-end of Spotify.

- Adjust bottom tab navigation by adding relative icons form Home, Search, Your Library and Premium screen tabs
- Home Screen

  - Album Component
    - Create Album component and design Album Image and title
  - Album Category
    - Create Album Category component and place Album components in horizontal FlatList to make it scrollable horizontally
  - Crate Vertical FlatList to include all Albums in FlatList

- Album Screen

  - Song List component where all songs are listed in FlatList
  - Album Header component where Album details are placed on top of the playlist

- Player Widget
  - Player Widget plays current song and is displays in every screen

## Back-End

For this project i have used aws amplify for the back-end and graphql. As per the app features, it does not have mutations rather only queries, and working with graphql in this project is relatively easy. At the moment mutation is done manually, which if required to expand the scope of the project, shall be done via web front-end though admin account only.

To, set up aws amplify, you can read complete documentation on how to set up with expo for react-native.

## Screenshots

Though not much fancy UI however, still good to check it out and play around with songs.

![home-screen](/screenshots/home-screen.png)
![album-screen-english](/screenshots/album-screen-english.png)
![album-screen-farsi](/screenshots/album-screen-farsi.png)
