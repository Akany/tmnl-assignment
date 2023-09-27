const { faker } = require('@faker-js/faker');
const axios = require('axios');

const { lorem, vehicle, date } = faker;
const alerts = [];

for (let i = 0; i < 10; i++) {
    alerts.push({
        description: lorem.paragraph(),
        transactionId: vehicle.vin(),
        createdAt: date.anytime(),
        status: 'OPEN'
    });
}

alerts.forEach((alert) => {
    axios.post('http://localhost:3000/api/alerts', alert);
});

console.log(alerts);

