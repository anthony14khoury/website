import './home.css';

function Home() {
  return (		
    <div className='home-container'>

        <div className='home-title'> <p>Hi, my name is Anthony Khoury</p> </div>
        <div className='home-details'>
            <p>I'm a Senior Computer Engineering student at the University of Florida</p>
            <p>I'm currently working as a Cloud Engineering Intern at VMware</p>
        </div>

        <div className='home-contact'>
            <p>Let's get connected</p>
            <div className='home-links'>
                <p>Email</p>
                <p>LinkedIN</p>
                <p>Github</p>
                <p>IG</p>
            </div>
        </div>
    </div>
  );
}
export default Home;
