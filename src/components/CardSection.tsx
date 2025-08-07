import Card from './Card';

const CardSection = () => {
  const cards = [
    {
      title: 'Servicio 1',
      description: 'Descripción breve del servicio o producto ofrecido.',
      imageUrl: 'https://via.placeholder.com/300x200',
    },
    {
      title: 'Servicio 2',
      description: 'Otro servicio con beneficios destacados.',
      imageUrl: 'https://via.placeholder.com/300x200',
    },
    {
      title: 'Servicio 3',
      description: 'Ideal para quienes buscan calidad y confianza.',
      imageUrl: 'https://via.placeholder.com/300x200',
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
