const pg=document.body.dataset.page;
const L=[["index.html","Home","home"],["about.html","About","about"],["education.html","Education","education"],["experience.html","Experience","experience"],["projects.html","Projects","projects"],["research.html","Research","research"],["skills.html","Skills","skills"]];
const M=[["achievements.html","Achievements","achievements"],["certifications.html","Certifications","certifications"],["leadership.html","Leadership","leadership"]];
const lk=l=>`<a href="${l[0]}" class="${l[2]===pg?'on':''}" ${l[2]===pg?'aria-current="page"':''}>${l[1]}</a>`;
const logo='<img src="assets/photo.png" alt="Shaktivel T K" class="brand-avatar" width="32" height="32" onerror="this.onerror=null;this.src=\'assets/photo-placeholder.svg\'">';
const inM=M.some(m=>m[2]===pg);
if(!document.querySelector('link[rel~="icon"]')){
    const fav=document.createElement('link');
    fav.rel='icon';
    fav.type='image/png';
    fav.href='assets/photo.png';
    document.head.appendChild(fav);
}
document.body.insertAdjacentHTML('afterbegin',`<header class="hdr" id="hdr"><div class="container"><a class="brand" href="index.html">${logo}<span>shaktivel07</span></a>
<button class="burger" id="burger" aria-label="Menu" aria-expanded="false">☰</button>
<nav class="nav" aria-label="Main">${L.map(lk).join('')}<details class="more ${inM?'on':''}"><summary>More</summary><div>${M.map(lk).join('')}</div></details><a class="btn go" href="contact.html" style="color:#fff;margin-left:8px">Contact</a></nav></div></header>`);
const h=document.getElementById('hdr'),b=document.getElementById('burger');
b.onclick=()=>{const o=h.classList.toggle('open');b.setAttribute('aria-expanded',o);b.textContent=o?'✕':'☰'};
if(inM)document.querySelector('details.more').open=true;
document.body.insertAdjacentHTML('beforeend',`<footer><div class="container"><span>© 2026 Shaktivel T K</span><nav>${[...L,...M,["contact.html","Contact"]].map(l=>`<a href="${l[0]}">${l[1]}</a>`).join('')}</nav></div></footer>`);
