import {MusicNoteIcon, HomeIcon, SearchIcon} from '@heroicons/react/solid'
export const SidebarData = [
    {
        name: 'Home',
        path: '/',
        icon: <HomeIcon className="p-2 h-12 w-12"/>,
        cName: 'side-text',
    },
    {
        name: 'Search',
        path: '/search',
        icon: <SearchIcon className="h-12 w-48"/>,
        cName: 'side-text',
    },
    {
        name: 'Library',
        path: '/library',
        icon: <MusicNoteIcon className="h-12 w-48"/>,
        cName: 'side-text',
    },
]