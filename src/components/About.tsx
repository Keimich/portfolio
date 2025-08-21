import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from './ui/card';

const aboutData = [
  {
    emoji: '🧑‍💻',
    title: 'Experiência Profissional',
    description: 'Desenvolvedor desde 12/2021, com experiência em desenvolvimento full-stack utilizando tecnologias como HTML5, CSS3, JavaScript, PHP/Laravel, Vue e React. Em projetos pessoais, busco expandir meu conhecimento usando tecnologias como Golang, HTMX e Tailwind CSS.',
  },
  {
    emoji: '⚙️🛠️',
    title: 'DevOps e Infraestrutura',
    description: 'Tenho experiência com Docker e Docker Compose para gerenciar aplicações em ambientes de desenvolvimento e produção. Já configurei servidores Nginx e pipelines de CI/CD com SonarQube, além de testes unitários (PHPUnit). Também atuei na configuração de pipelines no GitLab e GitHub (GitHub Actions).',
  },
  {
    emoji: '💾',
    title: 'Banco de Dados',
    description: 'Tenho experiência em trabalhar com MySQL e PostgreSQL, utilizando interfaces como PMA, DBeaver e CLI para administração e manipulação de dados.',
  },
  {
    emoji: '🎨',
    title: 'Ferramentas de Design',
    description: 'Utilizo o Figma com frequência para visualizar os componentes e telas desenvolvidos pela equipe de design UX/UI, garantindo que as implementações estejam alinhadas com o projeto.',
  },
  {
    emoji: '🐇',
    title: 'Gerenciamento de Filas',
    description: 'Utilizo RabbitMQ para gerenciamento de filas em diversos projetos.',
  },
  {
    emoji: '🏃‍♂️⏱️',
    title: 'Metodologias Ágeis',
    description: 'Participo de equipes que seguem metodologias ágeis, principalmente SCRUM, desde o início da minha carreira.',
  },
];

const About = () => {
  return (
    <section id="about" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        Sobre
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {aboutData.map(({ emoji, title, description }) => (
          <Card key={title}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">{emoji}</span>
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default About;