require('date-utils')
module.exports = {
    create: async (parent,args,{ db }) => {
        let id = await db.collection('post').find().sort({"id":-1}).limit(1).toArray()
        id = id[0] ? id[0].id+1 : 1
        let newDate = new Date(),time = newDate.toFormat('YYYY-MM-DD HH24:MI:SS')
        let post = {
            id: id,
            title: args.title,
            content: args.content,
            author: args.author,
            date: time,
            type: args.type
        }
        await db.collection('post').insertOne(post)
        return post
    }
}
