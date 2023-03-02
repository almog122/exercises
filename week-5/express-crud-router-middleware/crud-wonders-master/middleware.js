module.exports = {
    floorNum(req, res , next){
        res.send(parseInt(req.body.value))
    }
}