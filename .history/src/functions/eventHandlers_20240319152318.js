import ConfirmDialog from "~/components/ConfirmDialog/ConfirmDialog";
import toast from "react-hot-toast";
import { interactData } from "./interactData";

// Increase
const handleIncrease = (
  currentQuantity,
  handleQuantityChange,
  itemID = null
) => {
  handleQuantityChange(currentQuantity + 1, itemID);
};

// Decrease
const handleDecrease = (
  currentQuantity,
  handleQuantityChange,
  itemID = null
) => {
  if (currentQuantity > 1) {
    handleQuantityChange(currentQuantity - 1, itemID);
  }
};

// Quantity Change
const handleQuantityChange = (e, setQuantity) => {
  const value = parseInt(e.target.value);
  if (!isNaN(value) && value >= 1) {
    setQuantity(value);
  }
};

// Check Item
const handleCheckItem = (itemID, isChecked, setCheckedItems) => {
  setCheckedItems((prevCheckedItems) => {
    if (isChecked) {
      return [...prevCheckedItems, itemID];
    } else {
      return prevCheckedItems.filter((id) => id !== itemID);
    }
  });
};

// Handle check all
const handleCheckAll = (isChecked, setCheckedItems, storeItems) => {
  if (isChecked) {
    const allItemIds = storeItems.map((item) => item.ID);
    setCheckedItems([...allItemIds]);
  } else {
    setCheckedItems([]);
  }
};

// Handle delete item
const handleDeleteItems = async (
  itemID,
  setStoreItems,
  storeItems,
  deleteURL
) => {
  const isConfirmed = await ConfirmDialog(
    "Are you sure you want to delete this item?"
  );

  if (isConfirmed) {
    // Delete item
    interactData(`${deleteURL}?itemID=${itemID}`, "DELETE", null, () => {
      const newStoreItems = storeItems.filter((item) => item.ID !== itemID);
      setStoreItems(newStoreItems);
      handleResponse("Item deleted successfully!", "success");
    });
  }
};

// Response
const handleResponse = (data, formType) => {
  if (data) {
    toast.success(`${formType} success`, {
      icon: "💛",
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
      duration: 1000,
      position: "top-center",
    });
  }
};

export {
  handleIncrease,
  handleDecrease,
  handleQuantityChange,
  handleResponse,
  handleCheckItem,
  handleCheckAll,
  handleDeleteItems,
};
