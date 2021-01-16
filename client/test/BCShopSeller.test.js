const BCShopSeller = artifacts.require('./BCShopSeller.sol')

require('chai')
    .use(require('chai-as-promised'))
    .should()

    contract('BCShopSeller Smart Contract', ([deployer,account1,account2,account3]) => {
        let contract        
        before(async ()=>{
            contract = await BCShopSeller.deployed()       
        })
    
    
        describe('deployment', async() => {
            it('deploys successfully', async() => {
                const address = contract.address
                assert.notEqual(address, " ")
                assert.notEqual(address, null)
                assert.notEqual(address, 0x0)
                assert.notEqual(address,undefined)
            })
            // it("Should make first account an owner", async () => {   
            //   let owner =  contract.owner;
            //   console.log(contract)
            // //   console.log("owner", owner)
            // //   console.log("deployer", deployer)
            // //   assert.equal(owner, deployer);
            // });
            it("checks if product count is 0", async() => {
                const productCount = await contract.productCount()
                assert.equal(productCount,0)
            })
            it("checks if sell count is 0", async() => {
                const saleCount= await contract.saleCount()
                assert.equal(saleCount,0)
            })

         })
        //  describe("operations", async() => {
        //      it("Test startItemTranpost functionality", async()=> {
        //         const newDelivery = await contract.startItemTranpost(
        //             "Goodness Ezeokafor",
        //             {'from':account1}
        //         )
        //         await contract.startItemTranpost(
        //             "Jet",
        //             {'from':account2}
        //         )
        //         await contract.startItemTranpost(
        //             "Solidity",
        //             {'from':account3}
        //         )

        //         const itemCount = await contract.itemCount()
        //         // console.log(newDelivery)
        //         const result = newDelivery.logs[0].args
        //         // assert.equal(result['id'].toString(),itemCount) // test item count
        //         assert.equal(result['sku'].toString(),"Goodness Ezeokafor")        
        //         assert.equal(result['status'].toString(),"Send to Transport Courier from Buyer")
        //         assert.equal(result['location'].toString(),"Courer Office")
        //         assert.equal(result['exist'],true)
        //      })
        //      it("Test getItem functionality", async()=> {
        //         const delivery = await contract.getItem(2)
        //         // console.log(delivery)
        //         // const itemCount = await contract.itemCount()
        //         // // console.log(newDelivery)
        //         // const result = newDelivery.logs[0].args
        //         assert.equal(delivery.id.toString(),2) // test item count
        //         assert.equal(delivery.sku,"Jet")        
        //         assert.equal(delivery.status.toString(),"Send to Transport Courier from Buyer")
        //         assert.equal(delivery.location.toString(),"Courer Office")
        //         // assert.equal(delivery.exist,true)
        //      })
        //     it("Test changeLocation functionality", async() => {
        //         const location = await contract.changeItemLocation(
        //             1,
        //             "Jos",
        //             {'from':account1}
        //         )
        //         const result = location.logs[0].args
        //         assert.equal(result['status'].toString(),"On Way")
        //         assert.equal(result['location'].toString(),"Jos")
        //     })
        //     it("Test deliverItem functionality", async() => {
        //         const location = await contract.deliverItem(
        //             1,
        //             "Abuja",
        //             {'from':account1}
        //         )
        //         const result = location.logs[0].args
        //         assert.equal(result['status'].toString(),"Delivered")
        //         assert.equal(result['location'].toString(),"Abuja")
        //     })
        //     it("Test getItemStatus functionality", async() => {

        //     })
        //    it("Test getItemLocation functionality", async() => {

        //    })  
        //  })
    
        //  describe('Minting', async() => {
        //     it('Token is minted successfully', async() => {
        //         const price = await web3.utils.toWei('1', 'Ether').toString()
        //         let owner = await contract.owner();
    
        //         let token = await contract.addHouse("Mansion", price, "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/brewster-mcleod-architects-1486154143.jpg?crop=1.00xw:1.00xh;0,0&resize=480:*", {from : deployer})
    
        //         console.log(token)
        //         let tokens = await contract.totalSupply();
    
        //         console.log("Total supply of tokens ", tokens)
    
        //         assert.equal(tokens, 1)
    
    
            
        //     })
    
        //  })
    
    
    
    
        //  describe('buyHouse(transfer NFT)', async() =>{
        //      it("transfers NFT to buyer" , async()=>{
    
        //         const price = web3.utils.toWei('1', 'Ether').toString()
        //         // house = await contract.addHouse("Mansion", price, "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/brewster-mcleod-architects-1486154143.jpg?crop=1.00xw:1.00xh;0,0&resize=480:*", {from : deployer} )
        //         // console.log(house.logs[0].args)
        //         // newPrice = 
        //         // console.log(newPrice)
    
        //         houseCount = await contract.houseCount()
    
    
        //         // approved = await contract.approve(mycribb, houseCount)
        //         // await contract.setApprovalForAll(mycribb,true)
        //         // console.log(approved)
    
        //         // Reject, seller cant buy his own product
        //         await contract.buyHouse(houseCount, {from : deployer , value : price}).should.be.rejected
        //         // 
    
        //         // Testing buying of a house
        //         // getApprovedOwner = await contract.getApproved(houseCount)
        //         // console.log("This is the get approved owner of the token :  " , getApprovedOwner)
        //         const result = await contract.buyHouse(houseCount, {from : mycribb , value : price})
    
                
    
    
        //         console.log(result.logs[0].args)
    
        //         // // Ensures owner cannot buy his asset
    
        //         // await contract.buyHouse(houseCount, {from : buyers , value  :price}).should.be.rejected
    
        //         let newOwner= await contract.get_single_house(houseCount)
    
        //         let newTokenOwner = await contract.ownerOf(houseCount)
    
        //         console.log("THis is the approved owner of the token ", newTokenOwner)
        //         assert.equal(mycribb,newTokenOwner)
    
    
        //         // tokenOwner =  await contract.getOriginalOwner(houseCount)
    
        //         // console.log("This is the original owner of the token ", tokenOwner)
    
        //         // const event = result.logs[0].args
        //         // Check if buyHouse function changes ownership
        //         assert.equal(mycribb, newOwner["4"])
        //         // Check if the amount of registered houses updates
        //         assert.equal(houseCount,1)
        //         // check if price is correct
        //         // assert.equal(newPrice,price)
        //         // check if token has a correct id
        //         // assert.equal(event.tokenId.toNumber(), 1, "Id is correct")
                
        //      })
    
         
         
         
        // })
        
    
    //      describe('This is the indexing test', async () => {
    //         it('lists assets', async () =>{
    // const price = await web3.utils.toWei('1', 'Ether').toString()
            
           
    
    //          await contract.addHouse("SeaSide",price, "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/brewster-mcleod-architects-1486154143.jpg?crop=1.00xw:1.00xh;0,0&resize=480:*", {from : deployer} )
    //          await contract.addHouse("EmmaHouse",price, " https://odis.homeaway.com/odis/homepage/644873f3-544d-4bfb-b19b-a673308b7373.hw1.jpg", {from : deployer} )
    //          await contract.addHouse("GoodyHouse",price, " https://d2msmins3v3lzf.cloudfront.net/cObiYNtdeGwaRUrrd0XJqKjm", {from : deployer} )
    //          const houseCount = await contract.houseCount()
    
    //          assert.equal(4,houseCount.toString())
    
    //          total = await contract.totalSupply()
    //          assert.equal(total.toString(), houseCount.toString())
    
    //          newHouse =  await contract.get_single_house(2)
     
    //         //  await contract.buyHouse( 2, {from : buyers , value : price})
    //         //  checkOwner =  await contract.get_single_house(2)
    
    //         //  await contract.buyHouse( 2, {from : buyers , value : price}).should.be.rejected
    
    //         //  console.log(checkOwner["4"])
    //         //  console.log(checkOwner["3"])
    
    //         //  Ensures owner is given to buyers address
    //         //  assert.equal(checkOwner["4"], buyers)
             
    //          let asset
    //          let result = []
     
    //          for (var i= 1; i <=houseCount;  i++){
    //              asset = await contract.get_single_house(i)
    //              result.push(asset)
    //              console.log(asset)
    //          }
     
    //             //  let expected = ['kitchen','Parlour', 'Toilet', 'Room']
    //             //  assert.equal(result.join(","), expected.join(","))
    //             //  const event = parlour.logs[0].args
    //             //  console.log(event)
    
    
                
    
    
              
                
     
                
    //         } )
    
    
     
    //       })
    
        //   describe('Creating House', async() => {
        //       it('Creates a new House', async () =>{
        //         const price = await web3.utils.toWei('1', 'Ether').toString()
    
    
        //           house = await contract.addHouse("Bungalow", price, "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/brewster-mcleod-architects-1486154143.jpg?crop=1.00xw:1.00xh;0,0&resize=480:*" , {from:deployer})
                 
        //         //   console.log(house)
    
        
        //           houseCount = await contract.houseCount()
        //           houses = await contract.get_single_house(houseCount)
                 
        //         // Check if house count increases
        //           assert.equal(houseCount,5)
        //         //   Ensures values stored are correct
        //           assert.equal(houses["0"].toNumber(),houseCount)
        //           assert.equal(houses["1"], "Bungalow")
               
        //         //   assert.equal(houses["3"],  "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/brewster-mcleod-architects-1486154143.jpg?crop=1.00xw:1.00xh;0,0&resize=480:*")
        //           assert.equal(houses["4"], deployer)
    
        //           totalNFT  = await contract.totalSupply()
    
        //           assert.equal(totalNFT.toString(), houseCount)
        //           result = house.logs[0].args
        //           console.log("THis is the event emmitted from minting : ", result)
    
        //           assert.equal(result.from, '0x0000000000000000000000000000000000000000', "From is correct")
        //           assert.equal(result.to, deployer, "to is correct")
        
        //       })
    
        //       describe('checks the owner of an NFT', async() => {
        //           it("Owner is correct", async() =>{
        //               houseCount = await contract.houseCount()
    
    
        //               owner = await contract.ownerOf(houseCount)
        //               console.log(owner)
    
        //               assert.equal(owner,deployer, "Owner is correct after minting")
    
                     
        //           })
                
        //       })
              
        //       describe('transfer of NFT functionality', async() => {
        //           it("Owner is correct", async() =>{
        //               houseCount = await contract.houseCount()
    
    
        //               owner = await contract.ownerOf(houseCount)
        //               console.log(owner)
    
        //               newOwner  = await contract.transferFrom(deployer,mycribb,houseCount)
        //               console.log(newOwner)
    
        //               newOwnerUpdated = await contract.ownerOf(houseCount)
        //               console.log("this is the new owner", newOwnerUpdated)
    
        //               assert.equal(newOwnerUpdated,mycribb, "Owner is correct after minting")
    
                     
        //           })
                
        //       })
        //   })
    
    
    })