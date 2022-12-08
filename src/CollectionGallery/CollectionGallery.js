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
  { thumbNail: TNShoe1, image: ImgShoe1, id: 1, desc: "Product TN1" },
  { thumbNail: TNShoe2, image: ImgShoe2, id: 2, desc: "Product TN2" },
  { thumbNail: TNShoe3, image: ImgShoe3, id: 3, desc: "Product TN3" },
  { thumbNail: TNShoe4, image: ImgShoe4, id: 4, desc: "Product TN4" },
];
function ThumbNail({ desc, thumbNail, index }) {
  return (
    <div>
      <img src={thumbNail} alt={desc} />
    </div>
  );
}

function CollectionGallery() {
  const [currentImage, setCurrentImage] = useState(ImgShoe1);

  function thumbnailClicked(index){
      setCurrentImage(thumbnailsData[index])
  }

  return (
    <div>
      <img src={currentImage} alt="Current Image from thumbnail" />
      <div className="gallery-row">
        {thumbnailsData.map(function (element, i) {
          return (
            <ThumbNail
              thumbNail={element.thumbNail}
              desc={element.desc}
              onClick={()=>thumbnailClicked(i)}
              index={i}
              key={`prod${i}`}
            />
          );
        })}
      </div>
    </div>
  );
}
export default CollectionGallery;
