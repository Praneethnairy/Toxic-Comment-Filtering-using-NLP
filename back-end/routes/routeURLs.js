const express = require('express');
const {PythonShell} = require("python-shell");
const router = express.Router();

// router.get('/',(req,res)=>{
//     let options1 = {
//         scriptPath : "D:/D mini/ML/NLP/CDSAML/toxiccommentfilter/back-end/csv"
//     };
    
//     PythonShell.run("XGBoost.py",options1,(err,data)=>{
//         if(err) throw err;
        
//             console.log('Trained Successfully');
//             res.status(200).json({msg:"Success"});
//     });
// })

router.post('/postComments',(req,res)=>{
    let options = {
        scriptPath : "D:/D mini/ML/NLP/CDSAML/toxiccommentfilter/back-end/csv",
        args: [req.body.msg]
    };
    
    PythonShell.run("Predicted.py",options,(err,data)=>{
        if(err) throw err;
        if(data){
            var response = data
            console.log(response);
            res.status(200).json({output:response,msg:req.body.msg,time:req.body.time});
        }
    });

    
})

module.exports = router;