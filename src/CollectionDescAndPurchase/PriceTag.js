const currentPrice = 250;
const previousPrice = 125;

function PriceTag() {
  return (
    <div>
      <p>${currentPrice}</p>
      <p>${previousPrice}</p>
      <div>{(previousPrice / currentPrice) * 100}%</div>
    </div>
  );
}
export default PriceTag;
