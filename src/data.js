export const projects = [
  {
    title: 'Análise do Mercado Imobiliário',
    category: 'Dados',
    number: '01',
    description: 'Coleta, tratamento e análise de dados de imóveis de Petrolina utilizando Web Scraping e Python.',
    details: 'Projeto com 1.357 anúncios coletados, exploração dos dados e análise de preços para encontrar padrões do mercado.',
    tags: ['Python', 'BeautifulSoup', 'Pandas', 'Web Scraping'],
    images: [
      '/images/projects/imobiliario/imob1.jpg',
      '/images/projects/imobiliario/imob2.jpg',
      '/images/projects/imobiliario/imob3.jpg'
    ],
    github: 'https://github.com/Davi-CGomes/analise-imoveis-petrolina',
    linkedin: 'https://www.linkedin.com/posts/davicgomes_dados-python-webscraping-ugcPost-7501643609918570496-8Z3A/'
  },
  {
    title: 'Machine Learning com Python',
    category: 'Machine Learning',
    number: '02',
    description: 'Pipeline de classificação para prever a sobrevivência de passageiros do Titanic.',
    details: 'Inclui análise exploratória, tratamento de dados, engenharia de atributos, GridSearchCV e comparação de algoritmos supervisionados.',
    tags: ['Python', 'Pandas', 'Scikit-learn', 'Kaggle'],
    images: ['/images/projects/titanic/titanic.png'],
    github: 'https://github.com/Davi-CGomes',
    linkedin: 'https://www.linkedin.com/feed/update/urn:li:activity:7455334789668106240/'
  },
  {
    title: 'Flappy Bird com Inteligência Artificial',
    category: 'IA',
    number: '03',
    description: 'Agente autônomo que aprende a jogar Flappy Bird por meio de neuroevolução.',
    details: 'A rede recebe posição do pássaro e distâncias aos obstáculos e evolui populações por seleção, cruzamento e mutação.',
    tags: ['Python', 'Pygame', 'NEAT', 'Redes Neurais'],
    images: ['/images/projects/flappy-bird/flappy-bird.jpg'],
    github: 'https://github.com/Davi-CGomes',
    linkedin: 'https://www.linkedin.com/feed/update/urn:li:activity:7446664730888376320/'
  }
]

export const skillGroups = [
  { title: 'Dados & Analytics', items: ['Python', 'Pandas', 'SQL', 'Power BI', 'Web Scraping', 'Jupyter'] },
  { title: 'Machine Learning & IA', items: ['Scikit-learn', 'Machine Learning', 'NEAT', 'Redes Neurais'] },
  { title: 'Backend', items: ['Java', 'Spring Boot', 'Django', 'Docker', 'Postman'] },
  { title: 'Web', items: ['JavaScript', 'HTML5', 'CSS3', 'Vue.js'] },
  { title: 'Banco de Dados', items: ['MySQL', 'PostgreSQL', 'SQL'] },
  { title: 'Cloud & Ferramentas', items: ['Google Cloud', 'BigQuery', 'Cloud Storage', 'Git', 'GitHub', 'Excel'] }
]
