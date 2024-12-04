import Card from "../components/ServiceCard";
import brush  from '../assets/brush.png'
import web from '../assets/web.png'
import mobile  from '../assets/mobile.png'
import '../Styles/card.css'
function Services(){
    return (
        
        <section>
        <div>
         <h2>Services</h2>
         <hr></hr>        </div>
        <div className="my--services">
        <Card icon={brush} title="Ui/Ux"  text="lorem"/>
        <Card icon={web} title="Web Development"  text="lorem"/>
        <Card icon={mobile} title="Web Development"  text="lorem"/>
      
        </div>
        </section>
        
    )
}export default Services;