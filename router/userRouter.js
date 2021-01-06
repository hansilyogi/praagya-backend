"use strict";
//created by Hatem Ragap

const express = require("express");
const userRouter = new express.Router();
const userController = require("../controller/userController");
const uploadController = require("../controller/uploadController");
var request = require('request');
const multer = require("multer");
//img path
// http://localhost:5000/uploads/users_profile_img/1582645366303-apple-logo.png
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    if (file.fieldname == "img") {
      cb(null, "uploads/users_profile_img");
    } else {
      cb(null, "uploads/users_cover_img");
    }
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });
userRouter.post("/create", uploadController.uploadSchoolLogo.single("schoolLogo") ,userController.createUser); // /api/user/create
userRouter.post("/login", userController.loginUser); // /api/user/login
userRouter.post("/update_password", userController.update_password); // /api/user/login
userRouter.post("/update_bio_and_name", userController.update_bio_and_name); // /api/user/login
userRouter.post("/verifyUser", userController.verifyUser); // /api/user/login
userRouter.post(
  "/get_likes_posts_comments_counts",
  userController.get_likes_posts_comments_counts
); // /api/user/login
userRouter.post("/get", userController.getUser); // /api/user/get
userRouter.post("/webget", userController.getUserWeb); // /api/user/get
userRouter.post("/getUserByEmail", userController.getUserByEmail); // /api/user/get
userRouter.post("/getUsers", userController.getUsers); // /api/user/get
userRouter.post("/img", upload.single("img"), userController.addUserImg);
userRouter.post(
  "/coverimg",
  upload.single("cover"),
  userController.addCoverImg
);
userRouter.post("/update_bio", userController.update_bio);
userRouter.post("/update_user_token", userController.updateAndAddUserToken);
// userRouter.get("/testing", userController.testing);
userRouter.post("/block_user", userController.blockUser);
userRouter.post("/block_user_list", userController.getBlockUser);
userRouter.post("/getuserId",userController.getUserId);
userRouter.post("/getuserMobile",userController.getUserMobile);
userRouter.post("/forgetpassword",userController.forget_password);
userRouter.post("/getdetails",userController.getdetails);
userRouter.post("/getUserMobiletest",userController.getUserMobiletest);
userRouter.post("/userblockbyuser",userController.userBlockbyUser);
userRouter.post("/getuserbyfilter",userController.getuserbyfilter);
//userRouter.post("/getusertest",userController.getusertest);
userRouter.post("/userUnblockbyUser",userController.userUnblockbyUser);
userRouter.post("/blockedByUser",userController.userBlock);
userRouter.post("/getMyBlockUserList",userController.getUserBlockList);
userRouter.post("/deleteBlock",userController.deleteBlock);
userRouter.post("/removeBlockUser",userController.userBlockRemove);
userRouter.post("/sendnotification",userController.sendnotification);
// userRouter.post("/deleteAll",userController.removeAllUsers);
module.exports = userRouter;
