module.exports = class Monster {
    constructor({
        monsterName = "Unknown",
        minimumLife = 0,
        currentLife = 100,
      }) {
        this.monsterName = monsterName;
        this.minimumLife = minimumLife;
        this.currentLife = currentLife;
        this.isAlive = (this.currentLife >= this.minimumLife ? true : false) 
    }

    updateLife = (lifeChangeAmount) => {
        parse.Int(this.currentLife - lifeChangeAmount) = this.currentLife; return (this.currentLife < 0 ? this.currentLife = 0 : (this.isAlive ? 'Alive' : 'Dead'));
    };

    randomLifeDrain = (minimumLifeDrain, maximumLifeDrain) => {
        if (minimumLifeDrain < maximumLifeDrain) {
            const getRandomInteger = function(minimumLifeDrain, maximumLifeDrain) {return Math.floor(Math.random() * ((maximumLifeDrain + 1) - minimumLifeDrain) + minimumLifeDrain);};
            
            monsterList.forEach(monster => {
            console.log(`${monster.monsterName} random power drain of ${this.updateLife(getRandomInteger())}
            `)
        });
        }
        
    };
};


