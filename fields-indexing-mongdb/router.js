const router= require('express').Router();
const {createUser}= require("./controller");
router.post('/add-user',createUser);

module.exports=router;