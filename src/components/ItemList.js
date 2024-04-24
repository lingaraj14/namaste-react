import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../store/cartSlice";
import { CDN_URL } from "../utils/constants";

const ItemList = ({ items, dummy, page }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    // Dispatch an action
    dispatch(addItem(item));
  };

  const handleRemoveItem = (item) => {
    const finalCartItem = items.filter(
      (el) => el.card.info.id !== item.card.info.id
    );
    dispatch(removeItem(finalCartItem));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          data-testid="foodItems"
          key={item.card.info.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span>
                - ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 p-4">
            <div className="absolute">
              {page === "cart" ? (
                <>
                  <button
                    className="p-2 mx-16 rounded-lg bg-black text-white shadow-lg"
                    onClick={() => handleRemoveItem(item)}
                  >
                    Remove -
                  </button>
                </>
              ) : (
                <>
                  <button
                    className="p-2 mx-16 rounded-lg bg-black text-white shadow-lg"
                    onClick={() => handleAddItem(item)}
                  >
                    Add +
                  </button>
                </>
              )}
            </div>
            <img src={CDN_URL + item.card.info.imageId} className="w-full" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
