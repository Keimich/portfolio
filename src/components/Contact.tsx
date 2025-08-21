import { Linkedin, Mail, MapPin } from 'lucide-react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from './ui/card';

const contactData = [
  {
    icon: <Linkedin className="h-8 w-8" />,
    title: 'LinkedIn',
    content: <a href="https://www.linkedin.com/in/jan-d-keimich/" target="_blank" rel="noopener noreferrer" className="hover:underline">linkedin.com/in/jan-d-keimich</a>,
  },
  {
    icon: <Mail className="h-8 w-8" />,
    title: 'Email',
    content: <a href="mailto:jan.keimich@gmail.com" className="hover:underline">jan.keimich@gmail.com</a>,
  },
  {
    icon: <MapPin className="h-8 w-8" />,
    title: 'Localização',
    content: <p>São Paulo, Brasil</p>,
  },
];

const Contact = () => {
  return (
    <section id="contact" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        Contato
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {contactData.map(({ icon, title, content }) => (
          <Card key={title}>
            <CardHeader className="flex flex-row items-center gap-4">
              {icon}
              <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              {content}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Contact;