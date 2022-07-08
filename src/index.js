import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Homepage from './Homepage';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Homepage />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
   // tester.map((data) =>  {
            //   return (
            //       <div key={data.content} className="middle">
            //           <div className="middle-div">
            //               <div className="middle-word">
            //                   <div>
            //                       {data.source.name}
            //                   </div>
            //                   <b>
            //                       {data.title}
            //                   </b>
            //                   <div className="middle-describe">
            //                       {data.description}
            //                   </div>
            //                   <div>
            //                       <a href={data.url} className="middlelink"><span>Read Story</span><i></i></a>
            //                   </div>

            //               </div>
            //               <div className="middle-image">
            //                   <img src={data.urlToImage} alt="" /> 
            //               </div>
            //           </div>

            //       </div>
            //   );
            //   })