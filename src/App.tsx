import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const schemaData = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Jan D. Keimich",
  "jobTitle": "Desenvolvedor Full-Stack",
  "url": "https://jan.dev.br/",
  "sameAs": [
    "https://www.linkedin.com/in/jan-d-keimich/",
    "https://github.com/keimich/"
  ],
  "email": "mailto:jan.keimich@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "São Paulo",
    "addressCountry": "BR"
  },
  "knowsAbout": [
    "HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Vue", "PHP", "Laravel", "Node.js", "Golang", "Docker", "CI/CD", "Git", "PostgreSQL", "MySQL"
  ]
};

function App() {
  return (
    <>
      <title>Jan D. Keimich | Desenvolvedor Full-Stack</title>
      <meta name="description" content="Portfólio de Jan D. Keimich, Desenvolvedor Full-Stack especialista em React, Laravel, Node.js e mais. Veja meus projetos, habilidades e entre em contato." />
      <meta name="author" content="Jan D. Keimich" />
      <meta name="keywords" content="Desenvolvedor Full-Stack, React, TypeScript, Node.js, PHP, Laravel, Portfolio, Jan Keimich" />
      <script type="application/ld+json">{JSON.stringify(schemaData)}</script>

      <Header />
      <main className="flex flex-col items-center">
        <Home />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
