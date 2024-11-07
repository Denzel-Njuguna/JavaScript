const eventemitter = require('events')

const custom = new eventemitter()

custom.on('joinchat',(username)=>{
    console.log(`${username} joined the chat `)
})
custom.on('leftchat',(username)=>{
    console.log(`${username} left the chat`)
})
custom.emit('joinchat','jason')
custom.emit('leftchat','jason')