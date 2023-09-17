import { useState, useEffect} from 'react'
import useFetch from '../useFetch';
import Tab from './Tab';
import './App.css'

const url = 'https://course-api.com/react-tabs-project';

function App() {
  const [people, setpeople] = useState({});
  const [displayTab, setDisplayTab] = useState({})
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);

  useEffect(() => {
    useFetch(url,setpeople,setDisplayTab,setLoading,setError);
  },[])


  const switchTab = (e) => {
    const index = people.indexOf(people.find(person => person.company == e.target.value))
    setDisplayTab(people[index]);
  }

  if(isLoading === true) {
    return (
      <h1 className='text-center'>...Loading</h1>
    )
  }
  if(isError === true) {
    return (
      <h1 className='text-center'>There was an Error, try again later</h1>
    )
  }
 
  return (
    <>
      <div className='sm:flex justify-center'>
        <div className='flex flex-col sm:mb-16'>
          {people.map(person => {
            const {company, id} = person;
            return (
                <button 
                className={displayTab.company == company ? 'border-green-300 text-green-300' : ''} 
                onClick={switchTab}
                value={company} 
                key={id} 
                type='button'
                >
                  {company}
                </button>
            )
          })}
        </div>
        <Tab {...displayTab}/>
      </div>
    </>
  )
}

export default App
