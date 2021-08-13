module.exports = (client,message) => {
 console.log(`Successfully logged in as ${client.user.tag}! `)
    client.user.setActivity("The Clash Of Codes", {type: "COMPETING"})
}