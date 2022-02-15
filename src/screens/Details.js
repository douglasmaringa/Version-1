import Footer from '../components/Footer';
import Header from '../components/Header';
import HomeCard from "../components/HomeCard"
import { useNavigate, useLocation } from 'react-router-dom';


function Details() {
    const {state} = useLocation();
    const navigate = useNavigate();
 
  return (<div style={{"margin-bottom":"100px"}}>
      <Header/>
      
  
<div class="pt-4 pb-2 pl-2 title d-flex align-items-center">
                <h5 class="m-0"></h5>
                <button class="btn1" onClick={()=>{navigate("/")}}>Back</button>
            </div>
<div class='card'>
  
<div className='innerCard'>
  <HomeCard data={state}/>
  </div>
    
</div>



      <Footer/>
  </div>);
}

export default Details;
