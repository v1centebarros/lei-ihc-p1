import { LibraryMusic, Search, Home} from '@mui/icons-material/';
export const defaultOptions = [
    {
        name: 'Home',
        path: '/',
        icon: <Home className="p-2" sx={{ fontSize: 60 }}/>
    },
    {
        name: 'Search',
        path: '/search',
        icon: <Search className="p-2" sx={{ fontSize: 60 }}/>
    },
    {
        name: 'Library',
        path: '/library',
        icon: <LibraryMusic className="p-2" sx={{ fontSize: 60 }}/>
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