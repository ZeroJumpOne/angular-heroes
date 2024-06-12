import{A as B,B as Ae,C as $e,D as Ue,E as qe,F as Ge,G as ze,H as Je,I as We,J as Ke,K as Qe,L as Xe,M as O,N as Ye,O as Ze,P as oe,Q as et,R as tt,S as it,T as rt,U as ot,V as nt,W as at,X as mt,a as K,b as x,c as He,d as Q,e as X,f as N,g as Y,h as Z,i as ke,j as De,k as M,l as Pe,m as Ne,n as Te,o as Le,p as Be,q as Oe,r as ee,s as je,t as Ve,u as T,v as te,w as L,x as ie,y as Re,z as re}from"./chunk-MZRTEDMO.js";import{a as we,g as z,h as Fe,i as J,j as W,k as ce}from"./chunk-KQYM37NJ.js";import"./chunk-JGYM447R.js";import{$ as U,A as se,Bb as u,Bc as G,C as le,Cc as ye,Db as w,Dc as Ee,Kb as H,Lb as a,Mb as f,Nb as g,Qb as be,Rb as pe,Sb as b,T as A,Ta as D,Tb as F,Ub as Ie,Vb as xe,Wa as m,Xa as d,_ as Ce,da as Se,ja as v,ka as q,ma as _e,mb as C,n as me,ob as p,r as ve,sa as S,ta as _,ub as n,vb as r,wb as c,xc as I,yb as E,yc as P,zc as Me}from"./chunk-2W2MFYBV.js";var St=()=>({width:"250px"});function _t(i,e){if(i&1){let l=E();n(0,"mat-list-item",9),u("click",function(){S(l),w();let o=H(2);return _(o.toggle())}),n(1,"mat-icon",10),a(2),r(),a(3),r()}if(i&2){let l=e.$implicit;p("routerLink",l.url),m(2),f(l.icon),m(),g(" ",l.label," ")}}var lt=(()=>{let e=class e{constructor(){this.sidebarItems=[{label:"Listado",icon:"label",url:"./list"},{label:"A\xF1adir",icon:"add",url:"./new-hero"},{label:"Buscar",icon:"search",url:"./search"}]}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=v({type:e,selectors:[["app-layout-page"]],decls:21,vars:3,consts:[["sidenav",""],["fullscreen",""],["mode","push",3,"ngStyle"],[1,"spacer"],["mat-icon-button","",3,"click"],[3,"routerLink","click",4,"ngFor","ngForOf"],["color","primary"],["mat-button",""],[1,"container","p-2"],[3,"click","routerLink"],["matListItemIcon",""]],template:function(o,s){if(o&1){let h=E();n(0,"mat-sidenav-container",1)(1,"mat-sidenav",2,0)(3,"mat-toolbar")(4,"span"),a(5,"Men\xFA"),r(),c(6,"span",3),n(7,"button",4),u("click",function(){S(h);let R=H(2);return _(R.toggle())}),n(8,"mat-icon"),a(9,"menu"),r()()(),n(10,"mat-nav-list"),C(11,_t,4,3,"mat-list-item",5),r()(),n(12,"mat-toolbar",6)(13,"button",4),u("click",function(){S(h);let R=H(2);return _(R.toggle())}),n(14,"mat-icon"),a(15,"menu"),r()(),c(16,"span",3),n(17,"button",7),a(18," Logout "),r()(),n(19,"div",8),c(20,"router-outlet"),r()()}o&2&&(m(),p("ngStyle",be(2,St)),m(10),p("ngForOf",s.sidebarItems))},dependencies:[I,Me,Fe,W,x,He,N,et,oe,Ye,rt,ot,at]});let i=e;return i})();var ue=function(i){return i.DCComics="DC Comics",i.MarvelComics="Marvel Comics",i}(ue||{});var pt=(()=>{let e=class e{constructor(t,o){this.dialogRef=t,this.data=o}onNoClick(){this.dialogRef.close(!1)}onConfirm(){this.dialogRef.close(!0)}};e.\u0275fac=function(o){return new(o||e)(d(Ue),d(qe))},e.\u0275cmp=v({type:e,selectors:[["app-confirm-dialog"]],decls:10,vars:1,consts:[["mat-dialog-title",""],["mat-button","","mat-dialog-close","","cdkFocusInitial","",3,"click"],[1,"spacer"],["mat-button","","mat-dialog-close","","color","primary",3,"click"]],template:function(o,s){o&1&&(n(0,"h2",0),a(1,"Delete Super Hero"),r(),n(2,"mat-dialog-content"),a(3),r(),n(4,"mat-dialog-actions")(5,"button",1),u("click",function(){return s.onNoClick()}),a(6,"No"),r(),c(7,"span",2),n(8,"button",3),u("click",function(){return s.onConfirm()}),a(9,"Ok"),r()()),o&2&&(m(3),g(" Would you like to delete ",s.data.superhero,` ?
`))},dependencies:[x,ze,Je,Ke,We]});let i=e;return i})();var ct={baseURL:"http://serviciodb:3000"};var k=(()=>{let e=class e{constructor(t){this.http=t,this.baseUrl=ct.baseURL}getHeroes(){return this.http.get(`${this.baseUrl}/heroes`)}getHeroById(t){return this.http.get(`${this.baseUrl}/heroes/${t}`).pipe(le(o=>me(void 0)))}getSuggestions(t){return this.http.get(`${this.baseUrl}/heroes?q=${t}&_limit=6`)}addHero(t){return this.http.post(`${this.baseUrl}/heroes`,t)}updateHero(t){if(!t.id)throw Error("Hero id is required");return this.http.patch(`${this.baseUrl}/heroes/${t.id}`,t)}deleteHeroById(t){return this.http.delete(`${this.baseUrl}/heroes/${t}`).pipe(ve(o=>!0),le(o=>me(!1)))}};e.\u0275fac=function(o){return new(o||e)(Se(we))},e.\u0275prov=Ce({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})();var j=(()=>{let e=class e{transform(t){return!t.id&&!t.alt_img?"assets/no-image.png":t.alt_img?t.alt_img:`assets/heroes/${t.id}.jpg`}};e.\u0275fac=function(o){return new(o||e)},e.\u0275pipe=_e({name:"heroImage",type:e,pure:!0});let i=e;return i})();function Et(i,e){if(i&1&&(n(0,"mat-option",16),a(1),r()),i&2){let l=e.$implicit;p("value",l.id),m(),g(" ",l.desc," ")}}function wt(i,e){if(i&1){let l=E();n(0,"button",17),u("click",function(){S(l);let o=w();return _(o.onDeleteHero())}),a(1," Borrar "),r()}}var he=(()=>{let e=class e{constructor(t,o,s,h,V){this.heroesService=t,this.activatedRoute=o,this.router=s,this.snackbar=h,this.dialog=V,this.heroForm=new De({id:new M(""),superhero:new M("",{nonNullable:!0}),publisher:new M(ue.MarvelComics),alter_ego:new M(""),first_appearance:new M(""),characters:new M(""),alt_img:new M("")}),this.poublishers=[{id:"DC Comics",desc:"DC - Comics"},{id:"Marvel Comics",desc:"Marvel - Comics"}]}ngOnInit(){this.router.url.includes("edit")&&this.activatedRoute.params.pipe(A(({id:t})=>this.heroesService.getHeroById(t))).subscribe(t=>{if(!t)return this.router.navigateByUrl("/");this.heroForm.reset(t)})}get currentHero(){return this.heroForm.value}onSubmit(){if(!this.heroForm.invalid){if(this.currentHero.id){this.heroesService.updateHero(this.currentHero).subscribe(t=>{this.onShowSnackbar(`${t.superhero} updated!`)});return}this.heroesService.addHero(this.currentHero).subscribe(t=>{this.router.navigate(["heroes/edit",t.id]),this.onShowSnackbar(`${t.superhero} created!`)})}}onDeleteHero(){if(!this.currentHero.id)throw Error("Hero id is required.");this.dialog.open(pt,{data:this.currentHero}).afterClosed().pipe(se(o=>o),A(()=>this.heroesService.deleteHeroById(this.currentHero.id)),se(o=>o)).subscribe(()=>{this.router.navigateByUrl("/heroes")})}onShowSnackbar(t){this.snackbar.open(t,"ok",{duration:2500})}};e.\u0275fac=function(o){return new(o||e)(d(k),d(z),d(J),d(nt),d(Ge))},e.\u0275cmp=v({type:e,selectors:[["app-new-page"]],decls:49,vars:11,consts:[[1,"mb-2"],[1,"grid"],[1,"col-12","sm:col-6"],[1,"grid",3,"ngSubmit","formGroup"],["matInput","","type","text","required","","formControlName","superhero"],["matInput","","type","text","required","","formControlName","alter_ego"],[1,"col-12"],["matInput","","type","text","required","","formControlName","first_appearance"],["matInput","","type","text","required","","formControlName","characters"],["required","","formControlName","publisher"],[3,"value",4,"ngFor","ngForOf"],["matInput","","type","text","formControlName","characters","formControlName","alt_img"],[1,"flex","justify-content-between"],["mat-flat-button","","color","warn",3,"click",4,"ngIf"],["mat-flat-button","","color","primary",3,"click"],["mat-card-image","","alt","imagen del h\xE9roe",3,"src"],[3,"value"],["mat-flat-button","","color","warn",3,"click"]],template:function(o,s){o&1&&(n(0,"h1"),a(1),n(2,"small"),a(3),r()(),c(4,"mat-divider",0),n(5,"div",1)(6,"div",2)(7,"mat-card")(8,"mat-card-content")(9,"form",3),u("ngSubmit",function(){return s.onSubmit()}),n(10,"mat-form-field",2)(11,"mat-label"),a(12,"Super h\xE9roe"),r(),c(13,"input",4),r(),n(14,"mat-form-field",2)(15,"mat-label"),a(16,"Alter ego"),r(),c(17,"input",5),r(),n(18,"mat-form-field",6)(19,"mat-label"),a(20,"Primera aparici\xF3n"),r(),c(21,"input",7),r(),n(22,"mat-form-field",6)(23,"mat-label"),a(24,"Personajes"),r(),c(25,"input",8),r(),n(26,"mat-form-field",6)(27,"mat-label"),a(28,"Creador"),r(),n(29,"mat-select",9),C(30,Et,2,2,"mat-option",10),r()(),n(31,"mat-form-field",6)(32,"mat-label"),a(33,"Imagen Alternativa"),r(),c(34,"input",11),r()(),n(35,"div",12),C(36,wt,2,0,"button",13),c(37,"span"),n(38,"button",14),u("click",function(){return s.onSubmit()}),n(39,"mat-icon"),a(40,"save"),r(),a(41," Guardar "),r()()()()(),n(42,"div",2)(43,"mat-card"),c(44,"img",15),b(45,"heroImage"),r()()(),n(46,"pre"),a(47),b(48,"json"),r()),o&2&&(m(),g(" ",s.currentHero.id?"Editar":"Agregar"," H\xE9roe "),m(2),f(s.currentHero.superhero),m(6),p("formGroup",s.heroForm),m(21),p("ngForOf",s.poublishers),m(6),p("ngIf",s.currentHero.id),m(8),p("src",F(45,7,s.currentHero),D),m(3),g("   ",F(48,9,s.currentHero),`
`))},dependencies:[I,P,K,x,T,L,B,X,Q,N,ee,O,it,Pe,Y,Z,ke,Be,Te,Le,G,j]});let i=e;return i})();function Ft(i,e){if(i&1&&(n(0,"mat-option",6),a(1),r()),i&2){let l=e.$implicit;p("value",l),m(),g(" ",l.superhero," ")}}function Ht(i,e){if(i&1&&(n(0,"mat-option",7),a(1),r()),i&2){let l=w();m(),g(" no se encontr\xF3 nada con el t\xE9rmino ",l.searchInput.value," ")}}var ft=(()=>{let e=class e{constructor(t){this.heroesService=t,this.searchInput=new M(""),this.heroes=[]}searchHero(){let t=this.searchInput.value||"";this.heroesService.getSuggestions(t).subscribe(o=>this.heroes=o)}onSelectedOption(t){if(!t.option.value){this.selectedHero=void 0;return}let o=t.option.value;this.searchInput.setValue(o.superhero),this.selectedHero=o}};e.\u0275fac=function(o){return new(o||e)(d(k))},e.\u0275cmp=v({type:e,selectors:[["app-search-page"]],decls:13,vars:7,consts:[["auto","matAutocomplete"],[1,"flex","flex-column","p-2"],["type","text","matInput","",3,"input","formControl","matAutocomplete"],["autoActiveFirstOption","",3,"optionSelected"],[3,"value",4,"ngFor","ngForOf"],["value","",4,"ngIf"],[3,"value"],["value",""]],template:function(o,s){if(o&1){let h=E();n(0,"div",1)(1,"h3"),a(2,"Buscador"),r(),n(3,"mat-form-field")(4,"mat-label"),a(5,"Buscador de h\xE9roes"),r(),n(6,"input",2),u("input",function(){return S(h),_(s.searchHero())}),r(),n(7,"mat-autocomplete",3,0),u("optionSelected",function(R){return S(h),_(s.onSelectedOption(R))}),C(9,Ft,2,2,"mat-option",4)(10,Ht,2,1,"mat-option",5),r()(),a(11),b(12,"json"),r()}if(o&2){let h=H(8);m(6),p("formControl",s.searchInput)("matAutocomplete",h),m(3),p("ngForOf",s.heroes),m(),p("ngIf",s.heroes.length===0&&s.searchInput.value&&s.searchInput.value.length>0),m(),g(" ",F(12,5,s.selectedHero)," ")}},dependencies:[I,P,je,K,Ve,X,Q,ee,Y,Z,Ne,G]});let i=e;return i})();var kt=i=>["/heroes/edit/",i],Dt=i=>["/heroes",i];function Pt(i,e){if(i&1&&(n(0,"mat-chip"),a(1),r()),i&2){let l=e.$implicit;m(),g(" ",l," ")}}var ht=(()=>{let e=class e{ngOnInit(){if(!this.hero)throw Error("Hero property is required")}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=v({type:e,selectors:[["heroes-hero-card"]],inputs:{hero:"hero"},decls:30,vars:19,consts:[["mat-card-image","",3,"src","alt"],[1,"mt-2"],[4,"ngFor","ngForOf"],["mat-button","","mat-raised","","color","primary",3,"routerLink"],[1,"spacer"],["mat-button","","mat-raised","",3,"routerLink"]],template:function(o,s){o&1&&(n(0,"mat-card")(1,"mat-card-header")(2,"mat-card-title"),a(3),r(),n(4,"mat-card-subtitle"),a(5),r()(),c(6,"img",0),b(7,"heroImage"),n(8,"mat-card-content",1)(9,"h4"),a(10),r(),n(11,"p")(12,"strong"),a(13,"Primera aparici\xF3n"),r(),a(14),c(15,"br"),n(16,"mat-chip-listbox"),C(17,Pt,2,1,"mat-chip",2),b(18,"slice"),r()()(),c(19,"mat-divider"),n(20,"mat-card-actions")(21,"button",3)(22,"mat-icon"),a(23,"edit"),r(),a(24," Editar "),r(),c(25,"span",4),n(26,"button",5)(27,"mat-icon"),a(28,"more_horiz"),r(),a(29," M\xE1s "),r()()()),o&2&&(m(3),f(s.hero.superhero),m(2),f(s.hero.alter_ego),m(),p("src",F(7,9,s.hero),D)("alt",s.hero.superhero),m(4),f(s.hero.publisher),m(4),g(" ",s.hero.first_appearance," "),m(3),p("ngForOf",Ie(18,11,s.hero.characters.split(","),0,3)),m(4),p("routerLink",pe(15,kt,s.hero.id)),m(5),p("routerLink",pe(17,Dt,s.hero.id)))},dependencies:[I,W,x,T,Re,L,re,B,ie,te,Ae,$e,N,O,ye,j]});let i=e;return i})();function Tt(i,e){if(i&1&&(n(0,"div",2),c(1,"heroes-hero-card",3),r()),i&2){let l=e.$implicit;m(),p("hero",l)}}var ge=(()=>{let e=class e{constructor(t){this.herosService=t,this.heroes=[]}ngOnInit(){this.herosService.getHeroes().subscribe(t=>{this.heroes=t})}};e.\u0275fac=function(o){return new(o||e)(d(k))},e.\u0275cmp=v({type:e,selectors:[["app-list-page"]],decls:5,vars:1,consts:[[1,"grid","bm-8","mt-2"],["class","col-12 sm:col-4 md:col-3 xl:col-2",4,"ngFor","ngForOf"],[1,"col-12","sm:col-4","md:col-3","xl:col-2"],[3,"hero"]],template:function(o,s){o&1&&(n(0,"h1"),a(1,"Listado de H\xE9roes"),r(),c(2,"mat-divider"),n(3,"div",0),C(4,Tt,2,1,"div",1),r()),o&2&&(m(4),p("ngForOf",s.heroes))},dependencies:[I,O,ht]});let i=e;return i})();function Lt(i,e){i&1&&(n(0,"mat-grid-list",2)(1,"mat-grid-tile"),c(2,"mat-spinner"),r()())}function Bt(i,e){if(i&1){let l=E();n(0,"div",3)(1,"mat-card",4)(2,"mat-card-header")(3,"mat-card-title"),a(4),r(),n(5,"mat-card-subtitle"),a(6),r()(),c(7,"img",5),b(8,"heroImage"),r(),n(9,"mat-card",4)(10,"mat-card-header")(11,"mat-card-title"),a(12,"Informaci\xF3n"),r(),n(13,"mat-card-subtitle"),a(14),r()(),n(15,"mat-card-content")(16,"mat-list")(17,"mat-list-item"),a(18),r(),n(19,"mat-list-item"),a(20),r(),n(21,"mat-list-item"),a(22),r(),n(23,"mat-list-item"),a(24),r()(),n(25,"button",6),u("click",function(){S(l);let o=w();return _(o.goBack())}),a(26," Regresar "),r()()()()}if(i&2){let l=w();m(4),f(l.hero.alter_ego),m(2),f(l.hero.superhero),m(),p("src",F(8,9,l.hero),D)("alt",l.hero.superhero),m(7),f(l.hero.superhero),m(4),f(l.hero.first_appearance),m(2),f(l.hero.characters),m(2),f(l.hero.publisher),m(2),f(l.hero.alter_ego)}}var gt=(()=>{let e=class e{constructor(t,o,s){this.heroesServices=t,this.activateRoute=o,this.router=s}ngOnInit(){this.activateRoute.params.pipe(A(({id:t})=>this.heroesServices.getHeroById(t))).subscribe(t=>{if(console.log({hero:t}),!t)return this.router.navigate(["heroes/list"]);this.hero=t})}goBack(){this.router.navigateByUrl("heroes/list")}};e.\u0275fac=function(o){return new(o||e)(d(k),d(z),d(J))},e.\u0275cmp=v({type:e,selectors:[["app-hero-page"]],decls:3,vars:2,consts:[["loading",""],["class","grid p-2",4,"ngIf","ngIfElse"],["cols","1"],[1,"grid","p-2"],[1,"col-12","sm:col-6"],["mat-card-image","",3,"src","alt"],["mat-button","","color","warn",3,"click"]],template:function(o,s){if(o&1&&C(0,Lt,3,0,"ng-template",null,0,xe)(2,Bt,27,11,"div",1),o&2){let h=H(1);m(2),p("ngIf",s.hero)("ngIfElse",h)}},dependencies:[P,x,T,L,re,B,ie,te,Xe,Qe,Ze,oe,tt,j]});let i=e;return i})();var Ot=[{path:"",component:lt,children:[{path:"new-hero",component:he},{path:"search",component:ft},{path:"edit/:id",component:he},{path:"list",component:ge},{path:":id",component:gt},{path:"list",component:ge},{path:"**",redirectTo:"list"}]}],vt=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=q({type:e}),e.\u0275inj=U({imports:[ce.forChild(Ot),ce]});let i=e;return i})();var Oi=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=q({type:e}),e.\u0275inj=U({imports:[Ee,vt,mt,Oe]});let i=e;return i})();export{Oi as HeroesModule};
