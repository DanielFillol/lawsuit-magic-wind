import { 
  MessagesSquare, 
  FolderClosed, 
  Upload, 
  Search, 
  Pencil,
  Clock,
  Archive,
  UserPlus,
  ChevronDown,
  Sparkles,
  ArrowRight
} from "lucide-react";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  const [lawsuitNumber, setLawsuitNumber] = useState("1028862-40.2023.8.26.0007");
  const [isDocumentosOpen, setIsDocumentosOpen] = useState(true);
  const [isHistoricoOpen, setIsHistoricoOpen] = useState(true);

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
      <aside className="w-64 bg-[#F8FAFC] border-r border-gray-200 flex flex-col">
        <div className="p-4">
          <div className="mb-4">
            <img src="/lovable-uploads/241e42c6-33b2-40ec-8c34-cbfee1d9870b.png" alt="Logo" className="h-8" />
          </div>
          <Button className="w-full bg-blue-600 hover:bg-blue-700 mb-4">
            <MessagesSquare className="w-4 h-4 mr-2" />
            Novo Chat
          </Button>
        </div>

        <div className="flex-1 overflow-y-auto">
          <div className="px-2">
            {/* Documentos Section */}
            <button
              onClick={() => setIsDocumentosOpen(!isDocumentosOpen)}
              className="flex items-center w-full p-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg"
            >
              <ChevronDown className={`w-4 h-4 mr-1 transition-transform ${isDocumentosOpen ? '' : '-rotate-90'}`} />
              <span>Documentos</span>
            </button>
            
            {isDocumentosOpen && (
              <div className="ml-4 space-y-1">
                <button className="flex items-center w-full p-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg">
                  <FolderClosed className="w-4 h-4 mr-2" />
                  Pastas
                </button>
                <button className="flex items-center w-full p-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg">
                  <Upload className="w-4 h-4 mr-2" />
                  Importar Documentos
                </button>
                <button className="flex items-center w-full p-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg">
                  <Search className="w-4 h-4 mr-2" />
                  Busca com AI
                </button>
                <button className="flex items-center w-full p-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg">
                  <Pencil className="w-4 h-4 mr-2" />
                  Rascunhos
                </button>
              </div>
            )}

            {/* Histórico Section */}
            <button
              onClick={() => setIsHistoricoOpen(!isHistoricoOpen)}
              className="flex items-center w-full p-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg mt-2"
            >
              <ChevronDown className={`w-4 h-4 mr-1 transition-transform ${isHistoricoOpen ? '' : '-rotate-90'}`} />
              <span>Histórico</span>
            </button>

            {isHistoricoOpen && (
              <div className="ml-4 space-y-1">
                <button className="flex items-center w-full p-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg">
                  <Clock className="w-4 h-4 mr-2" />
                  Cobrança Indevida e Dano Moral no TJSP
                </button>
                <button className="flex items-center w-full p-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg">
                  <Clock className="w-4 h-4 mr-2" />
                  Dano Moral e Cobrança Indevida no TJSP
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="p-4 border-t border-gray-200 space-y-2">
          <button className="flex items-center w-full p-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg">
            <Archive className="w-4 h-4 mr-2" />
            Arquivo
          </button>
          <button className="flex items-center w-full p-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg">
            <Archive className="w-4 h-4 mr-2" />
            Lixeira
          </button>
          <button className="flex items-center w-full p-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg">
            <UserPlus className="w-4 h-4 mr-2" />
            Convidar pessoas...
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <div className="p-4">
          <div className="max-w-4xl mx-auto">
            {/* Search Bar */}
            <div className="mb-6">
              <Input
                className="w-full bg-gray-50 border-gray-200"
                placeholder="Busca inteligente com IA nos seus documentos..."
                type="search"
              />
              <div className="flex gap-4 mt-2 text-sm">
                <button className="text-gray-600 hover:text-gray-900">Publicado, Rascunhos</button>
                <button className="text-gray-600 hover:text-gray-900">Qualquer pasta</button>
                <button className="text-gray-600 hover:text-gray-900">Qualquer autor</button>
                <button className="text-gray-600 hover:text-gray-900">A qualquer momento</button>
              </div>
            </div>

            {/* Rest of the content */}
            <div className="space-y-8">
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

              <div className="grid gap-6 mt-12 lg:grid-cols-2">
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
      </main>
    </div>
  );
};

export default Index;
