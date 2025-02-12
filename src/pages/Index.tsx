
import { ArrowRight, BookOpen, Building2, Calendar, FileText, Sparkles, User2 } from "lucide-react";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  const [lawsuitNumber, setLawsuitNumber] = useState("1028862-40.2023.8.26.0007");

  const lawsuitDetails = {
    title: "Busca e Apreensão em Alienação Fiduciária",
    court: "TJSP - FORO REGIONAL VII - ITAQUERA",
    status: "Em andamento",
    type: "Alienação Fiduciária",
    parties: {
      plaintiff: "Aymoré Crédito Financiamento e Investimento S.A",
      defendant: "Fernando Luiz da Silva Macedo",
    },
    movements: [
      {
        date: "2024-09-20",
        description: "Vistos.Ante o informado pelo autor, oficie-se ao IMESC solicitando a remessa do laudo pericial referente à perícia realizada no autor, Pasta n.º 359268.",
        type: "PUBLICACAO",
      },
      {
        date: "2024-07-25",
        description: "Certidão de Publicação Expedida",
        type: "ANDAMENTO",
      },
    ],
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-[hsl(var(--sidebar-background))] border-r border-[hsl(var(--sidebar-border))] p-4">
        <div className="space-y-6">
          <div className="flex items-center space-x-2">
            <BookOpen className="w-6 h-6 text-[hsl(var(--sidebar-primary))]" />
            <span className="font-semibold">Detalhes do Processo</span>
          </div>
          <Separator />
          <div className="space-y-4">
            <div>
              <div className="flex items-center space-x-2 text-sm text-[hsl(var(--sidebar-foreground))]">
                <FileText className="w-4 h-4" />
                <span>Número CNJ</span>
              </div>
              <p className="mt-1 text-sm font-medium">{lawsuitNumber}</p>
            </div>
            <div>
              <div className="flex items-center space-x-2 text-sm text-[hsl(var(--sidebar-foreground))]">
                <Building2 className="w-4 h-4" />
                <span>Tribunal</span>
              </div>
              <p className="mt-1 text-sm">{lawsuitDetails.court}</p>
            </div>
            <div>
              <div className="flex items-center space-x-2 text-sm text-[hsl(var(--sidebar-foreground))]">
                <Calendar className="w-4 h-4" />
                <span>Data de Início</span>
              </div>
              <p className="mt-1 text-sm">06/09/2023</p>
            </div>
            <Separator />
            <div>
              <div className="flex items-center space-x-2 text-sm text-[hsl(var(--sidebar-foreground))]">
                <User2 className="w-4 h-4" />
                <span>Partes</span>
              </div>
              <div className="mt-2 space-y-2">
                <div>
                  <p className="text-xs text-[hsl(var(--sidebar-foreground))]">Autor</p>
                  <p className="text-sm">{lawsuitDetails.parties.plaintiff}</p>
                </div>
                <div>
                  <p className="text-xs text-[hsl(var(--sidebar-foreground))]">Réu</p>
                  <p className="text-sm">{lawsuitDetails.parties.defendant}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto bg-gradient-to-b from-white to-lawsuit-accent">
        <div className="container px-4 py-8 mx-auto max-w-7xl">
          <div className="space-y-8 animate-fade-in">
            {/* Header */}
            <div className="text-center space-y-4">
              <div className="inline-flex items-center px-3 py-1 text-sm text-lawsuit-text bg-lawsuit-highlight rounded-full animate-float">
                <Sparkles className="w-4 h-4 mr-2" />
                <span>Acompanhamento Processual Mágico</span>
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-lawsuit-text sm:text-6xl">
                {lawsuitNumber}
              </h1>
              <p className="text-lg text-lawsuit-muted">
                {lawsuitDetails.court} - {lawsuitDetails.title}
              </p>
            </div>

            {/* Main Content */}
            <div className="grid gap-6 mt-12 lg:grid-cols-2">
              {/* Case Details Card */}
              <Card className="p-6 transition-all duration-300 hover:shadow-lg">
                <h2 className="text-xl font-semibold text-lawsuit-text">
                  Informações do Processo
                </h2>
                <div className="mt-4 space-y-4">
                  <div className="p-4 bg-lawsuit-accent rounded-lg">
                    <h3 className="text-sm font-medium text-lawsuit-muted">Tipo</h3>
                    <p className="mt-1 text-lawsuit-text">{lawsuitDetails.type}</p>
                  </div>
                  <div className="p-4 bg-lawsuit-accent rounded-lg">
                    <h3 className="text-sm font-medium text-lawsuit-muted">Partes</h3>
                    <div className="mt-2 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-lawsuit-muted">Autor</span>
                        <span className="text-lawsuit-text">{lawsuitDetails.parties.plaintiff}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-lawsuit-muted">Réu</span>
                        <span className="text-lawsuit-text">{lawsuitDetails.parties.defendant}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Movements Card */}
              <Card className="p-6 transition-all duration-300 hover:shadow-lg">
                <h2 className="text-xl font-semibold text-lawsuit-text">
                  Movimentações
                </h2>
                <div className="mt-4 space-y-4">
                  {lawsuitDetails.movements.map((movement, index) => (
                    <div
                      key={index}
                      className="relative flex items-start p-4 transition-all duration-300 bg-lawsuit-accent rounded-lg animate-slide-up"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-lawsuit-muted">
                            {movement.date}
                          </span>
                          <ArrowRight className="w-4 h-4 text-lawsuit-icon" />
                        </div>
                        <p className="mt-1 text-lawsuit-text">{movement.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
