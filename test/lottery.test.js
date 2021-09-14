const Lottery = artifacts.require('Lottery');

contract('Lottery', function([deployer, user1, user2]) {
    let lottery;

    beforeEach(async () => {
        console.log('before each');
        lottery = await Lottery.new();
    });

    it('Basic test', async () => {
        console.log('basic each');

        let owner = await lottery.owner();
        let value = await lottery.getSomeValue();

        console.log(`owner: ${owner}`);
        console.log(`value: ${value}`)
        assert.equal(value, 5);
    });

    it.only('getPot should return current pot', async () => {
        let pot = await lottery.getPot();
        assert.equal(pot, 0);
    });
});