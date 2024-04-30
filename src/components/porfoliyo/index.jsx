// import React from "react";

// import WindowIcon from "@mui/icons-material/Window";
// import PersonIcon from "@mui/icons-material/Person";
// import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
// import PinterestIcon from "@mui/icons-material/Pinterest";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import FiberPinIcon from "@mui/icons-material/FiberPin";
// import DiamondIcon from "@mui/icons-material/Diamond";
// import ImageIcon from "@mui/icons-material/Image";
// import PushPinIcon from "@mui/icons-material/PushPin";
// import DownloadIcon from "@mui/icons-material/Download";
// import EmailIcon from "@mui/icons-material/Email";
// import LocationOnIcon from "@mui/icons-material/LocationOn";
// import PhoneIcon from "@mui/icons-material/Phone";
// import SendIcon from "@mui/icons-material/Send";
// import img2 from "../image/avatar_g.jpg";
// import img3 from "../image/mountains.jpg";
// import img4 from "../image/lights.jpg";
// import img5 from "../image/nature.jpg";
// import img6 from "../image/p1.jpg";
// import img7 from "../image/p2.jpg";
// const MyPortFolio = () => {
//   const samFolio = [
//     {
//       id: 1,
//       image: img2,
//       statement: "Lorem Ipsum",
//       theory:
//         "Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.",
//     },
//     {
//       id: 2,
//       image: img3,
//       statement: "Lorem Ipsum",
//       theory:
//         "Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.",
//     },
//     {
//       id: 3,
//       image: img4,
//       statement: "Lorem Ipsum",
//       theory:
//         "Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.",
//     },
//     {
//       id: 4,
//       image: img5,
//       statement: "Lorem Ipsum",
//       theory:
//         "Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.",
//     },
//     {
//       id: 5,
//       image: img6,
//       statement: "Lorem Ipsum",
//       theory:
//         "Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.",
//     },
//     {
//       id: 6,
//       image: img7,
//       statement: "Lorem Ipsum",
//       theory:
//         "Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.",
//     },
//   ];
//   const samPort = [
//     {
//       id: 1,
//       image: img8,
//     },
//     {
//       id: 2,
//       image: img9,
//     },
//   ];
//   return (
//     <div className="flex h-screen">
//       <div className="w-[18%] flex flex-col h-full">
//         <img className="h-32 w-[52%] p-2 rounded-xl mt-3 " src={img1} alt="" />
//         <h1 className="p-3 font-bold text-xl">PORTFOLIO</h1>
//         <h2 className="font-light ml-3 text-xs">Template by W3.CSS</h2>
//         <div className=" p-1 text-xs h-screen">
//           <button className="flex items-start w-full hover:bg-[#ccc] mt-3 pl-2 gap-3">
//             <WindowIcon /> PORTFOLIO
//           </button>
//           <br />
//           <button className="flex items-start w-full hover:bg-[#ccc] pl-2 gap-3">
//             <PersonIcon /> ABOUT
//           </button>
//           <br />
//           <button className="flex items-start w-full hover:bg-[#ccc] pl-2 gap-3 mb-5">
//             <LocalPostOfficeIcon /> CONTACT
//           </button>
//           <div>
//             <FacebookIcon />
//             <InstagramIcon />
//             <CircleNotificationsIcon />
//             <PinterestIcon />
//             <TwitterIcon />
//             <FiberPinIcon />
//           </div>
//         </div>
//       </div>
//       <div className="flex w-[82%] bg-[#f1f1f1] overflow-y-auto h-full">
//         <div className="flex flex-col w-full">
//           <h1 className="text-3xl font-bold p-3">My Portfolio</h1>
//           <div className="inline-flex p-3 gap-1">
//             <h1 className="font-light p-2 ">Filter:</h1>
//             <button className="bg-black hover:bg-[#9e9e9e] px-3 text-white hover:text-black ">
//               ALL
//             </button>
//             <button className="bg-white hover:bg-gray-300 px-4 ">
//               <DiamondIcon /> Design
//             </button>
//             <button className="bg-white hover:bg-gray-300 px-4 ">
//               <ImageIcon /> Photos
//             </button>
//             <button className="bg-white hover:bg-gray-300 px-4 ">
//               <PushPinIcon /> Art
//             </button>
//           </div>
//           <div className="mb-1">
//             <p className="bg-[#ccc] p-0.5 ml-3 mr-3"></p>
//           </div>
//           <div className=" grid grid-cols-3 gap-3 p-3">
//             {samFolio.map((i) => (
//               <div>
//                 <img
//                   className="h-56 w-96 hover:contrast-50"
//                   src={i.image}
//                   alt=""
//                 />
//                 <div className="bg-white p-3">
//                   <p className="font-bold">{i.statement}</p>
//                   <p className="mt-2 font-light">{i.theory}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <div className="flex justify-center p-12">
//             <Pagination count={4} shape="rounded" />
//           </div>
//           <div className="grid grid-cols-2 ">
//             {samPort.map((j) => (
//               <img className="w-full p-4" src={j.image} alt="" />
//             ))}
//           </div>
//           <div>
//             <h1 className="font-bold text-xl px-5 mt-5">About Me</h1>
//             <p className="ml-5 mt-1 font-light">
//               Just me, myself and I, exploring the universe of unknownment. I
//               have a heart of love and an interest of lorem ipsum and mauris
//               neque quam blog. I want to share my world with you. Praesent
//               tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta
//               lectus vitae, ultricies congue gravida diam non fringilla.
//               Praesent tincidunt sed tellus ut rutrum. Sed vitae justo
//               condimentum, porta lectus vitae, ultricies congue gravida diam non
//               fringilla.
//             </p>
//           </div>
//           <div className="text-gray-700 ml-5 mt-8">Technical Skills</div>
//           <div className="text-gray-700 ml-5 mt-4">Photography</div>
//           <div className="w-full inline-flex p-4">
//             <div className="flex justify-center items-center bg-[#616161] text-white w-[95%] h-8">
//               95%
//             </div>
//             <div className="bg-[#9e9e9e] w-[5%]"></div>
//           </div>
//           <div className="text-gray-700 ml-5 mt-1">Web Design</div>
//           <div className="w-full inline-flex p-4">
//             <div className="flex justify-center items-center bg-[#616161] text-white w-[85%] h-8">
//               85%
//             </div>
//             <div className="bg-[#9e9e9e] w-[15%]"></div>
//           </div>
//           <div className="text-gray-700 ml-5 mt-1">Photoshop</div>
//           <div className="w-full inline-flex p-4">
//             <div className="flex justify-center items-center bg-[#616161] text-white w-[80%] h-8">
//               80%
//             </div>
//             <div className="bg-[#9e9e9e] w-[20%]"></div>
//           </div>
//           <div>
//             <button className="bg-[#616161] text-white px-4 py-2 ml-4 mt-3">
//               <DownloadIcon /> Download Resume
//             </button>
//           </div>
//           <div className="text-gray-700 ml-4 mt-10 text-xl">
//             How much I charge
//           </div>
//           <div className="grid grid-cols-3 gap-3 p-3 hover:brightness-75">
//             <p className="px-40 py-5 bg-[#616161] text-white hover:bg-black">
//               Basic
//             </p>
//             <p className="px-40 py-5 bg-[#009688] text-white">Pro</p>
//             <p className="px-36 py-5 bg-[#616161] text-white hover:bg-black">
//               Premium
//             </p>
//             <p className="px-32 py-3 font-light text-gray-700 bg-white">
//               Web Design
//             </p>
//             <p className="px-32 py-3 font-light text-gray-700 bg-white">
//               Web Design
//             </p>
//             <p className="px-32 py-3 font-light text-gray-700 bg-white">
//               Web Design
//             </p>
//             <p className="px-32 py-3 font-light text-gray-700 bg-white">
//               Photography
//             </p>
//             <p className="px-32 py-3 font-light text-gray-700 bg-white">
//               Photography
//             </p>
//             <p className="px-32 py-3 font-light text-gray-700 bg-white">
//               Photography
//             </p>
//             <p className="px-32 py-3 font-light text-gray-700 bg-white">
//               1GB Storage
//             </p>
//             <p className="px-32 py-3 font-light text-gray-700 bg-white">
//               50 GB Storage
//             </p>
//             <p className="px-28 py-3 font-light text-gray-700 bg-white">
//               Unlimited Storage
//             </p>
//             <p className="px-32 py-1 font-light text-gray-700 bg-white">
//               Mail Support
//             </p>
//             <p className="px-28 py-1 font-light text-gray-700 bg-white">
//               Endless Support
//             </p>
//             <p className="px-28 py-1 font-light text-gray-700 bg-white">
//               Endless Support
//             </p>
//             <p className="px-36 py-2 font-light text-gray-700 bg-white">
//               <p className="text-2xl">$ 10</p> per month
//             </p>
//             <p className="px-36 py-2 font-light text-gray-700 bg-white">
//               <p className="text-2xl">$ 25</p> per month
//             </p>
//             <p className="px-36 py-2 font-light text-gray-700 bg-white">
//               <p className="text-2xl">$ 10</p> per month
//             </p>
//             <div className="bg-gray-200 text-white grid grid-cols-3 gap-3">
//               <button className="text-white bg-[#009688]">Sign Up</button>
//               <button className="text-white bg-[#009688] ">Sign Up</button>
//               <button className="text-white bg-[#009688] ">Sign Up</button>
//             </div>
//           </div>
//           <div className="bg-[#9e9e9e]">
//             <h1 className="ml-5 mt-4 text-xl">Contact Me</h1>
//             <div className="grid grid-cols-3 gap-3 p-4 mb-5">
//               <div className="bg-[#616161] py-6">
//                 <div className="ml-40">
//                   <EmailIcon />
//                 </div>
//                 <div className="ml-28 text-white">email@email.com</div>
//               </div>
//               <div className="bg-[#009688] py-6">
//                 <div className="ml-40">
//                   <LocationOnIcon />
//                 </div>
//                 <div className="ml-32 text-white">Chicago, US</div>
//               </div>
//               <div className="bg-[#616161] py-6">
//                 <div className="ml-40">
//                   <PhoneIcon />
//                 </div>
//                 <div className="ml-36 text-white">512312311</div>
//               </div>
//             </div>
//             <div>
//               <p className="bg-[#ccc] h-0.5 ml-5 mr-5"></p>
//             </div>
//             <div className="p-5">
//               <h1 className="text-gray-800">Name</h1>
//               <input
//                 type="text"
//                 placeholder=""
//                 className="w-full h-10 outline-black shadow"
//               />
//               <h1 className="text-gray-800 mt-3">Email</h1>
//               <input
//                 type="text"
//                 placeholder=""
//                 className="w-full h-10 outline-black shadow"
//               />
//               <h1 className="text-gray-800 mt-3">Message</h1>
//               <input
//                 type="text"
//                 placeholder=""
//                 className="w-full h-10 outline-black shadow"
//               />
//             </div>
//             <div className="bg-black text-white hover:bg-[#616161] hover:text-black mb-6 w-40 h-8 ml-5 flex items-center justify-center">
//               <button className="flex gap-3 ">
//                 <SendIcon /> Send Message
//               </button>
//             </div>
//           </div>
//           <div className="grid grid-cols-3 bg-[#616161] px-8 text-white py-8  gap-7">
//             <div className="text-xl">FOOTER</div>
//             <div className="text-xl">BLOG POSTS</div>
//             <div className="text-xl">POPULAR TAGS</div>
//             <p className="items-start text-xs">
//               Praesent tincidunt sed tellus ut rutrum. Sed vitae justo
//               condimentum, porta lectus vitae, ultricies congue <br /> gravida
//               diam non fringilla.
//             </p>
//             <div>
//               <div className="inline-flex gap-3 ml-3 mb-3">
//                 <img className="w-12" src={img10} alt="" />
//                 <p>
//                   Lorem <br /> Sed mattis nunc
//                 </p>
//               </div>
//               <div className="">
//                 <p className="bg-[#ccc] h-0.5"></p>
//               </div>
//             </div>
//             <div className="gap-1">
//               <button className="bg-black text-white ml-2 text-xs px-2 py-1 items-center font-light">
//                 Travel
//               </button>
//               <button className="bg-[#9e9e9e] text-black ml-2 text-xs px-1 items-center font-light">
//                 New York
//               </button>
//               <button className="bg-[#9e9e9e] text-black ml-2 text-xs px-1 items-center font-light">
//                 London
//               </button>
//               <button className="bg-[#9e9e9e] text-black ml-2 text-xs px-1 items-center font-light">
//                 IKEA
//               </button>
//               <button className="bg-[#9e9e9e] text-black ml-2 text-xs px-1 items-center font-light">
//                 NORWAY
//               </button>
//               <button className="bg-[#9e9e9e] text-black ml-2 text-xs px-1 items-center font-light">
//                 DIY
//               </button>
//               <br />
//               <button className="bg-[#9e9e9e] text-black ml-2 text-xs px-1 items-center font-light">
//                 Ideas
//               </button>
//               <button className="bg-[#9e9e9e] text-black ml-2 text-xs px-1 items-center font-light">
//                 Baby
//               </button>
//               <button className="bg-[#9e9e9e] text-black ml-2 text-xs px-1 items-center font-light">
//                 Family
//               </button>
//               <button className="bg-[#9e9e9e] text-black ml-2 text-xs px-1 items-center font-light">
//                 News
//               </button>
//               <button className="bg-[#9e9e9e] text-black ml-2 text-xs px-1 items-center font-light">
//                 Clothing
//               </button>
//               <button className="bg-[#9e9e9e] text-black ml-2 text-xs px-1 items-center font-light">
//                 Shopping
//               </button>
//             </div>
//             <div>Powered by w3.css</div>
//             <div className="inline-flex gap-3 ml-3 mt-1">
//               <img className="w-12" src={img11} alt="" />
//               <p>
//                 Ipsum <br />
//                 Praes tinci sed
//               </p>
//             </div>
//             <div>
//               <button className="text-xs bg-[#9e9e9e] text-black ml-2 px-1">
//                 Sports
//               </button>
//               <button className="text-xs bg-[#9e9e9e] text-black ml-2 px-1">
//                 Games
//               </button>
//             </div>
//           </div>
//           <div className="text-white bg-black flex justify-center py-6">
//             Powered by w3.css
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MyPortFolio;
