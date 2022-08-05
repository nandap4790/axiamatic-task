import React from 'react';

import "./index.scss";

const TextContent = ({type = "", content="", customStyle="", subtype=""}) => {
    if(content) {
        if(type === 'link') {
            return <a href="#" className={`link-text ${customStyle} ${subtype}`}>{content}</a>
        } else if(type === 'div') {
            return <div className={`${customStyle} ${subtype}`}>{content}</div>
        } else if(type === 'span') {
            return <span className={`${customStyle} ${subtype}`}>{content}</span>
        } else {
            return null
        }
    } else {
        return null
    }
}

export default TextContent;