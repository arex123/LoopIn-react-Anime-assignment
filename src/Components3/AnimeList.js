import axios from 'axios';
import React,{useState,useEffect} from 'react'
import { Card ,Row,Col } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';

export default function Home() {

    const [list,setList] = useState([]);
    const [singleanime,setSingleanime] = useState('');
    const [cliked,setClicked] = useState(false)


    useEffect(()=>{

        async function callApi(){
            let movielist = await axios.get('https://ghibliapi.herokuapp.com/films')
            // console.log(movielist.data.length);
            // console.log(movielist.data)
            setList(movielist.data)
        }

        callApi()

        // console.log(singleanime);
    },[])

    function setSingleAnime(movie){
        // console.log(movie)
        setSingleanime(movie)
    }
    function goToPage(){
      setClicked(true)
    }

    
  return (
    <div>
   

    {list.length>0 ?(

        <>
        <Row xs={1} md={3} className="g-4">
          {list.map((movie) => (
            <Col key={movie.id} >
              <Card className='h-100' onMouseEnter={()=>setSingleAnime(movie)}>
                <Card.Img style={{"height":"400px"}} variant="top" src={movie.image}/>
                <Card.Body>
                  <Card.Title>{movie.title}</Card.Title>
                 
                 <div style={{
                   "fontSize":"15px",
                   "display":"flex",
                   "justifyContent":"space-around",
                   "padding":"0 2px",
                   "paddingBottom":"3px"
                 }}>
                  <Card.Text>
                    Release Date: {movie.release_date}
                  </Card.Text>
                  <Card.Text >
                    Score: {movie.rt_score}
                  </Card.Text>
                  </div>

                  <NavLink to={`/anime/${movie.id}`} className="btn btn-outline-dark">Know more</NavLink>

                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        </>


      ):<>
          <div style={{display: 'flex', justifyContent: 'center'}}>
          Loading.....
          </div>
      </>}
     
   

    </div>
  )
}

