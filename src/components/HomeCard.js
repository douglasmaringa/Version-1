import React from "react";
import { useNavigate } from 'react-router-dom';

function HomeCard({data}) {
    //everything is set you only need to flex it in as a row 
    //the size is set
    //div class=row
    //  <div class="col-md-3 pb-3"> deleted card size
   

  return (
    <div class="pb-10" style={{"margin":"auto"}}>
    <div class="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm" >
        <div class="list-card-image">
            <div class="star position-absolute"><span class="badge badge-success"><i class="feather-star"></i> 3.1 (300+)</span></div>
            <div class="favourite-heart text-danger position-absolute"><a href="index.html"><i class="feather-heart"></i></a></div>
            <div class="member-plan position-absolute"><span class="badge badge-dark">Promoted</span></div>
            
                {
                    data?.image?(<>
                     <img id="link" alt=""   src={data.image} class="img-fluid item-img w-100"/>
                    </>):(<>
                        <img id="link" alt="" src={require("../img/popular1.png")} class="img-fluid item-img w-100"/>
                    </>)
                }
               
            
        </div>
        <div class="p-3 position-relative">
            <div class="list-card-body">
                <h6 class="mb-1" id="link" >{data.name}</h6>
               
                <p class="text-gray mb-1 rating">
                </p>
                {(() => {
        switch (data.stars) {
          case 1:   return (<>
          <ul class="rating-stars list-unstyled">
                    <li>
                        <i class="feather-star star_active"></i>
                        <i class="feather-star"></i>
                        <i class="feather-star"></i>
                        <i class="feather-star"></i>
                        <i class="feather-star"></i>
                    </li>
                </ul>
          
          </>);
          case 2: return (<>
          <ul class="rating-stars list-unstyled">
                    <li>
                        <i class="feather-star star_active"></i>
                        <i class="feather-star star_active"></i>
                        <i class="feather-star"></i>
                        <i class="feather-star"></i>
                        <i class="feather-star"></i>
                    </li>
                </ul>
          
            </>);
          case 3:  return (<>
          <ul class="rating-stars list-unstyled">
                    <li>
                        <i class="feather-star star_active"></i>
                        <i class="feather-star star_active"></i>
                        <i class="feather-star star_active"></i>
                        <i class="feather-star"></i>
                        <i class="feather-star"></i>
                    </li>
                </ul>
          
            </>);
            case 4:  return (<>
                <ul class="rating-stars list-unstyled">
                          <li>
                              <i class="feather-star star_active"></i>
                              <i class="feather-star star_active"></i>
                              <i class="feather-star star_active"></i>
                              <i class="feather-star star_active"></i>
                              <i class="feather-star"></i>
                          </li>
                      </ul>
                
                  </>);
          default:      return (<>
          
          <ul class="rating-stars list-unstyled">
                    <li>
                        <i class="feather-star star_active"></i>
                        <i class="feather-star star_active"></i>
                        <i class="feather-star star_active"></i>
                        <i class="feather-star star_active"></i>
                        <i class="feather-star star_active"></i>
                    </li>
                </ul>
            </>);
        }
      })()}
       
                
                <p></p>
            </div>
            {(() => {
        switch (data.offer) {
          case 0:   return (<>
          <div class="list-card-badge">
                <span class="" style={{"color":"white"}}>OFFER</span> <small></small>
            </div>
          </>);
          
          default:     return (<>
          <div class="list-card-badge">
                <span class="badge badge-danger">OFFER</span> <small>{data.offer}% off</small>
            </div>
            </>);
        }
      })()}
            
        </div>
        <div class="list-card-badge">
        <h6 class="mb-1 ml-3" id="link" >{data.desc}</h6>
            </div>
    </div>
</div>);
}

export default HomeCard;
