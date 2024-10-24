import React, { useState } from "react";
import '../../App.css';
import {ListComponentProps} from '../../interfaces';
import {HighlightText, ExternalLink, Pagination } from '../index';

const List: React.FC<ListComponentProps> = ({ListData}) => {
    const {ResultItems, Page, PageSize, TotalNumberOfResults} = ListData;
    const [pageNumber, setPageNumber] = useState<number>(Page);
    const onPageChangeHandler = (page: number) => {
        setPageNumber(page);
    }
    return <>
        <div className="show-results">
            <h3 data-testid="show-results" className="searchResults">Showing {PageSize*Page-PageSize || 1}-{PageSize*Page} of {TotalNumberOfResults} results</h3>
            <Pagination data-testid="pagination" pageSize={PageSize} currentPage={pageNumber} totalRecords={TotalNumberOfResults} onPageChange={onPageChangeHandler} />
        </div>
        
        {ResultItems?.map((item:any) =>
            <div data-testid="list-item" className="list-container" key={item.DocumentId}> 
                <HighlightText className="hero-text" type="heading" Title={item.DocumentTitle} />
                <HighlightText className="list-text" type="paragraph" Title={item.DocumentExcerpt} />
                <ExternalLink url={item.DocumentURI} />
            </div>
        )}
        
    </>
}

export default List;