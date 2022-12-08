import "./CollectionDescAndPurchase.scss";
import PriceTag from "./PriceTag";
import ItemAmount from "./ItemAmount";
import { useState } from "react";

const companySubtitle = "Sneaker Company";
const productTitle = "Fall limited edition sneakers";
const productDescription =
  "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.";

function ProductDescription() {
  return (
    <div>
      <h2>{companySubtitle}</h2>
      <h1>{productTitle}</h1>
      <p>{productDescription}</p>
    </div>
  );
}
function CollectionDescAndPurchase() {
  const [itemCount, setItemCount] = useState(0);
  function handleAmount(num) {
    setItemCount((current) => {
        let result = current + num
        return result < 0 ? 0 : result
    });
  }

  return (
    <section>
      <ProductDescription></ProductDescription>
      <PriceTag></PriceTag>
      <ItemAmount number={itemCount} handleClick={(num)=>handleAmount(num)}></ItemAmount>
    </section>
  );
}
export default CollectionDescAndPurchase;
