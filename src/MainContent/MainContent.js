import CollectionGallery from "../CollectionGallery/CollectionGallery";
import CollectionDescAndPurchase from "../CollectionDescAndPurchase/CollectionDescAndPurchase";
import "./MainContent.scss"
function MainContent() {
  return (
    <div className="main-content">
      <CollectionGallery></CollectionGallery>
      <CollectionDescAndPurchase></CollectionDescAndPurchase>
    </div>
  );
}
export default MainContent;
