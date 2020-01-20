import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import Watch from './Watch';
import Loading from './Loading';

const Watches = ({ version, setVersion }) => {
  const [watching, setWatching] = useState([]);
  const [loading, setLoading] = useState(false);
  const userParent = useSelector((state) => state.user);
  const user = userParent && userParent.user;
  useEffect(() => {
    if (user) {
      setLoading(true);
      axios.get(`/api/user/${user.uid}`)
        .then((res) => {
          setLoading(false);
          setWatching(res.data.watching);
        })
        .catch((e) => {
          setLoading(false);
          console.log('ERROR fetching watching at Watches list', e);
        });
    } else {
      setWatching([]);
    }
  }, [version]);
  return (
    <div className="w-100 ">
      <div className="d-flex flex-row justify-content-center">
        <Loading loading={loading} />
      </div>
      <div className="w-100 d-flex flex-column align-items-center">
        {watching.map((watch) => (
          <Watch
            key={watch.classNumber}
            setVersion={setVersion}
            version={version}
            loading={loading}
            setLoading={setLoading}
            watch={watch}
            user={user}
          />
        ))}
      </div>
    </div>


  );
};


export default Watches;
