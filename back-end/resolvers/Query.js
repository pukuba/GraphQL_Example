module.exports = {
    top10: async(parent,args,{ db })=> db.collection('post').find().sort({"id":-1}).limit(10).toArray(),
    getPost: async(parent,args,{ db })=> db.collection('post').findOne({id:args.id}),
}