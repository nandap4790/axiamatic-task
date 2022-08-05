import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import { connect } from 'react-redux';

import { GithubIcon } from '../../icons/github';
import { GitlabIcon } from '../../icons/gitlab';
import { JiraIcon } from '../../icons/jira';
import { NotionIcon } from '../../icons/notion';
import { SlackIcon } from '../../icons/slack';
import { ToolUploadStaticContent } from '../../molecules/ToolUploadStaticContent';

const Content = () => {
    const data = [
        {
          id: 1,
          logo: '',
          value: 'notion',
          label: <div class="icon-content"><span><NotionIcon /></span><span className="software-option">Notion</span></div>
        },
        {
          id: 2,
          logo: '',
          value: 'slack',
          label: <div class="icon-content"><span><SlackIcon /></span><span className="software-option">Slack</span></div>
        },
        {
          id: 3,
          logo: '',
          value: 'jira',
          label: <div class="icon-content"><span><JiraIcon /></span><span className="software-option">Jira</span></div>
        },
        {
          id: 4,
          logo: '',
          value: 'github',
          label: <div class="icon-content"><span><GithubIcon /></span><span className="software-option">Github</span></div>
        },
        {
          id: 5,
          logo: '',
          value: 'gitLab',
          label: <div class="icon-content"><span><GitlabIcon /></span><span className="software-option">Gitlab</span></div>
        },
      ];
      const [selectedVal, setSelectedVal] = useState([]);
      const [numberOfItems, setNumberOfItems] = useState();
      const [productString, setProductString] = useState();
    
      const handleChange = (selectedOptions) => {
        const copyArr = [...selectedVal];
        const findItem = copyArr.find(item => item.id === selectedOptions.id);
      
        if(!findItem) {
          copyArr.push(selectedOptions);
          setSelectedVal(copyArr);
        }
      }
    
      useEffect(() => {
        if(selectedVal.length === 1) {
          setProductString("product")
        } else if(selectedVal.length > 1) {
          setProductString("products")
        }
        setNumberOfItems(selectedVal.length)
      }, [selectedVal])
    
      const removeItemFromSelected = (e, item) => {
        const copyArr = [...selectedVal];
        setSelectedVal(copyArr.filter(ele =>  ele.id !== item.id ))
      }
    
      const renderStuff = () => {
        return selectedVal.map((item) => {
          return <div class="icon-container">
            {item.label}
            <span className="remove-item" onClick={(e) => removeItemFromSelected(e, item)}>
              <span class="material-icons">close</span>
              <span>Remove</span>
            </span>
          </div>
        })
        // for(let i=1;i<=4;i++) {
        //   console.log('inside', 1)
        //   return <div class="icon-container">
        //     <div className="add-icon">
        //         <span class="material-icons">add</span>
        //       </div>
        //     </div>
        // }
        // return [...Array(4)].map((e, i) => 
        //   <div class="icon-container">
        //     <div className="add-icon">
        //       <span class="material-icons">add</span>
        //     </div>
        //   </div>
        // );
      }
    return <div className="axiamatic-tools-container">
        <div className="description-container">
            <ToolUploadStaticContent />
            <Select options={data} onChange={handleChange} placeholder={'Search for any software...'} />
        </div>
        <div className="items-container">
            <div className="wrapper-icons">{renderStuff()}</div>
            {numberOfItems > 0 && <div className="added-products-count">{numberOfItems} {productString} added</div>}
        </div>
    </div>
}

const mapStateToProps = (state) => {
  console.log(state)
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToList: () => dispatch({type: 'ADD_TO_LIST'})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Content);