import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import "leaflet-defaulticon-compatibility";
import 'leaflet/dist/leaflet.css'
import { Icon } from "leaflet"
import { MapCard } from './MapCard';

 var karachi = new Icon({
    iconUrl:'/imgs/pucuk.png',
    iconSize:[55,55],
    className:'rounded-full object-cover border-[3px] hover:border-primary transition-all hover:border-[3px]'
  })
  
 var faisalabad = new Icon({
    iconUrl:'/imgs/natissuk.png',
    iconSize:[55,55],
    className:'rounded-full object-cover border-[3px] hover:border-primary transition-all hover:border-[3px]'
  })
  
 var multan = new Icon({
    iconUrl:'/imgs/bolon.png',
    iconSize:[55,55],
    className:'rounded-full object-cover border-[3px] hover:border-primary transition-all hover:border-[3px]'
  })
  
 var lahore = new Icon({
    iconUrl:'/imgs/namartua.png',
    iconSize:[55,55],
    className:'rounded-full object-cover border-[3px] hover:border-primary transition-all hover:border-[3px]'
  })
  
 var islamabad = new Icon({
    iconUrl:'/imgs/kursi.png',
    iconSize:[55,55],
    className:'rounded-full object-cover border-[3px] hover:border-primary transition-all hover:border-[3px]'
  })
  
 var peshawar = new Icon({
    iconUrl:'/imgs/putih.png',
    iconSize:[55,55],
    className:'rounded-full object-cover border-[3px] hover:border-primary transition-all hover:border-[3px]'
  })
  
 var quetta = new Icon({
    iconUrl:'/imgs/hunsa.png',
    iconSize:[55,55],
    className:'rounded-full object-cover border-[3px] hover:border-primary transition-all hover:border-[3px]'
  })
  
 var gwadar = new Icon({
    iconUrl:'/imgs/benteng.png',
    iconSize:[55,55],
    className:'rounded-full object-cover border-[3px] hover:border-primary transition-all hover:border-[3px]'
  })
  
 var tenun = new Icon({
    iconUrl:'/imgs/tenun.png',
    iconSize:[55,55],
    className:'rounded-full object-cover border-[3px] hover:border-primary transition-all hover:border-[3px]'
  })

  var onanbunga = new Icon({
    iconUrl:'/imgs/onanbunga.png',
    iconSize:[55,55],
    className:'rounded-full object-cover border-[3px] hover:border-primary transition-all hover:border-[3px]'
  })

  var sampuran = new Icon({
    iconUrl:'/imgs/sampuran.png',
    iconSize:[55,55],
    className:'rounded-full object-cover border-[3px] hover:border-primary transition-all hover:border-[3px]'
  })

const Map = () => {
  return (
      <div className='w-full flex justify-center my-20'>
    <MapContainer center={[2.365416, 98.899532]} zoom={15} scrollWheelZoom={false} className='h-[90vh] w-[90vw] rounded-2xl shadow-2xl'>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      <Marker icon={karachi} key={1} position={[2.359123, 98.896715]}>
        <Popup closeButton={false} closeOnEscapeKey={true} >
          <MapCard subTitle='Sibandang' img='/imgs/pucuk.png' title='Pucuk Bukit Pulau Sibandang' desc='Pucuk Bukit Pulau Sibandang adalah puncak tertinggi di Pulau Sibandang, yang terletak di Danau Toba, Sumatera Utara, Indonesia. Puncak ini menawarkan pemandangan indah dan panorama alam yang memukau, termasuk pemandangan Danau Toba yang luas dan hijauannya yang memikat.' />
        </Popup>
      </Marker>
      <Marker  icon={faisalabad} key={2} position={[2.362742, 98.898284]}>
        <Popup closeButton={false}>
        <MapCard subTitle='Sibandang' img='/imgs/natissuk.png' title='Puncak Natissuk' desc='Puncak Natinsuk Sibandang adalah salah satu puncak indah di Pulau Sibandang, yang terletak di Danau Toba, Sumatera Utara, Indonesia. Dengan ketinggian sekitar 1.100 meter di atas permukaan laut, puncak ini menawarkan pemandangan yang memukau dari atas ketinggian, termasuk panorama alam yang hijau dan pesona Danau Toba yang memukau.' />
        </Popup>
      </Marker>
      <Marker  icon={multan} key={3} position={[2.355750, 98.909454]}>
        <Popup closeButton={false}>
        <MapCard subTitle='Sibandang' img='/imgs/bolon.png' title='Rumah Bolon' desc='Rumah Bolon adalah struktur tradisional Batak Toba yang menjadi tempat tinggal bagi raja atau kepala suku di Pulau Sibandang' />
        </Popup>
      </Marker>
      <Marker  icon={islamabad} key={4} position={[2.355232, 98.910123]}>
        <Popup closeButton={false}>
        <MapCard subTitle='Sibandang' img='/imgs/kursi.png' title='Batu Kursi' desc='Batu kursi yang berjumlah tujuh merupakan tempat rapat penting di Pulau Sibandang. Tempat ini memiliki makna simbolis dalam konteks pertemuan dan pengambilan keputusan di tingkat kerajaan. ' />
        </Popup>
      </Marker>
      <Marker  icon={peshawar} key={5} position={[2.354443, 98.909950]}>
        <Popup closeButton={false}>
        <MapCard subTitle='Sibandang' img='/imgs/putih.png' title='Homestay Rumah Putih' desc='Homestay Rumah Putih Pulau Sibandang adalah sebuah penginapan yang terletak di Pulau Sibandang. Dengan nuansa yang ramah dan pemandangan alam yang memukau, Homestay Rumah Putih menawarkan pengalaman menginap yang menyenangkan bagi wisatawan yang ingin menjelajahi keindahan Pulau Sibandang' />
        </Popup>
      </Marker>
      <Marker  icon={quetta} key={6} position={[2.355050, 98.909207]}>
        <Popup closeButton={false}>
        <MapCard subTitle='Sibandang' img='/imgs/hunsa.png' title='Makam Opung Raja Hunsa' desc='Makam Opung Raja Hunsa adalah situs bersejarah yang terletak di Pulau Sibandang, Danau Toba, Sumatera Utara, Indonesia. Makam ini merupakan tempat pemakaman bagi Raja Hunsa, salah satu tokoh penting' />
        </Popup>
      </Marker>
      <Marker  icon={gwadar} key={7} position={[2.360369, 98.905316]}>
        <Popup closeButton={false}>
        <MapCard subTitle='Sibandang' img='/imgs/benteng.png' title='Benteng Kerajaan' desc='Benteng Kerajaan di Pulau Sibandang adalah situs bersejarah yang penting. Dibangun di atas bukit dengan arsitektur kokoh, benteng ini merupakan lambang kekuasaan politik dan militer pada masa lalu. Selain sebagai benteng pertahanan, tempat ini juga menjadi pusat kegiatan sosial dan keagamaan.' />
        </Popup>
      </Marker>
      <Marker  icon={lahore} key={8} position={[2.362254, 98.900830]}>
        <Popup closeButton={false}>
        <MapCard subTitle='Sibandang' img='/imgs/namartua.png' title='Namartua Situnggung' desc='Namartua Situnggung adalah sebuah tempat ritual yang terletak di Pulau Sibandang, Danau Toba, Sumatera Utara, Indonesia. Tempat ini memiliki makna spiritual dan keagamaan yang penting bagi masyarakat lokal.' />
        </Popup>
      </Marker>
      <Marker  icon={tenun} key={9} position={[2.361311, 98.884588]}>
        <Popup closeButton={false}>
        <MapCard subTitle='Papande' img='/imgs/tenun.png' title='Kampung Tenun Papande' desc='Kampung Tenun Papande adalah sebuah kampung tradisional yang terletak di Pulau Sibandang, Danau Toba, Sumatera Utara, Indonesia. Kampung ini terkenal karena menjadi pusat produksi kain tenun tradisional Batak Toba yang indah dan berkualitas tinggi. ' />
        </Popup>
      </Marker>
      <Marker  icon={onanbunga} key={10} position={[2.368886, 98.894312]}>
        <Popup closeButton={false}>
        <MapCard subTitle='Papande' img='/imgs/onanbunga.png' title='Pantai Onanbunga' desc='Pantai Onanbunga adalah salah satu pantai yang terletak di Pulau Sibandang, yang merupakan bagian dari Danau Toba, Sumatera Utara, Indonesia. Pantai ini menawarkan pemandangan yang memukau dari danau yang luas dan alam yang hijau di sekitarnya.' />
        </Popup>
      </Marker>
      <Marker  icon={sampuran} key={11} position={[2.382446, 98.897953]}>
        <Popup closeButton={false}>
        <MapCard subTitle='Sampuran' img='/imgs/sampuran.png' title='Homestay Desa Sampuran' desc='Homestay Desa Sampuran adalah akomodasi wisata yang terletak di Desa Sampuran, Pulau Sibandang, Danau Toba, Sumatera Utara, Indonesia. Homestay ini menawarkan pengalaman menginap yang autentik dan dekat dengan kehidupan lokal di Pulau Sibandang.' />
        </Popup>
      </Marker>
    </MapContainer>
        </div>
  )
}
export default Map
