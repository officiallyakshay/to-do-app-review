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
    { name: 'teach_redux' },
    { name: 'teach_thunks' },
    { name: 'assign_solo_project' }
  ];
	const [ teach_redux, teach_thunks, assign_solo_project ] = await Promise.all(prof.map( pro => Prof.create(pro)));
	
	const thomas = [
    { name: 'help_akshay' },
    { name: 'make_new_ds' },
    { name: 'look_for_300th_job' }
  ];
  const [ help_akshay, make_new_ds, look_for_300th_job ] = await Promise.all(thomas.map( tom => Thomas.create(tom)));

  const matt = [
    { name: 'work_in_outdated_languages' },
    { name: 'help_everyone' },
    { name: 'find_bugs' }
  ];
  const [ work_in_outdated_languages, help_everyone, find_bugs ] = await Promise.all(matt.map( mat => Matt.create(mat)));
    
	const jonathan = [
    { name: 'help_class' },
    { name: 'work_with_other_cohort' },
    { name: 'wear_cool_hats' }
	];
	const [ help_class, work_with_other_cohort, wear_cool_hats ] = await Promise.all(jonathan.map( jon => Jonathan.create(jon)));

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
