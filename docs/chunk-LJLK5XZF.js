import{X as E,b as c,d as f,e as u,f as g,r as x}from"./chunk-MZRTEDMO.js";import{h as C,j as d,k as h}from"./chunk-KQYM37NJ.js";import"./chunk-JGYM447R.js";import{$ as p,Dc as v,Lb as m,ja as l,ka as s,ub as o,vb as e,wb as r}from"./chunk-2W2MFYBV.js";var F=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=l({type:t,selectors:[["app-layout-page"]],decls:3,vars:0,consts:[[1,"gri","p-3"],[1,"col-12","mt-5","md:col-6","md:col-offset-3","md:mt-8"]],template:function(n,M){n&1&&(o(0,"div",0)(1,"div",1),r(2,"router-outlet"),e()())},dependencies:[C]});let i=t;return i})();var S=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=l({type:t,selectors:[["app-login-page"]],decls:18,vars:0,consts:[[1,"flex","flex-column"],[1,"text-lg","mb-4"],["type","text","matInput","","placeholder","Nombre de Usuario"],["type","password","matInput","","placeholder","Contrase\xF1a"],["mat-button","","mat-flat-button","","color","primary"],[1,"flex","justify-content-end","mt-5"],["routerLink","/auth/new-account"]],template:function(n,M){n&1&&(o(0,"div",0)(1,"span",1),m(2,"Login"),e(),o(3,"mat-form-field")(4,"mat-label"),m(5,"Usuario"),e(),r(6,"input",2),e(),o(7,"mat-form-field")(8,"mat-label"),m(9,"Contrase\xF1a"),e(),r(10,"input",3),e(),o(11,"button",4)(12,"mat-icon"),m(13,"save"),e(),m(14," Ingresar "),e(),o(15,"div",5)(16,"a",6),m(17,"\xBFNo tienes una cuenta?"),e()()())},dependencies:[d,c,u,f,g,x]});let i=t;return i})();var I=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=l({type:t,selectors:[["app-signup-page"]],decls:22,vars:0,consts:[[1,"flex","flex-column"],[1,"text-lg","mb-4"],["type","text","matInput","","placeholder","Nombre de Usuario"],["type","password","matInput","","placeholder","Contrase\xF1a"],["mat-button","","mat-flat-button","","color","primary"],[1,"flex","justify-content-end","mt-5"],["routerLink","/auth/login"]],template:function(n,M){n&1&&(o(0,"div",0)(1,"span",1),m(2,"Registro"),e(),o(3,"mat-form-field")(4,"mat-label"),m(5,"Usuario"),e(),r(6,"input",2),e(),o(7,"mat-form-field")(8,"mat-label"),m(9,"Nombre"),e(),r(10,"input",2),e(),o(11,"mat-form-field")(12,"mat-label"),m(13,"Contrase\xF1a"),e(),r(14,"input",3),e(),o(15,"button",4)(16,"mat-icon"),m(17,"person_add"),e(),m(18," Crear cuenta "),e(),o(19,"div",5)(20,"a",6),m(21,"\xBFYa tienes una cuenta?"),e()()())},dependencies:[d,c,u,f,g,x]});let i=t;return i})();var P=[{path:"",component:F,children:[{path:"login",component:S},{path:"new-account",component:I},{path:"**",redirectTo:"login"}]}],L=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=s({type:t}),t.\u0275inj=p({imports:[h.forChild(P),h]});let i=t;return i})();var Z=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=s({type:t}),t.\u0275inj=p({imports:[v,L,E]});let i=t;return i})();export{Z as AuthModule};
