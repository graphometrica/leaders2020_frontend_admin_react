const mode = process.env.NODE_ENV;

const devOrProd = (devValue, prodValue) => {
  if (mode === 'production') return prodValue;
  return devValue
}

const config = {  
  app: {    
    head: {
      script: [
        {
          src: 'https://kit.fontawesome.com/4e645be814.js',
          crossorigin: 'anonymous'
        }       
      ],
      link: [
        
        {
          href: 'https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;500;700&display=swap',
          rel: 'stylesheet',
          type: 'text/css'
        },
        {
          href: 'favicon.ico',
          rel: 'icon',
          type: 'image/ico'
        }
      ],
      meta: [
        {
          charset: "utf-8",
        },
        {
          "http-equiv": "x-ua-compatible",
          content: "ie=edge",
        },
        {
          "theme-color": "#000000",
        },
        {
          name: "viewport",
          content: "width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0",
        },
        {
          name: "description",
          content: "Kotik.dog - панель администрирования",
        },
      ],
      title: "Kotik.dog - панель администрирования",
    },
  },
  ENV: () => ({
    version: "1.00.00",
    mode: mode,
    demoApiEndpoint: devOrProd('http://localhost:3001/api/admin/', 'http://loccalhost:9080')
  }),
  contentBasePublicPath: "",
};

module.exports = config;
