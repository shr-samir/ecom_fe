import { useContext, useEffect, useState } from "react";
import { ProductItem, Title } from "../components";
import { Product, ShopContext } from "../context/ShopContext";
import { assets } from "../assets/frontend_assets/assets";

const Collection = () => {
  const shopContext = useContext(ShopContext);

  const [showFilter, setShowFilter] = useState(false);

  const [filterProducts, setFilterProducts] = useState<Product[]>([]);

  const [category, setCategory] = useState<string[]>([]);

  const [subCategory, setSubCategory] = useState<string[]>([]);

  const toggleCategory = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const toggleSubCategory = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  if (!shopContext) {
    return <div className="flex justify-center items-center">Loading ...</div>;
  }

  const applyFilter = () => {
    let productsCopy = shopContext?.products.slice();
    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        category.includes(item.category)
      );
    }
    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }
    setFilterProducts(productsCopy);
  };

  useEffect(() => {
    applyFilter();
  }, [category, subCategory]);

  const handleShowFilter = () => {
    setShowFilter(!showFilter);
  };

  return (
    <div className="flex flex-col sm:flex-row gap-2 sm:gap-10 sm:items-start border-t pt-8">
      {/* filter side */}
      <div className="flex flex-col gap-10 w-56 ">
        <h5
          className="text-xl font-medium flex gap-3"
          onClick={handleShowFilter}
        >
          FILTERS
          <img
            src={assets.dropdown_icon2}
            alt=""
            className={showFilter ? "rotate-90" : ""}
          />
        </h5>

        <div
          className={`border border-gray-300 px-6 py-4  sm:block  ${
            showFilter ? "" : "hidden"
          }`}
        >
          <h6 className="font-medium text-sm mb-3">CATEGORIES</h6>
          <div className="flex flex-col gap-2 text-sm font-light">
            <div className="flex gap-2">
              <input
                type="checkbox"
                name="men"
                id="men"
                value={"Men"}
                onChange={toggleCategory}
              />
              <label htmlFor="men">Men</label>
            </div>
            <div className="flex gap-2">
              <input
                type="checkbox"
                name="women"
                id="women"
                value={"Women"}
                onChange={toggleCategory}
              />
              <label htmlFor="women">Women</label>
            </div>
            <div className="flex gap-2">
              <input
                type="checkbox"
                name="kids"
                id="kids"
                value={"Kids"}
                onChange={toggleCategory}
              />
              <label htmlFor="kids">Kids</label>
            </div>
          </div>
        </div>

        <div
          className={`border border-gray-300 px-6 py-4  sm:block  ${
            showFilter ? "" : "hidden"
          }`}
        >
          <h6 className="font-medium text-sm mb-3">TYPE</h6>
          <div className="flex flex-col gap-2 text-sm font-light">
            <div className="flex gap-2">
              <input
                type="checkbox"
                name="topwear"
                id="topwear"
                value={"Topwear"}
                onChange={toggleSubCategory}
              />
              <label htmlFor="topwear">Topwear</label>
            </div>
            <div className="flex gap-2">
              <input
                type="checkbox"
                name="bottomwear"
                id="bottomwear"
                value={"Bottomwear"}
                onChange={toggleSubCategory}
              />
              <label htmlFor="bottomwear">Bottomwear</label>
            </div>
            <div className="flex gap-2">
              <input
                type="checkbox"
                name="winterwear"
                id="winterwear"
                value={"Winterwear"}
                onChange={toggleSubCategory}
              />
              <label htmlFor="winterwear">Winterwear</label>
            </div>
          </div>
        </div>
      </div>

      {/* Collection side */}
      <div className="flex flex-col gap-10 w-full">
        <div className="flex justify-between items-start">
          <div className="text-sm">
            <Title text1="ALL" text2="COLLECTIONS" />
          </div>
          <select
            id="sort"
            className="outline-none border hover:border-2 px-3 py-2 cursor-pointer"
          >
            <option value="most-relevant">Most Relevant</option>
            <option value="low-high">Low to High</option>
            <option value="high-low">High to Low</option>
          </select>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
          {filterProducts.length === 0 ? (
            <div>No items</div>
          ) : (
            filterProducts.map((item, index) => (
              <ProductItem
                key={index}
                id={item._id}
                image={item.image}
                name={item.name}
                price={item.price}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Collection;
