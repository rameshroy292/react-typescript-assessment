import {render, screen} from '@testing-library/react';
import ExternalLink from '../view';

describe("Test ExternalLink Component", () => {
    test('renders the link with the correct href', () => {
        const url = 'https://www.google.com';    
        render(<ExternalLink url={url} />);
        const linkElement = screen.getByRole('link', { name: url });
        expect(linkElement).toBeInTheDocument();
        expect(linkElement).toHaveAttribute('target', '_blank');
        expect(linkElement).toHaveAttribute('href', url);
      });
})