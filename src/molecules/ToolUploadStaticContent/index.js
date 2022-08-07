import React from "react";

import HeaderComponent from "../../atoms/header";
import TextContent from "../../atoms/text-content";
import { addToolDescription, addToolHeader } from "../../constants";

import "./index.scss";

export const ToolUploadStaticContent = () => {
	return (
		<div className='desc-with-search'>
			<TextContent type="span" content="1 of 3" subtype="with-background" customStyle="blue-background" />
			<div className='static-description'>
				<HeaderComponent level={3} content={addToolHeader} />
				<TextContent type="div" content={addToolDescription} />
			</div>
	</div>
	)
}