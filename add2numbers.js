function kalkulator() {
   let angka = document.querySelectorAll('input');
   let i1= angka[0].value ; 
   let i2= angka[1].value ; 
   angka[2].value= parseInt(i1) + parseInt(i2) ;
   let pesan= document.getElementById('pesan');   
   pesan.innerHTML = 'selesai';
}
let tombol = document.querySelector('button');
tombol.addEventListener('click', kalkulator);