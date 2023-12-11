import React, { useState } from "react";
import './Style.css';


function DropdownMenu({ title, links, isOpen, toggleDropdown }) {
  return (
    <div className={`dropdown ${isOpen === title ? 'open' : ''}`}>
      <button className="btnn" type="button" onClick={toggleDropdown}>
        <strong>{title}</strong>
    {/*    <div id="container-stars">
          <div id="stars"></div> 
        </div>  */}
        <div id="glow">
          <div className="circle"></div>
          <div className="circle"></div>
        </div>
      </button>
      {isOpen && (
        <div className="sub-categ w3-animate-zoom">
          {links.map((link, index) => (
            <a key={index} href={link.to} style={link.style}>
              {link.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export default function LiquidButton1() {
  const [openMenuIndex, setOpenMenuIndex] = useState(null);

  const handleToggleDropdown = (index) => {
    setOpenMenuIndex(openMenuIndex === index ? null : index);
  };

  const servicesLinks = [
    { to: "/Banc", label: "Banking" ,style: { marginLeft: "0px" } },
    {to: "/media",label: "Media",style: { marginLeft: "30px" } },
    { to: "/educ", label: "Education", style: { marginLeft: "0px" } },
    { to: "/pub", label: "Public", style: { marginLeft: "30px" } },
    { to: "/post", label: "Postal", style: { marginLeft: "0px" } }
  ];

  const healthLinks = [
    { to: "/Hôpital", label: "Hôpital",style: { marginLeft: "0px" } },
    { to: "/Pharma", label: "Paharmacie/Para", style: { marginLeft: "30px" } },
    { to: "/Clini", label: "Clinique", style: { marginLeft: "0px" } },
    { to: "/cabinet", label: "Cabinet", style: { marginLeft: "30px" } }
  ];
   const ShoppingLinks = [
    { to: "/cloth", label: "Clothes" ,style: { marginLeft: "0px" }},
    {
      to: "/cosprod",
      label: "Cosmetic Product",
      style: { marginLeft: "30px" }
    },
    { to: "/supmark", label: "SuperMarket", style: { marginLeft: "0px" } },
    { to: "/electronic", label: "Electronic", style: { marginLeft: "0px" } },
    { to: "/other", label: "Other", style: { marginLeft: "0px" } }

  ];
  const FoodLinks = [
    { to: "/resto", label: "Restaurant" ,style: { marginLeft: "0px" }},
    { to: "/café", label: "Café", style: { marginLeft: "30px" } }
  ];
  const BeautyLinks = [
    { to: "/salon", label: "Salon" ,style: { marginLeft: "0px" }},
    { to: "/spa", label: "Spa", style: { marginLeft: "30px" } }
  ];
  const AdminstrationLinks = [
    { to: '/regiocentre', label: 'Regional Center', style: { marginLeft: "0px" }},
    { to: '/tribi', label: 'Tribinaux', style: { marginLeft: '30px' }}
  ];
  const AutoMotiveLinks = [
    { to: '/carental', label: 'Car Rental', style: { marginLeft: "0px" }},
    { to: '/mecan', label: 'Mécanique', style: { marginLeft: '30px' }},
    { to: '/wash', label: 'Washing', style: { marginLeft: '0px' }},
  ];



  const AccommodationsLinks = [
    { to: '/Hotel', label: 'Hôtel', style: { marginLeft: "0px" }},
    { to: '/residence', label: 'Residence', style: { marginLeft: '30px' }},
    { to: '/travelagen', label: 'Travel Agency', style: { marginLeft: '0px' }},
  ];

  const TransportLinks = [
    { to: '/bus', label: 'Bus', style: { marginLeft: "0px" }},
    { to: '/Taxi', label: 'taxi', style: { marginLeft: '30px' }},
    { to: '/station', label: 'Station', style: { marginLeft: '0px' }},
  ];

  const HobbiesLinks = [
    { to: '/gyms', label: 'Gyms', style: { marginLeft: "0px" }},
    { to: '/pool', label: 'Pool', style: { marginLeft: '30px' }}
  ];

 
  

 

  const categories = [
    { title: "Services", links: servicesLinks, className: "w3-animate-zoom" },
     { title: "Adminstration", links: AdminstrationLinks,className: "w3-animate-zoom" },
    { title: "Health", links: healthLinks, className: "w3-animate-zoom" },
    { title: "Shopping", links: ShoppingLinks, className: "w3-animate-zoom" },
     { title: "Accommodations", links: AccommodationsLinks ,className: "w3-animate-zoom"},
    { title: "Food", links: FoodLinks, className: "w3-animate-zoom" },
    { title: "Beauty", links: BeautyLinks, className: "w3-animate-zoom" },
    { title: "AutoMotive", links: AutoMotiveLinks ,className: "w3-animate-zoom"},
    { title: "Transport", links: TransportLinks,className: "w3-animate-zoom" },
    { title: "Hobbies", links: HobbiesLinks ,className: "w3-animate-zoom"},
  ];
  

  return (
    <>
      <div >
        {categories.map((category, index) => (
          <DropdownMenu
            key={index}
            title={category.title}
            links={category.links}
            isOpen={openMenuIndex === index}
            toggleDropdown={() => handleToggleDropdown(index)}
          />
        ))}
      </div>
    </>
  );
}