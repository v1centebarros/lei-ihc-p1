import {MusicNoteIcon, HomeIcon, SearchIcon} from '@heroicons/react/solid'

export const defaultOptions = [
    {
        name: 'Home',
        path: '/',
        icon: <HomeIcon className="p-2 h-16 w-16"/>
    },
    {
        name: 'Search',
        path: '/search',
        icon: <SearchIcon className="p-2 h-16 w-16"/>
    },
    {
        name: 'Library',
        path: '/library',
        icon: <MusicNoteIcon className="p-2 h-16 w-16"/>
    },
]

export const userOptions = [
    {
        name: "Radio Comercial",
        id: 1,
        imgPath: "https://cdn6.aptoide.com/imgs/e/c/d/ecda4b53f0e126b3f39edc6d7036328f_icon.png?w=128",
        path:"/radio",
    },
    {
        name: "RFM",
        id: 2,
        imgPath: "https://play-lh.googleusercontent.com/MhpmqORmqFYvYLYKV2hWwcKz9Ned_l1Mjznbm0G5YVETlXfa0rj3gnjPP30ZtV3isSg",
        path:"/radio",
    },
    {
        name: "CidadeFM",
        id: 3,
        imgPath: "https://cidade.iol.pt/images/noCover.png",
        path:"/radio",
    },
]