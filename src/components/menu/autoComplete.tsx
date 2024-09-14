const a = ['a','b','c']

export interface AutoCompleteProps extends Omit<InputP>{
    data: string[],
    fetchSuggestion:(keyword:string)=>Promise<string[]>|string[]
}

const handleChange = (keyword:string,data:string[]) => {
    return data.filter(item=>item.includes(keyword))
}

export const AutoComplete:React.FC<AutoCompleteProps> = ({
    data,
    fetchSuggestion
}) =>{
    
}
// <AutoComplete
//      fetchSuggestions={handleChange}
//      onSelect={handleSelect}
// />