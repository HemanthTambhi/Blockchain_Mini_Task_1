const crypto = require('crypto');

class Block {
    constructor(index, data) {
        this.index = index;
        this.timestamp = new Date().toISOString();
        this.data = data;
        this.nonce = 0;
        this.hash = this.calculateHash();
    }

    calculateHash() {
        return crypto.createHash('sha256').update(this.index + this.timestamp + JSON.stringify(this.data) + this.nonce).digest('hex');
    }

    mineBlock(difficulty) {
        const target = Array(difficulty + 1).join("0");
        const start = Date.now();

        while (!this.hash.startsWith(target)) {
            this.nonce++;
            this.hash = this.calculateHash();
        }

        const end = Date.now();
        console.log(`Block mined! Nonce: ${this.nonce}, Hash: ${this.hash}`);
        console.log(`Time taken: ${(end - start) / 1000} seconds`);
    }
}

const block = new Block(1, { amount: 100 });
block.mineBlock(4);