import * as React from "react"

const data = [{
	home: {
		title: 'Évora da Ibéria',
		text: {
			en: <div className="sub-section">
						<p className="subTitle">UI & HMI Designer</p>
						<p className="text">I love building minimalist and objective interfaces to different users, from industrial operators and their HMIs to web users.</p>
					</div>,
			es: <div className="sub-section">
						<p className="subTitle">Diseñadora de UI & Diseñadora de HMI</p>
						<p className="text">Me encanta hacer pantallas minimalistas y objetivas para diferentes usuarios, desde operadores industriales y sus HMIs hasta usuarios web.</p>
					</div>,
			pt: <div className="sub-section">
						<p className="subTitle">UI & HMI Designer</p>
						<p className="text">Amo fazer telas minimalistas e objetivas para diferentes usuários, desde operadores industriais e suas IHMs até usuários de aplicações web.</p>
					</div>
		}
	},
	about: {
		title: {
			en: 'About Me',
			es: 'Acerca Mí',
			pt: 'Sobre Mim',
		},
		text: {
			en: <div className="sub-section">
						<div className="textAboutMe">
							<p className="text" style={{textAlign: 'left'}}>Nowadays I’ve been doing a lot of HMIs, that’s why I started a graduation course in Control and Automation Engineering, aiming to improve my knowledge about hardwares and systems used in the industrial field, by consequence improving the operator’s journey while using the interface. Moreover I also have the UX/UI - Design Certification by Google. Despite some differences between UI Design for web and for industrial purposes, after this course I’ve been bringing some aspects of a good UI Design to SCADA design systems.</p>
							<p className="text" style={{textAlign: 'left'}}>I’m a Laboratoria Front-end Bootcamp Alumnae, which aims to develop technical and soft skills of women who wants to change their career into technology. I worked for a while as a front-end developer, but now my focus is UI design for web and industrial systems.</p>
						</div>
					</div>,
			es: <div className="sub-section">
						<div className="textAboutMe">
							<p className="text" style={{textAlign: 'left'}}>Ultimamente he trabajado mucho con HMIs, entonces estoy haciendo un post-grado en Inginiería de Control y Automación, con el objetivo de mejorar mis conocimientos acerca del hardware y de los sistemas usados en el área industrial, lo que hace con que la jornada del operador con las interfaces que hago estén alineadas con su realidad. Además de eso, también tengo la certificación de Google en UX/UI - Design. Pese que sean universos diferentes, después de este curso he traído muchas ideas de un buen diseño de interfaz de usuario para los HMIs en el área industrial.</p>
							<p className="text" style={{textAlign: 'left'}}>Fue alumna del bootcamp de front-end de Laboratoria, lo cual tiene como objetivo desarrollar habilidades técnicas y emocionales de mujeres que quieren cambiar para carreras en tecnología. Trabajé un tiempo como desarrolladora web, pero ahora mi enfoque es diseño para interfaces web e industriales.</p>
						</div>
					</div>,
			pt: <div className="sub-section">
						<div className="textAboutMe">
							<p className="text" style={{textAlign: 'left'}}>Atualmente tenho feito muitas IHMs, então resolvi fazer uma pós-graduação (Master In Business Engineering - MBE) em Engenharia de Controle e Automação, com o objetivo de melhorar meu conhecimento sobre hardwares e sistemas usados na área industrial, o que faz com que a jornada do operador esteja alinhada com sua realidade. Além disso, tenho certificação Google em UX/UI - Design. Apesar de serem mundos diferentes, despois deste curso tenho introduzido muitos aspectos de um bom design de UI para as IHMs na área industrial.</p> 
							<p className="text" style={{textAlign: 'left'}}>Fui uma das alunas da terceira turma do bootcamp Front-end da Laboratória no Brasil, o qual tem como objetivo o desenvolvimento, tanto de forma técnica quanto emocional, de mulheres que desejam mudar de carreira para área tecnológica. Trabalhei um tempo como front-end mas agora foco em UI Design para web e sistemas industriais.</p>
						</div>
				</div>,
		}
	},
	work: {
		title: {
			en: 'Work',
			es: '¿Qué hice hasta ahora?',
			pt: 'Meus Trabalhos',
		},
		text: {
			en: 'english',
			es: 'español',
			pt: 'pt'
		},
	tools: {
		title: {
			en: 'Tools I Use',
			es: 'Herramientas Que Uso',
			pt: 'Ferramentas Que Uso',
		},
		text: {
			en: 'english',
			es: 'español',
			pt: 'pt'
	}}}}];

export default data;
