import { Github, ExternalLink } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel';
import { Button } from './ui/button';

const projectsData = [
  {
    image: '/projeto-api.jpg',
    title: 'API - Node.js + Express + JWT',
    description: 'Esta API foi desenvolvida utilizando Node.js e Express, com autenticação baseada em JWT e operações CRUD para gerenciar usuários. Utiliza Prisma para o banco de dados PostgreSQL e Swagger para documentação.',
    codeLink: 'https://github.com/Keimich/API',
    demoLink: 'https://jwt.keimich.com/api-docs',
  },
  {
    image: '/clima.log.br.png',
    title: 'Clima.log.br',
    description: 'Aplicação em React e Tailwind CSS com a API OpenWeatherMap. React Router Dom para rotas, Axios para requisições HTTP e Cloudflare para gerenciamento de DNS do domínio clima.log.br.',
    codeLink: 'https://github.com/Keimich/clima.log.br/',
    demoLink: 'https://clima.log.br/',
  },
  {
    image: '/cep.log.br.png',
    title: 'CEP Fácil',
    description: 'Aplicação web e API RESTful para consulta de CEPs no Brasil, com arquitetura resiliente. Construído com Laravel, Docker, Nginx, Blade, Tailwind CSS e Redis para caching.',
    codeLink: null,
    demoLink: 'https://cep.log.br',
  },
  {
    image: '/gdt.png',
    title: 'Git Diff Tool (gdt)',
    description: 'CLI em TypeScript para visualizar modificações em repositórios Git de forma interativa, utilizando readline para entradas do teclado e execSync para comandos do sistema.',
    codeLink: 'https://github.com/Keimich/gdt',
    demoLink: 'https://github.com/Keimich/gdt',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        Projetos
      </h2>
      <Carousel
        opts={{
          align: 'start',
        }}
        className="w-full"
      >
        <CarouselContent>
          {projectsData.map((project, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card>
                  <CardHeader>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <CardTitle className="pt-4">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4 h-24">
                      {project.description}
                    </CardDescription>
                    <div className="flex gap-2">
                      {project.codeLink && (
                        <Button asChild variant="secondary">
                          <a
                            href={project.codeLink}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="mr-2 h-4 w-4" /> Código
                          </a>
                        </Button>
                      )}
                      {project.demoLink && (
                        <Button asChild>
                          <a
                            href={project.demoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};

export default Projects;