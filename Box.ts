type baseType = { names: string[]; };

export default class Box<T extends baseType> {
    private cache = new Map();

    constructor(base: T) {}

    public add(...items: T[]) {
        items.forEach(t => t.names.forEach(name => this.cache.set(name, t)));
        return this;
    }

    public collect(item: string): T {
        return this.cache.get(item);
    }

    public count() {
        return this.cache.size;
    }
}

export class BoxTest {
    constructor() {
        new Box(new BoxTestItem())
            .add(
                new BoxTextItem2()
            )
    }
}

class BoxTestItem {
    names = ["the"];
    desc = "the"
}

class BoxTextItem2 extends BoxTestItem {
    names = ["test"];
}