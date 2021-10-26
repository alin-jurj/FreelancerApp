import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {useSelector} from 'react-redux'
import './SearchBar.css'
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
import { useHistory } from 'react-router-dom';
import Close from '@material-ui/icons/Close';
export default function Searchbar({placeholder,data}){
    // const [company,setCompany] =useState(null);
    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");
    const companies = useSelector((state) => state.users);

    const handleFilter= (event) => {
        const searchWord= event.target.value
        setWordEntered(searchWord);
        const newFilter= companies.filter((value) =>{
            return value.name.toLowerCase().includes(searchWord.toLowerCase());
        })
        if(searchWord== "")
        {
            setFilteredData([]);
        }
        else
        setFilteredData(newFilter);
    }
    const clearInput = () => {
        setFilteredData([]);
        setWordEntered("");
    };
    return(
        
        <div className="search" >
            <div className="searchInputs">
                <input type="text" placeholder={placeholder} value={wordEntered} onChange={handleFilter}/>
                <div className="searchIcon"> 
                {filteredData.length==0 ? ( 
                
                <SearchIcon /> 
                ): ( 
                
                <CloseIcon id="clearBtn" onClick={clearInput}/>
                
                )}
                
                </div>
            </div>
            
            {filteredData.length!= 0 && (
            <div className="dataResult">
            {filteredData.slice(0,5).map( (company) => {
                return (
                    <a className="dataItem" href={"company/"+company._id} target="_self">
                    <p> {company.name}</p>
                    </a>
                )
            })}  
            </div>
            )}
        </div>
    )

}