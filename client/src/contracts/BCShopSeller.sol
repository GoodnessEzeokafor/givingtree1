pragma solidity >=0.4.22 <0.9.0;
import './BCShopCourier.sol';

interface SellerInterface{
    function addSale(uint256 productID) external;
    function buyerReceiveProduct(uint256 saleID)external;
    function getProductPrice(uint256 productID) external view returns(uint256 price);
    function getSaleStatus(uint256 saleID) external view returns(string memory status);
}

contract BCShopSeller{
    struct Product{
        uint256 id;
        string sku;
        string name;
        string image;
        uint256 price;
        bool exists;
        address payable seller;
    }

    struct Sale{
        uint256 id;
        string sku;
        string status;
        uint256 amount;
        address buyer;
        bool exists;
        address payable seller;
    }

    uint256 public productCount = 0;
    uint256 public saleCount=0;
    mapping(uint256 => Product) products;
    mapping(uint256 => Sale) transactions;

    address courierAddress;

    constructor(address courierContractAddress) {
        courierAddress = courierContractAddress;
    }
    receive () external payable {}
    
    function increaseProductCount() internal {
        productCount += 1;
    }
    
    function increaseSaleCount() internal {
        saleCount += 1;
    }

    function addProduct(
        string memory _sku,
        string memory _name,
        string memory _image,
        uint256 _price
    )public{
        increaseProductCount();
        Product memory newProduct = Product(
            productCount,
            _sku,
            _name,
            _image,
            _price,
            true,
            msg.sender
        );
        products[productCount] = newProduct;
    }

    function getProduct(uint256 productID) external view returns(
         uint256 id,
        string memory sku,
        string memory name,
        string memory image,
        uint256 price,
        address seller
    ){
        require(products[productID].exists, "Product Not Found");
        Product storage product = products[productID];
        return (product.id, product.sku, product.name, product.image, product.price, product.seller);
    }

    function sendProductToCourier(uint256 productID, uint256 saleID) external {
        require(products[productID].exists, "Product Not Found");
        require(transactions[saleID].exists, "Transaction Not Found");
        Product storage product = products[productID];
        require(msg.sender == product.seller, "Product Seller Only Function");
        CourierInterface CourierContract = CourierInterface(address(courierAddress));
        CourierContract.startItemTranpost(product.sku);
        transactions[saleID].status = "In Transit";
    }
    function addSale(uint256 productID) external {
        require(products[productID].exists, "Product Not Found");
        Product storage product = products[productID];
        increaseSaleCount();
        Sale memory newSale = Sale(saleCount, product.sku, "Paid", product.price, tx.origin, true,
        product.seller);
        transactions[saleCount] = newSale;
    }
    function getSale(uint256 saleID) external view returns(uint256 id, string memory sku, string
        memory status, address buyer, address seller) {
        require(transactions[saleID].exists, "Transaction Not Found");
        Sale storage purchase = transactions[saleID];
        return (purchase.id, purchase.sku, purchase.status, purchase.buyer, purchase.seller);
    }

    function getSaleStatus(uint256 saleID) external view returns(string memory status) {
        require(transactions[saleID].exists, "Transaction Not Found");
        Sale storage purchase = transactions[saleID];require(tx.origin == purchase.buyer, "Product Buyer Only Function");
        return purchase.status;
        }
    function buyerReceiveProduct(uint256 saleID) external {
        require(transactions[saleID].exists, "Transaction Not Found");
        Sale storage purchase = transactions[saleID];
        require(tx.origin == purchase.buyer, "Product Buyer Only Function");
        purchase.seller.transfer(purchase.amount);
        purchase.status = "Delivered";
        }
}