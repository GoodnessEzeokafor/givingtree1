const BCShopCourier = artifacts.require("BCShopCourier");
const BCShopSeller = artifacts.require("BCShopSeller");
const BCShopBuyer = artifacts.require("BCShopSeller");

module.exports = async(deployer) => {
  let deployBCShopCourier = await deployer.deploy(BCShopCourier)
                        .then(async(courier) => {
                          // console.log(data)
                            let deployBCShopSeller = await deployer.deploy(BCShopSeller, courier.address)
                                                                    .then(async(seller) => {
                                                                      let deployBCShopBuyer = await deployer.deploy(BCShopBuyer, [seller.address, courier.address])
                                                                    })

                        })
// console.log()

}
// module.exports = function(deployer) {
//   deployer.deploy(Asset);
// };
