import img1_f from '../../img/img1_f.jpeg'
import img2_f from '../../img/img2_f.jpeg'
import img3_f from '../../img/img3_f.jpeg'
import img4_f from '../../img/img4_f.jpeg'
import img5_f from '../../img/img5_f.jpeg'
import img6_h from '../../img/img6_h.jpeg'
import img7_f_n from '../../img/img7_f_n.jpeg'
import img8_f_n from '../../img/img8_f_n.jpeg'
import img9_f from '../../img/img9_f.jpeg'
import img10_f_n from '../../img/img10_f_n.jpeg'
import img11_f_n from '../../img/img11_f_n.jpeg'
import img12_h from '../../img/img12_h.jpeg'
import img13_h from '../../img/img13_h.jpeg'
import img14_f_n from '../../img/img14_f_n.jpeg'
import img15_h from '../../img/img15_h.jpeg'
import img16_h from '../../img/img16_h.jpeg'
import img17_f from '../../img/img17_f.jpeg'
import img18_f_n from '../../img/img18_f_n.jpeg'
import img19_h from '../../img/img19_h.jpeg'
import img20_h from '../../img/img20_h.jpeg'
import img21_f from '../../img/img21_f.jpeg'
import img22_f from '../../img/img22_f.jpeg'
import img23_f from '../../img/img23_f.jpeg'

const Products = [
  {
    id: '1',
    marca: 'BRIGITTE',
    categoria: 'Mujer',
    modelo: 'Art. 2300',
    image: img1_f,
    descripcion:'Descripcion',
    price: 300
  },
  {
    id: '2',
    marca: 'TIENTO',
    categoria: 'Mujer',
    modelo: 'Art. 406',
    image: img2_f,
    descripcion:'Descripcion',
    price: 300
  },
  {
    id: '3',
    marca: 'LARA',
    categoria: 'Mujer',
    modelo: 'Art. 4680 Gris',
    image: img3_f,
    descripcion:'Descripcion',
    price: 300
  },
  {
    id: '4',
    marca: 'LARA',
    categoria: 'Mujer',
    modelo: 'Art. 4680 Blanco',
    image: img4_f,
    descripcion:'Descripcion',
    price: 400
  },
  {
    id: '5',
    marca: 'KAURY',
    categoria: 'Mujer',
    modelo: 'Art. 8167',
    image:img5_f ,
    descripcion:'Descripcion',
    price: 500
  },
  {
    id: '6',
    marca: 'LAMBO',
    categoria: 'Hombre',
    modelo: 'Art. Azúl',
    image:img6_h ,
    descripcion:'Descripcion',
    price: 600
  },
  {
    id: '7',
    marca: 'MAREY',
    categoria: 'Niña',
    modelo: 'Art. 744',
    image: img7_f_n ,
    descripcion:'Descripcion',
    price: 100
  },
  {
    id: '8',
    marca: 'LARA',
    categoria: 'Niña',
    modelo: 'Art. 5700',
    image:img8_f_n,
    descripcion:'Descripcion',
    price: 200
  },
  {
    id: '9',
    marca: 'MARREY',
    categoria: 'Mujer',
    modelo: 'Art. 500',
    image:img9_f,
    descripcion:'Descripcion',
    price: 300
  },
  {
    id: '10',
    marca:'MAMÁ QUIERO',
    categoria: 'Niña',
    modelo: 'Pack Bombacha Nena',
    image: img10_f_n,
    descripcion:'Descripcion', price: 400
  },
  {
    id: '11',
    marca: 'MARREY',
    categoria: 'Niña',
    modelo: 'Art. 3020',
    image: img11_f_n,
    descripcion:'Descripcion', price: 400
  },
  {
    id: '12',
    marca: 'G3',
    categoria: 'Hombre',
    modelo: 'Pijama + Pantuflas (Gris)',
    image: img12_h,
    descripcion:'Descripcion',
    price: 500
  },
  {
    id: '13',
    marca: 'G3',
    categoria: 'Hombre',
    modelo: 'Pijama + Pantuflas (Azul)',
    image: img13_h,
    descripcion:'Descripcion',
    price: 600
  },
  {
    id: '14',
    marca: 'MAMÁ QUIERO',
    categoria: 'Niña',
    modelo: 'Pack Bombacha Nena',
    image: img14_f_n,
    descripcion:'Descripcion',
    price: 100
  },
  {
    id: '15',
    marca: 'Victiria Secret',
    categoria: 'Hombre',
    modelo: 'Producto 2',
    image:img15_h,
    descripcion:'Descripcion',
    price: 200
  },
  {
    id: '16',
    marca: 'ELEMENTO',
    categoria: 'Hombre',
    modelo: 'Art. 730',
    image: img16_h,
    descripcion:'Descripcion',
    price: 300
  },
  {
    id: '17',
    marca: 'BERLÍN',
    categoria: 'Mujer',
    modelo: 'Art. 28',
    image: img17_f,
    descripcion:'Descripcion', price: 400
  },
  {
    id: '18',
    marca: 'Dufour',
    categoria: 'Niña',
    modelo: 'Producto 5',
    image: img18_f_n,
    descripcion:'Descripcion',
    price: 500
  },
  {
    id: '19',
    marca: 'ZORBA',
    categoria: 'Hombre',
    modelo: 'Boxer Varios Colores',
    image: img19_h,
    descripcion:'Descripcion',
    price: 600
  },
  {
    id: '20',
    marca: 'DUFOUR',
    categoria: 'Hombre',
    modelo: 'Boxer Gris',
    image: img20_h,
    descripcion:'Descripcion',
    price: 200
  },
  {
    id: '21',
    marca: 'MELIFERA',
    categoria: 'Mujer',
    modelo: 'Art. 4130',
    image: img21_f,
    descripcion:'Descripcion',
    price: 300
  },
  {
    id: '22',
    marca: 'GEORGETTE',
    categoria: 'Mujer',
    modelo: 'Art. 362',
    image: img22_f,
    descripcion:'Descripcion',
    price: 400
  },
  {
    id: '23',
    marca: 'GEORGETTE',
    categoria: 'Mujer',
    modelo: 'Art. 373',
    image: img23_f,
    descripcion:'Descripcion',
    price: 500
  },
]

export default Products;
