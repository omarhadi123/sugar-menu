import{j as r,u as o}from"./index-epRvf3mL.js";const a="/sugar-menu/assets/images/icon-add-to-cart.svg";function l({addToCart:e}){return r.jsx(r.Fragment,{children:r.jsxs("button",{onClick:()=>{e()},className:`flex\r
                    text-rose-900 text-sm font-semibold\r
                    py-3 px-8\r
                    bg-rose-50\r
                    border border-rose-300 rounded-full hover:border-red\r
cursor-pointer`,children:[r.jsx("img",{src:a,alt:"",className:"pr-2"})," Add to Cart"]})})}function d({cartItem:e}){const{removeFromCart:s,decQty:t,incQty:n}=o();return r.jsx(r.Fragment,{children:r.jsxs("div",{className:`flex gap-8 items-center\r
            bg-red\r
            py-2 px-7\r
            rounded-full`,children:[r.jsx("button",{onClick:()=>{e!==void 0&&(t(e?.id),e.quantity<=1&&s(e.id))},className:`group\r
                    w-5 h-5\r
                    p-1\r
                    cursor-pointer\r
                    border border-rose-50 rounded-full\r
                    hover:bg-rose-50`,children:r.jsx("div",{className:`w-full h-full\r
                        bg-[url('/assets/images/icon-decrement-quantity.svg')] bg-no-repeat bg-center\r
                        group-hover:bg-[url('/assets/images/active-icon-decrement-quantity.svg')]\r
                        `})}),r.jsx("p",{className:"text-lg text-rose-50",children:e?.quantity}),r.jsx("button",{onClick:()=>{e!==void 0&&n(e.id)},className:`group w-5 h-5\r
                    p-1\r
                    cursor-pointer\r
                    border border-rose-50 rounded-full\r
                    hover:bg-rose-50`,children:r.jsx("div",{className:"w-full h-full bg-[url('/assets/images/icon-increment-quantity.svg')] group-hover:bg-[url('/assets/images/active-icon-increment-quantity.svg')]"})})]})})}function c({item:e}){const{cart:s,addToCart:t}=o(),n=s.find(i=>i.id===e.id)||null;return r.jsx(r.Fragment,{children:r.jsx("div",{className:`absolute -bottom-5 left-1/2 -translate-x-1/2 z-1\r
            w-full\r
            flex items-center justify-center`,children:n&&n?.quantity>=1?r.jsx(d,{cartItem:n}):r.jsx(l,{addToCart:()=>{t(e)}})})})}export{c as default};
