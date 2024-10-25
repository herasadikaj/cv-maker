import { useNavigate } from 'react-router-dom';
import './pages.css';
const Homepage = () => {

const navigate=useNavigate();

const handleStart=()=>{
    navigate('/personal')
}
const handleList=()=>{
    navigate('/list');
}
return (

    <div className="homepage">
    <h1> WELCOME</h1>
    <h4>BUILD YOUR CV WITH US</h4>

    <div className="butona-welcome">
     <button className="check" onClick={handleList}>Check CV</button>
      <button className="create" onClick={handleStart}>Create CV</button>
     </div>
    </div>
)

}
export default Homepage;