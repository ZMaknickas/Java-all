
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
/*Parašykite funkciją, kuri patikrina, ar du žodžiai yra anagramos*/

function anagr(a, b) {
let bb=b.split('')
if (a===b)
return false;
for (let i=0; i<=b.length; i++) 
if (b.includes(a[i]))
return true;
};
console.log(anagr('pilkas', 'plikas'));

/*3 Parašykite funkciją, kuri pašalina dublikatus iš masyvo.*/
function dubl(k) {
return k;
}
console.log(dubl(2,3,4,2,5,2))

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

/*4.*/
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