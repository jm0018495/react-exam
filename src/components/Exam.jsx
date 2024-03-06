import { useState } from "react";
function Exam(){
  const [isOpen, setIsOpen]= useState(false)
  const handleOpen=()=>{
    setIsOpen(true)
  }

  const handleClose=()=>{
    setIsOpen(false)
  }
 
    return <div className="bg-yellow-300 h-[990px]">
    <div className=" p-5  text-black flex justify-between">
      <h1 className="text-5xl font-bold">Code Xalka</h1>
      <i style={{display: isOpen==true? "none" : ""}} onClick={handleOpen} class="cursor-pointer text-5xl sm:hidden fa-solid fa-bars"></i>
      <i style={{display: isOpen==true?"block":"none"}} onClick={handleClose} class="cursor-pointer text-5xl fa-solid fa-xmark"></i>
      <ul className="sm:flex hidden gap-16 text-3xl">
        <li>Home</li>
        <li>About US</li>
        <li>Contact Us</li>
      </ul>
     
    </div>
    <ul style={{ display:  isOpen==true ? "flex": "none"}} className="flex-col space-y-3 p-2  hidden  text-3xl bg-blue-500">
    
        <li>Home</li>
        <li>About US</li>
        <li>Contact Us</li>
  </ul>

<div>
  <h1 className="font-bold  mt-40 text-8xl text-center mr-[200px]">You Dream And We Build</h1>
  <p className="ml-28 pt-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel, rem.</p>
  <button className="bg-white px-20 py-4 ml-28  text-3xl mt-4 rounded hover:bg-transparent">Explore More</button>
</div>





<div className=" flex bg-orange-50 mt-10 py-14">

<div className="bg-white mt-10 w-[400px] h-[250px] ml-20 rounded shadow-lg ">
<i class=" text-8xl pl-40 pt-4 fa-regular fa-compass"></i>
<div className="pl-20">
<h1 className="font-bold  text-2xl">Software developmebnt</h1>
<p>Tell us what you like and we'll show your top <br />
  job opportunities</p>
</div>

</div>


<div className="bg-white mt-10 w-[400px] h-[250px] ml-20 rounded shadow-lg ">
<i class="text-8xl pl-40  fa-solid fa-user"></i>
<div className="pl-20">
<h1 className="font-bold  text-2xl">Software developmebnt</h1>
<p>Tell us what you like and we'll show your top <br />
  job opportunities</p>
</div>

</div>

<div className="bg-white mt-10 w-[400px] h-[250px] ml-20 rounded  shadow-lg">
<i class=" text-8xl pl-20 pt-4 fa-solid fa-laptop"></i>
<div className="pl-20">
<h1 className="font-bold  text-2xl">Software developmebnt</h1>
<p>Tell us what you like and we'll show your top <br />
  job opportunities</p>
</div>

</div>


</div>






<p className="text-2xl text-center pt-6 font-bold">All rights reverved @CodeXalka</p>


  </div>
  
  }
  

export default Exam;