import{a as m}from"./chunk-MWXQMU46.js";import{a as c}from"./chunk-AO7HSRQJ.js";import"./chunk-74TMIHW5.js";import"./chunk-GUI3OGMB.js";import"./chunk-CPJJWSXC.js";import{a as d}from"./chunk-X2U7WVKR.js";import"./chunk-U37GBM4D.js";import{b as o}from"./chunk-GZR6PDGT.js";import{d as p,f as e}from"./chunk-IAMGS6YL.js";import"./chunk-CRNLDV6W.js";import"./chunk-GGCEL3NW.js";var f=n=>{let[,t,a]=n.split(/(\d+)/);if(a==="bd")return`${t} dias \xFAteis`;if(a==="d")return`${t} dias`;if(a==="h")return`${t} horas`};function v({simulation:n}){let{cart:t}=c(),a=n.value?.logisticsInfo?.reduce((r,{slas:i})=>[...r,...i],[])??[],s=t.value?.clientPreferencesData.locale||"pt-BR",l=t.value?.storePreferencesData.currencyCode||"BRL";return n.value==null?null:a.length===0?e("div",{class:"p-2",children:e("span",{children:"CEP inv\xE1lido"})}):e("ul",{class:"flex flex-col gap-4 p-4 bg-base-200 rounded-[4px]",children:[a.map(r=>e("li",{class:"flex justify-between items-center border-base-200 not-first-child:border-t",children:[e("span",{class:"text-button text-center",children:["Entrega ",r.name]}),e("span",{class:"text-button",children:["at\xE9 ",f(r.shippingEstimate)]}),e("span",{class:"text-base font-semibold text-right",children:r.price===0?"Gr\xE1tis":m(r.price/100,l,s)})]})),e("span",{class:"text-base-300",children:"Os prazos de entrega come\xE7am a contar a partir da confirma\xE7\xE3o do pagamento e podem variar de acordo com a quantidade de produtos na sacola."})]})}function g({items:n}){let t=o(""),a=o(!1),s=o(null),{simulate:l,cart:r}=c(),i=p(async()=>{if(t.value.length===8)try{a.value=!0,s.value=await l({items:n,postalCode:t.value,country:r.value?.storePreferencesData.countryCode||"BRA"})}finally{a.value=!1}},[]);return e("div",{class:"flex flex-col gap-2",children:[e("div",{class:"flex flex-col",children:[e("span",{children:"Calcular frete"}),e("span",{children:"Informe seu CEP para consultar os prazos de entrega"})]}),e("div",{children:e("form",{class:"form-control input-group",onSubmit:u=>{u.preventDefault(),i()},children:e("div",{class:"input-group",children:[e("input",{as:"input",type:"text",class:"input input-bordered",placeholder:"Seu cep aqui",value:t.value,maxLength:8,onChange:u=>{t.value=u.currentTarget.value}}),e(d,{type:"submit",loading:a.value,children:"Calcular"})]})})}),e("div",{children:e("div",{children:e(v,{simulation:s})})})]})}var x=g;export{x as default};
