import "./CollectionDescAndPurchase.scss";
import PriceTag from "./PriceTag";
import ItemAmount from "./ItemAmount";

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
  return (
    <section>
      <ProductDescription></ProductDescription>
      <PriceTag></PriceTag>
        <ItemAmount ></ItemAmount>
    </section>
  );
}
export default CollectionDescAndPurchase;
