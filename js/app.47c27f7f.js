(function(){"use strict";var t={6040:function(t,e,n){var l=n(9242),s=n(3396);const i={class:"wrapper"};function a(t,e){const n=(0,s.up)("cc-navbar"),l=(0,s.up)("router-view");return(0,s.wg)(),(0,s.iD)("div",i,[(0,s.Wm)(n),(0,s.Wm)(l)])}var u=n(89);const r={},o=(0,u.Z)(r,[["render",a]]);var c=o,p=n(2483),d=n(7139);const m={class:"calculator"},v={class:"calculator__container"},_=(0,s._)("h1",{class:"calculator__title"}," Рассчитайте стоимость автомобиля в лизинг ",-1),g={class:"calculator__inputs"},h={class:"calculator__results"},f={class:"calculator__submit"};function y(t,e,n,l,i,a){const u=(0,s.up)("cc-input"),r=(0,s.up)("cc-result"),o=(0,s.up)("cc-button");return(0,s.wg)(),(0,s.iD)("section",m,[(0,s._)("div",v,[_,(0,s._)("div",g,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(t.inputs,(t=>((0,s.wg)(),(0,s.j4)(u,{key:t.type,input:t},{"input-title":(0,s.w5)((()=>[(0,s.Uk)((0,d.zw)(t.title),1)])),_:2},1032,["input"])))),128))]),(0,s._)("div",h,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(t.results,(t=>((0,s.wg)(),(0,s.j4)(r,{result:t,key:t.type},null,8,["result"])))),128)),(0,s._)("div",f,[(0,s.Wm)(o,{onClick:a.submitCalc,disabled:t.isSending,class:(0,d.C_)({calculator__submit_loading:t.isSending})},{default:(0,s.w5)((()=>[(0,s.Uk)("Оставить заявку")])),_:1},8,["onClick","disabled","class"])])])])])}const b={class:"input__title"},w={class:"input__body"},S=["disabled"],k=(0,s._)("span",{class:"input__text_percent"}," ₽",-1),C=["disabled"],x=["min","max","disabled"];function D(t,e,n,i,a,u){return(0,s.wg)(),(0,s.iD)("div",{class:(0,d.C_)(["input",{input_disabled:t.isSending}])},[(0,s._)("h2",b,[(0,s.WI)(t.$slots,"input-title",{tag:"p"})]),(0,s._)("div",w,["%"!==n.input.type?(0,s.wy)(((0,s.wg)(),(0,s.iD)("input",{key:0,type:"tel",class:"input__text","onUpdate:modelValue":e[0]||(e[0]=t=>a.localValue=t),onInput:e[1]||(e[1]=(...t)=>u.maskInput&&u.maskInput(...t)),onKeydown:e[2]||(e[2]=(...t)=>u.preventEnter&&u.preventEnter(...t)),disabled:t.isSending,pattern:""},null,40,S)),[[l.nr,a.localValue,void 0,{lazy:!0}]]):"%"===n.input.type?((0,s.wg)(),(0,s.iD)("div",{key:1,class:"input__text",ref:"inputText",onClick:e[7]||(e[7]=(...e)=>t.$refs.percentInput.focus&&t.$refs.percentInput.focus(...e))},[(0,s._)("span",null,(0,d.zw)(u.initialFee),1),k,(0,s.wy)((0,s._)("input",{type:"tel",class:"input__percent","onUpdate:modelValue":e[3]||(e[3]=t=>a.localValue=t),onKeydown:e[4]||(e[4]=(...t)=>u.preventEnter&&u.preventEnter(...t)),onFocus:e[5]||(e[5]=(...t)=>u.toggleActive&&u.toggleActive(...t)),onBlur:e[6]||(e[6]=(...t)=>u.toggleActive&&u.toggleActive(...t)),disabled:t.isSending,ref:"percentInput"},null,40,C),[[l.nr,a.localValue,void 0,{lazy:!0}]])],512)):(0,s.kq)("",!0),(0,s.wy)((0,s._)("input",{class:(0,d.C_)(["input__slider",{input__slider_disabled:t.isSending}]),type:"range",min:n.input.min,max:n.input.max,"onUpdate:modelValue":e[8]||(e[8]=t=>a.valueSlider=t),disabled:t.isSending},null,10,x),[[l.nr,a.valueSlider]]),(0,s._)("div",{class:(0,d.C_)(["input__type",{input__type_small:"%"===n.input.type}])},(0,d.zw)(n.input.type),3)])],2)}var I=n(65);const O={props:{input:{type:Object,required:!0}},data(){return{localValue:0,valueSlider:0}},methods:{maskInput(t){let e=this.formatToNumber(t.target.value);t.target.value=e.toString().replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g,"$1 ")},...(0,I.OI)({setInputs:"calculator/setInputs",setResults:"calculator/setResults"}),...(0,I.nv)({considerResult:"calculator/considerResult"}),preventEnter(t){13==t.keyCode&&t.preventDefault()},toggleActive(){this.$refs.inputText.classList.toggle("input__text_active")},formatToString(t){return t.toString().replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g,"$1 ")},formatToNumber(t){return Number(t.replace(/\s/g,""))},updateInputs(t){let e=this.inputs;this.inputs.forEach(((n,l)=>{n.type===this.input.type&&(t<this.input.min?this.localValue=t=this.input.min:t>this.input.max&&(this.localValue=t=this.input.max),e[l].value=t,void 0!=n.result&&(e[l].result=this.formatToNumber(this.initialFee)),this.localValue=this.formatToString(this.localValue),this.setInputs(e),this.considerResult())}))}},mounted(){this.localValue=this.formatToString(this.input.value),this.valueSlider=this.input.value},computed:{...(0,I.rn)({inputs:t=>t.calculator.inputs,results:t=>t.calculator.results,isSending:t=>t.calculator.isSending}),...(0,I.Se)({monthlyPayment:"calculator/monthlyPayment",leasingAmount:"calculator/leasingAmount"}),initialFee(){return this.formatToString(Math.round(this.inputs[0].value*(this.input.value/100)))}},watch:{localValue(t){this.updateInputs(this.formatToNumber(t)),this.valueSlider=this.formatToNumber(this.localValue)},valueSlider(t){this.localValue=this.formatToString(t)}}},T=()=>{(0,l.sj)((t=>({"9d87d7f0":t.input.max,"9d87d614":t.input.min,"5305e715":t.input.value})))},j=O.setup;O.setup=j?(t,e)=>(T(),j(t,e)):T;var V=O;const P=(0,u.Z)(V,[["render",D]]);var A=P;const R={class:"result"},B={class:"result__title"},$={class:"result__value"};function z(t,e,n,l,i,a){return(0,s.wg)(),(0,s.iD)("div",R,[(0,s._)("h2",B,(0,d.zw)(n.result.title),1),(0,s._)("div",$,(0,d.zw)(i.value)+" ₽",1)])}var E={props:{result:{type:Object,required:!0}},data(){return{value:0}},methods:{maskText(t){return t.toString().replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g,"$1 ")}},mounted(){this.value=this.maskText(this.result.value)},watch:{result(t){this.value=this.maskText(t.value)}}};const N=(0,u.Z)(E,[["render",z]]);var U=N;const K={class:"button-ui"};function Z(t,e,n,l,i,a){return(0,s.wg)(),(0,s.iD)("button",K,[(0,s.WI)(t.$slots,"default")])}var M={name:"cc-button"};const F=(0,u.Z)(M,[["render",Z]]);var W=F,Y={components:{CcInput:A,CcResult:U,CcButton:W},computed:{...(0,I.rn)({inputs:t=>t.calculator.inputs,results:t=>t.calculator.results,isSending:t=>t.calculator.isSending})},methods:{submitCalc(){this.setBoolSending(!0),this.sendData()},...(0,I.OI)({setBoolSending:"calculator/setBoolSending"}),...(0,I.nv)({sendData:"calculator/sendData"})}};const H=(0,u.Z)(Y,[["render",y]]);var J=H,q=n.p+"img/loading.db8068a5.svg";const L={class:"calculator"},G={class:"calculator__container"},Q=(0,s._)("h1",{class:"calculator__title"}," Рассчитайте стоимость автомобиля в лизинг ",-1),X={class:"calculator__inputs"},tt={class:"calculator__results"},et={class:"calculator__submit"},nt=(0,s._)("img",{src:q,alt:"Loading"},null,-1);function lt(t,e,n,l,i,a){const u=(0,s.up)("cc-input"),r=(0,s.up)("cc-result"),o=(0,s.up)("cc-button");return(0,s.wg)(),(0,s.iD)("section",L,[(0,s._)("div",G,[Q,(0,s._)("div",X,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(t.inputs,(t=>((0,s.wg)(),(0,s.j4)(u,{key:t.type,input:t},{"input-title":(0,s.w5)((()=>[(0,s.Uk)((0,d.zw)(t.title),1)])),_:2},1032,["input"])))),128))]),(0,s._)("div",tt,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(t.results,(t=>((0,s.wg)(),(0,s.j4)(r,{result:t,key:t.type},null,8,["result"])))),128)),(0,s._)("div",et,[t.isSending?((0,s.wg)(),(0,s.j4)(o,{key:0,onClick:a.submitCalc,disabled:"",class:(0,d.C_)({calculator__submit_disabled:t.isSending})},{default:(0,s.w5)((()=>[nt])),_:1},8,["onClick","class"])):((0,s.wg)(),(0,s.j4)(o,{key:1,onClick:a.submitCalc},{default:(0,s.w5)((()=>[(0,s.Uk)("Оставить заявку")])),_:1},8,["onClick"]))])])])])}var st={components:{CcInput:A,CcResult:U,CcButton:W},computed:{...(0,I.rn)({inputs:t=>t.calculator.inputs,results:t=>t.calculator.results,isSending:t=>t.calculator.isSending})},methods:{submitCalc(){this.setBoolSending(!0),this.sendData()},...(0,I.OI)({setBoolSending:"calculator/setBoolSending"}),...(0,I.nv)({sendData:"calculator/sendData"})}};const it=(0,u.Z)(st,[["render",lt]]);var at=it;const ut=[{path:"/",name:"disabled",component:J},{path:"/loading",name:"loading",component:at}],rt=(0,p.p7)({history:(0,p.PO)("/car-calculator/"),routes:ut});var ot=rt;const ct={state:()=>({inputs:[{title:"Стоимость автомобиля",min:1e6,max:6e6,type:"₽",value:1e6},{title:"Первоначальный взнос",min:10,max:60,type:"%",value:10,result:0},{title:"Срок лизинга",min:1,max:60,type:"мес.",value:1}],results:[],isSending:!1}),mutations:{setInputs(t,e){t.inputs=e},setResults(t,e){t.results=e},setBoolSending(t,e){t.isSending=e}},getters:{monthlyPayment(t){return{title:"Ежемесячный платеж от",type:"monthlyPayment",value:Math.round((t.inputs[0].value-t.inputs[1].result)*(.035*Math.pow(1.035,t.inputs[2].value)/(Math.pow(1.035,t.inputs[2].value)-1)))}},leasingAmount(t,e){return{title:"Сумма договора лизинга",type:"leasingAmount",value:t.inputs[1].result+t.inputs[2].value*e.monthlyPayment.value}}},actions:{considerResult({getters:t,commit:e}){e("setResults",[t.leasingAmount,t.monthlyPayment])},async sendData({state:t,getters:e}){console.log(t.isSending);const n="https://hookb.in/eK160jgYJ6UlaRPldJ1P",l=JSON.stringify({car_coast:t.inputs[0].value,initail_payment:t.inputs[1].result,initial_percent:t.inputs[1].value,lease_term:t.inputs[2].value,monthly_payment_from:e.monthlyPayment.value,total_sum:e.leasingAmount.value});try{const e=await fetch(n,{method:"POST",body:JSON.stringify(l),headers:{"Content-Type":"application/json"}}),s=await e;console.log(s.status),t.isSending=await!1}catch(s){console.log(s),t.isSending=!1}}},namespaced:!0};var pt=(0,I.MT)({modules:{calculator:ct}});n(7658);const dt={class:"menu"},mt={class:"menu__body"},vt={class:"menu__list"};function _t(t,e,n,l,i,a){return(0,s.wg)(),(0,s.iD)("nav",dt,[(0,s._)("div",mt,[(0,s._)("ul",vt,[(0,s._)("li",{class:"menu__item",onClick:e[0]||(e[0]=e=>t.$router.push("/"))},"Disabled"),(0,s._)("li",{class:"menu__item",onClick:e[1]||(e[1]=e=>t.$router.push("/loading"))},"Loading")])])])}var gt={name:"cc-navbar"};const ht=(0,u.Z)(gt,[["render",_t]]);var ft=ht,yt=[W,ft];const bt=(0,l.ri)(c);yt.forEach((t=>{bt.component(t.name,t)})),bt.use(pt).use(ot).mount("#app")}},e={};function n(l){var s=e[l];if(void 0!==s)return s.exports;var i=e[l]={exports:{}};return t[l](i,i.exports,n),i.exports}n.m=t,function(){var t=[];n.O=function(e,l,s,i){if(!l){var a=1/0;for(c=0;c<t.length;c++){l=t[c][0],s=t[c][1],i=t[c][2];for(var u=!0,r=0;r<l.length;r++)(!1&i||a>=i)&&Object.keys(n.O).every((function(t){return n.O[t](l[r])}))?l.splice(r--,1):(u=!1,i<a&&(a=i));if(u){t.splice(c--,1);var o=s();void 0!==o&&(e=o)}}return e}i=i||0;for(var c=t.length;c>0&&t[c-1][2]>i;c--)t[c]=t[c-1];t[c]=[l,s,i]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var l in e)n.o(e,l)&&!n.o(t,l)&&Object.defineProperty(t,l,{enumerable:!0,get:e[l]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.p="/car-calculator/"}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,l){var s,i,a=l[0],u=l[1],r=l[2],o=0;if(a.some((function(e){return 0!==t[e]}))){for(s in u)n.o(u,s)&&(n.m[s]=u[s]);if(r)var c=r(n)}for(e&&e(l);o<a.length;o++)i=a[o],n.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return n.O(c)},l=self["webpackChunkcar_calc"]=self["webpackChunkcar_calc"]||[];l.forEach(e.bind(null,0)),l.push=e.bind(null,l.push.bind(l))}();var l=n.O(void 0,[998],(function(){return n(6040)}));l=n.O(l)})();
//# sourceMappingURL=app.47c27f7f.js.map