(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{104:function(e,t,a){},105:function(e,t,a){},108:function(e,t,a){},123:function(e,t){},124:function(e,t,a){},125:function(e,t,a){},126:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(72),c=a.n(l),i=(a(104),a(105),a(73)),o=a.n(i),s=a(42),m=a(67),u=a(137),p=(a(108),a(135)),d=a(74),h=a.n(d);var E=class extends r.a.Component{constructor(e){super(e),this.fetchGitHubRepos=(async()=>{this.setState({isLoading:!0});try{const t=await p.a.get("https://api.github.com/users/Hermenier35/repos",{headers:{"X-GitHub-Api-Version":"2022-11-28"}}),a=await Promise.all(t.data.map(async e=>{if("portfolio.github.io"!==e.name){const t=(await p.a.get("https://api.github.com/repos/Hermenier35/".concat(e.name,"/readme"),{headers:{Accept:"application/vnd.github.VERSION.raw"}})).data,a=t.match(/^#\s(.+)/),n=t.match(/## Description\n([\s\S]*?)(?=\n## |\n$)/),r=t.match(/## Competences\n([\s\S]*?)(?=\n## |\n$)/),l=e.html_url,c="https://raw.githubusercontent.com/Hermenier35/".concat(e.name,"/").concat(e.default_branch,"/screen.png");return{title:a?a[1]:"No Title",description:n?n[1]:"No Description",competences:r?r[1]:"No Competences",lien:l||"No Lien",image:c}}}));this.setState({projects:a,isLoading:!1})}catch(e){console.error("Error fetching GitHub repositories:",e),this.setState({isLoading:!1})}}),this.onChange=(e=>{console.log(e)}),this.renderCarouselItems=(()=>this.state.projects.map((e,t)=>{if(!e)return null;const{title:a,description:n,competences:l,lien:c,image:i}=e,o=i||h.a,s=a||"No Title",m=n||"No Description",u=l||"No Competences",p=c||"No Lien";return r.a.createElement("div",{key:t},r.a.createElement("div",{className:"card"},r.a.createElement("img",{className:"image",src:o,alt:s}),r.a.createElement("div",null,r.a.createElement("h2",null,s),r.a.createElement("p",{dangerouslySetInnerHTML:{__html:m}}),r.a.createElement("h3",null,"Comp\xe9tences:"),r.a.createElement("p",{dangerouslySetInnerHTML:{__html:u}}),r.a.createElement("a",{href:p,target:"_blank",rel:"noopener noreferrer"},"Voir le d\xe9pot"))))})),this.state={projects:[],isLoading:!0}}componentDidMount(){this.fetchGitHubRepos()}render(){return r.a.createElement(u.a,{afterChange:this.onChange},this.state.isLoading?r.a.createElement("div",null,"Chargement..."):this.renderCarouselItems())}},g=a(86);const v=[{text:"Java",value:64},{text:"Why3",value:64},{text:"Isabelle/HOL",value:64},{text:"C",value:64},{text:"SCALA",value:64},{text:"SQL",value:64},{text:"JS",value:64},{text:"PYTHON",value:64},{text:"HTML",value:64},{text:"Node",value:64},{text:"Vue",value:64},{text:"React",value:64},{text:"Angular",value:64},{text:"CodeBlocks",value:64},{text:"Eclipse",value:64},{text:"MySQL",value:64},{text:"IntelliJ",value:64},{text:"WampServer",value:64},{text:"C++",value:64}];var f=function(){return r.a.createElement(g.a,{words:v})},N=a(136),b=(a(124),a(63));var x=()=>r.a.createElement(b.a,{theme:{components:{Timeline:{tailColor:"rgba(255,255,255,0.5)"}}}},r.a.createElement(N.a,{mode:"alternate",items:[{color:"green",children:r.a.createElement(r.a.Fragment,null," ",r.a.createElement("p",null,"Master 1 Ing\xe9nierie Logiciel ",r.a.createElement("br",null)," 2023"))},{color:"yellow",children:r.a.createElement(r.a.Fragment,null," ",r.a.createElement("p",null,"Licence 3 informatique 2022"))},{color:"red",children:r.a.createElement(r.a.Fragment,null," ",r.a.createElement("p",null,"Licence 2 informatique 2021"))},{children:r.a.createElement(r.a.Fragment,null," ",r.a.createElement("p",null,"Licence 1 informatique 2020"))}]})),C=(a(125),a(66));var L=function(){return r.a.createElement("div",{className:"contact"},r.a.createElement("h2",null,"Contact"),r.a.createElement("div",{className:"icones"},r.a.createElement("div",{className:"item"},r.a.createElement(s.a,{icon:C.b,className:"icon-large"}),r.a.createElement("p",null,"06.66.35.77.96")),r.a.createElement("div",{className:"item"},r.a.createElement(s.a,{icon:C.a,className:"icon-large"}),r.a.createElement("p",null,"pierreedouardhermenier@gmail.com"))))};var w=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{src:o.a,alt:"profil"}),r.a.createElement("div",{className:"informations"},r.a.createElement("h1",null,"Pierre-Edouard Hermenier"),r.a.createElement("h2",null,"Software Engineering"),r.a.createElement("div",{className:"icons"},r.a.createElement("a",{href:"https://www.linkedin.com/in/pierre-hermenier-771b86264/"},r.a.createElement(s.a,{icon:m.b,className:"icon-large"})),r.a.createElement("a",{href:"https://github.com/Hermenier35"},r.a.createElement(s.a,{icon:m.a,className:"icon-large"})))),r.a.createElement("div",{className:"wordcloud"},r.a.createElement(f,null))),r.a.createElement(E,null),r.a.createElement("div",{className:"formation"},r.a.createElement(x,null)),r.a.createElement(L,null))};var S=e=>{e&&e instanceof Function&&a.e(3).then(a.bind(null,139)).then(t=>{let{getCLS:a,getFID:n,getFCP:r,getLCP:l,getTTFB:c}=t;a(e),n(e),r(e),l(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null))),S()},73:function(e,t,a){e.exports=a.p+"static/media/pio.d2f5f3f1.jpeg"},74:function(e,t,a){e.exports=a.p+"static/media/test.a7bb9524.jpg"},96:function(e,t,a){e.exports=a(126)}},[[96,1,2]]]);
//# sourceMappingURL=main.2a05cdba.chunk.js.map