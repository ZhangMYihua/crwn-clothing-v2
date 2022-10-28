import SHOP_DATA from "../../shop-data.json";

const Shop = () => {
    return ( 
        <div>
            {SHOP_DATA.map((shop) => {
              return <h3>{shop.name}</h3>  
            })}
        </div>
     );
}

export default Shop;