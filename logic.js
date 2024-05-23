document.getElementById('hasil').innerHTML = 0
jml = document.getElementById("jml");
function jumlah() {
    if (jml.checked == true) {
        let a = document.getElementById('angka1');
        let b = document.getElementById('angka2');
        let hasil = Number(a.value) + Number(b.value);
        document.getElementById('hasil').innerHTML = hasil;
} else if (kurang.checked == true) {
    let a = document.getElementById('angka1');
    let b = document.getElementById('angka2');
    let hasil = Number(a.value) - Number(b.value);
    document.getElementById('hasil').innerHTML = hasil;
} else if (kali.checked == true) {
    let a = document.getElementById('angka1');
    let b = document.getElementById('angka2');
    let hasil = Number(a.value) * Number(b.value);
    document.getElementById('hasil').innerHTML = hasil;
} else if (bagi.checked == true) {
    let a = document.getElementById('angka1');
    let b = document.getElementById('angka2');
    let hasil = Number(a.value) / Number(b.value);
    document.getElementById('hasil').innerHTML = hasil;
} else if (document.getElementById('angka1') && document.getElementById('angka2').value == '') {
    alert('Isi Angka Terlebih dahulu')
    document.getElementById('hasil').innerHTML = 0;
}
else {
    alert('Pilih Operasi Terlebih dahulu')
}
 
}
function refresh() { 
    location.reload()
}