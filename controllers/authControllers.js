const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const signUp = async (req, res) => {
  try{
    const { email, password } = req.body;

    // check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists "});
    }
    //Hash Password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create New User
    const user = await User.create({
      email,
      password: hashedPassword,
     });

     // Generate Token
     const token = jwt.sign( 
      {id: user._id},
      process.env.JWT_SECRET,
      {expiresIn: "5d"}
     );

     // Send Response
    res.status(201).json({token});

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const Login = async (req, res) => {
  try {
 const { email, password } = req.body;

 // Check if user exists
 const user = await User.findOne({ email });
 if (!user) { 
  return res.status(400).json({ message: "user not found, please sign up" });
 }
  // Check Password
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).json({ message: "Wrong Password" });
  }
  // Generate Token
  const token = jwt.sign(
    { id: user._id },
    process.env.JWT_SECRET,
    { expiresIn: "5d" }
  );
  // Send Response
  res.status(200).json({ token });
} catch (error) {
  res.status(500).json({ error: error.message });
}
};


module.exports = { signUp, Login };