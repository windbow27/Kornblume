import{d,e as u,c as p,a as t,o as m}from"./index-zocqnHD7.js";const i=["plannerSettings","planner","wilderness","warehouse"];function g(){const o=new Date,e=o.getDate().toString().padStart(2,"0"),a=(o.getMonth()+1).toString().padStart(2,"0"),r=o.getFullYear(),s=`${e}${a}${r}`,n=o.getHours().toString().padStart(2,"0"),c=o.getMinutes().toString().padStart(2,"0"),l=`${n}${c}`;return{date:s,time:l}}function h(o){const e=new Blob([o],{type:"application/json"}),{date:a,time:r}=g(),s=`kornblume_data_${a}_${r}.json`,n=document.createElement("a");n.download=s,n.href=URL.createObjectURL(e),document.body.appendChild(n),n.click(),setTimeout(()=>document.body.removeChild(n))}function f(){const o={};i.forEach(e=>{o[e]=localStorage.getItem(e)});try{const e=JSON.stringify(o,null,2);h(e)}catch(e){console.error("Error exporting data:",e)}}function b(o){const e=new FileReader;e.onload=async a=>{var r;try{const s=JSON.parse((r=a.target)==null?void 0:r.result);i.forEach(n=>{localStorage.setItem(n,s==null?void 0:s[n])}),console.log("Import successful!"),setTimeout(()=>window.location.reload())}catch(s){console.error("Error importing data:",s)}},e.readAsText(o)}function _(){i.forEach(o=>localStorage.removeItem(o)),setTimeout(()=>window.location.reload())}const x={class:"responsive-spacer"},y=t("h2",{class:"text-2xl text-white font-bold mb-4 lg:mb-6"},"Profile",-1),w=t("p",{class:"text-white"}," You can export or import your data here.",-1),S={class:"flex justify-center items-center p-2"},v=t("h2",{class:"text-2xl text-white font-bold my-4 lg:my-6"},"Danger Zone",-1),D=t("p",{class:"text-white"},"If you encounter any unexpected issues with the site, you can reset your data. Sorry for the inconvenience.",-1),k=t("div",{class:"flex justify-center items-center p-2"},[t("button",{onclick:"my_modal_2.showModal()",class:"bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2"}," Reset Data ")],-1),j=t("p",{class:"pb-4 text-white text-center"},"Once you delete your data, there is no going back.",-1),I=t("p",{class:"pb-4 text-white text-center"},"Please be certain.",-1),E=t("form",{method:"dialog",class:"modal-backdrop"},[t("button",null,"close")],-1),$=d({__name:"ProfileView",setup(o){const e=u(null),a=()=>{f()},r=()=>{var c;(c=e.value)==null||c.click()},s=c=>{const l=c.target.files[0];l&&b(l)},n=()=>{_()};return(c,l)=>(m(),p("div",x,[y,w,t("div",S,[t("button",{onClick:a,class:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"}," Export Data "),t("input",{type:"file",ref_key:"fileInput",ref:e,onChange:s,accept:".json",class:"ml-4",style:{display:"none"}},null,544),t("button",{onClick:r,class:"bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-2"}," Import Data ")]),v,D,k,t("dialog",{id:"my_modal_2",class:"modal"},[t("div",{class:"modal-box custom-gradient-gray-blue flex flex-col justify-center items-center"},[j,I,t("button",{onClick:n,class:"bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2"}," Reset ")]),E])]))}});export{$ as default};