import { SearchBar } from "./SearchBar"
import { ProductTable } from "./ProductTable"
import './App.css';

export const FilterableProductTable = () => {

    return <div className="FilterableProductTable">
        <SearchBar/>
        <ProductTable/>
        </div>
}