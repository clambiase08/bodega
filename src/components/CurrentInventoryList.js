import React from 'react'
import InventoryItemCard from './InventoryItemCard'

function CurrentInventoryList({inventory, newReorderedInventory}) {

    const inventoryItems = inventory.map(item => {
        return <InventoryItemCard key={item.id} item={item} handleInventoryChange={newReorderedInventory} />
    });

    return(
        <div id="current-inventory">
            <h2>Current Inventory</h2>
            <div>
                {inventoryItems}
            </div>
        </div>
    );
}

export default CurrentInventoryList;