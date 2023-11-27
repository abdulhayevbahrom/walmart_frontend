import React from "react";
import Header from "../../components/header/Header";
import Banner from "../../components/banner/Banner";
import Cards from "../../components/cards/Cards";
import Holidays from "../../components/holidays/Holidays";
import Category from "../../components/category/Category";
import Clothes from "../../components/clothes/Clothes";
import Brands from "../../components/brands/Brands";
import img from "../../assets//Screen Shot 2023-11-27 at 7.38.13 PM.png";
import { products } from "../../static/products";
function Home() {
  const tools = products.filter((i) => i.category === "Tires");
  const cloth = products.filter((i) => i.category === "fashion");
  return (
    <div>
      <Header />
      <Banner />
      {/* products   Black Friday Deals */}
      <Cards
        title={"Discover Dyson"}
        category={"Hair tools, fans & more."}
        data={tools}
        img={img}
      />
      <Holidays />
      {/* products part 2  More for gifting season */}
      <Cards
        title={"All they want, for less"}
        category={"Toys, tech, home & more."}
        data={cloth}
        video={
          "https://player.vimeo.com/progressive_redirect/playback/882991418/rendition/1080p/file.mp4?loc=external&signature=34c7e802a82e944a2a288f685d7f7bc145d8be8aeba14e6f65272b5505d8b38d"
        }
      />{" "}
      {/* All they want, for less */}
      <Category />
      <Holidays /> {/*  baby */}
      {/* products Top gifts? Game on! */}
      <Cards
        title={"Get what’s going viral"}
        category={"Find your favorite looks & more."}
        data={tools}
        video={
          "https://player.vimeo.com/progressive_redirect/playback/879938646/rendition/1080p/file.mp4?loc=external&signature=0f9b28aa2ec29e3b3f0daa202f958f5c170bda7024195b30bf9e92ee062654d9"
        }
      />{" "}
      {/* Get what’s going viral */}
      <Clothes />
      {/* products More to love */}
      <Brands />
      {/* products  Cold & flu season */}
      {/* footer */}
    </div>
  );
}

export default Home;
