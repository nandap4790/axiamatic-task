import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { func, array } from 'prop-types';

import "./index.scss";

const ItemsContainer = ({itemList, removeFromList}) => {
	const [numberOfItems, setNumberOfItems] = useState();
	const [productString, setProductString] = useState();

	useEffect(() => {
		if(itemList.length === 1) {
			setProductString("product")
		} else if(itemList.length > 1) {
			setProductString("products")
		}
		setNumberOfItems(itemList.length)
	}, [itemList])

	const removeItemFromSelected = (e, item) => {
		const copyArr = [...itemList];
		removeFromList(copyArr.filter(ele =>  ele.id !== item.id ))
	}
        
	const renderStuff = () => {
		const target = 4;
		const itemsLength = itemList.length;
		const placeholderItems = [...Array(target - itemsLength)];
		const newArr = [...itemList, ...placeholderItems];

		return newArr.map((item, index) => {
			if(item === undefined) {
				return (
					<div className="icon-container" key={index}>
						<div className="add-icon">
							<span className="material-icons">add</span>
						</div>
					</div>
				)
			} else {
				return (
					<div className="icon-container" key={item.value}>
						{item.label}
						<span className="remove-item" onClick={(e) => removeItemFromSelected(e, item)}>
							<span className="material-icons">close</span>
							<span>Remove</span>
						</span>
					</div>
				)
			}
		})
	}

	return (
		<div className="items-container">
			<div className="wrapper-icons">{renderStuff()}</div>
			{numberOfItems > 0 && <div className="added-products-count">{numberOfItems} {productString} added</div>}
		</div>
	)
}

const mapDispatchToProps = (dispatch) => {
	return {
		removeFromList: (data) => dispatch({payload: data, type: 'REMOVE_ITEM'})
	}
}

const mapStateToprops = (state) => {
	return {
		itemList: state
	}
}

ItemsContainer.propTypes = {
	removeFromList: func,
	itemList: array,
}

export default connect(mapStateToprops, mapDispatchToProps)(ItemsContainer);