import React, { ReactNode } from 'react';
import './HeroHeader.css'; // Importa los estilos CSS

// Definimos las props del HeroHeader
interface HeroHeaderProps {
  imagen: string; // Ruta de la imagen estática
  titulo: string; // Título del header
  descripcion: string; // Descripción del header
  subtitulo: string; // Subtítulo del header
  precio?: string; // Propiedad opcional para el precio
  children?: ReactNode; // Añade children como una propiedad opcional
}

const HeroHeader: React.FC<HeroHeaderProps> = ({
  imagen,
  titulo,
  descripcion,
  subtitulo,
  precio = "", // Valor por defecto para el precio
  children, // Añade children aquí
}) => {
  return (
    <div className="hero-header">
      {/* Título */}
      <h1 className="hero-title">{titulo}</h1>

      {/* Imagen estática */}
      <img
        src={imagen}
        alt="Header"
        className="hero-image"
      />

      {/* Subtítulo */}
      <h2 className="hero-subtitulo">{subtitulo}</h2>

      {/* Descripción */}
      <p className="hero-description">{descripcion}</p>

      {/* Precio */}
      {precio && <p className="hero-precio">Precio: ${precio} COP</p>}

      {/* Renderiza children aquí */}
      {children}
    </div>
  );
};

export default HeroHeader;
