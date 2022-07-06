import { useState,useEffect } from "react";
import axios from "axios";



const Middle = () => {
    const [tester, setTester] = useState([]);
    // const [likes, setLikes] = useState(5);
    // const [describe, setDescribe] = useState('Yellow');
  
    const num = [1, 2, 3, 4, 5, 6];
    
    const Option = {
      method: "GET",
      url:
        "https://newsapi.org/v2/everything?" +
        "q=Apple&" +
        "sortBy=publishedAt&" +
        "apiKey=a652e51aa018474c994ed646bf93ca43",
    };
    useEffect(() => {
      axios
      .request(Option)
        .then((res) => {
          let call = [];
          let num = [];
          for (let i = 0; i < res.data.articles.length; i++) {
            console.log(res.data.articles[i]);
            let man = res.data.articles[i];
            // console.log(i)
            num.push(i);
            call.push(res.data.articles[i]);
          }
          console.log(call);
          console.log(num);
          setTester(call);
          // console.log(num.indexOf(0))
        })
        .catch(function (error) {
          console.error(error);
        });
      }, []);

    return ( 
        <div className="middle-diver">
            {tester.map((data) =>  {
                return (
                    <div key={data.content} className="middle">
                        <div className="middle-div">
                            <div className="middle-word">
                                <div>
                                    {data.source.name}
                                </div>
                                <b>
                                    {data.title}
                                </b>
                                <div className="middle-describe">
                                    {data.description}
                                </div>
                                <div>
                                    <a href={data.url} className="middlelink"><span>Read Story</span><i></i></a>
                                </div>

                            </div>
                            <div className="middle-image">
                                <img src={data.urlToImage} alt="" /> 
                            </div>
                        </div>

                    </div>
                );
                })}

        </div>
     );
}
 
export default Middle;