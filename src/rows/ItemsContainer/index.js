import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

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
        return itemList.map((item) => {
          return <div class="icon-container">
            {item.label}
            <span className="remove-item" onClick={(e) => removeItemFromSelected(e, item)}>
              <span class="material-icons">close</span>
              <span>Remove</span>
            </span>
          </div>
        })
    //     // for(let i=1;i<=4;i++) {
    //     //   console.log('inside', 1)
    //     //   return <div class="icon-container">
    //     //     <div className="add-icon">
    //     //         <span class="material-icons">add</span>
    //     //       </div>
    //     //     </div>
    //     // }
    //     // return [...Array(4)].map((e, i) => 
    //     //   <div class="icon-container">
    //     //     <div className="add-icon">
    //     //       <span class="material-icons">add</span>
    //     //     </div>
    //     //   </div>
    //     // );
    }

    return <div className="items-container">
        <div className="wrapper-icons">{renderStuff()}</div>
        {numberOfItems > 0 && <div className="added-products-count">{numberOfItems} {productString} added</div>}
    </div>
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

export default connect(mapStateToprops, mapDispatchToProps)(ItemsContainer);