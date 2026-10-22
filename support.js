// GENERATED from dc-runtime/src/*.ts - do not edit. Rebuild with `bun build.ts` (see the package README for the source-only recipe).
"use strict";(()=>{var Rt=Object.defineProperty,Mt=(t,n,e)=>n in t?Rt(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e,T=(t,n,e)=>Mt(t,typeof n!="symbol"?n+"":n,e);function L(){const t=window.React;if(!t)throw new Error("dc-runtime: window.React is not available yet");return t}function Tt(){const t=window.ReactDOM;if(!t)throw new Error("dc-runtime: window.ReactDOM is not available yet");return t}var A=((...t)=>L().createElement(...t));function Lt(t){const n=t.querySelector("x-dc");if(!n)return null;const e=t.querySelector("script[data-dc-script]"),{props:r,preview:o}=B(e?.getAttribute("data-props")??null);return{template:n.innerHTML,js:e&&e.textContent||"",props:r,preview:o}}function tt(t){const n=/<x-dc(?:\s[^>]*)?>/.exec(t);if(!n)return null;const e=t.lastIndexOf("</x-dc>");if(e===-1||e<n.index)return null;const r=t.slice(n.index+n[0].length,e),s=new DOMParser().parseFromString(t,"text/html").querySelector("script[data-dc-script]"),{props:i,preview:l}=B(s?.getAttribute("data-props")??null);return{template:r,js:s&&s.textContent||"",props:i,preview:l}}function B(t){if(!t)return{props:null,preview:null};let n;try{n=JSON.parse(t)}catch{return{props:null,preview:null}}if(!n||typeof n!="object"||Array.isArray(n))return{props:null,preview:null};const e=n,r=e.$preview&&typeof e.$preview=="object"?e.$preview:null,o={};for(const s of Object.keys(e))s[0]!=="$"&&(o[s]=e[s]);return{props:Object.keys(o).length?o:null,preview:r}}function Pt(t){let n=t||"";try{n=decodeURIComponent(n)}catch{}return(n.split("/").pop()||"Root").replace(/\.dc\.html$|\.html?$/,"")||"Root"}var Dt=`
    .sc-placeholder{background:color-mix(in srgb,currentColor 8%,transparent);
      border:1px solid color-mix(in srgb,currentColor 50%,transparent);
      border-radius:2px;box-sizing:border-box;overflow:hidden}
    @keyframes sc-shine{0%{background-position:100% 50%}100%{background-position:0% 50%}}
    html.sc-dc-streaming .sc-placeholder,
    html.sc-dc-streaming .sc-interp.sc-missing{position:relative;
      background:color-mix(in srgb,currentColor 5%,transparent);
      border-color:transparent}
    html.sc-dc-streaming .sc-placeholder::before,
    html.sc-dc-streaming .sc-interp.sc-missing::before{content:'';
