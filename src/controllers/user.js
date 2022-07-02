

const db = require('../data/models');
const jwt =require('jsonwebtoken');

module.exports={
    index: (req,res)=>{
        res.send('Hello World');
    },
    create: (req,res)=>{
        db.User.create(req.body)
        .then(user=>res.json("user created successfully"))
        .catch(err=>res.send(err));
    },
    login: (req,res)=>{
        db.User.findOne({where:{email:req.body.email}})
        .then(user=>{
            if(user){
                if(user.password === req.body.password){
                    const token = jwt.sign({email:req.body.email},'secret',{expiresIn:'1h'});
                    res.status(200).json({
                        meta:{
                            status:200,
                            message:'login successful'
                        },
                        data:{
                            token,
                            expireIn:'1h',
                            user
                        }
                    });
                }else{
                    res.json("incorrect password");
                }
            }else{
                res.json("user not found");
            }
        }
        ).catch(err=>res.send(err));
    },
    update: (req,res)=>{
        db.User.update(req.body,{
            where:{
                id:req.body.id
            }
        })
        .then(user=>res.json("user updated successfully"))
        .catch(err=>res.send(err));
    },
    delete: (req,res)=>{
        db.User.destroy({
            where:{
                id:req.body.id
            }
        })
        .then(user=>res.json("user deleted successfully"))
        .catch(err=>res.send(err));
    },
    getContacts: (req,res)=>{
        db.User.findOne({
            where:{
                id:req.body.id
            },
            include:['contacts']
        })
        .then(user=>{
            if(user){
                res.json(user.contacts);
            }else{
                res.json("user not found");
            }
        }
        ).catch(err=>res.send(err));
    }
}