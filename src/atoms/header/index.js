import React from 'react';
import {string, number} from 'prop-types';

const HeaderComponent = ({level = 1, content=""}) => {
	const CUSTOM_HEADER = `h${level}`;
	return <CUSTOM_HEADER data-testid="header">{content}</CUSTOM_HEADER>
}

HeaderComponent.propTypes = {
	level: number,
	content: string
}

export default HeaderComponent;