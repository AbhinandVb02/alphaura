import React from "react";
import { CardComponent } from "./CardComponent";
import { Banner } from "./Banner";
import { Reason } from "./Reason";
import { Detail } from "./Detail";
import { Ingredients } from "./Ingredients";
import { UserExperience } from "./UserExperience";
import { Satisfaction } from "./Satisfaction";
import { Comparison } from "./Comparison";
import { Questions } from "./Questions";
import { Product } from "./Product";

export const Index = () => {
  return (
    <div>
      <Banner />
      <Detail />
      <CardComponent />
      <Reason />
      <Ingredients />
      <UserExperience />
      <Product />
      <Satisfaction />
      <Comparison />
      <Questions />
    </div>
  );
};
