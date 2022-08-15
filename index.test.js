const {sequelize} = require('./db')
const {Restaurant, Menu} = require('./models/index')
const {
    seedRestaurant,
    seedMenu,
  } = require('./seedData');

describe('Restaurant and Menu Models', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await sequelize.sync({ force: true });
    });

    test('can create a Restaurant', async () => {
        // TODO - write test
        await Restaurant.sync();
        const democles = await Restaurant.create({
            name: 'Democles',
            location: 'Athens',
            cuisine: 'Greek'
        });
        expect(democles instanceof Restaurant).toEqual(true)
    });

    test('can create a Menu', async () => {
        // TODO - write test
        await Menu.sync();
        const democlesMenu = await Menu.create({
            title: 'Philosopher Brunch'
        });
        expect(democlesMenu instanceof Menu).toEqual(true)
    });

    test('can find Restaurants', async () => {
        // TODO - write test
        const greekPlace = await Restaurant.findOne({
            where: {
                name: 'Democles'
            }
        });
        expect(greekPlace['dataValues'].cuisine).toEqual('Greek')
    });

    test('can find Menus', async () => {
        // TODO - write test
        const platoEats = await Menu.findOne({
            where: {
                title: 'Philosopher Brunch'
            }
        });
        expect(platoEats['dataValues'].title).toEqual('Philosopher Brunch')
    });

    test('can delete Restaurants', async () => {
        // TODO - write test
        const platoStarves = await Restaurant.destroy({
            where: {
                name: 'Democles'
            }
        });
        console.log(platoStarves);
        expect(platoStarves).toEqual(1)
    });
})