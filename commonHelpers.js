import{S as f,i as l}from"./assets/vendor-0fc460d7.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();function d(){const o=t.form.elements.searchQuery.value.trim(),s="42027897-ca60981f5971518ff8fefcb8b",a="https://pixabay.com/api/",n=new URLSearchParams({key:s,q:`${o}`,image_type:"photo",orientation:"horizontal",safesearcg:!0});return fetch(`${a}?${n}`).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})}function m(o){return o.map(({webformatURL:s,largeImageURL:a,tags:n,likes:e,views:r,comments:i,downloads:u})=>`<li class="photo-card">
  <a class="gallery__link" href="${a}">
  <img src="${s}" alt="${n}" class="gallery__image" width="300" height="200" loading="lazy"/></a>
  <div class="info">
    <p class="info-item">
      <b>Likes ${e}</b>
    </p>
    <p class="info-item">
      <b>Views ${r}</b>
    </p>
    <p class="info-item">
      <b>Comments ${i}</b>
    </p>
    <p class="info-item">
      <b>Downloads ${u}</b>
    </p>
  </div>
</li>`).join("")}const t={form:document.querySelector("#search-form"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader")};t.form.addEventListener("submit",h);const y=' <span class="css-loader"></span>';t.loader.insertAdjacentHTML("beforeEnd",y);t.loader.hidden=!0;let p=new f(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});function h(o){if(o.preventDefault(),t.gallery.innerHTML="",t.loader.hidden=!1,t.form.elements.searchQuery.value.trim()===""){c("Sorry, but you must enter your search query. Please try again.");return}d().then(s=>{const{hits:a,totalHits:n}=s;a.length<1&&l.warning({title:"Warning",message:"Sorry, there are no images matching your search query. Please try again."}),t.gallery.insertAdjacentHTML("beforeend",m(a)),p.refresh(),a.length<1||l.success({title:"Success",message:`We found ${n} images for you.`}),t.loader.hidden=!0,t.form.reset()}).catch(c)}function c(o=`${o.name}: ${o.message}`){t.loader.hidden=!0,t.form.reset(),l.error({title:"Error",message:`${o}`})}
//# sourceMappingURL=commonHelpers.js.map
