import Logo from "../images/SVGs/Logo/Logo";
import { useState } from "react";
import Avatar from "../images/image-avatar.png";
import Cart from "../images/SVGs/Cart/Cart";
import "./Menu.scss"


const menuElements = [
  {
    name: "Collection",
    id: "collection",
  },
  {
    name: "Men",
    id: "men",
  },
  {
    name: "Women",
    id: "women",
  },
  {
    name: "About",
    id: "about",
  },
  {
    name: "Contact",
    id: "contact",
  },
];

function DomMenuElement(props) {
  const [isBooped, setIsBooped] = useState(false);
  const trigger = () => {
    setIsBooped(true);
    console.log(isBooped);
  };
  return <div onMouseEnter={trigger}>{props.name}</div>;
}
function Menu() {
  return (
    <div className="menu">
      <div className="menu-left-side">
        <Logo />
        {menuElements.map(function (element, i) {
          return <DomMenuElement name={element.name} id={element.id} key={i} />;
        })}
      </div>
      <div className="menu-right-side">
        <Cart />
        <img src={Avatar} alt="Avatar" />
      </div>
    </div>
  );
}

export default Menu;
