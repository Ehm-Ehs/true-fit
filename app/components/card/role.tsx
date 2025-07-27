import { Link } from "@remix-run/react";

interface RoleCardProps {
  title: string;
  description: string;
  icon: JSX.Element;
  href?: string;
  why?: string;
}

const RoleCard: React.FC<RoleCardProps> = ({
  href,
  title,
  description,
  icon,
  why,
}) => {
  const colors = [
    "bg-secondaryCta",
    "bg-cta",
    "bg-secondary",
    "bg-[#C1440E]",
    "bg-[#4D0279]",
    "bg-[#05CDC2]",
    "bg-[#E22897]",
    "bg-[#DDC6A7]",
    "bg-[#3E4E88]",
    "bg-[#9C27B0]",
    "bg-[#00897B]",
    "bg-[#E65100]",
    "bg-[#5E548E]",
    "bg-[#607D8B]",
    "bg-[#C2185B]",
    "bg-[#6D6875]",
    "bg-[#A16207]",
    "bg-[#3C3A36]",
  ];

  let lastColor: string | null = null;
  const randomColor = () => {
    let available = colors.filter((c) => c !== lastColor);
    let next = available[Math.floor(Math.random() * available.length)];
    lastColor = next;
    return next;
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 w-full max-w-sm border border-gray-100">
      <div className="flex items-center mb-4">
        <div className={`rounded-full p-3 ${randomColor()}`}>{icon}</div>
      </div>
      <h3 className="text-xl font-semibold text-primary mb-1">{title}</h3>
      <p className="text-primaryLite  mb-2">{description}</p>
      <p className="text-lg font-medium text-primary mb-1">Why this fits you</p>
      {why && <p className=" text-primary font-medium">{why}</p>}
      {href && (
        <div className="my-4">
          <Link
            to={`/${href}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#f97316] text-white px-6 py-3 rounded"
          >
            See How to Start →
          </Link>
        </div>
      )}
    </div>
  );
};

export default RoleCard;
