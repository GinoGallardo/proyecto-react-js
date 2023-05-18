import '../pages/pages.css'
import iconoweb from '../img/iconoweb.png'

export const Home = () => {
  return (
    <div className="container-fluit vh-100 product">
      <div className="container d-flex justify-content-center col-12">
        <div className="row w-50 d-flex justify-content-center align-content-center">
          <img className='' src={iconoweb} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Home;