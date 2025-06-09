const crypto = require('crypto');

class Block {
    constructor(index, timestamp, data, previousHash = '') {
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.previousHash = previousHash;
        this.nonce = 0;
        this.hash = this.calculateHash();
    }

    calculateHash() {
        return crypto.createHash('sha256').update(this.index + this.timestamp + JSON.stringify(this.data) + this.previousHash + this.nonce).digest('hex');
    }
}

// Create 3 linked blocks
const block1 = new Block(1, new Date().toISOString(), { amount: 50 }, '0');
const block2 = new Block(2, new Date().toISOString(), { amount: 100 }, block1.hash);
const block3 = new Block(3, new Date().toISOString(), { amount: 150 }, block2.hash);

console.log("--- Blockchain ---");
console.log(block1);
console.log(block2);
console.log(block3);

// Tampering block 1 data
console.log("\n--- Tampering block 1 ---");
block1.data = { amount: 999 };
block1.hash = block1.calculateHash();
console.log("Updated Block 1 Hash:", block1.hash);
console.log("Block 2 Previous Hash:", block2.previousHash);