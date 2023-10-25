const Poste = require('../models/postModel')

module.exports = {
    createPoste : ((req, res) => {
        try {
            const poste = new Poste(req.body)
            poste.save()
            res.status(201).send({message:"OK", poste})
        } catch (error) {
            res.status(500).send(error)
        }
    }),

    getPoste : (async(req,res) => {
        try {
            const data = await Poste.find()
            res.status(200).send({message:"OK", data})
        } catch (error) {
            res.status(500).send(error)
        }
    }),

    updatePoste : (async(req,res) => {
        try {
            await Poste.findByIdAndUpdate({_id:req.params.id},{$set:req.body})
            const data = await Poste.findById({_id:req.params.id})           
            res.status(202).send({message:"Poste Updated", data})
        } catch (error) {
            res.status(500).send(error)
        }
    }),

    deletePoste : (async(req,res) => {
        try {
            const data = await Poste.findByIdAndRemove({_id:req.params.id})            
            res.status(201).send({message:"Poste Deleted", data})
        } catch (error) {
            res.status(500).send(error)
        }
    })
}