const $=s=>document.querySelector(s), $$=s=>document.querySelectorAll(s);
function toggleMenu(){const nav=document.querySelector(".nav nav");if(!nav)return;nav.style.display=nav.style.display==="flex"?"none":"flex";if(nav.style.display==="flex"){nav.style.position="absolute";nav.style.top="76px";nav.style.left="0";nav.style.right="0";nav.style.padding="25px";nav.style.background="#08090a";nav.style.flexDirection="column"}}
function focusSearch(){const x=$("#search");if(x){x.focus();document.querySelector("#discover").scrollIntoView({behavior:"smooth"})}}
document.addEventListener("keydown",e=>{if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==="k"){e.preventDefault();focusSearch()}});
function filterProducts(){const q=($("#search")?.value||"").toLowerCase();const active=document.querySelector(".cat.active")?.dataset.filter||"all";$$(".product").forEach(p=>{const type=p.dataset.type,name=p.dataset.name.toLowerCase();p.style.display=(active==="all"||type.includes(active))&&(!q||name.includes(q)||type.includes(q))?"block":"none"})}
$$(".cat").forEach(c=>c.onclick=()=>{$$(".cat").forEach(x=>x.classList.remove("active"));c.classList.add("active");filterProducts()});
function buy(name,price){$("#modalContent").innerHTML=`<span class="eyebrow">PRODUCT</span><h2>${name}</h2><p>Premium digital product from a NEXUS publisher.</p><div style="display:flex;justify-content:space-between;align-items:center;border-top:1px solid #292e33;padding-top:20px;margin-top:25px"><strong style="font-size:24px">${price}</strong><button class="primary" onclick="showToast('Demo checkout created');closeModal()">Purchase →</button></div>`;$("#modal").classList.add("show")}
function closeModal(){const m=$("#modal");if(m)m.classList.remove("show")}
function showToast(text){const t=$("#toast");if(!t)return;t.textContent=text;t.classList.add("show");setTimeout(()=>t.classList.remove("show"),2800)}
function submitPublish(e){e.preventDefault();const n=$("#pname").value;showToast(`Draft "${n}" created — demo upload step ready`);e.target.reset()}
if($("#modal"))$("#modal").addEventListener("click",e=>{if(e.target.id==="modal")closeModal()});
