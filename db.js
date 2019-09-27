const Sequelize = require('sequelize');
const { STRING, UUID, UUIDV4 } = Sequelize;

const conn = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/to_do_app_review');

const Prof = conn.define('prof', {
  id: {
    type: UUID,
    primaryKey: true,
    defaultValue: UUIDV4,
    allowNull: false,
  },
  name: STRING
});

const Thomas = conn.define('thomas', {
  id: {
    type: UUID,
    primaryKey: true,
    defaultValue: UUIDV4,
    allowNull: false,
  },
  name: STRING
});

const Matt = conn.define('matt', {
  id: {
    type: UUID,
    primaryKey: true,
    defaultValue: UUIDV4,
    allowNull: false,
  },
  name: STRING
});

const Jonathan = conn.define('jonathan', {
    id: {
      type: UUID,
      primaryKey: true,
      defaultValue: UUIDV4,
      allowNull: false,
    },
    name: STRING
  });

const sync = async () => {
  await conn.sync({ force: true });

  const prof = [
    { name: 'teach redux (9/28)' },
    { name: 'teach thunks (9/30)' },
    { name: 'assign solo project (10/2)' }
  ];
  //const [ boston, la, slo ] = await Promise.all(place.map( pla => Place.create(pla)));

  const thomas = [
    { name: 'help akshay' },
    { name: 'make new ds' },
    { name: 'look for 300th job' }
  ];
//   const [ moe, larry, curly ] = await Promise.all(person.map( per => Person.create(per)));
//   await Promise.all([ moe.update({ placeId : boston.id }) ])
//   await Promise.all([ larry.update({ placeId : la.id }) ])
//   await Promise.all([ curly.update({ placeId : slo.id }) ])

  const matt = [
    { name: 'work in outdated languages' },
    { name: 'help everyone' },
    { name: 'find bugs' }
  ];
//   const [ plant, pencil, stapler ] = await Promise.all(things.map( thi => Thing.create(thi)));
//   await Promise.all([ plant.update({ personId : moe.id }) ])
//   await Promise.all([ pencil.update({ personId : larry.id }) ])
//   await Promise.all([ stapler.update({ personId : curly.id }) ])
    
	const jonathan = [
    { name: 'help class' },
    { name: 'work with other cohort' },
    { name: 'wear cool hats' }
  ];

};

module.exports = {
  sync,
  models: {
    Prof,
    Thomas,
    Matt,
    Jonathan
  }
}
