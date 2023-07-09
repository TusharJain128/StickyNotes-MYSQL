const db = require("../database/db")


module.exports.createNotes = async function(req,res){
    try {
        let data = req.body;
        let savedData = await db.notes.create(data)

        res.status(201).send({status: true, message: savedData})
    } 
    catch (error) {
        return res.status(500).send({status:false, message: error.message})
    }
}


module.exports.getNotes = async function(req,res){
    try {
        let getData = await db.notes.findAll({ where: { isDeleted: false } })
        res.status(200).send({status:true, data:getData})
    } 
    catch (error) {
        return res.status(500).send({status:false, message: error.message})
    }
}


module.exports.deleteNotes = async function(req,res){
    try {
        let id = req.params.id
        const deleteData = await db.notes.update(
            { isDeleted: true },
            { where: { id: id, isDeleted: false } }
        );

        if (deleteData === 0) {
            return res.status(404).send({ status: false, message: 'Note not found' });
        }
        
        res.status(200).send({status:true,message:"data deleted successfully"})
    } 
    catch (error) {
        return res.status(500).send({status:false, message: error.message})
    }
}