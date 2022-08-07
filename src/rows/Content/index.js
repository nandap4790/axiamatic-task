import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import { connect } from 'react-redux';
import { func, array } from 'prop-types';

import { ToolUploadStaticContent } from '../../molecules/ToolUploadStaticContent';
import ItemsContainer from '../ItemsContainer';

import "./index.scss";
import { data } from '../../mock-data';

const Content = ({addToList, itemList}) => {
  const handleChange = (selectedOptions) => {
    const copyArr = [...itemList];
    const findItem = copyArr.find(item => item && item.id === selectedOptions.id);
  
    if(!findItem) {
      addToList(selectedOptions)
    }
  }

  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [buttonClass, setButtonClass] = useState("next-button disabled");
  const [dropdownDisabled, setDropdownDisabled] = useState(false);

  useEffect(() => {
    if(itemList.length > 0) {
      setButtonDisabled(false);
      setButtonClass("next-button");

      itemList.length === 4 ? setDropdownDisabled(true) : setDropdownDisabled(false);
    }
  }, [itemList]);

  return (
    <div className="axiamatic-tools-container">
      <div className="description-container">
        <ToolUploadStaticContent />
        <Select options={data} onChange={handleChange} placeholder={'Search for any software...'} isDisabled={dropdownDisabled} />
        <button className={buttonClass} disabled={buttonDisabled}>Next</button>
      </div>
      <ItemsContainer />
    </div>
  )
}

const mapStateToprops = (state) => {
  return {
    itemList: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToList: (data) => dispatch({payload: data, type: 'ADD_ITEM'})
  }
}

Content.propTypes = {
  addToList: func,
  itemList: array,
}

export default connect(mapStateToprops, mapDispatchToProps)(Content);