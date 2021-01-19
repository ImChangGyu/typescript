import * as CryptoJs from "crypto-js";

class Block{
    public index: number;
    public hash: string;
    public previoushash: string;
    public data: string;
    public timestamp: number;

    static caculateBlockHash = (index:number,
         previoushash:string, 
         timestamp:number, 
         data:string
         ): string => CryptoJs.SHA256(index + previoushash + timestamp + data).toString();

    constructor(index: number,
        hash: string,
        previoushash: string,
        data: string,
        timestamp: number
    ){
        this.index = index;
        this.hash = hash;
        this.previoushash = previoushash;
        this.data = data;
        this.timestamp = timestamp;
    }
}

const genesisBlock:Block = new Block(0, "2021", "","hello", 123456)

let blockchain: Block[] = [genesisBlock];

const getBlockchian = () : Block[] => blockchain;

const getLatesBlock = () : Block => blockchain[blockchain.length - 1];

const getNewTimeStamp = (): number => Math.round(new Date().getTime() / 1000);

export {};