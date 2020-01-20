import React, { useState, useEffect } from 'react';
import ClassNumberInput from './ClassNumberInput'
import Watches from './Watches';
import { useSelector } from 'react-redux';

const Main = () => {
  const [version, setVersion] = useState(0);
  const user = useSelector((state) => state.user);
  useEffect(() => {
    setVersion(version + 1);
  }, [user])
  
  return (
      <div className="container-fluid mb-5">
          <div className="d-flex flex-column align-items-center">
              <ClassNumberInput 
                version={version}
                setVersion={setVersion}
              />
              <Watches 
                version={version}
                setVersion={setVersion}
              />
          </div>
      </div>
      )
}


export default Main;