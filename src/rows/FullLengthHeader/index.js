import React from 'react';

import HeaderComponent from '../../atoms/header';
import TextContent from '../../atoms/text-content';

import "./index.scss";

const FullLengthHeader = () => {
	return <header className="full-length-header">
		<HeaderComponent level={1} content="axiamatic" />
		<TextContent type="link" content="Exit Setup" />
	</header>
}

export default FullLengthHeader;

