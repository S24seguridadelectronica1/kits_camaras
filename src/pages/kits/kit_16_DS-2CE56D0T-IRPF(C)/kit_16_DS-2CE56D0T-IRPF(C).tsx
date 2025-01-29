import React from 'react';
import useModalCompra from '@/componentes/useModalCompra';
import Carrusel from '@/componentes/Carrusel';
import BotonCompra from '@/componentes/BotonCompra';
import HeroHeader from '@/componentes/HeroHeader';
import Header from '@/componentes/Header';
import Beneficios from '@/componentes/Beneficios';
import Banner from '@/componentes/Banner';
import ModalCompra from '@/componentes/ModalCompra';
import Formulario from '@/componentes/Formulario';


// Importar imágenes
import imagen36 from '@/assets/36.webp';
import imagen26 from '@/assets/26.webp';
import imagen37 from '@/assets/37.webp';
import imagen38 from '@/assets/38.webp';
import imagen39 from '@/assets/39.webp';
import imagen46 from '@/assets/46.webp';
import imagen41 from '@/assets/41.webp';
import imagen11 from '@/assets/11.webp';
import imagen12 from '@/assets/12.webp';
import imagen13 from '@/assets/13.webp';
import imagen14 from '@/assets/14.webp';
import imagen15 from '@/assets/15.webp';
import imagen16 from '@/assets/16.webp';
import imagen17 from '@/assets/17.webp';
import imagen18 from '@/assets/18.webp';
import imagen42 from '@/assets/42.webp';
import imagen43 from '@/assets/43.webp';
import imagen44 from '@/assets/44.webp';
import imagen19 from '@/assets/19.webp';
import imagen20 from '@/assets/20.webp';
import imagen21 from '@/assets/21.webp';
import imagen22 from '@/assets/22.webp';
import imagen23 from '@/assets/23.webp';
import headerImage from '@/assets/36.webp'; // Ensure the correct path


const Kits16Camaras: React.FC = () => {
  const {
    modalAbierto,
    abrirModal: abrirModalBase,
    cerrarModal,
    confirmarCompra,
    nombre,
    setNombre,
    telefono,
    setTelefono,
    direccion,
    setDireccion,
    ciudadYBarrio,
    setCiudadYBarrio,
  } = useModalCompra();

  const [carruselSeleccionado, setCarruselSeleccionado] = React.useState<any>(null);

  const abrirWhatsApp = () => {
    const phone = '3046615865';
    const message = 'Hola, estoy interesado en el kit de 8 cámaras.';
    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const hacerLlamada = () => {
    const phoneUri = 'tel:+573046615865';
    window.location.href = phoneUri;
  };


  const headerLinks = [
    { to: '/', text: 'Kit De 8 Camaras' },
    { to: '/kit_4', text: 'Kit De 4 Camaras' },
    { to: '/kit_16', text: 'Kit De 16 Camaras' },
  ];

  const carruseles = [
    {
      title: '1 Video Grabador DVR de 16 Canales, 4 MPX Lite + IA',
      description: 'DVR AcuSense mini de 16 canales Y 4 Mpx lite de HIKVISION con detección de movimiento avanzada (humanos y vehículos) y protección perimetral. Incluye compresión H.265 Pro+, soporte para cámaras IP de hasta 6 MP, y grabación en múltiples resoluciones hasta 4mpx Lite.',
      images: [imagen37, imagen38, imagen39, imagen46],
      botonTexto: 'Domicilio Gratis!'
    },
    {
      title: '16 Camaras de 2 Mpx y 20 MTS de Alcance',
      description: 'Cámaras Domo TURBOHD 1080p de HIKVISION con lente de 2.8 mm y visión nocturna inteligente EXIR de hasta 20 mts.',
      images: [imagen41, imagen11, imagen12, imagen13, imagen14, imagen15, imagen16, imagen17, imagen18],
      botonTexto: 'Page en casa!'
    },
    {
      title: '1 Disco duro Ideal para videovigilancia',
      description: 'Disco duro seagate skyhawk 1 TB para videovigilancia, grabación 24/7, tecnología AllFrame, velocidad 110 MB/s, interfaz SATA, caché 64 MB, soporta 64 cámaras.',
      images: [imagen19, imagen20, imagen21, imagen22, imagen23],
      botonTexto: 'Obten el Kit!'
    },
    {
      title: '16 Fuentes De Energia',
      description: '16 fuentes de alimentación de AC 110- 240v, 12 voltios a 1 amperio de alta calidad, conector de alimentación de 2.1mm, con led indicador de funcionamiento, el articulo puede ser ligeramente distinto al de la foto.',
      images: [imagen42],
      botonTexto: 'Comprar!'
    },
    {
      title: '16 pares de Video Baluns',
      description: '16 Pares de VIDEO BALUM TURBO 4 EN 1 transmisión de señales de video a través de cables UTP, señal clara y estable a larga distancia.',
      images: [imagen43],
      botonTexto: 'Domicilio Gratis!'
    },
    {
      title: '16 pares de Borneras',
      description: '16 pares de borneras electricas para la conexión y distribución de energia de las camaras.',
      images: [imagen44],
      botonTexto: 'Obtener!'
    },
    {
      title: '200 mts de cable utp',
      description: 'cable utp cat 5e en aleacion para interior inluidos en el kit.',
      images: [imagen26],
      botonTexto: 'Pidelo Ahora!'
    },
  ];

  const banners = [
    <Banner
      key="banner1"
      texto="Garantía de 1 año para cámaras de seguridad y videograbador DVR"
      backgroundColor="#8B0000"
      textColor="#FFFFFF"
      fontSize="2rem"
      padding="15px 30px"
    />,
    <Banner
      key="banner2"
      texto="Garantia de 2 años para disco seagate skyhawk de 1 TB"
      backgroundColor="#8B0000"
      textColor="#FFFFFF"
      fontSize="2rem"
      padding="15px 30px"
    />,
    <Banner
      key="banner3"
      texto="Accesorios del kit de cámaras"
      backgroundColor="#8B0000"
      textColor="#FFFFFF"
      fontSize="2rem"
      padding="15px 30px"
    />,
    <Banner
      key="banner4"
      texto="accesorios del kit no tienen garantia."
      backgroundColor="#8B0000"
      textColor="#FFFFFF"
      fontSize="2rem"
      padding="15px 30px"
    />,
    <Banner
      key="banner5"
      texto="domicilios sin costo!"
      backgroundColor="#8B0000"
      textColor="#FFFFFF"
      fontSize="2rem"
      padding="15px 30px"
    />,
    <Banner
      key="banner6"
      texto="Entrega inmediata para Bucaramanga y su área metropolitana."
      backgroundColor="#8B0000"
      textColor="#FFFFFF"
      fontSize="2rem"
      padding="15px 30px"
    />,
    <Banner
      key="banner7"
      texto="¡Entrega Inmediata!"
      backgroundColor="#8B0000"
      textColor="#FFFFFF"
      fontSize="2rem"
      padding="15px 30px"
    />,
  ];

  const abrirModal = (index?: number) => {
    if (typeof index === 'number') {
      setCarruselSeleccionado(carruseles[index]);
    }
    abrirModalBase();
  };

  const horariosEntrega = `Horarios de entrega:  De lunes a viernes: de 8:00 a.m. a 6:00 p.m. (jornada continua).
  Sábados: de 8:00 a.m. a 1:00 p.m.
  Domingos y festivos no hacemos entregas.

  Aceptamos pagos en efectivo, Nequi o Bancolombia.`;

  const descripcionModal = `
    complete el formulario para hacer llegar el pedido a su domicilio.
    Pago contra entrega solo en Bucaramanga y su área metropolitana, por un valor total de $1,990.000 COP. ¡Domicilio gratis!
    Realizamos una llamada confirmación para verificar la dirección y disponibilidad de los equipos. ¡Entrega inmediata!
  `;

  return (
    <div>
      <Header links={headerLinks} extraMessage="Pago Contraentrega + Envio Gratis!" />
      <HeroHeader
        imagen={headerImage}
        titulo="Solo para Bucaramanga y el área metropolitana"
        subtitulo="Tecnología avanzada: detección de humanos y vehículos"
        descripcion="Kit de 16 cámaras Full HD 1080p (2mpx) de HIKVISION con grabación a 4 mpx Lite, ideales para todo tipo de negocio, casa u oficina."
        precio="1,990.000"
      >
        <BotonCompra
          texto="Compra el Kit de Cámaras!"
          onClick={abrirModal}
          color="#28a745"
          tamaño="mediano"
        />
      </HeroHeader>

      <Beneficios />

      <Banner
        key="banner0"
        texto="Descripcion del kit!"
        backgroundColor="#8B0000"
        textColor="#FFFFFF"
        fontSize="2rem"
        padding="15px 30px"
      />

      {/* Renderizar carruseles y banners intercalados */}
      {carruseles.map((carrusel, index) => (
        <React.Fragment key={index}>
          <div style={{ marginBottom: '40px', textAlign: 'center' }}>
            <h2>{carrusel.title}</h2>
            <Carrusel images={carrusel.images} />
            <p>{carrusel.description}</p>
            <BotonCompra
              texto={carrusel.botonTexto}
              onClick={abrirModal}
              color="#007bff"
              tamaño="mediano"
            />
          </div>
          {index < banners.length && banners[index]}
        </React.Fragment>
      ))}

      {modalAbierto && (
        <ModalCompra
          onClose={cerrarModal}
          onConfirm={confirmarCompra} 
          nombre={nombre}
          setNombre={setNombre}
          telefono={telefono}
          setTelefono={setTelefono}
          direccion={direccion}
          setDireccion={setDireccion}
          ciudadYBarrio={ciudadYBarrio}
          setCiudadYBarrio={setCiudadYBarrio}
          abrirWhatsApp={abrirWhatsApp}
          hacerLlamada={hacerLlamada}
          horariosEntrega={horariosEntrega}
          tituloModal="Confirme la Compra del kit de 8 cámaras"
          descripcionModal={descripcionModal}
        />
      )}

<HeroHeader
        imagen={headerImage}
        titulo=""
        subtitulo=""
        descripcion=""
        precio="1,990.000"
      >
    </HeroHeader>
      
    <Formulario
      titulo="Confirme la Compra del kit de 16 cámaras"
      descripcion="Complete el formulario para hacer llegar el pedido a su domicilio. Pago contra entrega solo en Bucaramanga y su área metropolitana, por un valor total de $1,990.000. ¡Domicilio gratis! Realizamos una llamada de confirmación para verificar la dirección y la disponibilidad de los equipos. ¡Entrega inmediata!"
      precio="$1,990.000"
    />

    </div>
  );
};

export default Kits16Camaras;
