import Navbar from "./Navbar/Navbar";
import Trend from "./Trend/Trend";
import Middle from "./Middle";
import Aside from "./Aside";
import "./App.css";
import { useState,useEffect } from "react";
import axios from "axios";
import Vernavbar from "./Navbar/Ver-navbar";



function App() {
  const [searchItem, setSearchItem] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [tester, setTester] = useState([]);

  // const getApi = () => {
  const searchHandler = (searchItem) => {
    // console.log(searchItem)
    setSearchItem(searchItem);
    if (searchItem !== "") {
      const newSet = tester.filter((data) => {
          return Object.values(data)
            .join(" ")
            .toLowerCase()
            .includes(searchItem.toLowerCase())
        ;
      });
      setSearchResult(newSet)
      }
      else{
        setSearchResult(tester)
      }
    };

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
            // console.log(res.data.articles[i]);
            // let man = res.data.articles[i];
            // console.log(i)
            num.push(i);
            call.push(res.data.articles[i]);
          }
          // console.log(call);
          // console.log(num);
          setTester(call);
          // console.log(num.indexOf(0))
        })
        .catch(function (error) {
          console.error(error);
        });
      }, []);


  return (
    <div className="App">
      <Navbar
      term={searchItem}
      searchKeyword={searchHandler}
      searchWarn = {searchResult}
      />
      <div className="middle-body2">
      {searchResult.length === 0 && searchItem.length > 0 ? <div className="result-warning">No Results found</div>  : console.log()}
      {searchItem.length > 0 ? (
        searchResult.map((data) => {
          return(
            <div className="middle_div2">
              <div className="middle-diver">
                <div key={data.url} className="middle">
             <div className="middle-div">
                <div className="middle-word">
                    <div>
                        {data.source.name}
                    </div>
                    <b>
                    {data.title.slice(0,20)} ...
                    </b>
                    <div className="middle-describe">
                        {data.description}
                    </div>
                    <div>
                        <a href={data.url} className="middlelink"><span>Read Story</span><i></i></a>
                        <a href={data.url} className="middlelinker">Read story</a>
                    </div>

                </div>
                <div className="middle-image">
                    <img src={data.urlToImage} alt="" /> 
                </div>
            </div>
            </div>
            </div>
        </div>
           )
          })
          ) : (
            <header className="App-header">
            <Trend />
            <hr />
            <div className="middle-body">
           <div className="aside-div">
             <Aside />
           </div>
           <div className="middle_div">
             <Middle />
          </div>
            </div>
         </header>
         )}

         </div>
        

         </div>
         );
}

export default App;

         {/* <div class="triangle">
           <div class="triangle-up1"></div>
           <div class="triangle-up2"></div>
         </div>
         <div class="triangle2">
           <div class="triangle-up3"></div>
           <div class="triangle-up4"></div>
         </div>
         <div>VTBlog</div> */}
         {/* <Signin /> */}
         {/* <Signup /> */}