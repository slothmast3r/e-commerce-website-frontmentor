import TNShoe1 from "../images/image-product-1-thumbnail.jpg";
import TNShoe2 from "../images/image-product-2-thumbnail.jpg";
import TNShoe3 from "../images/image-product-3-thumbnail.jpg";
import TNShoe4 from "../images/image-product-4-thumbnail.jpg";
import ImgShoe1 from "../images/image-product-1.jpg";
import ImgShoe2 from "../images/image-product-2.jpg";
import ImgShoe3 from "../images/image-product-3.jpg";
import ImgShoe4 from "../images/image-product-4.jpg";

import "./CollectionGallery.scss";
import { useState } from "react";

const thumbnailsData = [
  { thumbNail: TNShoe1, image: ImgShoe1, id: "image1", desc: "Product TN1" },
  { thumbNail: TNShoe2, image: ImgShoe2, id: "image2", desc: "Product TN2" },
  { thumbNail: TNShoe3, image: ImgShoe3, id: "image3", desc: "Product TN3" },
  { thumbNail: TNShoe4, image: ImgShoe4, id: "image4", desc: "Product TN4" },
];

const idThumbnail = {
  image1: thumbnailsData[0],
  image2: thumbnailsData[1],
  image3: thumbnailsData[2],
  image4: thumbnailsData[3],
};
function ThumbNail({ desc, thumbNail, index, onClick, id, currentImage }) {
  return (
    <div className={id === currentImage ? "selected" : ""} onClick={onClick}>
      <img src={thumbNail} alt={desc} />
    </div>
  );
}

function CollectionGallery() {
  const [currentImage, setCurrentImage] = useState("image1");

  function thumbnailClicked(index) {
    setCurrentImage(thumbnailsData[index].id);
  }

  return (
    <div>
      <img
        src={idThumbnail[currentImage].image}
        alt="Shoe foto"
      />
      <div className="gallery-row">
        {thumbnailsData.map(function (element, i) {
          return (
            <ThumbNail
              currentImage={currentImage}
              thumbNail={element.thumbNail}
              desc={element.desc}
              onClick={() => thumbnailClicked(i)}
              index={i}
              id={element.id}
              key={`elem${i}`}
            />
          );
        })}
      </div>
    </div>
  );
}
export default CollectionGallery;
