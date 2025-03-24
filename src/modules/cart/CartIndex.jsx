import React from "react";
import { Product } from "../home/Product";
import { Detail } from "../home/Detail";
import { CardComponent } from "../home/CardComponent";
import { Reason } from "../home/Reason";
import { Ingredients } from "../home/Ingredients";
import { UserExperience } from "../home/UserExperience";
import { Satisfaction } from "../home/Satisfaction";
import { Comparison } from "../home/Comparison";
import { Questions } from "../home/Questions";

export const CartIndex = () => {
  return (
    <div>
      <Product />
      <Detail />
      <CardComponent />
      <Reason />
      <Ingredients />
      <UserExperience />
      <Satisfaction />
      <Comparison />
      <Questions />
    </div>
  );
};
