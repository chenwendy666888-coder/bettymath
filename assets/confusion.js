/* bettymath · 「🙋 我没懂」疑问收集器 (reusable)
   用法: 在任意讲义 </body> 前加 <script src="../assets/confusion.js"></script>
   功能: 右下角浮标 → 记下"哪里没懂"(存本浏览器 localStorage, 按页面分开) → 可查看/导出 txt+json/清空。
   目的: 妹妹自查时随手记疑问; 家长回来点导出即可看到她卡在哪。 */
(function(){
  if(window.__gjConfuseLoaded)return; window.__gjConfuseLoaded=true;
  var page=(location.pathname.split('/').pop()||'page').replace(/\.html?$/,'');
  var title=(document.title||page);
  var KEY='gj_confuse_'+page;
  function load(){try{return JSON.parse(localStorage.getItem(KEY)||'[]');}catch(e){return [];}}
  function save(a){try{localStorage.setItem(KEY,JSON.stringify(a));}catch(e){}}
  var notes=load();

  var css=''
   +'.gjc-fab{position:fixed;right:16px;bottom:16px;z-index:9999;background:#4A43C4;color:#fff;border:none;border-radius:24px;padding:11px 16px;font:800 14px/1 -apple-system,"PingFang SC","Microsoft YaHei",sans-serif;box-shadow:0 6px 20px rgba(30,30,60,.25);cursor:pointer}'
   +'.gjc-fab .n{background:#D98A24;border-radius:99px;padding:0 7px;margin-left:6px;font-size:11px}'
   +'.gjc-mask{position:fixed;inset:0;background:rgba(20,20,40,.35);z-index:9999;display:none}'
   +'.gjc-panel{position:fixed;right:16px;bottom:70px;width:min(360px,92vw);max-height:72vh;overflow:auto;background:#fff;border:1px solid #E3E6F0;border-radius:16px;box-shadow:0 12px 40px rgba(30,30,60,.25);z-index:10000;display:none;padding:16px 18px;font-family:-apple-system,"PingFang SC","Microsoft YaHei",sans-serif}'
   +'.gjc-panel h4{margin:0 0 4px;font-size:15px;color:#2E2A6B}'
   +'.gjc-panel .sub{font-size:12px;color:#6A6A82;margin-bottom:10px}'
   +'.gjc-panel textarea{width:100%;border:1.5px solid #E3E6F0;border-radius:10px;padding:9px 11px;font:14px/1.5 inherit;resize:vertical;min-height:64px}'
   +'.gjc-row{display:flex;gap:8px;margin-top:8px;flex-wrap:wrap}'
   +'.gjc-btn{border:none;border-radius:9px;padding:8px 13px;font:800 13px inherit;cursor:pointer;color:#fff;background:#4A43C4}'
   +'.gjc-btn.g{background:#1F8A5B}.gjc-btn.ghost{background:#fff;color:#4A43C4;border:1.5px solid #4A43C4}.gjc-btn.mut{background:#fff;color:#6A6A82;border:1.5px solid #E3E6F0}'
   +'.gjc-list{margin-top:12px;border-top:1px solid #E3E6F0;padding-top:8px}'
   +'.gjc-item{font-size:13px;color:#1B1B2A;padding:8px 0;border-bottom:1px dashed #E3E6F0;display:flex;gap:8px;align-items:flex-start}'
   +'.gjc-item .t{flex:1;white-space:pre-wrap}.gjc-item .tm{font-size:11px;color:#6A6A82}'
   +'.gjc-item .del{border:none;background:none;color:#C0453B;cursor:pointer;font-size:14px}'
   +'.gjc-empty{font-size:12.5px;color:#6A6A82;padding:8px 0}';
  var st=document.createElement('style');st.textContent=css;document.head.appendChild(st);

  var fab=document.createElement('button');fab.className='gjc-fab';
  var mask=document.createElement('div');mask.className='gjc-mask';
  var panel=document.createElement('div');panel.className='gjc-panel';
  document.body.appendChild(fab);document.body.appendChild(mask);document.body.appendChild(panel);

  function fabLabel(){fab.innerHTML='🙋 我没懂'+(notes.length?('<span class="n">'+notes.length+'</span>'):'');}
  function esc(s){return (s+'').replace(/[&<>]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;'}[c];});}
  function renderList(){
    if(!notes.length)return '<div class="gjc-empty">还没有记录。看到不懂的地方，写下来点"保存"，回头一起弄懂。<br>Nothing yet. Jot down anything unclear and hit Save.</div>';
    return notes.map(function(x,i){return '<div class="gjc-item"><div class="t">'+esc(x.text)+'<div class="tm">'+esc(x.time)+'</div></div><button class="del" data-i="'+i+'" title="删除">✕</button></div>';}).join('');
  }
  function renderPanel(){
    panel.innerHTML=''
     +'<h4>🙋 我没懂 · 疑问记录</h4>'
     +'<div class="sub">本页：'+esc(title)+'　·　只存在你自己的浏览器里</div>'
     +'<textarea id="gjcTa" placeholder="写下哪里没懂，例如：为什么 y=x 是一条斜线？slope 到底代表什么？"></textarea>'
     +'<div class="gjc-row"><button class="gjc-btn" id="gjcSave">＋ 保存这条</button><button class="gjc-btn ghost" id="gjcExp">⬇ 导出</button><button class="gjc-btn mut" id="gjcClose">关闭</button></div>'
     +'<div class="gjc-list" id="gjcList">'+renderList()+'</div>';
    panel.querySelector('#gjcSave').onclick=function(){var ta=panel.querySelector('#gjcTa');var v=(ta.value||'').trim();if(!v)return;notes.push({text:v,time:new Date().toLocaleString()});save(notes);ta.value='';fabLabel();panel.querySelector('#gjcList').innerHTML=renderList();bindDel();};
    panel.querySelector('#gjcClose').onclick=hide;
    panel.querySelector('#gjcExp').onclick=exportNotes;
    bindDel();
  }
  function bindDel(){panel.querySelectorAll('.del').forEach(function(b){b.onclick=function(){notes.splice(+b.dataset.i,1);save(notes);fabLabel();panel.querySelector('#gjcList').innerHTML=renderList();bindDel();};});}
  function exportNotes(){
    var txt='【我没懂 · 疑问记录】\n页面: '+title+'\n导出: '+new Date().toLocaleString()+'\n\n'+(notes.length?notes.map(function(x,i){return (i+1)+'. '+x.text+'\n   ('+x.time+')';}).join('\n'):'（空）')+'\n';
    try{var blob=new Blob([txt],{type:'text/plain;charset=utf-8'});var u=URL.createObjectURL(blob);var a=document.createElement('a');a.href=u;a.download='我没懂-'+page+'.txt';a.click();URL.revokeObjectURL(u);}catch(e){}
  }
  function showP(){renderPanel();mask.style.display='block';panel.style.display='block';setTimeout(function(){var ta=panel.querySelector('#gjcTa');if(ta)ta.focus();},50);}
  function hide(){mask.style.display='none';panel.style.display='none';}
  fab.onclick=function(){ (panel.style.display==='block')?hide():showP(); };
  mask.onclick=hide;
  fabLabel();
})();
