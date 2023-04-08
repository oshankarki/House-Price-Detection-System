import { Link,useNavigate } from 'react-router-dom';
import UserContext from 'store/context/UserContext';
import { useContext } from 'react';
import "./index.css";

function Index() {
    const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const handleButton = () => {
    // localStorage.removeItem("token");
    if (user==null){
    navigate("/login");
    }else{
    navigate("/predict");
    }
  };
    return (
        <div>
            <main className="mainPage">
                <div className="paragraph">
                    <div className="WhyUs">Why Us?</div>
                    <p className="para-content">You can get a quick and reliable estimate <br />of your home's worth in just a few clicks. Choose HomeWise for the wisdom and confidence you need when it comes to your home's value.</p>
                    <br />
                    <button className="btn-predict" onClick={handleButton}>
                    <span style={{color: "aliceblue"}}>    
                        Home Worth
                        </span>
                    </button>
                </div>
            </main>
        </div>
    );
}

export default Index;

