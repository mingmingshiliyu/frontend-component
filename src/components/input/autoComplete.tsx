import React from 'react';
import { ChangeEvent, useState } from 'react';
import Input, {InputProps} from './input'

const a = ['a','b','c']

export interface AutoCompleteProps extends Omit<InputProps,"onSelect">{
    data: string[],
    fetchSuggestion:(keyword:string)=>Promise<DataSourceType[]>|DataSourceType[];
    onSelect?:(item:DataSourceType)=>void;
    renderOption?:(item:DataSourceType)=>React.ReactElement
}

const handleKeyDown = (e: KeyboardEvent< >)

interface DataSourceObject{
    value:string;
}


export type DataSourceType<T = {}> = T &DataSourceObject

const AutoComplete:React.FC<AutoCompleteProps> = ({
    data,
    fetchSuggestion,
    onSelect,
    renderOption,
    value,
    ...restProps
}) =>{
    const [inputValue,setInputValue] = useState(value)
    const [suggestions,setSuggestions] = useState<DataSourceType[]>([])
    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        console.log("change")
        const value=e.target.value.trim();
        // return data.filter(item=>item.includes(keyword))
        setInputValue(value)
        if(value){
            const results = fetchSuggestion(value)
            console.log(results)
            if(results instanceof Promise){
                results.then(data=>{
                    setSuggestions(data)
                })
            }else{
                setSuggestions(results)
            }
        }else{
            setSuggestions([])
        }
    }
    const generateDropdown = (suggestion:DataSourceType[]) => {
        return (
            <ul>
            {
                suggestion.map((item,index)=>{
                    return (
                        <li key={index} onClick={()=>handleSelect(item)}>{renderTemplate(item)}</li>
                    )
                })
            }
        </ul>
        )
    }
    const renderTemplate = (item:DataSourceType) => {
        return renderOption?renderOption(item):item
    }
    const handleSelect = (item:DataSourceType)=>{
        setInputValue(item.value)
        setSuggestions([])
        if(onSelect){
            onSelect(item)
        }
    }
    return (
        <div className='viking-auto-complete'>
            <Input
                value={inputValue}
                onChange={handleChange}
                // onSelect={handleSelect}
                {...restProps}
            ></Input>
            {suggestions.length>0&&generateDropdown(suggestions)}
        </div>
    )

}
// <AutoComplete
//      fetchSuggestions={handleChange}
//      onSelect={handleSelect}
// />

AutoComplete.displayName="AutoComplete"

export default AutoComplete;


//api.github.com/search/usera/q=ab