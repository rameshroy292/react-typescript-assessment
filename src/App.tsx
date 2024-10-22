import React, { useState, useEffect } from 'react';
import { List, SearchBar } from './components';
import { apiCall } from './utils/fetchAPI';
import { API_END_POINTS } from './utils/constants';
import { ListComponentProps } from './interfaces';

const App: React.FC = () => {
  const [searchText, setSearchText] = useState('');
  const [listData, setListData] = useState<ListComponentProps>();
  const [suggestionsList, setSuggestionsList] = useState<string[]>([])
  const searchHandler = (query: string) => {
    if (query.length)
      fetchListData();
  }
  useEffect(() => {
    if (searchText)
      getSuggestions();
  }, [searchText])
  const getSuggestions = async () => {
    try {
      const response = await apiCall(`${API_END_POINTS.suggestions}`, 'GET');
      setSuggestionsList(response?.suggestions);
    } catch (error) {
      console.log(error);
    }
  }
  const fetchListData = async () => {
    try {
      const response = await apiCall(`${API_END_POINTS.getList}`, 'GET');
      setListData(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className='wrapper' data-testid="app">
      <SearchBar
        data-testid="search-input"
        searchText={searchText}
        suggestionsList={suggestionsList}
        setSearchText={setSearchText}
        searchHandler={searchHandler}
      />
      {listData ? <List ListData={listData} data-testid="list-component" /> : null}
    </div>
  );
};

export default App;