const Word = require('../model/word');

async function list(req, res){
    try {
        const words = await Word.find({});
        
        res.status(200).json({
            status: 200,
            result: words
        })
    } catch (e) {
        return res.status(400).json({
            status: 400,
            message: e.message
        })
    }
}

async function searchPartial(req, res){
    const { input } = req.body;

    try {
        const words = await Word.find({
            "name": {
                "$regex": input,
                "$options": "i"
            }
        }).limit(10);

        return res.status(200).json({
            status: 200,
            result: words
        })

    } catch (e) {
        return res.status(400).json({
            status: 400,
            message: e.message
        })
    }
}

async function searchFull(req, res){
    try {

    } catch (e) {
        return res.status(400).json({
            status: 400,
            message: e.message
        });
    }
}

module.exports = {
    list,
    searchPartial,
    searchFull,
}