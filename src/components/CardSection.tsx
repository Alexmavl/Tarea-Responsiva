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
    <section className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {cards.map((card, index) => (
        <Card
          key={index}
          imageUrl={card.imageUrl}
          title={card.title}
          description={card.description}
        />
      ))}
    </section>
  );
};

export default CardSection;
