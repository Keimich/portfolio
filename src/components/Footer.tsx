import { Github, Linkedin, ArrowUp } from 'lucide-react';
import { Button } from './ui/button';

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-6 flex w-full justify-center">
      <div className="container flex items-center justify-between">
        <p className="text-sm">
          <a
            href="https://jan.dev.br/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            jan.dev.br
          </a>
          {' '}
          © {new Date().getFullYear()}
        </p>

        <div className="flex gap-2">
          <Button variant="ghost" size="icon" asChild>
            <a
              href="https://www.linkedin.com/in/jan-d-keimich/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a
              href="https://github.com/keimich/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="#home">
              <ArrowUp className="h-5 w-5" />
              <span className="sr-only">Voltar ao topo</span>
            </a>
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;