import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {useSelector} from 'react-redux'
import './SearchBar.css'
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getFreelancers } from '../../actions/user';
import { getCompanies } from '../../actions/user';
import Close from '@material-ui/icons/Close';

export default function Searchbar({placeholder,data,type}){
    // const [company,setCompany] =useState(null);
    const dispatch = useDispatch();
    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");

    useEffect(() => {
      if(type=="freelancer")
        dispatch(getCompanies());
        else
        dispatch(getFreelancers());
    }, [dispatch]);
    
  
    const companies = useSelector((state) => state.users);
    
    
    const handleFilter= (event) => {
        const searchWord= event.target.value
        setWordEntered(searchWord);

        const newFilter=  companies.filter((value) =>{
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
                    <>
                    { (type=="freelancer")?(
                        
                         <a className="dataItem" href={"company/"+company._id} target="_self">
                          <p> {company.name}</p>
                           </a>
                    ):
                    (
                    <a className="dataItem" href={"freelancer/"+company._id} target="_self">
                    <p> {company.name}</p>
                    </a>
                    )
                    }
                 </>
                )
            })}  
            </div>
            )}
        </div>
    )

}