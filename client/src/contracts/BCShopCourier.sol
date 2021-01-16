// pragma solidity ^0.5.16;
pragma solidity >=0.4.22 <0.9.0;
/**
NOTE VERSION SPECIFIED SHOULD BE THE SAME SPECIFIED IN truffle-config.js
 */
interface CourierInterface{
function startItemTranpost(string calldata _sku) external;    
function getItemStatus(uint256 itemD) external view returns(string memory status);
function getItemLocation(uint256 itemID) external view returns(string memory location);
}

contract BCShopCourier{
    struct Item{
        uint256 id;
        string sku;
        string status;
        string location;
        uint timestamp;
        bool exists;
    }

    uint256 public itemCount=0;
    mapping(uint256 => Item) deliveries;
    event startItemEvent(
        uint256 id, 
        string sku,
        string status,
        string location,
        uint timestamp, 
        bool exist);

    event locationChanged(
        string status,
        string location
    );
    event deliverItemEvent(
        string status,
        string location
    );
    function increateItemCount() internal{
        itemCount += 1;
    }
    function startItemTranpost(string calldata _sku)external{
        increateItemCount();
        Item memory newDelivery = Item(
            itemCount,
            _sku,
            "Send to Transport Courier from Buyer",
            "Courer Office",
            block.timestamp,
            true
        );
        deliveries[itemCount] = newDelivery;
        emit startItemEvent(
            newDelivery.id,
            newDelivery.sku,
            newDelivery.status,
            newDelivery.location,
            newDelivery.timestamp,
            newDelivery.exists
        );
    }
    function getItem(uint256 itemID) external view returns(
        uint256 id,
        string memory sku,
        string memory status,
        string memory location,
        uint timestamp
    ){
        require(deliveries[itemID].exists, "Item Not Found");
        Item storage item = deliveries[itemID];
        return(
            item.id,
            item.sku,
            item.status,
            item.location,
            item.timestamp
        );
    }


    function changeItemLocation(
        uint256 itemID,
        string memory city
    ) external{
        require(deliveries[itemID].exists, "Item Not Found");
        Item storage item = deliveries[itemID];
        item.status = "On Way";
        item.location = city;
        item.timestamp = block.timestamp;
        emit locationChanged(
            item.status,
            item.location
        );
    }

    function deliverItem(
        uint256 itemID,
        string memory city
    )external{
        require(deliveries[itemID].exists, "Item Not Found");
        Item storage item = deliveries[itemID];
        item.status = "Delivered";
        item.location = city;
        item.timestamp = block.timestamp;
        emit deliverItemEvent(
            item.status,
            item.location
        );
    }

    function getItemStatus(uint256 itemID) external view returns(string memory status){
        require(deliveries[itemID].exists, "Item Not Found");
        return deliveries[itemID].status;
    }

    function getItemLocation(uint256 itemID) external view returns(string memory location) {
        require(deliveries[itemID].exists, "Item Not Found");
        return deliveries[itemID].location;
    }

}