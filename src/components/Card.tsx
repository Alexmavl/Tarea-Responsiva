type CardProps = {
  imageUrl: string;
  title: string;
  description: string;
};

const Card = ({ imageUrl, title, description }: CardProps) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img src={imageUrl} alt={title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-600 mb-4">{description}</p>
        <a href="#" className="text-blue-600 hover:underline font-medium">Leer más</a>
      </div>
    </div>
  );
};

export default Card;
