import { useEffect, useState } from 'react';
import './App.css';
import HeaderComponent from './atoms/header';
import TextContent from './atoms/text-content';
import FullLengthHeader from './rows';
import Select from 'react-select'
import { GitlabIcon } from './icons/gitlab';
import { NotionIcon } from './icons/notion';
import { SlackIcon } from './icons/slack';
import { JiraIcon } from './icons/jira';
import { GithubIcon } from './icons/github';

const App = () => {
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

  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]

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
    // return selectedVal.map((item) => {
    //   return <div class="icon-container">
    //     {item.label}
    //     <span className="remove-item" onClick={(e) => removeItemFromSelected(e, item)}>
    //       <span class="material-icons">close</span>
    //       <span>Remove</span>
    //     </span>
    //   </div>
    // })
    // for(let i=1;i<=4;i++) {
    //   console.log('inside', 1)
    //   return <div class="icon-container">
    //     <div className="add-icon">
    //         <span class="material-icons">add</span>
    //       </div>
    //     </div>
    // }
    return [...Array(4)].map((e, i) => 
      <div class="icon-container">
        <div className="add-icon">
          <span class="material-icons">add</span>
        </div>
      </div>
    );
  }

  return (
    <div className="axiamatic-tools">
      <FullLengthHeader />
      <div className="axiamatic-tools-container">
        <div className="description-container">
          <div className="tool-upload-content">
            <div classNames="tiles"></div>
            <div className='desc-with-search'>
              <span className="step-counter">1 of 3</span>
              <div className='static-description'>
                <HeaderComponent level={3} content="Let's add your internal tools" />
                <TextContent type="div" content="Search to quickly add products your team uses today. You'll be able to add as many as you need later but for now let's add four." />
              </div>
            </div>
          </div>
          <Select options={data} onChange={handleChange} placeholder={'Search for any software...'} />
        </div>
        <div className="items-container">
          <div className="wrapper-icons">{renderStuff()}</div>
          {numberOfItems > 0 && <div className="added-products-count">{numberOfItems} {productString} added</div>}
        </div>
      </div>
    </div>
  );
}

export default App;
