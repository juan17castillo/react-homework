(this["webpackJsonpreact-homework"]=this["webpackJsonpreact-homework"]||[]).push([[0],{126:function(e,t,a){},135:function(e,t,a){},136:function(e,t,a){},153:function(e,t){},155:function(e,t){},167:function(e,t){},169:function(e,t){},196:function(e,t){},198:function(e,t){},199:function(e,t){},204:function(e,t){},206:function(e,t){},225:function(e,t){},237:function(e,t){},240:function(e,t){},244:function(e,t,a){"use strict";a.r(t);var s=a(3),n=a.n(s),c=a(127),i=a.n(c),r=(a(135),a(136),a(11)),l=a(12),o=a(14),d=a(13),m=a(20),u=a(6),h=a(29),j=a(130).a.initializeApp({apiKey:"AIzaSyBmRAHgir6S7esdp5ACr4OFYk7h5lcRKQY",authDomain:"usersandcampusmanager.firebaseapp.com",projectId:"usersandcampusmanager",storageBucket:"usersandcampusmanager.appspot.com",messagingSenderId:"1016626475792",appId:"1:1016626475792:web:b73cd58a990611ac446b95"}),b=a(128),f=a.n(b),p=a(2),v=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(r.a)(this,a);for(var s=arguments.length,n=new Array(s),c=0;c<s;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={venues:null,db:j.firestore(),delete:!1},e.onDelete=function(t){f.a.fire({title:"Est\xe1s seguro de eliminar la sede?",text:"Ser\xe1n cambios irreversibles!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Si, eliminar!"}).then((function(a){a.isConfirmed&&(e.state.db.collection("venues").doc(t).delete(),window.location.reload(!1))}))},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.state.db.collection("venues").get().then((function(t){var a=[];t.forEach((function(t){var s=Object(h.a)(Object(h.a)({},t.data()),{},{id:t.id});a.push(s),e.state.db.collection("venues").doc(t.id).update({venueId:t.id})})),e.setState({venues:a})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this;return this.props.logged?Object(p.jsxs)("table",{className:"table",children:[Object(p.jsx)("thead",{children:Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{scope:"col",children:"Nombre"}),Object(p.jsx)("th",{scope:"col",children:"Direcci\xf3n"}),Object(p.jsx)("th",{scope:"col",children:"Ciudad"}),Object(p.jsx)("th",{scope:"col",children:"Acciones"})]})}),Object(p.jsx)("tbody",{children:this.state.venues&&this.state.venues.map((function(t){var a="venue/"+t.id,s="updateVenue/"+t.id;return Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{className:"align-middle",children:t.name}),Object(p.jsx)("td",{className:"align-middle",children:t.address}),Object(p.jsx)("td",{className:"align-middle",children:t.city}),Object(p.jsxs)("td",{children:[Object(p.jsxs)(m.b,{className:"btn btn-primary mr-2",to:{pathname:a,state:{logged:e.props.logged}},activeClassName:"active",children:[" ",Object(p.jsx)("i",{className:"fas fa-eye"})]}),Object(p.jsx)(m.b,{className:"btn btn-warning mr-2",to:{pathname:s,state:{logged:e.props.logged}},children:Object(p.jsx)("i",{className:"fas fa-edit"})}),Object(p.jsx)("button",{className:"btn btn-danger",onClick:function(){return e.onDelete(t.id)},children:Object(p.jsx)("i",{className:"fas fa-trash"})})]})]},t.id)}))})]}):Object(p.jsx)(u.a,{to:"/login"})}}]),a}(s.Component),x=function(e){return e.logged?Object(p.jsxs)("div",{children:[Object(p.jsxs)("div",{className:"d-flex py-5",children:[Object(p.jsx)("h1",{className:"",children:"Sedes"}),Object(p.jsx)(m.b,{className:"nav-link ml-auto p-2",to:{pathname:"/createVenue",state:{logged:e.logged}},activeClassName:"active",children:"Crear Sede"})]}),Object(p.jsx)(v,{logged:e.logged})]}):Object(p.jsx)(u.a,{to:"/login"})},O=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"logout",value:function(){j.auth().signOut()}},{key:"render",value:function(){return Object(p.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark container-fluid",children:Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)(m.b,{className:"navbar-brand",to:"/",activeClassName:"active",children:"User's & Campus Manager"}),Object(p.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse",children:Object(p.jsx)("span",{className:"navbar-toggler-icon"})}),Object(p.jsxs)("div",{className:"collapse navbar-collapse",children:[Object(p.jsx)("ul",{className:"navbar-nav mr-auto",children:Object(p.jsx)("li",{className:"nav-item",children:Object(p.jsx)(m.b,{className:"nav-link",to:"/home",activeClassName:"active",children:"Inicio"})})}),Object(p.jsx)("ul",{className:"navbar-nav",children:Object(p.jsx)("li",{className:"nav-item",children:Object(p.jsx)(m.b,{className:"nav-link",to:"/",activeClassName:"active",onClick:this.logout,children:"Cerrar sesi\xf3n"})})})]})]})})}}]),a}(s.Component),g=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(r.a)(this,a);for(var s=arguments.length,n=new Array(s),c=0;c<s;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={logged:!0},e}return Object(l.a)(a,[{key:"render",value:function(){return void 0!==this.props.location.state&&this.props.location.state.logged?Object(p.jsxs)(n.a.Fragment,{children:[Object(p.jsx)(O,{}),Object(p.jsx)("div",{className:"container",children:Object(p.jsx)("section",{children:Object(p.jsx)(x,{logged:this.state.logged})})})]}):(this.setState({logged:!1}),Object(p.jsx)(u.a,{to:"/login"}))}}]),a}(s.Component),N=a(25),y=a.n(N),R={accepted:":attribute debe ser aceptado.",after:":attribute debe ser una fecha posterior a :date.",after_or_equal:":attribute debe ser una fecha posterior o igual a :date.",alpha:":attribute s\xf3lo debe contener letras.",array:":attribute debe ser un conjunto.",before:":attribute debe ser una fecha anterior a :date.",before_or_equal:":attribute debe ser una fecha anterior o igual a :date.",between:":attribute tiene que estar entre :min - :max:type.",boolean:"El campo :attribute debe tener un valor verdadero o falso.",date:":attribute no es una fecha v\xe1lida.",date_equals:":attribute debe ser una fecha igual a :date.",email:":attribute no es un correo v\xe1lido",in:":attribute es inv\xe1lido :values.",integer:":attribute debe ser un n\xfamero entero.",max:":attribute no debe ser mayor a :max:type.",min:"El tama\xf1o de :attribute debe ser de al menos :min:type.",not_in:":attribute es inv\xe1lido :values.",not_regex:"El formato del campo :attribute no es v\xe1lido.",numeric:":attribute debe ser num\xe9rico.",regex:"El formato de :attribute es inv\xe1lido.",required:"El campo :attribute es obligatorio.",size:"El tama\xf1o de :attribute debe ser :size:type.",string:"El campo :attribute debe ser una cadena de caracteres.",url:"El formato :attribute es inv\xe1lido."},C=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(r.a)(this,a),(e=t.call(this)).nameRef=n.a.createRef(),e.phoneRef=n.a.createRef(),e.emailRef=n.a.createRef(),e.cityRef=n.a.createRef(),e.addressRef=n.a.createRef(),e.zipCodeRef=n.a.createRef(),e.activeRef=n.a.createRef(),e.state={venue:{},db:j.firestore()},e.changeState=function(){e.setState({venue:{name:e.nameRef.current.value,phone:e.phoneRef.current.value,email:e.emailRef.current.value,city:e.cityRef.current.value,address:e.addressRef.current.value,zipCode:e.zipCodeRef.current.value,active:e.activeRef.current.value}})},e.saveVenue=function(t){t.preventDefault(),e.changeState(),e.validator.allValid()?(e.state.db.collection("venues").doc().set(e.state.venue),setTimeout((function(){window.location.href="/home"}),1e3)):(e.validator.showMessages(),e.forceUpdate())},y.a.addLocale("es",R),e.validator=new y.a({locale:"es"}),e}return Object(l.a)(a,[{key:"render",value:function(){return void 0!==this.props.location.state&&this.props.location.state.logged?Object(p.jsxs)("div",{children:[Object(p.jsx)(O,{}),Object(p.jsxs)("div",{className:"container text-center",children:[Object(p.jsx)("h1",{className:"my-5",children:"Crear sede"}),Object(p.jsx)("div",{className:"card col-md-12 py-5 my-5",children:Object(p.jsxs)("form",{onSubmit:this.saveVenue,children:[Object(p.jsxs)("div",{className:"form-row col-md-12",children:[Object(p.jsxs)("div",{className:"form-group col-md-6",children:[Object(p.jsx)("label",{htmlFor:"name",children:"Nombre"}),Object(p.jsx)("input",{type:"text",className:"form-control",name:"name",ref:this.nameRef,onChange:this.changeState,placeholder:"Sede Manglares"}),this.validator.message("nombre",this.state.venue.name,"required|alpha_num_space")]}),Object(p.jsxs)("div",{className:"form-group col-md-6",children:[Object(p.jsx)("label",{htmlFor:"phone",children:"Tel\xe9fono"}),Object(p.jsx)("input",{type:"tel",className:"form-control",name:"phone",ref:this.phoneRef,onChange:this.changeState,placeholder:"(+57) 555 555 55 55"}),this.validator.message("tel\xe9fono",this.state.venue.phone,"required|phone")]})]}),Object(p.jsxs)("div",{className:"form-row col-md-12",children:[Object(p.jsxs)("div",{className:"form-group col-md-4",children:[Object(p.jsx)("label",{htmlFor:"email",children:"Email"}),Object(p.jsx)("input",{type:"email",className:"form-control",name:"email",ref:this.emailRef,onChange:this.changeState,placeholder:"Email"}),this.validator.message("correo",this.state.venue.email,"required|email")]}),Object(p.jsxs)("div",{className:"form-group col-md-8",children:[Object(p.jsx)("label",{htmlFor:"address",children:"Direcci\xf3n"}),Object(p.jsx)("input",{type:"text",className:"form-control",name:"address",ref:this.addressRef,onChange:this.changeState,placeholder:"Avenida 555 calle 55"}),this.validator.message("direcci\xf3n",this.state.venue.address,"required")]})]}),Object(p.jsxs)("div",{className:"form-row col-md-12",children:[Object(p.jsxs)("div",{className:"form-group col-md-8",children:[Object(p.jsx)("label",{htmlFor:"city",children:"Ciudad"}),Object(p.jsx)("input",{type:"text",className:"form-control",ref:this.cityRef,onChange:this.changeState,name:"city",placeholder:"Cali"}),this.validator.message("ciudad",this.state.venue.city,"required")]}),Object(p.jsxs)("div",{className:"form-group col-md-4",children:[Object(p.jsx)("label",{htmlFor:"zipCode",children:"C\xf3digo Zip"}),Object(p.jsx)("input",{type:"text",className:"form-control",name:"zipCode",ref:this.zipCodeRef,onChange:this.changeState,placeholder:"760026"}),this.validator.message("c\xf3digo zip",this.state.venue.zipCode,"required|numeric")]})]}),Object(p.jsx)("div",{className:"form-group",children:Object(p.jsxs)("div",{className:"form-check",children:[Object(p.jsx)("input",{className:"form-check-input",name:"active",ref:this.activeRef,onChange:this.changeState,type:"checkbox"}),Object(p.jsx)("label",{className:"form-check-label",htmlFor:"active",children:"Activa"})]})}),Object(p.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Crear sede"})]})})]})]}):Object(p.jsx)(u.a,{to:"/login"})}}]),a}(s.Component),w=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(r.a)(this,a),(s=t.call(this,e)).nameRef=n.a.createRef(),s.phoneRef=n.a.createRef(),s.emailRef=n.a.createRef(),s.cityRef=n.a.createRef(),s.addressRef=n.a.createRef(),s.zipCodeRef=n.a.createRef(),s.activeRef=n.a.createRef(),s.state={venue:{},db:j.firestore()},s.changeState=function(){s.setState({venue:{name:s.nameRef.current.value,phone:s.phoneRef.current.value,email:s.emailRef.current.value,city:s.cityRef.current.value,address:s.addressRef.current.value,zipCode:s.zipCodeRef.current.value,active:s.activeRef.current.value}})},s.updateVenue=function(e){e.preventDefault(),s.changeState();var t=s.props.match.params.idUpdate;s.validator.allValid()?(s.state.db.collection("venues").doc(t).set(Object(h.a)(Object(h.a)({},s.state.venue),{},{venueId:t})),setTimeout((function(){window.location.href="/home"}),1e3)):(s.validator.showMessages(),s.forceUpdate())},y.a.addLocale("es",R),s.validator=new y.a({locale:"es"}),s}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.idUpdate;this.state.db.collection("venues").doc(t).get().then((function(t){if(t.exists){var a;a=t.data(),e.setState({venue:a})}else console.log("No such document!")}))}},{key:"render",value:function(){return void 0!==this.props.location.state&&this.props.location.state.logged?Object(p.jsxs)("div",{children:[Object(p.jsx)(O,{}),Object(p.jsxs)("div",{className:"container text-center",children:[Object(p.jsx)("h1",{className:"my-5",children:"Modificar sede"}),Object(p.jsx)("div",{className:"card col-md-12 py-5 my-5",children:Object(p.jsxs)("form",{onSubmit:this.updateVenue,children:[Object(p.jsxs)("div",{className:"form-row col-md-12",children:[Object(p.jsxs)("div",{className:"form-group col-md-6",children:[Object(p.jsx)("label",{htmlFor:"name",children:"Nombre"}),Object(p.jsx)("input",{type:"text",className:"form-control",name:"name",ref:this.nameRef,onChange:this.changeState,value:this.state.venue.name}),this.validator.message("nombre",this.state.venue.name,"required|alpha_num_space")]}),Object(p.jsxs)("div",{className:"form-group col-md-6",children:[Object(p.jsx)("label",{htmlFor:"phone",children:"Tel\xe9fono"}),Object(p.jsx)("input",{type:"tel",className:"form-control",name:"phone",ref:this.phoneRef,onChange:this.changeState,value:this.state.venue.phone}),this.validator.message("tel\xe9fono",this.state.venue.phone,"required|phone")]})]}),Object(p.jsxs)("div",{className:"form-row col-md-12",children:[Object(p.jsxs)("div",{className:"form-group col-md-4",children:[Object(p.jsx)("label",{htmlFor:"email",children:"Email"}),Object(p.jsx)("input",{type:"email",className:"form-control",name:"email",ref:this.emailRef,onChange:this.changeState,value:this.state.venue.email}),this.validator.message("correo",this.state.venue.email,"required|email")]}),Object(p.jsxs)("div",{className:"form-group col-md-8",children:[Object(p.jsx)("label",{htmlFor:"address",children:"Direcci\xf3n"}),Object(p.jsx)("input",{type:"text",className:"form-control",name:"address",ref:this.addressRef,onChange:this.changeState,value:this.state.venue.address}),this.validator.message("direcci\xf3n",this.state.venue.address,"required")]})]}),Object(p.jsxs)("div",{className:"form-row col-md-12",children:[Object(p.jsxs)("div",{className:"form-group col-md-8",children:[Object(p.jsx)("label",{htmlFor:"city",children:"Ciudad"}),Object(p.jsx)("input",{type:"text",className:"form-control",ref:this.cityRef,onChange:this.changeState,name:"city",value:this.state.venue.city}),this.validator.message("ciudad",this.state.venue.city,"required")]}),Object(p.jsxs)("div",{className:"form-group col-md-4",children:[Object(p.jsx)("label",{htmlFor:"zipCode",children:"C\xf3digo Zip"}),Object(p.jsx)("input",{type:"text",className:"form-control",name:"zipCode",ref:this.zipCodeRef,onChange:this.changeState,value:this.state.venue.zipCode}),this.validator.message("c\xf3digo zip",this.state.venue.zipCode,"required|numeric")]})]}),Object(p.jsx)("div",{className:"form-group",children:Object(p.jsxs)("div",{className:"form-check",children:[Object(p.jsx)("input",{className:"form-check-input",name:"active",ref:this.activeRef,onChange:this.changeState,type:"checkbox"}),Object(p.jsx)("label",{className:"form-check-label",htmlFor:"active",children:"Activa"})]})}),Object(p.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Modificar"})]})})]})]}):Object(p.jsx)(u.a,{to:"/login"})}}]),a}(s.Component),S=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(r.a)(this,a);for(var s=arguments.length,n=new Array(s),c=0;c<s;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={venue:{},db:j.firestore(),users:null,query:"",filteredQuery:[]},e.filterNames=function(t){t.preventDefault(),e.setState({filteredQuery:e.state.users.filter((function(t){return t.name.includes(e.state.query)}))})},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;this.state.db.collection("venues").doc(t).get().then((function(t){if(t.exists){var a;a=t.data(),e.setState({venue:a})}else console.log("No such document!")})),this.state.db.collection("users").where("venueId","==",t).get().then((function(t){var a=[];t.forEach((function(e){var t=e.data();a.push(t)})),e.setState({users:a}),e.setState({filteredQuery:e.state.users.filter((function(t){return t.name.includes(e.state.query)}))})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this;return void 0!==this.props.location.state&&this.props.location.state.logged?Object(p.jsxs)("div",{children:[Object(p.jsx)(O,{}),Object(p.jsx)("div",{className:"container text-center py-5",children:Object(p.jsxs)("div",{className:"card",children:[Object(p.jsx)("h1",{className:"py-3 text-primary",children:Object(p.jsx)("strong",{children:this.state.venue.name})}),Object(p.jsxs)("div",{className:"row py-2",children:[Object(p.jsx)("h3",{className:"col-sm text-secondary",children:"Ciudad"}),Object(p.jsx)("h2",{className:"col-sm",children:this.state.venue.city})]}),Object(p.jsxs)("div",{className:"row py-2",children:[Object(p.jsx)("h3",{className:"col-sm text-secondary",children:"Direcci\xf3n"}),Object(p.jsx)("h2",{className:"col-sm",children:this.state.venue.address})]}),Object(p.jsxs)("div",{className:"row py-2",children:[Object(p.jsx)("h3",{className:"col-sm text-secondary",children:"Email"}),Object(p.jsx)("h2",{className:"col-sm",children:this.state.venue.email})]}),Object(p.jsxs)("div",{className:"row py-2",children:[Object(p.jsx)("h3",{className:"col-sm text-secondary",children:"Tel\xe9fono"}),Object(p.jsx)("h2",{className:"col-sm",children:this.state.venue.phone})]}),Object(p.jsxs)("div",{className:"row py-2",children:[Object(p.jsx)("h3",{className:"col-sm text-secondary",children:"C\xf3digo Zip"}),Object(p.jsx)("h2",{className:"col-sm",children:this.state.venue.zipCode})]}),"on"===this.state.venue.active?Object(p.jsxs)("div",{className:"row py-2",children:[Object(p.jsx)("h3",{className:"col-sm text-secondary",children:"Status"}),Object(p.jsx)("h2",{className:"col-sm text-success",children:"Activa"})]}):Object(p.jsxs)("div",{className:"row py-2",children:[Object(p.jsx)("h3",{className:"col-sm text-secondary",children:"Status"}),Object(p.jsx)("h2",{className:"col-sm text-secondary",children:"Desactivada"})]})]})}),Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)("h1",{className:"py-3",children:Object(p.jsx)("strong",{children:"Usuarios asociados"})}),Object(p.jsxs)("form",{className:"form-inline py-4",onSubmit:this.filterNames,children:[Object(p.jsx)("input",{className:"form-control mr-sm-2",type:"search",placeholder:"Escribe un nombre","aria-label":"Search",onChange:function(t){return e.setState({query:t.target.value})}}),Object(p.jsx)("input",{className:"btn btn-outline-success my-2 my-sm-0",type:"submit",value:"Buscar"})]}),Object(p.jsxs)("table",{className:"table",children:[Object(p.jsx)("thead",{children:Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{scope:"col",children:"Nombre"}),Object(p.jsx)("th",{scope:"col",children:"Apellido"}),Object(p.jsx)("th",{scope:"col",children:"Email"}),Object(p.jsx)("th",{scope:"col",children:"Acciones"})]})}),Object(p.jsx)("tbody",{children:this.state.filteredQuery.map((function(t){return Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:t.name}),Object(p.jsx)("td",{children:t.lastName}),Object(p.jsx)("td",{children:t.email}),Object(p.jsxs)("td",{children:[" ",Object(p.jsx)(m.b,{className:"btn btn-warning mr-2",to:{pathname:"/updateUser/".concat(t.id),state:{logged:e.props.logged}},children:Object(p.jsx)("i",{className:"fas fa-edit"})}),Object(p.jsx)("button",{className:"btn btn-danger",onClick:function(){return e.onDelete(t.id)},children:Object(p.jsx)("i",{className:"fas fa-trash"})})]})]},t.id)}))})]}),null===this.state.filteredQuery?Object(p.jsx)("p1",{children:"No hay usuarios asociados"}):""]})]}):Object(p.jsx)(u.a,{to:"/login"})}}]),a}(s.Component),U=function(){return Object(p.jsxs)("section",{className:"container",children:[Object(p.jsx)("h2",{children:"Error 404 - Pagina no encontrada"}),Object(p.jsx)("p",{children:"La pagina a la que intentas acceder no existe."})]})},k=a(47),F=a.n(k),q=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(r.a)(this,a);for(var s=arguments.length,c=new Array(s),i=0;i<s;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).emailRef=n.a.createRef(),e.passwordRef=n.a.createRef(),e.state={user:{},db:j.firestore(),logged:!1},e.changeState=function(){e.setState({user:{email:e.emailRef.current.value,password:e.passwordRef.current.value}})},e.loginUser=function(t){t.preventDefault(),e.changeState(),j.auth().signInWithEmailAndPassword(e.emailRef.current.value,F()(e.passwordRef.current.value).toString()).then((function(t){e.setState({logged:!0})})).catch((function(t){e.setState({logged:!1}),console.log(t)}))},e}return Object(l.a)(a,[{key:"render",value:function(){return this.state.logged?Object(p.jsx)(u.a,{to:{pathname:"/home",state:{logged:this.state.logged}}}):Object(p.jsx)(n.a.Fragment,{children:Object(p.jsx)("div",{className:"container",children:Object(p.jsx)("section",{className:"mx-auto my-5 card w-50 py-3",children:Object(p.jsxs)("form",{className:"d-flex flex-column justify-content-center align-items-center",onSubmit:this.loginUser,children:[Object(p.jsx)("h2",{className:"mb-5",children:"Iniciar sesi\xf3n"}),Object(p.jsxs)("div",{className:"d-flex flex-column justify-content-center align-items-center mb-3",children:[Object(p.jsx)("label",{htmlFor:"email",className:"font-weight-bold",children:"Email"}),Object(p.jsx)("input",{className:"form-control",type:"text",name:"email",ref:this.emailRef,onChange:this.changeState,required:!0})]}),Object(p.jsxs)("div",{className:"d-flex flex-column justify-content-center align-items-center mb-3",children:[Object(p.jsx)("label",{htmlFor:"password",className:"font-weight-bold",children:"Contrase\xf1a"}),Object(p.jsx)("input",{className:"form-control",type:"password",name:"password",ref:this.passwordRef,onChange:this.changeState,required:!0})]}),Object(p.jsx)(m.b,{className:"mb-3",to:"/singUp",children:"Registrarme"}),Object(p.jsx)("input",{type:"submit",value:"Login",className:"btn btn-primary"})]})})})})}}]),a}(s.Component),E=(a(126),function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(r.a)(this,a),(s=t.call(this,e)).nameRef=n.a.createRef(),s.lastNameRef=n.a.createRef(),s.emailRef=n.a.createRef(),s.passwordRef=n.a.createRef(),s.passwordConfirmedRef=n.a.createRef(),s.validUntilRef=n.a.createRef(),s.campusRef=n.a.createRef(),s.state={user:{},venues:null,db:j.firestore(),singedUp:!1,campusId:null},s.changeState=function(){s.setState({user:{name:s.nameRef.current.value,lastName:s.lastNameRef.current.value,email:s.emailRef.current.value,password:F()(s.passwordRef.current.value).toString(),passwordConfirmed:F()(s.passwordConfirmedRef.current.value).toString(),validUntil:s.validUntilRef.current.value,venueId:s.campusRef.current.value},campusId:s.campusRef.current.value})},s.saveUser=function(e){e.preventDefault(),s.changeState(),console.log(s.state.user),s.validator.allValid()?s.state.user.password===s.state.user.passwordConfirmed&&(j.auth().createUserWithEmailAndPassword(s.state.user.email,s.state.user.password).then((function(e){s.state.db.collection("users").doc(e.user.uid).set(Object(h.a)(Object(h.a)({},s.state.user),{},{id:e.user.uid}))})).catch((function(e){console.log(e)})),s.setState({singedUp:!0})):(s.validator.showMessages(),s.forceUpdate())},y.a.addLocale("es",R),s.validator=new y.a({locale:"es"}),s}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.state.db.collection("venues").get().then((function(t){var a=[];t.forEach((function(t){e.setState({campusId:t.id});var s=t.data();a.push(s)})),e.setState({venues:a})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return this.state.singedUp?(this.setState({singedUp:!1}),Object(p.jsx)(u.a,{to:"/login"})):Object(p.jsx)(n.a.Fragment,{children:Object(p.jsx)("div",{className:"container",children:Object(p.jsx)("section",{className:"mx-auto my-5 card w-75 py-3",children:Object(p.jsxs)("form",{className:"d-flex flex-column justify-content-center align-items-center",onSubmit:this.saveUser,children:[Object(p.jsx)("h2",{className:"mb-3",children:"Crea tu cuenta"}),Object(p.jsxs)("div",{className:"d-flex flex-column justify-content-center align-items-center mb-3",children:[Object(p.jsx)("label",{htmlFor:"name",className:"font-weight-bold",children:"Nombre"}),Object(p.jsx)("input",{className:"form-control",type:"text",name:"name",ref:this.nameRef,onChange:this.changeState}),this.validator.message("nombre",this.state.user.name,"required|alpha_space")]}),Object(p.jsxs)("div",{className:"d-flex flex-column justify-content-center align-items-center mb-3",children:[Object(p.jsx)("label",{htmlFor:"lastName",className:"font-weight-bold",children:"Apellido"}),Object(p.jsx)("input",{className:"form-control",type:"text",name:"lastName",ref:this.lastNameRef,onChange:this.changeState}),this.validator.message("apellido",this.state.user.lastName,"required|alpha_space")]}),Object(p.jsxs)("div",{className:"d-flex flex-column justify-content-center align-items-center mb-3",children:[Object(p.jsx)("label",{htmlFor:"email",className:"font-weight-bold",children:"Email"}),Object(p.jsx)("input",{className:"form-control",type:"text",name:"email",ref:this.emailRef,onChange:this.changeState}),this.validator.message("email",this.state.user.email,"required|email")]}),Object(p.jsxs)("div",{className:"d-flex flex-column justify-content-center align-items-center mb-3",children:[Object(p.jsx)("label",{htmlFor:"password",className:"font-weight-bold",children:"Contrase\xf1a"}),Object(p.jsx)("input",{className:"form-control",type:"password",name:"password",ref:this.passwordRef,onChange:this.changeState}),this.validator.message("contrase\xf1a",this.state.user.password,"required|min:6")]}),Object(p.jsxs)("div",{className:"d-flex flex-column justify-content-center align-items-center mb-3",children:[Object(p.jsx)("label",{htmlFor:"passwordConfirmed",className:"font-weight-bold",children:"Repetir Contrase\xf1a"}),Object(p.jsx)("input",{className:"form-control",type:"password",name:"passwordConfirmed",ref:this.passwordConfirmedRef,onChange:this.changeState}),this.validator.message("repetir contrase\xf1a",this.state.user.passwordConfirmed,"required|min:6")]}),Object(p.jsxs)("div",{className:"d-flex flex-column justify-content-center align-items-center mb-3",children:[Object(p.jsx)("label",{htmlFor:"validUntil",className:"font-weight-bold",children:"Valido Hasta"}),Object(p.jsx)("input",{className:"form-control",type:"date",name:"validUntil",ref:this.validUntilRef,onChange:this.changeState}),this.validator.message("valido hasta",this.state.user.validUntil,"required")]}),Object(p.jsxs)("div",{className:"d-flex flex-column justify-content-center align-items-center mb-3",children:[Object(p.jsx)("label",{htmlFor:"campus",className:"font-weight-bold",children:"Sedes disponibles"}),Object(p.jsx)("select",{className:"form-control",name:"campus",ref:this.campusRef,onChange:this.changeState,children:this.state.venues&&this.state.venues.map((function(e){return Object(p.jsx)("option",{value:e.venueId,children:e.name},e.venueId)}))})]}),Object(p.jsx)("input",{type:"submit",value:"Register",className:"btn btn-primary"})]})})})})}}]),a}(s.Component)),z=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(r.a)(this,a),(s=t.call(this,e)).nameRef=n.a.createRef(),s.lastNameRef=n.a.createRef(),s.validUntilRef=n.a.createRef(),s.state={user:{},db:j.firestore()},s.changeState=function(){s.setState({user:{name:s.nameRef.current.value,lastName:s.lastNameRef.current.value,validUntil:s.validUntilRef.current.value}})},s.updateUser=function(e){e.preventDefault(),s.changeState();var t=s.props.match.params.idUser;s.validator.allValid()?(s.state.db.collection("users").doc(t).update({name:s.state.user.name,lastName:s.state.user.lastName,validUntil:s.state.user.validUntil}),setTimeout((function(){window.location.href="/home"}),1e3)):(s.validator.showMessages(),s.forceUpdate())},y.a.addLocale("es",R),s.validator=new y.a({locale:"es"}),s}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.idUser;this.state.db.collection("users").doc(t).get().then((function(t){if(t.exists){var a;a=t.data(),e.setState({user:a})}else console.log("No such document!")})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return void 0!==this.props.location.state&&this.props.location.state.logged?Object(p.jsxs)("div",{children:[Object(p.jsx)(O,{}),Object(p.jsxs)("div",{className:"container text-center",children:[Object(p.jsx)("h1",{className:"my-5",children:"Modificar Usuario"}),Object(p.jsxs)("form",{className:"d-flex flex-column justify-content-center align-items-center",onSubmit:this.updateUser,children:[Object(p.jsxs)("div",{className:"d-flex flex-column justify-content-center align-items-center mb-3",children:[Object(p.jsx)("label",{htmlFor:"name",className:"font-weight-bold",children:"Nombre"}),Object(p.jsx)("input",{className:"form-control",type:"text",name:"name",ref:this.nameRef,onChange:this.changeState,value:this.state.user.name}),this.validator.message("nombre",this.state.user.name,"required|alpha_space")]}),Object(p.jsxs)("div",{className:"d-flex flex-column justify-content-center align-items-center mb-3",children:[Object(p.jsx)("label",{htmlFor:"lastName",className:"font-weight-bold",children:"Apellido"}),Object(p.jsx)("input",{className:"form-control",type:"text",name:"lastName",ref:this.lastNameRef,onChange:this.changeState,value:this.state.user.lastName}),this.validator.message("apellido",this.state.user.lastName,"required|alpha_space")]}),Object(p.jsxs)("div",{className:"d-flex flex-column justify-content-center align-items-center mb-3",children:[Object(p.jsx)("label",{htmlFor:"validUntil",className:"font-weight-bold",children:"Valido Hasta"}),Object(p.jsx)("input",{className:"form-control",type:"date",name:"validUntil",ref:this.validUntilRef,onChange:this.changeState,value:this.state.user.validUntil}),this.validator.message("valido hasta",this.state.user.validUntil,"required")]}),Object(p.jsx)("input",{type:"submit",value:"Register",className:"btn btn-primary"})]})]})]}):Object(p.jsx)(u.a,{to:"/login"})}}]),a}(s.Component),D=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(p.jsx)(m.a,{children:Object(p.jsxs)(u.d,{children:[Object(p.jsx)(u.b,{exact:!0,path:"/",component:q}),Object(p.jsx)(u.b,{path:"/home",component:g}),Object(p.jsx)(u.b,{path:"/createVenue",component:C}),Object(p.jsx)(u.b,{path:"/updateVenue/:idUpdate",component:w}),Object(p.jsx)(u.b,{path:"/updateUser/:idUser",component:z}),Object(p.jsx)(u.b,{path:"/venue/:id",component:S}),Object(p.jsx)(u.b,{path:"/login",component:q}),Object(p.jsx)(u.b,{path:"/singUp",component:E}),Object(p.jsx)(u.b,{component:U})]})})}}]),a}(s.Component);var A=function(){return Object(p.jsx)("div",{className:"App",children:Object(p.jsx)(D,{})})},I=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,245)).then((function(t){var a=t.getCLS,s=t.getFID,n=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),s(e),n(e),c(e),i(e)}))};a(243);i.a.render(Object(p.jsx)(n.a.StrictMode,{children:Object(p.jsx)(A,{})}),document.getElementById("root")),I()}},[[244,1,2]]]);
//# sourceMappingURL=main.8ccd3873.chunk.js.map