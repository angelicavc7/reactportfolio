import "./style.css"
import travelbuddy from "./images/travelbuddy.png"
import Pass from "./images/Pass.png"
import Planner from "./images/Planner.png"
import WD from "./images/WD.png"
import Flowers from "./images/Flowers.jpg"

function Work() {
    return (
      <div className="Work">
        <header>Projects</header>

     

<section id = "proj1">
    <div className="project1">
        <h2><a href="https://brooks-t.github.io/travel-buddy/">
            <img src= {travelbuddy} class="trav-bud" id ="img" alt="trip"/></a>Travel Buddy</h2>
    
    </div>
</section>
   
    <div className="project">
         <p><a href="https://angelicavc7.github.io/passwordG/">
         <img src= {Pass} class="PASSG" id ="img" alt="pg"/></a></p> 
    </div>

    <div className="project">
            <p><a href="https://angelicavc7.github.io/dayPlanner/">
      <img src={Planner} class="planner" id ="img" alt="plan"/></a> Day Planner</p>
    </div>


    <div className="project">   
         <p><a href ='https://angelicavc7.github.io/weatherDashboard/'>
        <img src={WD} class = "weatherDashboard" id ="img" alt="wd"/></a>Weather Dashboard</p>
    </div>

    <div className ="project">
        <p><a href = "#flowers">
        <img src={Flowers} class="flower" id ="img" alt="flower"/></a>Project 5</p>
    </div>
    </div>


    );
  }
  
  export default Work;
  