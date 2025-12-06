import{j as e,u as n,T as a,O as o}from"./index-epRvf3mL.js";function c({name:r,quantity:s,price:t}){return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"",children:[e.jsx("p",{className:`text-base text-rose-900 font-semibold\r
                py-1`,children:r}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsxs("span",{className:"text-lg text-red font-bold",children:[s,"x"]}),e.jsxs("span",{className:`text-base text-rose-500\r
                    `,children:["@$",t.toFixed(2)]}),e.jsxs("span",{className:"text-base font-semibold text-rose-500",children:["$",(s*t).toFixed(2)]})]})]})})}const i="/sugar-menu/assets/images/icon-remove-item.svg";function l({itemId:r}){const{removeFromCart:s}=n();return e.jsx(e.Fragment,{children:e.jsx("img",{onClick:()=>s(r),src:i,alt:"icon-remove",className:`h-6\r
                rounded-full border border-rose-500 hover:border-rose-900\r
                p-1\r
                cursor-pointer`})})}function m(){const{cart:r}=n();return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"w-full",children:[r.map(s=>e.jsxs("div",{className:`flex items-center justify-between\r
                            py-4\r
                            border-b`,children:[e.jsx(c,{name:s.name,quantity:s.quantity,price:s.price}),e.jsx(l,{itemId:s.id})]},s.id)),e.jsx(a,{})]}),e.jsx(o,{children:"Confirm Order"})]})}export{m as default};
