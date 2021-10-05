interface Hewan {
    sleep(): string;
    playing(): string;
}

class Kucing implements Hewan{
    warna: string;
    jenis: string;
    name: string;

    constructor(warna: string, jenis: string, name: string) {
        this.warna = warna
        this.jenis = jenis;
        this.name = name;
    }

    public setWarna(warna: string) : void {
        this.warna = warna;
    }

    public getWarna() : string {
        return this.warna;
    }

    public setJenis(jenis: string) : void {
        this.jenis = jenis;
    }

    public getJenis() : string {
        return this.jenis;
    }

     public setName(name: string) : void {
        this.name = name;
    }

    public getName() : string {
        return this.name;
    }

    public sleep() : string {
        return `${this.name} sedang tidur`;
    }

    public playing() : string {
        return `${this.name} sedang bermain`;
    }
}

class KucingDeni extends Kucing {}

class KucingAzim extends Kucing {
    public sleep() :string {
        return `${this.name} sedang tidur di dapur`;
    }
}


const kucingDeni = new KucingDeni('Hitam Putih', 'Anggora', 'Deni');
console.log(kucingDeni.getName());
console.log(kucingDeni.getJenis());
console.log(kucingDeni.getWarna());
kucingDeni.setName('udin');
console.log(kucingDeni.getName());
console.log(kucingDeni.sleep());

const kucingAzim = new KucingAzim('Orange', 'Anggora', 'Azim');
console.log(kucingAzim.sleep());


console.log("============================Per-DEBITan======================");
let balance  = 2000000;
class Transfer {
   static debit(totalTransfer: number): number {
        return balance - totalTransfer;
    }
}

class TransferBankLain extends Transfer {
    static debit(totalTransfer: number): number {
        const adminFee = 1000;
        return balance - totalTransfer - adminFee;
    }
}

console.log(Transfer.debit(1000));
console.log(TransferBankLain.debit(1000));


