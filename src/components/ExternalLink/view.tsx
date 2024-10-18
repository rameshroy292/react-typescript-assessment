import React from "react";
import { ExternalLinkProps } from "../../interfaces";

const ExternalLink: React.FC<ExternalLinkProps> = ({url}) => {
    return <>
         <a href={`${url}`} target="_blank" className="link">{url}</a>
    </>
}   
export default ExternalLink;