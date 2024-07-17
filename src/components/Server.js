

import App from '../App.css';

// function Server() {
//     return (
//       <div className="App">
//        <h1>Hello React js</h1>
//       </div>
//     );
//   }


 const Server = () => {

    return(
    <div className='social-btn-bg'>
      <h1 className='social-btn-heading'>
    Social Buttons
      </h1>
    
     
      <button className="social-btn-like" content='like'>Like</button>
      <button className="social-btn-comment" content='comment'>Comment</button>
      <button className="social-btn-share" content='share'>Share</button>
   
      </div>
    
    );
  };
    




  
  export default Server;
  