import{d as M,o,c as d,a as e,B as D,C as V,t as h,q as k,s as I,z as _,f as z,u as q,l as $,F as y,r as w,g as C,A as S,i as b,v as A,x as L,w as R,D as P,E as F,j as O,p as Q,n as E,_ as T}from"./index-M20HaJGE.js";import{b as G,_ as U,f as H,s as j}from"./MaterialIcon.vue_vue_type_script_setup_true_lang-wmzBcEPh.js";import{c as J}from"./images-Xm5u5kHF.js";import{f as B}from"./arcanists-PbyEYKWl.js";import{_ as K}from"./ArcanistIconDisplay.vue_vue_type_script_setup_true_lang-3BR0mZrJ.js";import{n as W}from"./stages-OYlTA9yr.js";const X=["data-tip"],Y={class:"transform transition-transform duration-500 overflow-hidden relative"},Z=["src"],ee=["src"],te=e("div",{class:"overlay absolute inset-0 bg-gray-500 opacity-0 group-hover:opacity-50 transition-opacity duration-300"},null,-1),se=M({__name:"MaterialSelectionIcon",props:{material:{type:Object,required:!0}},setup(l){const t=l,g=()=>G(t.material);return(f,p)=>(o(),d("div",{class:"tooltip relative overflow-hidden group cursor-pointer","data-tip":f.$t(g().material)},[e("div",Y,[e("img",{src:g().itemImagePath,alt:"Material Image",class:"w-20 h-20 absolute transform transition-transform duration-300 group-hover:scale-125"},null,8,Z),e("img",{src:g().borderImagePath,alt:"Border Image",class:"w-20 h-20"},null,8,ee),te])],8,X))}}),ae=["data-tip"],re={class:"relative inline-block"},le=["src"],oe={class:"absolute text-white bottom-0.5 right-0.5 rounded bg-gray-700 rounded-tl px-1 py-px text-xs max-w-[7.775rem] lg:max-w-[9.775rem] whitespace-nowrap overflow-hidden overflow-ellipsis"},ie={class:"absolute text-white top-0.5 left-0.5 bg-gray-700 rounded px-1 py-px text-xs"},ne=M({__name:"StageIcon",props:{selectedStage:{type:Object,required:!0},stageName:{type:String,required:!0},dropRate:{type:String,required:!0}},setup(l){const t=l,g=D(),f=V(),p=()=>W(t.selectedStage,t.stageName),m=()=>{g.setSelectedStage(t.selectedStage),f.push("/stages")};return(n,x)=>(o(),d("div",{onClick:m,class:"cursor-pointer"},[e("div",{class:"tooltip","data-tip":n.$t(p().stage)},[e("div",re,[e("img",{src:p().stageImagePath,alt:"Border Image",class:"w-32 lg:w-40 rounded"},null,8,le),e("div",oe,h(n.$t(p().stage)),1),e("div",ie,h(l.dropRate),1)])],8,ae)]))}}),ce={key:0,class:"custom-box custom-border"},de={class:"space-y-1"},ue={class:"text-white text-2xl font-bold py-1"},me=e("i",{class:"fa-solid fa-star"},null,-1),pe={class:"flex flex-col justify-center items-center"},he=["src"],ge={class:"text-white text-center"},fe={key:1,class:"custom-box custom-border"},ve={class:"text-white"},_e={class:"flex flex-wrap gap-x-2 gap-y-1 items-center justify-center pt-4"},ye={key:2,class:"custom-box custom-border"},xe={class:"text-white"},be={class:"custom-item-list max-h-[calc(33vh)] pt-8"},we={key:3,class:"custom-box custom-border"},$e={class:"text-white"},Me={class:"custom-item-list gap-x-2 gap-y-1 max-h-[calc(33vh)] pt-8"},ke=M({__name:"MaterialDisplay",props:{selectedMaterial:{type:Object,required:!0},categories:{type:Array,required:!0}},setup(l){const t=l,g=k().formulas,f=k().arcanists,p=k().stages,m=I(()=>{const i=g.find(c=>c.Name===t.selectedMaterial.Name);return i?i.Material.map((c,a)=>({Material:c,Quantity:i.Quantity[a]})):[]}),n=I(()=>{if(t.selectedMaterial.Name==="Dust")return B(f);let i=f.filter(c=>c.Insight.some(a=>a.Material.includes(t.selectedMaterial.Name))||c.Resonance.some(a=>a.Material.includes(t.selectedMaterial.Name)));return i=B(i),i}),x=I(()=>Object.entries(p).filter(([,c])=>t.selectedMaterial.Name in c.drops).map(([c,a])=>({name:c,stage:a,dropRate:a.drops[t.selectedMaterial.Name]})).sort((c,a)=>a.dropRate-c.dropRate).map(c=>({...c,dropRate:H(c.dropRate)})));return(i,c)=>(o(),d(y,null,[t.selectedMaterial?(o(),d("div",ce,[e("div",de,[e("h2",ue,h(i.$t(t.selectedMaterial.Name)),1),e("p",{class:_(["",{"text-error":t.selectedMaterial.Category===l.categories[0],"text-info":t.selectedMaterial.Category===l.categories[1],"text-success":t.selectedMaterial.Category===l.categories[2],"text-warning":t.selectedMaterial.Category===l.categories[3],"text-secondary":t.selectedMaterial.Category===l.categories[4]}])},h(i.$t(t.selectedMaterial.Category)),3),e("p",{class:_(["",{"text-orange-300":t.selectedMaterial.Rarity===6,"text-yellow-100":t.selectedMaterial.Rarity===5,"text-purple-400":t.selectedMaterial.Rarity===4,"text-sky-200":t.selectedMaterial.Rarity===3,"text-green-200":t.selectedMaterial.Rarity===2}])},[z(h(t.selectedMaterial.Rarity)+" ",1),me],2),e("div",pe,[e("img",{src:q(J)(t.selectedMaterial.Name),alt:"Material Image",class:"w-32 h-32"},null,8,he),e("p",ge,h(t.selectedMaterial.Description),1)])])])):$("",!0),m.value.length>0?(o(),d("div",fe,[e("h2",ve,h(i.$t("wishing-spring-formula")),1),e("div",_e,[(o(!0),d(y,null,w(m.value,a=>(o(),d("div",{key:a.Material,class:"flex flex-wrap gap-x-2 gap-y-2"},[C(U,{material:a},null,8,["material"])]))),128))])])):$("",!0),x.value.length>0?(o(),d("div",ye,[e("h2",xe,h(i.$t("obtained-from-the-following-stages")),1),e("div",be,[(o(!0),d(y,null,w(x.value,a=>(o(),S(ne,{key:a.name,selectedStage:a.stage,stageName:a.name,dropRate:a.dropRate,class:"px-2 py-1"},null,8,["selectedStage","stageName","dropRate"]))),128))])])):$("",!0),n.value.length>0?(o(),d("div",we,[e("h2",$e,h(i.$t("used-by-the-following-arcanists")),1),e("div",Me,[(o(!0),d(y,null,w(n.value,a=>(o(),S(K,{key:a.Name,arcanist:a},null,8,["arcanist"]))),128))])])):$("",!0)],64))}}),Ie={class:"flex gap-y-2 items-center"},Ce=["placeholder"],Se=["data-tip"],Ne=e("button",{class:"btn btn-ghost text-white"},[e("i",{class:"fa-solid fa-filter"})],-1),Re=[Ne],je={class:"flex justify-center space-x-2 pb-2"},Be=["onClick"],De={class:"flex flex-col justify-center flex-wrap gap-x-2 gap-y-1"},qe={class:"grid grid-cols-2 gap-x-2 gap-y-1"},Ve=["onClick"],ze={class:"flex justify-center"},Ae=M({__name:"MaterialFilter",props:{listItems:{type:Array,required:!0},categories:{type:Array,required:!0}},emits:["filtered"],setup(l,{emit:t}){const g=l,f=t,p=b(""),m=b([]),n=b([]),x=s=>{m.value.includes(s)?m.value=m.value.filter(u=>u!==s):m.value.push(s)},i=s=>{n.value.includes(s)?n.value=n.value.filter(u=>u!==s):n.value.push(s)},c=I(()=>{let s=g.listItems;return p.value.length>0&&(s=s.filter(u=>u.Name.toLowerCase().includes(p.value.toLowerCase()))),m.value.length>0&&(s=s.filter(u=>m.value.includes(u.Rarity))),n.value.length>0&&(s=s.filter(u=>n.value.includes(u.Category))),s}),a=()=>{f("filtered",c.value)};return(s,u)=>(o(),d("div",Ie,[A(e("input",{"onUpdate:modelValue":u[0]||(u[0]=r=>p.value=r),type:"text",placeholder:s.$t("search-by-name"),onInput:a,class:"input input-sm lg:w-auto bg-gray-800 text-white p-2 rounded-md focus:outline-none"},null,40,Ce),[[L,p.value]]),C(q(P),{arrow:"",placement:"bottom",offsetDistance:"2"},{content:R(()=>[e("div",je,[(o(),d(y,null,w([2,3,4,5,6],r=>e("button",{key:r,class:_([{"border-2 border-info":m.value.includes(r),"border-2 border-transparent":!m.value.includes(r)},"p-2 rounded-md"]),onClick:v=>{x(r),a()}},[e("i",{class:_(["fa-solid fa-star",{"text-orange-300":r===6,"text-yellow-100":r===5,"text-purple-400":r===4,"text-sky-200":r===3,"text-green-200":r===2}])},null,2)],10,Be)),64))]),e("div",De,[e("div",qe,[(o(!0),d(y,null,w(l.categories.slice(0,-1),(r,v)=>(o(),d("button",{key:r,class:_([[{"border-2 border-info":n.value.includes(r),"border-2 border-transparent":!n.value.includes(r)},{"text-error":v===0,"text-info":v===1,"text-success":v===2,"text-warning":v===3,"text-secondary":v===4}],"p-2 rounded-md text-sm"]),onClick:N=>{i(r),a()}},h(r),11,Ve))),128))]),e("div",ze,[l.categories.length>0?(o(),d("button",{key:l.categories[4],class:_([[{"border-2 border-info":n.value.includes(l.categories[4]),"border-2 border-transparent":!n.value.includes(l.categories[4])}],"w-40 p-2 rounded-md text-sm text-secondary"]),onClick:u[1]||(u[1]=r=>{i(l.categories[4]),a()})},h(l.categories[4]),3)):$("",!0)])])]),default:R(()=>[e("div",{class:"tooltip","data-tip":s.$t("filter")},Re,8,Se)]),_:1})]))}}),Le=l=>(Q("data-v-05f60363"),l=l(),E(),l),Pe={class:"responsive-spacer"},Fe={class:"flex pb-4"},Oe={class:"text-2xl text-white font-bold"},Qe=Le(()=>e("div",{class:"pb-4"},[e("div",{role:"alert",class:"alert alert-info custom-gradient-gray-blue text-white"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",class:"stroke-current shrink-0 w-6 h-6"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})]),e("p",{class:"text-sm lg:text-base"}," 1.4 drop rates will be updated to display later. Note that Planner is currently using 1.4 data.")])],-1)),Ee={class:"wrapper"},Te={class:"container"},Ge={class:"card custom-border"},Ue={class:"flex flex-wrap justify-center sm:justify-between pl-2 gap-y-2"},He={class:"flex flex-wrap justify-center space-x-2 gap-y-2 py-1.5"},Je=["onClick","disabled"],Ke={class:"card custom-border h-[calc(40vh)] lg:h-[calc(66vh)]"},We={key:0,class:"custom-item-list"},Xe={class:"container"},Ye=M({__name:"ItemsView",setup(l){const t=["Base Item","Build Material","Insight Material","Resonate Material","Ascension Material"],g=["Materials","Psychubes"],f=b(g[0]),p=k().items,m=b([]),n=b([]),x=D(),i=b(),c=s=>{i.value=s},a=s=>{n.value=s};return F(()=>{const s=p.find(u=>u.Name===x.selectedMaterial.Material);i.value=s||p[49],m.value=p.filter(u=>u.IsReleased),j(m.value,t)}),O(()=>{n.value=p.filter(s=>s.IsReleased),j(n.value,t)}),(s,u)=>(o(),d("div",Pe,[e("div",Fe,[e("h2",Oe,h(s.$t("items")),1)]),Qe,e("div",Ee,[e("div",Te,[e("div",Ge,[e("div",Ue,[e("div",He,[(o(),d(y,null,w(g,(r,v)=>e("button",{key:v,onClick:N=>f.value=r,class:_(["hover:bg-info rounded-md text-white py-1 px-3",f.value===r?"border-button":""]),disabled:v!==0},h(s.$t(r)),11,Je)),64))]),C(Ae,{listItems:m.value,categories:t,onFiltered:a},null,8,["listItems"])])]),e("div",Ke,[f.value==="Materials"?(o(),d("div",We,[(o(!0),d(y,null,w(n.value,r=>{var v;return o(),S(se,{key:r.Id,material:r,onClick:N=>c(r),class:_(((v=i.value)==null?void 0:v.Name)===r.Name?"custom-border-white":"custom-border-transparent")},null,8,["material","onClick","class"])}),128))])):$("",!0)])]),e("div",Xe,[C(ke,{selectedMaterial:i.value||{},categories:t},null,8,["selectedMaterial"])])])]))}}),lt=T(Ye,[["__scopeId","data-v-05f60363"]]);export{lt as default};
