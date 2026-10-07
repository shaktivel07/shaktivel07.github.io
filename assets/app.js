const pg=document.body.dataset.page;
const L=[["index.html","Home","home"],["about.html","About","about"],["education.html","Education","education"],["experience.html","Experience","experience"],["projects.html","Projects","projects"],["research.html","Research","research"],["skills.html","Skills","skills"]];
const M=[["achievements.html","Achievements","achievements"],["certifications.html","Certifications","certifications"],["leadership.html","Leadership","leadership"]];
const lk=l=>`<a href="${l[0]}" class="${l[2]===pg?'on':''}" ${l[2]===pg?'aria-current="page"':''}>${l[1]}</a>`;
const logo='<svg height="32" viewBox="0 0 16 16" width="32" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.5 7.5 0 0 1 4 0c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z"/></svg>';
const inM=M.some(m=>m[2]===pg);
document.body.insertAdjacentHTML('afterbegin',`<header class="hdr" id="hdr"><div class="container"><a class="brand" href="index.html">${logo}<span>shaktivel07</span></a>
<button class="burger" id="burger" aria-label="Menu" aria-expanded="false">☰</button>
<nav class="nav" aria-label="Main">${L.map(lk).join('')}<details class="more ${inM?'on':''}"><summary>More</summary><div>${M.map(lk).join('')}</div></details><a class="btn go" href="contact.html" style="color:#fff;margin-left:8px">Contact</a></nav></div></header>`);
const h=document.getElementById('hdr'),b=document.getElementById('burger');
b.onclick=()=>{const o=h.classList.toggle('open');b.setAttribute('aria-expanded',o);b.textContent=o?'✕':'☰'};
if(inM)document.querySelector('details.more').open=true;
document.body.insertAdjacentHTML('beforeend',`<footer><div class="container"><span>© 2026 Shaktivel T K</span><nav>${[...L,...M,["contact.html","Contact"]].map(l=>`<a href="${l[0]}">${l[1]}</a>`).join('')}</nav></div></footer>`);
