import React from 'react';
import './MyWork.css';
import myWorkData from "../../assets/mywork_data";


const MyWork = () => {
  return (
    <div className='mywork'>
      <div className="mywork-title">
        <h1>My Latest Work</h1>
      </div>
      <div className="mywork-container">
        {myWorkData.map((item, index) => (
          <div className="mywork-item" key={index}>
            <img src={item.image} alt={item.title} />
            <div className="mywork-info">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <a href={item.link} target="_blank" rel="noopener noreferrer">View Project</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyWork;
