"use strict";(self.webpackChunkzcomposition=self.webpackChunkzcomposition||[]).push([[990],{4615:(n,s,a)=>{a.r(s),a.d(s,{data:()=>t});const t={key:"v-62afcb76",path:"/composition/useSize/",title:"useSize",lang:"en-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"代码演示",slug:"代码演示",children:[{level:3,title:"基础使用",slug:"基础使用",children:[]}]},{level:2,title:"useSize OPTION",slug:"usesize-option",children:[]},{level:2,title:"参数",slug:"参数",children:[]}],filePathRelative:"composition/useSize/README.md",git:{updatedTime:1631606378e3,contributors:[{name:"Zhaoiii",email:"zdhzdhzdhzdhzdh@gmail.com",commits:3},{name:"zhaodenghui",email:"zdhzdhzdhzdhzdh@gmail.com",commits:1}]}}},3698:(n,s,a)=>{a.r(s),a.d(s,{default:()=>g});var t=a(6252),e=a(3577),p=a(3261),l=a(2262);const o=(0,t._)("h1",{id:"usesize",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#usesize","aria-hidden":"true"},"#"),(0,t.Uk)(" useSize")],-1),c=(0,t._)("p",null,"监听DOM尺寸的变化。",-1),u=(0,t._)("h2",{id:"代码演示",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#代码演示","aria-hidden":"true"},"#"),(0,t.Uk)(" 代码演示")],-1),i=[(0,t._)("textarea",null,null,-1)],r=(0,t._)("span",null,"宽：",-1),k=(0,t._)("span",null,"高：",-1),d=(0,t.uE)('<h3 id="基础使用" tabindex="-1"><a class="header-anchor" href="#基础使用" aria-hidden="true">#</a> 基础使用</h3><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>divRef<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>textarea</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>textarea</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>宽：<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>{{ size.width }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>高：<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>{{ size.height }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>ts<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n<span class="token keyword">import</span> <span class="token punctuation">{</span>useSize<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;zcomposition&quot;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> onMounted<span class="token punctuation">,</span> reactive<span class="token punctuation">,</span> watch <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> divRef <span class="token operator">=</span> ref<span class="token operator">&lt;</span>HTMLElement <span class="token operator">|</span> <span class="token keyword">null</span><span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> size <span class="token operator">=</span> ref<span class="token operator">&lt;</span><span class="token punctuation">{</span> width<span class="token operator">:</span> number<span class="token punctuation">,</span> height<span class="token operator">:</span> number <span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">{</span> width<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> height<span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>\nsize<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token function">useSize</span><span class="token punctuation">(</span>divRef<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><h2 id="usesize-option" tabindex="-1"><a class="header-anchor" href="#usesize-option" aria-hidden="true">#</a> useSize OPTION</h2><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>target</td><td>目标对象</td><td><code>Ref&lt;HTMLElement | null&gt;</code></td><td>-</td></tr><tr><td>callback</td><td>尺寸改变后的回调函数</td><td><code>Function</code></td><td>-</td></tr></tbody></table><h2 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h2><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>size</td><td>返回值，对象当前尺寸</td><td><code>{width: number,height: number}</code></td><td>-</td></tr></tbody></table>',6),g=(0,t.aZ)({setup(n){const s=(0,l.iH)(null),a=(0,l.iH)({width:0,height:0});return(0,t.bv)((()=>{a.value=(0,p.tH)(s,(()=>console.log(1)))})),(n,p)=>((0,t.wg)(),(0,t.iD)(t.HY,null,[o,c,u,(0,t._)("div",null,[(0,t._)("div",{ref:(n,a)=>{a.divRef=n,s.value=n},style:{display:"inline-block"}},i,512),(0,t._)("div",null,[r,(0,t._)("span",null,(0,e.zw)(a.value.width),1),k,(0,t._)("span",null,(0,e.zw)(a.value.height),1)])]),d],64))}})},3261:(n,s,a)=>{a.d(s,{cf:()=>l,O9:()=>g,QT:()=>o,tH:()=>r});var t=a(9669),e=a.n(t),p=a(2262);class l{static getInstance(){return l.instance||(l.instance=e()),l.instance}static setOption(n){Object.keys(n).forEach((s=>{l.getInstance().defaults[s]=n[s]}))}static setRequest(n,s){l.getInstance().interceptors.request.use(n,s)}static setResponse(n,s){l.getInstance().interceptors.response.use(n,s)}}const o=({url:n,method:s,body:a,headers:t})=>{const e=(0,p.iH)(null),o=(0,p.iH)(""),c=(0,p.iH)(!0);return l.getInstance()[s](n,a,{headers:t}).then((n=>{e.value=n.data})).catch((n=>{o.value=n})).finally((()=>{c.value=!1})),{error:o,loading:c,response:e}};var c=a(6252);function u(n){const s=(0,c.FN)();s.isMounted?n():(console.log(s),(0,c.bv)(n))}var i=a(6486);const r=(n,s)=>{const a=(0,p.iH)(!1),t=(0,p.iH)({width:0,height:0});let e;const l=(0,i.debounce)((()=>{e&&e()}),300,{maxWait:400}),o=new ResizeObserver((()=>{t.value.height=n.value.clientHeight,t.value.width=n.value.clientWidth,a.value&&(e=s,l()),a.value=!0}));return u((()=>{n.value?o.observe(n.value):console.error("元素未挂载")})),t.value};var k=a(577),d=a.n(k);const g=function(n,s){const{onExitFull:a,onFull:t}=s||{},e={isFullscreen:(l=d(),l.isEnabled?(0,p.iH)(d().isFullscreen):(0,p.iH)(!1)),setFull:()=>{},exitFull:()=>{},toggleFull:()=>{}};var l;return u((()=>{const s=function(n,s){if(!n)return;let a;return(0,p.dq)(n)&&(a=(0,p.SU)(n)),"function"==typeof n&&(a=n()),a||console.error("target is not available!"),a}(n);s&&(e.setFull=()=>{d().isEnabled&&!e.isFullscreen.value&&(e.isFullscreen.value=!0,d().request(s),t&&t())},e.exitFull=()=>{d().isEnabled&&e.isFullscreen.value&&(e.isFullscreen.value=!1,d().exit(),a&&a())},e.toggleFull=()=>{d().isEnabled&&d().toggle(s).then((()=>{e.isFullscreen.value=!e.isFullscreen.value,e.isFullscreen.value?t&&t():a&&a()}))})})),(0,p.BK)(e)};a(3162)}}]);