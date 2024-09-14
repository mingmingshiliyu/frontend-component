import {prependOnceListener} from 'cluster'

interface AutoCompleteProps {
    data: string[],
    fetchSuggestions: (keyword:string)=> string[]
}

