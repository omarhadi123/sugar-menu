const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/FullCart-D8_Rocz9.js","assets/index-DAD4Gu-A.js","assets/index-BWcwPRuv.css","assets/EmptyCart-B-31jfNk.js"])))=>i.map(i=>d[i]);
import{j as t,u as n,r as o,R as e,_ as s}from"./index-DAD4Gu-A.js";function l({quantity:r}){return t.jsx(t.Fragment,{children:t.jsxs("h1",{className:"text-3xl md:max-lg:text-2xl text-red font-bold",children:["Your Cart (",r,")"]})})}const x=e.lazy(()=>s(()=>import("./FullCart-D8_Rocz9.js"),__vite__mapDeps([0,1,2]))),i=e.lazy(()=>s(()=>import("./EmptyCart-B-31jfNk.js"),__vite__mapDeps([3,1,2])));function d(){const{cart:r,getQuantity:a}=n();return t.jsx(t.Fragment,{children:t.jsxs("section",{className:`md:w-1/3 lg:1/4\r
                bg-rose-50\r
            p-6 my-4\r
            rounded-xl\r
            relative`,children:[t.jsx(l,{quantity:a()}),t.jsx(o.Suspense,{children:r.length>0?t.jsx(x,{}):t.jsx(i,{})})]})})}export{d as default};
