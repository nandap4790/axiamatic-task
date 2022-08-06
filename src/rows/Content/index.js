import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import { connect } from 'react-redux';

import { GithubIcon } from '../../icons/github';
import { GitlabIcon } from '../../icons/gitlab';
import { JiraIcon } from '../../icons/jira';
import { NotionIcon } from '../../icons/notion';
import { SlackIcon } from '../../icons/slack';
import { ToolUploadStaticContent } from '../../molecules/ToolUploadStaticContent';
import ItemsContainer from '../ItemsContainer';

import "./index.scss";

const Content = ({addToList, itemList}) => {
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
    
      const handleChange = (selectedOptions) => {
        const copyArr = [...itemList];
        const findItem = copyArr.find(item => item && item.id === selectedOptions.id);
      
        if(!findItem) {
          addToList(selectedOptions)
        }
      }

      const [buttonDisabled, setButtonDisabled] = useState(true);
      const [buttonClass, setButtonClass] = useState("next-button disabled");

      useEffect(() => {
        if(itemList.length > 0) {
          setButtonDisabled(false);
          setButtonClass("next-button");
        }
      }, [itemList]);

    return <div className="axiamatic-tools-container">
        <div className="description-container">
            <ToolUploadStaticContent />
            <Select options={data} onChange={handleChange} placeholder={'Search for any software...'} />
            <button className={buttonClass} disabled={buttonDisabled}>Next</button>
        </div>
        <ItemsContainer />
    </div>
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

export default connect(mapStateToprops, mapDispatchToProps)(Content);