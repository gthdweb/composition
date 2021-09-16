"use strict";(self.webpackChunkzcomposition=self.webpackChunkzcomposition||[]).push([[152],{1113:(n,a,s)=>{s.r(a),s.d(a,{data:()=>t});const t={key:"v-fe8aba7c",path:"/composition/useClickAway/",title:"useClickAway",lang:"en-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"代码演示",slug:"代码演示",children:[{level:3,title:"基础使用",slug:"基础使用",children:[]}]},{level:2,title:"示例代码",slug:"示例代码",children:[{level:3,title:"参数",slug:"参数",children:[]}]}],filePathRelative:"composition/useClickAway/README.md",git:{updatedTime:1631808335e3,contributors:[{name:"yinzhenyu-su",email:"sharkrain@outlook.com",commits:1}]}}},8655:(n,a,s)=>{s.r(a),s.d(a,{default:()=>u});var t=s(6252),e=s(3577),l=s(2262),p=s(7717);const o=(0,t.uE)('<h1 id="useclickaway" tabindex="-1"><a class="header-anchor" href="#useclickaway" aria-hidden="true">#</a> useClickAway</h1><p>点击其他元素回调</p><h2 id="代码演示" tabindex="-1"><a class="header-anchor" href="#代码演示" aria-hidden="true">#</a> 代码演示</h2><h3 id="基础使用" tabindex="-1"><a class="header-anchor" href="#基础使用" aria-hidden="true">#</a> 基础使用</h3><ol><li>单元素</li></ol>',5),c=(0,t._)("ol",{start:"2"},[(0,t._)("li",null,"元素数组")],-1),i=(0,t.uE)('<h2 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码" aria-hidden="true">#</a> 示例代码</h2><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>该钩子必须在 <code>setup</code> 生命周期中运行</p></div><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>target<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> useClickAway <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;zcomposition&quot;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> target <span class="token operator">=</span> <span class="token generic-function"><span class="token function">ref</span><span class="token generic class-name"><span class="token operator">&lt;</span>HTMLSpanElement<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token function">useClickAway</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  <span class="token function-variable function">onClickAway</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;click away&#39;</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  target\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>onClickAway</td><td>点击回调事件</td><td>(event: MouseEvent | TouchEvent) =&gt; void</td><td>-</td></tr><tr><td>target</td><td>要排除的元素或元素数组</td><td>HTMLElement | HTMLElement[]</td><td>-</td></tr></tbody></table>',6),u=(0,t.aZ)({setup(n){const a=(0,l.iH)(null),s=(0,l.iH)(0);(0,p.Vd)({onClickAway:()=>{s.value++},target:a});const u=(0,l.iH)([1,2,3]),r=(0,l.iH)([]),d=(0,l.iH)(0);return(0,p.Vd)({onClickAway:()=>{d.value++},target:r}),(n,l)=>((0,t.wg)(),(0,t.iD)(t.HY,null,[o,(0,t._)("p",null,[(0,t._)("button",{ref:(n,s)=>{s.target=n,a.value=n}},"我是button",512)]),(0,t._)("div",null,"点击了button以外的元素 "+(0,e.zw)(s.value)+" 次",1),c,((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(u.value,((n,a)=>((0,t.wg)(),(0,t.iD)("div",{key:n,ref:n=>{n&&(r.value[a]=n)}}," 第 "+(0,e.zw)(n)+" 个元素 ",513)))),128)),(0,t._)("div",null,"点击了除以上元素以外的元素 "+(0,e.zw)(d.value)+" 次",1),i],64))}})},7717:(n,a,s)=>{s.d(a,{Vd:()=>u,dY:()=>c});var t=s(9669),e=s.n(t),l=s(6486);s(577);var p=s(3162),o=s(2262);const c=({url:n="",filename:a=""})=>{const s=n.split("/"),t=a||s[s.length-1],l=(0,o.qj)({downloading:!1,request:{}});return l.request=new Promise(((a,s)=>{l.downloading=!0,e().get(n,{responseType:"blob"}).then((n=>{(0,p.saveAs)(n.data,t),a(n.data)})).catch((n=>{s(n)})).finally((()=>{l.downloading=!1}))})),l};var i=s(6252);const u=({onClickAway:n,target:a})=>{const s=s=>{if((0,l.isArray)(a.value)){if(!a.value.length)throw new Error("目标元素数组不能为空");a.value.includes(s.target)||n(s)}else a.value!==s.target&&n&&n(s)};(0,i.bv)((()=>{window.addEventListener("click",s)})),(0,i.Jd)((()=>{window.removeEventListener("click",s)}))}}}]);