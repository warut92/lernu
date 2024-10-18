let ekzercaro = ekzercaroDateno.replace(/#/g,"<span class=\"ekzerco\" contenteditable=\"true\">____</span>")
document.getElementById("ekzercaro").innerHTML = ekzercaro

// const VIAJ_RESPONDOJ
function kontroliLaEkzercon() {
let respondoj = document.getElementById("ekzercaro")

let lernantoNomo = document.getElementById("viaNomo").value
let MsgDeLernanto = "Saluton! Mi estas " + lernantoNomo + "%0D%0A%0D%0A"

document.getElementById('sendiRetmesagxoButono').style.display = "none"
    let respondojInnerText = respondoj.innerText
    respondojInnerText = respondojInnerText.replace(/ /g,"%20").replace(/\./g,"%0D%0A").replace(/\?/g,"?%0D%0A")
    console.log(respondojInnerText);
    let MsgPorRetmesagxo = "subject=Leciono1&body=" + respondojInnerText
    document.getElementById("sendiRetmesagxon").innerHTML = "<a href=\"https://mail.google.com/mail/u/0/?fs=1&to=verdaelefanto@gmail.com&su="+ kursoNomo + "&cc&bcc&body=" + MsgDeLernanto + respondojInnerText + "\n\nหากคุณมีข้อสงสัยสามารถแจ้งมาในอีเมลนี้เลย&tf=cm\" target=\"_blank\">ส่งด้วย Gmail  จะมีการตรวจภายใน 24 ชั่วโมง</a>"
  }