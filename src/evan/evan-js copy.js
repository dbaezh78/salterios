const year = new Date().getFullYear(); // Obtiene el año actual
// const year = 2025; // Si prefieres un año fijo

// Lista de audios con su información
const audios = [
    // DIA DE LOS SANTOS
    { nombre: "Santa María, Madre de Dios", 							archivo: "/ev/dias/01enero.mp3",		fecha: `${year}-01-01` }, // 1ro de Enero, Santa Maria Madre de Dios
    { nombre: "2 de Enero", 											archivo: "/ev/dias/02enero.mp3",		fecha: `${year}-01-02` }, // 2 de Enero Santisimo Nombre de nuestro Señor Jesucristo
    { nombre: "3 de Enero", 											archivo: "/ev/dias/03enero.mp3",		fecha: `${year}-01-03` }, // 3 de Enero Santisimo Nombre de nuestro Señor Jesucristo
    { nombre: "La Epifanía del Señor", 									archivo: "/ev/dias/06enero.mp3",		fecha: `${year}-01-06` }, // 6 de Enero, Epifanía del Señor
/*	
    { nombre: "Día de la Altagracia", 									archivo: "/ev/dias/21enero.mp3",		fecha: `${year}-01-21` }, // 21 de Enero, Día de la Altagracia
    { nombre: "La Conversión de San Pablo, apóstol",					archivo: "/ev/dias/26enero.mp3",		fecha: `${year}-01-25` }, // 25 La Conversión de San Pablo, apóstol
	*/

/*	Enero		* /	{ nombre: "Navidad, Semana I Jueves",				archivo: "/ev/tn/1/jueves.mp3",			fecha: `${year}-01-1` },	*/
/*	Enero		* /	{ nombre: "Navidad, Semana I Viernes",				archivo: "/ev/tn/1/viernes.mp3",		fecha: `${year}-01-2` },	*/
/*	Enero		* /	{ nombre: "Navidad, Semana I Sabado",				archivo: "/ev/tn/1/sabado.mp3",			fecha: `${year}-01-3` },	*/
/*	Enero		*/	{ nombre: "Navidad, Semana II Domingo",				archivo: "/ev/tn/2/domingo.mp3",		fecha: `${year}-01-4` },
/*	Enero		*/	{ nombre: "Navidad, Semana II Lunes",				archivo: "/ev/tn/2/lunes.mp3",			fecha: `${year}-01-5` },
/*	Enero		* /	{ nombre: "Epifania, Semana II° Martes",			archivo: "/ev/te/2/martes.mp3",			fecha: `${year}-01-6` },	*/
/*	Enero		*/	{ nombre: "Epifania, Semana II° Miercoles",			archivo: "/ev/te/2/miercoles.mp3",		fecha: `${year}-01-7` },
/*	Enero		*/	{ nombre: "Epifania, Semana II° Jueves",			archivo: "/ev/te/2/jueves.mp3",			fecha: `${year}-01-8` },
/*	Enero		*/	{ nombre: "Epifania, Semana II° Viernes",			archivo: "/ev/te/2/viernes.mp3",		fecha: `${year}-01-9` },
/*	Enero		*/	{ nombre: "Epifania, Semana II° Sabado",			archivo: "/ev/te/2/sabado.mp3",			fecha: `${year}-01-10` },
/*		*/			
/*	Enero		*/	{ nombre: "Ordinario, Semana I, Domingo",			archivo: "/ev/to/1/domingo.mp3",		fecha: `${year}-01-12` },
/*	Enero		*/	{ nombre: "Ordinario, Semana I, Lunes",			    archivo: "/ev/to/1/lunes.mp3",			fecha: `${year}-01-13` },
/*	Enero		*/	{ nombre: "Ordinario, Semana I, Martes",			archivo: "/ev/to/1/martes.mp3",			fecha: `${year}-01-14` },
/*	Enero		*/	{ nombre: "Ordinario, Semana I, Miercoles",	    	archivo: "/ev/to/1/miercoles.mp3",		fecha: `${year}-01-15` },
/*	Enero		*/	{ nombre: "Ordinario, Semana I, Jueves",			archivo: "/ev/to/1/jueves.mp3",			fecha: `${year}-01-16` },
/*	Enero		*/	{ nombre: "Ordinario, Semana I, Viernes", 			archivo: "/ev/to/1/viernes.mp3",		fecha: `${year}-01-17` },
/*	Enero		*/	{ nombre: "Ordinario, Semana I, Sabado", 			archivo: "/ev/to/1/sabado.mp3",			fecha: `${year}-01-18` },
		
/*	Enero		*/	{ nombre: "Ordinario, Semana II Domingo", 			archivo: "/ev/to/2/domingo.mp3",		fecha: `${year}-01-19` },
/*	Enero		*/	{ nombre: "Ordinario, Semana II Lunes", 			archivo: "/ev/to/2/lunes.mp3",			fecha: `${year}-01-20` },
/*	Enero		*/	{ nombre: "Ordinario, Semana II Martes", 			archivo: "/ev/to/2/martes.mp3",			fecha: `${year}-01-21` },
/*	Enero		*/	{ nombre: "Ordinario, Semana II Miercoles", 		archivo: "/ev/to/2/miercoles.mp3",		fecha: `${year}-01-22` },
/*	Enero		*/	{ nombre: "Ordinario, Semana II Jueves", 			archivo: "/ev/to/2/jueves.mp3",			fecha: `${year}-01-23` },
/*	Enero		*/	{ nombre: "Ordinario, Semana II Viernes", 			archivo: "/ev/to/2/viernes.mp3",		fecha: `${year}-01-24` },
/*	Enero		*/	{ nombre: "Ordinario, Semana II Sabado", 			archivo: "/ev/to/2/sabado.mp3",			fecha: `${year}-01-25` },
		
/*	Enero		*/	{ nombre: "Ordinario, Semana III Domingo", 			archivo: "/ev/to/3/domingo.mp3",		fecha: `${year}-01-26` },
/*	Enero		*/	{ nombre: "Ordinario, Semana III Lunes", 			archivo: "/ev/to/3/lunes.mp3",			fecha: `${year}-01-27` },
/*	Enero		*/	{ nombre: "Ordinario, Semana III Martes", 			archivo: "/ev/to/3/martes.mp3",			fecha: `${year}-01-28` },
/*	Enero		*/	{ nombre: "Ordinario, Semana III Miercoles",		archivo: "/ev/to/3/miercoles.mp3",		fecha: `${year}-01-29` },
/*	Enero		*/	{ nombre: "Ordinario, Semana III Jueves",			archivo: "/ev/to/3/jueves.mp3",			fecha: `${year}-01-30` },
/*	Enero		*/	{ nombre: "Ordinario, Semana III Viernes",			archivo: "/ev/to/3/viernes.mp3",		fecha: `${year}-01-31` },
/*	Febrero		*/	{ nombre: "Ordinario, Semana III Sabado",			archivo: "/ev/to/3/sabado.mp3",			fecha: `${year}-02-1` },
		
/*	Febrero		*/	{ nombre: "Ordinario, Semana IV 4 Domingo",			archivo: "/ev/to/4/domingo.mp3",		fecha: `${year}-02-2` },
/*	Febrero		*/	{ nombre: "Ordinario, Semana IV 4 Lunes",			archivo: "/ev/to/4/lunes.mp3",			fecha: `${year}-02-3` },
/*	Febrero		*/	{ nombre: "Ordinario, Semana IV 4 Martes",			archivo: "/ev/to/4/martes.mp3",			fecha: `${year}-02-4` },
/*	Febrero		*/	{ nombre: "Ordinario, Semana IV 4 Miercoles",		archivo: "/ev/to/4/miercoles.mp3",		fecha: `${year}-02-5` },
/*	Febrero		*/	{ nombre: "Ordinario, Semana IV 4 Jueves",			archivo: "/ev/to/4/jueves.mp3",			fecha: `${year}-02-6` },
/*	Febrero		*/	{ nombre: "Ordinario, Semana IV 4 Viernes",			archivo: "/ev/to/4/viernes.mp3",		fecha: `${year}-02-7` },
/*	Febrero		*/	{ nombre: "Ordinario, Semana IV 4 Sabado",			archivo: "/ev/to/4/sabado.mp3",			fecha: `${year}-02-8` },
		
/*	Febrero		*/	{ nombre: "Ordinario, Semana V, Domingo",			archivo: "/ev/to/5/domingo.mp3",		fecha: `${year}-02-9` },
/*	Febrero		*/	{ nombre: "Ordinario, Semana V, Lunes",				archivo: "/ev/to/5/lunes.mp3",			fecha: `${year}-02-10` },
/*	Febrero		*/	{ nombre: "Ordinario, Semana V, Martes",			archivo: "/ev/to/5/martes.mp3",			fecha: `${year}-02-11` },
/*	Febrero		*/	{ nombre: "Ordinario, Semana V, Miercoles",			archivo: "/ev/to/5/miercoles.mp3",		fecha: `${year}-02-12` },
/*	Febrero		*/	{ nombre: "Ordinario, Semana V, Jueves",			archivo: "/ev/to/5/jueves.mp3",			fecha: `${year}-02-13` },
/*	Febrero		*/	{ nombre: "Ordinario, Semana V, Viernes",			archivo: "/ev/to/5/viernes.mp3",		fecha: `${year}-02-14` },
/*	Febrero		*/	{ nombre: "Ordinario, Semana V, Sabado",			archivo: "/ev/to/5/sabado.mp3",			fecha: `${year}-02-15` },
		
/*	Febrero		*/	{ nombre: "Ordinario, Semana VI, Domingo",			archivo: "/ev/to/6/domingo.mp3",		fecha: `${year}-02-16` },
/*	Febrero		*/	{ nombre: "Ordinario, Semana VI, Lunes",			archivo: "/ev/to/6/lunes.mp3",			fecha: `${year}-02-17` },
/*	Febrero		*/	{ nombre: "Ordinario, Semana VI, Martes",			archivo: "/ev/to/6/martes.mp3",			fecha: `${year}-02-18` },
/*	Febrero		*/	{ nombre: "Ordinario, Semana VI, Miercoles",		archivo: "/ev/to/6/miercoles.mp3",		fecha: `${year}-02-19` },
/*	Febrero		*/	{ nombre: "Ordinario, Semana VI, Jueves",			archivo: "/ev/to/6/jueves.mp3",			fecha: `${year}-02-20` },
/*	Febrero		*/	{ nombre: "Ordinario, Semana VI, Viernes",			archivo: "/ev/to/6/viernes.mp3",		fecha: `${year}-02-21` },
/*	Febrero		*/	{ nombre: "Ordinario, Semana VI, Sabado",			archivo: "/ev/to/6/sabado.mp3",			fecha: `${year}-02-22` },
		
/*	Febrero		*/	{ nombre: "Ordinario, Semana VII, Domingo",			archivo: "/ev/to/7/domingo.mp3",		fecha: `${year}-02-23` },
/*	Febrero		*/	{ nombre: "Ordinario, Semana VII, Lunes",			archivo: "/ev/to/7/lunes.mp3",			fecha: `${year}-02-24` },
/*	Febrero		*/	{ nombre: "Ordinario, Semana VII, Martes",			archivo: "/ev/to/7/martes.mp3",			fecha: `${year}-02-25` },
/*	Febrero		*/	{ nombre: "Ordinario, Semana VII, Miercoles",		archivo: "/ev/to/7/miercoles.mp3",		fecha: `${year}-02-26` },
/*	Febrero		*/	{ nombre: "Ordinario, Semana VII, Jueves",			archivo: "/ev/to/7/jueves.mp3",			fecha: `${year}-02-27` },
/*	Febrero		*/	{ nombre: "Ordinario, Semana VII, Viernes",			archivo: "/ev/to/7/viernes.mp3",		fecha: `${year}-02-28` },
/*	Marzo		*/	{ nombre: "Ordinario, Semana VII, Sabado",			archivo: "/ev/to/7/sabado.mp3",			fecha: `${year}-03-01` },
		
/*	Marzo		*/	{ nombre: "Ordinario, Semana VIII, Domingo",		archivo: "/ev/to/8/domingo.mp3",		fecha: `${year}-03-02` },
/*	Marzo		*/	{ nombre: "Ordinario, Semana VIII, Lunes",			archivo: "/ev/to/8/lunes.mp3",			fecha: `${year}-03-03` },
/*	Marzo		*/	{ nombre: "Ordinario, Semana VIII, Martes",			archivo: "/ev/to/8/martes.mp3",			fecha: `${year}-03-04` },
		
/*	Marzo		*/	{ nombre: "Cuaresma, Miercoles de Ceniza",			archivo: "/ev/tc/cnz/miercoles.mp3",	fecha: `${year}-03-05` },
/*	Marzo		*/	{ nombre: "Cuaresma, Jueves luego de Ceniza",		archivo: "/ev/tc/cnz/jueves.mp3",		fecha: `${year}-03-06` },
/*	Marzo		*/	{ nombre: "Cuaresma, Viernes luego de Ceniza",		archivo: "/ev/tc/cnz/viernes.mp3",		fecha: `${year}-03-07` },
/*	Marzo		*/	{ nombre: "Cuaresma, Sabado luego de Ceniza",		archivo: "/ev/tc/cnz/sabado.mp3",		fecha: `${year}-03-08` },
		
/*	Marzo		*/	{ nombre: "Cuaresma, Semana I, Domingo",			archivo: "/ev/tc/1/domingo.mp3",		fecha: `${year}-03-09` },
/*	Marzo		*/	{ nombre: "Cuaresma, Semana I, Lunes",				archivo: "/ev/tc/1/lunes.mp3",			fecha: `${year}-03-10` },
/*	Marzo		*/	{ nombre: "Cuaresma, Semana I, Martes",				archivo: "/ev/tc/1/martes.mp3",			fecha: `${year}-03-11` },
/*	Marzo		*/	{ nombre: "Cuaresma, Semana I, Miercoles",			archivo: "/ev/tc/1/miercoles.mp3",		fecha: `${year}-03-12` },
/*	Marzo		*/	{ nombre: "Cuaresma, Semana I, Jueves",				archivo: "/ev/tc/1/jueves.mp3",			fecha: `${year}-03-13` },
/*	Marzo		*/	{ nombre: "Cuaresma, Semana I, Viernes",			archivo: "/ev/tc/1/viernes.mp3",		fecha: `${year}-03-14` },
/*	Marzo		*/	{ nombre: "Cuaresma, Semana I, Sabado",				archivo: "/ev/tc/1/sabado.mp3",			fecha: `${year}-03-15` },
		
/*	Marzo		*/	{ nombre: "Cuaresma, Semana II, Domingo",			archivo: "/ev/tc/2/domingo.mp3",		fecha: `${year}-03-16` },
/*	Marzo		*/	{ nombre: "Cuaresma, Semana II, Lunes",				archivo: "/ev/tc/2/lunes.mp3",			fecha: `${year}-03-17` },
/*	Marzo		*/	{ nombre: "Cuaresma, Semana II, Martes",			archivo: "/ev/tc/2/martes.mp3",			fecha: `${year}-03-18` },
/*	Marzo		*/	{ nombre: "Cuaresma, Semana II, Miercoles",			archivo: "/ev/tc/2/miercoles.mp3",		fecha: `${year}-03-19` },
/*	Marzo		*/	{ nombre: "Cuaresma, Semana II, Jueves",			archivo: "/ev/tc/2/jueves.mp3",			fecha: `${year}-03-20` },
/*	Marzo		*/	{ nombre: "Cuaresma, Semana II, Viernes",			archivo: "/ev/tc/2/viernes.mp3",		fecha: `${year}-03-21` },
/*	Marzo		*/	{ nombre: "Cuaresma, Semana II, Sabado",			archivo: "/ev/tc/2/sabado.mp3",			fecha: `${year}-03-22` },
		
/*	Marzo		*/	{ nombre: "Cuaresma, Semana III, Domingo",			archivo: "/ev/tc/3/domingo.mp3",		fecha: `${year}-03-23` },
/*	Marzo		*/	{ nombre: "Cuaresma, Semana III, Lunes",			archivo: "/ev/tc/3/lunes.mp3",			fecha: `${year}-03-24` },
/*	Marzo		*/	{ nombre: "Cuaresma, Semana III, Martes",			archivo: "/ev/tc/3/martes.mp3",			fecha: `${year}-03-25` },
/*	Marzo		*/	{ nombre: "Cuaresma, Semana III, Miercoles",		archivo: "/ev/tc/3/miercoles.mp3",		fecha: `${year}-03-26` },
/*	Marzo		*/	{ nombre: "Cuaresma, Semana III, Jueves",			archivo: "/ev/tc/3/jueves.mp3",			fecha: `${year}-03-27` },
/*	Marzo		*/	{ nombre: "Cuaresma, Semana III, Viernes",			archivo: "/ev/tc/3/viernes.mp3",		fecha: `${year}-03-28` },
/*	Marzo		*/	{ nombre: "Cuaresma, Semana III, Sabado",			archivo: "/ev/tc/3/sabado.mp3",			fecha: `${year}-03-29` },
		
/*	Marzo		*/	{ nombre: "Cuaresma, Semana IV, Domingo",			archivo: "/ev/tc/4/domingo.mp3",		fecha: `${year}-03-30` },
/*	Marzo		*/	{ nombre: "Cuaresma, Semana IV, Lunes",				archivo: "/ev/tc/4/lunes.mp3",			fecha: `${year}-03-31` },
/*	Abril		*/	{ nombre: "Cuaresma, Semana IV, Martes",			archivo: "/ev/tc/4/martes.mp3",			fecha: `${year}-04-01` },
/*	Abril		*/	{ nombre: "Cuaresma, Semana IV, Miercoles",			archivo: "/ev/tc/4/miercoles.mp3",		fecha: `${year}-04-02` },
/*	Abril		*/	{ nombre: "Cuaresma, Semana IV, Jueves",			archivo: "/ev/tc/4/jueves.mp3",			fecha: `${year}-04-03` },
/*	Abril		*/	{ nombre: "Cuaresma, Semana IV, Viernes",			archivo: "/ev/tc/4/viernes.mp3",		fecha: `${year}-04-04` },
/*	Abril		*/	{ nombre: "Cuaresma, Semana IV, Sabado",			archivo: "/ev/tc/4/sabado.mp3",			fecha: `${year}-04-05` },
		
/*	Abril		*/	{ nombre: "Cuaresma, Semana V, Domingo",			archivo: "/ev/tc/5/domingo.mp3",		fecha: `${year}-04-06` },
/*	Abril		*/	{ nombre: "Cuaresma, Semana V, Lunes",				archivo: "/ev/tc/5/lunes.mp3",			fecha: `${year}-04-07` },
/*	Abril		*/	{ nombre: "Cuaresma, Semana V, Martes",				archivo: "/ev/tc/5/martes.mp3",			fecha: `${year}-04-08` },
/*	Abril		*/	{ nombre: "Cuaresma, Semana V, Miercoles",			archivo: "/ev/tc/5/miercoles.mp3",		fecha: `${year}-04-09` },
/*	Abril		*/	{ nombre: "Cuaresma, Semana V, Jueves",				archivo: "/ev/tc/5/jueves.mp3",			fecha: `${year}-04-10` },
/*	Abril		*/	{ nombre: "Cuaresma, Semana V, Viernes",			archivo: "/ev/tc/5/viernes.mp3",		fecha: `${year}-04-11` },
/*	Abril		*/	{ nombre: "Cuaresma, Semana V, Sabado",				archivo: "/ev/tc/5/sabado.mp3",			fecha: `${year}-04-12` },
		
/*	Abril		*/	{ nombre: "Domingo De Ramos",						archivo: "/ev/tc/6/domingo.mp3",		fecha: `${year}-04-13` },
/*	Abril		*/	{ nombre: "Semana Santa, Lunes",        			archivo: "/ev/tc/6/lunes.mp3",			fecha: `${year}-04-14` },
/*	Abril		*/	{ nombre: "Semana Santa, Martes",          			archivo: "/ev/tc/6/martes.mp3",			fecha: `${year}-04-15` },
/*	Abril		*/	{ nombre: "Semana Santa, Miércoles",        		archivo: "/ev/tc/6/miercoles.mp3",		fecha: `${year}-04-16` },
/*	Abril		*/	{ nombre: "Triduo Pascual, Jueves Santo",       	archivo: "/ev/tc/6/jueves.mp3",			fecha: `${year}-04-17` },
/*	Abril		*/	{ nombre: "Triduo Pascual, Viernes Santo",      	archivo: "/ev/tc/6/viernes.mp3",		fecha: `${year}-04-18` },
/*	Abril		*/	{ nombre: "Vigilia Pascual, Sábado Santo",	        archivo: "/ev/tc/6/sabado.mp3",			fecha: `${year}-04-19` },

/*	Abril		*/	{ nombre: "Pascual, Semana I, Domingo",				archivo: "/ev/tp/1/domingo.mp3",		fecha: `${year}-04-20` },
/*	Abril		*/	{ nombre: "Pascual, Semana I, Lunes",				archivo: "/ev/tp/1/lunes.mp3",			fecha: `${year}-04-21` },
/*	Abril		*/	{ nombre: "Pascual, Semana I, Martes",				archivo: "/ev/tp/1/martes.mp3",			fecha: `${year}-04-22` },
/*	Abril		*/	{ nombre: "Pascual, Semana I, Miercoles",			archivo: "/ev/tp/1/miercoles.mp3",		fecha: `${year}-04-23` },
/*	Abril		*/	{ nombre: "Pascual, Semana I, Jueves",				archivo: "/ev/tp/1/jueves.mp3",			fecha: `${year}-04-24` },
/*	Abril		*/	{ nombre: "Pascual, Semana I, Viernes",				archivo: "/ev/tp/1/viernes.mp3",		fecha: `${year}-04-25` },
/*	Abril		*/	{ nombre: "Pascual, Semana I, Sabado",				archivo: "/ev/tp/1/sabado.mp3",			fecha: `${year}-04-26` },

/*	Abril		*/	{ nombre: "Pascual, Semana II, Domingo",			archivo: "/ev/tp/2/domingo.mp3",		fecha: `${year}-04-27` },
/*	Abril		*/	{ nombre: "Pascual, Semana II, Lunes",				archivo: "/ev/tp/2/lunes.mp3",			fecha: `${year}-04-28` },
/*	Abril		*/	{ nombre: "Pascual, Semana II, Martes",				archivo: "/ev/tp/2/martes.mp3",			fecha: `${year}-04-29` },
/*	Abril		*/	{ nombre: "Pascual, Semana II, Miercoles",			archivo: "/ev/tp/2/miercoles.mp3",		fecha: `${year}-04-30` },
/*	Mayo		*/	{ nombre: "Pascual, Semana II, Jueves",				archivo: "/ev/tp/2/jueves.mp3",			fecha: `${year}-05-01` },
/*	Mayo		*/	{ nombre: "Pascual, Semana II, Viernes",			archivo: "/ev/tp/2/viernes.mp3",		fecha: `${year}-05-02` },
/*	Mayo		*/	{ nombre: "Pascual, Semana II, Sabado",				archivo: "/ev/tp/2/sabado.mp3",			fecha: `${year}-05-03` },

/*	Mayo		*/	{ nombre: "Pascual, Semana III, Domingo",			archivo: "/ev/tp/3/domingo.mp3",		fecha: `${year}-05-04` },
/*	Mayo		*/	{ nombre: "Pascual, Semana III, Lunes",				archivo: "/ev/tp/3/lunes.mp3",			fecha: `${year}-05-05` },
/*	Mayo		*/	{ nombre: "Pascual, Semana III, Martes",			archivo: "/ev/tp/3/martes.mp3",			fecha: `${year}-05-06` },
/*	Mayo		*/	{ nombre: "Pascual, Semana III, Miercoles",			archivo: "/ev/tp/3/miercoles.mp3",		fecha: `${year}-05-07` },
/*	Mayo		*/	{ nombre: "Pascual, Semana III, Jueves",			archivo: "/ev/tp/3/jueves.mp3",			fecha: `${year}-05-08` },
/*	Mayo		*/	{ nombre: "Pascual, Semana III, Viernes",			archivo: "/ev/tp/3/viernes.mp3",		fecha: `${year}-05-09` },
/*	Mayo		*/	{ nombre: "Pascual, Semana III, Sabado",			archivo: "/ev/tp/3/sabado.mp3",			fecha: `${year}-05-10` },

/*	Mayo		*/	{ nombre: "Pascual, Semana IV, Domingo",			archivo: "/ev/tp/4/domingo.mp3",		fecha: `${year}-05-11` },
/*	Mayo		*/	{ nombre: "Pascual, Semana IV, Lunes",				archivo: "/ev/tp/4/lunes.mp3",			fecha: `${year}-05-12` },
/*	Mayo		*/	{ nombre: "Pascual, Semana IV, Martes",				archivo: "/ev/tp/4/martes.mp3",			fecha: `${year}-05-13` },
/*	Mayo		*/	{ nombre: "Pascual, Semana IV, Miercoles",			archivo: "/ev/tp/4/miercoles.mp3",		fecha: `${year}-05-14` },
/*	Mayo		*/	{ nombre: "Pascual, Semana IV, Jueves",				archivo: "/ev/tp/4/jueves.mp3",			fecha: `${year}-05-15` },
/*	Mayo		*/	{ nombre: "Pascual, Semana IV, Viernes",			archivo: "/ev/tp/4/viernes.mp3",		fecha: `${year}-05-16` },
/*	Mayo		*/	{ nombre: "Pascual, Semana IV, Sabado",				archivo: "/ev/tp/4/sabado.mp3",			fecha: `${year}-05-17` },

/*	Mayo		*/	{ nombre: "Pascual, Semana V, Domingo",				archivo: "/ev/tp/5/domingo.mp3",		fecha: `${year}-05-18` },
/*	Mayo		*/	{ nombre: "Pascual, Semana V, Lunes",				archivo: "/ev/tp/5/lunes.mp3",			fecha: `${year}-05-19` },
/*	Mayo		*/	{ nombre: "Pascual, Semana V, Martes",				archivo: "/ev/tp/5/martes.mp3",			fecha: `${year}-05-20` },
/*	Mayo		*/	{ nombre: "Pascual, Semana V, Miercoles",			archivo: "/ev/tp/5/miercoles.mp3",		fecha: `${year}-05-21` },
/*	Mayo		*/	{ nombre: "Pascual, Semana V, Jueves",				archivo: "/ev/tp/5/jueves.mp3",			fecha: `${year}-05-22` },
/*	Mayo		*/	{ nombre: "Pascual, Semana V, Viernes",				archivo: "/ev/tp/5/viernes.mp3",		fecha: `${year}-05-23` },
/*	Mayo		*/	{ nombre: "Pascual, Semana V, Sabado",				archivo: "/ev/tp/5/sabado.mp3",			fecha: `${year}-05-24` },

/*	Mayo		*/	{ nombre: "Pascual, Semana VI, Domingo",			archivo: "/ev/tp/6/domingo.mp3",		fecha: `${year}-05-25` },
/*	Mayo		*/	{ nombre: "Pascual, Semana VI, Lunes",				archivo: "/ev/tp/6/lunes.mp3",			fecha: `${year}-05-26` },
/*	Mayo		*/	{ nombre: "Pascual, Semana VI, Martes",				archivo: "/ev/tp/6/martes.mp3",			fecha: `${year}-05-27` },
/*	Mayo		*/	{ nombre: "Pascual, Semana VI, Miercoles",			archivo: "/ev/tp/6/miercoles.mp3",		fecha: `${year}-05-28` },
/*	Mayo		*/	{ nombre: "Pascual, Semana VI, Jueves",				archivo: "/ev/tp/6/jueves.mp3",			fecha: `${year}-05-29` },
/*	Mayo		*/	{ nombre: "Pascual, Semana VI, Viernes",			archivo: "/ev/tp/6/viernes.mp3",		fecha: `${year}-05-30` },
/*	Mayo		*/	{ nombre: "Pascual, Semana VI, Sabado",				archivo: "/ev/tp/6/sabado.mp3",			fecha: `${year}-05-31` },

/*	Junio		*/	{ nombre: "Pascual, Semana VII, Domingo",			archivo: "/ev/tp/7/domingo.mp3",		fecha: `${year}-06-01` },
/*	Junio		*/	{ nombre: "Pascual, Semana VII, Lunes",				archivo: "/ev/tp/7/lunes.mp3",			fecha: `${year}-06-02` },
/*	Junio		*/	{ nombre: "Pascual, Semana VII, Martes",			archivo: "/ev/tp/7/martes.mp3",			fecha: `${year}-06-03` },
/*	Junio		*/	{ nombre: "Pascual, Semana VII, Miercoles",			archivo: "/ev/tp/7/miercoles.mp3",		fecha: `${year}-06-04` },
/*	Junio		*/	{ nombre: "Pascual, Semana VII, Jueves",			archivo: "/ev/tp/7/jueves.mp3",			fecha: `${year}-06-05` },
/*	Junio		*/	{ nombre: "Pascual, Semana VII, Viernes",			archivo: "/ev/tp/7/viernes.mp3",		fecha: `${year}-06-06` },
/*	Junio		*/	{ nombre: "Pascual, Semana VII, Sabado",			archivo: "/ev/tp/7/sabado.mp3",			fecha: `${year}-06-07` },

/*	Junio		*/	{ nombre: "Domingo de Pentecostes",					archivo: "/ev/tp/8/pentecostes.mp3",	fecha: `${year}-06-08` },
/*	Junio		*/	{ nombre: "Ordinario, Semana X, Lunes",				archivo: "/ev/to/10/lunes.mp3",			fecha: `${year}-06-09` },
/*	Junio		*/	{ nombre: "Ordinario, Semana X, Martes",			archivo: "/ev/to/10/martes.mp3",		fecha: `${year}-06-10` },
/*	Junio		*/	{ nombre: "Ordinario, Semana X, Miercoles",			archivo: "/ev/to/10/miercoles.mp3",		fecha: `${year}-06-11` },
/*	Junio		*/	{ nombre: "Ordinario, Semana X, Jueves",			archivo: "/ev/to/10/jueves.mp3",		fecha: `${year}-06-12` },
/*	Junio		*/	{ nombre: "Ordinario, Semana X, Viernes",			archivo: "/ev/to/10/viernes.mp3",		fecha: `${year}-06-13` },
/*	Junio		*/	{ nombre: "Ordinario, Semana X, Sabado",			archivo: "/ev/to/10/sabado.mp3",		fecha: `${year}-06-14` },

/*	Junio		*/	{ nombre: "La Santísima Trinidad",					archivo: "/ev/tp/8/STrinidad.mp3",		fecha: `${year}-06-15` },
/*	Junio			{ nombre: "La Santísima Trinidad",					archivo: "/ev/to/11/domingo.mp3",		fecha: `${year}-06-15` }, */
/*	Junio		*/	{ nombre: "Ordinario, Semana XI, Lunes",			archivo: "/ev/to/11/lunes.mp3",			fecha: `${year}-06-16` },
/*	Junio		*/	{ nombre: "Ordinario, Semana XI, Martes",			archivo: "/ev/to/11/martes.mp3",		fecha: `${year}-06-17` },
/*	Junio		*/	{ nombre: "Ordinario, Semana XI, Miercoles",		archivo: "/ev/to/11/miercoles.mp3",		fecha: `${year}-06-18` },

/*	Junio		*/	//  { nombre: "Ordinario, Semana XI, Jueves",		archivo: "/ev/to/11/jueves.mp3",		fecha: `${year}-06-19` },   
/*	Junio		*/	{ nombre: "Jueves Corpus Christi",	                archivo: "/ev/fiesta/cChristi.mp3",		fecha: `${year}-06-19` },   // Jueves Corpus Cristi

/*	Junio		*/	{ nombre: "Ordinario, Semana XI, Viernes",			archivo: "/ev/to/11/viernes.mp3",		fecha: `${year}-06-20` },
/*	Junio		*/	{ nombre: "Ordinario, Semana XI, Sabado",			archivo: "/ev/to/11/sabado.mp3",		fecha: `${year}-06-21` },

/*	Junio		*/	{ nombre: "Ordinario, Semana XII, Domingo",			archivo: "/ev/to/12/domingo.mp3",		fecha: `${year}-06-22` },
/*	Junio		*/	{ nombre: "Ordinario, Semana XII, Lunes",			archivo: "/ev/to/12/lunes.mp3",			fecha: `${year}-06-23` },
/*	Junio		*/	{ nombre: "Ordinario, Semana XII, Martes",			archivo: "/ev/to/12/martes.mp3",		fecha: `${year}-06-24` },
/*	Junio		*/	{ nombre: "Ordinario, Semana XII, Miercoles",		archivo: "/ev/to/12/miercoles.mp3",		fecha: `${year}-06-25` },
/*	Junio		*/	{ nombre: "Ordinario, Semana XII, Jueves",			archivo: "/ev/to/12/jueves.mp3",		fecha: `${year}-06-26` },
/*	Junio		*/	{ nombre: "Ordinario, Semana XII, Viernes",			archivo: "/ev/to/12/viernes.mp3",		fecha: `${year}-06-27` },
/*	Junio		*/	{ nombre: "Ordinario, Semana XII, Sabado",			archivo: "/ev/to/12/sabado.mp3",		fecha: `${year}-06-28` },

/*	Junio		*/	{ nombre: "Ordinario, Semana XIII, Domingo",		archivo: "/ev/to/13/domingo.mp3",		fecha: `${year}-06-29` },
/*	Junio		*/	{ nombre: "Ordinario, Semana XIII, Lunes",			archivo: "/ev/to/13/lunes.mp3",			fecha: `${year}-06-30` },
/*	Julio		*/	{ nombre: "Ordinario, Semana XIII, Martes",			archivo: "/ev/to/13/martes.mp3",		fecha: `${year}-07-01` },
/*	Julio		*/	{ nombre: "Ordinario, Semana XIII, Miercoles",		archivo: "/ev/to/13/miercoles.mp3",		fecha: `${year}-07-02` },
/*	Julio		*/	{ nombre: "Ordinario, Semana XIII, Jueves",			archivo: "/ev/to/13/jueves.mp3",		fecha: `${year}-07-03` },
/*	Julio		*/	{ nombre: "Ordinario, Semana XIII, Viernes",		archivo: "/ev/to/13/viernes.mp3",		fecha: `${year}-07-04` },
/*	Julio		*/	{ nombre: "Ordinario, Semana XIII, Sabado",			archivo: "/ev/to/13/sabado.mp3",		fecha: `${year}-07-05` },

/*	Julio		*/	{ nombre: "Ordinario, Semana XIV, Domingo",			archivo: "/ev/to/14/domingo.mp3",		fecha: `${year}-07-06` },
/*	Julio		*/	{ nombre: "Ordinario, Semana XIV, Lunes",			archivo: "/ev/to/14/lunes.mp3",			fecha: `${year}-07-07` },
/*	Julio		*/	{ nombre: "Ordinario, Semana XIV, Martes",			archivo: "/ev/to/14/martes.mp3",		fecha: `${year}-07-08` },
/*	Julio		*/	{ nombre: "Ordinario, Semana XIV, Miercoles",		archivo: "/ev/to/14/miercoles.mp3",		fecha: `${year}-07-09` },
/*	Julio		*/	{ nombre: "Ordinario, Semana XIV, Jueves",			archivo: "/ev/to/14/jueves.mp3",		fecha: `${year}-07-10` },
/*	Julio		*/	{ nombre: "Ordinario, Semana XIV, Viernes",			archivo: "/ev/to/14/viernes.mp3",		fecha: `${year}-07-11` },
/*	Julio		*/	{ nombre: "Ordinario, Semana XIV, Sabado",			archivo: "/ev/to/14/sabado.mp3",		fecha: `${year}-07-12` },

/*	Julio		*/	{ nombre: "Ordinario, Semana XV, Domingo",			archivo: "/ev/to/15/domingo.mp3",		fecha: `${year}-07-13` },
/*	Julio		*/	{ nombre: "Ordinario, Semana XV, Lunes",			archivo: "/ev/to/15/lunes.mp3",			fecha: `${year}-07-14` },
/*	Julio		*/	{ nombre: "Ordinario, Semana XV, Martes",			archivo: "/ev/to/15/martes.mp3",		fecha: `${year}-07-15` },
/*	Julio		*/	{ nombre: "Ordinario, Semana XV, Miercoles",		archivo: "/ev/to/15/miercoles.mp3",		fecha: `${year}-07-16` },
/*	Julio		*/	{ nombre: "Ordinario, Semana XV, Jueves",			archivo: "/ev/to/15/jueves.mp3",		fecha: `${year}-07-17` },
/*	Julio		*/	{ nombre: "Ordinario, Semana XV, Viernes",			archivo: "/ev/to/15/viernes.mp3",		fecha: `${year}-07-18` },
/*	Julio		*/	{ nombre: "Ordinario, Semana XV, Sabado",			archivo: "/ev/to/15/sabado.mp3",		fecha: `${year}-07-19` },

/*	Julio		*/	{ nombre: "Ordinario, Semana XVI, Domingo",			archivo: "/ev/to/16/domingo.mp3",		fecha: `${year}-07-20` },
/*	Julio		*/	{ nombre: "Ordinario, Semana XVI, Lunes",			archivo: "/ev/to/16/lunes.mp3",			fecha: `${year}-07-21` },
/*	Julio		*/	{ nombre: "Ordinario, Semana XVI, Martes",			archivo: "/ev/to/16/martes.mp3",		fecha: `${year}-07-22` },
/*	Julio		*/	{ nombre: "Ordinario, Semana XVI, Miercoles",		archivo: "/ev/to/16/miercoles.mp3",		fecha: `${year}-07-23` },
/*	Julio		*/	{ nombre: "Ordinario, Semana XVI, Jueves",			archivo: "/ev/to/16/jueves.mp3",		fecha: `${year}-07-24` },
/*	Julio		*/	{ nombre: "Ordinario, Semana XVI, Viernes",			archivo: "/ev/to/16/viernes.mp3",		fecha: `${year}-07-25` },
/*	Julio		*/	{ nombre: "Ordinario, Semana XVI, Sabado",			archivo: "/ev/to/16/sabado.mp3",		fecha: `${year}-07-26` },

/*	Julio		*/	{ nombre: "Ordinario, Semana XVII, Domingo",		archivo: "/ev/to/17/domingo.mp3",		fecha: `${year}-07-27` },
/*	Julio		*/	{ nombre: "Ordinario, Semana XVII, Lunes",			archivo: "/ev/to/17/lunes.mp3",			fecha: `${year}-07-28` },
/*	Julio		*/	{ nombre: "Ordinario, Semana XVII, Martes",			archivo: "/ev/to/17/martes.mp3",		fecha: `${year}-07-29` },
/*	Julio		*/	{ nombre: "Ordinario, Semana XVII, Miercoles",		archivo: "/ev/to/17/miercoles.mp3",		fecha: `${year}-07-30` },
/*	Julio		*/	{ nombre: "Ordinario, Semana XVII, Jueves",			archivo: "/ev/to/17/jueves.mp3",		fecha: `${year}-07-31` },
/*	Agosto		*/	{ nombre: "Ordinario, Semana XVII, Viernes",		archivo: "/ev/to/17/viernes.mp3",		fecha: `${year}-08-01` },
/*	Agosto		*/	{ nombre: "Ordinario, Semana XVII, Sabado",			archivo: "/ev/to/17/sabado.mp3",		fecha: `${year}-08-02` },

/*	Agosto		*/	{ nombre: "Ordinario, Semana XVIII, Domingo",		archivo: "/ev/to/18/domingo.mp3",		fecha: `${year}-08-03` },
/*	Agosto		*/	{ nombre: "Ordinario, Semana XVIII, Lunes",			archivo: "/ev/to/18/lunes.mp3",			fecha: `${year}-08-04` },
/*	Agosto		*/	{ nombre: "Ordinario, Semana XVIII, Martes",		archivo: "/ev/to/18/martes.mp3",		fecha: `${year}-08-05` },
/*	Agosto		*/	{ nombre: "Ordinario, Semana XVIII, Miercoles",		archivo: "/ev/to/18/miercoles.mp3",		fecha: `${year}-08-06` },
/*	Agosto		*/	{ nombre: "Ordinario, Semana XVIII, Jueves",		archivo: "/ev/to/18/jueves.mp3",		fecha: `${year}-08-07` },
/*	Agosto		*/	{ nombre: "Ordinario, Semana XVIII, Viernes",		archivo: "/ev/to/18/viernes.mp3",		fecha: `${year}-08-08` },
/*	Agosto		*/	{ nombre: "Ordinario, Semana XVIII, Sabado",		archivo: "/ev/to/18/sabado.mp3",		fecha: `${year}-08-09` },

/*	Agosto		*/	{ nombre: "Ordinario, Semana XIX, Domingo",			archivo: "/ev/to/19/domingo.mp3",		fecha: `${year}-08-10` },
/*	Agosto		*/	{ nombre: "Ordinario, Semana XIX, Lunes",			archivo: "/ev/to/19/lunes.mp3",			fecha: `${year}-08-11` },
/*	Agosto		*/	{ nombre: "Ordinario, Semana XIX, Martes",			archivo: "/ev/to/19/martes.mp3",		fecha: `${year}-08-12` },
/*	Agosto		*/	{ nombre: "Ordinario, Semana XIX, Miercoles",		archivo: "/ev/to/19/miercoles.mp3",		fecha: `${year}-08-13` },
/*	Agosto		*/	{ nombre: "Ordinario, Semana XIX, Jueves",			archivo: "/ev/to/19/jueves.mp3",		fecha: `${year}-08-14` },
/*	Agosto		*/	{ nombre: "Ordinario, Semana XIX, Viernes",			archivo: "/ev/to/19/viernes.mp3",		fecha: `${year}-08-15` },
/*	Agosto		*/	{ nombre: "Ordinario, Semana XIX, Sabado",			archivo: "/ev/to/19/sabado.mp3",		fecha: `${year}-08-16` },

/*	Agosto		*/	{ nombre: "Ordinario, Semana XX, Domingo",			archivo: "/ev/to/20/domingo.mp3",		fecha: `${year}-08-17` },
/*	Agosto		*/	{ nombre: "Ordinario, Semana XX, Lunes",			archivo: "/ev/to/20/lunes.mp3",			fecha: `${year}-08-18` },
/*	Agosto		*/	{ nombre: "Ordinario, Semana XX, Martes",			archivo: "/ev/to/20/martes.mp3",		fecha: `${year}-08-19` },
/*	Agosto		*/	{ nombre: "Ordinario, Semana XX, Miercoles",		archivo: "/ev/to/20/miercoles.mp3",		fecha: `${year}-08-20` },
/*	Agosto		*/	{ nombre: "Ordinario, Semana XX, Jueves",			archivo: "/ev/to/20/jueves.mp3",		fecha: `${year}-08-21` },
/*	Agosto		*/	{ nombre: "Ordinario, Semana XX, Viernes",			archivo: "/ev/to/20/viernes.mp3",		fecha: `${year}-08-22` },
/*	Agosto		*/	{ nombre: "Ordinario, Semana XX, Sabado",			archivo: "/ev/to/20/sabado.mp3",		fecha: `${year}-08-23` },

/*	Agosto		*/	{ nombre: "Ordinario, Semana XXI, Domingo",			archivo: "/ev/to/21/domingo.mp3",		fecha: `${year}-08-24` },
/*	Agosto		*/	{ nombre: "Ordinario, Semana XXI, Lunes",			archivo: "/ev/to/21/lunes.mp3",			fecha: `${year}-08-25` },
/*	Agosto		*/	{ nombre: "Ordinario, Semana XXI, Martes",			archivo: "/ev/to/21/martes.mp3",		fecha: `${year}-08-26` },
/*	Agosto		*/	{ nombre: "Ordinario, Semana XXI, Miercoles",		archivo: "/ev/to/21/miercoles.mp3",		fecha: `${year}-08-27` },
/*	Agosto		*/	{ nombre: "Ordinario, Semana XXI, Jueves",			archivo: "/ev/to/21/jueves.mp3",		fecha: `${year}-08-28` },
/*	Agosto		*/	{ nombre: "Ordinario, Semana XXI, Viernes",			archivo: "/ev/to/21/viernes.mp3",		fecha: `${year}-08-29` },
/*	Agosto		*/	{ nombre: "Ordinario, Semana XXI, Sabado",			archivo: "/ev/to/21/sabado.mp3",		fecha: `${year}-08-30` },

/*	Agosto		*/	{ nombre: "Ordinario, Semana XXII, Domingo",		archivo: "/ev/to/22/domingo.mp3",		fecha: `${year}-08-31` },
/*	Septiembre	*/	{ nombre: "Ordinario, Semana XXII, Lunes",			archivo: "/ev/to/22/lunes.mp3",			fecha: `${year}-09-01` },
/*	Septiembre	*/	{ nombre: "Ordinario, Semana XXII, Martes",			archivo: "/ev/to/22/martes.mp3",		fecha: `${year}-09-02` },
/*	Septiembre	*/	{ nombre: "Ordinario, Semana XXII, Miercoles",		archivo: "/ev/to/22/miercoles.mp3",		fecha: `${year}-09-03` },
/*	Septiembre	*/	{ nombre: "Ordinario, Semana XXII, Jueves",			archivo: "/ev/to/22/jueves.mp3",		fecha: `${year}-09-04` },
/*	Septiembre	*/	{ nombre: "Ordinario, Semana XXII, Viernes",		archivo: "/ev/to/22/viernes.mp3",		fecha: `${year}-09-05` },
/*	Septiembre	*/	{ nombre: "Ordinario, Semana XXII, Sabado",			archivo: "/ev/to/22/sabado.mp3",		fecha: `${year}-09-06` },

/*	Septiembre	*/	{ nombre: "Ordinario, Semana XXIII, Domingo",		archivo: "/ev/to/23/domingo.mp3",		fecha: `${year}-09-07` },
/*	Septiembre	*/	{ nombre: "Ordinario, Semana XXIII, Lunes",			archivo: "/ev/to/23/lunes.mp3",			fecha: `${year}-09-08` },
/*	Septiembre	*/	{ nombre: "Ordinario, Semana XXIII, Martes",		archivo: "/ev/to/23/martes.mp3",		fecha: `${year}-09-09` },
/*	Septiembre	*/	{ nombre: "Ordinario, Semana XXIII, Miercoles",		archivo: "/ev/to/23/miercoles.mp3",		fecha: `${year}-09-10` },
/*	Septiembre	*/	{ nombre: "Ordinario, Semana XXIII, Jueves",		archivo: "/ev/to/23/jueves.mp3",		fecha: `${year}-09-11` },
/*	Septiembre	*/	{ nombre: "Ordinario, Semana XXIII, Viernes",		archivo: "/ev/to/23/viernes.mp3",		fecha: `${year}-09-12` },
/*	Septiembre	*/	{ nombre: "Ordinario, Semana XXIII, Sabado",		archivo: "/ev/to/23/sabado.mp3",		fecha: `${year}-09-13` },

/*	Septiembre	*/	{ nombre: "Ordinario, Semana XXIV, Domingo",		archivo: "/ev/to/24/domingo.mp3",		fecha: `${year}-09-14` },
/*	Septiembre	*/	{ nombre: "Ordinario, Semana XXIV, Lunes",			archivo: "/ev/to/24/lunes.mp3",			fecha: `${year}-09-15` },
/*	Septiembre	*/	{ nombre: "Ordinario, Semana XXIV, Martes",			archivo: "/ev/to/24/martes.mp3",		fecha: `${year}-09-16` },
/*	Septiembre	*/	{ nombre: "Ordinario, Semana XXIV, Miercoles",		archivo: "/ev/to/24/miercoles.mp3",		fecha: `${year}-09-17` },
/*	Septiembre	*/	{ nombre: "Ordinario, Semana XXIV, Jueves",			archivo: "/ev/to/24/jueves.mp3",		fecha: `${year}-09-18` },
/*	Septiembre	*/	{ nombre: "Ordinario, Semana XXIV, Viernes",		archivo: "/ev/to/24/viernes.mp3",		fecha: `${year}-09-19` },
/*	Septiembre	*/	{ nombre: "Ordinario, Semana XXIV, Sabado",			archivo: "/ev/to/24/sabado.mp3",		fecha: `${year}-09-20` },

/*	Septiembre	*/	{ nombre: "Ordinario, Semana XXV, Domingo",			archivo: "/ev/to/25/domingo.mp3",		fecha: `${year}-09-21` },
/*	Septiembre	*/	{ nombre: "Ordinario, Semana XXV, Lunes",			archivo: "/ev/to/25/lunes.mp3",			fecha: `${year}-09-22` },
/*	Septiembre	*/	{ nombre: "Ordinario, Semana XXV, Martes",			archivo: "/ev/to/25/martes.mp3",		fecha: `${year}-09-23` },
/*	Septiembre	*/	{ nombre: "Ordinario, Semana XXV, Miercoles",		archivo: "/ev/to/25/miercoles.mp3",		fecha: `${year}-09-24` },
/*	Septiembre	*/	{ nombre: "Ordinario, Semana XXV, Jueves",			archivo: "/ev/to/25/jueves.mp3",		fecha: `${year}-09-25` },
/*	Septiembre	*/	{ nombre: "Ordinario, Semana XXV, Viernes",			archivo: "/ev/to/25/viernes.mp3",		fecha: `${year}-09-26` },
/*	Septiembre	*/	{ nombre: "Ordinario, Semana XXV, Sabado",			archivo: "/ev/to/25/sabado.mp3",		fecha: `${year}-09-27` },

/*	Septiembre	*/	{ nombre: "Ordinario, Semana XXVI, Domingo",		archivo: "/ev/to/26/domingo.mp3",		fecha: `${year}-09-28` },
/*	Septiembre	*/	{ nombre: "Ordinario, Semana XXVI, Lunes",			archivo: "/ev/to/26/lunes.mp3",			fecha: `${year}-09-29` },
/*	Septiembre	*/	{ nombre: "Ordinario, Semana XXVI, Martes",			archivo: "/ev/to/26/martes.mp3",		fecha: `${year}-09-30` },
/*	Octubre		*/	{ nombre: "Ordinario, Semana XXVI, Miercoles",		archivo: "/ev/to/26/miercoles.mp3",		fecha: `${year}-10-01` },
/*	Octubre		*/	{ nombre: "Ordinario, Semana XXVI, Jueves",			archivo: "/ev/to/26/jueves.mp3",		fecha: `${year}-10-02` },
/*	Octubre		*/	{ nombre: "Ordinario, Semana XXVI, Viernes",		archivo: "/ev/to/26/viernes.mp3",		fecha: `${year}-10-03` },
/*	Octubre		*/	{ nombre: "Ordinario, Semana XXVI, Sabado",			archivo: "/ev/to/26/sabado.mp3",		fecha: `${year}-10-04` },

/*	Octubre		*/	{ nombre: "Ordinario, Semana XXVII, Domingo",		archivo: "/ev/to/27/domingo.mp3",		fecha: `${year}-10-05` },
/*	Octubre		*/	{ nombre: "Ordinario, Semana XXVII, Lunes",			archivo: "/ev/to/27/lunes.mp3",			fecha: `${year}-10-06` },
/*	Octubre		*/	{ nombre: "Ordinario, Semana XXVII, Martes",		archivo: "/ev/to/27/martes.mp3",		fecha: `${year}-10-07` },
/*	Octubre		*/	{ nombre: "Ordinario, Semana XXVII, Miercoles",		archivo: "/ev/to/27/miercoles.mp3",		fecha: `${year}-10-08` },
/*	Octubre		*/	{ nombre: "Ordinario, Semana XXVII, Jueves",		archivo: "/ev/to/27/jueves.mp3",		fecha: `${year}-10-09` },
/*	Octubre		*/	{ nombre: "Ordinario, Semana XXVII, Viernes",		archivo: "/ev/to/27/viernes.mp3",		fecha: `${year}-10-10` },
/*	Octubre		*/	{ nombre: "Ordinario, Semana XXVII, Sabado",		archivo: "/ev/to/27/sabado.mp3",		fecha: `${year}-10-11` },

/*	Octubre		*/	{ nombre: "Ordinario, Semana XXVIII, Domingo",		archivo: "/ev/to/28/domingo.mp3",		fecha: `${year}-10-12` },
/*	Octubre		*/	{ nombre: "Ordinario, Semana XXVIII, Lunes",		archivo: "/ev/to/28/lunes.mp3",			fecha: `${year}-10-13` },
/*	Octubre		*/	{ nombre: "Ordinario, Semana XXVIII, Martes",		archivo: "/ev/to/28/martes.mp3",		fecha: `${year}-10-14` },
/*	Octubre		*/	{ nombre: "Ordinario, Semana XXVIII, Miercoles",	archivo: "/ev/to/28/miercoles.mp3",		fecha: `${year}-10-15` },
/*	Octubre		*/	{ nombre: "Ordinario, Semana XXVIII, Jueves",		archivo: "/ev/to/28/jueves.mp3",		fecha: `${year}-10-16` },
/*	Octubre		*/	{ nombre: "Ordinario, Semana XXVIII, Viernes",		archivo: "/ev/to/28/viernes.mp3",		fecha: `${year}-10-17` },
/*	Octubre		*/	{ nombre: "Ordinario, Semana XXVIII, Sabado",		archivo: "/ev/to/28/sabado.mp3",		fecha: `${year}-10-18` },

/*	Octubre		*/	{ nombre: "Ordinario, Semana XXIX, Domingo",		archivo: "/ev/to/29/domingo.mp3",		fecha: `${year}-10-19` },
/*	Octubre		*/	{ nombre: "Ordinario, Semana XXIX, Lunes",			archivo: "/ev/to/29/lunes.mp3",			fecha: `${year}-10-20` },
/*	Octubre		*/	{ nombre: "Ordinario, Semana XXIX, Martes",			archivo: "/ev/to/29/martes.mp3",		fecha: `${year}-10-21` },
/*	Octubre		*/	{ nombre: "Ordinario, Semana XXIX, Miercoles",		archivo: "/ev/to/29/miercoles.mp3",		fecha: `${year}-10-22` },
/*	Octubre		*/	{ nombre: "Ordinario, Semana XXIX, Jueves",			archivo: "/ev/to/29/jueves.mp3",		fecha: `${year}-10-23` },
/*	Octubre		*/	{ nombre: "Ordinario, Semana XXIX, Viernes",		archivo: "/ev/to/29/viernes.mp3",		fecha: `${year}-10-24` },
/*	Octubre		*/	{ nombre: "Ordinario, Semana XXIX, Sabado",			archivo: "/ev/to/29/sabado.mp3",		fecha: `${year}-10-25` },

/*	Octubre		*/	{ nombre: "Ordinario, Semana XXX, Domingo",			archivo: "/ev/to/30/domingo.mp3",		fecha: `${year}-10-26` },
/*	Octubre		*/	{ nombre: "Ordinario, Semana XXX, Lunes",			archivo: "/ev/to/30/lunes.mp3",			fecha: `${year}-10-27` },
/*	Octubre		*/	{ nombre: "Ordinario, Semana XXX, Martes",			archivo: "/ev/to/30/martes.mp3",		fecha: `${year}-10-28` },
/*	Octubre		*/	{ nombre: "Ordinario, Semana XXX, Miercoles",		archivo: "/ev/to/30/miercoles.mp3",		fecha: `${year}-10-29` },
/*	Octubre		*/	{ nombre: "Ordinario, Semana XXX, Jueves",			archivo: "/ev/to/30/jueves.mp3",		fecha: `${year}-10-30` },
/*	Octubre		*/	{ nombre: "Ordinario, Semana XXX, Viernes",			archivo: "/ev/to/30/viernes.mp3",		fecha: `${year}-10-31` },
/*	Noviembre	*/	{ nombre: "Ordinario, Semana XXX, Sabado",			archivo: "/ev/to/30/sabado.mp3",		fecha: `${year}-11-01` },

/*	Noviembre	*/	{ nombre: "Ordinario, Semana XXXI, Domingo",		archivo: "/ev/to/31/domingo.mp3",		fecha: `${year}-11-02` },
/*	Noviembre	*/	{ nombre: "Ordinario, Semana XXXI, Lunes",			archivo: "/ev/to/31/lunes.mp3",			fecha: `${year}-11-03` },
/*	Noviembre	*/	{ nombre: "Ordinario, Semana XXXI, Martes",			archivo: "/ev/to/31/martes.mp3",		fecha: `${year}-11-04` },
/*	Noviembre	*/	{ nombre: "Ordinario, Semana XXXI, Miercoles",		archivo: "/ev/to/31/miercoles.mp3",		fecha: `${year}-11-05` },
/*	Noviembre	*/	{ nombre: "Ordinario, Semana XXXI, Jueves",			archivo: "/ev/to/31/jueves.mp3",		fecha: `${year}-11-06` },
/*	Noviembre	*/	{ nombre: "Ordinario, Semana XXXI, Viernes",		archivo: "/ev/to/31/viernes.mp3",		fecha: `${year}-11-07` },
/*	Noviembre	*/	{ nombre: "Ordinario, Semana XXXI, Sabado",			archivo: "/ev/to/31/sabado.mp3",		fecha: `${year}-11-08` },

/*	Noviembre	*/	{ nombre: "Ordinario, Semana XXXII, Domingo",		archivo: "/ev/to/32/domingo.mp3",		fecha: `${year}-11-09` },
/*	Noviembre	*/	{ nombre: "Ordinario, Semana XXXII, Lunes",			archivo: "/ev/to/32/lunes.mp3",			fecha: `${year}-11-10` },
/*	Noviembre	*/	{ nombre: "Ordinario, Semana XXXII, Martes",		archivo: "/ev/to/32/martes.mp3",		fecha: `${year}-11-11` },
/*	Noviembre	*/	{ nombre: "Ordinario, Semana XXXII, Miercoles",		archivo: "/ev/to/32/miercoles.mp3",		fecha: `${year}-11-12` },
/*	Noviembre	*/	{ nombre: "Ordinario, Semana XXXII, Jueves",		archivo: "/ev/to/32/jueves.mp3",		fecha: `${year}-11-13` },
/*	Noviembre	*/	{ nombre: "Ordinario, Semana XXXII, Viernes",		archivo: "/ev/to/32/viernes.mp3",		fecha: `${year}-11-14` },
/*	Noviembre	*/	{ nombre: "Ordinario, Semana XXXII, Sabado",		archivo: "/ev/to/32/sabado.mp3",		fecha: `${year}-11-15` },

/*	Noviembre	*/	{ nombre: "Ordinario, Semana XXXIII, Domingo",		archivo: "/ev/to/33/domingo.mp3",		fecha: `${year}-11-16` },
/*	Noviembre	*/	{ nombre: "Ordinario, Semana XXXIII, Lunes",		archivo: "/ev/to/33/lunes.mp3",			fecha: `${year}-11-17` },
/*	Noviembre	*/	{ nombre: "Ordinario, Semana XXXIII, Martes",		archivo: "/ev/to/33/martes.mp3",		fecha: `${year}-11-18` },
/*	Noviembre	*/	{ nombre: "Ordinario, Semana XXXIII, Miercoles",	archivo: "/ev/to/33/miercoles.mp3",		fecha: `${year}-11-19` },
/*	Noviembre	*/	{ nombre: "Ordinario, Semana XXXIII, Jueves",		archivo: "/ev/to/33/jueves.mp3",		fecha: `${year}-11-20` },
/*	Noviembre	*/	{ nombre: "Ordinario, Semana XXXIII, Viernes",		archivo: "/ev/to/33/viernes.mp3",		fecha: `${year}-11-21` },
/*	Noviembre	*/	{ nombre: "Ordinario, Semana XXXIII, Sabado",		archivo: "/ev/to/33/sabado.mp3",		fecha: `${year}-11-22` },

/*	Noviembre	*/	{ nombre: "Cristo Rey, Domingo de la Semana XXXIV",	archivo: "/ev/to/34/domingo.mp3",		fecha: `${year}-11-23` },
/*	Noviembre	*/	{ nombre: "Ordinario, Semana XXXIV, Lunes",			archivo: "/ev/to/34/lunes.mp3",			fecha: `${year}-11-24` },
/*	Noviembre	*/	{ nombre: "Ordinario, Semana XXXIV, Martes",		archivo: "/ev/to/34/martes.mp3",		fecha: `${year}-11-25` },
/*	Noviembre	*/	{ nombre: "Ordinario, Semana XXXIV, Miercoles",		archivo: "/ev/to/34/miercoles.mp3",		fecha: `${year}-11-26` },
/*	Noviembre	*/	{ nombre: "Ordinario, Semana XXXIV, Jueves",		archivo: "/ev/to/34/jueves.mp3",		fecha: `${year}-11-27` },
/*	Noviembre	*/	{ nombre: "Ordinario, Semana XXXIV, Viernes",		archivo: "/ev/to/34/viernes.mp3",		fecha: `${year}-11-28` },
/*	Noviembre	*/	{ nombre: "Ordinario, Semana XXXIV, Sabado",		archivo: "/ev/to/34/sabado.mp3",		fecha: `${year}-11-29` },

/*	Noviembre	*/	{ nombre: "Adviento, Semana I, Domingo",			archivo: "/ev/ta/1/domingo.mp3",		fecha: `${year}-11-30` },
/*	Diciembre	*/	{ nombre: "Adviento, Semana I, Lunes",				archivo: "/ev/ta/1/lunes.mp3",			fecha: `${year}-12-01` },
/*	Diciembre	*/	{ nombre: "Adviento, Semana I, Martes",				archivo: "/ev/ta/1/martes.mp3",			fecha: `${year}-12-02` },
/*	Diciembre	*/	{ nombre: "Adviento, Semana I, Miercoles",			archivo: "/ev/ta/1/miercoles.mp3",		fecha: `${year}-12-03` },
/*	Diciembre	*/	{ nombre: "Adviento, Semana I, Jueves",				archivo: "/ev/ta/1/jueves.mp3",			fecha: `${year}-12-04` },
/*	Diciembre	*/	{ nombre: "Adviento, Semana I, Viernes",			archivo: "/ev/ta/1/viernes.mp3",		fecha: `${year}-12-05` },
/*	Diciembre	*/	{ nombre: "Adviento, Semana I, Sabado",				archivo: "/ev/ta/1/sabado.mp3",			fecha: `${year}-12-06` },

/*	Diciembre	*/	{ nombre: "Adviento, Semana II, Domingo",			archivo: "/ev/ta/2/domingo.mp3",		fecha: `${year}-12-07` },
/*	Diciembre	*/	{ nombre: "Adviento, Semana II, Lunes",				archivo: "/ev/ta/2/lunes.mp3",			fecha: `${year}-12-08` },
/*	Diciembre	*/	{ nombre: "Adviento, Semana II, Martes",			archivo: "/ev/ta/2/martes.mp3",			fecha: `${year}-12-09` },
/*	Diciembre	*/	{ nombre: "Adviento, Semana II, Miercoles",			archivo: "/ev/ta/2/miercoles.mp3",		fecha: `${year}-12-10` },
/*	Diciembre	*/	{ nombre: "Adviento, Semana II, Jueves",			archivo: "/ev/ta/2/jueves.mp3",			fecha: `${year}-12-11` },
/*	Diciembre	*/	{ nombre: "Adviento, Semana II, Viernes",			archivo: "/ev/ta/2/viernes.mp3",		fecha: `${year}-12-12` },
/*	Diciembre	*/	{ nombre: "Adviento, Semana II, Sabado",			archivo: "/ev/ta/2/sabado.mp3",			fecha: `${year}-12-13` },

/*	Diciembre	*/	{ nombre: "Adviento, Semana III, Domingo",			archivo: "/ev/ta/3/domingo.mp3",		fecha: `${year}-12-14` },
/*	Diciembre	*/	{ nombre: "Adviento, Semana III, Lunes",			archivo: "/ev/ta/3/lunes.mp3",			fecha: `${year}-12-15` },
/*	Diciembre	*/	{ nombre: "Adviento, Semana III, Martes",			archivo: "/ev/ta/3/martes.mp3",			fecha: `${year}-12-16` },
/*	Diciembre	*/	{ nombre: "Adviento, Semana III, Miercoles",		archivo: "/ev/ta/3/miercoles.mp3",		fecha: `${year}-12-17` },
/*	Diciembre	*/	{ nombre: "Adviento, Semana III, Jueves",			archivo: "/ev/ta/3/jueves.mp3",			fecha: `${year}-12-18` },
/*	Diciembre	*/	{ nombre: "Adviento, Semana III, Viernes",			archivo: "/ev/ta/3/viernes.mp3",		fecha: `${year}-12-19` },
/*	Diciembre	*/	{ nombre: "Adviento, Semana III, Sabado",			archivo: "/ev/ta/3/sabado.mp3",			fecha: `${year}-12-20` },

/*	Diciembre	/	{ nombre: "Adviento, Semana IV, Domingo",			archivo: "/ev/ta/4/domingo.mp3",		fecha: `${year}-12-21` }, */
/*	Diciembre	/	{ nombre: "Adviento, Semana IV, Lunes",				archivo: "/ev/ta/4/lunes.mp3",			fecha: `${year}-12-22` }, */
/*	Diciembre	/	{ nombre: "Adviento, Semana IV, Martes",			archivo: "/ev/ta/4/martes.mp3",			fecha: `${year}-12-23` }, */
/*	Diciembre	/	{ nombre: "Adviento, Semana IV, Miercoles",			archivo: "/ev/ta/4/miercoles.mp3",		fecha: `${year}-12-24` }, */

/*	Diciembre	*/	{ nombre: "Adviento, 21 de Diciembre",	    		archivo: "/ev/ta/4/21dic.mp3",		    fecha: `${year}-12-21` },
/*	Diciembre	*/	{ nombre: "Adviento, 22 de Diciembre",	    		archivo: "/ev/ta/4/22dic.mp3",	    	fecha: `${year}-12-22` },
/*	Diciembre	*/	{ nombre: "Adviento, 23 de Diciembre",	    		archivo: "/ev/ta/4/23dic.mp3",		    fecha: `${year}-12-23` },
/*	Diciembre	*/	{ nombre: "Adviento, 24 de Diciembre",	    		archivo: "/ev/ta/4/24dic.mp3",	    	fecha: `${year}-12-24` },
/*	Diciembre	*/	{ nombre: "Navidad, Semana I, Jueves",				archivo: "/ev/tn/25-NocheBuena.mp3",	fecha: `${year}-12-25` },
/*	Diciembre	*/	{ nombre: "Navidad, Semana I, Viernes",				archivo: "/ev/tn/viernes.mp3",			fecha: `${year}-12-26` },
/*	Diciembre	*/	{ nombre: "Navidad, San Juan Apostol",				archivo: "/ev/tn/27-sJuanAp.mp3",		fecha: `${year}-12-27` },
/*	Diciembre	* /	{ nombre: "Navidad, San Esteban",					archivo: "/ev/tn/28-SanEsteban.mp3",	fecha: `${year}-12-28` },*/

/*	Diciembre	*/	{ nombre: "Navidad, Domingo de la Sagrada Familia",	archivo: "/ev/tn/SagradaFamilia.mp3",	fecha: `${year}-12-28` },
/*	Diciembre	*/	{ nombre: "Navidad, Semana II, Lunes",				archivo: "/ev/tn/lunes.mp3",			fecha: `${year}-12-29` },
/*	Diciembre	*/	{ nombre: "Navidad, Semana II, Martes",				archivo: "/ev/tn/martes.mp3",			fecha: `${year}-12-30` },
/*	Diciembre	*/	{ nombre: "Navidad, 31 de Diciembre",				archivo: "/ev/tn/31-diciembre.mp3",		fecha: `${year}-12-31` },

];

function obtenerFechaHoy() {
    const hoy = new Date();
    const año = hoy.getFullYear();
    const mes = String(hoy.getMonth() + 1).padStart(2, '0');
    const dia = String(hoy.getDate()).padStart(2, '0');
    return `${año}-${mes}-${dia}`;
}

function cargarAudioPorDefecto() {
    const fechaHoy = obtenerFechaHoy();
    console.log("Fecha de hoy:", fechaHoy);

    const audioHoy = audios.find(audio => audio.fecha === fechaHoy);
    console.log("Audio encontrado:", audioHoy);

    const reproductor = document.getElementById('audio-player');
    const fuenteAudio = document.getElementById('audio-source');
    const tituloAudio = document.getElementById('titulo-audio');

    if (audioHoy) {
        console.log("Cargando audio:", audioHoy.archivo);
        tituloAudio.textContent = "Tiempo " + audioHoy.nombre; // Aquí agregas "Tiempo" delante del nombre
        fuenteAudio.src = audioHoy.archivo;
        reproductor.load();
    } else {
        console.log("No hay audio para hoy");
        tituloAudio.textContent = "Tiempo No hay audio para hoy"; // Aquí también agregas "Tiempo"
        fuenteAudio.src = "";
        reproductor.load();
    }
}

window.onload = cargarAudioPorDefecto;
