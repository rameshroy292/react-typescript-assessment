import { render, screen } from '@testing-library/react';
import HighlightText from '../view';

describe("HighlightText", () => {
    const props = {
        Title: {
            Text: "Choose a Child Care Centre",
            Highlights: [{
                "BeginOffset": 9,
                "EndOffset": 14
            }]
        },
        type: "heading",
        className: "hero-text"
    }
    test("renders text without any highlights", () => {
        render(<HighlightText {...props} />);
        expect(screen.getByTestId('heading')).toBeInTheDocument();
        expect(screen.queryByRole('span')).toBeNull();
    });
    test('renders highlights correctly', () => {
        render(<HighlightText {...props} />);
        const highlightedText = screen.getByText('Child');
        expect(highlightedText.tagName).toBe('STRONG');
    });
    test('renders remaining text after the last highlight', () => {
        render(<HighlightText {...props} />);
        const highlightedText = screen.getByText('Child');
        expect(highlightedText.tagName).toBe('STRONG');
        const withOutHighkightText = screen.getByText('Care Centre');
        expect(withOutHighkightText.tagName).toBe('SPAN');
    });
});
