import './home.css';
import { useState } from 'react';
import { FaFacebook,FaInstagram,FaTwitter} from "react-icons/fa";
export default function Home() {
    let [para,SetPara]=useState('');
    let arr=[
        'card1',
        'card2',
        'card3',
        'card4',
        'card5'
    ];
    return(
        <div className='HomeMain'>
            <div className="cards">
                <div id="card1" onMouseEnter={()=>SetPara(arr[0])} onMouseLeave={()=>SetPara('')}></div>
                <div id="card2" onMouseEnter={()=>SetPara(arr[1])} onMouseLeave={()=>SetPara('')}></div>
                <div id="card3" onMouseEnter={()=>SetPara(arr[2])} onMouseLeave={()=>SetPara('')}></div>
                <div id="card4" onMouseEnter={()=>SetPara(arr[3])} onMouseLeave={()=>SetPara('')}></div>
                <div id="card5" onMouseEnter={()=>SetPara(arr[4])} onMouseLeave={()=>SetPara('')}></div>
            </div>
            <div className='HoverOfCard'>
                <p>{para}</p>
            </div>
            <br/>


            {/* Types of Shine Cards --------------------------------------------------------------------*/}
            <div style={{background:"white"}}>
            <div className='ShineHead'>
                <h3>
                    <b>Shine Cards</b>
                </h3>
            </div>
            <div className='shinecards'>
                <div id='Shinecard1'>
                    <div className='card1'></div>
                    <h4>Student Card</h4>
                </div>
                <div id='Shinecard2'>
                    <div className='card2'></div>
                    <h4>Staff Card</h4>
                </div>
                <div id='Shinecard3'>
                    <div className='card3'></div>
                    <h4>Alumi Card</h4>
                </div>
            </div>


            {/* Info about Us --------------------------------------------------------------------------*/}

            <br/><br/><br/><br/>
            <div className='main'>
                <h3>The Apollo SHINE Foundation is blessed to have the good will of several leading healthcare brands.</h3>
                <br/>
                <p>
                    Most of whom are within the Apollo Hospitals Group itself.
                    These brands have realized the vision of the foundation and 
                    have put their hands up to volunteer privileges to shine students,
                    staff and even close relatives. This ensures that members of the Shine program 
                    can access world class healthcare services at rates that are even more enticing. 
                    The following are our partners and the offers they have given for our members. 
                    As we grow, we look to keep adding more brands that are Shine approved in terms of quality, 
                    service and medical ethics.

                </p>
            </div>


            {/* hashtag info --------------------------------------------------------------------------------*/}

            <div >
                <div className='contact'>
                    <h2>#KeepIndiaHealthy</h2>
                    <div className='innerContact'>
                        <div className='div1'>
                            <h5>Get in touch with us</h5>
                            044 2829 2345, 044 2829 2929<br/>
                            +91 7338812353, +91 9841435353
                        </div>
                        <div className='div2'>
                            <h5>Stay Connected with us</h5>
                            <FaFacebook className='icon' href='https://www.facebook.com/ApolloShineFoundation/' />
                            <FaInstagram className='icon' href='https://www.instagram.com/apollo.shinefoundation/'/>
                            <FaTwitter className='icon' href='https://twitter.com/shineforhealth?lang=en' />
                        </div>
                    </div>
                </div>
            </div>


            {/* footer --------------------------------------------------------------------------- */}

            <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <p  style={{paddingLeft:'10px'}} class="col-md-4 mb-0 text-muted">© 2023 Apollo Shine Foundation. All Rights Reserved</p>

                <a href="/" class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                <svg class="bi me-2" width="40" height="32"><use></use></svg>
                </a>

                <ul class="nav col-md-4 justify-content-end" style={{background:'white',boxShadow:'0px 0px 0px 0px white'}}>
                <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Home</a></li>
                <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Features</a></li>
                <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Pricing</a></li>
                <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">FAQs</a></li>
                <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">About</a></li>
                </ul>
            </footer>

            {/* <footer>
                <div className='footer'>
                    <div className='box1'>
                        <p>© 2023 Apollo Shine Foundation. All Rights Reserved</p>
                    </div>
                    <div className='box2'>
                        <p></p>
                    </div>
                    <div className='box3'>
                        <a href='https://www.facebook.com/ApolloShineFoundation/ ' target='blank'>
                        <span>
                            facebook
                        </span>
                        </a>
                        <a href='https://twitter.com/shineforhealth?lang=en'  target='blank'>
                        <span>
                            twitter
                        </span>
                        </a>
                        <a href='https://www.instagram.com/apollo.shinefoundation/' target='blank'>
                        <span>
                            Instagram
                        </span>
                        </a>
                    </div>
                </div>
            </footer> */}

            </div>
        </div>
    );
}