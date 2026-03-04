import { Phone, MessageCircle, Brain, Heart, Shield, Clock, MapPin, CheckCircle, ArrowRight, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_URL = "https://api.whatsapp.com/send/?phone=5519981196206&text=Ol%C3%A1%2C+gostaria+de+agendar+uma+consulta+com+a+Dra.+Adriana+Potye.&type=phone_number&app_absent=0";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between max-w-6xl">
          <div className="flex items-center gap-2">
            <Leaf className="h-6 w-6 text-primary" />
            <span className="font-serif text-lg font-semibold text-foreground">Adriana Potye</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <a href="#sobre" className="hover:text-primary transition-colors">Sobre</a>
            <a href="#especialidades" className="hover:text-primary transition-colors">Especialidades</a>
            <a href="#como-funciona" className="hover:text-primary transition-colors">Como Funciona</a>
            <a href="#faq" className="hover:text-primary transition-colors">Dúvidas</a>
          </nav>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            <Button size="sm" className="gap-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90">
              <img src="/images/whatsapp-icon.png" alt="WhatsApp" className="h-4 w-4" />
              <span className="hidden sm:inline">Agendar</span>
            </Button>
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
        <div className="absolute inset-0" style={{ background: "var(--hero-gradient)" }} />
        <div className="absolute top-20 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 max-w-6xl relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Shield className="h-3.5 w-3.5" />
              CRP: 06/47218-8
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Sua saúde mental merece o mesmo{" "}
              <span className="text-primary">cuidado</span> que você dedica a todo o resto
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-xl" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Viver com qualidade vai além da ausência de sintomas; trata-se de desenvolver regulação emocional e clareza para tomar decisões. Através da Terapia Cognitivo-Comportamental, ofereço um espaço ético e seguro para você fortalecer seus recursos internos e redescobrir sua melhor versão.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="gap-2 rounded-full text-base px-8 bg-primary text-primary-foreground hover:bg-primary/90 shadow-[var(--shadow-soft)]">
                   <img src="/images/whatsapp-icon.png" alt="WhatsApp" className="h-5 w-5" />
                  Agendar Consulta Online
                </Button>
              </a>
              <a href="#como-funciona">
                <Button variant="outline" size="lg" className="gap-2 rounded-full text-base px-8">
                  Saiba Como Funciona
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-6 mt-10 text-sm text-muted-foreground" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              <span className="flex items-center gap-2"><Clock className="h-4 w-4 text-primary" /> Atendimento Online</span>
              <span className="flex items-center gap-2"><Shield className="h-4 w-4 text-primary" /> Sigilo Garantido</span>
              <span className="flex items-center gap-2"><Heart className="h-4 w-4 text-primary" /> Acolhimento Humanizado</span>
            </div>
          </div>
          <div className="hidden md:flex justify-center">
            <div className="relative">
              <div className="aspect-[3/4] w-80 rounded-2xl overflow-hidden shadow-[var(--shadow-card)]">
                <img src="/images/adriana-1.png" alt="Psicóloga Adriana Potye" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 rounded-2xl bg-primary/20 -z-10" />
              <div className="absolute -top-4 -right-4 w-16 h-16 rounded-2xl bg-accent/20 -z-10" />
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="sobre" className="py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl bg-secondary overflow-hidden shadow-[var(--shadow-card)]">
                <img src="/images/adriana-2.png" alt="Adriana Potye - Psicóloga Clínica" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl bg-accent/20 -z-10" />
            </div>

            <div>
              <p className="text-primary text-sm font-semibold tracking-wider uppercase mb-3" style={{ fontFamily: "'DM Sans', sans-serif" }}>Sobre Mim</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Adriana Potye
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                <p>
                  Sou psicóloga clínica com especialização em Terapia Cognitivo-Comportamental (TCC), 
                  uma abordagem cientificamente comprovada para o tratamento de transtornos de ansiedade, 
                  medos e fobias.
                </p>
                <p>
                  Meu compromisso é criar um espaço seguro e acolhedor onde você possa se sentir 
                  à vontade para explorar suas emoções, compreender seus padrões de pensamento 
                  e desenvolver ferramentas práticas para lidar com os desafios do dia a dia.
                </p>
                <p>
                  Acredito que cada pessoa possui recursos internos para a mudança — e a terapia 
                  é o caminho para acessá-los com clareza e confiança.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialties */}
      <section id="especialidades" className="py-20 md:py-28 bg-secondary/50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-14">
            <p className="text-primary text-sm font-semibold tracking-wider uppercase mb-3" style={{ fontFamily: "'DM Sans', sans-serif" }}>Especialidades</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Como posso te ajudar
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Atuo com abordagem baseada em evidências científicas para ajudar você 
              a superar dificuldades emocionais e viver com mais equilíbrio.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Brain, title: "Transtorno de Ansiedade", desc: "Ansiedade generalizada, crises de pânico e preocupação excessiva que afetam sua rotina e qualidade de vida." },
              { icon: Shield, title: "Medos e Fobias", desc: "Fobias específicas, medo social e situações que geram evitação e sofrimento significativo." },
              { icon: Heart, title: "Autoestima e Autoconfiança", desc: "Trabalho de fortalecimento do autoconhecimento e construção de uma relação mais saudável consigo mesmo(a)." },
              { icon: Brain, title: "Estresse e Burnout", desc: "Esgotamento emocional, sobrecarga de trabalho e dificuldade em estabelecer limites saudáveis." },
              
              { icon: Shield, title: "Insônia e Sono", desc: "Dificuldades para dormir, pensamentos acelerados à noite e padrões de sono desregulados." },
              { icon: Brain, title: "Depressão", desc: "Tristeza persistente, perda de interesse nas atividades, alterações no apetite e dificuldade de concentração que impactam o dia a dia." },
              { icon: Heart, title: "Problemas Interpessoais", desc: "Dificuldades nos relacionamentos, comunicação conflituosa e padrões que geram sofrimento nas relações pessoais e profissionais." },
              { icon: Shield, title: "Perfeccionismo", desc: "Cobrança excessiva consigo mesmo(a), medo de errar e padrões rígidos que geram ansiedade e insatisfação constante." },
            ].map((item, i) => (
              <div key={i} className="group bg-card rounded-2xl p-7 shadow-[var(--shadow-card)] hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="como-funciona" className="py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-14">
            <p className="text-primary text-sm font-semibold tracking-wider uppercase mb-3" style={{ fontFamily: "'DM Sans', sans-serif" }}>Como Funciona</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Seu caminho para o bem-estar
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              O processo terapêutico é simples e acessível. Veja como dar o primeiro passo.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Entre em Contato", desc: "Envie uma mensagem pelo WhatsApp ou ligue. Vamos conversar sobre suas necessidades e agendar a primeira sessão." },
              { step: "02", title: "Primeira Sessão", desc: "No primeiro encontro, vamos nos conhecer. Você fala sobre o que sente e juntos traçamos um plano terapêutico personalizado." },
              { step: "03", title: "Seu Processo", desc: "Com sessões regulares online, você desenvolve autoconhecimento e ferramentas práticas para transformar sua relação com a ansiedade." },
            ].map((item, i) => (
              <div key={i} className="relative text-center p-8">
                <span className="text-6xl font-bold text-primary/10 font-serif">{item.step}</span>
                <h3 className="text-xl font-semibold text-foreground mt-2 mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="gap-2 rounded-full text-base px-8 bg-primary text-primary-foreground hover:bg-primary/90">
                 <img src="/images/whatsapp-icon.png" alt="WhatsApp" className="h-5 w-5" />
                Agendar Minha Primeira Sessão
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* TCC Section */}
      <section className="py-20 md:py-28 bg-secondary/50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-primary text-sm font-semibold tracking-wider uppercase mb-3" style={{ fontFamily: "'DM Sans', sans-serif" }}>Abordagem Terapêutica</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Terapia Cognitivo-Comportamental
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                <p>
                  A TCC é uma das abordagens mais eficazes e validadas cientificamente 
                  para o tratamento de ansiedade, medos e fobias. Ela trabalha a relação 
                  entre pensamentos, emoções e comportamentos.
                </p>
              </div>
              <ul className="mt-6 space-y-3" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                {[
                  "Resultados comprovados por pesquisas científicas",
                  "Foco em soluções práticas e aplicáveis no dia a dia",
                  "Sessões estruturadas com objetivos claros",
                  "Desenvolvimento de habilidades duradouras",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground text-sm">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-[var(--shadow-card)]">
              <h3 className="text-xl font-semibold text-foreground mb-6">Para quem a TCC é indicada?</h3>
              <div className="space-y-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                {[
                  "Pessoas que sofrem com ansiedade constante ou crises de pânico",
                  "Quem tem medos ou fobias que limitam atividades do dia a dia",
                  "Profissionais em situação de estresse ou esgotamento",
                  "Qualquer pessoa buscando autoconhecimento e equilíbrio emocional",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 text-muted-foreground text-sm p-3 rounded-xl bg-secondary/50">
                    <ArrowRight className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-14">
            <p className="text-primary text-sm font-semibold tracking-wider uppercase mb-3" style={{ fontFamily: "'DM Sans', sans-serif" }}>Dúvidas Frequentes</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Perguntas Comuns
            </h2>
          </div>

          <div className="space-y-4">
            {[
              { q: "Como funciona a terapia online?", a: "As sessões acontecem por videochamada, em uma plataforma segura e privada. Você participa do conforto da sua casa, com a mesma qualidade de uma sessão presencial." },
              { q: "Qual a duração de cada sessão?", a: "Cada sessão tem duração de 50 minutos, seguindo o padrão das práticas terapêuticas." },
              { q: "Preciso de encaminhamento médico?", a: "Não. Você pode procurar a psicoterapia diretamente, sem necessidade de encaminhamento. Caso necessário, podemos trabalhar em conjunto com outros profissionais da saúde." },
              { q: "Em quanto tempo vou ver resultados?", a: "Os resultados variam de pessoa para pessoa. A TCC é uma abordagem focada em objetivos, e muitos pacientes relatam melhorias já nas primeiras semanas." },
              { q: "O sigilo é garantido?", a: "Sim, o sigilo profissional é um princípio fundamental da Psicologia, garantido pelo Código de Ética do CFP. Tudo o que é discutido em sessão é absolutamente confidencial." },
            ].map((item, i) => (
              <details key={i} className="group bg-card rounded-2xl shadow-sm border border-border overflow-hidden">
                <summary className="cursor-pointer p-6 flex items-center justify-between text-foreground font-medium hover:text-primary transition-colors list-none" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  {item.q}
                  <ArrowRight className="h-4 w-4 text-muted-foreground group-open:rotate-90 transition-transform shrink-0 ml-4" />
                </summary>
                <div className="px-6 pb-6 text-muted-foreground text-sm leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 md:py-28 bg-primary/5">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <Leaf className="h-10 w-10 text-primary mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Pronto(a) para dar o primeiro passo?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Buscar ajuda é um ato de coragem e autocuidado. Estou aqui para te acompanhar 
            nesse processo com respeito, empatia e profissionalismo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="gap-2 rounded-full text-base px-8 bg-primary text-primary-foreground hover:bg-primary/90 shadow-[var(--shadow-soft)]">
                <img src="/images/whatsapp-icon.png" alt="WhatsApp" className="h-5 w-5" />
                Agendar pelo WhatsApp
              </Button>
            </a>
            <a href="tel:+5519981196206">
              <Button variant="outline" size="lg" className="gap-2 rounded-full text-base px-8">
                <Phone className="h-5 w-5" />
                (19) 98119-6206
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-border">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            <div className="flex items-center gap-2">
              <Leaf className="h-5 w-5 text-primary" />
              <span className="font-serif font-semibold text-foreground">Adriana Potye</span>
              <span className="text-muted-foreground">— Psicóloga | CRP: 00/000000</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5" /> Atendimento Online</span>
              <span className="flex items-center gap-1"><Phone className="h-3.5 w-3.5" /> (19) 98119-6206</span>
            </div>
          </div>
          <p className="text-center text-xs text-muted-foreground mt-6" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            © {new Date().getFullYear()} Adriana Potye Psicóloga. Todos os direitos reservados.
          </p>
          <p className="text-center text-xs text-muted-foreground mt-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Criado por <a href="https://www.adnove.com.br/" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary transition-colors">AdNove Marketing</a>
          </p>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[hsl(142_70%_45%)] hover:bg-[hsl(142_70%_40%)] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-110"
        aria-label="Agendar pelo WhatsApp"
      >
        <img src="/images/whatsapp-icon.png" alt="WhatsApp" className="h-7 w-7" />
      </a>
    </div>
  );
};

export default Index;
