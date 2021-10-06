interface IMessage{
  sendMessage(pesan:string):string
  receivedMessage(pesan:string):string
}

class MessageApp implements IMessage{
    private pengirim:string
    private penerima:string
    private pesan:string
    
    constructor(pengirim:string,penerima:string,pesan:string){
      this.penerima = penerima
      this.pengirim = pengirim
      this.pesan = pesan
    }

    setPengirim(pengirim:string):void{
      this.pengirim = pengirim
    }

    getPengirim():string{
      return this.pengirim
    }

    setPenerima(penerima:string):void{
      this.penerima = penerima
    }

    getPenerima():string{
      return this.penerima
    }

    setPesan(pesan:string):void{
      this.pesan = pesan
    }

    getPesan():string{
      return this.pesan
    }

    sendMessage(pesan:string): string {
      return `${pesan} dari ${this.pengirim} ke ${this.penerima}`
    }
    receivedMessage(pesan:string): string {
      return `${pesan} dari ${this.pengirim} ke ${this.penerima}`
    }

}

class WhatsApp extends MessageApp{
  sendMessage(pesan:string): string {
      return `${pesan} dari ${this.pengirim} ke ${this.penerima} pake emott`;
    }
}

class Line extends MessageApp{

}

class Telegram extends MessageApp{

}

const whatsapp = new WhatsApp('azim','deni','hallo')
console.log(whatsapp.sendMessage('cukkk'))
console.log(whatsapp)
const line = new Line('hendar','deni','punteun')
console.log(line)
const telegram = new Telegram('deni','azim','naon')
console.log(telegram)
