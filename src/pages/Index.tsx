
import { ArrowRight, Sparkles } from "lucide-react";
import { useState } from "react";
import { Card } from "@/components/ui/card";

const Index = () => {
  const [lawsuitNumber, setLawsuitNumber] = useState("0004953-14.2023.8.26.0224");

  const lawsuitDetails = {
    title: "Carta Precatória Criminal",
    court: "TJSP - São Paulo",
    status: "Em andamento",
    type: "Intimação / Notificação",
    parties: {
      plaintiff: "Justiça Pública",
      defendant: "Yannick Mendes Belor de La Hunaudaye",
    },
    movements: [
      {
        date: "2023-03-01",
        description: "Início do processo",
        type: "milestone",
      },
      {
        date: "2023-03-01",
        description: "Distribuição do processo",
        type: "update",
      },
      // Add more movements as needed
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-lawsuit-accent">
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
    </div>
  );
};

export default Index;
