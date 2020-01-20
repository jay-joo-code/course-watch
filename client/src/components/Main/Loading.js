import React, { useState, useEffect } from 'react';
import './Loader.scss';

const Loading = ({ loading }) => {
  const [innerClass, setInnerClass] = useState('bg-silver')
  useEffect(() => {
    loading && setInnerClass('bg-cornell');
    !loading && setInnerClass('bg-silver')
  }, [loading])
  return (
    <div className='load-container'>
      <div className='lds-circle'>
        <div className={innerClass} />
      </div>
    </div>
  )
}


export default Loading;