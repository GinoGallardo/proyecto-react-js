import '../pages/pages.css'
import iconoweb from '../img/iconoweb.png'

export const Home = () => {
  return (
    <div className="container-fluid vh-75 product">
      <div className="container d-flex justify-content-center col-12">
        <div className="row w-50 d-flex justify-content-center align-content-center animate__flash">
          <img className='animate__flash' src={iconoweb} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Home;