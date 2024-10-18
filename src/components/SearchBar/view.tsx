import React, { useState, useRef, useEffect } from "react";
import { SearchComponentProps } from '../../interfaces';
import searchIcon from "../../assets/img/ic-Search.png";
import closeIcon from "../../assets/img/ic-Cross.png";

const SearchBar: React.FC<SearchComponentProps> = ({ searchText, setSearchText, suggestionsList, searchHandler }) => {
    const [isFocused, setIsFocused] = useState<boolean>(false);
    const [showSuggestions, setShowSuggestions] = useState<boolean>(false);
    const [active, setActive] = useState<number>(-1);
    const inputRef = useRef<any>(null);
    useEffect(() =>{
        inputRef.current.focus();
    },[])
    //Handle input focus
    const handleFocus = () => {
        setIsFocused(true);
    };
    // Handle input blur (when it loses focus)
    const handleBlur = () => {
        setIsFocused(false);
    };
    //Handle search button click 
    const handleSearchClick = () => {
        if (searchText.trim() !== '') {
            searchHandler(searchText);
        }
    };
    //Handle on change input handler
    const onChangeHandler = (e:any) => {
        setSearchText(e.target.value);
        if(e.target.value === ''){
            setShowSuggestions(false);
        }
        setShowSuggestions(true);
    }
    // Handle on key press down, up & enter
    const onKeyPressHandler = (e:any) => {
        if(e.keyCode === 38 && active > -1){
            setActive(active - 1);
        } else if(e.keyCode === 40 && active < suggestionsList.length -1){
            setActive(active + 1);
        } else if(e.keyCode === 13){
            setSearchText(active === -1 ? searchText : suggestionsList[active]);
            setShowSuggestions(false);
            setActive(-1);
            searchHandler(searchText);
        }
    }
    // Handle suggesion click
    const handleSuggestionClick = (item: string) => {
        setSearchText(item);
        setShowSuggestions(false);
        setActive(-1);
    }
    return <div className="searchContainer">
        <div className="searchDiv">
            {showSuggestions && searchText.length >= 2 ? 
                <div className="suggestions">
                    <ul className="suggestions-list" data-testid="suggestion-list">
                        {suggestionsList.map((item, index) => <li key={item} onClick={() =>handleSuggestionClick(item)} className={active === index ? 'active' : 'no-active'}>{item}</li>)}
                    </ul>
                </div>
                : null
            }            
            <input
                data-testid="search-input"
                className="searchInput"
                type="text"                
                placeholder="Search here..."
                value={searchText}
                style={{borderColor: isFocused ? 'blue' : 'gray', outline: isFocused ? 'none' : '',}}
                onFocus={handleFocus}
                onBlur={handleBlur} 
                onChange={onChangeHandler}
                onKeyDown={onKeyPressHandler}
                ref={inputRef}
            />
            {searchText.length >= 1 ?<img className="close-img" onClick={() => setSearchText('')} src={closeIcon} /> : null}
        </div>
        <div className="searchBtn" data-testid="search-button" onClick={handleSearchClick}>
            <img className="search-img" src={searchIcon} />
            <span>Search</span>
        </div>

    </div>
}

export default SearchBar;