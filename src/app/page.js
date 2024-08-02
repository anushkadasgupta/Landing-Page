import React from "react";
import Image from "next/image";
import { CiMobile2 } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { FiXCircle } from "react-icons/fi";
import { FaBriefcase } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import { FiMapPin, FiPlusCircle } from "react-icons/fi";
import { FiFile } from "react-icons/fi";
import { FiTarget } from "react-icons/fi";
import { BsBank2 } from "react-icons/bs";
import { BsDice6 } from "react-icons/bs";
import { RiShoppingBagLine } from "react-icons/ri";
import { IoRestaurantOutline } from "react-icons/io5";
import { IoSchoolOutline } from "react-icons/io5";
import { IoGameControllerOutline } from "react-icons/io5";
import { GrUserWorker } from "react-icons/gr";
import { HiOutlineGlobeAlt } from "react-icons/hi2";
import { IoBasketballOutline } from "react-icons/io5";
import { IoCaretForwardCircleOutline } from "react-icons/io5";
import { RiRoadsterLine } from "react-icons/ri";
import { RiHeartAdd2Line } from "react-icons/ri";
import { VscWand } from "react-icons/vsc";
import { FiPlus } from "react-icons/fi";


export default function Home() {
  return (
<main className="style_main">
  <div className="content-one bg-gray-200">
    <div class="flex border shadow-2xl bg-white ml-10 mr-10 rounded-lg">
    <Image class="mt-5 object-cover ml-10" src="/6.jpg" alt="My Company1" width={200} height={100} />
    <div class="flex ml-20 space-x-7 mt-10">
    <p>Services</p>
    <p>Media</p>
    <p>Cases</p>
    <p>FAQ</p>
    <p>Contacts</p>
    </div>
    <div class="text-lime-500 mt-10 ml-32 space-x-7 flex">
    <div class="flex space-x-1">
    <CiMobile2 style={{ color: '#84cc16', fontSize: '24px' }} />
    <p>+91 0000000000</p>
    </div>
    <div class="flex space-x-1">
    <CiMail style={{ color: '#84cc16', fontSize: '24px' }} /> 
    <p>demo@gmail.com</p>
    </div>
    </div>
    </div>
    <br />
    <div class="flex space-x-7">
      <div>
      <div class="ml-10">
    <h1 class="text-3xl font-bold"><span class="text-yellow-400">User Centric Excellence</span>: Our</h1>
    <h1 class="text-3xl font-bold">App Development services</h1>
    <h1 class="text-3xl font-bold">Tackles Your Pain Points</h1>
    <br />
    <p class="text-sm">Experience a Seamless Digital Journey with <span class="text-lime-500">Desun</span> - Where Every Line</p>
    <p class="text-sm">of Code Resolves Your Challenges and <span class="text-yellow-400">Elevates Your App Experience </span></p>
    <p class="text-sm">to Unparalled Heights.</p>
  </div>
  <br />
      <div class="border shadow-2xl rounded-md bg-white w-5/6 ml-10 p-10">
    <h1 class="text-base font-bold">Leave your contacts and we will call you back</h1>
    <h1 class="text-base font-bold">within 30 minutes</h1>
    <br />
    <div class="flex space-x-20">
      <div>
    <p class="text-xs text-zinc-400">Full name</p>
    <p class="text-xs text-zinc-950">My Name</p>
    <hr />
    </div>
    <div>
    <p class="text-xs text-zinc-400">Phone number</p>
    <div class="flex space-x-1">
    <img class="object-cover object-center h-3" src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png" alt="flag1"/>
    <p class="text-xs text-zinc-950">+91 0000000000</p>
    </div>
    <hr />
    </div>
    </div>
    <br />
    <div class="flex space-x-10">
    <div>
    <p class="text-xs text-zinc-400">Business name</p>
    <p class="text-xs text-zinc-950">ABC Technologies PVT LTD</p>
    <hr />
    </div>
    <div>
    <p class="text-xs text-zinc-400">Business mail</p>
    <p class="text-xs text-zinc-950">demoaccount@gmail.com</p>
    <hr />
    </div>
    <button class="bg-lime-500 shadow-2xl justify-center hover:bg-lime-200 text-white font-bold w-32 p-3 rounded-md">Get consultation</button>
    </div>
    </div>
      </div>
      <Image src="/1.png" alt="My Image" width={600} height={200} />
    </div>
    </div>

  <div className="content-two mt-10">
    <hr />
    <br />
    <div class="flex text-lg font-bold space-x-56 ml-10">
    <p class="border-4 border-black">planet</p>
    <p class="border-4 border-black">planet</p>
    <p class="border-4 border-black">planet</p>
    <p class="border-4 border-black">planet</p>
    <p class="border-4 border-black">planet</p>
    <p class="border-4 border-black">planet</p>
    </div>
    <br />
    <hr />
    <br />
    <div class="flex space-x-60">
    <div>
    <h1 class="text-3xl font-bold ml-10">Full development cycle</h1>
    <br />
    <p class="text-sm ml-10">We use proven technologies</p>
    <br />
    <h1 class="font-bold ml-10">Web</h1>
    <p class="text-sm ml-10">PHP/Javascript/Node JS/Web Socket/Socket.io/Vue.js/</p>
    <p class="text-sm ml-10">Nuxt/MySQL/Laravel/GOlang/django/Python</p>
    <br />
    <h1 class="font-bold ml-10">Mobile</h1>
    <p class="text-sm ml-10">Swift/Kotlin/Alamofire/Firebase/CoreData/Room/Realm/</p>
    <p class="text-sm ml-10">Coroutine/RxJava/RxSwift/Unit Test/Navigation</p>
    </div>
    <div>
    <div class="flex space-x-5">
    <p class="text-sm">iOS development</p>
    <IoIosArrowForward style={{ color: '#84cc16' }} />
    </div>
    <br />
    <div class="flex space-x-5">
    <p class="text-sm underline underline decoration-lime-600 font-bold">Android development</p>
    <IoIosArrowForward style={{ color: '#84cc16' }} />
    </div>
    <br />
    <div class="flex space-x-5">
    <p class="text-sm">Web development</p>
    <IoIosArrowForward style={{ color: '#84cc16' }} />
    </div>
    <br /> 
    <div class="flex space-x-5">
    <p class="text-sm">UI/UX design</p>
    <IoIosArrowForward style={{ color: '#84cc16' }} />
    </div>
    <br />
    <div class="flex space-x-5">
    <p class="text-sm">Testing</p>
    <IoIosArrowForward style={{ color: '#84cc16' }} />
    </div>
    <br />
    <div class="flex space-x-5">
    <p class="text-sm">Launch</p>
    <IoIosArrowForward style={{ color: '#84cc16' }} />
    </div>
    <br />
    <div class="flex space-x-5">
    <p class="text-sm">IT consulting</p>
    <IoIosArrowForward style={{ color: '#84cc16' }} />
    </div>
    </div>
    </div>
  </div>

  <div className="content-three bg-gray-200">
     <h1 class="text-3xl font-bold mt-10 ml-10">Developed more than <span class="text-lime-600">100</span></h1>
     <h1 class="text-3xl font-bold ml-10">projects in <span class="text-lime-600">15 </span>industries</h1>
     <br />
     <br />
     <div class="flex ml-10 space-x-48">
      <div class="text-sm">
      <div class="flex space-x-2">
      <HiOutlineGlobeAlt style={{ color: '#f59e0b', fontSize: '16px' }} />
      <p>Social Media</p>
      </div>
      <br />
      <div class="flex space-x-2">
      <IoBasketballOutline style={{ color: '#f59e0b', fontSize: '16px' }} />
      <p>Fitness and sport</p>
      </div>
      <br />
      <div class="flex space-x-2">
      <BsBank2 style={{ color: '#f59e0b', fontSize: '16px' }} />
      <p>Bank</p>
      </div>
      <br />
      <div class="flex space-x-2">
      <GrUserWorker style={{ color: '#f59e0b', fontSize: '16px' }} />
      <p>Construction</p>
      </div>
      <br />
      <div class="flex space-x-2">
      <IoGameControllerOutline style={{ color: '#f59e0b', fontSize: '16px' }} />
      <p>Game projects</p>
      </div>
      </div>
      <div class="text-sm">
      <div class="flex space-x-2">
      <IoSchoolOutline style={{ color: '#f59e0b', fontSize: '16px' }} />
      <p>Education</p>
      </div>
      <br />
      <div class="flex space-x-2">
      <RiRoadsterLine style={{ color: '#f59e0b', fontSize: '16px' }} />
      <p>Auto, transport</p>
      </div>
      <br />
      <div class="flex space-x-2">
      <RiHeartAdd2Line style={{ color: '#f59e0b', fontSize: '16px' }} />
      <p>Medicine, health</p>
      </div>
      <br />
      <div class="flex space-x-2">
      <IoRestaurantOutline style={{ color: '#f59e0b', fontSize: '16px' }} />
      <p>Resturants, food delivery</p>
      </div>
      <br />
      <div class="flex space-x-2">
      <RiShoppingBagLine style={{ color: '#f59e0b', fontSize: '16px' }} />
      <p>Marketplaces</p>
      </div>
      </div>
      <div class="text-sm">
      <div class="flex space-x-2">
      <FiTarget style={{ color: '#f59e0b', fontSize: '16px' }} />
      <p>AR technology</p>
      </div>
      <br/>
      <div class="flex space-x-2">
      <BsDice6 style={{ color: '#f59e0b', fontSize: '16px' }} />
      <p>TV series</p>
      </div>
      <br />
      <div class="flex space-x-2">
      <FaBriefcase style={{ color: '#f59e0b', fontSize: '16px' }} />
      <p>Startups</p>
      </div>
      <br />
      <div class="flex space-x-2">
      <VscWand style={{ color: '#f59e0b', fontSize: '16px' }} />
      <p>Religion</p>
      </div>
      <br />
      <div class="flex space-x-2">
      <IoCaretForwardCircleOutline style={{ color: '#f59e0b', fontSize: '16px' }} />
      <p>Online sources</p>
      </div>
      </div>
     </div>
     <br />
     <br />
     <h1 class="text-3xl font-bold ml-10">Projects we are proud of</h1>
     <br />
     <p class="text-xs font-bold ml-10">Our software development company is truly proud of the wonderful clients we have</p>
     <p class="text-xs font-bold ml-10">worked with. We enjoy a long-term partnership</p>
     <br />
     <div class="flex space-x-10 ml-10">
     <p class="text-sm font-bold"><span class="underline decoration-yellow-500">Projec</span>t 1</p>
     <p class="text-sm">Project 2</p>
     <p class="text-sm">Project 3</p>
     <p class="text-sm">Project 4</p>
     </div>
     <br />
     <div class="flex space-x-60">
     <div>
     <h1 class="text-3xl font-bold ml-10">Project 1</h1>
     <br />
     <p class="text-xs ml-10">Crafted an innovative rental property management app, seamlessly integrating secure</p>
     <p class="text-xs ml-10">login, absence registration, and a tenant notice board. Elevating the resident</p>
     <p class="text-xs ml-10">experience with user-friendly design and efficient communication channels</p>
     <br />
     <p class="text-sm ml-10 text-slate-500">Business analysis <span class="text-yellow-400">/</span>iOS<span class="text-yellow-400">/</span>Android<span class="text-yellow-400">/</span>QA<span class="text-yellow-400">/</span>UI/UX Design</p>
     <br />
     <div class="flex space-x-10">
      <div class="ml-10">
     <p class="text-base font-bold">400%</p>
     <p class="text-xs text-slate-500">User Growth</p>
     </div>
     <div class="ml-10">
     <p class="text-base font-bold">+200 000</p>
     <p class="text-xs text-slate-500">Active Users</p>
     </div>
     </div>
     <br />
     <div class="ml-10 flex space-x-4">
     <img class="object-cover object-center h-10" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD0-VifLPKywOa4lSu4LWfOfsBb-lNBJrrRw&s" alt="image1"/>
     <img class="object-cover object-center h-10" src="https://www.paywise.com.au/wp-content/uploads/2022/10/Google-Play-App-Store-Button.png" alt="image2"/>
     </div>
     </div>
     <Image class="object-cover ml-10" src="/2.jpg" alt="image6" width={300} height={500} />
     </div>
     <br />
  </div>
  
  <div className="content-four flex items-center p-10 space-x-64 text-zinc-50 bg-gradient-to-r from-yellow-300 via-yellow-500 to-lime-600 ...">
      <div>
      <h1 class="text-3xl font-bold">Let's discuss</h1>
      <h1 class="text-3xl font-bold">Your project</h1>
      <br />
      <p class="text-sm">Let's figure out how to create an effective application,</p>
      <p class="text-sm">its cost and terms of its development.</p>
      </div>
      <div class="p-10 border shadow-2xl rounded-md flex space-x-7 bg-white">
      <div>
      <p class="text-sm text-zinc-400">Full name</p>
      <p class="text-base text-zinc-950">My Name</p>
      <hr />
      <br />
      <p class="text-sm text-zinc-400">Business name</p>
      <p class="text-base text-zinc-950">ABC Technologies PVT LTD</p>
      <hr />
      <br />
      </div>
      <div>
      <p class="text-sm text-zinc-400">Phone number</p>
      <div class="flex space-x-1">
      <img class="object-cover object-center h-5" src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png" alt="flag2"/>
      <p class="text-base text-zinc-950">+91 0000000000</p>
      </div>
      <hr />
      <br />
      <p class="text-sm text-zinc-400">Business mail</p>
      <p class="text-base text-zinc-950">demoaccount@gmail.com</p>
      <hr />
      <br />
      <button class="ml-8 shadow-2xl bg-amber-500 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded">Discuss the project</button>
      </div>
      </div>
    </div>

  <div className="content-five mt-10">
    <h1 class="text-3xl ml-10 font-bold">Application Development Stages</h1>
    <br />
  </div>
  <br />
  <div class="flex space-x-36 mr-10 ml-10">
    <div>
      <div class="border rounded-lg w-72 p-5 shadow-2xl">
        <div class="flex space-x-5">
        <Image class="object-cover" src="/image1.jpg" alt="image1" width={40} height={100} />
        <p class="text-sm font-bold mt-4">Analysis</p>
        </div>
        <br />
        <p class="text-xs">We craft precise technical specs, aligning with your business, technology and user requirements.</p>
      </div>
      <br />
      <div class="border rounded-lg w-72 p-5 shadow-2xl">
      <div class="flex space-x-5">
      <Image class="object-cover" src="/image2.jpg" alt="image2" width={40} height={100} />
      <p class="text-sm font-bold mt-3">Design</p>
      </div>
        <br />
        <p class="text-xs">We adapt the customer's corporate identity to the platform guidelines. We draw convenient and understandable interfaces.</p>
      </div>
      <br />
      <div class="border rounded-lg w-72 p-5 shadow-2xl">
      <div class="flex space-x-5">
      <Image class="object-cover" src="/image3.jpg" alt="image3" width={40} height={100} />
        <p class="text-sm font-bold mt-3">Development</p>
        </div>
        <br />
        <p class="text-xs">We create an extensible architecture, write clean and stable code. We integrate with customer technologies.</p>
      </div>
      <br />
    </div>
    <Image src="/3.png" alt="3-image" width={300} height={1} />
    <div>
      <div class="border rounded-lg w-72 p-5 shadow-2xl">
      <div class="flex space-x-5">
      <Image class="object-cover" src="/image4.jpg" alt="image4" width={40} height={100} />
        <p class="text-sm font-bold mt-3">Testing</p>
        </div>
        <br />
        <p class="text-xs">We carry out functional testing and do bug fixes. We adapt the application to different phone resolutions.</p>
      </div>
      <br />
      <div class="border rounded-lg w-72 p-5 shadow-2xl">
      <div class="flex space-x-5">
      <Image class="object-cover" src="/image5.jpg" alt="image5" width={40} height={100} />
        <p class="text-sm font-bold mt-4">Launching</p>
        </div>
        <br />
        <p class="text-xs">We design the application page and publish it in the App Store and Google Play stores.</p>
      </div>
      <br />
      <div class="border rounded-lg w-72 p-5 shadow-2xl">
      <div class="flex space-x-5">
      <Image class="object-cover" src="/image6.jpg" alt="image6" width={40} height={100} />
        <p class="text-sm font-bold mt-4">Support</p>
        </div>
        <br />
        <p class="text-xs">We monitor the stability of the application, update it for new devices and versions of iOS and Android.</p>
      </div>
      <br />
      <br />
    </div>
  </div>
  <div className="content-six bg-gray-200 flex space-x-20">
    <div class="ml-10 mt-10">
    <h1 class="text-3xl font-bold">Our team</h1>
    <br />
    <p class="text-sm">Thousand is a full-cycle digital production company with its own product analytics,</p>
    <p class="text-sm">design, web and mobile development</p>
    <br />
    <div class="flex space-x-10 text-3xl font-bold">
      <h1>28</h1>
      <h1>+100</h1>
      <h1>7 years</h1>
    </div>
    <br />
    <div class="flex space-x-10 text-xs text-slate-600">
      <h1>team members</h1>
      <h1>projects</h1>
      <h1>in IT sphere</h1>
    </div>
    <br />
    <br />
    <p class="text-sm">All the necessary specialists-from a designer to a tester-are on our staff. We hire</p>
    <p class="text-sm">the best specialists in the market. It's expensive but worth it.</p>
  </div>
  <Image class="object-cover rounded-lg mt-10" src="/4.jpg" alt="4-image" width={450} height={600} />
  </div>
  <div className="content-seven mt-10">
    <h1 class="text-3xl font-bold ml-10">FAQ</h1>
    <br />
    <div class="flex ml-10 space-x-52 mr-10">
      <div>
        <hr />
        <br />
        <div class="flex space-x-48">
        <p class="text-sm font-bold mt-2">What is the cost of a mobile application?</p>
        <FiPlusCircle style={{ color: '#84cc16', fontSize: '36px' }} />
        </div>
        <br />
        <hr />
        <br />
        <div class="flex space-x-24">
        <p class="text-sm mt-2 font-bold">Do you provide a guarantee for the mobile application?</p>
        <FiPlusCircle style={{ color: '#84cc16', fontSize: '36px' }} />
        </div>
        <br />
        <hr />
      </div>
      <div>
        <hr />
        <br />
        <div class="flex space-x-60">
        <p class="text-sm font-bold">How long will development take?</p>
        <FiXCircle style={{ color: '#94a3b8', fontSize: '36px' }} />
        </div>
        <br />
        <p class="text-xs">Development terms directly depend on the requirements for the mobile</p>
        <p class="text-xs">application, the characteristics of the company, as well as the wishes of the</p>
        <p class="text-xs">customer</p>
        <br />
        <p class="text-xs">Average develpment time from start to finished application:</p>
        <p class="text-xs">Medium projects up to <span class="font-bold">3 months</span></p>
        <p class="text-xs">Large projects about <span class="font-bold">4-6 months</span></p>
        <p class="text-xs">To get a more accurate estimate of the project completion time, it is</p>
        <p class="text-xs">necessary to determine the main task of the application, think over its logic</p>
        <p class="text-xs">abd functionality</p>
        <br />
        <hr />
        <br />
        <div class="flex space-x-24">
        <p class="text-sm font-bold mt-2">I will not tell my idea, do you guarantee confidentiality?</p>
        <FiPlusCircle style={{ color: '#84cc16', fontSize: '36px' }} />
        </div>
        <br />
        <hr />
        <br />
      </div>
    </div>
    <br />
    <div class="ml-10 border shadow-2xl rounded-lg bg-neutral-950 mr-10">
      <div class="content-center">
    <Image class="mt-5 ml-96" src="/5.jpg" alt="5-image" width={400} height={10} />
    </div>
      <br />
      <div class="flex space-x-56 text-slate-400 ml-10">
        <div class="flex space-x-1">
        <CiMobile2 style={{ color: '#94a3b8' }} />
        <p class="text-xs">Contact nums</p>
        </div>
        <div class="flex space-x-1">
        <CiMail style={{ color: '#94a3b8' }} /> 
        <p class="text-xs">Gmail</p>
        </div>
        <div class="flex space-x-1">
        <FiMapPin style={{ color: '#94a3b8' }} />
        <p class="text-xs">Address</p>
        </div>
        <div class="flex space-x-1">
        <FiFile style={{ color: '#94a3b8' }} />
        <p class="text-xs">Leave a request</p>
        </div>
        <br />
      </div>
      <div class="flex space-x-48 text-white ml-10">
        <p class="text-xs font-bold">+91 0000000000</p>
        <p class="text-xs font-bold">demo@gmail.com</p>
        <p class="text-xs font-bold">Mumbai, India</p>
        <p class="text-xs font-bold">Leave a request</p>
      </div>
      <br />
      <p class="text-xs text-white text-center">We work throughout the world</p>
    </div>
  </div>

</main>
);
}