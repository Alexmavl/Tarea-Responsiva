import Card from './Card';

const CardSection = () => {
  const cards = [
    {
      title: 'Concentrados de Calidad',
      description: 'Para cerdos, aves y animales de granja',
      imageUrl: '/imagenes/desarrollina.png',
    },
    {
      title: 'Maiz',
      description: 'Por menor y mayor.',
      imageUrl: 'imagenes/maiz.jpg',
    },
    {
      title: 'Productos de abarroteria',
      description: 'Ideal para quienes buscan calidad y confianza.',
      imageUrl: '/imagenes/productos.jpg',
    },
  ];

  return (
    <section className="card-section">
      {cards.map((card, index) => (
        <div className="card-wrapper" key={index}>
          <Card
            imageUrl={card.imageUrl}
            title={card.title}
            description={card.description}
          />
        </div>
      ))}
    </section>
  );
};

export default CardSection;
