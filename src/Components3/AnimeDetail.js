import React, { useState,useEffect} from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function Single() {
  const {id} = useParams();
  const [anime,setAnime] = useState([]);
  const [loading,setLoading]= useState(false)
  console.log("this is id of anime ",id);
  useEffect(() => {
    const getAnime = async()=>{
      setLoading(true)
      const response = await axios.get(`https://ghibliapi.herokuapp.com/films/${id}`)
      setAnime(response.data)
      setLoading(false)
    }
    getAnime()
    console.log("this is anime ",anime);
    
  },[])
  

  
  // console.log("here is prop ",props.data);

  return (
    <>
      <div className='container py-5'>
        <div className='row py-4'>
            {loading?<>Loading....</>:
            <>

              <div className='col-md-6'>
                <img src={anime.image} alt={anime.title} height="400px" width="400px" />
              </div>
              <div className='col-md-6'>
                    <h1 className='display-5'>{anime.title}</h1>
                    <h4 className='text-uppercase text-black-50'>
                        {anime.original_title}
                    </h4>
                    <div className='fs-5'>Release Date: {anime.release_date}  </div>                   
                   
                    <hr/>
                    <p className='fs-3'>Description: </p>
                    <p className='lead'> {anime.description}</p>
                    <hr/>
                  
                </div>



            </>
            }
        </div>
      </div>
    </>
  )
}

        // <Card >
        //   <Card.Img variant="top" className='image-cont'  src={props.data.image} />
        //   <Card.Body>
        //     <Card.Title>{props.data.title}</Card.Title>
        //     <Card.Text>
        //       {props.data.description}
        //     </Card.Text>
        //     <Button variant="primary">Go somewhere</Button>
        //   </Card.Body>
        // </Card>