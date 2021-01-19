"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Block {
    constructor(index, hash, previoushash, data, timestamp) {
        this.index = index;
        this.hash = hash;
        this.previoushash = previoushash;
        this.data = data;
        this.timestamp = timestamp;
    }
}
const genesisBlock = new Block(0, "2021", "", "hello", 123456);
let blockchain = [genesisBlock];
console.log(blockchain);
//# sourceMappingURL=index.js.map