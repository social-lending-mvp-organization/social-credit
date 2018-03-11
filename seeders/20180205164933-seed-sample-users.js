module.exports = {
  up: queryInterface => queryInterface.bulkInsert('users', [
    {
      firstName: 'Sagar',
      lastName: 'Gugwad',
      socialScore: 50,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      firstName: 'Saurav',
      lastName: 'Sahu',
      socialScore: 50,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      firstName: 'Souradeep',
      lastName: 'Nanda',
      socialScore: 50,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      firstName: 'Nidhi',
      lastName: 'Jagadeesha',
      socialScore: 50,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      firstName: 'Shachi',
      lastName: 'Mathur',
      socialScore: 50,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      firstName: 'Kshipra',
      lastName: 'Shetty',
      socialScore: 50,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      firstName: 'Michael',
      lastName: 'Stevens',
      socialScore: 50,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      firstName: 'Derek',
      lastName: 'Miller',
      socialScore: 50,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      firstName: 'Rhett',
      lastName: 'McLaughlin',
      socialScore: 50,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      firstName: 'Charles',
      lastName: 'Lincoln Neal',
      socialScore: 50,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]),
  down: queryInterface => queryInterface.bulkDelete('users'),
};
