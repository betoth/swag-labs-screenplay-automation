class Actor {
    constructor(user, page) {
        this.name = user.username;
        this.page = page;
        this.credentials = {
            username: user.username,
            password: user.password
        };
        this.abilities = {};
    }

    whoCan(...abilities) {
        abilities.forEach(ability => {
            this.abilities[ability.constructor.name] = ability;
        });
        return this;
    }

    attemptsTo(...tasks) {
        return tasks.reduce((promise, task) => {
            return promise.then(() => task.performAs(this));
        }, Promise.resolve());
    }

    abilityTo(abilityType) {
        return this.abilities[abilityType.name];
    }
}

module.exports = { Actor };
