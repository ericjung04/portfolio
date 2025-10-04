import './Hero.css';
import profilePic from '../../assets/eric-jung.png';
function Hero(){
    return(
        <div className='hero'>
            <div className='hero-text'>
                <div className='hello'>
                <h1>Hi, I'm Eric</h1>
                </div>
                <div className='main-text'>
                <p>I am a junior majoring in Computer Science at Virginia Tech, with minors in
                     Mathematics and Real Estate. I'm passionate about solving real world problems through coding and constantly aim to grow as a developer
                    and as a person. 
                </p>
                </div>
            </div>
            <div className='picture'>
            <img src={profilePic} alt="Eric Jung profile Picture" />
            </div>
        </div>
    );
}

export default Hero;