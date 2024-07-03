import { Track } from "react-native-track-player";

export const playListData: Track[] = [
    {
        id:1,
        title:'Genius',
        artist:'labrinth',
        artwork:'https://images.genius.com/549e74fbfc6a67c6f343edd8dbfa0bf3.1000x1000x1.jpg',
        url: require('./asset/ONE.mp3'),
     },
    {
        id:2,
        title:'See me fall',
        artist:'labrinth',
        artwork:'https://i1.sndcdn.com/artworks-iNnIPLM52Y2r0gVO-Oq21aw-t500x500.jpg',
        url: require('./asset/TWO.mp3'),
     },
    {
        id:3,
        title:'Royalty',
        artist:'labrinth',
        artwork:'https://i.ytimg.com/vi/TOOzkE0v-DY/maxresdefault.jpg',
        url: require('./asset/THREE.mp3'),
     },
    {
        id:4,
        title:'Softly',
        artist:'Panjabi',
        artwork:'https://a10.gaanacdn.com/gn_img/artists/0wrb4qNKLg/wrb4aOkvKL/size_m_1716898830.webp',
        url: require('./asset/Four.mp3'),
     },
]