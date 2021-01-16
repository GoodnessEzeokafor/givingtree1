pragma solidity >=0.4.22 <0.9.0;

import './BCShopSeller.sol';
import './BCShopCourier.sol';

contract BCShopBuyer {
address payable sellerAddress;
SellerInterface SellerContract;
CourierInterface CourierContract;
    constructor(address payable _sellerAddress, address courierAddress) {
        sellerAddress = _sellerAddress;
        SellerContract = SellerInterface(_sellerAddress);
        CourierContract = CourierInterface(courierAddress);
    }
    function depositProductPurchase(uint256 productID) external payable {
        uint256 price = SellerContract.getProductPrice(productID);
        require(msg.value == price, "Amount not equvalent to product Price");
        (bool isSuccess, ) = sellerAddress.call{value: msg.value}("");
        require(isSuccess, "Product Deposit Transfer Failed.");
        SellerContract.addSale(productID);
    }
    function receiveItem(uint256 saleID) external {
        SellerContract.buyerReceiveProduct(saleID);
    }
    function checkItemStatus(uint256 saleID) external view returns(string memory status) {
        return SellerContract.getSaleStatus(saleID);
    }
    function checkCourierStatus(uint256 itemID) external view returns(string memory status) {
        return CourierContract.getItemStatus(itemID);
    }
    function checkCourierLocation(uint256 itemID) external view returns(string memory location) {
        return CourierContract.getItemLocation(itemID);
    }
}