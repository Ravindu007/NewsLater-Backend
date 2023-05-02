const getAllData = async(req, res) => {
  var firstName = req.body.firstName 
  var lastName = req.body.lastName
  var email = req.body.email

  //create an object 
  var data = {
    members:[
      {
        email_address:email,
        status:"subscribed",
        merge_fields:{
          FNAME:firstName,
          LNAME:lastName
        }
      }
    ]
  }

  // convert js into JSON 
  var jsonData = JSON.stringify(data)

  // make a post request to mailchimp 
  try{
      // const response = await fetch(`https://us21.api.mailchimp.com/3.0/lists/9e65659159`,{
      // method:"POST",
      // headers:{
      //   'Authorization':`Bearer 91ee1934c1c0fb1d3302ab9cf97e76b6-us21`
      // },
      // body:jsonData
      // })
      // const json = await response.json()

      // if(response.ok){
      // }
      
      res.status(200).json({msg:"ok"}) //sending res to the client side 
  }catch(error){
    res.status(400).json({error:error.message})
  }
}

module.exports = {getAllData}