import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import List from '../view';

describe('List component test cases', () => {
    const props = {
        ListData: {
            TotalNumberOfResults: 100,
            PageSize: 10,
            Page: 1,
            ResultItems: [{
                "DocumentId": "8f09d0d0898e5470189120415158f7b5",
                "DocumentTitle": {
                    "Text": "Choose a Child Care Centre",
                    "Highlights": [
                        {
                            "BeginOffset": 9,
                            "EndOffset": 14
                        }
                    ]
                },
                "DocumentExcerpt": {
                    "Text": "...as partners to optimise the child physical, intellectual, emotional and social development. Choosing a Child Care Centre for Your Child In choosing the appropriate child care arrangement, the age and personality of your child are important factors for consideration...",
                    "Highlights": [
                        {
                            "BeginOffset": 31,
                            "EndOffset": 36
                        },
                        {
                            "BeginOffset": 106,
                            "EndOffset": 111
                        },
                        {
                            "BeginOffset": 133,
                            "EndOffset": 138
                        },
                        {
                            "BeginOffset": 167,
                            "EndOffset": 172
                        },
                        {
                            "BeginOffset": 223,
                            "EndOffset": 228
                        }
                    ]
                },
                "DocumentURI": "https://www.ecda.gov.sg/Parents/Pages/ParentsChooseCCC.aspx"
            }],
        },
        onPageChangeHandler: jest.fn(),
        pageSize: 10,
        currentPage: 1,
        totalRecords: 100,
        onPageChange: jest.fn(),
        handlePageClick: jest.fn(),
    }
    it('render component with all props', () => {
        render(<List {...props} />)
        expect(screen.getByTestId('show-results')).toBeInTheDocument();
    });
    it('on page changes', () => {
        render(<List {...props} />);
        const page2Button = screen.getByText('2');
        fireEvent.click(page2Button);
        const updatedHeading = screen.getByText(/Showing/i);
        expect(updatedHeading).toHaveTextContent('Showing 1-10 of 100 results');
    })
});