import React, { useEffect,useState } from "react";
import { useNavigate } from 'react-router-dom';
import {auth,db} from '../firebase'
import { useTranslation } from "react-i18next";
import "../translations/i18n";
import i18n from "i18next";

function Header() {
    const[user,setUser]=useState([])
    const[data,setData]=useState([])
    const[admin,setAdmin]=useState(false)
    const { t } = useTranslation();
    const [language, setLanguage] = useState('en');
 
    const handleOnclick=(e)=>{
      e.preventDefault();
      setLanguage(e.target.value);
      i18n.changeLanguage(e.target.value);
    }

    const navigate = useNavigate();

    useEffect(() => {
        // will only run once when the app component loads...
    
        auth.onAuthStateChanged((authUser) => {
          console.log("THE USER IS >>> ", authUser);
          setUser(authUser)
          if(authUser){
            db.collection("users").where("email", "==", authUser.email)
            .onSnapshot((querySnapshot) => {
               
              setData(querySnapshot.docs.map((doc)=>doc.data()))
               
        })
          if(authUser.email === "admin@gmail.com"){
            setAdmin(true)
          }else{
            setAdmin(false)
          }
        }else{
            //navigate("/login")
            console.log("user not logged in")
        }
        });
      }, []);

    const logout = () => {
        if (user) {
          auth.signOut();
          setAdmin(false)
          navigate("/")
        }
      }
  return (<div>
    
    <header class="section-header">
        <section class="header-main shadow-sm bg-white">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-1">
                        
                            <img alt="#" class="img-fluid" id="link" onClick={()=>{navigate("/")}} src="https://i.ibb.co/YLhZNL8/IMG-20220124-WA0037.jpg" width="70" height="20"/>
                        
                      
                    </div>
                   <div class='col-3 align-items-center'>

                   </div>
                    {/*<-- col.// -->*/}
                    <div class="col-8">
                        <div class="d-flex align-items-center justify-content-end pr-5">
                           {/* <!-- search -->*/}
                            <a href="search.html" class="widget-header mr-4 text-dark">
                                <div class="icon d-flex align-items-center">
                                    
                                </div>
                            </a>
                             {/* <!-- offers -->*/}
                            <a href="offers.html" class="widget-header mr-4 text-white btn bg-primary m-none">
                                <div class="icon d-flex align-items-center">
                                    <span>
                                    <button  class="widget-header  text-white btn bg-primary m-none" value='dl' onClick={handleOnclick}>
                                        DL
                                    </button>
                                    <i class="feather-disc h6 mb-0"></i>
                                     <button  class="widget-header  text-white btn bg-primary m-none" value='en' onClick={handleOnclick}>
                                      EN
                                    </button>
                                       
                                        </span>
                                </div>
                            </a>
                            {/* <!-- signin -->*/}
                           {
                               user?(<>
                                 <div class="icon d-flex align-items-center mr-4" id="link" onClick={()=>{logout()}}>
                                    <i class="feather-user h6 mr-2 mb-0"></i> <span>{t("logout")}</span>
                                </div>
                               </>):(<>
                                <div class="icon d-flex align-items-center mr-4" id="link" onClick={()=>{navigate("/login")}}>
                                    <i class="feather-user h6 mr-2 mb-0"></i> <span>{t("login")}</span>
                                </div>
                               </>)
                           }
                              
                           
                            {/* <!-- my account-->*/}
                            <div class="dropdown mr-4 m-none">
                                {
                                    data[0]?(<>
                                         <a href="index.html" class="dropdown-toggle text-dark py-3 d-block" id="dropdownMenuButton" data-toggle="dropdown" >
                                    <img alt="#" src={data[0].image} width="30" class="img-fluid rounded-circle header-user mr-2 header-user"/> {t("hi")} {data[0].name}
                                </a>
                                    </>):(<>
                                        <a href="index.html" class="dropdown-toggle text-dark py-3 d-block" id="dropdownMenuButton" data-toggle="dropdown" >
                                    <img alt="#" src={require("../img/user/1.jpg")}  class="img-fluid rounded-circle header-user mr-2 header-user"/> {t("hi")}
                                </a>
                                    </>)
                                }
                               {
                                   admin?(<>
                                   <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                                    <button class="dropdown-item" id="link" onClick={()=>{navigate("/adminorders")}}>{t("vieworder")}</button>
                                    <button class="dropdown-item" id="link" onClick={()=>{navigate("/admintype")}}>{t("createmeal")}</button>
                                </div>
                                   </>):(<>
                                   {
                                       user?(<>
                                       <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                                    <button class="dropdown-item" id="link" onClick={()=>{navigate("/account")}}>{t("myorders")}</button>
                                </div>
                                       </>):(<>
                                        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                                   
                                </div>
                                       
                                       </>)
                                   }
                                    
                                   </>)
                               }
                                
                            </div>
                             {/* <!-- signin -->*/}
                            <a style={{"backgroundColor":"white"}} id="link" onClick={()=>{navigate("/checkout")}} class="widget-header mr-4 text-dark">
                                <div class="icon d-flex align-items-center">
                                    <i class="feather-shopping-cart h6 mr-2 mb-0"></i> <span>{t("cart")}</span>
                                </div>
                            </a>
                            
                        </div>
                       
                    </div>
                    
                </div>
               
            </div>
           
        </section>
        {/* <!-- header main -->*/}
    </header>
    <div class="osahan-home-page">
        <div class="bg-success p-3 d-none">
            <div class="text-white">
                <div class="title d-flex align-items-center">
                    
                    <h4 class="font-weight-bold m-0 pl-5">Sinurame</h4>
                    <div class="col-1">
                        
                            <img alt="#" class="img-fluid" id="link" onClick={()=>{navigate("/")}} src="https://i.ibb.co/YLhZNL8/IMG-20220124-WA0037.jpg" width="70" height="20"/>
                        
                           
                    </div>
                    <button class="ml-auto mr-2" id="link"value='dl' onClick={handleOnclick}>Nederlands</button>
                    <button class="ml-2" id="link"value='en' onClick={handleOnclick}>En</button>
                   
                </div>
            </div>

        </div>
       
       

    </div>
   
      </div>);
}

export default Header;
