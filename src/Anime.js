import AnimeList from './Components3/AnimeList'
import { Route,Routes} from 'react-router-dom'
import AnimeDetail from './Components3/AnimeDetail'
import Header from './Components3/Header'
function Anime(){

    return (
        <>
            <Header/>
            <Routes>

                <Route path='/' element={<AnimeList />} />
                <Route path='/anime/:id' element={<AnimeDetail />} />
             
            </Routes>
            </>
    )
}

export default Anime