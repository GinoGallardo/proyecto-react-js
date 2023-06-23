import '../pages/pages.css'
import 'animate.css';
import iconoweb from '../img/iconoweb.png'

export const Home = () => {
  return (
    <div className="container-fluid vh-100 product">
      <div className="container d-flex col-12">
        <div className="row d-flex justify-content-center align-items-center animate__flash">
          <img className='animate__flash' src={iconoweb} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Home;