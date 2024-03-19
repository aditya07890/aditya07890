import React from "react";
import img from "../image/setting.png";
import imgs from "../image/pin.png";
import imga from "../image/amazon.png";
import Imageslider from "../use-effact";
import Footer from "../footer";

const Amazon = () => {
  const categories = [
    {
      id: 1,
      name: "Trending Top 10 on miniTV",
      products: [
        {
          id: 101,
          image:
            "https://m.media-amazon.com/images/S/pv-target-images/8e028501f85e943dd732536f8ebc40e262aa665ce1906790618ec24d1b447c4f.__SX330__SY186__QL60__._TTH_.jpg",
        },
        {
          id: 102,
          image:
            "https://m.media-amazon.com/images/S/pv-target-images/867e034ae26de6f30ddf1453c28302d9abd7bc679c49dee1d5c4fb5375a3aefd.__SX330__SY186__QL60__._TTH_.jpg",
        },
        {
          id: 103,
          image:
            "https://m.media-amazon.com/images/S/pv-target-images/c0981e3b601f9e49d8cfe174a4a307ccd61893aec892b8061bb377891a0370f5.__SX330__SY186__QL60__._TTH_.jpg",
        },
        {
          id: 104,
          image:
            "https://m.media-amazon.com/images/S/pv-target-images/0d48af3bfaae5d42b1cfc62e96d6f600401a8116ec0d3f9a1d413fdae98487ec.__SX330__SY186__QL60__._TTH_.jpg",
        },
        {
          id: 105,
          image:
            "https://m.media-amazon.com/images/S/pv-target-images/ccf57f9d6b7719fbb5766607d163c46c37280a1340705deb88c22486b307a212.__SX330__SY186__QL60__._TTH_.jpg",
        },
      ],
    },
    {
      id: 2,
      name: "Popular Web Series",
      products: [
        {
          id: 102,
          image:
            "https://m.media-amazon.com/images/S/pv-target-images/624e5f753d4472bdd41bce7a0fcb2aac21fc8abab80a49cf52eef4f6d588cdf9.__SX330__SY186__QL60__._TTH_.jpg",
        },
        {
          id: 103,
          image:
            "https://m.media-amazon.com/images/S/pv-target-images/ea5cbde969dfbbb92b0ac905326ad08c664f197511f355d26252834bf090a80d.__SX330__SY186__QL60__._TTH_.jpg",
        },
        {
          id: 104,
          image:
            "https://m.media-amazon.com/images/S/pv-target-images/681d894f7571c51d3dd749d0170b914d33b02486f0ee21322939aeaae202d46e.__SX330__SY186__QL60__._TTH_.jpg",
        },
        {
          id: 105,
          image:
            "https://m.media-amazon.com/images/S/pv-target-images/4524df59b8e408fc35106fce1ddbc496fad69e47ac2f5110d4d61508c753c29e.__SX330__SY186__QL60__._TTH_.jpg",
        },
        {
          id: 106,
          image:
            "https://m.media-amazon.com/images/S/pv-target-images/414bec47d7834d8ed1dbcc60dd7fd88665bf26e0627e37b8928a75dd22488ec5.__SX330__SY186__QL60__._TTH_.jpg",
        },
      ],
    },
    {
      id: 3,
      name: "Blockbuster dubbed movies",
      products: [
        {
          id: 103,
          image:
            "https://m.media-amazon.com/images/S/pv-target-images/4dfb291b79682b0d65d44c5f73bb34aec55b72de6d50fc6d266ab380becf502c.__SX330__SY186__QL60__._TTH_.jpg",
        },
        {
          id: 103,
          image:
            "https://m.media-amazon.com/images/S/pv-target-images/68fd7ca7fae1c2b6b37af21883c24655080b61df75ec3f4973ff66879986a99a.__SX330__SY186__QL60__._TTH_.jpg",
        },
        {
          id: 104,
          image:
            "https://m.media-amazon.com/images/S/pv-target-images/cf79ce5f07039b0830b396b65714f44e0dbab4d50551d272646ae540269dc383.__SX330__SY186__QL60__._TTH_.jpg",
        },
        {
          id: 105,
          image:
            "https://m.media-amazon.com/images/S/pv-target-images/ebfbd5eb8677956b24d1f14493cf3b8f7ef1baf7fbf7b2945ae478d148a08f73.__SX330__SY186__QL60__._TTH_.jpg",
        },
        {
          id: 106,
          image:
            "https://m.media-amazon.com/images/S/pv-target-images/f6cc6eb0eaaeb36735921c93396a4749ffe65138dc19bca468147e7e63550808.__SX330__SY186__QL60__._TTH_.jpg",
        },
      ],
    },
    {
      id: 4,
      name: "Romantic shows & mini Movies",
      products: [
        {
          id: 103,
          image:
            "https://m.media-amazon.com/images/S/pv-target-images/c14f8a07b8b70f5cd7b7a272096f452caf2c6607d23a7ae12befe464dd309da1.__SX330__SY186__QL60__._TTH_.jpg",
        },
        {
          id: 103,
          image:
            "https://m.media-amazon.com/images/S/pv-target-images/273ffd178e3f4d807ea7a716984c1be5eca2bcbb6c96ee63e5aa23e5e2b8c87c.__SX330__SY186__QL60__._TTH_.jpg",
        },
        {
          id: 104,
          image:
            "https://m.media-amazon.com/images/S/pv-target-images/a94cd539e818e75e53ff3da1a1220699b9de7d64f81b1fbe9299d22ec6cdd19a.__SX330__SY186__QL60__._TTH_.jpg",
        },
        {
          id: 105,
          image:
            "https://m.media-amazon.com/images/S/pv-target-images/302964d62c2c5a4b3e04135fbc88a26da795ed51d5f5c8643f45435c8b8a9054.__SX330__SY186__QL60__._TTH_.jpg",
        },
        {
          id: 106,
          image:
            "https://m.media-amazon.com/images/S/pv-target-images/681d894f7571c51d3dd749d0170b914d33b02486f0ee21322939aeaae202d46e.__SX330__SY186__QL60__._TTH_.jpg",
        },
      ],
    },
    {
      id: 5,
      name: "Trending in Dubbed Series",
      products: [
        {
          id: 103,
          image:
            "https://m.media-amazon.com/images/S/pv-target-images/4729331de6a014c27f3f4fd7ad3058bd285fc624fb0b6f4ba5798d98cbe4a6cd.__SX330__SY186__QL60__._TTH_.jpg",
        },
        {
          id: 103,
          image:
            "https://m.media-amazon.com/images/S/pv-target-images/878fb818e49205c9f9161a63c6bc921e3d4e6303e79d837483ad6d088f4d906d.__SX330__SY186__QL60__._TTH_.jpg",
        },
        {
          id: 104,
          image:
            "https://m.media-amazon.com/images/S/pv-target-images/1c350e488ee1d8109f3a2ae798b1978decf474f5e732c988cc9ba897a42ae228.__SX330__SY186__QL60__._TTH_.jpg",
        },
        {
          id: 105,
          image:
            "https://m.media-amazon.com/images/S/pv-target-images/3f5e3a73b59dd1a8a33c34f2f593c5ef450a7813f8f9791ab5ad8fccec1fd436.__SX330__SY186__QL60__._TTH_.jpg",
        },
        {
          id: 106,
          image:
            "https://m.media-amazon.com/images/S/pv-target-images/22fd921af90fc36b6a6eab69bdec07eaf6d8ef48a7f97ef5afe6da6058f4cbc8.__SX330__SY186__QL60__._TTH_.jpg",
        },
      ],
    },
    {
      id: 6,
      name: "Horror, Thriller & Mystery",
      products: [
        {
          id: 103,
          image:
            "https://m.media-amazon.com/images/S/pv-target-images/a99afc6d989343cb8e0b9f015e98bb9b63460cbce75b8a628285fae193848df2.__SX330__SY186__QL60__._TTH_.jpg",
        },
        {
          id: 103,
          image:
            "https://m.media-amazon.com/images/S/pv-target-images/d658b9a6703804679abf3034eecf1aed155292a7a60a6adf1484872507e77f6e.__SX330__SY186__QL60__._TTH_.jpg",
        },
        {
          id: 104,
          image:
            "https://m.media-amazon.com/images/S/pv-target-images/db99b568369de672dd1cd52a500600545ba39189b67fb23625f69156e275a1eb.__SX330__SY186__QL60__._TTH_.jpg",
        },
        {
          id: 105,
          image:
            "https://m.media-amazon.com/images/S/pv-target-images/e07a35ee08b327ec7f3fe10f44e88b0e87c12177d34834692dc43a74c76f1373.__SX330__SY186__QL60__._TTH_.jpg",
        },
        {
          id: 106,
          image:
            "https://m.media-amazon.com/images/S/pv-target-images/da45684e5faa29fe1e82d703f3fc17f617f179566c6ae53a5f07c25ab2900702.__SX330__SY186__QL60__._TTH_.jpg",
        },
      ],
    },
    {
      id: 7,
      name: "Dubbed Movies and Shows in Tamil",
      products: [
        {
          id: 103,
          image:
            "https://m.media-amazon.com/images/S/pv-target-images/14c30db244935dbc9f1d7d1bfd39b605ec874087dbc4c188749beb28ef69ea10.__SX330__SY186__QL60__._TTH_.jpg",
        },
        {
          id: 103,
          image:
            "https://m.media-amazon.com/images/S/pv-target-images/069f4dbb0aeffe6a431129aad372a593996bd8c87237f214a01d289a88954bdc.__SX330__SY186__QL60__._TTH_.jpg",
        },
        {
          id: 104,
          image:
            "https://m.media-amazon.com/images/S/pv-target-images/3f6d088c468eab6297e7c041cf97f117a19a4ab917b657024341be2e0f94245a.__SX330__SY186__QL60__._TTH_.jpg",
        },
        {
          id: 105,
          image:
            "https://m.media-amazon.com/images/S/pv-target-images/a80d4c5390ba3c76f087205d84f737dc551e86eb4d5b19b778ac7f6849d1f9f1.__SX330__SY186__QL60__._TTH_.jpg",
        },
        {
          id: 106,
          image:
            "https://m.media-amazon.com/images/S/pv-target-images/ae7acade3cfb068baf9e66d2a64ae7a19e8426afa47410e3b9bedaa88f2806c2.__SX330__SY186__QL60__._TTH_.jpg",
        },
      ],
    },
    {
      id: 8,
      name: "Mini Movie Mania",
      products: [
        {
          id: 103,
          image:
            "https://m.media-amazon.com/images/S/pv-target-images/c0106d6e9dee7dde448c820bbf482d59cb261db4f156fe6077f8d57482e172c4.__SX330__SY186__QL60__._TTH_.jpg",
        },
        {
          id: 103,
          image:
            "https://m.media-amazon.com/images/S/pv-target-images/c0cfcc3287b568c3e1c6ab081c28c9907904862b5b91d2899a1c05567d8248e7.__SX330__SY186__QL60__._TTH_.jpg",
        },
        {
          id: 104,
          image:
            "https://m.media-amazon.com/images/S/pv-target-images/ea2986409d09df3c7d09c9334979437d79f0ca4e0f5afc42d87fa1edbcbcaf8c.__SX330__SY186__QL60__._TTH_.jpg",
        },
        {
          id: 105,
          image:
            "https://m.media-amazon.com/images/S/pv-target-images/974366fb5decd4611c57942e9cd45f005085aa279b7ff5a6989115db4e07ec7b.__SX330__SY186__QL60__._TTH_.jpg",
        },
        {
          id: 106,
          image:
            "https://m.media-amazon.com/images/S/pv-target-images/9931796ac80886a17b27beb020e98839c1c5c0860f1f4abc5d07b2e33f214f0f.__SX330__SY186__QL60__._TTH_.jpg",
        },
      ],
    },
    {
      id: 9,
      name: "Dubbed Movies and Shows in Telugu",
      products: [
        {
          id: 103,
          image:
            "https://m.media-amazon.com/images/S/pv-target-images/c5ca150ed0ea05b6ffa2caaeeeddfca3bed71965bbeaf997ecccd0b8b89f792a.__SX330__SY186__QL60__._TTH_.jpg",
        },
        {
          id: 103,
          image:
            "https://m.media-amazon.com/images/S/pv-target-images/de001c6cf0c2e03453d06677383765e0398625fb1b1543dc66d9a15c77e1e398.__SX330__SY186__QL60__._TTH_.jpg",
        },
        {
          id: 104,
          image:
            "https://m.media-amazon.com/images/S/pv-target-images/8e1eb99b0489d4e4c691a97a4c2f47ac2af59cf24c70e0f6a9cc04334b02e37b.__SX330__SY186__QL60__._TTH_.jpg",
        },
        {
          id: 105,
          image:
            "https://m.media-amazon.com/images/S/pv-target-images/d4dc5658756b31394328eefdba6188ad46113b809668f411b17677e955b3fbf6.__SX330__SY186__QL60__._TTH_.jpg",
        },
        {
          id: 106,
          image:
            "https://m.media-amazon.com/images/S/pv-target-images/3d43b194c66795a663a060addd87f376875083b81413b29736b251cd61923d94.__SX330__SY186__QL60__._TTH_.jpg",
        },
      ],
    },
    {
      id: 10,
      name: "Classic Hits - Shows we all Love!",
      products: [
        {
          id: 103,
          image:
            "https://m.media-amazon.com/images/S/pv-target-images/f8b93c4a4874a7a3a6197866d2b76848c5a5c780d7259a1bdb6b7de42512d7c3.__SX330__SY186__QL60__._TTH_.jpg",
        },
        {
          id: 103,
          image:
            "https://m.media-amazon.com/images/S/pv-target-images/8e8ad9669884c8f9c87e663c670fdbe925fcebccf5fd71adb99d0ee53dc3d842.__SX330__SY186__QL60__._TTH_.jpg",
        },
        {
          id: 104,
          image:
            "https://m.media-amazon.com/images/S/pv-target-images/0b6d7d2306fc52d879ed074353befce1c2be81884712c3166b95e9b65bfa12f8.__SX330__SY186__QL60__._TTH_.jpg",
        },
        {
          id: 105,
          image:
            "https://m.media-amazon.com/images/S/pv-target-images/11fc751a37615cc507e749d967eb3f824db595fb1ef1301b340694dfdaab64e5.__SX330__SY186__QL60__._TTH_.jpg",
        },
        {
          id: 106,
          image:
            "https://m.media-amazon.com/images/S/pv-target-images/302964d62c2c5a4b3e04135fbc88a26da795ed51d5f5c8643f45435c8b8a9054.__SX330__SY186__QL60__._TTH_.jpg",
        },
      ],
    },
    {
      id: 11,
      name: "Most Loved Videos",
      products: [
        {
          id: 103,
          image:
            "https://m.media-amazon.com/images/S/pv-target-images/2ced239b906102ccc6857d9c212e4dd74191b01c3686433ed062ea052e60d7b6.__SX330__SY186__QL60__._TTH_.jpg",
        },
        {
          id: 103,
          image:
            "https://m.media-amazon.com/images/S/pv-target-images/974366fb5decd4611c57942e9cd45f005085aa279b7ff5a6989115db4e07ec7b.__SX330__SY186__QL60__._TTH_.jpg",
        },
        {
          id: 104,
          image:
            "https://m.media-amazon.com/images/S/pv-target-images/174c1b78f7c3e6f60301ad46ea08a10454dd97a2b3a8221be436d6069c88a67a.__SX330__SY186__QL60__._TTH_.jpg",
        },
        {
          id: 105,
          image:
            "https://m.media-amazon.com/images/S/pv-target-images/96177a143132735cf046d07d278020f01b8adfeab4bba23cff1d299a17cec08e.__SX330__SY186__QL60__._TTH_.jpg",
        },
        {
          id: 106,
          image:
            "https://m.media-amazon.com/images/S/pv-target-images/c21d8865557e94879c2b7e912a4efddd3a1fff2aabb8df7b00222d045bc57a5f.__SX330__SY186__QL60__._TTH_.jpg",
        },
      ],
    },
    {
      id: 12,
      name: "Top Picks for You",
      products: [
        {
          id: 103,
          image:
            "https://m.media-amazon.com/images/S/pv-target-images/30b17bd79f677642fc454ec875157bed9d21e6bf12bcf8dedc81e75f4c58a3a8.__SX330__SY186__QL60__._TTH_.jpg",
        },
        {
          id: 103,
          image:
            "https://m.media-amazon.com/images/S/pv-target-images/cbc33afa995e97760c6705ba2be997b5757035b0c63d9ef1f2c565074110ce25.__SX330__SY186__QL60__._TTH_.jpg",
        },
        {
          id: 104,
          image:
            "https://m.media-amazon.com/images/S/pv-target-images/8b088c43059633a25792e62261f788b1321fb69021daf84e64f36573f5ed0fd1.__SX330__SY186__QL60__._TTH_.jpg",
        },
        {
          id: 105,
          image:
            "https://m.media-amazon.com/images/S/pv-target-images/6dfc85c3f2f2fc2acd3d5efdd91a6d65e83e406be8b25fbae1e183e644ee8361.__SX330__SY186__QL60__._TTH_.jpg",
        },
        {
          id: 106,
          image:
            "https://m.media-amazon.com/images/S/pv-target-images/94b2bf16607ad52d719540eba725f64011281328d9b771c90ccf72e312f0a6f6.__SX330__SY186__QL60__._TTH_.jpg",
        },
      ],
    },
    {
      id: 13,
      name: "TVF Original shows",
      products: [
        {
          id: 103,
          image:
            "https://m.media-amazon.com/images/S/pv-target-images/e448b2d467279412530b08c4a31b4b59e1ba346c97450b12688db229e61046b3.__SX330__SY186__QL60__._TTH_.jpg",
        },
        {
          id: 103,
          image:
            "https://m.media-amazon.com/images/S/pv-target-images/1c553578a1f19f8fc16d75cbd1645e3bd0e88c1469b78cdfb3f3416704a2953e.__SX330__SY186__QL60__._TTH_.jpg",
        },
        {
          id: 104,
          image:
            "https://m.media-amazon.com/images/S/pv-target-images/8e8ad9669884c8f9c87e663c670fdbe925fcebccf5fd71adb99d0ee53dc3d842.__SX330__SY186__QL60__._TTH_.jpg",
        },
        {
          id: 105,
          image:
            "https://m.media-amazon.com/images/S/pv-target-images/4524df59b8e408fc35106fce1ddbc496fad69e47ac2f5110d4d61508c753c29e.__SX330__SY186__QL60__._TTH_.jpg",
        },
        {
          id: 106,
          image:
            "https://m.media-amazon.com/images/S/pv-target-images/aef994ad8d777c23a1c96f0548e45c83661cc19cc6ebe7970ce256651b26f78e.__SX330__SY186__QL60__._TTH_.jpg",
        },
      ],
    },
    {
      id: 14,
      name: "Hidden Gems",
      products: [
        {
          id: 103,
          image:
            "https://m.media-amazon.com/images/S/pv-target-images/a8d1a84c645a959efc7e9591edc04b7d56af8584ee49abf87b606835ea0d0906.__SX330__SY186__QL60__._TTH_.jpg",
        },
        {
          id: 103,
          image:
            "https://m.media-amazon.com/images/S/pv-target-images/909ed98fec14b3617d9b699b39798d8cbeedce1c6ca5631e2a5589ae0385a558.__SX330__SY186__QL60__._TTH_.jpg",
        },
        {
          id: 104,
          image:
            "https://m.media-amazon.com/images/S/pv-target-images/cff895a3ab9dab543bfaee31f0275009f75dafce5d486e06923c1297cdb6056f.__SX330__SY186__QL60__._TTH_.jpg",
        },
        {
          id: 105,
          image:
            "https://m.media-amazon.com/images/S/pv-target-images/2d8403ad24a8daf51004d53a3f14a4a8600aa2067b1dccbbf1621e69a7352a46.__SX330__SY186__QL60__._TTH_.jpg",
        },
        {
          id: 106,
          image:
            "https://m.media-amazon.com/images/S/pv-target-images/1de1f70889d8b47dac283982205153c3fe43f178e8d2d621442cc49a66933e88.__SX330__SY186__QL60__._TTH_.jpg",
        },
      ],
    },
    {
      id: 15,
      name: "Top Rated Series & Mini Movies on IMDb",
      products: [
        {
          id: 103,
          image:
            "https://m.media-amazon.com/images/S/pv-target-images/0e7d48840b23ce7f7220b28a9d18cd1a08742b4f8e7b697f0e48e3881b27ee8f.__SX330__SY186__QL60__._TTH_.jpg",
        },
        {
          id: 103,
          image:
            "https://m.media-amazon.com/images/S/pv-target-images/4524df59b8e408fc35106fce1ddbc496fad69e47ac2f5110d4d61508c753c29e.__SX330__SY186__QL60__._TTH_.jpg",
        },
        {
          id: 104,
          image:
            "https://m.media-amazon.com/images/S/pv-target-images/45bdabe394095dd9640c498c438dee5c3aeb72f66199153d12ec0a392c740dae.__SX330__SY186__QL60__._TTH_.jpg",
        },
        {
          id: 105,
          image:
            "https://m.media-amazon.com/images/S/pv-target-images/726499cb2cbae5393aea89fa41eeb242042db0fd7eb1d20f0b179db9891af048.__SX330__SY186__QL60__._TTH_.jpg",
        },
      ],
    },
  ];

  return (
    <>
      <div className="flex justify-between px-[5%] bg-black text-white ">
        <div className="flex  grid-flow-col gap-3 p-5 bg-black text-white cursor-pointer font-semibold">
          <img src={imga} />
          <p>Home</p>
          <p>Imported</p>
          <p>Web Series</p>
          <p>Movies</p>
          <p>Romance</p>
          <p>Comedy</p>
        </div>
        <div className="flex gap-5 size-10 mt-5 cursor-pointer">
          <img src={imgs} alt="" className="h-5 rounded-full" />
          <img src={img} alt="" className="h-5 rounded-full" />
        </div>
      </div>
      {/*---------- slider compents -----------------*/}
      <div>
        <Imageslider />
      </div>
      {/*---------------- main header--------------------------*/}
      <div className="bg-black text-white text-xl p-2">
        {categories.map((i) => (
          <div className="p-2 flex flex-col gap-2">
            <p className="">{i.name}</p>
            <div className="grid grid-cols-5 gap-5">
              {i.products.map((j) => (
                <img
                  src={j.image}
                  alt=""
                  className="transition-all duration-700 hover:scale-110 cursor-pointer rounded-lg"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
      {/*------------- footer components -------------*/}
      <Footer />
    </>
  );
};

export default Amazon;
