// 1. Definimos las fechas base fijas de tu catálogo original
const catalogoSanto = {
	// ********************************************************** Fechas Especiales *********************************************************
	// ***************************************** Este es el Miercoles de Ceniza y será segun el año *****************************************
	"5/3": [{ nombre: "Miercoles de Ceniza", enlace: "/tiempo/cuaresma/ceniza/miercoles"}],
	// ***********************************************************************************************************************************************

	// *********************************************************** ENERO ***********************************************************
	"1/1": [{ nombre: "Santa María Madre De Dios", enlace: "/tiempo/santos/enero/01-SANTA_MARÍA_MADRE_DE_DIOS" }],
	"2/1": [{ nombre: "Santos Basilio Magno y Gregorio Nacianzo", enlace: "/tiempo/santos/enero/02-SANTOS_BASILIO_MAGNO_Y_GREGORIO_NACIANZO" }],
	"6/1": [{ nombre: "LA EPIFANÍA DEL SEÑOR (SOLEMNIDAD)", enlace: "/tiempo/adviento/navidad/dias/se6 - La Epifania del Señor" }],
	"17/1": [{ nombre: "San Antonio, Abad", enlace: "/tiempo/santos/enero/17-SAN ANTONIO, ABAD" }],
	"21/1": [{ nombre: "Santa Inés, Virgen Y Mártir", enlace: "/tiempo/santos/enero/21-SANTA INÉS, virgen y mártir" }],
	"24/1": [{ nombre: "Santa María, Reina De La Paz - San Francisco De Sales", enlace: "/tiempo/santos/enero/24-SANTA MARÍA, REINA DE LA PAZ-SAN FRANCISCO DE SALES-SAN FRANCISCO DE SALES" }],
	"25/1": [{ nombre: "La Conversión De San Pablo", enlace: "/tiempo/santos/enero/25-LA CONVERSIÓN DE SAN PABLO" }],
	"26/1": [{ nombre: "Santos Timoteo Y Tito, Obispos", enlace: "/tiempo/santos/enero/26-SANTOS TIMOTEO Y TITO, obispos" }],
	"28/1": [{ nombre: "Santo Tomás De Aquino", enlace: "/tiempo/santos/enero/28-SANTO TOMÁS DE AQUINO" }],
	"31/1": [{ nombre: "San Juan Bosco", enlace: "/tiempo/santos/enero/31-SAN JUAN BOSCO" }],
	
	// *********************************************************** FEBRERO ***********************************************************
	"2/2": [{ nombre: "La Presentación Del Señor", enlace: "/tiempo/santos/febrero/02-LA PRESENTACIÓN DEL SEÑOR" }],
	"4/2": [{ nombre: "Santa Águeda, Virgen Y Mártir", enlace: "/tiempo/santos/febrero/04-SANTA ÁGueda, virgen y mártir" }],
	"5/2": [{ nombre: "San Felipe De Jesús", enlace: "/tiempo/santos/febrero/05-SAN FELIPE DE JESÚS" }],
	"6/2": [{ nombre: "Santos Pablo Miki Y Compañeros", enlace: "/tiempo/santos/febrero/06-SANTOS PABLO MIKI Y COMPAÑEROS" }],
	"10/2": [{ nombre: "Santa Escolástica, Virgen", enlace: "/tiempo/santos/febrero/10-SANTA ESCOLÁSTICA, virgen" }],
	"14/2": [{ nombre: "SANTOS CIRILO, monje y METODIO, obispo", enlace: "/tiempo/santos/febrero/14-SANTOS CIRILO, monje y METODIO, obispo" }],
	"22/2": [{ nombre: "La Cátedra De San Pedro, Apóstol", enlace: "/tiempo/santos/febrero/22-LA CÁTEDRA DE SAN PEDRO, APÓSTOL" }],
	"23/2": [{ nombre: "San Policarpo, Obispo Y Mártir", enlace: "/tiempo/santos/febrero/23-SAN POLICARPO, obispo y mártir" }],

	// *********************************************************** MARZO ***********************************************************
	"19/3": [{ nombre: "San Jose, Esposo De La Bienaventurada Virgen María", enlace: "/tiempo/santos/marzo/19-SAN JOSE, ESPOSO DE LA BIENAVENTURADA VIRGEN MARÍA" }],
	"25/3": [{ nombre: "La Anunciación Del Señor", enlace: "/tiempo/santos/marzo/25-LA ANUNCIACIÓN DEL SEÑOR" }],
	
	// *********************************************************** ABRIL ***********************************************************
	"7/4": [{ nombre: "San Juan Bautista De La Salle", enlace: "/tiempo/santos/abril/07-SAN JUAN BAUTISTA DE LA SALLE" }],
	"11/4": [{ nombre: "San Estanislao, Obispo Y Mártir", enlace: "/tiempo/santos/abril/11-SAN ESTANISLAO, Obispo y mártir" }],
	"25/4": [
		{ nombre: "Nuestra Señora Del Valle", enlace: "/tiempo/santos/abril/25-NUESTRA SEÑORA DEL VALLE" },
		{ nombre: "San Marcos, Evangelista", enlace: "/tiempo/sril/25-SAN MARCOS, Evangelista" }
	],
	"27/4": [{ nombre: "Santo Toribio De Mogrovejo, obispo", enlace: "/tiempo/santos/abril/27-SANTO TORIBIO DE MOGROVEJO, obispo" }],
	"29/4": [{ nombre: "Santa Catalina De Siena, virgen y doctora de la Iglesia", enlace: "/tiempo/santos/abril/29-SANTA CATALINA DE SIENA, virgen y doctora de la Iglesia" }],
	
	// *********************************************************** MAYO ***********************************************************
	"1/5": [{ nombre: "San José Obrero", enlace: "/tiempo/santos/mayo/01-SAN JOSÉ OBRERO" }],
	"2/5": [{ nombre: "San Atanasio, obispo y doctor de la Iglesia", enlace: "/tiempo/santos/mayo/02-SAN ATANASIO, obispo y doctor de la Iglesia" }],
	"3/5": [
		{ nombre: "EXALTACIÓN DE LA SANTA CRUZ", enlace: "/tiempo/santos/mayo/03-EXALTACIÓN DE LA SANTA CRUZ" },
		{ nombre: "SANTOS FELIPE Y SANTIAGO, apóstoles", enlace: "/tiempo/santos/mayo/03-SANTOS FELIPE Y SANTIAGO, apóstoles" }
	],
	"8/5": [{ nombre: "Nuestra Señora de Luján, Patrona de la República Argentina", enlace: "/tiempo/santos/mayo/08-NUESTRA SEÑORA DE LUJÁN, Patrona de la República Argentina" }],
	"14/5": [{ nombre: "San Matías, apóstol", enlace: "/tiempo/santos/mayo/14-SAN MATÍAS, apóstol" }],
	"20/5": [{ nombre: "MARÍA, MADRE DE LA IGNACIA", enlace: "/tiempo/santos/mayo/20-MARÍA, MADRE DE LA IGNACIA" }],
	"26/5": [
		{ nombre: "San Felipe Neri, presbítero", enlace: "/tiempo/santos/mayo/26-SAN FELIPE NERI, presbítero" },
		{ nombre: "Santa Mariana de Jesús Paredes, virgen", enlace: "/tiempo/santos/mayo/26-SANTA MARIANA DE JESÚS PAREDES, virgen" }
	],
	
	// *********************************************************** JUNIO ***********************************************************
	"1/6": [
		{ nombre: "MARÍA, MADRE DE LA IGLESIA", enlace: "/tiempo/santos/junio/01-MARÍA, MADRE DE LA IGLESIA" },
		{ nombre: "San Justino, mártir", enlace: "/tiempo/santos/junio/01-SAN JUSTINO, mártir" }
	],
	"3/6": [{ nombre: "SANTOS CARLOS LWANGA y COMPAÑEROS, mártires", enlace: "/tiempo/santos/junio/03-SANTOS CARLOS LWANGA y COMPAÑEROS, mártires" }],
	"5/6": [{ nombre: "San Bonifacio, obispo y mártir", enlace: "/tiempo/santos/junio/05-SAN BONIFACIO, obispo y mártir" }],
	"11/6": [{ nombre: "San Bernabé, apóstol", enlace: "/tiempo/santos/junio/11-SAN BERNABÉ, apóstol" }],
	"13/6": [{ nombre: "San Antonio de Padua, presbítero y doctor de la Iglesia", enlace: "/tiempo/santos/junio/13-SAN ANTONIO DE PADUA, presbítero y doctor de la Iglesia" }],
	"21/6": [{ nombre: "San Luis Gonzaga, religioso", enlace: "/tiempo/santos/junio/21-SAN LUIS GONZAGA, religioso" }],
	"24/6": [{ nombre: "EL NACIMIENTO DE SAN JUAN BAUTISTA", enlace: "/tiempo/santos/junio/24-EL NACIMIENTO DE SAN JUAN BAUTISTA" }],
	"28/6": [{ nombre: "San Ireneo, obispo y mártir", enlace: "/tiempo/santos/junio/28-SAN IRENEO, obispo y mártir" }],
	"29/6": [{ nombre: "SANTOS PEDRO Y PABLO, APÓSTOLES", enlace: "/tiempo/santos/junio/29-SANTOS PEDRO Y PABLO, APÓSTOLES" }],
	
	// *********************************************************** JULIO ***********************************************************
	"3/7": [{ nombre: "Santo Tomás, apóstol", enlace: "/tiempo/santos/julio/03-SANTO TOMÁS, apóstol" }],
	"9/7": [
		{ nombre: "Nuestra Señora de Itatí", enlace: "/tiempo/santos/julio/09-NUESTRA SEÑORA DE ITATÍ" },
		{ nombre: "Nuestra Señora del Rosario de Chiquinquirá, patrona de Colombia", enlace: "/tiempo/santos/julio/09-NUESTRA SEÑORA del ROSARIO de CHIQUINQUIRÁ, patrona de Colombia" }
	],
	"11/7": [{ nombre: "San Benito Abad, patrono de Europa", enlace: "/tiempo/santos/julio/11-SAN BENITO ABAD, patrono de Europa" }],
	"15/7": [{ nombre: "San Buenaventura, obispo y doctor de la Iglesia", enlace: "/tiempo/santos/julio/15-SAN BUENAVENTURA, obispo y doctor de la Iglesia" }],
	"16/7": [{ nombre: "Nuestra Señora del Carmen", enlace: "/tiempo/santos/julio/16-NUESTRA SEÑORA DEL CARMEN" }],
	"22/7": [{ nombre: "SANTA MARÍA MAGDALENA", enlace: "/tiempo/santos/julio/22-SANTA MARÍA MAGDALENA" }],
	"24/7": [{ nombre: "San Francisco Solano, presbítero", enlace: "/tiempo/santos/julio/24-SAN FRANCISCO SOLANO, presbítero" }],
	"25/7": [{ nombre: "Santiago, apóstol", enlace: "/tiempo/santos/julio/25-SANTIAGO, apóstol" }],
	"26/7": [{ nombre: "SANTOS JOAQUÍN Y ANA, padres de la Santísima Virgen María", enlace: "/tiempo/santos/julio/26-SANTOS JOAQUÍN Y ANA, padres de la Santísima Virgen María" }],
	"29/7": [{ nombre: "Santa Marta", enlace: "/tiempo/santos/julio/29-SANTA MARTA" }],
	"31/7": [{ nombre: "San Ignacio de Loyola, presbítero", enlace: "/tiempo/santos/julio/31-SAN IGNACIO DE LOYOLA, presbítero" }],

	// *********************************************************** AGOSTO ***********************************************************
	"1/8": [{ nombre: "San Alfonso María de Ligorio", enlace: "/tiempo/santos/agosto/01-SAN ALFONSO MARÍA DE LIGORIO" }],
	"4/8": [{ nombre: "San Juan María Vianney, presbítero", enlace: "/tiempo/santos/agosto/04-SAN JUAN MARÍA VIANNEY, presbítero" }],
	"6/8": [{ nombre: "LA TRANSFIGURACIÓN DEL SEÑOR", enlace: "/tiempo/santos/agosto/06-LA TRANSFIGURACIÓN DEL SEÑOR" }],
	"8/8": [{ nombre: "Santo Domingo, presbítero", enlace: "/tiempo/santos/agosto/08-SANTO DOMINGO, presbítero" }],
	"10/8": [{ nombre: "San Lorenzo, diácono y mártir", enlace: "/tiempo/santos/agosto/10-SAN LORENZO, diácono y mártir" }],
	"11/8": [{ nombre: "Santa Clara, vírgen", enlace: "/tiempo/santos/agosto/11-SANTA CLARA, vírgen" }],
	"14/8": [{ nombre: "San Maximiliano María Kolbe, presbítero y mártir", enlace: "/tiempo/santos/agosto/14-SAN MAXIMILIANO MARÍA KOLBE, presbítero y mártir" }],
	"15/8": [{ nombre: "LA ASUNCIÓN DE LA SANTÍSIMA VIRGEN MARÍA", enlace: "/tiempo/santos/agosto/15-LA ASUNCIÓN DE LA SANTÍSIMA VIRGEN MARÍA" }],
	"20/8": [{ nombre: "San Bernardo, abad y doctor de la Iglesia", enlace: "/tiempo/santos/agosto/20-SAN BERNARDO, abad y doctor de la Iglesia" }],
	"21/8": [{ nombre: "San Pio X, papa", enlace: "/tiempo/santos/agosto/21-SAN PIO X, papa" }],
	"22/8": [{ nombre: "LA SANTÍSIMA VIRGEN MARÍA, REINA", enlace: "/tiempo/santos/agosto/22-LA SANTÍSIMA VIRGEN MARÍA, REINA" }],
	"23/8": [{ nombre: "SANTA ROSA DE LIMA, virgen, Patrona de América Latina", enlace: "/tiempo/santos/agosto/23-SANTA ROSA DE LIMA, virgen, Patrona de América Latina" }],
	"24/8": [{ nombre: "San Bartolomé, apóstol", enlace: "/tiempo/santos/agosto/24-SAN BARTOLOMÉ, apóstol" }],
	"27/8": [{ nombre: "Santa Mónica", enlace: "/tiempo/santos/agosto/27-SANTA MÓNICA" }],
	"28/8": [{ nombre: "San Agustín, obispo y doctor de la Iglesia", enlace: "/tiempo/santos/agosto/28-SAN AGUSTÍN, obispo y doctor de la iglesia" }],
	"29/8": [{ nombre: "EL MARTIRIO DE SAN JUAN BAUTISTA", enlace: "/tiempo/santos/agosto/29-EL MARTIRIO DE SAN JUAN BAUTISTA" }],
	"30/8": [{ nombre: "SANTA ROSA DE LIMA, virgen, Patrona de América Latina", enlace: "/tiempo/santos/agosto/30-SANTA ROSA DE LIMA, virgen, Patrona de América Latina" }],

	// *********************************************************** SEPTIEMBRE ***********************************************************
	"3/9": [{ nombre: "San Gregorio Magno, papa y doctor de la Iglesia", enlace: "/tiempo/santos/septiembre/03-SAN GREGORIO MAGNO, papa y doctor de la Iglesia" }],
	"8/9": [{ nombre: "LA NATIVIDAD DE LA SANTÍSIMA VIRGEN MARÍA", enlace: "/tiempo/santos/septiembre/08-LA NATIVIDAD DE LA SANTÍSIMA VIRGEN MARÍA" }],
	"13/9": [{ nombre: "San Juan Crisóstomo, obispo y doctor de la Iglesia", enlace: "/tiempo/santos/septiembre/13-SAN JUAN CRISÓSTOMO, obispo y doctor de la Iglesia" }],
	"14/9": [{ nombre: "EXALTACIÓN DE LA SANTA CRUZ", enlace: "/tiempo/santos/septiembre/14-EXALTACIÓN DE LA SANTA CRUZ" }],
	"15/9": [{ nombre: "Nuestra Señora de los Dolores", enlace: "/tiempo/santos/septiembre/15-NUESTRA SEÑORA DE LOS DOLORES" }],
	"16/9": [{ nombre: "SANTOS CORNELIO, Papa, y CIPRIANO, obispo, mártires", enlace: "/tiempo/santos/septiembre/16-SANTOS CORNELIO, Papa, y CIPRIANO, obispo, mártires" }],
	"20/9": [{ nombre: "SANTOS ANDRÉS KIM TAEGON, presbítero, PABLO CHONG HASANG y compañeros mártires", enlace: "/tiempo/santos/septiembre/20-SANTOS ANDRÉS KIM TAEGON, presbítero, PABLO CHONG HASANG y compañeros mártires" }],
	"21/9": [{ nombre: "San Mateo, apóstol y evangelista", enlace: "/tiempo/santos/septiembre/21-SAN MATEO, apóstol y evangelista" }],
	"23/9": [{ nombre: "San Pío de Pietrelcina, presbítero", enlace: "/tiempo/santos/septiembre/23-SAN PÍO DE PIETRELCINA, presbítero" }],
	"27/9": [{ nombre: "San Vicente de Paúl, presbítero", enlace: "/tiempo/santos/septiembre/27-SAN VICENTE DE PAÚL, presbítero" }],
	"29/9": [{ nombre: "SANTOS ARCÁNGELES MIGUEL GABRIEL Y RAFAEL", enlace: "/tiempo/santos/septiembre/29-SANTOS ARCÁNGELES MIGUEL GABRIEL Y RAFAEL" }],
	"30/9": [{ nombre: "San Jerónimo, presbítero y doctor de la iglesia", enlace: "/tiempo/santos/septiembre/30-SAN JERÓNIMO, presbítero y doctor de la iglesia" }],

	// *********************************************************** OCTUBRE ***********************************************************
	"1/10": [{ nombre: "Santa Teresa del Niño Jesús", enlace: "/tiempo/santos/octubre/01-SANTA TERESA DEL NIÑO JESÚS" }],
	"2/10": [{ nombre: "LOS SANTOS ÁNGELES CUSTODIOS", enlace: "/tiempo/santos/octubre/02-LOS SANTOS ÁNGELES CUSTODIOS" }],
	"4/10": [{ nombre: "San Francisco de Asís", enlace: "/tiempo/santos/octubre/04-SAN FRANCISCO DE ASÍS" }],
	"7/10": [{ nombre: "Nuestra Señora del Rosario", enlace: "/tiempo/santos/octubre/07-NUESTRA SEÑORA DEL ROSARIO" }],
	"12/10": [{ nombre: "Nuestra Señora del Pilar", enlace: "/tiempo/santos/octubre/12-NUESTRA SEÑORA DEL PILAR" }],
	"15/10": [{ nombre: "Santa Teresa de Jesús, virgen y doctora de la Iglesia", enlace: "/tiempo/sclerc/octubre/15-SANTA TERESA DE JESÚS, virgen y doctora de la Iglesia" }],
	"17/10": [{ nombre: "San Ignacio de Antioquía, obispo y mártir", enlace: "/tiempo/santos/octubre/17-SAN IGNACIO DE ANTIOQUÍA, obispo y mártir" }],
	"18/10": [{ nombre: "San Lucas, evangelista", enlace: "/tiempo/santos/octubre/18-SAN LUCAS, evangelista" }],
	"28/10": [{ nombre: "SANTOS SIMÓN Y JUDAS, apóstoles", enlace: "/tiempo/santos/octubre/28-SANTOS SIMÓN Y JUDAS, apóstoles" }],

	// *********************************************************** NOVIEMBRE ***********************************************************
	"1/11": [{ nombre: "TODOS LOS SANTOS", enlace: "/tiempo/santos/noviembre/01-TODOS LOS SANTOS" }],
	"2/11": [{ nombre: "TODOS LOS FIELES DIFUNTOS", enlace: "/tiempo/santos/noviembre/02-TODOS LOS FIELES DIFUNTOS" }],
	"3/11": [{ nombre: "San Martin de Porres, religioso", enlace: "/tiempo/santos/noviembre/03-SAN MARTIN DE PORRES, religioso" }],
	"4/11": [{ nombre: "San Carlos Borromeo, obispo", enlace: "/tiempo/santos/noviembre/04-SAN CARLOS BORROMEO, obispo" }],
	"7/11": [{ nombre: "MARÍA, MEDIANERA DE TODAS LAS GRACIAS", enlace: "/tiempo/santos/noviembre/07-MARÍA, MEDIANERA DE TODAS LAS GRACIAS" }],
	"9/11": [{ nombre: "LA DEDICACIÓN DE LA BASÍLICA DE SAN JUAN DE LETRÁN", enlace: "/tiempo/santos/noviembre/09-LA DEDICACIÓN DE LA BASÍLICA DE SAN JUAN DE LETRÁN" }],
	"10/11": [{ nombre: "San León Magno, papa y doctor de la Iglesia", enlace: "/tiempo/santos/noviembre/10-SAN LEÓN MAGNO, papa y doctor de la Iglesia" }],
	"11/11": [{ nombre: "San Martín de Tours, obispo", enlace: "/tiempo/santos/noviembre/11-SAN MARTÍN DE TOURS, obispo" }],
	"12/11": [{ nombre: "San Josafat, obispo y mártir", enlace: "/tiempo/santos/noviembre/12-SAN JOSAFAT, obispo y mártir" }],
	"19/11": [
		{ nombre: "Santa Isabel de Hungría", enlace: "/tiempo/santos/noviembre/19-SANTA ISABEL DE HUNGRÍA" },
		{ nombre: "SANTA MARÍA VIRGEN, MADRE DE LA DIVINA PROVIDENCIA", enlace: "/tiempo/santos/noviembre/19-SANTA MARÍA VIRGEN, MADRE DE LA DIVINA PROVIDENCIA" }
	],
	"21/11": [{ nombre: "LA PRESENTACIÓN DE LA SANTÍSIMA VIRGEN MARÍA", enlace: "/tiempo/santos/noviembre/21-LA PRESENTACIÓN DE LA SANTÍSIMA VIRGEN MARÍA" }],
	"22/11": [{ nombre: "Santa Cecilia, virgen y mártir", enlace: "/tiempo/santos/noviembre/22-SANTA CECILIA, virgen y mártir" }],
	"24/11": [{ nombre: "SANTOS ANDRÉS DUNG-LAC, presbítero, y compañeros, mártires", enlace: "/tiempo/santos/noviembre/24-SANTOS ANDRÉS DUNG-LAC, presbítero, y compañeros, mártires" }],

	// *********************************************************** DICIEMBRE ***********************************************************
	"7/12": [{ nombre: "San Ambrosio", enlace: "/tiempo/santos/diciembre/07-SAN AMBROSIO" }],
	"8/12": [{ nombre: "LA INMACULADA CONCEPCIÓN DE LA SANTÍSIMA VIRGEN MARIA", enlace: "/tiempo/santos/diciembre/08-LA INMACULADA CONCEPCIÓN DE LA SANTÍSIMA VIRGEN MARIA" }],
	"12/12": [{ nombre: "Nuestra Señora de Guadalupe", enlace: "/tiempo/santos/diciembre/12-NUESTRA SEÑORA DE GUADALUPE" }],
	"13/12": [{ nombre: "Santa Lucía", enlace: "/tiempo/siciembre/13-SANTA LUCÍA" }],
	"14/12": [{ nombre: "San Juan de la Cruz", enlace: "/tiempo/santos/diciembre/14-SAN JUAN DE LA CRUZ" }],
	"25/12": [{ nombre: "Solemnidad De La Natividad Del Señor", enlace: "/tiempo/santos/diciembre/25-SOLEMNIDAD DE LA NATIVIDAD DEL SEÑOR" }],
	"26/12": [{ nombre: "San Esteban, Protomártir (Fiesta)", enlace: "/tiempo/santos/diciembre/26-SAN ESTEBAN, protomártir (FIESTA)" }],
	"27/12": [{ nombre: "San Juan, Apóstol Y Evangelista.(Fiesta)", enlace: "/tiempo/santos/diciembre/27-SAN JUAN, apóstol y evangelista.(FIESTA)" }],
	"28/12": [{ nombre: "Los Santos Inocentes, Mártires. (Fiesta)", enlace: "/tiempo/santos/diciembre/28-LOS SANTOS INOCENTES, mártires. (FIESTA)" }]
};


// 2. FUNCIÓN PARA INYECTAR LAS FECHAS MÓVILES DINÁMICAMENTE
function inicializarFechasMoviles(year, fechaPentecostesStr, fechaMiercolesCenizaStr) {
    // Ajustar Miércoles de Ceniza si varía del valor base por defecto del objeto
    if (fechaMiercolesCenizaStr) {
        catalogoSanto[fechaMiercolesCenizaStr] = [{ nombre: "Miercoles de Ceniza", enlace: "/tiempo/cuaresma/ceniza/miercoles"}];
    }

    // Parsear Pentecostés ("DD/MM")
    const [day, month] = fechaPentecostesStr.split('/').map(Number);
    const pentecostes = new Date(year, month - 1, day);
    
    // Función de desplazamiento de días
    const obtenerClaveFecha = (dias) => {
        const copia = new Date(pentecostes);
        copia.setDate(copia.getDate() + dias);
        return `${copia.getDate()}/${copia.getMonth() + 1}`;
    };

    // Calcular las posiciones dinámicas
    const t_trinidad = obtenerClaveFecha(7);    // +7 días (Siguiente Domingo)
    const t_corpus = obtenerClaveFecha(11);    // +11 días (Segundo Jueves)
    const t_corazon = obtenerClaveFecha(19);   // +19 días (Tercer Viernes)
    const t_inmaculado = obtenerClaveFecha(20); // +20 días (Sábado siguiente)

    // Inyectar o sobreescribir los nodos móviles correspondientes al año
    catalogoSanto[t_trinidad] = [{ nombre: "La Santísima Trinidad", enlace: "/tiempo/santos/junio/07-LA SANTÍSIMA TRINIDAD" }];
    catalogoSanto[t_corpus] = [{ nombre: "El Santísimo Cuerpo Y Sangre De Cristo (Corpus Christi)", enlace: "/tiempo/santos/junio/14-EL SANTÍSIMO CUERPO Y SANGRE DE CRISTO" }];
    catalogoSanto[t_corazon] = [{ nombre: "El Sagrado Corazón De Jesús", enlace: "/tiempo/santos/junio/19-EL SAGRADO CORAZÓN DE JESÚS" }];
    catalogoSanto[t_inmaculado] = [{ nombre: "El Inmaculado Corazón De La Santísima Virgen María", enlace: "/tiempo/santos/junio/20-EL INMACULADO CORAZÓN DE LA SANTÍSIMA VIRGEN MARÍA" }];
}

// 3. EJECUCIÓN (Ejemplo de uso para inicializar el objeto global con las fechas de un año específico)
// Al cargar este script, el objeto 'catalogoSanto' ya tendrá añadidas sus claves variables correspondientes.
inicializarFechasMoviles(2026, "31/5", "18/2");