(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();function u(s){if(s===null)return null;const o=document.createElement("div");o.style.display="grid",o.style.gridTemplateColumns=`repeat(${s[0].length}, 1fr)`,o.style.gridTemplateRows=`repeat(${s.length}, 1fr)`;for(let t=0;t<s.length;t++)for(let n=0;n<s[t].length;n++){const e=document.createElement("div");e.style.backgroundColor=s[t][n].color,o.appendChild(e)}return o}function a(s,o,t){if(s<1||o<1||t<1)return null;const n=[];for(let r=0;r<t;r++)n.push(h());const e=[];for(let r=0;r<o;r++){const l=[];for(let i=0;i<s;i++){const c=n[Math.floor(Math.random()*t)];l.push({x:i,y:r,color:c})}e.push(l)}return e}function d(s){if(s===null)return null;const o={};s.forEach(n=>{n.forEach(e=>{o[e.color]||(o[e.color]=[]),o[e.color].push(e)})});let t=null;return Object.entries(o).forEach(([n,e])=>{const r=f(e);(!t||r>t.size)&&(t={color:n,size:r})}),t}function f(s){let o=0;const t=new Set;return s[0],s.forEach(n=>{if(t.has(n))return;t.add(n);let e=0;const r=[n];for(;r.length>0;){const l=r.shift();e++,p(l,s).forEach(i=>{t.has(i)||(t.add(i),r.push(i))})}o=Math.max(o,e)}),o}function p(s,o){const{x:t,y:n}=s;return o.filter(e=>e.x===t-1&&e.y===n||e.x===t+1&&e.y===n||e.x===t&&e.y===n-1||e.x===t&&e.y===n+1)}function h(){const s="0123456789ABCDEF";let o="#";for(let t=0;t<6;t++)o+=s[Math.floor(Math.random()*16)];return o}const m=document.querySelector("#form");m.addEventListener("submit",s=>{s.preventDefault();const o=document.querySelector("#width").value,t=document.querySelector("#height").value,n=document.querySelector("#numColors").value,e=a(o,t,n);if(e===null)document.querySelector("#app").innerHTML="",document.querySelector("#result").innerHTML='<p id="phrases"> Please enter valid values</p>';else{const r=d(e),l=u(e);document.querySelector("#app").appendChild(l),document.querySelector("#result").innerHTML=`
      <div id="resultBox">
        <p id="phrases"> The Biggest area contains ${r.size} cells and its color is </p>
        <div style="background:${r.color}" id="colorBox"  > ${r.color} </div>
      </div> 
    `}});