import React, {useState} from 'react'
import './SearchBar.css'
import {SearchIcon} from '@mui/icons-material/Search';
import {CloseIcon} from '@mui/icons-material/Close';
export default function SearchBar({placeholder,data}) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const handleFilter = (event) => {
  const searchWord = event.target.value;
  setWordEntered(searchWord);
  }
  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };
    return(
        <div className="search">
            <div className="searchInputs">
                <input type="text" 
                placeholder={placeholder} />
                <div className="searchIcon"> 
                {filteredData.length === 0 ? (
                  <SearchIcon />
                ) : (
            <     CloseIcon id="clearBtn" onClick={clearInput} />
                 )}
                 </div>       
          </div>
        </div>
    );
  
  }