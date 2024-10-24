// interfaces for components
export interface ExternalLinkProps{
    url: string;
}

export interface Offset {
    BeginOffset: number;
    EndOffset: number;
}

export interface HighlightText {
    Text: string;
    Highlights: Offset[];
}

export interface HighlightTextProps {
    Title: HighlightText;
    className?: string;
    type: string;
}
export interface ResultItem{
    DocumentId: string;
    DocumentTitle: HighlightText;
    DocumentExcerpt: HighlightText;
}
export interface ListData{
    ResultItems: ResultItem[];
    TotalNumberOfResults: number;
    Page: number,
	PageSize: number,
}
export interface ListComponentProps{
    ListData: ListData | any;
    
}

export interface SearchComponentProps{
    searchText: string;
    setSearchText: Function;
    searchHandler: Function;
    suggestionsList: string[];
}

export interface PaginationProps {
    pageSize: number;
    currentPage: number;
    totalRecords: number;
    onPageChange: (page: number) => void;
}
