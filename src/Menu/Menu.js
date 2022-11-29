import Logo from "../Logo/Logo";
import { useEffect, useState } from "react";
import Avatar from "../images/image-avatar.png";
import Cart from "../cart/cart";

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
      <Logo/>
      {menuElements.map(function (element, i) {
        return <DomMenuElement name={element.name} id={element.id} key={i} />;
      })}
        <Cart />
      <img src={Avatar} alt="Avatar" />
    </div>
  );
}

export default Menu;
