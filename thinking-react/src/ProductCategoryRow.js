
import { Product } from "./Products"
import './App.css';

export const ProductCategoryRow = () => {
    let newArr = {}
    const category = Product.map(el => el.category);
    // console.log(category)
    category.forEach(el => {
        newArr[el] = newArr[el] ? newArr[el] + 1 : 1;
        // if(newArr[0]!==newArr[count]){
        //     setCount(count + 1)
        //     newArr.push(el)
        // }else{
        //     setCount(count + 1)

        // }
    })
   let  category1 = Object.keys(newArr)
    console.log(Object.keys(newArr))



    return (
        <tr className="cate0">
            <th className="cate1" colSpan={2}>
                { category1[0] }
            </th>
            <th className="cate2">
                { category1[1] }
            </th>
        </tr>
    )
}