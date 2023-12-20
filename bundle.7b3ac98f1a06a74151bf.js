"use strict";(self.webpackChunkreal_estate_website=self.webpackChunkreal_estate_website||[]).push([[36],{7469:(e,t,i)=>{i.d(t,{Q:()=>s,Z:()=>r});var o=i(9163);const d=o.ZP.span.withConfig({displayName:"styled__StyledFormRadioContainer",componentId:"sc-2i9uei-0"})(["display:flex;justify-content:space-between;"]),l=o.ZP.input.withConfig({displayName:"styled__StyledFormRadio",componentId:"sc-2i9uei-1"})(["display:none;transition:all 0.3s ease;&:checked + label{background-color:",";color:",";}"],(e=>e.theme.colors.colorMainRed),(e=>e.theme.colors.colorLightRed)),n=o.ZP.label.withConfig({displayName:"styled__StyledFormRadioLabel",componentId:"sc-2i9uei-2"})(["display:flex;align-items:center;justify-content:center;min-width:",";height:",";padding:0px 15px;line-height:34px;border:none;border-radius:",";user-select:none;background-color:",";box-shadow:0px 2px 4px ",";color:",";transition:all 0.3s ease;text-align:center;font-size:16px;font-weight:500;cursor:pointer;&:hover{box-shadow:0px 2px 8px ",";}@media (max-width:","){min-width:",";padding:",";}@media (max-width:","){min-width:",";}@media (max-width:","){min-width:",";height:",";font-size:14px;}@media (max-width:","){min-width:",";padding:",";height:",";}"],(e=>e.$formRadioType===s.CATALOG?"55px":e.$formRadioType===s.BUILDING?"80px":e.$formRadioType===s.CONSTRUCTOR?"450px":void 0),(e=>e.$formRadioType===s.CATALOG?"55px":"60px"),(e=>e.$formRadioType===s.CATALOG?"30px":"25px"),(e=>e.theme.colors.colorLightRed),(e=>e.theme.colors.boxShadowMain),(e=>e.theme.colors.colorBlack),(e=>e.theme.colors.boxShadowHover),(e=>e.theme.deviceSizes.laptop),(e=>e.$formRadioType===s.CATALOG?"55px":e.$formRadioType===s.BUILDING?"40px":e.$formRadioType===s.CONSTRUCTOR?"45vw":void 0),(e=>{if(e.$formRadioType===s.BUILDING)return"0 10px"}),(e=>e.theme.deviceSizes.tablet),(e=>e.$formRadioType===s.CATALOG?"55px":e.$formRadioType===s.BUILDING?"90px":e.$formRadioType===s.CONSTRUCTOR?"40vw":void 0),(e=>e.theme.deviceSizes.mobile),(e=>e.$formRadioType===s.CATALOG?"55px":e.$formRadioType===s.BUILDING?"70px":e.$formRadioType===s.CONSTRUCTOR?"90vw":void 0),(e=>{if(e.$formRadioType===s.BUILDING)return"50px"}),(e=>e.theme.deviceSizes.mobileSmall),(e=>e.$formRadioType===s.CATALOG?"55px":e.$formRadioType===s.BUILDING?"50px":e.$formRadioType===s.CONSTRUCTOR?"90vw":void 0),(e=>e.$formRadioType===s.CATALOG?"0px 15px":"0px 10px"),(e=>e.$formRadioType===s.CATALOG?"55px":e.$formRadioType===s.CONSTRUCTOR?"50px":void 0));var a=i(5893);let s;!function(e){e.CATALOG="catalog",e.BUILDING="apartment",e.CONSTRUCTOR="constructor"}(s||(s={}));const r=function(e){let{name:t,onChange:i,defaultChecked:o,id:s,value:r,label:c,radioType:p}=e;return(0,a.jsxs)(d,{id:"form-".concat(t),onChange:i,children:[(0,a.jsx)(l,{type:"radio",id:s,name:t,value:r,defaultChecked:o}),(0,a.jsx)(n,{$formRadioType:p,htmlFor:s,children:c})]})}},7318:(e,t,i)=>{i.d(t,{Z:()=>n});var o=i(8112);const d=i(9163).ZP.div.withConfig({displayName:"styled__StyledMap",componentId:"sc-cq1yr2-0"})(["border-radius:25px;overflow:hidden;@media(max-width:","){height:500px;}@media(max-width:","){height:40vh;}"],(e=>e.theme.deviceSizes.tablet),(e=>e.theme.deviceSizes.mobile));var l=i(5893);const n=function(e){let{latitude:t,longitude:i}=e;return(0,l.jsx)(d,{children:(0,l.jsx)(o.Yy,{query:{apikey:"caee58c2-bb49-4773-897c-9f20bf105bf7"},children:(0,l.jsx)(o.D5,{defaultState:{center:[t,i],zoom:16},width:"100%",height:"550px",children:(0,l.jsx)(o.ah,{geometry:[t,i]})})})})}},2030:(e,t,i)=>{i.d(t,{w:()=>y,Z:()=>u});var o=i(9163);const d=o.ZP.div.withConfig({displayName:"styled__StyledModalBackdrop",componentId:"sc-9yth4s-0"})(["display:flex;justify-content:center;align-items:center;position:fixed;top:0;left:0;width:100%;height:100%;z-index:10;background:rgba(0,0,0,0.5);"]),l=o.ZP.div.withConfig({displayName:"styled__StyledModalForm",componentId:"sc-9yth4s-1"})(["display:flex;flex-direction:column;justify-content:space-between;background:white;padding:24px;border-radius:10px;width:480px;height:185px;box-shadow:0 5px 15px rgba(0,0,0,0.3);@media (max-width:","){padding:20px;width:320px;height:fit-content;}@media (max-width:","){padding:12px;width:280px;}"],(e=>e.theme.deviceSizes.mobile),(e=>e.theme.deviceSizes.mobileSmall)),n=o.ZP.div.withConfig({displayName:"styled__StyledModalHeader",componentId:"sc-9yth4s-2"})(["display:flex;justify-content:space-between;align-items:center;"]),a=o.ZP.h3.withConfig({displayName:"styled__StyledModalTitle",componentId:"sc-9yth4s-3"})(["font-size:20px;color:",";@media (max-width:","){font-size:18px;}"],(e=>"error"===e.modalType?e.theme.colors.colorMainRed:e.theme.colors.colorBlack),(e=>e.theme.deviceSizes.mobile)),s=o.ZP.button.withConfig({displayName:"styled__StyledCloseButton",componentId:"sc-9yth4s-4"})(["background:none;border:none;cursor:pointer;font-size:20px;"]),r=o.ZP.div.withConfig({displayName:"styled__StyledModalBody",componentId:"sc-9yth4s-5"})(["display:flex;flex-direction:column;justify-content:space-between;height:100%;padding-top:15px;@media (max-width:","){gap:15px;}"],(e=>e.theme.deviceSizes.mobile)),c=o.ZP.p.withConfig({displayName:"styled__StyledModalText",componentId:"sc-9yth4s-6"})(["font-size:16px;@media (max-width:","){font-size:14px;}"],(e=>e.theme.deviceSizes.mobile)),p=o.ZP.input.withConfig({displayName:"styled__StyledModalInput",componentId:"sc-9yth4s-7"})(["display:inline-block;width:200px;font-size:14px;padding:5px;padding-left:10px;border-radius:10px;border:2px solid ",";outline:none;@media (max-width:","){width:150px;}@media (max-width:","){font-size:12px;width:130px;}"],(e=>"error"===e.modalType?e.theme.colors.colorMainRed:e.theme.colors.colorBlack),(e=>e.theme.deviceSizes.mobile),(e=>e.theme.deviceSizes.mobileSmall)),m=o.ZP.div.withConfig({displayName:"styled__StyledModalFooter",componentId:"sc-9yth4s-8"})(["display:flex;justify-content:space-between;"]),h=o.ZP.button.withConfig({displayName:"styled__StyledConfirmButton",componentId:"sc-9yth4s-9"})(["background-color:",";color:",";border:2px solid ",";padding:10px;border-radius:10px;cursor:pointer;transition:all 0.3s ease;font-size:14px;&:hover{background-color:",";color:",";}"],(e=>e.theme.colors.colorMainRed),(e=>e.theme.colors.colorWhite),(e=>e.theme.colors.colorMainRed),(e=>e.theme.colors.colorWhite),(e=>e.theme.colors.colorMainRed)),x={phoneForm:{title:"Консультация с менеджером",description:"Отлично! Укажите Ваш номер телефона и наш менеджер перезвонит Вам в кротчайшие сроки!",inputPhone:!0},success:{title:"Ваша заявка принята!",description:"Ваш персональный менеджер свяжется с Вами в ближайшие 15 минут, ожидайте!",inputPhone:!1},error:{title:"Ошибка в номере!",description:"Номер должен начинаться с +7 или 8 и содержать 10 цифр!",inputPhone:!0}};var g=i(5893);let y;!function(e){e.PHONEFORM="phoneForm",e.SUCCESS="success",e.ERROR="error"}(y||(y={}));const u=function(e){let{onClose:t,isModalOpen:i,inputHandler:o,onFormSubmit:y,modalType:u}=e;if(!i)return null;const{title:f,description:w,inputPhone:b}=x[u];return(0,g.jsx)(d,{onMouseDown:e=>{e.target===e.currentTarget&&t()},children:(0,g.jsxs)(l,{children:[(0,g.jsxs)(n,{children:[(0,g.jsx)(a,{modalType:u,children:f}),(0,g.jsx)(s,{onClick:t,children:"x"})]}),(0,g.jsxs)(r,{children:[(0,g.jsx)(c,{children:w}),(0,g.jsxs)(m,{children:[b&&(0,g.jsx)(p,{type:"tel",placeholder:"Ваш номер телефона",onChange:o,modalType:u}),(0,g.jsx)(h,{onClick:"success"===u?t:y,children:"Подтвердить"})]})]})]})})}},6036:(e,t,i)=>{i.r(t),i.d(t,{default:()=>Fe});var o=i(9163);const d=o.ZP.article.withConfig({displayName:"styled__StyledApartment",componentId:"sc-1p1ele1-0"})(["min-height:calc(100vh - 200px);color:",";"],(e=>e.theme.colors.colorBlack)),l=o.ZP.h1.withConfig({displayName:"styled__StyledApartmentNotFound",componentId:"sc-1p1ele1-1"})(["text-align:center;"]);var n=i(4723),a=i(3890),s=i(6277),r=i(5893);const c=function(e){let{children:t}=e;return(0,r.jsx)(s.P,{children:t})},p=o.ZP.section.withConfig({displayName:"styled__StyledApartmentAbout",componentId:"sc-h7r4ck-0"})(["display:flex;flex-direction:column;padding-top:10px;"]),m=o.ZP.div.withConfig({displayName:"styled__StyledApartmentAboutText",componentId:"sc-h7r4ck-1"})(["display:flex;flex-direction:column;gap:20px;"]),h=o.ZP.div.withConfig({displayName:"styled__StyledApartmentAboutInfo",componentId:"sc-h7r4ck-2"})(["display:grid;margin-top:20px;grid-template-columns:3fr 1fr;gap:80px;@media(max-width:","){max-height:fit-content;}@media(max-width:","){display:flex;flex-direction:column;max-height:fit-content;gap:40px;}"],(e=>e.theme.deviceSizes.laptop),(e=>e.theme.deviceSizes.tablet)),x=o.ZP.picture.withConfig({displayName:"styled__StyledApartmentAboutPicture",componentId:"sc-h7r4ck-3"})(["align-self:center;height:450px;width:450px;@media(max-width:","){height:350px;width:350px;}@media(max-width:","){height:80vw;width:80vw;}@media(max-width:","){height:90vw;width:90vw;}"],(e=>e.theme.deviceSizes.laptop),(e=>e.theme.deviceSizes.tablet),(e=>e.theme.deviceSizes.mobile)),g=o.ZP.img.withConfig({displayName:"styled__StyledApartmentAboutImage",componentId:"sc-h7r4ck-4"})(["width:100%;height:100%;object-fit:cover;border-radius:30px;"]),y=function(e){let{apartmentDescription:t,apartmentImage:i,apartmentImageMobile:o}=e;return(0,r.jsx)(c,{children:(0,r.jsxs)(p,{children:[(0,r.jsx)(a.ZP,{level:a.Yx.H2,size:a.Jj.XL,weight:a.AD.BOLD,children:"О проекте"}),(0,r.jsxs)(h,{children:[(0,r.jsx)(m,{children:t.map(((e,t)=>{const i="".concat(t,"-").concat(e.substring(0,5));return(0,r.jsx)(n.Z,{size:n.t.S,children:e},i)}))}),(0,r.jsxs)(x,{children:[(0,r.jsx)("source",{srcSet:o,media:"(max-width: 576px)"}),(0,r.jsx)(g,{src:i,alt:"Дневная фотография ЖК"})]})]})]})})},u=o.ZP.div.withConfig({displayName:"styled__StyledApartmentFeature",componentId:"sc-1oaxc8l-0"})(["display:flex;background-color:",";padding:20px;width:270px;height:110px;gap:20px;align-items:top;border-radius:25px;overflow:hidden;@media(max-width:","){width:35vw;align-items:center;}@media(max-width:","){gap:10px;width:40vw;height:130px;}@media(max-width:","){width:70vw;height:120px;}"],(e=>e.theme.colors.colorLightRed),(e=>e.theme.deviceSizes.laptop),(e=>e.theme.deviceSizes.tablet),(e=>e.theme.deviceSizes.mobile)),f=o.ZP.div.withConfig({displayName:"styled__StyledApartmentFeatureContainer",componentId:"sc-1oaxc8l-1"})(["display:flex;flex-direction:column;gap:5px;"]),w=o.ZP.img.withConfig({displayName:"styled__StyledApartmentFeatureImage",componentId:"sc-1oaxc8l-2"})(["width:40px;height:40px;"]),b=i.p+"2079da9fbfebea2312c8d539a0adcf67.svg",S=i.p+"20c571c4d05cbbeb460a16fb3be42b0a.svg",v=i.p+"7cb1b1a994043c4db27f6ee305bf8a4f.svg",C=i.p+"865a244a1330e662c7d71e5e6ac7ad75.svg";let j;!function(e){e.METRO="metro",e.INFRASTRUCTURE="infrastructure",e.LOCATION="location",e.HOSPITAL="hospital"}(j||(j={}));const _=function(e){let{descriptionText:t,type:i}=e,o="",d="";switch(i){case j.METRO:o=b,d="Метро";break;case j.INFRASTRUCTURE:o=C,d="Инфраструктура";break;case j.LOCATION:o=v,d="Расположение";break;case j.HOSPITAL:o=S,d="Медицина"}return(0,r.jsxs)(u,{children:[(0,r.jsx)(w,{src:o,alt:"Значок "+d}),(0,r.jsxs)(f,{children:[(0,r.jsx)(a.ZP,{level:a.Yx.H2,size:a.Jj.S,weight:a.AD.SEMIBOLD,children:d}),(0,r.jsx)(n.Z,{size:n.t.XS,children:t})]})]})},I=o.ZP.section.withConfig({displayName:"styled__StyledApartmentFeaturesList",componentId:"sc-f8tonh-0"})(["display:grid;grid-template-columns:repeat(4,300px);width:100%;padding:30px 0;@media(max-width:","){grid-template-columns:repeat(2,auto);grid-gap:40px;place-items:center;}@media(max-width:","){grid-gap:20px;}@media(max-width:","){grid-template-columns:repeat(1,auto);}"],(e=>e.theme.deviceSizes.laptop),(e=>e.theme.deviceSizes.tablet),(e=>e.theme.deviceSizes.mobile)),R=function(e){let{apartmentFeatures:t}=e;return(0,r.jsx)(c,{children:(0,r.jsx)(I,{children:t.map((e=>(0,r.jsx)(_,{type:e.type,descriptionText:e.description},e.id)))})})};var z=i(7318);const N=o.ZP.section.withConfig({displayName:"styled__StyledApartmentMap",componentId:"sc-12pvuyh-0"})(["padding:30px 0;gap:40px;background-color:",";"],(e=>e.theme.colors.colorLightRed)),P=(0,o.ZP)(s.P).withConfig({displayName:"styled__StyledApartmentMapContainer",componentId:"sc-12pvuyh-1"})(["display:flex;flex-direction:column;gap:20px;"]),k=function(e){let{latitude:t,longitude:i}=e;return(0,r.jsx)(N,{children:(0,r.jsxs)(P,{children:[(0,r.jsx)(a.ZP,{level:a.Yx.H2,size:a.Jj.XL,weight:a.AD.BOLD,children:"Расположение на карте"}),(0,r.jsx)(z.Z,{latitude:t,longitude:i})]})})};i(3948);var T=i(6869),Z=i(8678);const A=o.ZP.div.withConfig({displayName:"styled__StyledShowroom",componentId:"sc-19tbtqn-0"})(["display:flex;flex-direction:column;gap:20px;&:hover{.swiper-button-prev,.swiper-button-next{opacity:1;}.swiper-button-disabled{opacity:0.35;}}.swiper,.swiper-slide{background-size:cover;background-position:center;width:100%;height:700px;border-radius:25px;@media(max-width:","){height:85vw;}}.swiper-button-prev,.swiper-button-next{color:",";width:50px;height:50px;background-color:",";border-radius:25%;opacity:0;transition:all 0.3s ease;}.swiper-button-prev:hover,.swiper-button-next:hover{border-radius:50%;}.swiper-button-prev::after,.swiper-button-next::after{font-size:14px;font-weight:700;align-self:center;justify-self:center;}.swiper-pagination-bullet{background-color:",";width:6px;height:6px;transition:all 0.3s ease;}.swiper-pagination-bullet-active{background-color:",";width:8px;height:8px;}"],(e=>e.theme.deviceSizes.tablet),(e=>e.theme.colors.colorSlideshowButton),(e=>e.theme.colors.colorWhite),(e=>e.theme.colors.colorSlideshowPagination),(e=>e.theme.colors.colorSlideshowPaginationActive)),L=o.ZP.div.withConfig({displayName:"styled__StyledShowroomButtons",componentId:"sc-19tbtqn-1"})(["display:flex;gap:10px;@media(max-width:","){display:grid;grid-template-columns:repeat(2,auto);place-items:center;}"],(e=>e.theme.deviceSizes.mobile)),O=o.ZP.picture.withConfig({displayName:"styled__StyledShowroomPicture",componentId:"sc-19tbtqn-2"})(["width:100%;height:100%;"]),M=o.ZP.img.withConfig({displayName:"styled__StyledShowroomImage",componentId:"sc-19tbtqn-3"})(["width:100%;height:100%;object-fit:cover;border-radius:25px;"]),B=o.ZP.button.withConfig({displayName:"styled__StyledShowroomButton",componentId:"sc-tyfhup-0"})(["width:140px;height:60px;font-size:16px;border:none;background-color:",";color:",";border-radius:25px;font-weight:500;cursor:pointer;transition:all 0.3s ease;@media(max-width:","){font-size:14px;border-radius:15px;height:40px;}@media(max-width:","){width:120px;}"],(e=>e.$active?e.theme.colors.colorMainRed:e.theme.colors.colorLightRed),(e=>e.$active?e.theme.colors.colorWhite:e.theme.colors.colorBlack),(e=>e.theme.deviceSizes.mobile),(e=>e.theme.deviceSizes.mobileSmall)),D=function(e){let{selectedRoom:t,setSelectedRoom:i,room:o,onButtonClick:d,children:l}=e;const n=t===o;return(0,r.jsx)(B,{$active:n,onClick:()=>{i(o),d(o)},children:l})};var F=i(7294);const $=function(e){let{slides:t}=e;const[i,o]=(0,F.useState)("livingroom"),d=(0,F.useRef)(null);function l(e){const i=d.current;if(i){const o=t.findIndex((t=>t.type===e));-1!==o&&i.slideTo(o)}}return(0,r.jsxs)(A,{children:[(0,r.jsxs)(L,{children:[(0,r.jsx)(D,{selectedRoom:i,setSelectedRoom:o,room:"livingroom",onButtonClick:l,children:"Гостиная"}),(0,r.jsx)(D,{selectedRoom:i,setSelectedRoom:o,room:"bedroom",onButtonClick:l,children:"Спальня"}),(0,r.jsx)(D,{selectedRoom:i,setSelectedRoom:o,room:"kitchen",onButtonClick:l,children:"Кухня"}),(0,r.jsx)(D,{selectedRoom:i,setSelectedRoom:o,room:"bathroom",onButtonClick:l,children:"Ванная"}),(0,r.jsx)(D,{selectedRoom:i,setSelectedRoom:o,room:"hallway",onButtonClick:l,children:"Прихожая"})]}),(0,r.jsx)(T.tq,{modules:[Z.W_,Z.tl,Z.LW,Z.s5],onSwiper:e=>{d.current=e},spaceBetween:50,slidesPerView:1,navigation:!0,pagination:{clickable:!0},scrollbar:{draggable:!0},onSlideChange:()=>{const e=d.current;if(e){var i;const d=e.activeIndex,l=null===(i=t[d])||void 0===i?void 0:i.type;l&&o(l)}},children:t.map(((e,t)=>(0,r.jsx)(T.o5,{"data-type":e.type,children:(0,r.jsxs)(O,{children:[(0,r.jsx)("source",{srcSet:e.imageMobile,media:"(max-width: 576px)"}),(0,r.jsx)(M,{src:e.image,alt:"Изображение "+e.type+" номер "+t})]})},t+e.type)))})]})},U=o.ZP.section.withConfig({displayName:"styled__StyledApartmentShowroom",componentId:"sc-kciodg-0"})(["display:flex;flex-direction:column;gap:20px;padding:30px 0;"]),G=function(e){let{rooms:t}=e;return(0,r.jsx)(c,{children:(0,r.jsxs)(U,{children:[(0,r.jsx)(a.ZP,{level:a.Yx.H2,size:a.Jj.XL,weight:a.AD.BOLD,children:"Отделка квартиры"}),(0,r.jsx)($,{slides:t})]})})};var H=i(7469);const J=o.ZP.form.withConfig({displayName:"styled__StyledCatalogFilterForm",componentId:"sc-vka3p-0"})(["display:flex;justify-content:space-between;@media(max-width:","){justify-content:flex-start;gap:10px;}@media(max-width:","){justify-content:center;width:185px;flex-wrap:wrap;flex-shrink:3;}"],(e=>e.theme.deviceSizes.laptop),(e=>e.theme.deviceSizes.mobileSmall)),q=[{value:"parking",label:"Машиноместа",id:"parking"},{value:"1",label:"1",id:"rooms-1"},{value:"2",label:"2",id:"rooms-2"},{value:"3",label:"3",id:"rooms-3"}],W=function(e){let{setSelectedRoomType:t}=e;const i=e=>{t(e.target.value)};return(0,r.jsx)(J,{children:q.map((e=>(0,r.jsx)(F.Fragment,{children:(0,r.jsx)(H.Z,{id:e.id,name:"catalogRadio",value:e.value,defaultChecked:"1"===e.value,onChange:i,radioType:H.Q.CATALOG,label:e.label})},e.id)))})},E=o.ZP.li.withConfig({displayName:"styled__StyledCatalogCard",componentId:"sc-i4h0e8-0"})(["display:flex;flex-direction:column;align-items:center;justify-content:center;width:100px;height:130px;gap:10px;border:",";border-radius:25px;background-color:",";cursor:pointer;box-shadow:0px 2px 4px ",";transition:all 0.3s ease;&:hover{box-shadow:0px 2px 8px ",";}@media(max-width:","){gap:5px;padding:10px;height:120px;}"],(e=>e.isSelected?"1px solid ".concat(e.theme.colors.colorMainRed):null),(e=>e.theme.colors.colorLightRed),(e=>e.theme.colors.boxShadowMain),(e=>e.theme.colors.boxShadowHover),(e=>e.theme.deviceSizes.tablet)),X=o.ZP.img.withConfig({displayName:"styled__StyledCatalogCardImage",componentId:"sc-i4h0e8-1"})(["width:75px;height:75px;"]),Y=o.ZP.p.withConfig({displayName:"styled__StyledCatalogCardSize",componentId:"sc-i4h0e8-2"})(["font-size:12px;font-weight:500;color:",";"],(e=>e.theme.colors.colorBlack)),Q=function(e){let{details:t,isSelected:i,handleCatalogCardChange:o}=e;return(0,r.jsxs)(E,{onClick:o,isSelected:i,children:[(0,r.jsx)(X,{src:t.image,alt:"План квартиры"}),(0,r.jsxs)(Y,{children:[" ",t.size," м²"]})]})},V=o.ZP.ul.withConfig({displayName:"styled__StyledCatalogList",componentId:"sc-67sc4w-0"})(["display:grid;grid-template-columns:repeat(3,100px);width:340px;grid-gap:10px;margin-top:30px;padding-right:5px;padding-left:5px;padding-bottom:10px;overflow-y:auto;overflow-x:hidden;scrollbar-width:thin;scrollbar-color:"," ",";&::-webkit-scrollbar{width:5px;}&::-webkit-scrollbar-thumb{background-color:",";border-radius:5px;}&::-webkit-scrollbar-track{background-color:",";}@media(max-width:","){display:flex;flex-wrap:nowrap;overflow-x:auto;width:100%;margin-top:0;padding-bottom:20px;gap:25px;overflow-y:hidden;overflow-x:auto;&::-webkit-scrollbar{height:5px;width:auto;}}@media(max-width:","){gap:15px;}"],(e=>e.theme.colors.colorMainRed),(e=>e.theme.colors.colorLightRed),(e=>e.theme.colors.colorMainRed),(e=>e.theme.colors.colorLightRed),(e=>e.theme.deviceSizes.tablet),(e=>e.theme.deviceSizes.mobile)),K=o.ZP.p.withConfig({displayName:"styled__StyledCatalogNoOptionsMessage",componentId:"sc-67sc4w-1"})(["grid-column:1 / -1;text-align:center;align-self:center;justify-self:center;font-size:16px;"]),ee=function(e){let{apartments:t,selectedRoomType:i,onCatalogCardChange:o,selectedApartmentId:d}=e,l=[];return l=t.filter((e=>e.roomNum===i)),(0,r.jsx)(V,{children:l.length>0?l.map((e=>(0,r.jsx)(Q,{details:e,handleCatalogCardChange:()=>o(e),isSelected:d===e.id},e.id))):(0,r.jsx)(K,{children:"Нет свободных вариантов"})})},te=o.ZP.div.withConfig({displayName:"styled__StyledCatalog",componentId:"sc-15fy54u-0"})(["display:flex;gap:20px;@media(max-width:","){flex-direction:column;}"],(e=>e.theme.deviceSizes.tablet)),ie=o.ZP.div.withConfig({displayName:"styled__StyledCatalogSelector",componentId:"sc-15fy54u-1"})(["display:flex;flex-direction:column;width:400px;height:600px;padding:32px;border-radius:30px;background-color:",";@media(max-width:","){width:100%;height:fit-content;padding:20px;gap:20px;}@media(max-width:","){padding:15px;align-items:center;}"],(e=>e.theme.colors.colorWhite),(e=>e.theme.deviceSizes.tablet),(e=>e.theme.deviceSizes.mobile)),oe=o.ZP.div.withConfig({displayName:"styled__StyledCatalogButtonContainer",componentId:"sc-15fy54u-2"})(["display:flex;flex-direction:column;align-items:center;justify-content:end;height:70px;width:100%;margin-top:auto;background-color:",";@media(max-width:","){height:fit-content;}"],(e=>e.theme.colors.colorWhite),(e=>e.theme.deviceSizes.tablet)),de=o.ZP.div.withConfig({displayName:"styled__StyledCatalogInfo",componentId:"sc-1bsovhu-0"})(["display:flex;flex-direction:column;align-items:center;justify-content:space-between;width:880px;height:600px;border-radius:30px;gap:20px;padding:20px;background-color:",";@media(max-width:","){width:100%;height:100%;}"],(e=>e.theme.colors.colorWhite),(e=>e.theme.deviceSizes.tablet)),le=(0,o.ZP)(de).withConfig({displayName:"styled__StyledCatalogInfoApartment",componentId:"sc-1bsovhu-1"})(["justify-content:space-between;"]),ne=(0,o.ZP)(de).withConfig({displayName:"styled__StyledCatalogInfoPlaceholder",componentId:"sc-1bsovhu-2"})(["justify-content:center;"]),ae=o.ZP.h3.withConfig({displayName:"styled__StyledCatalogInfoPlaceholderTitle",componentId:"sc-1bsovhu-3"})(["display:block;font-weight:400;font-size:20px;@media(max-width:","){font-size:16px;}@media(max-width:","){font-size:14px;text-align:center;}"],(e=>e.theme.deviceSizes.tablet),(e=>e.theme.deviceSizes.mobile)),se=o.ZP.img.withConfig({displayName:"styled__StyledCatalogInfoImg",componentId:"sc-1bsovhu-4"})(["width:520px;height:460px;@media(max-width:","){width:400px;height:400px;}@media(max-width:","){width:70vw;height:70vw;}"],(e=>e.theme.deviceSizes.laptop),(e=>e.theme.deviceSizes.tablet)),re=o.ZP.span.withConfig({displayName:"styled__StyledCatalogInfoContainer",componentId:"sc-1bsovhu-5"})(["display:inline-flex;align-items:center;justify-content:center;gap:20px;width:fit-content;padding:20px 40px;border-radius:30px;background-color:",";@media(max-width:","){padding:15px;width:75vw;}@media(max-width:","){display:grid;grid-template-columns:repeat(2,auto);place-items:center;}"],(e=>e.theme.colors.colorLightRed),(e=>e.theme.deviceSizes.mobile),(e=>e.theme.deviceSizes.mobile)),ce=o.ZP.span.withConfig({displayName:"styled__StyledCatalogInfoItem",componentId:"sc-1bsovhu-6"})(["display:inline-flex;flex-direction:column;align-items:center;justify-content:center;gap:5px;"]),pe=o.ZP.p.withConfig({displayName:"styled__StyledCatalogInfoLabel",componentId:"sc-1bsovhu-7"})(["font-size:12px;color:",""],(e=>e.theme.colors.colorGray)),me=o.ZP.p.withConfig({displayName:"styled__StyledCatalogInfoData",componentId:"sc-1bsovhu-8"})(["color:",";font-weight:500;"],(e=>e.theme.colors.colorBlack)),he=function(e){let{selectedApartment:t}=e;return t?(0,r.jsxs)(le,{children:[(0,r.jsx)(se,{src:t.image,alt:"План квартиры"}),(0,r.jsxs)(re,{children:[(0,r.jsxs)(ce,{children:[(0,r.jsx)(pe,{children:"Площадь"}),(0,r.jsxs)(me,{children:[t.size," м²"]})]}),(0,r.jsxs)(ce,{children:[(0,r.jsx)(pe,{children:"Этаж"}),(0,r.jsx)(me,{children:t.floor})]}),(0,r.jsxs)(ce,{children:[(0,r.jsx)(pe,{children:"Цена"}),(0,r.jsxs)(me,{children:[1e6*t.price," ₽"]})]}),(0,r.jsxs)(ce,{children:[(0,r.jsx)(pe,{children:"В ипотеку"}),(0,r.jsxs)(me,{children:["от ",(1e3*t.price*12).toFixed(0)," ₽/мес."]})]})]})]}):(0,r.jsx)(ne,{children:(0,r.jsx)(ae,{children:"Выберите понравившийся план квартиры"})})},xe=o.ZP.button.withConfig({displayName:"styled__StyledCatalogButton",componentId:"sc-a1cqfe-0"})(["width:100%;height:40px;border:none;border-radius:25px;background-color:",";color:",";cursor:pointer;box-shadow:0px 2px 4px ",";transition:all 0.3s ease;&:hover{box-shadow:0px 2px 8px ",";}"],(e=>e.isActive?e.theme.colors.colorMainRed:e.theme.colors.colorLightRed),(e=>e.isActive?e.theme.colors.colorWhite:e.theme.colors.colorBlack),(e=>e.theme.colors.boxShadowMain),(e=>e.theme.colors.boxShadowHover)),ge=function(e){let{text:t,onClick:i,isAppartmentSelected:o}=e;return(0,r.jsx)(xe,{isActive:o,onClick:i,children:t})};var ye=i(2030),ue=i(1604);const fe=function(e){let{apartments:t}=e;const i=JSON.parse(t),[o,d]=(0,F.useState)("1"),[l,n]=(0,F.useState)(null),a=null!==l,[s,c]=(0,F.useState)(!1),[p,m]=(0,F.useState)(""),[h,x]=(0,F.useState)(ye.w.PHONEFORM),g=ue.z.string().regex(/^(8|\+7)(\d{10})$/,"Неверный формат номера телефона");return(0,r.jsxs)(te,{children:[(0,r.jsxs)(ie,{children:[(0,r.jsx)(W,{selectedRoomType:o,setSelectedRoomType:d}),(0,r.jsx)(ee,{selectedRoomType:o,apartments:i,onCatalogCardChange:e=>{n(e)},selectedApartmentId:null==l?void 0:l.id}),(0,r.jsx)(oe,{children:(0,r.jsx)(ge,{text:"Выбрать эту квартиру",onClick:()=>{a&&c(!0)},isAppartmentSelected:a})})]}),(0,r.jsx)(he,{selectedApartment:l}),(0,r.jsx)(ye.Z,{isModalOpen:s,onClose:()=>{c(!1)},onFormSubmit:()=>{g.safeParse(p).success?x(ye.w.SUCCESS):x(ye.w.ERROR)},inputHandler:e=>{m(e.target.value)},modalType:h})]})},we=(o.ZP.div.withConfig({displayName:"styled__StyledApartmentCatalogSelector",componentId:"sc-1s2z79k-0"})([""]),o.ZP.section.withConfig({displayName:"styled__StyledApartmentCatalog",componentId:"sc-1s2z79k-1"})(["padding:30px 0;background-color:",";"],(e=>e.theme.colors.colorLightRed))),be=(0,o.ZP)(s.P).withConfig({displayName:"styled__StyledCatalogContainer",componentId:"sc-1s2z79k-2"})(["display:flex;flex-direction:column;gap:20px;"]),Se=function(e){let{apartments:t}=e;return(0,r.jsx)(we,{children:(0,r.jsxs)(be,{children:[(0,r.jsx)(a.ZP,{level:a.Yx.H2,size:a.Jj.XL,weight:a.AD.BOLD,children:"Выберите квартиру"}),(0,r.jsx)(fe,{apartments:t})]})})},ve=o.ZP.a.withConfig({displayName:"styled__StyledApartmentDocumentsCard",componentId:"sc-erqdmd-0"})(["display:flex;flex-direction:column;justify-content:space-between;width:40%;height:200px;padding:30px;background-color:",";color:",";border-radius:25px;cursor:pointer;transition:all 0.3s ease;&:hover{transform:scale(1.01);}@media(max-width:","){width:100%;height:140px;padding:20px;}"],(e=>e.theme.colors.colorMainRed),(e=>e.theme.colors.colorWhite),(e=>e.theme.deviceSizes.mobile)),Ce=o.ZP.img.withConfig({displayName:"styled__StyledApartmentDocumentsCardImage",componentId:"sc-erqdmd-1"})(["width:80px;height:80px;@media(max-width:","){width:50px;height:50px;}@media(max-width:","){width:30px;height:30px;}"],(e=>e.theme.deviceSizes.tablet),(e=>e.theme.deviceSizes.mobile)),je=o.ZP.div.withConfig({displayName:"styled__StyledApartmentDocumentsCardFooter",componentId:"sc-erqdmd-2"})(["display:flex;justify-content:space-between;align-items:flex-end;"]),_e=o.ZP.p.withConfig({displayName:"styled__StyledApartmentDocumentsCardDownloadText",componentId:"sc-erqdmd-3"})(["font-size:16px;font-weight:500;color:",";@media(max-width:","){font-size:14px;}@media(max-width:","){font-size:12px;}"],(e=>e.theme.colors.colorWhite),(e=>e.theme.deviceSizes.mobile),(e=>e.theme.deviceSizes.mobileSmall)),Ie=function(e){let{title:t,downloadLink:i,downloadText:o,imageSrc:d}=e;return(0,r.jsxs)(ve,{href:i,target:"blank",children:[(0,r.jsx)(a.ZP,{level:a.Yx.H2,size:a.Jj.L,weight:a.AD.BOLD,children:t}),(0,r.jsxs)(je,{children:[(0,r.jsx)(_e,{children:o}),(0,r.jsx)(Ce,{src:d,alt:"Кнопка скачать"})]})]})},Re=o.ZP.section.withConfig({displayName:"styled__StyledApartmentDocuments",componentId:"sc-1bwc791-0"})(["display:flex;flex-direction:column;gap:40px;padding:30px 0;"]),ze=o.ZP.div.withConfig({displayName:"styled__StyledApartmentDocumentsHeader",componentId:"sc-1bwc791-1"})(["display:grid;grid-template-columns:3fr 2fr;gap:10px;"]),Ne=o.ZP.div.withConfig({displayName:"styled__StyledApartmentDocumentsCards",componentId:"sc-1bwc791-2"})(["display:flex;justify-content:space-between;@media(max-width:","){flex-direction:column;gap:20px;}"],(e=>e.theme.deviceSizes.mobile)),Pe=function(e){let{documents:t}=e;const i=JSON.parse(t);return(0,r.jsx)(c,{children:(0,r.jsxs)(Re,{children:[(0,r.jsxs)(ze,{children:[(0,r.jsx)(a.ZP,{level:a.Yx.H2,size:a.Jj.XL,weight:a.AD.BOLD,children:"Документы проекта"}),(0,r.jsx)(n.Z,{size:n.t.XS,children:"Все документы находятся в открытом доступе. Здесь вы можете ознакомиться со всеми необходимыми документами по проекту."})]}),(0,r.jsx)(Ne,{children:i.map((e=>(0,r.jsx)(Ie,{title:e.title,downloadLink:e.downloadLink,downloadText:e.downloadText,imageSrc:e.imageSrc},e.documentId)))})]})})},ke=o.ZP.picture.withConfig({displayName:"styled__StyledFullSizePicture",componentId:"sc-1ldtx7v-0"})(["display:block;width:100%;height:85vh;object-fit:cover;@media (max-width:","){height:calc(100vh - 110px);}"],(e=>e.theme.deviceSizes.tablet)),Te=o.ZP.img.withConfig({displayName:"styled__StyledFullSizeImage",componentId:"sc-1ldtx7v-1"})(["object-fit:cover;width:100%;height:100%;"]),Ze=function(e){let{imageSrc:t,imageMobileSrc:i}=e;return(0,r.jsxs)(ke,{children:[(0,r.jsx)("source",{srcSet:i,media:"(max-width: 576px)"}),(0,r.jsx)(Te,{src:t,alt:"Ночная фотография жк"})]})},Ae=o.ZP.div.withConfig({displayName:"styled__StyledApartmentTitleContainer",componentId:"sc-1ix8bl8-0"})(["position:relative;&::before{content:'';width:100%;height:100%;position:absolute;background:linear-gradient( to bottom,rgba(0,0,0,0.1) 60%,rgba(0,0,0,0.7) 100% );}"]),Le=o.ZP.span.withConfig({displayName:"styled__StyledApartmentTitle",componentId:"sc-1ix8bl8-1"})(["position:absolute;bottom:1%;color:white;"]),Oe=function(e){let{bigImage:t,bigMobileImage:i,title:o}=e;return(0,r.jsxs)(Ae,{children:[(0,r.jsx)(Ze,{imageSrc:t,imageMobileSrc:i}),(0,r.jsx)(c,{children:(0,r.jsx)(Le,{children:(0,r.jsx)(a.ZP,{level:a.Yx.H2,size:a.Jj.XXL,weight:a.AD.BOLD,children:"ЖК «"+o+"»"})})})]})};var Me=i(9250),Be=i(9346),De=i(67);const Fe=function(){let{id:e}=(0,Me.UO)();const t=(0,Be.C)((t=>(0,De.tC)(t,e)));if(!t)return(0,r.jsx)(d,{children:(0,r.jsx)(l,{children:"Такого здания не найдено :("})});const i=t.description.split("<br>"),o=JSON.parse(t.features),n=JSON.parse(t.location),a=n.latitude,s=n.longitude,c=JSON.parse(t.rooms);return(0,r.jsxs)(d,{children:[(0,r.jsx)(Oe,{title:t.title,bigImage:t.bigImage,bigMobileImage:t.bigMobileImage}),(0,r.jsx)(y,{apartmentDescription:i,apartmentImage:t.image,apartmentImageMobile:t.imageMobile}),(0,r.jsx)(R,{apartmentFeatures:o}),(0,r.jsx)(k,{latitude:a,longitude:s}),(0,r.jsx)(G,{rooms:c}),(0,r.jsx)(Se,{apartments:t.apartments}),(0,r.jsx)(Pe,{documents:t.documents})]})}}}]);
//# sourceMappingURL=bundle.7b3ac98f1a06a74151bf.js.map