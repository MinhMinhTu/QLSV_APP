const userModel = require('../models/User');
const StudenModel = require('../models/Product')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
module.exports = {
    authenticate: function (req, res, next) {
        userModel.findOne({ username: req.body.username }, function (err, userInfo) {
            if (userInfo === null) {
                res.status(404).send({
                    message : "not found user"
                })
                next(err);
            } else {
                if (req.body.token || req.body.password === userInfo.password) {                  
                    const token = jwt.sign({ id: userInfo._id }, req.app.get('secretKey'), { expiresIn: '1h' });
                    res.json({token : token})
                    // res.json({ status:true, message: "user found!!!", data: { user: userInfo, token: token } });
                } else {
                    res.status(500).send({
                        message : "password wrong"
                    })
                }
            }
        });
    },
    getOneStudens : async function (req, res, next){
        const id = req.params.id;
        await StudenModel.findOne({_id: id})
                        .then(studen => res.json(studen))
    },
    getStudens : async function(req, res, next) {
        StudenModel.find()
                        .then(studen=> {
                            res.json(studen)
                        }).catch(err => {
                            res.status(400).send({
                                message : "not found Studen" || err.message
                            })
                        })
        
    },
    postStuden : function (req, res , next) {
        if(req.body.name === '' || req.body.email === '' || req.body.gender === '' ){           
            res.status(404).send({
                message : 'request empty'
            })
            return;
        }

        const Student = new StudenModel({
            name : req.body.name,
            email : req.body.email,
            gender : req.body.gender
        })
        Student.save();
    },
    deleteStuden: async function(req, res, next) {
        const id = req.params.id;
        StudenModel.findByIdAndRemove(id)
            .then(Studen =>{
                if(!Studen){
                    res.status(404).send({
                        message : `Not found Studen from ${id}`
                    })
                }
                res.status(200).json(Studen)
            }).catch(err=>{
                if(err.kind === 'ObjectId'){
                    return res.status(403).send({
                        message : `Not found Studen from ${id}`
                    })
                }
                return res.status(500).send({
                    message : `Cannot Delete Studen from ${id}`
                })
            })


    },
    putStuden: async function(req, res, next) {
        const id = req.params.id;
        StudenModel.findByIdAndUpdate(id, {
            name : req.body.name,
            email: req.body.email,
            gender : req.body.gender
        })
            .then(Studen =>{
                if(!Studen){
                    res.status(404).send({
                        message : `Not found Studen from ${id}`
                    })
                }
                res.status(200).send({
                    message : "Studen delete is successfully!"
                })
            }).catch(err=>{
                if(err.kind === 'ObjectId'){
                    return res.status(403).send({
                        message : `Not found Studen from ${id}`
                    })
                }
                return res.status(500).send({
                    message : `Cannot Delete Studen from ${id}`
                })
            })
    }
}