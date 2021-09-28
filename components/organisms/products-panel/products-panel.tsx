import NavBar from "../../molecules/navbar/navbar";
import AddSection from "../../molecules/add-section/add-section";
import CategoriesSection from "../../molecules/categories-section/categories-section";
import LoginButton from "../../atoms/login/login";
export default function ProductsPanel() {

    return (
        <div className="products-panel">
            
            <NavBar />
            <AddSection />
            <CategoriesSection/>
        </div>
    );
}