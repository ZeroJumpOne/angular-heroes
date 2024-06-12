import{b as x,c as D,d as E,e as T,h as j,k as c}from"./chunk-KQYM37NJ.js";import{$ as a,Ha as v,Lb as I,X as u,Ya as C,_ as f,_a as M,ab as w,cb as b,db as A,ea as g,ja as m,ka as l,na as y,pc as P,ub as N,vb as F,wb as R}from"./chunk-2W2MFYBV.js";var U="@",L=(()=>{let e=class e{constructor(o,i,n,s,p){this.doc=o,this.delegate=i,this.zone=n,this.animationType=s,this.moduleImpl=p,this._rendererFactoryPromise=null,this.scheduler=g(M,{optional:!0})}ngOnDestroy(){this._engine?.flush()}loadImpl(){return(this.moduleImpl??import("./chunk-2HLT23BQ.js")).catch(i=>{throw new u(5300,!1)}).then(({\u0275createEngine:i,\u0275AnimationRendererFactory:n})=>{this._engine=i(this.animationType,this.doc,this.scheduler);let s=new n(this.delegate,this._engine,this.zone);return this.delegate=s,s})}createRenderer(o,i){let n=this.delegate.createRenderer(o,i);if(n.\u0275type===0)return n;typeof n.throwOnSyntheticProps=="boolean"&&(n.throwOnSyntheticProps=!1);let s=new h(n);return i?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(p=>{let H=p.createRenderer(o,i);s.use(H)}).catch(p=>{s.use(n)}),s}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}};e.\u0275fac=function(i){C()},e.\u0275prov=f({token:e,factory:e.\u0275fac});let r=e;return r})(),h=class{constructor(e){this.delegate=e,this.replay=[],this.\u0275type=1}use(e){if(this.delegate=e,this.replay!==null){for(let t of this.replay)t(e);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(e,t){return this.delegate.createElement(e,t)}createComment(e){return this.delegate.createComment(e)}createText(e){return this.delegate.createText(e)}get destroyNode(){return this.delegate.destroyNode}appendChild(e,t){this.delegate.appendChild(e,t)}insertBefore(e,t,o,i){this.delegate.insertBefore(e,t,o,i)}removeChild(e,t,o){this.delegate.removeChild(e,t,o)}selectRootElement(e,t){return this.delegate.selectRootElement(e,t)}parentNode(e){return this.delegate.parentNode(e)}nextSibling(e){return this.delegate.nextSibling(e)}setAttribute(e,t,o,i){this.delegate.setAttribute(e,t,o,i)}removeAttribute(e,t,o){this.delegate.removeAttribute(e,t,o)}addClass(e,t){this.delegate.addClass(e,t)}removeClass(e,t){this.delegate.removeClass(e,t)}setStyle(e,t,o,i){this.delegate.setStyle(e,t,o,i)}removeStyle(e,t,o){this.delegate.removeStyle(e,t,o)}setProperty(e,t,o){this.shouldReplay(t)&&this.replay.push(i=>i.setProperty(e,t,o)),this.delegate.setProperty(e,t,o)}setValue(e,t){this.delegate.setValue(e,t)}listen(e,t,o){return this.shouldReplay(t)&&this.replay.push(i=>i.listen(e,t,o)),this.delegate.listen(e,t,o)}shouldReplay(e){return this.replay!==null&&e.startsWith(U)}};function S(r="animations"){return b("NgAsyncAnimations"),y([{provide:w,useFactory:(e,t,o)=>new L(e,t,o,r),deps:[P,D,A]},{provide:v,useValue:r==="noop"?"NoopAnimations":"BrowserAnimations"}])}var O=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=m({type:e,selectors:[["app-error404-page"]],decls:2,vars:0,template:function(i,n){i&1&&(N(0,"p"),I(1,"error404-page works!"),F())}});let r=e;return r})();var W=[{path:"auth",loadChildren:()=>import("./chunk-LJLK5XZF.js").then(r=>r.AuthModule)},{path:"heroes",loadChildren:()=>import("./chunk-JALOOKOC.js").then(r=>r.HeroesModule)},{path:"404",component:O},{path:"",redirectTo:"heroes",pathMatch:"full"},{path:"**",redirectTo:"404"}],k=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=l({type:e}),e.\u0275inj=a({imports:[c.forRoot(W),c]});let r=e;return r})();var B=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=l({type:e}),e.\u0275inj=a({});let r=e;return r})();var V=(()=>{let e=class e{constructor(){this.title="heroesApp"}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=m({type:e,selectors:[["app-root"]],decls:1,vars:0,template:function(i,n){i&1&&R(0,"router-outlet")},dependencies:[j]});let r=e;return r})();var z=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=l({type:e,bootstrap:[V]}),e.\u0275inj=a({providers:[S()],imports:[T,k,B,x]});let r=e;return r})();E().bootstrapModule(z).catch(r=>console.error(r));
