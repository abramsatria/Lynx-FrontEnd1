import{_ as a,g as r,l as c,a as u,r as p,o as d,c as k,b as s,t as h,d as i}from"./index-x0cUaSJO.js";import{u as m}from"./links-CwZHDahQ.js";const y={props:["data"],data(){return{popups:r(),links:m(),about:c(),account:u(),title:""}},methods:{async deleteLink(){const t=this.data,e=await this.links.delete({ids:t});if(!e.success)this.popups.addPopup("Information",{title:"Error deleting your link",description:e.message,buttons:[{name:"Okay",type:"primary",action:"close-all"}]});else{if(this.about.track("Link Deleted"),this.about.removeLink(),this.popups.closeSelf(this),this.account.preferences.reducedPopups)return;this.popups.addPopup("Information",{title:`Successfully deleted your link${t.length>1?"s":""}`,buttons:[{name:"Okay",type:"primary",action:"close-all"}]})}},close(){this.popups.closeSelf(this)}},mounted(){this.data.length>1?this.title="the selected links":this.title="this link"}},f={class:"information"},b={class:"buttons"};function _(t,e,g,L,l,o){const n=p("FormKit");return d(),k("div",f,[e[0]||(e[0]=s("h2",null,"Link Deletion",-1)),s("p",null,"Are you sure you want to delete "+h(l.title)+"?",1),s("div",b,[i(n,{type:"button",label:"Yes","button-type":"danger",onClick:o.deleteLink},null,8,["onClick"]),i(n,{type:"button",label:"No","button-type":"secondary",onClick:o.close},null,8,["onClick"])])])}const v=a(y,[["render",_]]);export{v as default};
