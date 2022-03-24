import { ProductCategoryRow } from "./ProductCategoryRow";


export const ProductTable = () =>{
    return (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
              <ProductCategoryRow/>
          </tbody>
        </table>
      );
}