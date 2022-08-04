import { useState } from 'react';
import './App.css';
import HeaderComponent from './atoms/header';
import TextContent from './atoms/text-content';
import FullLengthHeader from './rows';
import Select from 'react-select'

const App = () => {
  const data = [
    {
      id: 1,
      logo: '',
      value: 'notion',
      label: 'Notion'
    },
    {
      id: 2,
      logo: '',
      value: 'slack',
      label: 'Slack'
    },
    {
      id: 3,
      logo: '',
      value: 'jira',
      label: 'Jira'
    },
    {
      id: 4,
      logo: '',
      value: 'github',
      label: 'Github'
    },
    {
      id: 5,
      logo: '',
      value: 'gitLab',
      label: 'Gitlab'
    },
  ];

  const [inputVal, setInputVal]= useState('');
  const [list, setList] = useState([]);
  const [selectedVal, setSelectedVal] = useState([]);

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

  const removeItemFromSelected = (e, item) => {
    const copyArr = [...selectedVal];
    setSelectedVal(copyArr.filter(ele =>  ele.id !== item.id ))
  }

  const renderStuff = () => {
    return selectedVal.map((item) => {
      return <div>
        <span>{item.label}</span>
        <span onClick={(e) => removeItemFromSelected(e, item)}>remove item</span>
      </div>
    })
  }

  return (
    <div className="axiamatic-tools">
      <FullLengthHeader />
      <div className="tool-upload-content">
        <div classNames="tiles"></div>
        <div className='desc-with-search'>
          <div>1 of 3</div>
          <HeaderComponent level={3} content="Let's add your internal tools" />
          <TextContent type="div" content="Search to quickly add products your team uses today. You'll be able to add as many as you need later but for now let's add four." />
        </div>
      </div>
      <Select options={data} onChange={handleChange} />
      {renderStuff()}
    </div>
  );
}

export default App;
