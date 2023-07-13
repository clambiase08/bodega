import React from 'react'
import InventoryItemCard from './InventoryItemCard'

function ReorderInventoryList({reorderedInventory, setReorderedInventory, removeInventory}) {

    const reorderedInventoryItems = reorderedInventory.map((item) => {
        return <InventoryItemCard key={item.id} item={item} setReorderedInventory={setReorderedInventory} handleInventoryChange={removeInventory} />
    });

    return(
        <div id="reorder-container">
            <h2>Reorder</h2>
            <div>
                {reorderedInventoryItems}
            </div>
        </div>
    );
}

export default ReorderInventoryList;