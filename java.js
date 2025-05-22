
/*
1.Parašykite funkciją, kuri grąžina visų sveikų skaičių nuo 1 iki n kvadratų sumą.
2. Parašykite funkciją, kuri patikrina, ar du žodžiai yra anagramos.
3. Parašykite funkciją, kuri pašalina dublikatus iš masyvo.
4.Parašykite funkciją, kuri grąžina pirmą pasikartojantį elementą masyve.
5.Parašykite funkciją, kuri patikrina, ar skaičius yra pirminis.
6.Parašykite funkciją, kuri grąžina skaičiaus faktorialą.
7.Parašykite funkciją, kuri patikrina, ar žodis yra palindromas (skaitomas vienodai iš
abiejų pusių).
8.Parašykite funkciją, kuri grąžina dažniausiai pasikartojantį elementą masyve.
9.Parašykite funkciją, kuri grąžina n-tą Fibonacci sekos narį.
10.Parašykite funkciją, kuri sukeičia kiekvieną gretimą masyvo porą (jeigu pora
neegzistuoja, paskutinis lieka nepakitęs). Pvz: masyvo [1234] elementai turėtų pasikeisti
į [2143]
11.Parašykite funkciją, kuri grąžina masyvą tik su lyginiais skaičiais.
12.Parašykite funkciją, kuri grąžina didžiausią skaičių masyve.
13.Parašykite funkciją, kuri apskaičiuoja vidurkį masyvo elementų.
14.Parašykite funkciją, kuri grąžina masyvą, kuriame kiekvienas elementas yra
padaugintas iš 2.
15.Parašykite funkciją, kuri iš duoto teksto paverčia pirmą raidę kiekviename žodyje į
didžiąją.
16.Parašykite funkciją, kuri suskaičiuoja balsių kiekį tekste.
17.Parašykite funkciją, kuri apverčia masyvą nenaudodama .reverse().
18.Parašykite funkciją, kuri patikrina, ar masyvas yra simetriškas (vienodas iš abiejų galų).
19.Parašykite funkciją, kuri sukuria atsitiktinį sveiką skaičių tarp min ir max (imtinai).
20.Parašykite funkciją, kuri patikrina, ar visi masyvo elementai yra unikalūs.
21.Parašykite funkciją, kuri grąžina true, jei masyvas yra nuolat didėjantis. Pvz: masyvas
[1 4 6] bus true, o masyvas [ 1 2 4 1] bus false
22.Parašykite funkciją, kuri grąžina žodžių kiekį sakinyje.
23.Parašykite funkciją, kuri surūšiuoja masyvą mažėjančia tvarka.
24.Parašykite funkciją, kuri pakeičia visus simbolius string'e į žvaigždutes, išskyrus
paskutinius 4.
25.Parašykite funkciją, kuri apskaičiuoja skirtumą tarp dviejų datų dienomis.
26.Parašykite funkciją, kuri konvertuoja pirmąją raidę į mažąją, jei ji buvo didžioji.
27.Parašykite funkciją, kuri suskaičiuoja, kiek duotame tekste žodžių yra bent 5 simbolių
ilgio.
28.Parašykite funkciją, kuri grąžina visus skaičius nuo start iki end kaip masyvą.
29.Parašykite funkciją, kuri randa antrą didžiausią skaičių masyve.
30.Parašykite funkciją, kuri paverčia sekundes į formatą hh:mm:ss.
31.Parašykite funkciją, kuri skaičiuoja, kiek kartų duotas simbolis pasikartoja string'e.
32.Parašykite funkciją, kuri iš objektų masyvo išfiltruoja tik tuos, kurių reikšmė aktyvus:
true.
33.Parašykite funkciją, kuri sugrąžina true, jei masyve yra bent viena neigiama reikšmė.
34.Parašykite funkciją, kuri konvertuoja tekstą į „slug“ formą: mažosios raidės ir - vietoj
tarpų.
35.Parašykite funkciją, kuri patikrina, ar string'as baigiasi nurodytu tekstu.
36.Parašykite funkciją, kuri apskaičiuoja visų teigiamų skaičių sumą masyve.*/
/*1.Parašykite funkciją, kuri grąžina visų sveikų skaičių nuo 1 iki n kvadratų sum*/
function kvad(n) {
let end=0;
for (let i=1; i<=n; i++) {
end+=i*i;
}
return end;
};

console.log(kvad(5));
/*2Parašykite funkciją, kuri patikrina, ar du žodžiai yra anagramos*/

function anagr(a, b) {
let bb=b.split('')
if (a===b)
return false;
for (let i=0; i<=b.length; i++) 
if (b.includes(a[i]))
return true;
else return false;
};
console.log(anagr('pilkas', 'plikas'));

/*3 Parašykite funkciją, kuri pašalina dublikatus iš masyvo.*/
function dupl(a) {
a1 = a.filter((item, index) => a.indexOf(item) === index);
return a1;
}
console.log(dupl([2,3,2,5,3,8,3,5,6]));
console.log('-----------------');
console.log(dupl([2,3,4,2,5,2]));
console.log('---------------');

let keleivis= {name: "Maryte",
    age: 34,
    city: "Ukmerge",
};
let name="Petras";

console.log(name);

function min(...list) {
    let better=[1,2,3,'a','b']
    let mju=better.concat([...list])
    return mju;
    }
    console.log(min('c', 'd',4,5,6))

/*4.Funkcija, kuri grazina pirma pasikartojanti elementa masyve*/
function kartojasi(m) {
for (let i=0; i<=m.length; i++)
if (m[i]===m[i+1])
return m[i];    
}
console.log(kartojasi([2,3,4,4,5]))

/*5.Parašykite funkciją, kuri patikrina, ar skaičius yra pirminis.*/

function arpirminis(c) {    
    if (c===2 || c===3 || c===5 || c===7)  
    return true;
    if (c%2===0 || c%3===0 || c%5===0 || c%7===0) 
    return false;
    else return true; 
    }
    console.log(arpirminis(14));

/*6*/
function fakt(sk) {
let res=1;
for (let i=2; i<=sk; i++)
res*=i
return res;    
}
console.log(fakt(3));
/*7*/
function pal(text) {
let reversed=text.split('').reverse().join('');
if (reversed===text)
return true;
else return false;
}
console.log(pal(''));
/*8*/
function kart(masyvas) {
let narys = {};
for (const s of masyvas) {
    if (narys[s]) {
    narys[s]++;
    }else {
        narys[s] = 1;
    }
}
return narys;
}
console.log(kart[2,3,2,2,4,5,4,2,3,2]);
/*9. 0 1 1 2...*/
function fibo(n) {
let x=1;
let y=2;
let z=0;
let eile=[0,1,1,2];
if (n<5)
return eile[n];
else 
for (let i=1; i<=n-4; i++) {
z=x+y;
x=y;
y=z;}
return z;
}
console.log(fibo(6));
/*10 [1234] [2143]
function keisti(mas) {    
mas.toString();
for (let i=0; i<=mas.length; i++)
if (Number(mas[i])===Number(mas[i+1])+1)
mas.replace(mas[i], mas[i+1]);
mas.replace(mas[i+1], mas[i]);
return mas;
}
console.log(keisti([1234]));*/
/*11.Funkcija grazina masyva tik su lyginiais skaiciais*/
function lyg(o) {
let result=[];
for (let i=0; i<=o.length; i++){ 
if (o[i]%2===0)
result.push(o[i])
}
return result;
}
console.log(lyg([2,3,4,5,6,7,8,9]));

/*12*/

function maks(m) {
let did=Math.max(...m);
return did;
}
console.log(maks([2,5,3,8,23,56,76,32,45,21,16,4,3,45,33,21]));

/*13.*/

function vid(mark) {
const average=Math.round(mark.reduce((total, n)=>total+n)/mark.length);
return average;
};
console.log(vid([2,5,3,8,23,56,76,32,45,21,16,4,3,45,33,21]));

/*14.*/
function dub(ax) {
let result=[];
for (let i=0; i<ax.length; i++)
result.push(ax[i]*2)
return result;
}
console.log(dub([2,5,3,8,23,56,76,32,45,21,16,4,3,45,33,21]));

/*15*/
function up(txt) {
let changed=[];
let up=0;
for (let i=0; i<txt.length; i++){
up=txt[i].slice(0,1).toUpperCase()+txt[i].slice(1);
changed.push(up);
}
return changed;
}
console.log(up(['rytas', 'vakaras', 'diena']));

/*16.*/ 
function balses(tex) {
let rai='aeiouy';
let count=0;
for (let i=0; i<tex.length; i++){
if (rai.includes(tex[i]))
count++;}
return count;
}
console.log(balses('Laba diena graziausiam kiemui'));
/*17. apversti masyva be reverse*/
function  apv(ar) {
let result=[];
for (let i=ar.length-1; i>=0; i--)
result.push(ar[i]);
return result;
}
console.log(apv([1,2,3,4,5]));

/*18 patikrinti ar masyvas lygus is abieju galu*/
function bta(m) {
let result=[];
for (let i=m.length-1; i>=0; i--){
result.push(m[i])}
if (m===result)
return true;
else return result;
} 
console.log(bta([1,2, 3,1]));

/*19 atsitiktinis skaicius tarp min ir max*/
function random(a,b) {
return Math.floor(Math.random() * (b-a)) + a;
}
console.log(random(14, 22));

/*20 ar visi masyvo elementai yra unikalus*/
/*21 parasyti funkcija ar masyvas dideja*/
function dideja(h) {
let last=0;
let end=[];
for (let i = 0; i < h.length; i++){
if (h[i]<h[i+1])
last=h[i+1]
end.push(last)}
console.log(end);
if (last===h[h.length-1])
return true;
else return false;
}
console.log(dideja([1,2,3,4,1]));
/*22.zodziu kiekis sak.*/
function zodziu(sak) {
let count=0;
for (const l of sak){
if (l===' ')
count++
}
return count+1;
}
console.log(zodziu('Sauletekyje gyvena daug studentu ir juoduku'));

/*23 mazejancia tvarka*/
function mazeja(l) {
return l.sort((a, b)=> b-a);
}
console.log(mazeja([2,5,7,1,9]))

/*24 pakeisti visus simbolius * issk 4.*/
function asterisk(text){
let result=''
let k=text.length;
let last=text.slice(k-4, k); 
console.log(last);
let zv=text.length-4;
for (let i=0; i<=zv; i++){
result+='*'}
return result+last;
}
console.log(asterisk('Pagavau zuvele'));

/*25.skirtumas tarp datu dienomis.*/
function dienomis (a,b){
let meta=a.slice(0, 4)
let metb=b.slice(0, 4)
let ma=0;
let mb=0;
let da=0;
let db=0;
let mendienos=0;
let ya=a.slice(0,4);
let yb=b.slice(0,4);
if (a.slice(5,6)==='0')
ma=a.slice(6,7);
else ma=a.slice(5,7)
if (b.slice(5,6)==='0')
    mb=b.slice(6,7);
else mb=b.slice(5,7)
if (a.slice(8,9)==='0')
    da=a.slice(9,10);
    else a=a.slice(8,10)
    if (b.slice(8,9)==='0')
        db=b.slice(9,10);
    else db=b.slice(8,10)
return (yb-ya)*365+(mb-ma)*30+db-da;
}
console.log(dienomis('2025/01/01', '2025/01/04'))

/*26 konvertuoja pirma raide i didziaja, jei ji buvo mazoji*/
function pirmaraide(sakinys) {
let pirma='abcdefghijklmnopqrstuvxyz';
if (pirma.includes(sakinys[0]))
return sakinys[0].toUpperCase()+sakinys.slice(1,sakinys.length)
else return 'pirma jau didzioji-'+sakinys;
}
console.log(pirmaraide('Vasara'));

// 7. Remove all digits from a string
  function removeDigits(str) {
   return str.replace(/[0-9]/g, '');
  }

  console.log (removeDigits("viens1 du2 trys3!"))
  
  // 8. Extract only letters from a string
  function onlyLetters(str) {
    return str.replace(/[^a-zA-Z]/g,'');
  }
  
  console.log(onlyLetters("Apelsinas,1234!"))

/*27 kiek sakinyje yra zodziu bet 5 raidziu*/
function valid(sak) {
let sak2=sak.split(' ');
let count=0;
for (const el of sak2){
if(el.length>=5)
count++}
return count;
}
console.log(valid('Sveiki, kaip jauciates del mokymosi ?'));
/*28 grazina skaiciu masyva nuo start iki end.*/
function masyvas(start,end) {
let result=[];
for (let i=0; i<end-start+1; i++) {
result.push(start+i)
}
return result;
}
console.log(masyvas(-5,7));
console.log(masyvas(5,7));
/*29 antras did skaicius masyve*/
function antras(mas) {
let mas2=mas.sort((a,b)=>a-b)
return mas2[mas.length-2]
}
console.log(antras([1,2,3,4,2,4,5,87,6,6,56,100]))
/*30 sekundes i hh:mm:ss formata;*/
function format(sekundes) {
let val=Math.floor(sekundes/3600);
let min=Math.floor((sekundes-val*3600)/60);
let s=sekundes-val*3600-min*60;
if (val===0 && min===0 && s<10)
return '00:00:0'+s;
if (val===0 && min===0 && s>=10)
return '00:00:'+s;
if (val===0 && min<10 && s<10)
return '00:0'+min+':0'+s;
if (val===0 && min<=10 && s>=10)
return '00:0'+min+':'+s;    
if (val===0 && min>10 && s>=10)
return '00:'+min+':'+s;
if (val<10 && min<10 && s<10)
return '0'+val+':0'+min+':0'+s;
if (val<10 && min>=10 && s<10)
return '0'+val+':'+min+':0'+s;
if (val<10 && min>=10 && s>=10)
return '0'+val+':'+min+':'+s;
if (val<10 && min<10 && s>=10)
return '0'+val+':0'+min+':'+s;
if (val>=10 && min<10 && s<10)
return val+':0'+min+':0'+s;
if (val>=10 && min>=10 && s<10)
return val+':'+min+':0'+s;
if (val>=10 && min>=10 && s>=10)
return val+':'+min+':'+s;
if (val>=10 && min<10 && s>=10)
return val+':0'+min+':'+s;
}
console.log('~~~~~~~~~~~~~~~~~')
console.log(format(2133333))
/*36 parasykite funkcija, kuri apskaičiuoja teigiamu sk suma.*/
function teig(mast){
let sum=0;
for (let i=0; i<mast.length; i++) {
if (mast[i]>0)
sum+=mast[i]
}
return sum;
}
console.log(teig([2,5,-6, ,3,-5]));
/*31*/
function kiek(str, a) {
let count=0;
for (let i=0; i<str.length; i++) {
if (str[i]===a)
count++;}
return count;
}
console.log(kiek('paprastai dirbu anksti', 'p'));
/*32*/
function aktyvus(car) {
return car;
}

console.log(aktyvus({
pavadinimas: 'Fiat',
starts: true,
hasfuel: true,
color: 'white',
hasEngine: true,
}));

/*33*/

function reiksme(vat) {
let sum=0;
for (const sk of vat) 
if (sk<0)
sum+=1;
if (sum>0)
return sum+' true';
else return false;
}
console.log(reiksme([0, 2, -4, -2, 6, 4]));

/*34.slug formatas*/
function konvert(st) {
let k='';    
for (let i=0; i<st.length; i++) 
k+=st[i].toLowerCase();
return k.replaceAll(' ', '-');
}
console.log(konvert('Mes ejom ejom sirdi skaudejo'));

/*35 ar stringas baigiasi nurodytu tekstu*/
function pab(a,b) {
let pak=a.slice(a.length-b.length, a.length);
if (pak===b)
return  true;
else return false;
}
console.log(pab('antradienis','dienis'));