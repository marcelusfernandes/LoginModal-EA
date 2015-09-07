/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
   fonts['open-sans, sans-serif']='<script src=\"http://use.edgefonts.net/open-sans:n7,i7,n8,i8,i4,n3,i3,n4,n6,i6:all.js\"></script>';


var resources = [
];
var symbols = {
"stage": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'bg-fixed00',
            type:'image',
            rect:['0px','0px','1200px','800px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"bg-fixed00.jpg",'0px','0px']
         },
         {
            id:'bg-fade',
            type:'rect',
            rect:['0px','0px','1200px','800px','auto','auto'],
            fill:["rgba(0,0,0,1.00)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'clickss',
            type:'group',
            rect:['977','53','54','56','auto','auto'],
            c:[
            {
               id:'click1',
               type:'ellipse',
               rect:['9px','9px','99px','99px','auto','auto'],
               borderRadius:["50%","50%","50%","50%"],
               fill:["rgba(114,196,65,0.64)"],
               stroke:[0,"rgb(0, 0, 0)","none"]
            },
            {
               id:'click2',
               type:'ellipse',
               rect:['9px','9px','99px','99px','auto','auto'],
               borderRadius:["50%","50%","50%","50%"],
               fill:["rgba(114,196,65,0.64)"],
               stroke:[0,"rgb(0, 0, 0)","none"]
            }]
         },
         {
            id:'box-login',
            type:'rect',
            rect:['400px','337px','1px','429px','auto','auto'],
            borderRadius:["3px 3px","3px 3px","3px 3px","3px 3px"],
            fill:["rgba(255,255,255,1.00)"],
            stroke:[0,"rgba(255,255,255,1.00)","none"],
            filter:[0,0,1,1,0,0,0,0,"rgba(0,0,0,0)",0,0,0],
            transform:[]
         },
         {
            id:'ico-acesso',
            type:'image',
            rect:['440px','91px','42px','42px','auto','auto'],
            opacity:1,
            fill:["rgba(0,0,0,0)",im+"ico-acesso.png",'0px','0px']
         },
         {
            id:'Text',
            display:'none',
            type:'text',
            rect:['489px','97px','auto','auto','auto','auto'],
            text:"Acesse o Painel do Cliente",
            font:['open-sans, sans-serif',24,"rgba(70,90,97,1.00)","normal","none",""]
         },
         {
            id:'div',
            display:'none',
            type:'rect',
            rect:['440px','161px','320px','1px','auto','auto'],
            fill:["rgba(229,229,229,1.00)"],
            stroke:[0,"rgb(255, 255, 255)","none"]
         },
         {
            id:'Digite_seu_email',
            display:'none',
            type:'text',
            rect:['440px','189px','auto','auto','auto','auto'],
            text:"Digite seu e-mail",
            align:"left",
            font:['open-sans, sans-serif',14,"rgba(102,102,102,1.00)","normal","none","normal"],
            filter:[0,0,1,1,0,0,0,0,"rgba(0,0,0,0)",0,0,0]
         },
         {
            id:'tooltip',
            display:'none',
            type:'image',
            rect:['553px','192px','14px','14px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"tooltip.jpg",'0px','0px']
         },
         {
            id:'form-email',
            display:'none',
            type:'image',
            rect:['439px','209px','322px','55px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"form.jpg",'0px','0px']
         },
         {
            id:'form-email-ERRO',
            display:'none',
            type:'image',
            rect:['439px','10000px','322px','55px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"form-erro.jpg",'0px','0px']
         },
         {
            id:'senha',
            display:'none',
            type:'text',
            rect:['440px','290px','auto','auto','auto','auto'],
            text:"Senha",
            align:"left",
            font:['open-sans, sans-serif',14,"rgba(102,102,102,1.00)","normal","none","normal"]
         },
         {
            id:'esqueceu',
            display:'none',
            type:'text',
            rect:['685px','290px','auto','auto','auto','auto'],
            text:"esqueceu ?",
            align:"right",
            font:['open-sans, sans-serif',14,"rgba(16,130,190,1.00)","normal","none","normal"]
         },
         {
            id:'form-senha',
            display:'none',
            type:'image',
            rect:['439px','310px','322px','55px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"form.jpg",'0px','0px']
         },
         {
            id:'form-senha-ERRO',
            display:'none',
            type:'image',
            rect:['439px','400px','322px','55px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"form-erro.jpg",'0px','0px']
         },
         {
            id:'btn',
            display:'none',
            type:'image',
            rect:['440px','395px','321px','56px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"btn.png",'0px','0px']
         },
         {
            id:'email-p1',
            display:'none',
            type:'text',
            rect:['457px','225px','auto','auto','auto','auto'],
            text:"usuario",
            align:"left",
            font:['open-sans, sans-serif',18,"rgba(102,102,102,1)","normal","none","normal"]
         },
         {
            id:'email-p2',
            display:'none',
            type:'text',
            rect:['522px','225px','auto','auto','auto','auto'],
            text:"@",
            align:"left",
            font:['open-sans, sans-serif',18,"rgba(102,102,102,1)","normal","none","normal"]
         },
         {
            id:'email-p3',
            display:'none',
            type:'text',
            rect:['539px','225px','auto','auto','auto','auto'],
            text:"email.",
            align:"left",
            font:['open-sans, sans-serif',18,"rgba(102,102,102,1)","normal","none","normal"]
         },
         {
            id:'email-p4',
            display:'none',
            type:'text',
            rect:['591px','225px','auto','auto','auto','auto'],
            text:"com.br",
            align:"left",
            font:['open-sans, sans-serif',18,"rgba(102,102,102,1)","normal","none","normal"]
         },
         {
            id:'pws1',
            display:'none',
            type:'image',
            rect:['455px','333px','10px','11px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"pws.png",'0px','0px']
         },
         {
            id:'pws2',
            display:'none',
            type:'image',
            rect:['470px','333px','10px','11px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"pws.png",'0px','0px']
         },
         {
            id:'pws3',
            display:'none',
            type:'image',
            rect:['485px','333px','10px','11px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"pws.png",'0px','0px']
         },
         {
            id:'pws4',
            display:'none',
            type:'image',
            rect:['500px','333px','10px','11px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"pws.png",'0px','0px']
         },
         {
            id:'bg-alarm',
            display:'none',
            type:'rect',
            rect:['440px','172px','320px','85px','auto','auto'],
            fill:["rgba(241,241,241,1.00)"],
            stroke:[0,"rgb(255, 255, 255)","none"]
         },
         {
            id:'ico-erro',
            display:'none',
            type:'image',
            rect:['452px','195px','45px','39px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"ico-erro.png",'0px','0px']
         },
         {
            id:'msg-erro',
            display:'none',
            type:'text',
            rect:['503px','194px','232px','39px','auto','auto'],
            text:"O e-mail ou senha informados estão incorretos.",
            align:"left",
            font:['open-sans, sans-serif',16,"rgba(102,102,102,1)","normal","none","normal"]
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_click2}": [
            ["style", "top", '9px'],
            ["transform", "scaleY", '0.8'],
            ["color", "background-color", 'rgba(114,196,65,0.00)'],
            ["transform", "scaleX", '0.8'],
            ["style", "height", '37px'],
            ["style", "left", '9px'],
            ["style", "width", '36px']
         ],
         "${_pws1}": [
            ["style", "top", '333px'],
            ["style", "left", '455px'],
            ["style", "display", 'none']
         ],
         "${_ico-erro}": [
            ["style", "top", '195px'],
            ["style", "opacity", '0'],
            ["style", "left", '452px'],
            ["style", "display", 'none']
         ],
         "${_div}": [
            ["color", "background-color", 'rgba(229,229,229,1.00)'],
            ["style", "display", 'none'],
            ["style", "height", '1px'],
            ["style", "left", '440px'],
            ["style", "top", '161px']
         ],
         "${_form-email}": [
            ["style", "top", '209px'],
            ["style", "left", '439px'],
            ["style", "display", 'none']
         ],
         "${_pws2}": [
            ["style", "top", '333px'],
            ["style", "left", '470px'],
            ["style", "display", 'none']
         ],
         "${_tooltip}": [
            ["style", "top", '192px'],
            ["style", "left", '553px'],
            ["style", "display", 'none']
         ],
         "${_form-senha}": [
            ["style", "top", '310px'],
            ["style", "left", '439px'],
            ["style", "display", 'none']
         ],
         "${_bg-fixed00}": [
            ["style", "top", '0px'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '0px']
         ],
         "${_btn}": [
            ["style", "top", '395px'],
            ["style", "left", '440px'],
            ["style", "display", 'none']
         ],
         "${_TextCopy}": [
            ["style", "top", '97px'],
            ["style", "display", 'none'],
            ["color", "color", 'rgba(70,90,97,1.00)'],
            ["style", "font-family", 'open-sans, sans-serif'],
            ["style", "left", '489px'],
            ["style", "font-size", '22px']
         ],
         "${_email-p2}": [
            ["style", "display", 'none'],
            ["style", "top", '225px'],
            ["style", "left", '522px'],
            ["style", "font-size", '18px']
         ],
         "${_form-senha-ERRO}": [
            ["style", "top", '310px'],
            ["style", "opacity", '0'],
            ["style", "left", '439px'],
            ["style", "display", 'none']
         ],
         "${_pws3}": [
            ["style", "top", '333px'],
            ["style", "left", '485px'],
            ["style", "display", 'none']
         ],
         "${_bg-alarm}": [
            ["color", "background-color", 'rgba(241,241,241,1.00)'],
            ["style", "display", 'none'],
            ["style", "height", '1px'],
            ["style", "top", '172px'],
            ["style", "left", '440px'],
            ["style", "width", '320px']
         ],
         "${_email-p4}": [
            ["style", "display", 'none'],
            ["style", "top", '225px'],
            ["style", "left", '591px'],
            ["style", "font-size", '18px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(3,3,3,1.00)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '800px'],
            ["style", "width", '1200px']
         ],
         "${_bg-fade}": [
            ["style", "top", '0px'],
            ["style", "height", '800px'],
            ["color", "background-color", 'rgba(0,0,0,0.00)'],
            ["style", "left", '0px'],
            ["style", "width", '1200px']
         ],
         "${_Digite_seu_email}": [
            ["style", "top", '189px'],
            ["color", "color", 'rgba(102,102,102,1.00)'],
            ["style", "display", 'none'],
            ["subproperty", "filter.hue-rotate", '0deg'],
            ["style", "left", '440px'],
            ["style", "font-size", '14px']
         ],
         "${_click1}": [
            ["color", "background-color", 'rgba(114,196,65,0.00)'],
            ["transform", "scaleY", '0.8'],
            ["style", "top", '9px'],
            ["transform", "scaleX", '0.8'],
            ["style", "height", '37px'],
            ["style", "left", '9px'],
            ["style", "width", '36px']
         ],
         "${_box-login}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "border-top-left-radius", [3,3], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [3,3], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["transform", "scaleX", '0.01'],
            ["style", "border-top-right-radius", [3,3], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "width", '400px'],
            ["style", "top", '60px'],
            ["style", "border-bottom-left-radius", [3,3], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["transform", "scaleY", '0.002'],
            ["style", "height", '429px'],
            ["color", "border-color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '400px']
         ],
         "${_ico-acesso}": [
            ["style", "top", '91px'],
            ["style", "opacity", '1'],
            ["style", "left", '440px'],
            ["style", "display", 'block']
         ],
         "${_pws4}": [
            ["style", "top", '333px'],
            ["style", "left", '500px'],
            ["style", "display", 'none']
         ],
         "${_email-p1}": [
            ["style", "display", 'none'],
            ["style", "top", '225px'],
            ["style", "left", '457px'],
            ["style", "font-size", '18px']
         ],
         "${_Text}": [
            ["style", "top", '97px'],
            ["style", "display", 'none'],
            ["color", "color", 'rgba(70,90,97,1.00)'],
            ["style", "font-family", 'open-sans, sans-serif'],
            ["style", "left", '489px'],
            ["style", "font-size", '22px']
         ],
         "${_form-email-ERRO}": [
            ["style", "top", '209px'],
            ["style", "opacity", '0'],
            ["style", "left", '439px'],
            ["style", "display", 'none']
         ],
         "${_senha}": [
            ["style", "top", '290px'],
            ["style", "display", 'none'],
            ["color", "color", 'rgba(102,102,102,1.00)'],
            ["style", "left", '440px'],
            ["style", "font-size", '14px']
         ],
         "${_email-p3}": [
            ["style", "display", 'none'],
            ["style", "top", '225px'],
            ["style", "left", '539px'],
            ["style", "font-size", '18px']
         ],
         "${_msg-erro}": [
            ["style", "top", '194px'],
            ["style", "font-size", '16px'],
            ["style", "height", '39px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "left", '503px'],
            ["style", "width", '232px']
         ],
         "${_esqueceu}": [
            ["style", "top", '290px'],
            ["style", "text-align", 'right'],
            ["color", "color", 'rgba(16,130,190,1.00)'],
            ["style", "display", 'none'],
            ["style", "left", '685px'],
            ["style", "font-size", '14px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 5410,
         autoPlay: true,
         labels: {
            "email": 2500,
            "senha": 4000,
            "login-erro": 5000
         },
         timeline: [
            { id: "eid127", tween: [ "style", "${_pws1}", "display", 'block', { fromValue: 'none'}], position: 4000, duration: 0 },
            { id: "eid179", tween: [ "style", "${_box-login}", "height", '518px', { fromValue: '429px'}], position: 5000, duration: 410, easing: "easeOutQuad" },
            { id: "eid77", tween: [ "style", "${_box-login}", "top", '60px', { fromValue: '60px'}], position: 2140, duration: 0, easing: "easeInOutQuad" },
            { id: "eid182", tween: [ "style", "${_bg-alarm}", "height", '85px', { fromValue: '1px'}], position: 5000, duration: 410, easing: "easeOutQuad" },
            { id: "eid121", tween: [ "style", "${_email-p1}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid126", tween: [ "style", "${_email-p1}", "display", 'block', { fromValue: 'none'}], position: 2500, duration: 0 },
            { id: "eid102", tween: [ "style", "${_tooltip}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid105", tween: [ "style", "${_tooltip}", "display", 'block', { fromValue: 'none'}], position: 2065, duration: 0, easing: "easeInOutQuad" },
            { id: "eid103", tween: [ "style", "${_Digite_seu_email}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid106", tween: [ "style", "${_Digite_seu_email}", "display", 'block', { fromValue: 'none'}], position: 2065, duration: 0, easing: "easeInOutQuad" },
            { id: "eid128", tween: [ "style", "${_pws2}", "display", 'block', { fromValue: 'none'}], position: 4250, duration: 0 },
            { id: "eid108", tween: [ "style", "${_senha}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid110", tween: [ "style", "${_senha}", "display", 'block', { fromValue: 'none'}], position: 2065, duration: 0, easing: "easeInOutQuad" },
            { id: "eid25", tween: [ "transform", "${_click1}", "scaleX", '3', { fromValue: '0.8'}], position: 835, duration: 485 },
            { id: "eid120", tween: [ "style", "${_email-p3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid124", tween: [ "style", "${_email-p3}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0 },
            { id: "eid169", tween: [ "style", "${_form-senha}", "top", '400px', { fromValue: '310px'}], position: 5000, duration: 410, easing: "easeOutQuad" },
            { id: "eid194", tween: [ "style", "${_msg-erro}", "opacity", '1', { fromValue: '0'}], position: 5195, duration: 215, easing: "easeOutQuad" },
            { id: "eid6", tween: [ "color", "${_bg-fade}", "background-color", 'rgba(0,0,0,0.81)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,0)'}], position: 1500, duration: 470 },
            { id: "eid129", tween: [ "style", "${_pws3}", "display", 'block', { fromValue: 'none'}], position: 4500, duration: 0 },
            { id: "eid111", tween: [ "style", "${_esqueceu}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid112", tween: [ "style", "${_esqueceu}", "display", 'block', { fromValue: 'none'}], position: 2065, duration: 0, easing: "easeInOutQuad" },
            { id: "eid31", tween: [ "transform", "${_click2}", "scaleX", '2', { fromValue: '0.8'}], position: 1000, duration: 485 },
            { id: "eid188", tween: [ "style", "${_msg-erro}", "display", 'block', { fromValue: 'none'}], position: 5195, duration: 0, easing: "easeOutQuad" },
            { id: "eid68", tween: [ "transform", "${_box-login}", "scaleX", '1', { fromValue: '0.01'}], position: 1640, duration: 190, easing: "easeInOutQuad" },
            { id: "eid189", tween: [ "style", "${_ico-erro}", "display", 'block', { fromValue: 'none'}], position: 5195, duration: 0, easing: "easeOutQuad" },
            { id: "eid168", tween: [ "style", "${_email-p4}", "top", '315px', { fromValue: '225px'}], position: 5000, duration: 410, easing: "easeOutQuad" },
            { id: "eid78", tween: [ "style", "${_ico-acesso}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid79", tween: [ "style", "${_ico-acesso}", "display", 'block', { fromValue: 'none'}], position: 2065, duration: 0, easing: "easeInOutQuad" },
            { id: "eid206", tween: [ "style", "${_form-email-ERRO}", "top", '299px', { fromValue: '209px'}], position: 5000, duration: 410, easing: "easeOutQuad" },
            { id: "eid2", tween: [ "subproperty", "${_bg-fixed00}", "filter.blur", '20px', { fromValue: '0.000000px'}], position: 1500, duration: 470 },
            { id: "eid95", tween: [ "style", "${_Text}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid96", tween: [ "style", "${_Text}", "display", 'block', { fromValue: 'none'}], position: 2065, duration: 0, easing: "easeInOutQuad" },
            { id: "eid163", tween: [ "style", "${_form-email}", "top", '299px', { fromValue: '209px'}], position: 5000, duration: 410, easing: "easeOutQuad" },
            { id: "eid167", tween: [ "style", "${_senha}", "top", '380px', { fromValue: '290px'}], position: 5000, duration: 410, easing: "easeOutQuad" },
            { id: "eid173", tween: [ "style", "${_email-p3}", "top", '315px', { fromValue: '225px'}], position: 5000, duration: 410, easing: "easeOutQuad" },
            { id: "eid199", tween: [ "style", "${_form-email-ERRO}", "display", 'block', { fromValue: 'none'}], position: 5000, duration: 0, easing: "easeOutQuad" },
            { id: "eid211", tween: [ "style", "${_form-senha-ERRO}", "opacity", '1', { fromValue: '0.000000'}], position: 5000, duration: 410, easing: "easeOutQuad" },
            { id: "eid212", tween: [ "style", "${_form-senha-ERRO}", "display", 'block', { fromValue: 'none'}], position: 5000, duration: 0, easing: "easeOutQuad" },
            { id: "eid162", tween: [ "style", "${_tooltip}", "top", '282px', { fromValue: '192px'}], position: 5000, duration: 410, easing: "easeOutQuad" },
            { id: "eid164", tween: [ "style", "${_email-p2}", "top", '315px', { fromValue: '225px'}], position: 5000, duration: 410, easing: "easeOutQuad" },
            { id: "eid26", tween: [ "transform", "${_click1}", "scaleY", '3', { fromValue: '0.8'}], position: 835, duration: 485 },
            { id: "eid107", tween: [ "style", "${_form-senha}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid109", tween: [ "style", "${_form-senha}", "display", 'block', { fromValue: 'none'}], position: 2065, duration: 0, easing: "easeInOutQuad" },
            { id: "eid215", tween: [ "style", "${_form-senha-ERRO}", "top", '400px', { fromValue: '310px'}], position: 5000, duration: 410, easing: "easeOutQuad" },
            { id: "eid99", tween: [ "style", "${_div}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid100", tween: [ "style", "${_div}", "display", 'block', { fromValue: 'none'}], position: 2065, duration: 0, easing: "easeInOutQuad" },
            { id: "eid170", tween: [ "style", "${_btn}", "top", '485px', { fromValue: '395px'}], position: 5000, duration: 410, easing: "easeOutQuad" },
            { id: "eid195", tween: [ "style", "${_ico-erro}", "opacity", '1', { fromValue: '0'}], position: 5195, duration: 215, easing: "easeOutQuad" },
            { id: "eid198", tween: [ "color", "${_Digite_seu_email}", "color", 'rgba(192,40,40,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(102,102,102,1)'}], position: 5000, duration: 410, easing: "easeOutQuad" },
            { id: "eid36", tween: [ "color", "${_click1}", "background-color", 'rgba(114,196,65,0.6367)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(114,196,65,0.00)'}], position: 750, duration: 85 },
            { id: "eid28", tween: [ "color", "${_click1}", "background-color", 'rgba(114,196,65,0.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(114,196,65,0.6367)'}], position: 835, duration: 485 },
            { id: "eid166", tween: [ "style", "${_esqueceu}", "top", '380px', { fromValue: '290px'}], position: 5000, duration: 410, easing: "easeOutQuad" },
            { id: "eid101", tween: [ "style", "${_form-email}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid104", tween: [ "style", "${_form-email}", "display", 'block', { fromValue: 'none'}], position: 2065, duration: 0, easing: "easeInOutQuad" },
            { id: "eid174", tween: [ "style", "${_pws4}", "top", '423px', { fromValue: '333px'}], position: 5000, duration: 410, easing: "easeOutQuad" },
            { id: "eid30", tween: [ "transform", "${_click2}", "scaleY", '2', { fromValue: '0.8'}], position: 1000, duration: 485 },
            { id: "eid130", tween: [ "style", "${_pws4}", "display", 'block', { fromValue: 'none'}], position: 4750, duration: 0 },
            { id: "eid37", tween: [ "color", "${_click2}", "background-color", 'rgba(114,196,65,0.6367)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(114,196,65,0.00)'}], position: 920, duration: 80 },
            { id: "eid29", tween: [ "color", "${_click2}", "background-color", 'rgba(114,196,65,0.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(114,196,65,0.6367)'}], position: 1000, duration: 485 },
            { id: "eid203", tween: [ "style", "${_form-email-ERRO}", "opacity", '1', { fromValue: '0'}], position: 5000, duration: 410, easing: "easeOutQuad" },
            { id: "eid165", tween: [ "style", "${_pws2}", "top", '423px', { fromValue: '333px'}], position: 5000, duration: 410, easing: "easeOutQuad" },
            { id: "eid180", tween: [ "style", "${_bg-alarm}", "display", 'block', { fromValue: 'none'}], position: 5000, duration: 0, easing: "easeOutQuad" },
            { id: "eid161", tween: [ "style", "${_Digite_seu_email}", "top", '279px', { fromValue: '189px'}], position: 5000, duration: 410, easing: "easeOutQuad" },
            { id: "eid119", tween: [ "style", "${_email-p4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid123", tween: [ "style", "${_email-p4}", "display", 'block', { fromValue: 'none'}], position: 3250, duration: 0 },
            { id: "eid171", tween: [ "style", "${_email-p1}", "top", '315px', { fromValue: '225px'}], position: 5000, duration: 410, easing: "easeOutQuad" },
            { id: "eid71", tween: [ "transform", "${_box-login}", "scaleY", '0.002', { fromValue: '0.002'}], position: 1640, duration: 0, easing: "easeInOutQuad" },
            { id: "eid73", tween: [ "transform", "${_box-login}", "scaleY", '1.02', { fromValue: '0.002'}], position: 1830, duration: 180, easing: "easeInOutQuad" },
            { id: "eid74", tween: [ "transform", "${_box-login}", "scaleY", '1', { fromValue: '1.02'}], position: 2010, duration: 130, easing: "easeInOutQuad" },
            { id: "eid175", tween: [ "style", "${_pws3}", "top", '423px', { fromValue: '333px'}], position: 5000, duration: 410, easing: "easeOutQuad" },
            { id: "eid122", tween: [ "style", "${_email-p2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid125", tween: [ "style", "${_email-p2}", "display", 'block', { fromValue: 'none'}], position: 2750, duration: 0 },
            { id: "eid217", tween: [ "color", "${_senha}", "color", 'rgba(192,40,40,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(102,102,102,1)'}], position: 5000, duration: 410, easing: "easeOutQuad" },
            { id: "eid115", tween: [ "style", "${_btn}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid116", tween: [ "style", "${_btn}", "display", 'block', { fromValue: 'none'}], position: 2065, duration: 0, easing: "easeInOutQuad" },
            { id: "eid172", tween: [ "style", "${_pws1}", "top", '423px', { fromValue: '333px'}], position: 5000, duration: 410, easing: "easeOutQuad" }         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-931308434");
