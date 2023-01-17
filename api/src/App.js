import axios from "axios";
import React,{useEffect, useState} from "react";
function App() {
  const [data,setData]=useState([])
  useEffect(()=>{
    const mydata=[]
    axios.get("https://newsapi.org/v2/top-headlines?q=sport&apiKey=d240e5addc154577b8a0cb23630591f0")
    .then((res)=>{
      res.data.articles.filter((element)=>{
        if(element.author!==null){
          mydata.push(element)
          setData(mydata)
        }
    })
    })
    .catch((error)=>{console.log(error)})
  
  },[])
  return (

    <div className="App">
      {console.log(data)}
    {data.map((e)=><div>{e.author}
    <img src={e.urlToImage}/>
    </div>)}  
    </div>
  );
}

export default App;
