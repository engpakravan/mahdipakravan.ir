import React from 'react'

export const ThemeContext = React.createContext({
    Header : {
        HeaderJumborton : Boolean , 
        Brand : Array,
        programmerImage : String,
        list : [Object],
        Welcome : String,
        what_can_i_do : String ,
        header_long_text : String ,
    },
    Sections : {
        howWorking : {
            title : String ,
            title_meta : String ,
            elements : Array
        }
    }
})