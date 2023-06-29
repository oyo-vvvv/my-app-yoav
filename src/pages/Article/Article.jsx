import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useLocation, useParams  } from "react-router-dom"
import "./Article.css"

const Article = () => {
    const [data, setData] = useState();
    
    const getParams = useParams();
    console.log("getParams", getParams.id);

    let location = useLocation()
    // console.log("",location.pathname)
    useEffect(() => {
        axios.get('https://react1-7a0609.appdrag.site/api/Cv/getIdCv', {
            params: {
              "id" : getParams.id,
              "AD_PageNbr" : "1",
              "AD_PageSize" : "500"
            }
          }).then(function(response){
            console.log(response.data.Table[0]);
            setData(response.data.Table[0])
          });
    }, [getParams.id]);
    return (
        <div className='container'>
            <div className="article">
                {data &&
                    <div className="articleDiv">
                        <div>{data.id}</div>
                        <h1>{data.title}</h1>
                        <p>{data.articles}</p>
                        <img src={data.imageArticle} alt="" />
                        <p>
                            auteur : {data.auteur}
                        </p>
                    </div>
                }
            </div>

        </div>
    )
}

export default Article
