const { test } = QUnit

QUnit.module('összeadás', function (h) {
    h.before(() => {
        this.szamologep = new Szamologep()

    }
    )
    test('létezik-e a függvény', (assert) => {
        assert.ok(this.szamologep.osszead, "Létezik az összead függvény");
    });
    test('függvény-e', (assert) => {
        assert.ok(typeof this.szamologep.osszead === "function", "függvény");
    });

    test('két pozitív egész szám', (assert) => {
        assert.equal(this.szamologep.osszead(1, 2), 3);
    });

    test('egy pozitív, egy negatív', (assert) => {
        assert.equal(this.szamologep.osszead(1, -2), -1);
    });
    test('két negatív szám', (assert) => {
        assert.equal(this.szamologep.osszead(-1, -2), -3);
    });
    test('az egyik szám 0', (assert) => {
        assert.equal(this.szamologep.osszead(0, -2), -2);
    });
    test('szövegként tárolt szám', (assert) => {
        assert.equal(this.szamologep.osszead(1, "2"), 3);
    });
    test('az egyik tag szöveg', (assert) => {
        assert.equal(this.szamologep.osszead(1, "a"), "az egyik nem szám!");
    });
    test('az egyik tag logikai', (assert) => {
        assert.equal(this.szamologep.osszead(1, true), "az egyik tag logikai változó!");
    });

    test('nagy számok', (assert) => {
        let a = Number.MAX_VALUE
        let b = 1
        assert.equal(this.szamologep.osszead(a, b), "túlcsordulás");
    });
    test('nagy negatív számok', (assert) => {
        let a = -Number.MAX_VALUE
        let b = -1
        console.log(b)
        assert.equal(this.szamologep.osszead(a, b), "túlcsordulás");
    });
    test('undefined', (assert) => {
        let a =undefined
        let b = -1
        assert.equal(this.szamologep.osszead(a, b), "az egyik nem szám!");
    });

});
QUnit.module('kivonás', function (h) {
    h.before(() => {
        this.szamologep = new Szamologep()

    }
    )
    test('létezik-e a függvény', (assert) => {
        assert.ok(this.szamologep.kivonas, "Létezik az összead függvény");
    });
    test('függvény-e', (assert) => {
        assert.ok(typeof this.szamologep.kivonas === "function", "függvény");
    });
    test('két pozitív egész szám', (assert) => {
        assert.equal(this.szamologep.kivonas(1, 2), -1);
    });

    test('egy pozitív, egy negatív', (assert) => {
        assert.equal(this.szamologep.kivonas(1, -2), 3);
    });
    test('két negatív szám', (assert) => {
        assert.equal(this.szamologep.kivonas(-1, -2), 1);
    });
    test('az egyik szám 0', (assert) => {
        assert.equal(this.szamologep.kivonas(0, -2), 2);
    });
    test('szövegként tárolt szám', (assert) => {
        assert.equal(this.szamologep.kivonas(1, "2"), -1);
    });
    test('az egyik tag szöveg', (assert) => {
        assert.equal(this.szamologep.kivonas(1, "a"), "az egyik nem szám!");
    });
    test('az egyik tag logikai', (assert) => {
        assert.equal(this.szamologep.kivonas(1, true), "az egyik tag logikai változó!");
    });

    
    test('kivonás nagy számok', (assert) => {
        let a = Number.MAX_VALUE
        let b = -1
        assert.equal(this.szamologep.kivonas(a, b), "túlcsordulás");
    });

    test('kivonás nagy negatív számok', (assert) => {
        let a = -Number.MAX_VALUE
        let b = 1
        assert.equal(this.szamologep.kivonas(a, b), "túlcsordulás");
    });
    
    test('undefined', (assert) => {
        let a =undefined
        let b = -1
        console.log(b)
        assert.equal(this.szamologep.kivonas(a, b), "az egyik nem szám!");
    });

});