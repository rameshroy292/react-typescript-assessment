import React from "react";
import { HighlightTextProps } from "../../interfaces";

const HighlightText: React.FC<HighlightTextProps> = ({ Title, className, type }) => {
    const { Text, Highlights } = Title;
    const sortedOffsets = Highlights.sort((a, b) => a.BeginOffset - b.BeginOffset);
    const generateHighlightedText = () => {
        const highlightedText: JSX.Element[] = [];
        let currentIndex = 0;
        sortedOffsets.forEach((Highlights, index) => {
            const { BeginOffset, EndOffset } = Highlights;
            if (BeginOffset >= 0 && EndOffset <= Text.length && BeginOffset < EndOffset) {
                if (currentIndex < BeginOffset) {
                    highlightedText.push(<span key={`text-${index}-before`}>{Text.slice(currentIndex, BeginOffset)}</span>)
                }
                highlightedText.push(<strong key={`bold-${index}`}>{Text.slice(BeginOffset, EndOffset)}</strong>);
                currentIndex = EndOffset;
            }
        });
        if (currentIndex < Text.length) {
            highlightedText.push(<span key="text-after">{Text.slice(currentIndex)}</span>);
        }
        return highlightedText;
    }
    return <>
        {   type === "heading"
            ? <h4 className={className} data-testid="heading">{generateHighlightedText()}</h4>
            : <p  className={className}>{generateHighlightedText()}</p>
        }
    </>
}

export default HighlightText;
