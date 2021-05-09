
import MyClass from './MyClass';

function assign() {
    const obj = {
        "key1": [1, 2, 3],
        "key2": "words",
    };

    // Copy object
    //    .assign(target, source)
    const newObj = Object.assign({}, obj)

    // Merge objects
    const mergedObj = Object.assign(obj, newObj);

    console.log(newObj);
    console.log(mergedObj);
}


function solveIndexMap() {
    // If it's the first section, go for 7 lines.
    // If it's the second section, go for 15 lines.
    // etc.
    let indexes = {
        0: 7,
        1: 15,
        2: 8,
        3: 20,
    };

    let work = {
        7: () => console.log("Do work on 7 lines"),
        15: () => console.log("Do work on 15 lines"),
        8: () => console.log("Do work on 8 lines"),
        20: () => console.log("Do work on 20 lines"),
    };

    let lines = "testing\n".repeat(7 + 15 + 8 + 20)

    // ITERATE KEYS: for ... in    -> (for "in"dex)
    // ITERATE VALUES: for ... of  -> (for values of)
    let small_arr = [5, 10];
    for (let idx in small_arr) { console.log(idx) }
    for (let val of small_arr) { console.log(val) }

    let uniq_pets = new Set(["Cat", "Dog", "Guinea Pig"])
    uniq_pets.species = "mammals";

    for (let pet of uniq_pets) { console.log(pet) }
    console.log("Species", uniq_pets.species)


    let block_i = 0;
    let inner_i = 0; // can't use forEach i, since we need to occasionally reset it
    lines.split("\n").forEach((line) => {
        let maxIdx = indexes[block_i]

        /* operate on block of 7 lines, then 15 lines, etc. */
        let perform = work[maxIdx]
        if (perform) {
            perform();
        }

        if (inner_i === maxIdx - 1) {
            block_i += 1;

            inner_i = 0
        } else {
            inner_i += 1
        }
    });

}

// credit: https://stackoverflow.com/questions/15313418/what-is-assert-in-javascript
function assert(condition, msg) {
    if (!condition) {
        throw new Error(msg || "Assertion failed");
    }
}


// Note: React hotreloading no longer resets css set in inspector until a real refresh
function SplitPane() {
    solveIndexMap();

    let c = new MyClass("hello");
    // Show key can be accessed from inside class
    c.work();

    console.log(c)

    // Ensure privacy
    assert(c["key"] === undefined);
    assert(c[Symbol("key")] === undefined);
    // Now break it and see the key (but no the value)
    console.log(Object.getOwnPropertySymbols(c));

    // ---

    assign();

    return (
        <div id="split">

            <div className="left">
            </div>

            <div className="right">
            </div>

            {/*
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>

            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
            */}
        </div>
    );
}

export default SplitPane;
