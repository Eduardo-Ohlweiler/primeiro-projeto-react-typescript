import headsetImage from '../../assets/img/headset.jpg'
import controleXboximage from '../../assets/img/controle-xbox.jpg'
import headphoneimage from '../../assets/img/headphone.jpg'
import iphoneImage from '../../assets/img/iphone-8.jpg'
import notebookImage from '../../assets/img/laptop.jpg'
import monitorImage from '../../assets/img/monitor.jpg'
import suporteImage from '../../assets/img/suport-laptop.jpg'
import tecladoImage from '../../assets/img/teclado.jpg'

export interface listaTipagem {
    id:string
    productImage:string
    description:string
    price:string
}

const Data = [
    {
        id: '01',
        productImage: headsetImage,
        description: 'Headset',
        price: '99.99'
    },
    {
        id: '02',
        productImage: controleXboximage,
        description: 'Controle de Xbox 360',
        price: '189.99'
    },
    {
        id: '03',
        productImage: headphoneimage,
        description: 'Headphone',
        price: '199.99'
    },
    {
        id: '04',
        productImage: iphoneImage,
        description: 'Iphone',
        price: '1999.99'
    },
    {
        id: '05',
        productImage: notebookImage,
        description: 'NoteBook',
        price: '3999.99'
    },
    {
        id: '06',
        productImage: monitorImage,
        description: 'Monitor',
        price: '499.99'
    },
    {
        id: '07',
        productImage: suporteImage,
        description: 'Suporte de nootebook',
        price: '439.99'
    },
    {
        id: '08',
        productImage: tecladoImage,
        description: 'Teclado',
        price: '89.99'
    }
]


export default Data;