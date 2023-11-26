import React from "react";
import Header from "../../components/header/Header";
import Banner from "../../components/banner/Banner";
import Cards from "../../components/cards/Cards";
import Holidays from "../../components/holidays/Holidays";
import Holidays2 from "../../components/holidays/holidays2/Holidays2";
import Category from "../../components/category/Category";
import Clothes from "../../components/clothes/Clothes";
import Brands from "../../components/brands/Brands";

function Home() {
  return (
    <div>
      <Header />
      <Banner />
      {/* products   Black Friday Deals */}
      <Cards />
      <Holidays />
      {/* products part 2  More for gifting season */}
      <Cards /> {/* All they want, for less */}
      <Category />
      <Holidays2 /> {/*  baby */}
      {/* products Top gifts? Game on! */}
      <Cards /> {/* Get what’s going viral */}
      <Clothes />
      {/* products More to love */}
      <Brands />
      {/* products  Cold & flu season */}
      {/* footer */}
    </div>
  );
}

export default Home;
