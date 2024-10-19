import React from "react";
import '../../App.css';
import {ListComponentProps} from '../../interfaces';
import {HighlightText, ExternalLink} from '../index';

const List: React.FC<ListComponentProps> = ({ListData}) => {
    const {ResultItems, Page, PageSize, TotalNumberOfResults} = ListData;    
    return <>
        <h3 className="searchResults">Showing {PageSize*Page-PageSize || 1}-{PageSize*Page} of {TotalNumberOfResults} results</h3>
        {ResultItems?.map((item:any) =>
            <div className="list-container" key={item.DocumentId}> 
                <HighlightText className="hero-text" type="heading" Title={item.DocumentTitle} />
                <HighlightText className="list-text" type="paragraph" Title={item.DocumentExcerpt} />
                <ExternalLink url={item.DocumentURI} />
            </div>
        )}
        
    </>
}

export default List;