module.exports = (client, message, args) => {
     console.log(`Successfully logged in as ${client.user.tag}! `)
    client.user.setActivity(client.db.get(`status`))
}