import { render, screen, fireEvent } from '@testing-library/react';
import SearchComponent from '../view';
import '@testing-library/jest-dom';

describe("search component test cases", () => {
    const props = {
        searchText: 'child',
        setSearchText: jest.fn(),
        suggestionsList: ["child care",
            "child vaccination",
            "child health",
            "child education",
            "child development account",
            "register childcare"],
        searchHandler: jest.fn()
    }
    test('render component', () => {
        render(<SearchComponent {...props} />)
        const inputElement = screen.getByTestId('search-input');
        const buttonElement = screen.getByText('Search');
        expect(inputElement).toBeInTheDocument();
        expect(buttonElement).toBeInTheDocument();
    });
    test('should allow typing in the search input', () => {
        render(<SearchComponent {...props} />);
        const inputElement = screen.getByTestId('search-input');
        fireEvent.change(inputElement, { target: { value: 'child' } });
        expect(inputElement).toHaveValue('child');
    });
    test('should display suggestions when typing', () => {
        render(<SearchComponent {...props} />);
        const inputElement = screen.getByTestId('search-input');
        fireEvent.change(inputElement, { target: { value: 'ca' } });
        const suggestionList = screen.getByTestId('suggestion-list');
        expect(suggestionList).toBeInTheDocument();

        const suggestionItems = screen.getAllByRole('listitem');
        expect(suggestionItems.length).toBe(6);
        expect(suggestionItems[0]).toHaveTextContent('child care');
        expect(suggestionItems[1]).toHaveTextContent('child vaccination');
    });
});