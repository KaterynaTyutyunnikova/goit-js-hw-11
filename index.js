import{a as m,S as y,i as s}from"./assets/vendor-CrlV4O_2.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const g="50322611-1d4a2dda66e83b148172da45e",h="https://pixabay.com/api/";async function b(i){const r={key:g,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0};try{return(await m.get(h,{params:r})).data}catch{throw new Error("Failed to fetch images from Pixabay")}}const l=document.querySelector(".gallery"),u=document.querySelector(".loader"),L=new y(".gallery a");function w(i){const r=i.map(({webformatURL:o,largeImageURL:n,tags:e,likes:t,views:a,comments:f,downloads:p})=>`
      <li class="gallery-item">
        <a href="${n}">
          <img src="${o}" alt="${e}" />
        </a>
        <div class="info">
          <p><b>Likes</b> ${t}</p>
          <p><b>Views</b> ${a}</p>
          <p><b>Comments</b> ${f}</p>
          <p><b>Downloads</b> ${p}</p>
        </div>
      </li>
    `).join("");l.insertAdjacentHTML("beforeend",r),L.refresh()}function v(){l.innerHTML=""}function S(){u.classList.add("active")}function c(){u.classList.remove("active")}const d=document.querySelector(".form"),P=d.querySelector('input[name="search-text"]');d.addEventListener("submit",async i=>{i.preventDefault();const r=P.value.trim();if(!r){s.warning({message:"Please enter a search term.",position:"topRight"});return}v(),S();try{const o=await b(r);if(o.hits.length===0){s.info({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),c();return}w(o.hits)}catch{s.error({message:"Something went wrong. Please try again later.",position:"topRight"})}finally{c()}});
//# sourceMappingURL=index.js.map
