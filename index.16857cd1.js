function e(e,t,o,a){Object.defineProperty(e,t,{get:o,set:a,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},a={},n=t.parcelRequire071e;null==n&&((n=function(e){if(e in o)return o[e].exports;if(e in a){var t=a[e];delete a[e];var n={id:e,exports:{}};return o[e]=n,t.call(n.exports,n,n.exports),n.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){a[e]=t},t.parcelRequire071e=n),n.register("76vef",(function(t,o){e(t.exports,"default",(function(){return s}));var a=n("hDH6t"),r=n("9YTuV"),u=n("87aiD"),i=n("iRSR1");var s=function(){const e={wrapGoods:document.querySelector(".goods")},t=[];a.default.forEach((e=>t.push(new(0,r.default)(e)))),t.forEach((t=>{e.wrapGoods.append((0,i.default)((0,u.default)(t)))}))}})),n.register("hDH6t",(function(t,o){e(t.exports,"default",(function(){return n}));const a=["кг","л","г"];var n=[{shortName:"Сардельки «Алан»",fullName:"Сардельки «Алан» «Ретро» з вершками в/ґ н/о\n    Сардельки «Алан» «Ретро» з вершками в/ґ н/о",measur:a[0],volume:500,price:200,img:{url:"https://content.silpo.ua/sku/ecommerce/7/545x440wwm/72620_545x440wwm_f865a87e-2cfd-cd86-37ea-15160792313c.png",alt:"food"},quantity:32},{shortName:"Cola",fullName:"Напій Coca-Cola",measur:a[1],volume:1,price:25,img:{url:"https://content.silpo.ua/sku/ecommerce/48/545x440wwm/486807_545x440wwm_ebd928d0-8826-3ba2-fb22-33e4c8209e5d.png",alt:"water"},quantity:23},{shortName:"Pasta ZARA",fullName:"Вироби макаронні Pasta ZARA «Рісіні»",measur:a[2],volume:500,price:38,img:{url:"https://content.silpo.ua/sku/ecommerce/59/545x440wwm/599480_545x440wwm_34dd450c-0aaa-3129-2e57-0066c33c8539.png",alt:"food"},quantity:12},{shortName:"кус-кус",fullName:"Крупа «Премія»® пшенична кус-кус",measur:a[2],volume:500,price:29,img:{url:"https://content.silpo.ua/sku/ecommerce/85/545x440wwm/856915_545x440wwm_30d66171-8349-3a1a-9918-cc78e270c7cd.png",alt:"food"},quantity:13},{shortName:"Пиво Captain Jack",fullName:"Пиво Captain Jack Orange світле",measur:a[1],volume:.3,price:49,img:{url:"https://content.silpo.ua/sku/ecommerce/91/545x440wwm/911040_545x440wwm_693ef8b2-0fd6-9f88-4129-1d1770b9a984.png",alt:"beer"},quantity:12}]})),n.register("9YTuV",(function(t,o){e(t.exports,"default",(function(){return a}));class a{constructor({shortName:e="",fullName:t="",measur:o="",volume:a=0,price:n=0,img:{url:r="",alt:u=""}={},quantity:i=0}){this.shortName=e,this.fullName=t,this.measur=o,this.volume=a,this.price=n,this.url=r,this.alt=u,this.quantity=i}}})),n.register("87aiD",(function(t,o){e(t.exports,"default",(function(){return a}));var a=function({shortName:e="",fullName:t="",measur:o="",volume:a=0,price:n=0,url:r="",alt:u="",quantity:i=0}){return`\n      <div class="goods__img"><img src="${r}" alt="${u}"></div>\n      <div class="goods__title">${e}</div>\n      <div class="goods__info">\n        <div class="goods__quantity">Есть: ${i},</div>\n        <div class="goods__type">${a} ${o}</div>\n      </div>\n      <div class="goods__control">\n        <div class="goods__price">${n} грн</div>\n        <button class="goods__btn">Купить</button>\n      </div>\n    `}})),n.register("iRSR1",(function(t,o){e(t.exports,"default",(function(){return a}));var a=function(e){const t=document.createElement("div");return t.classList.add("goods__wrapper"),t.innerHTML=e,t}})),document.addEventListener("DOMContentLoaded",(()=>{(0,n("76vef").default)()}));
//# sourceMappingURL=index.16857cd1.js.map
