interface CareerCardProps {
  title: string;
  description: string;
  buttonText?: string;
}

export default function CareerCard({
  title,
  description,
  buttonText = "Learn More",
}: CareerCardProps) {
  return (
    <div className="bg-white rounded-xl shadow p-4 flex flex-col justify-between">
      <div className="h-32 bg-gray-200 rounded mb-4" />
      <div className="space-y-2 text-sm">
        <h3 className="font-medium text-base">{title}</h3>
        <p className="text-gray-600 line-clamp-3">{description}</p>
      </div>
      <button className="mt-4 text-sm bg-purple-500 text-white w-full py-2 rounded">
        {buttonText}
      </button>
    </div>
  );
}
