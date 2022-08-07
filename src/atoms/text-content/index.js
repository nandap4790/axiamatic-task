import React from 'react';
import {string} from 'prop-types';

import "./index.scss";

const TextContent = ({type = "", content="", customStyle="", subtype=""}) => {
	if(type === 'link') {
		return <a href="#" data-testid="link-element" className={`link-text ${customStyle} ${subtype}`}>{content}</a>
	} else if(type === 'div') {
		return <div data-testid="div-element" className={`${customStyle} ${subtype}`}>{content}</div>
	} else if(type === 'span') {
		return <span data-testid="span-element" className={`${customStyle} ${subtype}`}>{content}</span>
	} else {
		return null
	}
}

TextContent.propTypes = {
	type: string,
	content: string,
	customStyle: string,
	subtype: string
}

export default TextContent;