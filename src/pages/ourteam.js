import  React  from  "react"
import  Layout  from  "../components/layout"
import girl3 from "../images/girl3.jpg"
import girl2 from "../images/girl2.jpg"
import man1 from "../images/man1.jpg"

const  Ourteam  =  ()  =>  (
    <Layout>
     
     <div class="rows">
        
        <div class="column" id="column1">
            <img id="middlepics" class="middle1" src={girl3} alt="img1"  style={{width:"350", height:"233"}} />      
            <p id="labels3">Jane Moore</p>
            <p id="degree">M.A. Counseling Psychology</p>
            <p id="bio">Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua .</p>
        </div>
        <div class="column" id="column3">
            <img id="middlepics" class="middle3"src={man1} alt="img3" style={{width:"350", height:"233"}}/>
            <p id="labels3">James Hunt</p>
            <p id="degree">M.A. Counseling Psychology</p>
            <p id="bio">Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua .</p>
        </div>
        <div class="column" id="column2">
            <img id="middlepics" class="middle2" src={girl2} alt="img2"  style={{width:"350", height:"233"}}/>       
            <p id="labels3">Lidia Clarke</p>
            <p id="degree">M.A. Counseling Psychology</p>
            <p id="bio">Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua .</p>
        </div>

  
      </div>
    </Layout>
    )

export default Ourteam