// components/HowItWorksItem.tsx
import { Link } from "@remix-run/react";
import type { ReactNode } from "react";

type CardProps = {
  title: string;
  description: string;
  icon?: ReactNode;
  bgClassName?: string;
  className?: string;
  buttonText?: string;
  styleText?: string;
  buttonLink?: string;
};

export default function Card({
  title,
  description,
  icon,
  bgClassName = "text-indigo-500",
  className = "items-center",
  buttonText,
  styleText = "text-center",
  buttonLink = "#",
}: CardProps) {
  return (
    <div className={`flex flex-col  md:space-y-4 md:max-w-xs  ${className}`}>
      <div className={`w-10 h-10 ${bgClassName}`}>{icon}</div>
      <h3 className={`text-primary text-lg font-bold ${styleText}`}>{title}</h3>
      <p className={`text-gray-600  ${styleText}`}>{description}</p>

      {buttonText && (
        <Link
          to={buttonLink}
          className="mt-4 text-sm bg-purple-500 text-white w-full py-2 rounded text-center"
        >
          {buttonText}
        </Link>
      )}
    </div>
  );
}
