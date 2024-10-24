import '@testing-library/jest-dom';
import { render, screen, fireEvent, getByText } from '@testing-library/react';
import Pagination from '../view';

describe('pagination component unit test cases', () => {
    const props = {
        pageSize: 10,
        currentPage: 1,
        totalRecords: 100,
        onPageChange: jest.fn(),
        handlePageClick: jest.fn(),
    }
    it('render pagination component with default page numbers', () =>{
        render(<Pagination {...props} />);
        expect(screen.getByText('«')).toBeInTheDocument();
        for(let i =1; i<= 5; i++){
            expect(screen.getByText(i.toString())).toBeInTheDocument();
        }
        expect(screen.getByText('»')).toBeInTheDocument();
    });
    it('disable previous icon when page number is 1', () => {
        render(<Pagination {...props} />);
        const previousIcon = screen.getByText('«');
        expect(previousIcon).toHaveClass('disabled');
        fireEvent.click(previousIcon);
        expect(props.onPageChange).not.toHaveBeenCalled();
    });
    it('disable next icon on the last page', () => {
        render(<Pagination {...props} currentPage={10} />);
        const nextIcon = screen.getByText('»');
        expect(nextIcon).toHaveClass('disabled');
        fireEvent.click(nextIcon);
        expect(props.onPageChange).not.toHaveBeenCalled();
    });
    it('test previous and next icons functionality', () => {
        render(<Pagination {...props} currentPage={4} />);
        const nextIcon = screen.getByText('»');
        const previousIcon = screen.getByText('«');

        fireEvent.click(previousIcon);
        expect(props.onPageChange).toHaveBeenCalledWith(3);

        fireEvent.click(nextIcon);
        expect(props.onPageChange).toHaveBeenCalledWith(5);
    });
    it('test expected pages middle', () => {
        render(<Pagination {...props} currentPage={6} />);
        const expectedPages = [4,5,6,7,8];
        expectedPages.forEach(page => {
            expect(screen.getByText(page.toString())).toBeInTheDocument();
        })
    });
    it('test expected pages in last', () => {
        render(<Pagination {...props} currentPage={10} />);
        const lastPages = [6,7,8,9,10];
        lastPages.forEach(page => {
            expect(screen.getByText(page.toString())).toBeInTheDocument();
        })
    });
    it('test handlePageClick function', () => {
        render(<Pagination {...props} />);
        const getPageNumber = screen.getByText('2');
        fireEvent.click(getPageNumber);
        expect(props.onPageChange).toHaveBeenCalledWith(2);
    });
});
