import React from "react";
import { CardCarousel } from "../../components/CardCarousel";
import ingredient from "../../assets/ingredient.png";

export const Ingredients = () => {
  const exampleCards = [
    {
      title: "Card One",
      description:
        "This is the first card in our carousel with sample content.",
      buttonText: "Learn More",
      imageUrl: ingredient,
    },
    {
      title: "Card Two",
      description: "The second card in our carousel with different content.",
      buttonText: "Details",
      imageUrl: ingredient,
    },
    {
      title: "Card Three",
      description: "Third card with its own unique content and styling.",
      buttonText: "Explore",
      imageUrl: ingredient,
    },
    {
      title: "Card Four",
      description: "Fourth card demonstrating the carousel's functionality.",
      buttonText: "View More",
      imageUrl: ingredient,
    },
  ];
  return (
    <div className="mt-4 bg-[#1C151905]">
      <h1 className="uppercase text-center text-[35px] lg:text-[52px] font-black">
        All natural{" "}
      </h1>
      <h1 className="uppercase text-center text-[35px] lg:text-[52px] font-black">
        Ingredients
      </h1>
      <p className="text-center text-[15px] lg:text-[18px]">
        Potent blends of healing botanicals & all natural
      </p>
      <p className="text-center text-[15px] lg:text-[18px]">
        {" "}
        ingredients to make your hair look amazing.
      </p>

      <div className="p-0 lg:p-4 mb-4">
        <CardCarousel cards={exampleCards} />
      </div>
    </div>
  );
};
