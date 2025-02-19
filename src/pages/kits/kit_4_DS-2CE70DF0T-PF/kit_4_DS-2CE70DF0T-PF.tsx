import React, { Suspense, lazy } from 'react';
import useModalCompra from '@/componentes/useModalCompra';

// Lazy load de componentes
const Carrusel = lazy(() => import('@/componentes/Carrusel'));
const BotonCompra = lazy(() => import('@/componentes/BotonCompra'));
const HeroHeader = lazy(() => import('@/componentes/HeroHeader'));
const Header = lazy(() => import('@/componentes/Header'));
const Beneficios = lazy(() => import('@/componentes/Beneficios'));
const Banner = lazy(() => import('@/componentes/Banner'));
const ModalCompra = lazy(() => import('@/componentes/ModalCompra'));
const Formulario = lazy(() => import('@/componentes/Formulario'));

// Importar imágenes
import imagen1 from '@/assets/kits-bala/DS-2CE16D0T-IRPF(2.8mm)(C)1.webp';
import imagen2 from '@/assets/kits-bala/DS-2CE16D0T-IRPF(2.8mm)(C)2.webp';
import imagen3 from '@/assets/kits-bala/DS-2CE16D0T-IRPF(2.8mm)(C)3.webp';
import imagen4 from '@/assets/kits-bala/DS-2CE16D0T-IRPF(2.8mm)(C)4.webp';
import imagen5 from '@/assets/kits-bala/DS-2CE16D0T-IRPF(2.8mm)(C)5.webp';
import imagen6 from '@/assets/kits-bala/DS-2CE16D0T-IRPF(2.8mm)(C)6.webp';
import imagen7 from '@/assets/kits-bala/DS-2CE16D0T-IRPF(2.8mm)(C)7.webp';
import imagen8 from '@/assets/kits-bala/DS-2CE16D0T-IRPF(2.8mm)(C)8.webp';
import imagen9 from '@/assets/kits-bala/DS-2CE16D0T-IRPF(2.8mm)(C)9.webp';
import imagen10 from '@/assets/kits-bala/DS-2CE16D0T-IRPF(2.8mm)(C)10.webp';
import imagen11 from '@/assets/kits-bala/DS-2CE16D0T-IRPF(2.8mm)(C)11.webp';
import imagen12 from '@/assets/kits-bala/DS-2CE16D0T-IRPF(2.8mm)(C)12.webp';
import imagen13 from '@/assets/kits-bala/DS-2CE16D0T-IRPF(2.8mm)(C)13.webp';
import imagen14 from '@/assets/kits-bala/DS-2CE16D0T-IRPF(2.8mm)(C)14.webp';
import imagen15 from '@/assets/kits-bala/DS-2CE16D0T-IRPF(2.8mm)(C)15.webp';
import imagen16 from '@/assets/kits-bala/DS-2CE16D0T-IRPF(2.8mm)(C)16.webp';
import imagen17 from '@/assets/kits-bala/DS-2CE16D0T-IRPF(2.8mm)(C)17.webp';
import imagen18 from '@/assets/kits-bala/DS-2CE16D0T-IRPF(2.8mm)(C)18.webp';
import imagen19 from '@/assets/kits-bala/DS-2CE16D0T-IRPF(2.8mm)(C)19.webp';
import imagen20 from '@/assets/kits-bala/DS-2CE16D0T-IRPF(2.8mm)(C)20.webp';
import imagen21 from '@/assets/kits-bala/DS-2CE16D0T-IRPF(2.8mm)(C)21.webp';
import imagen22 from '@/assets/kits-bala/DS-2CE16D0T-IRPF(2.8mm)(C)22.webp';
import imagen23 from '@/assets/kits-bala/DS-2CE16D0T-IRPF(2.8mm)(C)23.webp';
import imagen24 from '@/assets/kits-bala/DS-2CE16D0T-IRPF(2.8mm)(C)24.webp';
import imagen25 from '@/assets/kits-bala/DS-2CE16D0T-IRPF(2.8mm)(C)25.webp';
import imagen26 from '@/assets/kits-bala/DS-2CE16D0T-IRPF(2.8mm)(C)26.webp';
import imagen27 from '@/assets/kits-bala/DS-2CE16D0T-IRPF(2.8mm)(C)27.webp';
import headerImage from '@/assets/kits-bala/DS-2CE16D0T-IRPF(2.8mm)(C)1.webp';

// Importación de las imágenes
import Image1500 from '@/assets/1.webp';
import Image1501 from '@/assets/28.webp';
import Image1502 from '@/assets/36.webp';
import Image1503 from '@/assets/kits-bala/DS-2CE16D0T-IRPF(2.8mm)(C)1.webp';
import Image1504 from '@/assets/kits-bala/DS-2CE16D0T-IRPF(2.8mm)(C)28.webp';
import Image1505 from '@/assets/kits-bala/DS-2CE16D0T-IRPF(2.8mm)(C)36.webp';
 


const Kit4CamarasBala: React.FC = () => {          
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
    const message = 'Hola, Me Interesa el kit de 4 cámaras bala de 2mpx + 4Mpx Lite de HIKVISION, Puede Brindarme Mas Informacion?';
    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const hacerLlamada = () => {
    const phoneUri = 'tel:+573046615865';
    window.location.href = phoneUri;
  };

  const headerLinks = [
    { to: '/', text: 'Kit 4 Cámaras de seguridad Domo HIKVISION $780,000 COP', image: Image1500 },
    { to: '/kits_8-camaras-seguridad', text: 'Kit 8 Cámaras de seguridad Domo HIKVISION $1,175,000 COP', image: Image1501 },
    { to: '/kit_16-camaras-seguridad', text: 'Kit 16 Cámaras de seguridad Domo HIKVISION $1,990,000 COP', image: Image1502 },
    { to: '/kit_4-camaras-seguridad-bala', text: 'Kit 4 Cámaras de seguridad Bala HIKVISION $860,000 COP', image: Image1503 },
    { to: '/kit_8-camaras-seguridad-bala', text: 'Kit 8 Cámaras de seguridad Bala HIKVISION $1,370,000 COP', image: Image1504 },
    { to: '/kit_16-camaras-seguridad-bala', text: 'Kit 16 Cámaras de seguridad HIKVISION $2,340,000 COP', image: Image1505 },
  ];

  interface ImagenProps {
    src: string;
    alt: string;
  }
  const Imagen: React.FC<ImagenProps> = ({ src, alt }) => {
    return (
      <Suspense fallback={<div>Cargando imagen...</div>}>
        <img src={src} alt={alt} />
      </Suspense>
    );
  };

  const carruseles = [
    {
      title: '1 Video Grabador DVR de 4 Canales, 4 MPX Lite + IA',
      description: 'DVR AcuSense mini de 4 canales y 4 Mpx lite de HIKVISION con detección de movimiento avanzada (humanos y vehículos) y protección perimetral. Incluye compresión H.265 Pro+, soporte para cámaras IP de hasta 6 MP, y grabación en múltiples resoluciones hasta 4mpx Lite.',
      features: ['Detección de movimiento avanzada', 'Protección perimetral', 'Compresión H.265 Pro+', 'Soporte para cámaras IP', 'Grabación 4 Mpx Lite'],
      images: [
        { src: imagen2, alt: 'Video Grabador DVR de 4 Canales HIKVISION' },
        { src: imagen3, alt: 'DVR AcuSense mini de 4 canales HIKVISION' },
        { src: imagen4, alt: 'DVR con detección de movimiento avanzada' },
        { src: imagen5, alt: 'DVR HIKVISION con protección perimetral' },
        { src: imagen6, alt: 'DVR con compresión H.265 Pro+' },
        { src: imagen7, alt: 'DVR con soporte para cámaras IP' },
        { src: imagen8, alt: 'DVR con grabación en múltiples resoluciones' },
        { src: imagen9, alt: 'DVR HIKVISION de 4 canales' }
      ],
      botonTexto: 'Domicilio Gratis!'
    },
    {
      title: '4 Cámaras de 2 Mpx y 20 MTS de Alcance',
      description: '4 Cámaras Domo TURBOHD 1080p de HIKVISION con lente de 2.8 mm y visión nocturna inteligente EXIR de hasta 20 mts.',
      features: ['1080p Full HD', 'Lente de 2.8 mm', 'Visión nocturna inteligente EXIR', 'Alcance de 20 metros', 'Compatibilidad TURBOHD'],
      images: [
        { src: imagen10, alt: 'Cámara Domo TURBOHD 1080p HIKVISION' },
        { src: imagen11, alt: 'Cámara de seguridad HIKVISION' },
        { src: imagen12, alt: 'Cámara con visión nocturna HIKVISION' },
        { src: imagen13, alt: 'Cámara Domo TURBOHD 1080p' },
        { src: imagen14, alt: 'Cámara de seguridad con lente de 2.8 mm' },
        { src: imagen15, alt: 'Cámara con visión nocturna EXIR' },
        { src: imagen16, alt: 'Cámara de seguridad para exteriores' },
        { src: imagen17, alt: 'Cámara Domo HIKVISION' },
        { src: imagen18, alt: 'Cámara de seguridad con visión nocturna' }
      ],
      botonTexto: 'Pague en casa!'
    },
    {
      title: '1 Disco duro ideal para videovigilancia',
      description: 'Disco duro Seagate Skyhawk 1 TB para videovigilancia, grabación 24/7, tecnología AllFrame, velocidad 110 MB/s, interfaz SATA, caché 64 MB, soporta 64 cámaras.',
      features: ['Capacidad de 1 TB', 'Grabación 24/7', 'Tecnología AllFrame', 'Velocidad de 110 MB/s', 'Soporte para 64 cámaras'],
      images: [
        { src: imagen19, alt: 'Disco duro Seagate Skyhawk 1 TB' },
        { src: imagen20, alt: 'Disco duro para videovigilancia' },
        { src: imagen21, alt: 'Disco duro con tecnología AllFrame' },
        { src: imagen22, alt: 'Disco duro Seagate Skyhawk' },
        { src: imagen23, alt: 'Disco duro para grabación 24/7' }
      ],
      botonTexto: 'Obtenga el Kit!'
    },
    {
      title: '4 Fuentes de Energía',
      description: '4 fuentes de alimentación de AC 110-240v, 12 voltios a 1 amperio de alta calidad, conector de alimentación de 2.1mm, con LED indicador de funcionamiento.',
      features: ['Alimentación de 12 voltios', 'Compatibilidad con cámaras de seguridad', 'Conector de 2.1mm', 'Indicador LED de funcionamiento'],
      images: [{ src: imagen24, alt: 'Fuente de alimentación para cámaras de seguridad' }],
      botonTexto: 'Comprar!'
    },
    {
      title: '4 pares de Video Baluns',
      description: '4 Pares de VIDEO BALUM TURBO 4 EN 1 transmisión de señales de video a través de cables UTP, señal clara y estable a larga distancia.',
      features: ['Transmisión de video por UTP', 'Señal estable a larga distancia', 'Compatible con TURBO 4 EN 1'],
      images: [{ src: imagen25, alt: 'Video Balun para transmisión de señales de video' }],
      botonTexto: 'Domicilio Gratis!'
    },
    {
      title: '4 pares de Borneras',
      description: '4 pares de borneras eléctricas para la conexión y distribución de energía de las cámaras.',
      features: ['Distribución de energía', 'Alta compatibilidad con cámaras', 'Conexiones seguras'],
      images: [{ src: imagen26, alt: 'Borneras eléctricas para cámaras de seguridad' }],
      botonTexto: 'Obtener!'
    },
    {
      title: '50 mts de cable UTP',
      description: 'Cable UTP Cat 5e para interior incluido en el kit.',
      features: ['Categoría 5e', 'Alta velocidad de transmisión', 'Uso en interiores'],
      images: [{ src: imagen27, alt: 'Cable UTP Cat 5e para cámaras de seguridad' }],
      botonTexto: 'Pídalo Ahora!'
    }
  ];
  

  function Carruseles() {
    return (
      <div>
        {carruseles.map((carrusel, index) => (
          <div key={index}>
            <h3>{carrusel.title}</h3>
            <p>{carrusel.description}</p>
            <div>
              {carrusel.images.map((image, idx) => (
                <Imagen key={idx} src={image.src} alt={image.alt} />
              ))}
            </div>
            <button>{carrusel.botonTexto}</button>
          </div>
        ))}
      </div>
    );
  }


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
      texto="Garantía de 2 años para disco Seagate Skyhawk de 1 TB"
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
      texto="Los accesorios del kit no tienen garantía."
      backgroundColor="#8B0000"
      textColor="#FFFFFF"
      fontSize="2rem"
      padding="15px 30px"
    />,
    <Banner
      key="banner5"
      texto="Domicilios sin costo!"
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
    />
  ];

  const abrirModal = (index?: number) => {
    if (typeof index === 'number') {
      setCarruselSeleccionado(carruseles[index]);
    }
    abrirModalBase();
  };

  const horariosEntrega = `Horarios de entrega: De lunes a viernes: de 8:00 a.m. a 6:00 p.m. (jornada continua).
  Sábados: de 8:00 a.m. a 1:00 p.m.
  Domingos y festivos no hacemos entregas.

  Aceptamos pagos en efectivo, Nequi o Bancolombia.`;

  const descripcionModal = `Complete el formulario para hacer llegar el pedido a su domicilio.
  Pago contra entrega solo en Bucaramanga y su área metropolitana, por un valor total de $780,000 COP. ¡Domicilio gratis!
  Realizamos una llamada de confirmación para verificar la dirección y disponibilidad de los equipos. ¡Entrega inmediata!`;

  return (
    <div>
      <Suspense fallback={<div>Cargando...</div>}>
        <Header links={headerLinks} extraMessage="Pago Contraentrega + Envío Gratis!" />
      </Suspense>

      <Suspense fallback={<div>Cargando...</div>}>
        <HeroHeader
          imagen={headerImage}
          titulo="Solo para Bucaramanga y el área metropolitana"
          subtitulo="Tecnología avanzada: detección de humanos y vehículos"
          descripcion="Kit de 4 cámaras Full HD 1080p (2mpx) de HIKVISION con grabación a 4 mpx Lite, ideales para todo tipo de negocio, casa u oficina."
          precio="780,000"
        >
          <BotonCompra
            texto="Compra el Kit de Cámaras!"
            onClick={abrirModal}
            color="#28a745"
            tamaño="mediano"
          />
        </HeroHeader>
      </Suspense>

      <Suspense fallback={<div>Cargando...</div>}>
        <Beneficios />
      </Suspense>

      <Suspense fallback={<div>Cargando...</div>}>
        <Banner
          key="banner0"
          texto="Descripción del kit!"
          backgroundColor="#8B0000"
          textColor="#FFFFFF"
          fontSize="2rem"
          padding="15px 30px"
        />
      </Suspense>

     {carruseles.map((carrusel, index) => (
       <React.Fragment key={index}>
         <section style={{ marginBottom: '40px', textAlign: 'center' }}>
           <h2>{carrusel.title}</h2>
           <Suspense fallback={<div>Cargando...</div>}>
             <Carrusel
               images={carrusel.images}
               title={carrusel.title}
               description={carrusel.description}
               features={carrusel.features}
             />
           </Suspense>
           <p>{carrusel.description}</p>
           <Suspense fallback={<div>Cargando...</div>}>
             <BotonCompra
               texto={carrusel.botonTexto}
               onClick={() => abrirModal(index)}
               color="#007bff"
               tamaño="mediano"
             />
           </Suspense>
         </section>
         {index < banners.length && banners[index]}
       </React.Fragment>
     ))}

      {modalAbierto && (
        <Suspense fallback={<div>Cargando...</div>}>
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
            tituloModal="Confirme la Compra del Kit de 4 Cámaras"
            descripcionModal={descripcionModal}
          />
        </Suspense>
      )}

      <Suspense fallback={<div>Cargando...</div>}>
        <HeroHeader
          imagen={headerImage}
          titulo=""
          subtitulo=""
          descripcion=""
          precio="780,000"
        />
      </Suspense>

      <Suspense fallback={<div>Cargando...</div>}>
        <Formulario
          titulo="confirma la Compra del kit de 4 cámaras Domo, 2mpx + grabacion a 4mpx lite"
          descripcion="Por favor, complete el formulario para hacer llegar el pedido a su domicilio. Pago contra entrega solo en Bucaramanga y su área metropolitana, ¡Domicilio gratis! Realizamos llamada de confirmación para verificar la dirección y la disponibilidad de los equipos. ¡Entrega inmediata!"
          precio="$780,000"
        />
      </Suspense>

      {/* Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org/",
          "@type": "Product",
          "name": "Kit de 4 Cámaras de Seguridad HIKVISION",
          "image": [
            imagen1,
            imagen2,
            imagen3,
            imagen4,
            imagen5,
            imagen6,
            imagen7,
            imagen8,
            imagen9,
            imagen10,
            imagen11,
            imagen12,
            imagen13,
            imagen14,
            imagen15,
            imagen16,
            imagen17,
            imagen18,
            imagen19,
            imagen20,
            imagen21,
            imagen22,
            imagen23,
            imagen24,
            imagen25,
            imagen26,
            imagen27
          ],
        "description": "Kit de 4 cámaras Full HD 1080p (2mpx) de HIKVISION con grabación a 4 mpx Lite, ideales para todo tipo de negocio, casa u oficina.",
        "brand": {
          "@type": "Brand",
          "name": "HIKVISION"
        },
        "offers": {
          "@type": "Offer",
          "price": "780000",
          "priceCurrency": "COP",
          "availability": "https://schema.org/InStock",
          "seller": {
            "@type": "Organization",
            "name": "S24 seguridad electronica"
          }
        }
      })}
    </script>
    </div>
  );
};

export default  Kit4CamarasBala;