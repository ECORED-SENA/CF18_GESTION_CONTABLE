(function(e){function n(n){for(var i,o,c=n[0],s=n[1],d=n[2],l=0,u=[];l<c.length;l++)o=c[l],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&u.push(r[o][0]),r[o]=0;for(i in s)Object.prototype.hasOwnProperty.call(s,i)&&(e[i]=s[i]);f&&f(n);while(u.length)u.shift()();return t.push.apply(t,d||[]),a()}function a(){for(var e,n=0;n<t.length;n++){for(var a=t[n],i=!0,o=1;o<a.length;o++){var c=a[o];0!==r[c]&&(i=!1)}i&&(t.splice(n--,1),e=s(s.s=a[0]))}return e}var i={},o={app:0},r={app:0},t=[];function c(e){return s.p+"js/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",tema1:"tema1",tema2:"tema2",tema3:"tema3"}[e]||e)+"."+{actividad:"68a74b1b","chunk-0206bfa0":"758f57b3","chunk-04b93936":"a9ef66bb","chunk-13a6037e":"ce1475e9","chunk-16015154":"73c25c46","chunk-17977988":"872e3ed0","chunk-2c06842c":"e1f00954","chunk-2d208d90":"53498b70","chunk-2d21d0e2":"2d35cee6","chunk-2d22c123":"de00337c","chunk-2e80bb9a":"dbf1b162","chunk-3145fe0f":"7f7d8a51","chunk-328f70dd":"49426ddb","chunk-3807499c":"747cbe8d","chunk-3dc647fd":"0d9e6ed6","chunk-4cdd78c0":"fd6767cc","chunk-4fde0a08":"67cde4ff","chunk-515a8379":"6b9f64cf","chunk-53ccb27e":"60489573","chunk-59974754":"65298296","chunk-766a929b":"469551e9","chunk-839300a6":"b6a053bf","chunk-c796899c":"a12494e8","chunk-dbb9869e":"f161c85e",comple:"b3f6d59d",creditos:"26825cdf",glosario:"c1ae4ee4",intro:"7d241088",referencias:"dc4a56e8",tema1:"40436fad",tema2:"d6096887",tema3:"0b65a194"}[e]+".js"}function s(n){if(i[n])return i[n].exports;var a=i[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.e=function(e){var n=[],a={"chunk-04b93936":1,"chunk-16015154":1,"chunk-17977988":1,"chunk-3145fe0f":1,"chunk-328f70dd":1,"chunk-3807499c":1,"chunk-3dc647fd":1,"chunk-4fde0a08":1,"chunk-515a8379":1,"chunk-59974754":1,"chunk-766a929b":1,"chunk-839300a6":1,"chunk-dbb9869e":1,comple:1,creditos:1,glosario:1,intro:1,referencias:1};o[e]?n.push(o[e]):0!==o[e]&&a[e]&&n.push(o[e]=new Promise((function(n,a){for(var i="css/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",tema1:"tema1",tema2:"tema2",tema3:"tema3"}[e]||e)+"."+{actividad:"31d6cfe0","chunk-0206bfa0":"31d6cfe0","chunk-04b93936":"2cd5135e","chunk-13a6037e":"31d6cfe0","chunk-16015154":"d035a47c","chunk-17977988":"d035a47c","chunk-2c06842c":"31d6cfe0","chunk-2d208d90":"31d6cfe0","chunk-2d21d0e2":"31d6cfe0","chunk-2d22c123":"31d6cfe0","chunk-2e80bb9a":"31d6cfe0","chunk-3145fe0f":"d035a47c","chunk-328f70dd":"d035a47c","chunk-3807499c":"d035a47c","chunk-3dc647fd":"d035a47c","chunk-4cdd78c0":"31d6cfe0","chunk-4fde0a08":"5d24a906","chunk-515a8379":"d91b0678","chunk-53ccb27e":"31d6cfe0","chunk-59974754":"6c6a84ec","chunk-766a929b":"51be2d5e","chunk-839300a6":"b67dc245","chunk-c796899c":"31d6cfe0","chunk-dbb9869e":"d035a47c",comple:"d1d8f8fa",creditos:"38a2233a",glosario:"ae9a42e0",intro:"0e433876",referencias:"8421a565",tema1:"31d6cfe0",tema2:"31d6cfe0",tema3:"31d6cfe0"}[e]+".css",r=s.p+i,t=document.getElementsByTagName("link"),c=0;c<t.length;c++){var d=t[c],l=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(l===i||l===r))return n()}var u=document.getElementsByTagName("style");for(c=0;c<u.length;c++){d=u[c],l=d.getAttribute("data-href");if(l===i||l===r)return n()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=n,f.onerror=function(n){var i=n&&n.target&&n.target.src||r,t=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");t.code="CSS_CHUNK_LOAD_FAILED",t.request=i,delete o[e],f.parentNode.removeChild(f),a(t)},f.href=r;var m=document.getElementsByTagName("head")[0];m.appendChild(f)})).then((function(){o[e]=0})));var i=r[e];if(0!==i)if(i)n.push(i[2]);else{var t=new Promise((function(n,a){i=r[e]=[n,a]}));n.push(i[2]=t);var d,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=c(e);var u=new Error;d=function(n){l.onerror=l.onload=null,clearTimeout(f);var a=r[e];if(0!==a){if(a){var i=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;u.message="Loading chunk "+e+" failed.\n("+i+": "+o+")",u.name="ChunkLoadError",u.type=i,u.request=o,a[1](u)}r[e]=void 0}};var f=setTimeout((function(){d({type:"timeout",target:l})}),12e4);l.onerror=l.onload=d,document.head.appendChild(l)}return Promise.all(n)},s.m=e,s.c=i,s.d=function(e,n,a){s.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,n){if(1&n&&(e=s(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)s.d(a,i,function(n){return e[n]}.bind(null,i));return a},s.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(n,"a",n),n},s.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},s.p="",s.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],l=d.push.bind(d);d.push=n,d=d.slice();for(var u=0;u<d.length;u++)n(d[u]);var f=l;t.push([0,"chunk-vendors"]),a()})({0:function(e,n,a){e.exports=a("56d7")},"52e5":function(e,n,a){e.exports=a.p+"img/cc.58a75e32.svg"},"56d7":function(e,n,a){"use strict";a.r(n);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("68f3"),o=function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("div",{staticClass:"app",attrs:{id:"app"}},[a("Header"),a("div",{staticClass:"contenedor-principal"},[a("AsideMenu"),a("section",{staticClass:"seccion-principal",class:{"seccion-principal--barra-avance-open":!e.menuState}},[a("router-view")],1)],1),a("BarraAvance"),a("Accesibilidad")],1)},r=[],t={name:"App",data:function(){return{menuOpen:!1}},computed:{menuState:function(){return this.$store.getters.isMenuOpen}},mounted:function(){this.$aos.init({offset:100})}},c=t,s=a("2877"),d=Object(s["a"])(c,o,r,!1,null,null,null),l=d.exports,u=(a("d3b7"),a("3ca3"),a("ddb0"),a("b0c0"),a("2b0e")),f=a("8c4f"),m=a("ae58"),p=a("7e58");u["a"].use(f["a"]);var h=new f["a"]({routes:[{path:"/",name:"inicio",component:m["a"]},{path:"/introduccion",name:"introduccion",component:function(){return a.e("intro").then(a.bind(null,"5167"))}},{path:"/curso",name:"curso",component:p["a"],redirect:{name:"tema1"},children:[{path:"tema1",name:"tema1",component:function(){return a.e("tema1").then(a.bind(null,"02c8"))}},{path:"tema2",name:"tema2",component:function(){return a.e("tema2").then(a.bind(null,"fd11"))}},{path:"tema3",name:"tema3",component:function(){return a.e("tema3").then(a.bind(null,"eb46"))}}]},{path:"/actividad",name:"actividad",component:function(){return a.e("actividad").then(a.bind(null,"4298"))}},{path:"/glosario",name:"glosario",component:function(){return a.e("glosario").then(a.bind(null,"69a7"))}},{path:"/complementario",name:"complementario",component:function(){return a.e("comple").then(a.bind(null,"dd8c"))}},{path:"/referencias",name:"referencias",component:function(){return a.e("referencias").then(a.bind(null,"64ef"))}},{path:"/creditos",name:"creditos",component:function(){return a.e("creditos").then(a.bind(null,"2e81"))}}],scrollBehavior:function(e,n){if(e.hash){var a={selector:e.hash,offset:{y:100},behavior:"smooth"};return e.name===n.name?a:new Promise((function(e){setTimeout((function(){e(a)}),500)}))}setTimeout((function(){window.scrollTo({left:0,top:0,behavior:"auto"})}),100)}}),b=h,g=a("1c2c"),v=(a("a3a0"),{global:{componenteFormativo:"Técnicas de análisis e indicadores financieros",descripcionCurso:"Es importante realizar el análisis de los estados financieros, mediante la aplicación de técnicas como el análisis vertical y horizontal, indicadores financieros y de gestión; aunado a ello, el cálculo de punto de equilibrio, el EBITDA y el Valor Económico Agregado (EVA), además, de otros elementos que contribuyen a la generación e implementación de estrategias con valor agregado para la organización.",imagenBannerPrincipal:a("bce2"),fondoBannerPrincipal:a("f29c")},menuPrincipal:{menu:[{nombreRuta:"inicio",icono:"fas fa-home",titulo:"Volver al inicio"},{nombreRuta:"introduccion",icono:"fas fa-info",titulo:"Introducción",desarrolloContenidos:!0},{nombreRuta:"tema1",icono:"far fa-file-alt",numero:"1",titulo:"Análisis financiero",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"1.1",titulo:"Técnicas de análisis financiero",hash:"t_1_1"},{icono:"far fa-file-alt",numero:"1.2",titulo:"Metodología de cálculo de las técnicas de análisis horizontal y vertical",hash:"t_1_2"}]},{nombreRuta:"tema2",icono:"far fa-file-alt",numero:"2",titulo:"Indicadores financieros y de gestión",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"2.1",titulo:"Indicadores de gestión",hash:"t_2_1"},{icono:"far fa-file-alt",numero:"2.2",titulo:"Indicadores financieros",hash:"t_2_2"}]},{nombreRuta:"tema3",icono:"far fa-file-alt",numero:"3",titulo:"Otras técnicas de análisis financiero",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"3.1",titulo:"Valor Económico Agregado (EVA)",hash:"t_3_1"},{icono:"far fa-file-alt",numero:"3.2",titulo:"Beneficios antes de intereses, impuestos, depreciaciones y amortizaciones (EBITDA)",hash:"t_3_2"},{icono:"far fa-file-alt",numero:"3.3",titulo:"Punto de equilibrio",hash:"t_3_3"},{icono:"far fa-file-alt",numero:"3.4",titulo:"Generación de informes",hash:"t_3_4"}]}],subMenu:[{nombreRuta:"glosario",icono:"fas fa-sort-alpha-down",titulo:"Glosario"},{nombreRuta:"complementario",icono:"far fa-folder-open",titulo:"Material complementario"},{icono:"fas fa-book",titulo:"Referencias bibliográficas",nombreRuta:"referencias"},{icono:"fas fa-download",titulo:"Descargar material",download:"downloads/material.zip"},{icono:"far fa-registered",titulo:"Créditos",nombreRuta:"creditos"}]},referencias:[{referencia:"Bonsón, E., Cortijo, V. y Flores, F. (2009). Análisis de estados financieros. Fundamentos teóricos y casos prácticos. Pearson Educación.",link:"http://www.ebooks7-24.com.bdigital.sena.edu.co/?il=4717"},{referencia:"Consejo Técnico de la Contaduría Pública -CTCP- (2020, 24 de noviembre). Norma Internacional de Contabilidad 1. Presentación de estados financieros.",link:"https://www.mef.gob.pe/contenidos/conta_publ/con_nor_co/vigentes/nic/1_NIC.pdf"},{referencia:"Coral, D., L., Gudiño, E. (2014). Contabilidad universitaria. (7a. ed.) McGraw-Hill Interamericana. ",link:"http://www.ebooks7-24.com.bdigital.sena.edu.co/?il=105"},{referencia:"Gerencie.com (s.f.). Capital de trabajo. ",link:"https://www.gerencie.com/capital-de-trabajo.html"},{referencia:"Martínez, H. (s.f.). Indicadores financieros y su interpretación. ",link:"https://pdf4pro.com/view/iv-indicadores-financieros-y-su-6a73b.html"},{referencia:"Mejía, A. (s.f.). Indicadores de gestión.",link:"https://orion2020.org/archivo/sistema_mec/10_indicadores1.htm"},{referencia:"Roncancio, G. (2019).  Indicadores de gestión (KPI’s): tipos y ejemplos. Pensemos.",link:"https://gestion.pensemos.com/indicadores-de-gestion-tipos-y-ejemplos"},{referencia:"Sinisterra V., Polanco L. y Henao H. (2011). Contabilidad: sistema de información para las organizaciones. McGraw Hill. ",link:"http://fullseguridad.net/wp-content/uploads/2016/10/Contabilidad-6ta-Edici%C3%B3n-Gonzalo-Sinisterra.pdf"},{referencia:"Super Contable Sage. (s.f.). Glosario de términos contables.",link:"https://www.supercontable.com/informacion/Contabilidad/Definicion_de_Coste_Amortizado.html"},{referencia:"Varón, G., L. (2015). Presentación de estados financieros.",link:"https://www.cccucuta.org.co/media/Adjuntos_de_Noticias/presentacionestadosfinancierosctcp.pdf"}],glosario:[{termino:"Análisis horizontal",significado:"Técnica de análisis que permite determinar la tendencia de cada una de las cuentas o grupo de cuentas de los estados financieros básicos en dos o más períodos contables, esta tendencia se puede expresar en pesos o en porcentaje."},{termino:"Análisis vertical",significado:"Herramienta de análisis financiero que determina la participación de una cuenta en relación con un grupo o subgrupo de cuentas de los estados financieros.\t\t"},{termino:"Apalancamiento financiero",significado:"Grado de endeudamiento de la organización, mide el nivel de utilización que hace la empresa de las diferentes fuentes de financiación externas.\t\t"},{termino:"Capital de trabajo",significado:"Se refiere a las diferentes cuentas que conforman los rubros que se clasifican como activo corriente."},{termino:"Capital de trabajo neto",significado:"Se define como la diferencia entre los activos y los pasivos corrientes, muestra la disponibilidad de la organización para cumplir con sus compromisos periódicos."},{termino:"Endeudamiento",significado:"Índice financiero que muestra el derecho que tienen los acreedores sobre los activos de la empresa, se conoce también como razón de apalancamiento."},{termino:"Liquidez",significado:"Disponibilidad de activos corrientes de una empresa para responder por sus compromisos a corto plazo."},{termino:"Razones financieras",significado:"Índices usados en el análisis financiero que permiten relacionar cuentas de un estado financiero con otras cuentas del mismo estado o de otro diferente."},{termino:"Rentabilidad",significado:"Capacidad para generar utilidades con recursos propios."},{termino:"Rotación",significado:"Índices que miden la eficiencia de la administración de los recursos de una empresa por sus ejecutivos, se conoce también como razón de actividad."}],complementario:[{texto:"Bonsón, E, Cortijo, V., Flores, F. (2009). Análisis de estados financieros. Pearson Educación.",tipo:"Libro",link:"http://www.ebooks7-24.com.bdigital.sena.edu.co/?il=4717"},{texto:"Ortiz, A., H. (2011). Análisis financiero aplicado y principios de administración financiera (14a ed.). Universidad Externado de Colombia.",tipo:"Libro",link:"http://www.digitaliapublishing.com.bdigital.sena.edu.co/a/39931/analisis-financiero-aplicado-y-principios-de-administracion-financiera--14a-ed.-"}],creditos:{liderEquipo:[{nombre:"Maria Camila Garcia Santamaria",cargo:"Líder del equipo",centro:"Dirección General"}],contenidoInstruccional:[{nombre:"Rafael Neftalí Lizcano Reyes",cargo:"Asesor metodológico y pedagógico",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Patricia Mantilla Galvis",cargo:"Instructora",centro:"Centro de Gestión Industrial – Regional Distrito Capital"},{nombre:"Maryuri Agudelo Franco",cargo:"Diseñadora instruccional",centro:"Centro de Gestión Industrial – Regional Distrito Capital"},{nombre:"Vilma Lucía Perilla M",cargo:"Revisora pedagógica y metodológica",centro:"Centro de gestión Industrial – Regional Distrito Capital"},{nombre:"Julia Isabel Roberto",cargo:"Diseñadora y evaluadora instruccional",centro:"Centro para la Industria de la Comunicación Gráfica – Regional Distrito Capital"}],desarrolloProducto:[{nombre:"Francisco José Lizcano Reyes",cargo:"Responsable del equipo",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Leyson Fabian Castaño Perez",cargo:"Soporte organizacional",centro:"Centro de Comercio y Servicios - Regional Tolima"},{nombre:"Zuleidy Maria Ruiz Torres",cargo:"Producción audiovisual",centro:"Centro de Comercio y Servicios - Regional Tolima"},{nombre:["Jesus Antonio Vecino Valero"],cargo:"Diseño web",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Andrés Mauricio Santaella Ochoa",cargo:"Soporte front-end",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"John Andres Ayala Angarita",cargo:"Desarrollo front-end",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Veimar Celis Melendez",cargo:"Validación de diseño y contenido",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"}],gestoresRepositorio:[{nombre:"Milady Tatiana Villamil Castellanos",cargo:"Validación y vinculación en plataforma LMS",centro:"Centro de Comercio y Servicios - Regional Tolima"}]}});i["a"].prototype.$config=v;var k=a("9224");i["a"].prototype.$package=k,new i["a"]({router:b,store:g["a"],render:function(e){return e(l)}}).$mount("#app")},9224:function(e){e.exports=JSON.parse('{"name":"sena-base-2021","version":"4.1.0","private":true,"scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build","lint":"vue-cli-service lint"},"dependencies":{"ecored-base-pkg":"3.1.0","vue":"^2.6.11","vue-router":"^3.2.0","vuex":"^3.4.0"},"devDependencies":{"@vue/cli-plugin-babel":"^4.5.12","@vue/cli-plugin-eslint":"^4.5.12","@vue/cli-plugin-router":"^4.5.12","@vue/cli-plugin-vuex":"^4.5.12","@vue/cli-service":"^4.5.13","@vue/eslint-config-prettier":"^6.0.0","babel-eslint":"^10.1.0","eslint":"^6.7.2","eslint-plugin-prettier":"^3.1.3","eslint-plugin-vue":"^6.2.2","node-sass":"^4.12.0","prettier":"^1.19.1","sass-loader":"^8.0.2","vue-cli-plugin-pug":"^2.0.0","vue-template-compiler":"^2.6.11"}}')},"9eb5":function(e,n,a){e.exports=a.p+"img/logo-sena-naranja.43e61d0f.svg"},a3a0:function(e,n,a){},bce2:function(e,n,a){e.exports=a.p+"img/banner-principal.55e52a41.svg"},f29c:function(e,n,a){e.exports=a.p+"img/banner.41b34ba1.png"}});
//# sourceMappingURL=app.83efa862.js.map