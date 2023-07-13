import React, {useState, useEffect} from "react";
import CurrentInventoryList from "./CurrentInventoryList";
import ReorderInventoryList from "./ReorderInventoryList"

function InventoryManager() {

    const [inventory, setInventory] = useState([]);
    const [reorderedInventory, setReorderedInventory] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8001/inventory")
        .then(res => res.json())
        .then(inventoryData => setInventory(inventoryData));
    }, []);

    const newReorderedInventory = (item) => {
        setReorderedInventory(reorderedInventory => [...reorderedInventory, item]);
    }

    function removeInventory(deletedItem) {
        setReorderedInventory(reorderedInventory => reorderedInventory.filter(item => item.id!== deletedItem.id));
    }


    return(
        <div className="container">
            <CurrentInventoryList inventory={inventory} newReorderedInventory={newReorderedInventory} />
            <ReorderInventoryList reorderedInventory={reorderedInventory} removeInventory={removeInventory}/>
        </div>
    );
}

export default InventoryManager;