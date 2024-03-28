const express = require("express");
const z = require("zod");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const jwtPassword = "123445";
const app = express();

/*Database connection */
mongoose.connect(
  "mongodb+srv://admin:Asdfghjkl123@cluster0.sfkfxnu.mongodb.net/Course-assignment"
);

/*mongoose Schema */

/*this is how I will access the Admin collection in thee Course-assignment Databases */
const AdminSchema = mongoose.model("Admin", {
  username: String,
  password: String,
});

const UserSchema = mongoose.model("User", {
  username: String,
  password: String,
});

const courseSchema = mongoose.model("Course", {
  title: String,
  price: String,
  purchase: Boolean,
});

/*Zod Schema*/
const usernameSchema = z.string().email();
const passwordSchema = z.string();
const titleSchema = z.string();
const priceSchema = z.string();
const purchaseSchema = z.boolean();
/*for catching upcoming body json using req.body */
app.use(express.json());

/*Admin Routes */
/*for signing up the admin */

app.post("/admin/signup", async (req, res) => {
  try {
    const username = req.body.username;
    const password = req.body.password;

    const responseUsername = usernameSchema.safeParse(username);
    const responsePassword = passwordSchema.safeParse(password);

    /*input checking conditions */
    if (!responseUsername.success || !responsePassword.success) {
      return res.json({
        msg: "Invalid inputs. Please check inputs.",
      });
    }

    // Create the admin user
    const admin = await AdminSchema.create({
      username: username,
      password: password,
    });

    res.json({
      msg: "Signed up successfully",
      admin: admin, // Optionally return the created admin user
    });
  } catch (error) {
    console.error("Error signing up admin:", error);
    res.status(500).json({
      msg: "An error occurred while signing up admin",
      error: error.message, // Optionally include the error message in the response
    });
  }
});

/*For admin login */
app.post("/admin/login", async (req, res) => {
  try {
    const username = req.body.uname;
    const password = req.body.pass;

    const responseUsername = usernameSchema.safeParse(username);
    const responsePassword = passwordSchema.safeParse(password);

    /*input checking conditions */
    if (!responseUsername.success || !responsePassword.success) {
      return res.json({
        msg: "invalid inputs, Please check inputs",
      });
    }

    const UserExists = await AdminSchema.findOne({
      username: username,
      password: password,
    });
    if (!UserExists) {
      return res.json({
        msg: "admin doesnt exists , Please proceeed to sign at /admin/signup",
      });
    }
    const token = jwt.sign({ username: username }, jwtPassword);
    res.json({
      token: token,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      msg: "Something is up",
      error: error.message, // Optionally include the error message in the response
    });
  }
});
/*For creating courses by admin */
app.post("/admin/courses", async (req, res) => {
  try {
    const token = req.headers.authorization;

    const title = req.body.title;
    const price = req.body.price;
    const purchase = req.body.purchase;
    const titleResponse = titleSchema.safeParse(title);
    const priceResponse = priceSchema.safeParse(price);
    const purchaseResponse = purchaseSchema.safeParse(purchase);
    /*verification of admin */
    const verification = jwt.verify(token, jwtPassword);

    if (!verification) {
      return res.json({
        msg: "Denied User access",
      });
    }

    if (
      !titleResponse.success ||
      !priceResponse.success ||
      !purchaseResponse.success
    ) {
      return res.json({
        msg: "Check the input of proper course structure",
      });
    }

    /*adding course into the database under Course table/collection */
    const newCourse = await courseSchema.create({
      title: title,
      price: price,
      purchase: purchase,
    });
    res.json({
      msg: "Course added by admin successfully",
      id: newCourse._id,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      msg: "Something is up",
      error: error.message, // Optionally include the error message in the response
    });
  }
});

/*Admin accessing all the courses */
app.get("/admin/courses", async (req, res) => {
  try {
    const token = req.headers.authorization;
    const verification = jwt.verify(token, jwtPassword);

    if (!verification) {
      return res.json({
        msg: "Denied User access",
      });
    }

    const getbackALLCourse = await courseSchema.find();
    res.json(getbackALLCourse);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      msg: "Something is up",
      error: error.message, // Optionally include the error message in the response
    });
  }
});

/*user Routes  */
/*User signing up into User Table / collection in Course-assignment */
app.post("users/signup", async (req, res) => {
  const username = req.body.username 
  const password = req.body.password 
  
  const userResponse = usernameSchema.safeParse(username)
  const passResponse = passwordSchema.safeParse(password)
  
  if (!userResponse.success || !passResponse.success) {
    return res.json({
      msg: 'Please check your inputs'
    })
  }
  
  const NewUser = await UserSchema.create({
    username: username,
    password: password
  })
  
  res.json({
    msg: 'user Created successfully',
    User: NewUser
  })
});

app.post('/users/login', async (req, res) => {
  const username = req.body.username 
  const password = req.body.password 

  const userResponse = usernameSchema.safeParse(username)
  const passResponse = passwordSchema.safeParse(password)

  if (!userResponse.success || !passResponse.success) {
    return res.json({
      msg: 'Please check your inputs'
    })
  }

  const UserExists = await UserSchema.findOne({username : username , password : password})

  if (!UserExists) {
    return res.json({
      msg: "User doesn't exists , please head onto /users/signup for signing up"
    })
  }

  const token = jwt.sign({ username: username }, jwtPassword)
  
  res.json({
    token: token,
  })
})


app.listen(3000, () => {
  console.log("Server running on port 3000");
});
