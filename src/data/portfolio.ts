export const profile = {
	name: "Luis Carlos Lino",
	role: "Backend Developer",
	tagline: "Desarrollador Backend con Python y Django, automatización, despliegue y ciberseguridad.",
	email: "hello@luislino.dev",
	location: "Perú",
	bio: "Estudiante de Desarrollo de Software con enfoque en backend, automatización y ciberseguridad. Desarrollo aplicaciones web con Python y Django, diseño APIs y exploro prácticas de seguridad para crear soluciones seguras, escalables y preparadas para producción. Me motiva construir herramientas que resuelvan problemas reales y participar en proyectos y hackathons para seguir aprendiendo.",
};

export const socialLinks = [
	{ name: "GitHub", url: "https://github.com/luislinodev/", icon: "github" as const },
	{ name: "LinkedIn", url: "https://linkedin.com/in/luislinodev/", icon: "linkedin" as const },
	{ name: "Email", url: "mailto:hello@luislino.dev", icon: "email" as const },
	{
		name: "WhatsApp",
		url: "https://wa.me/51971865102?text=Hola%2C%20te%20escribo%20para%20consultar%20sobre%20un%20proyecto.",
		icon: "whatsapp" as const,
	},
];

export const skills = [
	{
		category: "Backend",
		items: ["Python", "Django", "PostgreSQL"],
	},
	{
		category: "Infraestructura",
		items: ["Docker", "Linux", "VPS (Ubuntu)", "Tailscale", "Hyper-V", "Cloudflare Pages"],
	},
	{
		category: "Seguridad",
		items: ["Burp Suite", "Nmap", "SQLMap", "OWASP Top 10"],
	},
	{
		category: "Herramientas",
		items: ["Git", "GitHub"],
	},
];

export const projects = [
	{
		title: "VicoGuard AI",
		description:
			"Plataforma de monitoreo inteligente para aplicaciones web con detección de comportamientos sospechosos, alertas mediante Telegram e IA que traduce eventos técnicos a lenguaje natural.",
		tags: ["Python", "Django", "Telegram", "IA"],
		github: "https://github.com",
		demo: null,
	},
	{
		title: "Panel NOC para ISP",
		description:
			"Dashboard simplificado para monitorear infraestructura de proveedores de internet, con integración UISP y métricas en tiempo real.",
		tags: ["Python", "Django", "UISP", "Docker"],
		github: "https://github.com",
		demo: null,
	},
	{
		title: "Proyecto Hackathon",
		description:
			"Solución desarrollada en competencia de hackathon con resultado destacado. El reto técnico consistió en construir una aplicación funcional bajo restricciones de tiempo, integrando backend, APIs y despliegue en un entorno de producción simulado.",
		tags: ["Python", "Django", "Docker", "PostgreSQL"],
		github: "https://github.com",
		demo: null,
	},
];

export const navLinks = [
	{ label: "Inicio", href: "#inicio" },
	{ label: "Sobre mí", href: "#sobre-mi" },
	{ label: "Habilidades", href: "#habilidades" },
	{ label: "Proyectos", href: "#proyectos" },
	{ label: "Contacto", href: "#contacto" },
];

export const stats = [
	{ value: "Python", label: "Especialización backend" },
	{ value: "Django", label: "Framework principal" },
	{ value: "OWASP", label: "Enfoque en seguridad" },
];
