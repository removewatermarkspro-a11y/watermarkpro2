export interface Testimonial {
    name: string
    role: string
    text: string
    avatar: string
}

// Pool of reliable Unsplash photos (20 total)
const avatarPool = [
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces", // Man 1
    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=faces", // Man 2
    "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=150&h=150&fit=crop&crop=faces", // Man 3
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=faces", // Man 4
    "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=faces", // Man 5
    "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=150&h=150&fit=crop&crop=faces", // Man 6
    "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=150&h=150&fit=crop&crop=faces", // Man 7
    "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=150&h=150&fit=crop&crop=faces", // Man 8
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=faces", // Man 9
    "https://images.unsplash.com/photo-1463453091185-61582044d556?w=150&h=150&fit=crop&crop=faces", // Man 10
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=faces", // Woman 1
    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=150&h=150&fit=crop&crop=faces", // Woman 2
    "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=faces", // Woman 3
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces", // Woman 4
    "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=faces", // Woman 5
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=faces", // Woman 6
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=faces", // Woman 7
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=faces", // Woman 8
    "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=150&h=150&fit=crop&crop=faces", // Woman 9
    "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=150&h=150&fit=crop&crop=faces"  // Woman 10
]

export const testimonialDataEs: Record<string, Testimonial[]> = {
    // Homepage - Watermark Remover  
    'home': [
        {
            name: "Carlos Martínez",
            role: "Editor de Video",
            text: "Uso muchos clips de TikTok para ediciones, así que encontrar un buen eliminador de marcas de agua de TikTok era importante. Esta herramienta elimina el logo de TikTok limpiamente y mucho más rápido que otras aplicaciones que he probado. Definitivamente recomendado.",
            avatar: avatarPool[0]
        },
        {
            name: "Miguel Ángel Torres",
            role: "Cineasta",
            text: "Necesitaba eliminar marcas de agua de videos antiguos, y los resultados fueron increíbles. El video quedó intacto y el proceso fue súper rápido. Genial para creadores de contenido.",
            avatar: avatarPool[1]
        },
        {
            name: "Daniel Rodríguez",
            role: "Gerente de Redes Sociales",
            text: "Como alguien que edita videos diariamente, tener una herramienta confiable para eliminar marcas de agua es imprescindible. Esta eliminó el logo limpiamente y mantuvo la calidad alta, lo cual suele ser difícil de encontrar.",
            avatar: avatarPool[2]
        },
        {
            name: "Laura González",
            role: "Fotógrafa",
            text: "Esta es la primera vez que un borrador de marcas de agua no dejó manchas extrañas o puntos borrosos. Lo probé en fotos con fondos complicados y la eliminación fue impecable.",
            avatar: avatarPool[10]
        },
        {
            name: "Sofía Ramírez",
            role: "Creadora de Contenido",
            text: "Me sorprendió mucho lo bien que funciona este eliminador de marcas de agua. Necesitaba eliminar marcas de agua de fotos para un proyecto de cliente, y los resultados se veían completamente naturales.",
            avatar: avatarPool[11]
        },
        {
            name: "Ana María López",
            role: "Especialista en Marketing Digital",
            text: "La IA detrás de esta herramienta es impresionante. El eliminador de marcas de agua IA detecta la marca de agua instantáneamente y reconstruye el fondo perfectamente. Lo he usado para eliminar marcas de agua de imágenes docenas de veces.",
            avatar: avatarPool[12]
        },
        {
            name: "Roberto Sánchez",
            role: "Editor Freelance",
            text: "Vi esta herramienta mencionada en línea y decidí probarla. El eliminador de marcas de agua hizo un gran trabajo tanto en fotos como en videos. Manejó todo fácilmente.",
            avatar: avatarPool[3]
        },
        {
            name: "Carmen Díaz",
            role: "Creadora de YouTube",
            text: "No esperaba mucho, pero esta herramienta realmente puede eliminar marcas de agua de videos mejor que algunos software de pago. La interfaz es simple y los resultados se ven profesionales.",
            avatar: avatarPool[13]
        },
        {
            name: "Isabel Fernández",
            role: "Diseñadora Gráfica",
            text: "Subo muchas imágenes en línea y a veces olvido guardar los originales. El eliminador de marcas de agua de imágenes me ayudó a restaurar varias fotos importantes con precisión casi perfecta.",
            avatar: avatarPool[14]
        }
    ],

    // Auto Remove People
    'auto-remove-people': [
        {
            name: "Javier Morales",
            role: "Fotógrafo Inmobiliario",
            text: "Perfecto para eliminar personas aleatorias de fotos de propiedades. Solía pasar horas en Photoshop, pero esta IA lo hace en segundos con increíble precisión. Un cambio total para mi negocio.",
            avatar: avatarPool[4]
        },
        {
            name: "Pablo Herrera",
            role: "Blogger de Viajes",
            text: "Los lugares turísticos siempre están llenos, pero ahora puedo obtener fotos limpias sin intrusos. La IA elimina personas sin problemas mientras preserva el fondo perfectamente.",
            avatar: avatarPool[5]
        },
        {
            name: "Andrés Castro",
            role: "Fotógrafo de Paisajes",
            text: "¡Esta herramienta salvó mis fotos de vacaciones! Eliminar personas no deseadas de mis tomas de paisajes nunca ha sido tan fácil. Los resultados son tan naturales que no puedes decir que alguien estuvo allí.",
            avatar: avatarPool[6]
        },
        {
            name: "María Jiménez",
            role: "Fotógrafa de Eventos",
            text: "A veces los invitados caminan en el encuadre durante momentos importantes. Esta herramienta me permite limpiar las tomas perfectamente sin afectar a los sujetos principales. ¡Me encanta absolutamente!",
            avatar: avatarPool[18]
        },
        {
            name: "Victoria Ruiz",
            role: "Influencer de Instagram",
            text: "Obtener la toma perfecta para Instagram a menudo significa esperar a que las multitudes se despejen. ¡Ya no más! Esta IA elimina personas instantáneamente y mi feed se ve mucho más limpio ahora.",
            avatar: avatarPool[19]
        },
        {
            name: "Elena Vargas",
            role: "Fotógrafa de Arquitectura",
            text: "La fotografía arquitectónica requiere tomas limpias, sin personas. Esta herramienta ofrece resultados de grado profesional que normalmente requerirían software de edición costoso.",
            avatar: avatarPool[15]
        },
        {
            name: "Cristóbal Méndez",
            role: "Fotógrafo de Bodas",
            text: "Ocasionalmente alguien camina en el fondo durante tomas de bodas. Esta IA los elimina impecablemente, manteniendo el enfoque en la pareja. ¡Es un salvavidas!",
            avatar: avatarPool[7]
        },
        {
            name: "Valentina Ortiz",
            role: "Fotógrafa de Moda",
            text: "Las sesiones de moda callejera siempre tienen personas aleatorias en el fondo. Esta herramienta las limpia perfectamente mientras mantiene la estética urbana que quiero.",
            avatar: avatarPool[16]
        },
        {
            name: "Camila Reyes",
            role: "Fotógrafa de Productos",
            text: "Las sesiones de productos en espacios públicos solían ser desafiantes con personas pasando. Ahora puedo eliminarlas en post y obtener ese aspecto limpio y profesional cada vez.",
            avatar: avatarPool[17]
        }
    ],

    // Image Upscaler
    'image-upscaler': [
        {
            name: "Alejandro Silva",
            role: "Diseñador de Impresión",
            text: "Necesitaba ampliar logos antiguos de clientes para impresión de gran formato. Este amplificador IA mantuvo claridad y nitidez perfectas. ¡Mis impresiones se ven increíbles!",
            avatar: avatarPool[8]
        },
        {
            name: "Benjamín Navarro",
            role: "Artista Digital",
            text: "Ampliar obras de arte para exposiciones solía ser una pesadilla. Esta herramienta mejora la resolución sin perder detalle. La IA es increíblemente inteligente al preservar texturas.",
            avatar: avatarPool[9]
        },
        {
            name: "Ricardo Peña",
            role: "Gerente de E-commerce",
            text: "Nuestras fotos antiguas de productos eran de baja resolución, pero este amplificador las transformó en imágenes de alta calidad perfectas para nuestro sitio web. ¡Las ventas han mejorado gracias a mejores visuales!",
            avatar: avatarPool[0]
        },
        {
            name: "Emilia Santos",
            role: "Editora de Revista",
            text: "A veces recibimos imágenes de baja resolución de colaboradores. Este amplificador salva el día, haciéndolas listas para imprimir sin pérdida de calidad. ¡Absolutamente esencial!",
            avatar: avatarPool[10]
        },
        {
            name: "Lucía Romero",
            role: "Gerente de Marca",
            text: "Ampliar nuestras fotos vintage de marca para materiales de marketing modernos fue sin esfuerzo. La IA las mejoró bellamente mientras mantenía el aspecto auténtico intacto.",
            avatar: avatarPool[11]
        },
        {
            name: "Gabriela Cruz",
            role: "Fotógrafa de Retratos",
            text: "Me encanta este amplificador para impresiones de clientes. Mejora detalles faciales y texturas de piel perfectamente. Mis clientes están encantados con la calidad de sus retratos ampliados.",
            avatar: avatarPool[12]
        },
        {
            name: "Lucas Medina",
            role: "Desarrollador Web",
            text: "Necesitaba ampliar íconos y gráficos para un sitio web 4K. Esta herramienta entregó resultados nítidos y claros sin pixelación. ¡Perfecto para pantallas modernas de alta resolución!",
            avatar: avatarPool[1]
        },
        {
            name: "Valentina Guzmán",
            role: "Gerente de Contenido",
            text: "Nuestra biblioteca de imágenes tenía muchas fotos antiguas de baja resolución. Este amplificador IA las devolvió a la vida, ahorrándonos miles en nuevas sesiones fotográficas.",
            avatar: avatarPool[13]
        },
        {
            name: "Daniela Flores",
            role: "Directora de Arte",
            text: "Ampliar fotos vintage para una campaña retro fue sin problemas. La IA preservó el grano y el carácter mientras mejoraba dramáticamente la claridad. ¡Resultados fantásticos!",
            avatar: avatarPool[14]
        }
    ],

    // Remove Background
    'remove-background': [
        {
            name: "Guillermo Vega",
            role: "Vendedor de E-commerce",
            text: "Eliminar fondos de fotos de productos solía tomar una eternidad. Esta IA lo hace instantáneamente con detección de bordes perfecta. ¡Mis listados de productos se ven mucho más profesionales ahora!",
            avatar: avatarPool[2]
        },
        {
            name: "Eduardo Campos",
            role: "Diseñador de Redes Sociales",
            text: "Crear gráficos para redes sociales es mucho más rápido ahora. La eliminación de fondo es precisa, incluso con cabello complejo y detalles finos. ¡Cambio total!",
            avatar: avatarPool[3]
        },
        {
            name: "Mateo Aguilar",
            role: "Especialista en Marketing",
            text: "Uso esto para crear materiales promocionales diariamente. La IA elimina fondos limpiamente, facilitando colocar sujetos en cualquier telón de fondo. ¡Súper eficiente!",
            avatar: avatarPool[4]
        },
        {
            name: "Graciela Paredes",
            role: "Fotógrafa de Retratos",
            text: "Perfecto para crear fotos profesionales con fondos limpios. La detección de bordes es increíblemente precisa, incluso con cabello suelto. ¡Mis clientes aman los resultados!",
            avatar: avatarPool[15]
        },
        {
            name: "Natalia Ramos",
            role: "Diseñadora Gráfica",
            text: "Esta herramienta es esencial para mi flujo de trabajo de diseño. Eliminar fondos es instantáneo y preciso, permitiéndome enfocarme en la creatividad en lugar del enmascaramiento tedioso.",
            avatar: avatarPool[16]
        },
        {
            name: "Liliana Moreno",
            role: "Dueña de Tienda Online",
            text: "Mis fotos de productos ahora tienen ese aspecto profesional de fondo blanco. La IA maneja incluso artículos complicados como joyería y cristalería perfectamente. ¡Las ventas están arriba!",
            avatar: avatarPool[17]
        },
        {
            name: "Jacobo Núñez",
            role: "Director Creativo",
            text: "Usamos esto para presentaciones de clientes y materiales de marketing. La calidad de eliminación de fondo es sobresaliente, ahorrando a nuestro equipo innumerables horas de edición manual.",
            avatar: avatarPool[5]
        },
        {
            name: "Adriana Molina",
            role: "Blogger de Moda",
            text: "Crear collages de outfits para mi blog es tan fácil ahora. La IA elimina fondos impecablemente, haciendo que mi contenido se vea pulido y profesional.",
            avatar: avatarPool[18]
        },
        {
            name: "Carolina Ibarra",
            role: "Diseñadora de Marca",
            text: "Preparar imágenes para proyectos de marca nunca ha sido más fácil. Esta herramienta entrega recortes limpios cada vez, perfectos para logos y materiales de marketing.",
            avatar: avatarPool[19]
        }
    ],

    // Remove Object
    'remove-object': [
        {
            name: "Manuel Cortés",
            role: "Fotógrafo de Viajes",
            text: "Eliminar objetos no deseados de fotos de viajes es sin esfuerzo ahora. Líneas eléctricas, botes de basura, todo desaparece perfectamente. ¡Mi portafolio nunca se ha visto mejor!",
            avatar: avatarPool[6]
        },
        {
            name: "José Luis Rojas",
            role: "Agente Inmobiliario",
            text: "Las fotos de propiedades a menudo tienen elementos que distraen. Esta IA los elimina sin problemas, haciendo que las casas se vean en su mejor momento. ¡Mis listados se venden más rápido ahora!",
            avatar: avatarPool[7]
        },
        {
            name: "Samuel Ponce",
            role: "Fotógrafo Deportivo",
            text: "A veces el equipo o espectadores distraen de la acción. Esta herramienta los elimina perfectamente mientras mantiene a los atletas nítidos. ¡Es imprescindible!",
            avatar: avatarPool[8]
        },
        {
            name: "Emma Salazar",
            role: "Fotógrafa de Bodas",
            text: "Señales de salida, cables y otras distracciones solían arruinar tomas perfectas. Esta IA los elimina impecablemente, entregando las fotos de boda soñadas que mis clientes quieren.",
            avatar: avatarPool[10]
        },
        {
            name: "Amelia Ríos",
            role: "Fotógrafa de Naturaleza",
            text: "Eliminar basura y elementos modernos de tomas de naturaleza ayuda a preservar la belleza salvaje. Esta herramienta lo hace perfectamente, haciendo mis fotos verdaderamente inmersivas.",
            avatar: avatarPool[11]
        },
        {
            name: "Sara Mendoza",
            role: "Blogger de Comida",
            text: "La fotografía de comida requiere composiciones limpias. Esta IA elimina utensilios no deseados, migas o distracciones instantáneamente. ¡Mis fotos de comida se ven de calidad de restaurante!",
            avatar: avatarPool[12]
        },
        {
            name: "David Lara",
            role: "Fotógrafo Comercial",
            text: "Las sesiones de clientes a veces tienen desorden inevitable. Esta herramienta lo limpia perfectamente en post, entregando las imágenes prístinas que las empresas necesitan.",
            avatar: avatarPool[9]
        },
        {
            name: "Natalia Castillo",
            role: "Diseñadora de Interiores",
            text: "Eliminar muebles temporales o elementos de puesta en escena de fotos de diseño es instantáneo. La IA reconstruye fondos bellamente. ¡Perfecto para presentaciones de antes/después!",
            avatar: avatarPool[13]
        },
        {
            name: "Elena Fuentes",
            role: "Fotógrafa de Estilo de Vida",
            text: "A veces objetos aleatorios aparecen en tomas de estilo de vida. Esta IA los borra sin problemas, manteniendo el enfoque en los momentos que importan. ¡Me encanta!",
            avatar: avatarPool[14]
        }
    ],

    // Remove Text
    'remove-text': [
        {
            name: "Andrés Maldonado",
            role: "Restaurador de Imágenes",
            text: "Eliminar subtítulos antiguos y fechas de fotos vintage es mi especialidad. Esta IA lo hace impecablemente, preservando la calidad de imagen original perfectamente.",
            avatar: avatarPool[0]
        },
        {
            name: "Tomás Acosta",
            role: "Diseñador Gráfico",
            text: "A veces las fotos de stock tienen superposiciones de texto no deseadas. Esta herramienta las elimina limpiamente, dándome un lienzo en blanco para trabajar. ¡Increíblemente útil!",
            avatar: avatarPool[1]
        },
        {
            name: "Bruno Chávez",
            role: "Gerente de Redes Sociales",
            text: "Reutilizar imágenes con texto antiguo es fácil ahora. La IA borra texto perfectamente mientras mantiene el fondo intacto. ¡Mi creación de contenido es mucho más rápida!",
            avatar: avatarPool[2]
        },
        {
            name: "Laura Delgado",
            role: "Especialista en Marketing Digital",
            text: "Eliminar texto con marca de agua de imágenes licenciadas para presentaciones es sin problemas. La IA reconstruye fondos bellamente. ¡Resultados profesionales cada vez!",
            avatar: avatarPool[15]
        },
        {
            name: "Rebeca Soto",
            role: "Creadora de Contenido",
            text: "A menudo necesito eliminar subtítulos y marcas de tiempo de capturas de pantalla. Esta herramienta lo hace perfectamente, haciendo que mi contenido se vea pulido y profesional.",
            avatar: avatarPool[16]
        },
        {
            name: "Jazmín Pereira",
            role: "Editora de Fotos",
            text: "Limpiar texto de memes o anotaciones no deseadas es instantáneo con esta IA. Los resultados son sin problemas, perfectos para crear contenido fresco y limpio.",
            avatar: avatarPool[17]
        },
        {
            name: "Camilo Bravo",
            role: "Archivista",
            text: "Restaurar fotos históricas a menudo significa eliminar etiquetas y sellos antiguos. Esta IA lo hace con precisión, ayudando a preservar el patrimonio cultural bellamente.",
            avatar: avatarPool[3]
        },
        {
            name: "Nina Vera",
            role: "Diseñadora de E-learning",
            text: "Eliminar texto desactualizado de imágenes educativas ahorra tiempo y presupuesto. Esta herramienta actualiza visuales perfectamente para nuevos materiales de curso.",
            avatar: avatarPool[18]
        },
        {
            name: "Diana Montes",
            role: "Editora de Publicaciones",
            text: "A veces necesitamos eliminar texto de derechos de autor o subtítulos para reimpresiones. Esta IA lo maneja impecablemente, manteniendo la integridad de la imagen perfectamente.",
            avatar: avatarPool[19]
        }
    ],

    // Remove Watermark Video
    'remove-watermark-video': [
        {
            name: "Jorge Pacheco",
            role: "Productor de Video",
            text: "Eliminar marcas de agua de metraje de stock solía ser imposible. Esta IA lo hace sin problemas, ahorrándome toneladas de dinero en tarifas de licencia. ¡Absolutamente esencial!",
            avatar: avatarPool[4]
        },
        {
            name: "Hugo Serrano",
            role: "YouTuber",
            text: "Las marcas de agua de TikTok estaban arruinando mis videos de compilación. Esta herramienta las elimina perfectamente mientras mantiene la calidad del video intacta. ¡Mi canal ha crecido significativamente!",
            avatar: avatarPool[5]
        },
        {
            name: "Conrado Espinoza",
            role: "Estudiante de Cine",
            text: "Para mis proyectos, necesitaba metraje limpio sin marcas de agua de demostración. Esta IA las elimina impecablemente, ayudándome a crear películas de aspecto profesional con presupuesto de estudiante.",
            avatar: avatarPool[6]
        },
        {
            name: "Bella Zamora",
            role: "Influencer de Redes Sociales",
            text: "Volver a publicar contenido de TikTok para Instagram solía mostrar marcas de agua feas. Esta herramienta las elimina perfectamente, haciendo mi estrategia multiplataforma sin problemas.",
            avatar: avatarPool[10]
        },
        {
            name: "Magdalena Blanco",
            role: "Gerente de Contenido",
            text: "Nuestro equipo reutiliza contenido de video en plataformas. Eliminar marcas de agua específicas de plataforma es crucial, y esta IA lo hace perfectamente cada vez.",
            avatar: avatarPool[11]
        },
        {
            name: "Estela Cárdenas",
            role: "Coordinadora de Marketing",
            text: "Los videos de campaña a veces tienen logos o marcas de agua no deseadas. Esta herramienta los limpia bellamente, entregando resultados profesionales para presentaciones de clientes.",
            avatar: avatarPool[12]
        },
        {
            name: "Dylan Ochoa",
            role: "Editor de Video",
            text: "Eliminar marcas de tiempo y marcas de agua de metraje de clientes es parte de mi flujo de trabajo diario. Esta IA lo maneja sin esfuerzo, ahorrando horas de edición manual.",
            avatar: avatarPool[7]
        },
        {
            name: "Rubí Gallardo",
            role: "Estratega Digital",
            text: "Los videos limpios, sin marcas de agua, funcionan mejor en redes sociales. Esta herramienta nos ayuda a crear contenido pulido que impulsa el compromiso y las conversiones.",
            avatar: avatarPool[13]
        },
        {
            name: "Aria Domínguez",
            role: "Videógrafa",
            text: "A veces el metraje descargado tiene marcas de agua no deseadas. Esta IA las elimina sin problemas, permitiéndome entregar videos prístinos a clientes cada vez.",
            avatar: avatarPool[14]
        }
    ],

    // Replace Background
    'replace-background': [
        {
            name: "Isaac Velasco",
            role: "Fotógrafo de Retratos",
            text: "Reemplazar fondos para sesiones de retratos ahora es instantáneo. La IA crea recortes perfectos y mezcla sujetos naturalmente en cualquier telón de fondo. ¡Mis clientes aman la variedad!",
            avatar: avatarPool[8]
        },
        {
            name: "Caleb Figueroa",
            role: "Fotógrafo de Productos",
            text: "Crear tomas de productos de estilo de vida con diferentes fondos es sin esfuerzo. La IA maneja iluminación y sombras perfectamente. ¡Mi portafolio nunca se ha visto mejor!",
            avatar: avatarPool[9]
        },
        {
            name: "Aarón Carrillo",
            role: "Director Creativo",
            text: "El reemplazo de fondo para campañas es ultrarrápido ahora. La IA coincide tonos y perspectivas perfectamente, entregando resultados profesionales en segundos.",
            avatar: avatarPool[0]
        },
        {
            name: "Scarlett Prieto",
            role: "Fotógrafa de Moda",
            text: "Colocar modelos en ubicaciones exóticas sin viajar es posible ahora. El reemplazo de fondo es tan realista que nunca sabrías que no se filmó en el lugar!",
            avatar: avatarPool[15]
        },
        {
            name: "Violeta Sandoval",
            role: "Especialista en E-commerce",
            text: "Crear fondos de productos estacionales es instantáneo. La IA adapta fondos bellamente, ayudándonos a refrescar el aspecto de nuestra tienda para cada festividad. ¡A ventas le encanta!",
            avatar: avatarPool[16]
        },
        {
            name: "Hazel Arias",
            role: "Fotógrafa de Marca",
            text: "La consistencia en las imágenes de marca es crucial. Esta herramienta me permite reemplazar fondos uniformemente, creando una identidad visual cohesiva para todos los clientes.",
            avatar: avatarPool[17]
        },
        {
            name: "Blake Quintero",
            role: "Diseñador Publicitario",
            text: "Probar diferentes conceptos de fondo para anuncios es sin esfuerzo. La IA genera variaciones de aspecto natural instantáneamente, acelerando nuestro proceso creativo dramáticamente.",
            avatar: avatarPool[1]
        },
        {
            name: "Aurora Cabrera",
            role: "Diseñadora de Redes Sociales",
            text: "Crear contenido social temático es mucho más rápido. La herramienta de reemplazo de fondo se adapta perfectamente a las tendencias, manteniendo nuestro feed fresco y atractivo.",
            avatar: avatarPool[18]
        },
        {
            name: "Luna Valdez",
            role: "Merchandiser Visual",
            text: "La puesta en escena virtual con reemplazo de fondo ha transformado nuestras presentaciones en línea. Los productos se ven increíbles en cualquier entorno, ¡aumentando la confianza del cliente y las ventas!",
            avatar: avatarPool[19]
        }
    ],

    // Watermark Remover (alias for home)
    'watermark-remover': [
        {
            name: "Carlos Martínez",
            role: "Editor de Video",
            text: "Uso muchos clips de TikTok para ediciones, así que encontrar un buen eliminador de marcas de agua de TikTok era importante. Esta herramienta elimina el logo de TikTok limpiamente y mucho más rápido que otras aplicaciones que he probado. Definitivamente recomendado.",
            avatar: avatarPool[0]
        },
        {
            name: "Miguel Ángel Torres",
            role: "Cineasta",
            text: "Necesitaba eliminar marcas de agua de videos antiguos, y los resultados fueron increíbles. El video quedó intacto y el proceso fue súper rápido. Genial para creadores de contenido.",
            avatar: avatarPool[1]
        },
        {
            name: "Daniel Rodríguez",
            role: "Gerente de Redes Sociales",
            text: "Como alguien que edita videos diariamente, tener una herramienta confiable para eliminar marcas de agua es imprescindible. Esta eliminó el logo limpiamente y mantuvo la calidad alta, lo cual suele ser difícil de encontrar.",
            avatar: avatarPool[2]
        },
        {
            name: "Laura González",
            role: "Fotógrafa",
            text: "Esta es la primera vez que un borrador de marcas de agua no dejó manchas extrañas o puntos borrosos. Lo probé en fotos con fondos complicados y la eliminación fue impecable.",
            avatar: avatarPool[10]
        },
        {
            name: "Sofía Ramírez",
            role: "Creadora de Contenido",
            text: "Me sorprendió mucho lo bien que funciona este eliminador de marcas de agua. Necesitaba eliminar marcas de agua de fotos para un proyecto de cliente, y los resultados se veían completamente naturales.",
            avatar: avatarPool[11]
        },
        {
            name: "Ana María López",
            role: "Especialista en Marketing Digital",
            text: "La IA detrás de esta herramienta es impresionante. El eliminador de marcas de agua IA detecta la marca de agua instantáneamente y reconstruye el fondo perfectamente. Lo he usado para eliminar marcas de agua de imágenes docenas de veces.",
            avatar: avatarPool[12]
        },
        {
            name: "Roberto Sánchez",
            role: "Editor Freelance",
            text: "Vi esta herramienta mencionada en línea y decidí probarla. El eliminador de marcas de agua hizo un gran trabajo tanto en fotos como en videos. Manejó todo fácilmente.",
            avatar: avatarPool[3]
        },
        {
            name: "Carmen Díaz",
            role: "Creadora de YouTube",
            text: "No esperaba mucho, pero esta herramienta realmente puede eliminar marcas de agua de videos mejor que algunos software de pago. La interfaz es simple y los resultados se ven profesionales.",
            avatar: avatarPool[13]
        },
        {
            name: "Isabel Fernández",
            role: "Diseñadora Gráfica",
            text: "Subo muchas imágenes en línea y a veces olvido guardar los originales. El eliminador de marcas de agua de imágenes me ayudó a restaurar varias fotos importantes con precisión casi perfecta.",
            avatar: avatarPool[14]
        }
    ]
}
