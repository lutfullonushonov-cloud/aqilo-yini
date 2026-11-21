
(function(){
var $=function(s){return document.querySelector(s)},A=function(s){return [].slice.call(document.querySelectorAll(s))};
function r(a,b){return Math.floor(Math.random()*(b-a+1))+a}
function sh(a){for(var i=a.length-1;i>0;i--){var j=r(0,i),t=a[i];a[i]=a[j];a[j]=t}return a}
function pick(a){return a[r(0,a.length-1)]}
function ls(k,v){try{if(v===undefined)return localStorage.getItem(k);localStorage.setItem(k,v)}catch(e){}}
function nopt(a,sp){var s={},g=0;s[a]=1;while(Object.keys(s).length<4&&g++<80){var v=a+r(-sp,sp);if(v>=1)s[v]=1}return sh(Object.keys(s).map(Number))}
function rep(e,n){return Array(n+1).join(e+' ')}
function eq(t){return '<h2 class="eq">'+t+'</h2>'}
function word(L){var w=pick(L),s=w;for(var k=0;k<20&&s===w;k++)s=sh(w.split('')).join('');
 return{q:'<h2 class="word">'+s.split('').join(' ')+'</h2><h3>Qaysi so‘z yashiringan?</h3>',o:sh([w].concat(sh(L.filter(function(x){return x!==w})).slice(0,3))),a:w}}
var W1=['MAKTAB','KITOB','QALAM','DARAXT','SAVAT','OLTIN','BALIQ','TARVUZ','DAFTAR','KAMALAK'],
W2=['MATEMATIKA','KOMPYUTER','TELEFON','KUTUBXONA','TAJRIBA','INTERNET','ALGORITM','SAYYORA','GEOMETRIYA','TEXNIKA'];
 
var AGES=[
{t:'6–9 yosh',n:'Kichik zukkolar',e:'🐣',c:'#ff7a59',d:'Sanash, qo‘shish va xotira',g:[
 {id:'s1',n:'Nechta bor?',e:'🍎',d:'Sanab, to‘g‘ri sonni top',time:12,gen:function(p){var n=r(2,5+Math.round(p*5)),e=pick(['🍎','🐥','⭐','🚗','🍓','🐠']);return{q:'<div class="big">'+rep(e,n)+'</div><h3>Nechta bor?</h3>',o:nopt(n,2),a:n}}},
 {id:'s2',n:'Sharlarni yor',e:'🎈',d:'To‘g‘ri javobli sharni top',time:10,st:'balloon',gen:function(p){var a=r(1,8+Math.round(p*6)),b=r(1,9);return{q:eq(a+' + '+b+' = ?'),o:nopt(a+b,4),a:a+b}}},
 {id:'s3',n:'Pechenye',e:'🍪',d:'Nechta qoldi?',time:14,gen:function(p){var t=r(5,10+Math.round(p*5)),x=r(1,t-1),e=pick(['🍪','🍩','🍬']);return{q:'<div class="big">'+rep(e,t)+'</div><h3>'+x+' tasini yedik. Nechta qoldi?</h3>',o:nopt(t-x,3),a:t-x}}},
 {id:'s4',n:'Qaysi biri katta?',e:'⚖️',d:'Eng katta sonni top',time:8,gen:function(p){var s={},m=20+Math.round(p*60);while(Object.keys(s).length<4)s[r(1,m)]=1;var o=sh(Object.keys(s).map(Number));return{q:'<h3>Qaysi son eng katta?</h3>',o:o,a:Math.max.apply(null,o)}}},
 {id:'s5',n:'Davom ettir',e:'🔢',d:'Qatorni davom ettir',time:14,gen:function(p){var s=r(1,5),d=r(1,3+Math.round(p*3)),q=[0,1,2,3].map(function(i){return s+i*d});return{q:eq(q.join(', ')+', ?'),o:nopt(s+4*d,d*2+1),a:s+4*d}}},
 {id:'s6',n:'Ortiqchasini top',e:'🔷',d:'Boshqacha rasmni top',time:10,st:'emo',gen:function(){var s=pick([['🍎','🍐'],['🐶','🐱'],['🚗','🚲'],['🌞','🌙'],['⚽','🏀'],['🐟','🐦']]);if(r(0,1))s.reverse();return{q:'<h3>Qaysi biri boshqalarga o‘xshamaydi?</h3>',o:sh([s[0],s[0],s[0],s[1]]),a:s[1]}}},
 {id:'s7',n:'Xotira kartalari',e:'🃏',d:'Juft rasmlarni top',mem:{pairs:6,time:70}}]},
{t:'9–13 yosh',n:'Aqlli izlovchilar',e:'🚀',c:'#7c4dff',d:'Ko‘paytirish, mantiq va so‘zlar',g:[
 {id:'m1',n:'Ko‘paytirish poygasi',e:'✖️',d:'Tez ko‘paytir',time:8,gen:function(p){var a=r(2,9),b=r(2,9+Math.round(p*3));return{q:eq(a+' × '+b+' = ?'),o:nopt(a*b,Math.max(a,b)),a:a*b}}},
 {id:'m2',n:'Tezkor hisob',e:'⚡',d:'Ikki amalli misollar',time:12,gen:function(){var a=r(10,50),b=r(5,30),c=r(2,20);return{q:eq(a+' + '+b+' − '+c+' = ?'),o:nopt(a+b-c,8),a:a+b-c}}},
 {id:'m3',n:'Sirli son',e:'❓',d:'Yashirin sonni top',time:14,gen:function(){var x=r(2,12),k=r(2,9);return{q:eq(r(0,1)?'? + '+k+' = '+(x+k):k+' × ? = '+(k*x)),o:nopt(x,4),a:x}}},
 {id:'m4',n:'So‘z topish',e:'🔤',d:'Harflardan so‘z tuz',time:20,gen:function(){return word(W1)}},
 {id:'m5',n:'Mantiqiy qator',e:'🧩',d:'Qonuniyatni top',time:18,gen:function(){var t=r(0,2),s=r(1,4),d=r(2,5),q=[],i,v=s;for(i=0;i<6;i++){q.push(t===0?s+i*d:t===1?s*Math.pow(2,i):v);if(t===2)v+=i%2?d:2}var a=q.pop();return{q:eq(q.join(', ')+', ?'),o:nopt(a,Math.max(3,Math.round(a*.25))),a:a}}},
 {id:'m6',n:'Teng bo‘lamiz',e:'🍕',d:'Bo‘lish masalalari',time:14,gen:function(p){var b=r(2,9),x=r(2,9+Math.round(p*3));return{q:'<h3>'+b*x+' ta olma '+b+' ta do‘stga teng bo‘lib berildi. Har biriga nechtadan tegdi?</h3>',o:nopt(x,3),a:x}}},
 {id:'m7',n:'Xotira kartalari',e:'🃏',d:'8 juft rasm',mem:{pairs:8,time:80}}]},
{t:'13–17 yosh',n:'Dahiylar',e:'🧠',c:'#00b894',d:'Tenglama, foiz va mantiq',g:[
 {id:'h1',n:'Tenglama',e:'🧮',d:'x ni top',time:20,gen:function(){var x=r(2,15),a=r(2,6),b=r(1,20);return{q:eq(a+'x + '+b+' = '+(a*x+b))+'<h3>x = ?</h3>',o:nopt(x,4),a:x}}},
 {id:'h2',n:'Foiz',e:'💯',d:'Foizni hisobla',time:18,gen:function(){var p=pick([5,10,20,25,50,75]),n=pick([40,60,80,120,200,240,300,400]),a=n*p/100;return{q:eq(n+' ning '+p+'% i = ?'),o:nopt(a,Math.max(4,Math.round(a*.3))),a:a}}},
 {id:'h3',n:'Ketma-ketlik',e:'🔮',d:'Kvadrat, kub, Fibonachchi',time:22,gen:function(){var t=r(0,2),k=r(1,5),q=[],i;if(t===0)for(i=0;i<6;i++)q.push(Math.pow(i+k,2));else if(t===1)for(i=0;i<6;i++)q.push(Math.pow(i+1,3)+k-1);else{q=[r(1,4),r(2,6)];for(i=2;i<6;i++)q.push(q[i-1]+q[i-2])}var z=q.pop();return{q:eq(q.join(', ')+', ?'),o:nopt(z,Math.max(4,Math.round(z*.2))),a:z}}},
 {id:'h4',n:'Amallar tartibi',e:'⚡',d:'Avval ko‘paytirish!',time:16,gen:function(){var a,b,c,d,z;do{a=r(2,9);b=r(2,9);c=r(2,9);d=r(1,15);z=a+b*c-d}while(z<1);return{q:eq(a+' + '+b+' × '+c+' − '+d+' = ?'),o:nopt(z,6),a:z}}},
 {id:'h5',n:'Murakkab so‘zlar',e:'🔤',d:'Uzun so‘zni top',time:25,gen:function(){return word(W2)}},
 {id:'h6',n:'Geometriya',e:'📐',d:'Yuza va burchaklar',time:22,gen:function(){if(r(0,1)){var a=r(3,12),b=r(2,10),ar=r(0,1),z=ar?a*b:2*(a+b);return{q:'<h3>To‘g‘ri to‘rtburchak tomonlari '+a+' va '+b+'.<br>'+(ar?'Yuzi':'Perimetri')+' nechaga teng?</h3>',o:nopt(z,6),a:z}}var x=r(30,80),y=r(30,70);return{q:'<h3>Uchburchakning ikki burchagi '+x+'° va '+y+'°.<br>Uchinchisi necha gradus?</h3>',o:nopt(180-x-y,10),a:180-x-y}}},
 {id:'h7',n:'Xotira kartalari',e:'🃏',d:'10 juft rasm',mem:{pairs:10,time:90}}]}
];
 
var RN=8,cur={},T,AC,mute=ls('aq_m')==='1';
function tone(f,d,t,w,v){if(mute)return;try{AC=AC||new(window.AudioContext||window.webkitAudioContext)();var o=AC.createOscillator(),g=AC.createGain(),s=AC.currentTime+(w||0);o.type=t||'sine';o.frequency.value=f;g.gain.setValueAtTime(v||.15,s);g.gain.exponentialRampToValueAtTime(.001,s+d);o.connect(g);g.connect(AC.destination);o.start(s);o.stop(s+d)}catch(e){}}
var S={click:function(){tone(520,.08,'triangle')},flip:function(){tone(400,.06)},tick:function(){tone(900,.05,'square',0,.05)},
 right:function(){[523,659,784].forEach(function(f,i){tone(f,.18,'triangle',i*.08)})},
 wrong:function(){tone(180,.3,'sawtooth',0,.1);tone(140,.3,'sawtooth',.12,.1)},
 star:function(){tone(880,.15,'sine',0,.12);tone(1175,.2,'sine',.1,.12)},
 win:function(){[523,659,784,1047,784,1047].forEach(function(f,i){tone(f,.2,'triangle',i*.11)})}};
 
var cv=$('#cf'),cx=cv.getContext('2d'),P=[],run=0;
function burst(x,y,n){cv.width=innerWidth;cv.height=innerHeight;for(var i=0;i<n;i++)P.push({x:x,y:y,vx:(Math.random()-.5)*14,vy:-Math.random()*13-3,s:r(5,11),c:'hsl('+r(0,360)+',90%,60%)',l:90});
 if(run)return;run=1;(function f(){cx.clearRect(0,0,cv.width,cv.height);P=P.filter(function(p){p.vy+=.35;p.x+=p.vx;p.y+=p.vy;return--p.l>0});P.forEach(function(p){cx.fillStyle=p.c;cx.fillRect(p.x,p.y,p.s,p.s*.6)});if(P.length)requestAnimationFrame(f);else{run=0;cx.clearRect(0,0,cv.width,cv.height)}})()}
 
function show(id){A('.view').forEach(function(v){v.classList.toggle('on',v.id===id)});scrollTo(0,0)}
function best(id){return +ls('aq_'+id)||0}
function stars(n){var s='';for(var i=1;i<=5;i++)s+=i<=n?'★':'☆';return s}
function total(){var t=0;AGES.forEach(function(a){a.g.forEach(function(g){t+=best(g.id)})});$('#tot').textContent='⭐ '+t}
function home(){$('#ages').innerHTML=AGES.map(function(a,i){return '<div class="col-12 col-md-4"><div class="agec" data-a="'+i+'" style="--c:'+a.c+'"><div class="ae">'+a.e+'</div><h3>'+a.t+'</h3><b>'+a.n+'</b><p>'+a.d+'</p><span class="go">'+a.g.length+' ta o‘yin →</span></div></div>'}).join('');total()}
function list(i){var a=AGES[i];cur.ai=i;$('#lt').textContent=a.e+' '+a.t+' — '+a.n;$('#glist').innerHTML=a.g.map(function(g,k){return '<div class="col-6 col-md-4 col-lg-3"><div class="gc" data-a="'+i+'" data-g="'+k+'" style="--c:'+a.c+'"><div class="ge">'+g.e+'</div><b>'+g.n+'</b><p>'+g.d+'</p><div class="st">'+stars(best(g.id))+'</div></div></div>'}).join('');show('list')}
 
function say(t){var b=$('#bub');b.textContent=t;b.classList.remove('pop');void b.offsetWidth;b.classList.add('pop')}
function timer(sec,end){var t0=Date.now(),last=-1;clearInterval(T);function f(){var left=Math.max(0,sec-(Date.now()-t0)/1000),k=Math.ceil(left),b=$('#tbar');b.style.width=left/sec*100+'%';b.className=left/sec<.25?'r':left/sec<.5?'o':'';$('#ttxt').textContent=k+' s';if(k!==last){last=k;if(k<=3&&k>0)S.tick()}if(left<=0){clearInterval(T);end()}}T=setInterval(f,100);f();return function(){return(Date.now()-t0)/1000}}
 
function start(ai,gi){var g=AGES[ai].g[gi];clearInterval(T);cur={ai:ai,gi:gi,g:g,i:0,sum:0,lock:0};$('#pn').textContent=g.e+' '+g.n;$('#ps').textContent='⭐ 0';$('#q').innerHTML='';$('#opts').innerHTML='';$('#mem').innerHTML='';$('#mem').onclick=null;$('#res').classList.remove('on');show('play');say('Tayyormisan? Boshladik! 🚀');g.mem?mem():next()}
function next(){var g=cur.g;if(cur.i>=RN)return fin(cur.sum/RN);cur.lock=0;$('#pr').textContent=(cur.i+1)+'/'+RN;var d=g.gen(cur.i/(RN-1)),q=$('#q');cur.d=d;q.innerHTML=d.q;q.classList.remove('in');void q.offsetWidth;q.classList.add('in');
 $('#opts').className='opts '+(g.st||'');$('#opts').innerHTML=d.o.map(function(v,k){return '<button class="opt c'+k+'" style="animation-delay:'+k*.12+'s" data-v="'+v+'">'+v+'</button>'}).join('');
 cur.el=timer(g.time,function(){ans(null,null)})}
function ans(v,btn){if(cur.lock)return;cur.lock=1;clearInterval(T);var d=cur.d,ok=v!==null&&String(v)===String(d.a),u=cur.el()/cur.g.time,s=0;
 if(ok){s=u<=.4?5:u<=.55?4:u<=.75?3:2;S.right();setTimeout(S.star,250);burst(innerWidth/2,innerHeight/3,20+s*8)}else S.wrong();
 cur.sum+=s;$('#ps').textContent='⭐ '+cur.sum;
 A('#opts .opt').forEach(function(b){if(b.dataset.v===String(d.a))b.classList.add('right');else if(b===btn)b.classList.add('bad');b.disabled=true});
 say(ok?['','','Yaxshi! 👍','Zo‘r! 😊','Barakalla! 🎉','Juda tez! 🚀'][s]+' +'+s+' ⭐':v===null?'Vaqt tugadi! ⏰ Keyingisida tezroq!':'Xato, to‘g‘risi yashil. Urinib ko‘r! 💪');
 cur.i++;setTimeout(next,1300)}
 
function mem(){var m=cur.g.mem,E=sh(['🐶','🐱','🦁','🐸','🐵','🐼','🦄','🐙','🚀','⚽','🍕','🎈','🌈','🍓']).slice(0,m.pairs),C=sh(E.concat(E)),o=[],hit=0,busy=0;
 $('#q').innerHTML='<h3>Bir xil rasmlarni top!</h3>';$('#pr').textContent='0/'+m.pairs;
 $('#mem').innerHTML=C.map(function(e,i){return '<div class="mc" data-i="'+i+'"><div class="mi"><span class="mf">❓</span><span class="mb">'+e+'</span></div></div>'}).join('');
 var el=timer(m.time,function(){S.wrong();fin(hit>=m.pairs/2?1:0,1)});
 $('#mem').onclick=function(ev){var c=ev.target.closest('.mc');if(!c||busy||c.classList.contains('f')||c.classList.contains('ok'))return;S.flip();c.classList.add('f');o.push(c);
  if(o.length<2)return;busy=1;var a=o[0],b=o[1];
  if(C[a.dataset.i]===C[b.dataset.i])setTimeout(function(){a.classList.add('ok');b.classList.add('ok');S.right();hit++;$('#pr').textContent=hit+'/'+m.pairs;o=[];busy=0;if(hit===m.pairs){clearInterval(T);var u=el()/m.time;fin(u<=.4?5:u<=.55?4:u<=.7?3:u<=.9?2:1,1)}},350);
  else setTimeout(function(){a.classList.remove('f');b.classList.remove('f');o=[];busy=0;S.wrong()},800)}}
 
function fin(a,m){clearInterval(T);var f=m?a:Math.max(a>0?1:0,Math.round(a)),g=cur.g;if(f>best(g.id))ls('aq_'+g.id,f);total();
 $('#rt').textContent=['Yana urinib ko‘r! 💪','Boshlanish yaxshi! 🙂','Yaxshi natija! 👍','Zo‘r! 😊','Ajoyib! 🎉','Chempion! 🏆'][f];
 $('#rs').innerHTML=[1,2,3,4,5].map(function(i){return '<span class="'+(i<=f?'on':'')+'" style="animation-delay:'+i*.2+'s">★</span>'}).join('');
 $('#rp').textContent=m?'Xotira o‘yini yakunlandi':'Jami: '+cur.sum+' / '+RN*5+' ball';$('#res').classList.add('on');
 if(f>=3){S.win();burst(innerWidth/2,innerHeight/2,120)}else S.star()}
 
document.addEventListener('click',function(e){var t=e.target,x;
 if(x=t.closest('.opt')){ans(x.dataset.v,x);return}
 if(x=t.closest('.agec')){S.click();list(+x.dataset.a)}
 else if(x=t.closest('.gc')){S.click();start(+x.dataset.a,+x.dataset.g)}
 else if(x=t.closest('[data-go]')){S.click();clearInterval(T);var g=x.dataset.go;if(g==='list'&&cur.ai!==undefined)list(cur.ai);else show('home')}
 else if(t.id==='snd'){mute=!mute;ls('aq_m',mute?'1':'0');t.textContent=mute?'🔇':'🔊';S.click()}
 else if(t.id==='again')start(cur.ai,cur.gi);
 else if(t.id==='tolist'){$('#res').classList.remove('on');list(cur.ai)}});
 
var pr=document.createElement('div');pr.className='btn';pr.style.cssText='position:absolute;visibility:hidden';document.body.appendChild(pr);
if(getComputedStyle(pr).display==='block')document.documentElement.classList.add('nobs');pr.remove();
$('#snd').textContent=mute?'🔇':'🔊';home();
})();