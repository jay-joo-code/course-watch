import React from 'react';
import './Watch.scss';
import axios from 'axios';

const Watch = ({
  user, watch, setVersion, version, loading, setLoading,
}) => {
  const {
    classNumber, section, subjectCode, title, type, _id,
  } = watch;
  const uid = user && user.uid;
  const handleRemove = () => {
    setLoading(true);
    axios.post(`/api/user/${uid}/remove-course`, { _id })
      .then((res) => {
        setLoading(false);
        setVersion(version + 1);
      })
      .catch((e) => {
        setLoading(false);
        console.log('ERROR handle remove course from watch', e);
      });
  };

  return (
    <div className="border-modern-shallow m-2 bg-white container-watch d-flex flex-row align-items-center">
      <div className="container-fluid v-100 h-100">
        <div className="row h-100">
          <div className="col-9 d-flex flex-column justify-content-center section-class-description">
            <p className="mb-0 class-description">
              <span className="color-cornell font-weight-normal">{classNumber}</span>
              {' '}
              {subjectCode}
              {' '}
              {type}
              {' '}
              {section}
            </p>
            <p className="mb-0 text-muted class-description">{title}</p>
          </div>
          <div className="col-2 d-flex flex-row align-items-center justify-content-center" />
        </div>
      </div>
      <div className="danger-area h-100" onClick={handleRemove} />
    </div>
  );
};

export default Watch;
