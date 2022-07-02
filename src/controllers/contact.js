

const db = require('../data/models');

module.exports={
    index: (req,res)=>{
        res.send('Hello World Contacts');
    },
    create: (req,res)=>{
        db.Contact.create(req.body)
        .then(contact=>res.json("contact created successfully"))
        .catch(err=>res.send(err));
    },
    update: (req,res)=>{
        db.Contact.update(req.body,{
            where:{
                id:req.body.id,
                user_id:req.body.user_id
            }
        })
        .then(contact=>res.json("contact updated successfully"))
        .catch(err=>res.send(err));
    },
    delete: (req,res)=>{
        db.Contact.destroy({
            where:{
                id:req.body.id
            }
        })
        .then(contact=>res.json("contact deleted successfully"))
        .catch(err=>res.send(err));
    },
    getContact: (req,res)=>{
        db.Contact.findOne({
            where:{
                id:req.body.id
            }
        })
        .then(contact=>{
            if(contact){
                res.json(contact);
            }else{
                res.json("contact not found");
            }
        })
        .catch(err=>res.send(err));
    }
}