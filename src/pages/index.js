import React from "react"

import Layout from "../components/layout"

import option10 from "../images/option10.jpg"
import option7 from "../images/option7.jpg"
import option9 from "../images/option9.jpg"

const IndexPage = () => (
  <Layout>
    <body>
  
      <div class="rows">
        
        <div class="column" id="column1">
            <p id="labels">Outpatient Therapy</p>
            <img id="middlepics" class="middle1" src={option10} alt="img1"  style={{width:"350", height:"233" }} />      
        </div>

        <div class="column" id="column2">
            <p id="labels">Mental Health Skill Building</p>
            <img id="middlepics" class="middle2" src={option9} alt="img2"  style={{width:"350", height:"233"}}/>       
        </div>

        <div class="column" id="column3">
            <p id="labels">Crisis Stabilization</p>
            <img id="middlepics" class="middle3"src={option7} alt="img3" style={{width:"350", height:"233"}}/>
        
        </div>
      </div>

      <div class="welcome">
          <h2>Welcome</h2>
        <p class="midclass">
            Our mission is to provide a variety of mental health support services that assist families and individuals with maximizing stability and functionality. 
            The philosophy of Counsel Connect is to support the individual in reaching their greatest potential with a dignified approach.  We also provide assessment, treatment planning, case management, and other structured activities in a community setting with highly experienced staff.
        </p> 
     </div>

</body>

  </Layout>
)

export default IndexPage
