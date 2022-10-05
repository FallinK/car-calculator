(function(){"use strict";var t={6500:function(t,e,n){var i=n(9242),a=n(3396);const l={class:"wrapper"};function s(t,e){const n=(0,a.up)("cc-navbar"),i=(0,a.up)("router-view");return(0,a.wg)(),(0,a.iD)("div",l,[(0,a.Wm)(n),(0,a.Wm)(i)])}var u=n(89);const r={},o=(0,u.Z)(r,[["render",s]]);var c=o,p=n(2483);function d(t,e,n,i,l,s){const u=(0,a.up)("cc-calculator");return(0,a.wg)(),(0,a.j4)(u)}var m=n(7139),v=n.p+"img/loading.db8068a5.svg";const g={class:"calculator"},_={class:"calculator__container"},h=(0,a._)("h1",{class:"calculator__title"}," Рассчитайте стоимость автомобиля в лизинг ",-1),f={class:"calculator__inputs"},y={class:"calculator__results"},b={key:0,class:"calculator__submit"},w=(0,a._)("img",{src:v,alt:"Loading"},null,-1),S={key:1,class:"calculator__submit"};function k(t,e,n,i,l,s){const u=(0,a.up)("cc-input"),r=(0,a.up)("cc-result"),o=(0,a.up)("cc-button");return(0,a.wg)(),(0,a.iD)("section",g,[(0,a._)("div",_,[h,(0,a._)("div",f,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t.inputs,(t=>((0,a.wg)(),(0,a.j4)(u,{key:t.type,input:t},{"input-title":(0,a.w5)((()=>[(0,a.Uk)((0,m.zw)(t.title),1)])),_:2},1032,["input"])))),128))]),(0,a._)("div",y,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t.results,(t=>((0,a.wg)(),(0,a.j4)(r,{result:t,key:t.type},null,8,["result"])))),128)),n.isLoading?((0,a.wg)(),(0,a.iD)("div",b,[t.isSending?((0,a.wg)(),(0,a.j4)(o,{key:0,onClick:s.submitCalc,disabled:"",class:(0,m.C_)({calculator__submit_loading:t.isSending})},{default:(0,a.w5)((()=>[w])),_:1},8,["onClick","class"])):((0,a.wg)(),(0,a.j4)(o,{key:1,onClick:s.submitCalc},{default:(0,a.w5)((()=>[(0,a.Uk)("Оставить заявку")])),_:1},8,["onClick"]))])):((0,a.wg)(),(0,a.iD)("div",S,[(0,a.Wm)(o,{onClick:s.submitCalc,disabled:t.isSending,class:(0,m.C_)({calculator__submit_disabled:t.isSending})},{default:(0,a.w5)((()=>[(0,a.Uk)("Оставить заявку")])),_:1},8,["onClick","disabled","class"])]))])])])}const C={class:"input__title"},x={class:"input__body"},T=["disabled"],O=(0,a._)("span",{class:"input__text_percent"}," ₽",-1),D=["disabled"],I=["min","max","disabled"];function j(t,e,n,l,s,u){return(0,a.wg)(),(0,a.iD)("div",{class:(0,m.C_)(["input",{input_disabled:t.isSending}])},[(0,a._)("h2",C,[(0,a.WI)(t.$slots,"input-title",{tag:"p"})]),(0,a._)("div",x,["%"!==n.input.type?(0,a.wy)(((0,a.wg)(),(0,a.iD)("input",{key:0,type:"tel",class:"input__text","onUpdate:modelValue":e[0]||(e[0]=t=>s.localValue=t),onInput:e[1]||(e[1]=(...t)=>u.maskInput&&u.maskInput(...t)),onKeydown:e[2]||(e[2]=(...t)=>u.preventEnter&&u.preventEnter(...t)),disabled:t.isSending,pattern:""},null,40,T)),[[i.nr,s.localValue,void 0,{lazy:!0}]]):"%"===n.input.type?((0,a.wg)(),(0,a.iD)("div",{key:1,class:"input__text",ref:"inputText",onClick:e[7]||(e[7]=(...e)=>t.$refs.percentInput.focus&&t.$refs.percentInput.focus(...e))},[(0,a._)("span",null,(0,m.zw)(u.initialFee),1),O,(0,a.wy)((0,a._)("input",{type:"tel",class:"input__percent","onUpdate:modelValue":e[3]||(e[3]=t=>s.localValue=t),onKeydown:e[4]||(e[4]=(...t)=>u.preventEnter&&u.preventEnter(...t)),onFocus:e[5]||(e[5]=(...t)=>u.toggleActive&&u.toggleActive(...t)),onBlur:e[6]||(e[6]=(...t)=>u.toggleActive&&u.toggleActive(...t)),disabled:t.isSending,ref:"percentInput"},null,40,D),[[i.nr,s.localValue,void 0,{lazy:!0}]])],512)):(0,a.kq)("",!0),(0,a.wy)((0,a._)("input",{class:(0,m.C_)(["input__slider",{input__slider_disabled:t.isSending}]),type:"range",min:n.input.min,max:n.input.max,"onUpdate:modelValue":e[8]||(e[8]=t=>s.valueSlider=t),disabled:t.isSending},null,10,I),[[i.nr,s.valueSlider]]),(0,a._)("div",{class:(0,m.C_)(["input__type",{input__type_small:"%"===n.input.type}])},(0,m.zw)(n.input.type),3)])],2)}var V=n(65);const P={props:{input:{type:Object,required:!0}},data(){return{localValue:0,valueSlider:0}},methods:{maskInput(t){let e=this.formatToNumber(t.target.value);t.target.value=e.toString().replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g,"$1 ")},...(0,V.OI)({setInputs:"calculator/setInputs",setResults:"calculator/setResults"}),...(0,V.nv)({considerResult:"calculator/considerResult"}),preventEnter(t){13==t.keyCode&&t.preventDefault()},toggleActive(){this.$refs.inputText.classList.toggle("input__text_active")},formatToString(t){return t.toString().replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g,"$1 ")},formatToNumber(t){return Number(t.replace(/\s/g,""))},updateInputs(t){let e=this.inputs;this.inputs.forEach(((n,i)=>{n.type===this.input.type&&(t<this.input.min?this.localValue=t=this.input.min:t>this.input.max&&(this.localValue=t=this.input.max),e[i].value=t,void 0!=n.result&&(e[i].result=this.formatToNumber(this.initialFee)),this.localValue=this.formatToString(this.localValue),this.setInputs(e),this.considerResult())}))}},mounted(){this.localValue=this.formatToString(this.input.value),this.valueSlider=this.input.value},computed:{...(0,V.rn)({inputs:t=>t.calculator.inputs,results:t=>t.calculator.results,isSending:t=>t.calculator.isSending}),...(0,V.Se)({monthlyPayment:"calculator/monthlyPayment",leasingAmount:"calculator/leasingAmount"}),initialFee(){return this.formatToString(Math.round(this.inputs[0].value*(this.input.value/100)))}},watch:{localValue(t){this.updateInputs(this.formatToNumber(t)),this.valueSlider=this.formatToNumber(this.localValue)},valueSlider(t){this.localValue=this.formatToString(t)}}},A=()=>{(0,i.sj)((t=>({"9d87d7f0":t.input.max,"9d87d614":t.input.min,"5305e715":t.input.value})))},R=P.setup;P.setup=R?(t,e)=>(A(),R(t,e)):A;var $=P;const E=(0,u.Z)($,[["render",j]]);var N=E;const Z={class:"result"},z={class:"result__title"},B={class:"result__value"};function U(t,e,n,i,l,s){return(0,a.wg)(),(0,a.iD)("div",Z,[(0,a._)("h2",z,(0,m.zw)(n.result.title),1),(0,a._)("div",B,(0,m.zw)(l.value)+" ₽",1)])}var L={props:{result:{type:Object,required:!0}},data(){return{value:0}},methods:{maskText(t){return t.toString().replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g,"$1 ")}},mounted(){this.value=this.maskText(this.result.value)},watch:{result(t){this.value=this.maskText(t.value)}}};const M=(0,u.Z)(L,[["render",U]]);var F=M;const K={class:"button-ui"};function W(t,e,n,i,l,s){return(0,a.wg)(),(0,a.iD)("button",K,[(0,a.WI)(t.$slots,"default")])}var J={name:"cc-button"};const q=(0,u.Z)(J,[["render",W]]);var Y=q,H={components:{CcInput:N,CcResult:F,CcButton:Y},props:{isLoading:{type:Boolean,default:!1}},computed:{...(0,V.rn)({inputs:t=>t.calculator.inputs,results:t=>t.calculator.results,isSending:t=>t.calculator.isSending})},methods:{submitCalc(){this.setBoolSending(!0),this.sendData()},...(0,V.OI)({setBoolSending:"calculator/setBoolSending"}),...(0,V.nv)({sendData:"calculator/sendData"})}};const G=(0,u.Z)(H,[["render",k]]);var Q=G,X={components:{CcCalculator:Q}};const tt=(0,u.Z)(X,[["render",d]]);var et=tt;function nt(t,e,n,i,l,s){const u=(0,a.up)("cc-calculator");return(0,a.wg)(),(0,a.j4)(u,{isLoading:!0})}var it={components:{CcCalculator:Q}};const at=(0,u.Z)(it,[["render",nt]]);var lt=at;const st=[{path:"/",name:"disabled",component:et},{path:"/loading",name:"loading",component:lt}],ut=(0,p.p7)({history:(0,p.PO)("/car-calculator/"),routes:st});var rt=ut;const ot={state:()=>({inputs:[{title:"Стоимость автомобиля",min:1e6,max:6e6,type:"₽",value:1e6},{title:"Первоначальный взнос",min:10,max:60,type:"%",value:10,result:0},{title:"Срок лизинга",min:1,max:60,type:"мес.",value:1}],results:[],isSending:!1}),mutations:{setInputs(t,e){t.inputs=e},setResults(t,e){t.results=e},setBoolSending(t,e){t.isSending=e}},getters:{monthlyPayment(t){return{title:"Ежемесячный платеж от",type:"monthlyPayment",value:Math.round((t.inputs[0].value-t.inputs[1].result)*(.035*Math.pow(1.035,t.inputs[2].value)/(Math.pow(1.035,t.inputs[2].value)-1)))}},leasingAmount(t,e){return{title:"Сумма договора лизинга",type:"leasingAmount",value:t.inputs[1].result+t.inputs[2].value*e.monthlyPayment.value}}},actions:{considerResult({getters:t,commit:e}){e("setResults",[t.leasingAmount,t.monthlyPayment])},async sendData({state:t,getters:e}){console.log(t.isSending);const n="https://hookb.in/eK160jgYJ6UlaRPldJ1P",i=JSON.stringify({car_coast:t.inputs[0].value,initail_payment:t.inputs[1].result,initial_percent:t.inputs[1].value,lease_term:t.inputs[2].value,monthly_payment_from:e.monthlyPayment.value,total_sum:e.leasingAmount.value});try{const e=await fetch(n,{method:"POST",body:JSON.stringify(i),headers:{"Content-Type":"application/json"}}),a=await e;console.log(a.status),t.isSending=await!1}catch(a){console.log(a),t.isSending=!1}}},namespaced:!0};var ct=(0,V.MT)({modules:{calculator:ot}});n(7658);const pt={class:"menu"},dt={class:"menu__body"},mt={class:"menu__list"};function vt(t,e,n,i,l,s){return(0,a.wg)(),(0,a.iD)("nav",pt,[(0,a._)("div",dt,[(0,a._)("ul",mt,[(0,a._)("li",{class:"menu__item",onClick:e[0]||(e[0]=e=>t.$router.push("/"))},"Disabled"),(0,a._)("li",{class:"menu__item",onClick:e[1]||(e[1]=e=>t.$router.push("/loading"))},"Loading")])])])}var gt={name:"cc-navbar"};const _t=(0,u.Z)(gt,[["render",vt]]);var ht=_t,ft=[Y,ht];const yt=(0,i.ri)(c);ft.forEach((t=>{yt.component(t.name,t)})),yt.use(ct).use(rt).mount("#app")}},e={};function n(i){var a=e[i];if(void 0!==a)return a.exports;var l=e[i]={exports:{}};return t[i](l,l.exports,n),l.exports}n.m=t,function(){var t=[];n.O=function(e,i,a,l){if(!i){var s=1/0;for(c=0;c<t.length;c++){i=t[c][0],a=t[c][1],l=t[c][2];for(var u=!0,r=0;r<i.length;r++)(!1&l||s>=l)&&Object.keys(n.O).every((function(t){return n.O[t](i[r])}))?i.splice(r--,1):(u=!1,l<s&&(s=l));if(u){t.splice(c--,1);var o=a();void 0!==o&&(e=o)}}return e}l=l||0;for(var c=t.length;c>0&&t[c-1][2]>l;c--)t[c]=t[c-1];t[c]=[i,a,l]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.p="/car-calculator/"}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,i){var a,l,s=i[0],u=i[1],r=i[2],o=0;if(s.some((function(e){return 0!==t[e]}))){for(a in u)n.o(u,a)&&(n.m[a]=u[a]);if(r)var c=r(n)}for(e&&e(i);o<s.length;o++)l=s[o],n.o(t,l)&&t[l]&&t[l][0](),t[l]=0;return n.O(c)},i=self["webpackChunkcar_calc"]=self["webpackChunkcar_calc"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=n.O(void 0,[998],(function(){return n(6500)}));i=n.O(i)})();
//# sourceMappingURL=app.34ebe4d6.js.map