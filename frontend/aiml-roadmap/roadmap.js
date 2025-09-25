const roadmap = [
  {
    month: "Mes 1",
    title: "Fundamentos de Python y entornos",
    goals: [
      "Instala tu entorno (VS Code, Git, Conda) y domina los fundamentos del lenguaje",
      "Resuelve ejercicios diarios para interiorizar sintaxis, funciones y estructuras de datos",
      "Automatiza tareas simples para ganar confianza práctica"
    ],
    sources: ["p4e", "automate"]
  },
  {
    month: "Mes 2",
    title: "Matemáticas esenciales",
    goals: [
      "Repasa álgebra lineal aplicada a representaciones vectoriales",
      "Comprende derivadas, gradientes y optimización básica",
      "Conecta la teoría con ejemplos en notebooks"
    ],
    sources: ["mit_linear", "3b1b"]
  },
  {
    month: "Mes 3",
    title: "Probabilidad y estadística para ML",
    goals: [
      "Domina distribuciones, inferencia y estimadores",
      "Aprende a formular hipótesis y validarlas experimentalmente",
      "Implementa simulaciones sencillas para reforzar intuiciones"
    ],
    sources: ["khan_stats", "probml"]
  },
  {
    month: "Mes 4",
    title: "Manipulación y análisis de datos",
    goals: [
      "Profundiza en pandas, visualización y limpieza",
      "Practica pipelines reproducibles y notebooks bien documentados",
      "Participa en micro-retos con datasets reales"
    ],
    sources: ["pandas", "kaggle"]
  },
  {
    month: "Mes 5",
    title: "Algoritmos clásicos de Machine Learning",
    goals: [
      "Estudia modelos supervisados (regresión, árboles, SVM)",
      "Aprende técnicas de evaluación y validación cruzada",
      "Entrega tu primer proyecto end-to-end"
    ],
    sources: ["hands_on_ml", "ml_specialization"]
  },
  {
    month: "Mes 6",
    title: "Competencias y proyectos",
    goals: [
      "Participa en competiciones de Kaggle para consolidar habilidades",
      "Documenta experimentos y usa control de versiones",
      "Colabora con la comunidad y recibe feedback"
    ],
    sources: ["kaggle", "paperswithcode"]
  },
  {
    month: "Mes 7",
    title: "Deep Learning aplicado",
    goals: [
      "Comprende redes neuronales profundas y entrenamiento",
      "Experimenta con CNNs y RNNs en casos prácticos",
      "Implementa proyectos con PyTorch y TensorFlow"
    ],
    sources: ["fastai", "dl_specialization"]
  },
  {
    month: "Mes 8",
    title: "Grandes modelos de lenguaje y aplicaciones",
    goals: [
      "Aprende sobre transformers, embeddings y fine-tuning",
      "Construye prototipos con APIs y modelos open source",
      "Explora buenas prácticas de evaluación y seguridad"
    ],
    sources: ["huggingface_course", "openai_cookbook"]
  },
  {
    month: "Mes 9",
    title: "MLOps y sistemas de producción",
    goals: [
      "Diseña pipelines de experimentación y versionado",
      "Automatiza tests, monitoreo y despliegues",
      "Integra herramientas de orquestación en la nube"
    ],
    sources: ["madewithml", "gcp_mlops"]
  },
  {
    month: "Mes 10",
    title: "Producto, escalabilidad y equipos",
    goals: [
      "Comprende el ciclo de vida completo de modelos en producción",
      "Aplica patrones de arquitectura y buenas prácticas de ingeniería",
      "Ejecuta retrospectivas técnicas y define métricas de negocio"
    ],
    sources: ["fsdl", "madewithml"]
  },
  {
    month: "Mes 11",
    title: "Investigación aplicada y especialización",
    goals: [
      "Sigue papers recientes y reproducciones",
      "Profundiza en un subcampo (visión, NLP, agentes)",
      "Comparte aprendizajes en blogs o charlas"
    ],
    sources: ["paperswithcode", "the_batch"]
  },
  {
    month: "Mes 12",
    title: "Portafolio, entrevistas y networking",
    goals: [
      "Refina tu portafolio con estudios de caso claros",
      "Practica entrevistas técnicas y de diseño",
      "Amplía red profesional y busca mentores"
    ],
    sources: ["interview_query", "kaggle"]
  }
];

const sources = {
  p4e: {
    name: "Python for Everybody (Coursera)",
    description: "Especialización enfocada en fundamentos prácticos de Python y acceso a datos.",
    url: "https://www.coursera.org/specializations/python"
  },
  automate: {
    name: "Automate the Boring Stuff with Python",
    description: "Libro gratuito para automatizar tareas y practicar Python en proyectos reales.",
    url: "https://automatetheboringstuff.com/"
  },
  mit_linear: {
    name: "MIT OCW: Linear Algebra (18.06)",
    description: "Curso clásico de álgebra lineal de Gilbert Strang con apuntes y ejercicios.",
    url: "https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/"
  },
  "3b1b": {
    name: "3Blue1Brown: Essence of Linear Algebra",
    description: "Serie visual que explica la intuición detrás de los espacios vectoriales y transformaciones.",
    url: "https://www.3blue1brown.com/topics/linear-algebra"
  },
  khan_stats: {
    name: "Khan Academy: Statistics and probability",
    description: "Ruta interactiva para cimentar estadística descriptiva, inferencia y probabilidad.",
    url: "https://www.khanacademy.org/math/statistics-probability"
  },
  probml: {
    name: "Probabilistic Machine Learning: An Introduction",
    description: "Libro moderno que conecta estadística con modelos probabilísticos para ML.",
    url: "https://probml.github.io/pml-book/book1.html"
  },
  pandas: {
    name: "Pandas User Guide",
    description: "Documentación oficial para manipulación de datos tabulares y pipelines reproducibles.",
    url: "https://pandas.pydata.org/docs/user_guide/index.html"
  },
  kaggle: {
    name: "Kaggle Learn & Competitions",
    description: "Microcursos aplicados y desafíos reales para reforzar habilidades de ciencia de datos.",
    url: "https://www.kaggle.com/learn"
  },
  hands_on_ml: {
    name: "Hands-On Machine Learning (O'Reilly)",
    description: "Guía práctica para dominar algoritmos clásicos y flujos de trabajo con scikit-learn.",
    url: "https://www.oreilly.com/library/view/hands-on-machine-learning/9781098125967/"
  },
  ml_specialization: {
    name: "Machine Learning Specialization (DeepLearning.AI)",
    description: "Programa de Andrew Ng centrado en modelos supervisados, redes y aprendizaje automático.",
    url: "https://www.coursera.org/specializations/machine-learning-introduction"
  },
  fastai: {
    name: "fast.ai Practical Deep Learning for Coders",
    description: "Curso intensivo que prioriza proyectos de deep learning aplicados desde el primer día.",
    url: "https://course.fast.ai/"
  },
  dl_specialization: {
    name: "Deep Learning Specialization (DeepLearning.AI)",
    description: "Serie de cursos para dominar redes profundas, optimización y secuencias.",
    url: "https://www.coursera.org/specializations/deep-learning"
  },
  huggingface_course: {
    name: "Hugging Face: NLP Course",
    description: "Capacitación gratuita para dominar transformers y despliegue de modelos de lenguaje.",
    url: "https://huggingface.co/learn/course/chapter1/1"
  },
  openai_cookbook: {
    name: "OpenAI Cookbook",
    description: "Recetario técnico con patrones para construir aplicaciones sobre modelos fundacionales.",
    url: "https://cookbook.openai.com/"
  },
  madewithml: {
    name: "Made With ML: MLOps Course",
    description: "Hoja de ruta práctica para construir sistemas ML robustos de extremo a extremo.",
    url: "https://madewithml.com/courses/mlops/"
  },
  gcp_mlops: {
    name: "Google Cloud: MLOps Fundamentals",
    description: "Laboratorios guiados para industrializar modelos usando herramientas de Google Cloud.",
    url: "https://www.cloudskillsboost.google/course_templates/536"
  },
  fsdl: {
    name: "Full Stack Deep Learning",
    description: "Bootcamp que cubre el ciclo completo de productos de deep learning en producción.",
    url: "https://fullstackdeeplearning.com/"
  },
  paperswithcode: {
    name: "Papers with Code",
    description: "Repositorio colaborativo para seguir papers, código y benchmarks de vanguardia.",
    url: "https://paperswithcode.com/"
  },
  the_batch: {
    name: "The Batch (DeepLearning.AI)",
    description: "Newsletter semanal para mantenerse actualizado con avances y tendencias del sector.",
    url: "https://www.deeplearning.ai/the-batch/"
  },
  interview_query: {
    name: "Interview Query",
    description: "Banco de preguntas y casos prácticos para entrevistas de ciencia de datos y ML.",
    url: "https://www.interviewquery.com/"
  }
};

const timelineContainer = document.querySelector(".timeline");
const referencesContainer = document.querySelector(".reference-list");

roadmap.forEach((stage) => {
  const card = document.createElement("article");
  card.className = "month-card";

  card.innerHTML = `
    <span class="badge">${stage.month}</span>
    <h3>${stage.title}</h3>
    <ul>
      ${stage.goals.map((goal) => `<li>${goal}</li>`).join("")}
    </ul>
  `;

  timelineContainer.appendChild(card);
});

const rendered = new Set();

roadmap.forEach((stage) => {
  stage.sources.forEach((id) => {
    if (!rendered.has(id) && sources[id]) {
      rendered.add(id);
      const source = sources[id];

      const refCard = document.createElement("article");
      refCard.className = "reference-card";
      refCard.innerHTML = `
        <h3>${source.name}</h3>
        <p>${source.description}</p>
        <a href="${source.url}" target="_blank" rel="noopener noreferrer">Visitar recurso</a>
      `;

      referencesContainer.appendChild(refCard);
    }
  });
});
