function cxiujVortoj(n) {
  const posicioDeVortoj = document.querySelectorAll('input[type="checkbox"]');

    for (let i = 0; i < posicioDeVortoj.length; i++) {
      if (n === 1) {
        posicioDeVortoj[i].checked = true;    
      } else {
        posicioDeVortoj[i].checked = false;    
      }
} 
}
let tabelero = ""
//ตัวเลือกภาษา
let lingvo = "en"
function lingvoElekto(l) {
  if (l === "en") {
    lingvo = "en";
  } else {
    lingvo = "th";
  }
console.log(lingvo);
tabelero = ""
tabeligo() 
}

//สร้างตารางรายการคำศัพท์จาก array
function tabeligo() {
    for (let i = 0; i < vortoj.length; i++) {
      if (lingvo === "th") {
        tabelero += vortoj[i] + " - " + tradukoj_th[i] + "<input value=\""+ i +"\" type=\"checkbox\" checked=\"checked\"><br>";
      } else if (lingvo === "en") {
        tabelero += vortoj[i] + " - " + tradukoj_en[i] + "<input value=\""+ i +"\" type=\"checkbox\" checked=\"checked\"><br>";
      }
        document.getElementById("tabelo").innerHTML = tabelero
    }
}
//รันฟังก์ชันตั้งแต่เปิดหน้ามา
tabeligo()

let checkedValueArr = []
//ฟังก์ชันเลือกคำศัพท์จาก checkbox โดยการดึงค่าจาก input ที่มีการติก นำมาสร้างเป็น array เก็บไว้
function elektvortojn() {
//ลบ array ให้ว่างทุกครั้ง
checkedValueArr = []
    const posicioDeVortoj = document.querySelectorAll('input[type="checkbox"]');
    for (let i = 0; i < posicioDeVortoj.length; i++) {
        const e = posicioDeVortoj[i];
        if (e.checked) {
          checkedValueArr.push(e.value)
        } 
    }  
}

// document.getElementById("reiri").style.display = "none"
//ฟังก์ชันซ่อนตารางรายการคำศัพท์ โดยการรับค่าจากพารามิเตอร์ใน html
function kaŝiVortojn(n) {
  //เริ่ม
  if (n === 0) {
    document.getElementById("tabelo").style.display = "none"    
    document.getElementById("ekzerco").style.display = "block"
    document.getElementById('opciaButono').style.display = "none"
    document.getElementById('reiri').style.display = "block"
    elektvortojn() 
    enmiksigi()
  //กลับ
  } else if (n === 1) {
    document.getElementById("tabelo").style.display = "block"
    document.getElementById("ekzerco").style.display = "none"
    document.getElementById('opciaButono').style.display = "block"
    document.getElementById('reiri').style.display = "none"
  }
  console.log(n);
}

//ฟังก์ชันการสับตัวเลือก
let elektoj = ""
function enmiksigi() {
  //โค้ดการสร้างตัวเลขแบบสุ่ม โดยที่ไม่ให้ซ้ำกัน
      for (let i = checkedValueArr.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [checkedValueArr[i], checkedValueArr[j]] = [checkedValueArr[j], checkedValueArr[i]];
      }
        // Now pick the first three non-repeating values
        let random = checkedValueArr[0];
        let random1 = checkedValueArr[1];
        let random2 = checkedValueArr[2];
        //demando
        let demanda_vorto = vortoj[random]
        //respondo
        let respondo
        let falsa_respondo1
        let falsa_respondo2 
        if (lingvo === "en") {
          respondo = tradukoj_en[random]
          falsa_respondo1 = tradukoj_en[random1]
          falsa_respondo2 = tradukoj_en[random2]
        } else {
          respondo = tradukoj_th[random]
          falsa_respondo1 = tradukoj_th[random1]
          falsa_respondo2 = tradukoj_th[random2]
        }

  //random 1,2,3
  let randomElekto = Math.floor(Math.random() * 5)
  if (randomElekto === 0) {
    elektoj = "<button onclick=\"kontroliLaRespondon(1)\">" + respondo + "</button><br><button onclick=\"kontroliLaRespondon(0)\"> " + falsa_respondo1 + "</button><br><button onclick=\"kontroliLaRespondon(0)\"> " + falsa_respondo2
  } else if (randomElekto === 1) {
    elektoj = "<button onclick=\"kontroliLaRespondon(1)\">" + respondo + "</button><br><button onclick=\"kontroliLaRespondon(0)\"> " + falsa_respondo2 + "</button><br><button onclick=\"kontroliLaRespondon(0)\"> " + falsa_respondo1
  } else if (randomElekto === 2) {
    elektoj = "<button onclick=\"kontroliLaRespondon(0)\">" + falsa_respondo1 + "</button><br><button onclick=\"kontroliLaRespondon(1)\"> " + respondo + "</button><br><button onclick=\"kontroliLaRespondon(0)\"> " + falsa_respondo2
  } else if (randomElekto === 3) {
    elektoj = "<button onclick=\"kontroliLaRespondon(0)\">" + falsa_respondo1 + "</button><br><button onclick=\"kontroliLaRespondon(0)\"> " + falsa_respondo2 + "</button><br><button onclick=\"kontroliLaRespondon(1)\"> " + respondo
  } else if (randomElekto === 4) {
    elektoj = "<button onclick=\"kontroliLaRespondon(0)\">" + falsa_respondo2 + "</button><br><button onclick=\"kontroliLaRespondon(1)\"> " + respondo + "</button><br><button onclick=\"kontroliLaRespondon(0)\"> " + falsa_respondo1
  } else if (randomElekto === 5) {
    elektoj = "<button onclick=\"kontroliLaRespondon(0)\">" + falsa_respondo2 + "</button><br><button onclick=\"kontroliLaRespondon(0)\"> " + falsa_respondo1 + "</button><br><button onclick=\"kontroliLaRespondon(1)\"> " + respondo
  } 
  //enmiksigi la respondoj
  document.getElementById("ekzerco").innerHTML = "<span id=\"poento\"></span><center><button id=\"demanda_vorto\">" + demanda_vorto + "</button><br><br>" + elektoj
}

//ฟังก์ชันการให้คะแนน
let poento = 0
function kontroliLaRespondon(r) {
  if (r === 1) {
    enmiksigi()
    poento++
  } else {
    enmiksigi()
    poento--
  }
  document.getElementById("poento").innerHTML = "<center>" + poento + "</center><br><br>"
}