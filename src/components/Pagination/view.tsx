import React from 'react';
import { PaginationProps } from '../../interfaces';

const Pagination: React.FC<PaginationProps> = ({ pageSize, totalRecords, currentPage, onPageChange }) => {
    const totalPages = totalRecords / pageSize;
    const pageNumbers = getPageNumbers(totalPages, currentPage);

    const handlePageClick = (page: number) => {
        if (page !== currentPage && page > 0 && page <= totalPages) {
            onPageChange(page);
        }
    };

    return (
        <ul className="pagination" data-testid="pagination-list">
            <li
                className={`pagination-item ${currentPage === 1 ? 'disabled' : ''}`}
                onClick={() => handlePageClick(currentPage - 1)}
                data-testid="pagination-prev"
            >
                &laquo;
            </li>
            {pageNumbers.map((page, index) => (
                <li
                    key={index}
                    className={`pagination-item ${page === currentPage ? 'active' : ''}`}
                    onClick={() => handlePageClick(page)}
                >
                    {page}
                </li>
            ))}
            <li
                className={`pagination-item ${currentPage === totalPages ? 'disabled' : ''}`}
                onClick={() => handlePageClick(currentPage + 1)}
            >
                &raquo;
            </li>
        </ul>
    );
};

// generate page numbers
const getPageNumbers = (totalPages: number, currentPage: number): number[] => {
    const visibleNumbers = 5;
    const half = Math.floor(visibleNumbers / 2);

    let startPage = Math.max(1, currentPage - half);
    let endPage = Math.min(totalPages, currentPage + half);
    if (startPage === 1)
        endPage = Math.min(totalPages, visibleNumbers);

    if (endPage === totalPages)
        startPage = Math.max(1, totalPages - visibleNumbers + 1);

    const pageNumbers: number[] = [];
    for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
    }

    return pageNumbers;
};

export default Pagination;
