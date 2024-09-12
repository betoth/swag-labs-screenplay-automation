class BrowseTheWeb {
    constructor(page) {
        this.page = page;
    }

    static using(page) {
        return new BrowseTheWeb(page);
    }
}

module.exports = { BrowseTheWeb };
