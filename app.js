const products=[
{name:"Void Realm — Fantasy Map",cat:"Maps",price:499,cls:"t1",label:"VOID REALM"},
{name:"Nexus Hub Systems",cat:"Plugins",price:799,cls:"t2",label:"NEXUS HUB"},
{name:"Cyber Gaming UI Pack",cat:"Assets",price:299,cls:"t3",label:"CYBER PACK"},
{name:"Skyblock Odyssey",cat:"Maps",price:599,cls:"t2",label:"SKYBLOCK"},
{name:"Bedrock Survival Server",cat:"Servers",price:999,cls:"t1",label:"SURVIVAL"},
{name:"Creator Thumbnail Pack",cat:"Assets",price:249,cls:"t3",label:"CREATOR"}
];
function renderProducts(){
 const box=document.getElementById("products"); if(!box)return;
 const q=(document.getElementById("search")?.value||"").toLowerCase();
 const f=document.getElementById("filter")?.value||"All categories";
 box.innerHTML=products.filter(p=>(f==="All categories"||p.cat===f)&&p.name.toLowerCase().includes(q)).map(p=>`<article class="product-card"><div class="thumb ${p.cls}">${p.label}</div><div class="info"><span class="tag">${p.cat.toUpperCase()}</span><h3>${p.name}</h3><p class="muted">Premium digital creator product.</p><div class="price">₹${p.price}</div><a class="btn ghost" href="product.html">VIEW PRODUCT →</a></div></article>`).join("");
}
document.getElementById("search")?.addEventListener("input",renderProducts);
document.getElementById("filter")?.addEventListener("change",renderProducts);
renderProducts();
document.querySelector(".menu")?.addEventListener("click",()=>document.querySelector("nav")?.classList.toggle("open"));
