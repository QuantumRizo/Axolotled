export const axolotlData = {
    contact: {
        phone1: "(55) 1527-3806",
        phone2: "(55) 3253-9481",
        email: "axolotl.e3d@gmail.com",
        instagram: "https://www.instagram.com/axolotl._.ed"
    },
    services3D: [
        {
            title: "Impresión en Resina",
            description: "SLA, tecnología de impresión 3D que usa luz UV para curar resina líquida fotopolimerizable capa por capa para crear un objeto 3D."
        },
        {
            title: "Impresión en Filamento",
            description: "FDM, tecnología de impresión 3D que utiliza filamento termoplástico para construir objetos capa por capa."
        },
        {
            title: "Diseño y Modelado 3D",
            description: "Modelado CAD 3D y 2D: Desde modificar un diseño pre-existente hasta diseñar un producto desde cero."
        },
        {
            title: "Pintura y Personalizado",
            description: "Las piezas se pintan a mano de acuerdo con los requerimientos específicos."
        }
    ],
    resins: [
        {
            name: "Resina Básica",
            shoreD: "80-85",
            elongation: "20-30%",
            usage: "Es ideal para modelos de alta precisión que no requieren resistencia a impactos o flexibilidad. Es la opción más económica y común para prototipos, miniaturas, figuras de acción y piezas estéticas."
        },
        {
            name: "ABS Tough",
            shoreD: "75-80",
            elongation: "20-30%",
            usage: "Perfecta para prototipos funcionales, carcasas de productos electrónicos, piezas que necesitan ser ensambladas y cualquier objeto que requiera mayor resistencia a impactos y durabilidad."
        },
        {
            name: "Conjure Rigid",
            shoreD: "+90",
            elongation: "1%",
            usage: "Su alta rigidez la hace ideal para piezas que requieren una estructura sólida y no deben deformarse, como herramental, plantillas de montaje, prototipos de ingeniería de precisión."
        },
        {
            name: "Resina PP",
            shoreD: "Variable",
            elongation: "100-600%",
            usage: "Ideal para aplicaciones que requieren alta resistencia a la fatiga y a los impactos, como bisagras vivas, carcasas y piezas automotrices."
        },
        {
            name: "Resina Axomix",
            shoreD: "80",
            elongation: "40%",
            usage: "Utilizada para prototipos con necesidades específicas de alta dureza y elasticidad. Mezcla experimental con resultados óptimos."
        },
        {
            name: "High Temperature",
            shoreD: "+90",
            elongation: "1%",
            extra: "HDT +200°C",
            usage: "Perfecta para aplicaciones expuestas al calor, moldes de inyección, pruebas de temperatura o piezas para vulcanizado."
        },
        {
            name: "Resina Flexible Común",
            shoreA: "60-70",
            elongation: "50-80%",
            usage: "Objetos que necesitan ser comprimidos o doblados, como juntas, sellos, mangos ergonómicos, soportes o suelas."
        },
        {
            name: "ABS Ultra Flexible",
            shoreA: "39",
            elongation: "+100%",
            usage: "Ideal para piezas que necesitan gran flexibilidad y sensación gomosa. Juntas tóricas, amortiguadores, protectores."
        }
    ],
    filaments: [
        {
            name: "PLA (Ácido Poliláctico)",
            shoreD: "80-87",
            elongation: "1-5%",
            usage: "Ideal para prototipos, modelos estéticos, figuras y miniaturas. No soporta alto estrés mecánico o altas temperaturas."
        },
        {
            name: "PETG",
            shoreD: "75-80",
            elongation: "15-20%",
            usage: "Excelente alternativa al PLA para prototipos funcionales, carcasas y piezas de uso diario. Resistencia a impactos y humedad."
        },
        {
            name: "TPU (Flexible)",
            shoreA: "60-90",
            elongation: "300-600%",
            usage: "Material perfecto para piezas flexibles o gomosas como suelas de zapatos, fundas de teléfono, juntas y ruedas."
        },
        {
            name: "ABS",
            shoreD: "75-80",
            elongation: "10-25%",
            usage: "Conocido por su resistencia y durabilidad. Ideal para piezas mecánicas, automotrices y objetos que requieren resistencia al calor."
        }
    ],
    pricing: {
        sizes: {
            small: "Máximo 84 mm",
            medium: "85 mm a 169 mm",
            large: "170 mm a 250 mm"
        },
        printing: [
            { material: "Resina Básica", small: 300, medium: 510, large: 720 },
            { material: "ABS Tough", small: 400, medium: 680, large: 960 },
            { material: "Flexible Básica", small: 500, medium: 850, large: 1200 },
            { material: "Conjure Rigid (Industrial)", small: 900, medium: 1530, large: 2160 },
            { material: "Polipropileno (Industrial)", small: 900, medium: 1530, large: 2160 },
            { material: "Ultra Flexible (Industrial)", small: 1000, medium: 1700, large: 2400 },
            { material: "Axomix (Industrial)", small: 1000, medium: 1700, large: 2400 },
            { material: "High Temperature", small: 1500, medium: 2550, large: 3600 }
        ],
        painting: [
            { type: "Pintura Sencilla - Resina", small: 100, medium: 175, large: 250 },
            { type: "Pintura Sencilla - Filamento", small: 150, medium: 225, large: 300 },
            { type: "Pintura Detallada - Resina", small: 200, medium: 350, large: 500 },
            { type: "Pintura Detallada - Filamento", small: 300, medium: 450, large: 600 },
            { type: "Cobertura de Resina (para Filamento)", small: 400, medium: 700, large: 1000 }
        ]
    },
    discounts: [
        { description: "5 a 10 piezas iguales o del mismo material", percent: "10%" },
        { description: "Más de 10 piezas iguales o del mismo material", percent: "15%" }
    ]
};
