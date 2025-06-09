function PoW() {
    const miner1 = { name: "MinerA", power: Math.floor(Math.random() * 100) };
    const miner2 = { name: "MinerB", power: Math.floor(Math.random() * 100) };
    const winner = miner1.power > miner2.power ? miner1 : miner2;
    console.log("PoW Winner:", winner.name, "with power", winner.power);
}

function PoS() {
    const staker1 = { name: "StakerA", stake: Math.floor(Math.random() * 1000) };
    const staker2 = { name: "StakerB", stake: Math.floor(Math.random() * 1000) };
    const winner = staker1.stake > staker2.stake ? staker1 : staker2;
    console.log("PoS Winner:", winner.name, "with stake", winner.stake);
}

function DPoS() {
    const delegates = ["DelegateA", "DelegateB", "DelegateC"];
    const votes = {
        DelegateA: Math.floor(Math.random() * 10),
        DelegateB: Math.floor(Math.random() * 10),
        DelegateC: Math.floor(Math.random() * 10)
    };

    const winner = Object.entries(votes).reduce((a, b) => (a[1] > b[1] ? a : b));
    console.log("DPoS Winner:", winner[0], "with", winner[1], "votes");
}

console.log("\n--- Consensus Mechanism Simulation ---");
PoW();
PoS();
DPoS();