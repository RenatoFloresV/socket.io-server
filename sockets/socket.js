const { io } = require('../index');

// Socket messages
io.on('connection', (client) => {
    console.log('client connected');
    client.on('disconnect', () => {
        console.log('client disconnected');
    });

    client.on('message', (payload) => {
        console.log('message', payload);
        io.emit('message', {
            id: client.id,
            ...payload
        });
    });
});

