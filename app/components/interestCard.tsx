type Props = {
  title: string;
  description: string;
  isSelected?: boolean;
  onClick?: () => void;
};

export default function InterestCard({
  title,
  description,
  isSelected = false,
  onClick,
}: Props) {
  return (
    <div
      onClick={onClick}
      className={`p-6  border-2 rounded-lg cursor-pointer transition-all ${
        isSelected ? "border-secondary" : "border-gray-300"
      }`}
    >
      <h3 className="text-primary text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
