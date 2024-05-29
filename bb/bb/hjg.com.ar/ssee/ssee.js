/*   H. J. Gonzalez, http://hjg.com.ar/ssee/  feb 2012 */

var bibliaTits = {
'GN':['Génesis','01_gn',50],
'EX':['Éxodo','02_ex',40],
'LV':['Levítico','03_lv',27],
'NM':['Números','04_nm',36],
'DT':['Deuteronomio','05_dt',34],
'JOS':['Josué','06_jos',24],
'JC':['Jueces','07_jc',21],
'RT':['Rut','08_rt',4],
'1S':['I Samuel','09_1s',31],
'2S':['II Samuel','10_2s',24],
'1R':['I Reyes','11_1r',22],
'2R':['II Reyes','12_2r',25],
'1CRO':['I Crónicas','13_1cro',29],
'2CRO':['II Crónicas','14_2cro',36],
'ESD':['Esdras','15_esd',10],
'NE':['Nehemías','16_ne',13],
'TB':['Tobías','17_tb',14],
'JDT':['Judit','18_jdt',16],
'EST':['Ester','19_est',10],
'1M':['I Macabeos','20_1m',16],
'2M':['II Macabeos','21_2m',15],
'JB':['Job','22_jb',42],
'SAL':['Salmos','23_sal',150],
'PR':['Proverbios','24_pr',31],
'QO':['Eclesiastés','25_qo',12],
'CT':['Cantar de los Cantares','26_ct',8],
'SB':['Sabiduría','27_sb',19],
'SI':['Eclesiástico','28_si',51],
'IS':['Isaías','29_is',66],
'JR':['Jeremías','30_jr',52],
'LM':['Lamentaciones','31_lm',5],
'BA':['Baruc','32_ba',6],
'EZ':['Ezequiel','33_ez',48],
'DN':['Daniel','34_dn',14],
'OS':['Oseas','35_os',14],
'JL':['Joel','36_jl',4],
'AM':['Amós','37_am',9],
'AB':['Abdías','38_ab',1],
'JON':['Jonás','39_jon',4],
'MI':['Miqueas','40_mi',7],
'NA':['Nahún','41_na',3],
'HA':['Habacuc','42_ha',3],
'SO':['Sofonías','43_so',3],
'AG':['Ageo','44_ag',2],
'ZA':['Zacarías','45_za',14],
'ML':['Malaquías','46_ml',3],
'MT':['Mateo','47_mt',28],
'MC':['Marcos','48_mc',16],
'LC':['Lucas','49_lc',24],
'JN':['Juan','50_jn',21],
'HCH':['Hechos','51_hch',28],
'RM':['Romanos','52_rm',16],
'1CO':['I Corintios','53_1co',16],
'2Co':['II Corintios','54_2co',13],
'GA':['Gálatas','55_ga',6],
'EF':['Efesios','56_ef',6],
'FLP':['Filipenses','57_flp',4],
'COL':['Colosenses','58_col',4],
'1TS':['I Tesalonicenses','59_1ts',5],
'2TS':['II Tesalonicenses','60_2ts',3],
'1TM':['I Timoteo','61_1tm',6],
'2TM':['II Timoteo','62_2tm',4],
'TT':['Tito','63_tt',3],
'FLM':['Filemón','64_flm',1],
'HB':['Hebreos','65_hb',13],
'ST':['Santiago','66_st',5],
'1P':['I Pedro','67_1p',5],
'2P':['II Pedro','68_2p',3],
'1JN':['I Juan','69_1jn',5],
'2JN':['II Juan','70_2jn',1],
'3JN':['III Juan','71_3jn',1],
'JUDAS':['Judas','72_judas',1],
'AP':['Apocalipsis','73_ap',22 ]
};

/** traduce titulos libros de formato vocbib a ssee */
var bibliaTitAlt = {
'1COR':'1CO',
'1CRON':'1CRO',
'1JN':'1JN',
'1JUAN':'1JN',
'1MAC':'1M',
'1PAR':'1CRO',
'1PE':'1P',
'1RE':'1R',
'1SA':'1S',
'1TES':'1TS',
'1TIM':'1TM',
'2JUAN':'2JN',
'2MAC':'2M',
'2PAR':'2CRO',
'2PE':'2P',
'2RE':'2R',
'2SA':'2S',
'2TES':'2TS',
'2TIM':'2TM',
'3JUAN':'3JN',
'ABD':'AB',
'ACT':'HCH',
'AG':'AG',
'AMOS':'AM',
'APOC':'AP',
'BAR':'BA',
'CANT':'CT',
'COL':'COL',
'DAN':'DN',
'DEUT':'DT',
'ECL':'QO',
'ECLO':'SI',
'EFE':'EF',
'ESD':'ESD',
'ESTER':'EST',
'EXO':'EX',
'EXODO':'EX',
'EZEQ':'EZ',
'FILEM':'FLM',
'FILIP':'FLP',
'GAL':'GA',
'GEN':'GN',
'HAB':'HA',
'HEB':'HB',
'HECH':'HCH',
'HECHOS':'HCH',
'ICOR':'1CO',
'ICOR':'2CO',
'ICRON':'1CRO',
'IIIJUAN':'3JN',
'IIJN':'2JN',
'IIMAC':'2M',
'IIPAR':'2CRO',
'IIPE':'2P',
'IIRE':'2R',
'IISA':'2S',
'IITES':'2TS',
'IITIM':'2TM',
'IJN':'1JN',
'IJUAN':'1JN',
'IMAC':'1M',
'IPAR':'1CRO',
'IPE':'1P',
'IRE':'1R',
'IS':'IS',
'ISA':'1S',
'ITES':'1TS',
'ITIM':'1TM',
'JDS':'JUDAS',
'JER':'JR',
'JOB':'JB',
'JOEL':'JL',
'JUAN':'JN',
'JUDIT':'JDT',
'JUE':'JC',
'LAM':'LM',
'LEV' :'LV',
'LUC':'LC',
'MAL':'ML',
'MARC':'MC',
'MAT':'MT',
'MIQ':'MI',
'NAH':'NA',
'NEH':'NE',
'NUM':'NM',
'PROV':'PR',
'ROM':'RM',
'RUT':'RT',
'SAB':'SB',
'SANT':'ST',
'SALMO':'SAL',
'SOF':'SO',
'TIT':'TT',
'TITO':'TT',
'TOB':'TB',
'TOBIAS':'TB',
'ZAC':'ZA'
};

/* dado un string que representa un pasaje, devuelve un array 
   res[0] = "ok"/"err" 
   res[1] = errmsg /warning
   res[2] = url relative (eg: "c09_1s.html#12" 
   res[3] = pasaje eprolijado (eg: Genesis 9:1)
*/
function processBibP(p) {
  if(! p) return ["err","No se ha especificado un pasaje","",""];
  p= p.toUpperCase().replace(/[^A-Z0-9]/g,'_').replace(/_+/,'_').replace(/^_/,'');
  var lcv = p.split("_");
  var libro = lcv[0];
  var cap = parseInt(lcv[1],10); 
  var vers = parseInt(lcv[2],10);
  if(isNaN(cap) ||cap <1) cap = 1;
  if(isNaN(vers) ||vers <1) vers = 1;
  var librodata = bibliaTits[libro]; 
  if(! librodata) librodata = bibliaTits[bibliaTitAlt[libro]]; // second try
  if(! librodata)  return ["err","No se encuentra libro '"  + libro +"' en la Biblia","",""]; 
  var msg="";
  if(cap > librodata[2]) {
	msg = "Cap " + cap + " fuera de rango para este libro, usamos el 1";
        cap=1;
        vers=1;
   }
   var sseeurl = librodata[1] + '/c' + ("000" + cap).slice(-3) + ".html#v" + vers;
   return ["ok",msg,sseeurl, librodata[1] + " " + cap + ":" + vers];
}

/* para ser usado directamente en html , eg
  <a href="#" onclick="bibCit(this)">Lc 2:3</a>
*/
function bibCit(el) {
        var p=  el.innerHTML;
        var res = processBibP(p);
	if(res[0] === "err") {	  
	  alert("error: " + p  + "(" + res[1] +")");
	  return false;
        }
	var sseeurl = "http://www.hjg.com.ar/ssee/" + res[2];
        el.href = sseeurl;
        return true;
}
/* idem bibCit , pero con popup */
function bibCitP(el) {
        var p =  el.innerHTML;
        var res = processBibP(p);
	if(res[0] === "err") {	  
	  alert("error: " + p  + "(" + res[1] +")");
	  return false;
        }
  var sseeurl = "http://www.hjg.com.ar/ssee/" + res[2];
  var width  = 780;
  var height = 350;
  var left   = (screen.width  - width)/2;
  var top    = (screen.height - height)/2;
  var params = 'width='+width+', height='+height;
  params += ', top='+top+', left='+left;       
  var newwindow=window.open(sseeurl,'ssee',params);
  if (window.focus) {newwindow.focus()}
  return false;
}

/* expects a pseudo query string   sseeloc.html?Lc_1_23  */
function processQs() {
  var p = window.location.href.split("?")[1]
  if(! p) {
  	alert("no se ha especificado un pasaje biblico");
  	return false;
  }
  var res = processBibP(p);
  if(res[0] === "err")	  
	return alert("error: " + res[1] );
  var sseeurl = "http://www.hjg.com.ar/ssee/" + res[2];
  window.location.href = sseeurl;
}

/***************************************************/
