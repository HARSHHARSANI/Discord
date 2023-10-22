import userModels from "../../models/userModels.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const registerController = async (req, res) => {
  try {
    const { username, password, mail } = req.body;
    ///check If the User already Exist
    const userExist = await userModels.findOne({ mail: mail.toLowerCase() });
    if (userExist) {
      return res.status(409).send({
        success: false,
        message: "Email Already Exist , Please Try To Login",
      });
    }

    ///If User Doesnt Exist -> Encrypt the password and save it in the db

    const encryptedPassword = await bcrypt.hash(password, 10);

    const user = await new userModels({
      username,
      password: encryptedPassword,
      mail: mail.toLowerCase(),
    }).save();

    ///create the JWT token
    const token = jwt.sign(
      {
        userId: user._id,
        mail,
      },
      process.env.TOKEN_KEY,
      {
        expiresIn: "72h",
      }
    );

    res.status(201).send({
      success: true,
      message: "User Registered Successfully",
      userDetailas: {
        mail: user.mail,
        token: token,
        username: user.username,
      },
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error While Register",
      error,
    });
  }
};

export const loginController = async (req, res) => {
  try {
    const { mail, password } = req.body;

    ///checkiFUserExist
    const user = await userModels.findOne({ mail: mail.toLowerCase() });

    if (user && (await bcrypt.compare(password, user.password))) {
      ///send New Toekb
      const token = jwt.sign(
        {
          userId: user._id,
          mail,
        },
        process.env.TOKEN_KEY,
        {
          expiresIn: "72h",
        }
      );

      return res.status(200).send({
        success: true,
        message: "Login Successfully",
        userDetails: {
          mail: user.mail,
          token: token,
          username: user.username,
        },
      });
    }

    return res.status(400).send({
      success: false,
      message: "Invalid Credentials",
      error,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send({
      success: false,
      message: "Error While Login",
      error,
    });
  }
};
