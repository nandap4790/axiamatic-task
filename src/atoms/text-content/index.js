import React from 'react';

const TextContent = ({type = "", content=""}) => {
    if(content) {
        if(type === 'link') {
            return <a href="#" className="link-text">{content}</a>
        } else if(type === 'div') {
            return <div>{content}</div>
        } else {
            return null;
        }
    } else {
        return null
    }
}

export default TextContent;