import '../pages/pages.css'
import 'animate.css';
import iconoweb from '../img/iconoweb.png'
import ItemMarca from '../component/ItemMarca/ItemMarca';

export const Home = ({data}) => {
  return (
    <div className="container-fluid product">
      <div className="row col-12">
        <div className="col-12 d-flex justify-content-center animate__flash">
          <img className='animate__flash' src={iconoweb} alt="" />
        </div>
        <hr className='col-11 m-auto' />
        <div className="container col-12 flex-wrap">
          <ItemMarca/>
        </div>
      </div>
    </div>
  )
}

export default Home;