import { Github, Linkedin } from 'lucide-react';
import { Button } from './ui/button';
import HtmlIcon from './icons/HtmlIcon';
import CssIcon from './icons/CssIcon';
import JsIcon from './icons/JsIcon';
import PhpIcon from './icons/PhpIcon';
import LaravelIcon from './icons/LaravelIcon';
import VueIcon from './icons/VueIcon';
import ReactIcon from './icons/ReactIcon';

const Home = () => {
  const techIcons = [
    { Icon: HtmlIcon },
    { Icon: CssIcon },
    { Icon: JsIcon },
    { Icon: PhpIcon },
    { Icon: LaravelIcon },
    { Icon: VueIcon },
    { Icon: ReactIcon },
  ];

  return (
    <section
      id="home"
      className="container grid grid-cols-1 md:grid-cols-2 gap-8 items-center min-h-screen pt-16 md:pt-0"
    >
      {/* Coluna de Conteúdo */}
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl md:text-5xl font-bold">
            Desenvolvedor Full-Stack
          </h1>
          <p className="text-muted-foreground">
            Olá, meu nome é Jan D. Keimich. Desenvolvedor Full-Stack morando em
            São Paulo, Brasil. 🇧🇷
          </p>
        </div>

        <div className="flex gap-4">
          <Button asChild>
            <a
              href="https://www.linkedin.com/in/jan-d-keimich/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="mr-2 h-4 w-4" />
              LinkedIn
            </a>
          </Button>
          <Button variant="secondary" asChild>
            <a
              href="https://github.com/keimich/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </a>
          </Button>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="text-lg font-semibold">Tech Stack</h4>
          <div className="flex gap-4 flex-wrap">
            {techIcons.map(({ Icon }, index) => (
              <Icon
                key={index}
                className="h-8 w-8 text-muted-foreground hover:text-foreground transition-colors"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Coluna da Imagem */}
      <div className="flex items-center justify-center">
        <img
          src="/jan-d-keimich.jpg"
          alt="Jan D. Keimich"
          className="rounded-full object-cover w-64 h-64 md:w-80 md:h-80 border-4 border-primary/10 shadow-lg"
        />
      </div>
    </section>
  );
};

export default Home;