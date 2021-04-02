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
    console.log(input, typeof(input))
    try {
        const words = await Word.find({
            "name": {
                "$regex": input,
                "$options": "i"
            },
        }, {
            "name": true,
        }).limit(10);

        let result = {
            words,
            exist: words.length > 0 ? true : false
        }

        return res.status(200).json({
            status: 200,
            result
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