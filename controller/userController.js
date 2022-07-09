import dotenv from "dotenv";
dotenv.config();

import initMB from "messagebird";
const messagebird = initMB(process.env.MESSAGEBIRD_API_KEY);

class UserController {
  //Send the otp to user
  static userLogin = async (req, res) => {
    const { phoneNumber } = req.body;
    let newPhoneNumber = "91" + phoneNumber;
    var params = {
      tamplate: "Your otp is %token",
      timeout: 300,
    };
    messagebird.verify.create(newPhoneNumber, params, (err, response) => {
      if (err) {
        //When your phoneNumber is not valid
        console.log(err.message);
      }
      console.log(response);
      res
        .status(200)
        .json({ message: "Your otp is Succesfully", id: response.id });
    });

    res.json({ message: "otp sent successfully" });
  };

  //Veryfy the otp Is correct or not
  static veryfyOtp = async (req, res) => {
    const { id, otp } = req.body;
    messagebird.verify(id,otp,(err,response) =>{
      if(err){
        return console.log(err.message);
      }
      console.log("successfully varifyed");
    });
  };
}
export default UserController;
