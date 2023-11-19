const express=require('express');
const {getHomepage,check,hello, login,postCreateUser,userList,updateUser,putUpdateUser}=require('../controllers/homeController')
const router = express.Router();
router.get('/',getHomepage)
router.get('/check', check)
router.get('/hello',hello)
router.get('/login',login)
router.post('/create-user',postCreateUser)
router.get('/list',userList)
router.get('/update/:id',updateUser)
router.post('/update-user',putUpdateUser)
module.exports=router;