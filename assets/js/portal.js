
    (function(){
      const pub=document.getElementById('public-view'),man=document.getElementById('management-view'),switcher=document.getElementById('view-switch');
      function activate(view){
        const isMan=view==='manajemen';
        pub.hidden=isMan;man.hidden=!isMan;
        switcher.textContent=isMan?'← Portal Utama':'Manajemen →';
        document.title=(isMan?'Manajemen Madrasah':'Portal Digital')+' — MTsN 4 Jombang';
        history.replaceState(null,'',isMan?'#manajemen':'#utama');
        document.querySelector('main h1:not([hidden])');
        window.scrollTo({top:0,behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});
      }
      document.getElementById('public-btn').addEventListener('click',()=>activate('utama'));
      document.getElementById('management-btn').addEventListener('click',()=>activate('manajemen'));
      switcher.addEventListener('click',()=>activate(man.hidden?'manajemen':'utama'));
      window.addEventListener('hashchange',()=>{const requested=location.hash==='#manajemen'?'manajemen':'utama';pub.hidden=requested==='manajemen';man.hidden=requested!=='manajemen';switcher.textContent=requested==='manajemen'?'← Portal Utama':'Manajemen →'});
      if(location.hash==='#manajemen')activate('manajemen');
    })();
  