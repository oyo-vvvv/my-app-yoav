import React, {useState} from 'react'
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import NavBar from '../../components/NavBar/NavBar';
import useDocumentTItle from '../../components/useCustoms/useDocumentTItle'
import { setArticles , getArticles , setArticleSelected } from "../../redux/slices/blog.slice"
import useWindowSize from '../../components/useCustoms/useResize'
import useFetch from '../../components/useCustoms/useFetch'
import "./Blog.css"



const Blog = () => {


const [valueInput, setValueInput] = useState('');
const [resultat, setResultat] = useState([]);

useDocumentTItle("myblog")
  const size = useWindowSize()

const dispatch = useDispatch()
const GETARTICLES = useSelector(getArticles)

const { data, loading, error } = useFetch("https://react1-7a0609.appdrag.site/api/Cv/getArticlesCv")
  dispatch(setArticles(data))

const handleInputChange = (e) => {
    console.log("fonction ouverte")
    const valueRecherche = e.target.value
    console.log("valueRecherche", valueRecherche)
    setValueInput(valueRecherche)

    const resultFilter = data.filter(article => article.articles.toLocaleLowerCase().includes(valueRecherche.toLocaleLowerCase()))
    console.log("resultFilter", resultFilter)
    setResultat(resultFilter)

  } 
  return (
    <>
    <NavBar />
    <section id='blog'>
        
        <h1>Section Blog</h1>
        <input type="text" value={valueInput} onChange={handleInputChange} />


        {resultat.length > 0 ?
          (
            <div>
              <h6>Resultat de la recherche</h6>
              <div>
                {
                  resultat.map(article => (
                    <div key={article.id}>
                      titre de l'article : {article.title}
                      <Link to={`/article/${article.id}`}>
                        <button className='btnSucces'>consulter cet article</button>
                      </Link>
                    </div>
                  ))
                }
              </div>
            </div>
          )
          :
          (
            <div>Aucun resultat a votre requete</div>
          )
        }
        {
          GETARTICLES?.map((row) => (
            // je place mon link avec les backticks
            <Link key={row.id} className='blogNav' to={`/article/${row.id}`}>

              <div onClick={()=> dispatch(setArticleSelected(row.id))} className='blogClick'>
                {console.log(row.id ,"row")}
                <h2>{row.title}</h2>
                <p>{row.articles?.slice(0, 100)}...</p>
                {size.width < 400 ?
                  <img src={row.imageArticle} height={50} className='blogImg1 bloImg' alt="" />
                  :
                  <img src={row.imageArticle} className='blogImg2 blogImg' alt="" />

                }


                <p>{row.auteur}</p>

              </div>
            </Link>
          ))
        }
        {error && <p>{error}</p>}
        {loading && loading}
        

    </section>
    </>
  )
}

export default Blog