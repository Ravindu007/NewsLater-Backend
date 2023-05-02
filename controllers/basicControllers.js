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
  const response = await fetch(`https://us21.api.mailchimp.com/3.0/lists/${process.env.LIST_ID}`,{
    method:"POST",
    headers:{
      'Authorization':`Bearer ${process.env.MAILCHIMP_API}`
    },
    body:jsonData
  })
  const json = await response.json()

  if(response.ok){
    res.status(200).json({msg:"ok"}) //sending res to the client side 
  }
}

module.exports = {getAllData}