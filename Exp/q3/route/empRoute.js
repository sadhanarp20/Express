const express = require('express');
const emp = require('../controller/empController.js');
const router = express.Router();

router.get("/",emp.getEmp);
router.post("/add",emp.addEmp);
router.put("/update/:id",emp.updateEmp);
router.delete("/delete/:id",emp.deleteEmp)

module.exports=router;