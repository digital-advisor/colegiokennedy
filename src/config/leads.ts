// Configuração para envio de leads para o Google Sheets via Apps Script Web App
// Para ativar, basta colar aqui a URL gerada ao implantar o script no Google Sheets
// Exemplo: "https://script.google.com/macros/s/AKfycbx.../exec"
export const GOOGLE_SHEETS_WEBAPP_URL: string = 
  ((import.meta as any).env?.VITE_GOOGLE_SHEETS_WEBAPP_URL as string) || 
  "";

export interface SendLeadParams {
  tipo: 'agendamento' | 'whatsapp';
  nome?: string;
  whatsapp?: string;
  serie?: string;
  origem?: string;
}

export function sendLeadToGoogleSheets(params: SendLeadParams) {
  if (!GOOGLE_SHEETS_WEBAPP_URL) return;
  try {
    const payload = JSON.stringify({
      tipo: params.tipo,
      nome: params.nome || '',
      whatsapp: params.whatsapp || '',
      serie: params.serie || '',
      origem: params.origem || '',
      data: new Date().toLocaleDateString('pt-BR', { timeZone: 'America/Fortaleza' }),
      hora: new Date().toLocaleTimeString('pt-BR', { timeZone: 'America/Fortaleza', hour: '2-digit', minute: '2-digit' }),
    });

    fetch(GOOGLE_SHEETS_WEBAPP_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'text/plain;charset=utf-8',
      },
      body: payload,
    }).catch((err) => {
      console.warn('Erro ao enviar evento para a planilha:', err);
    });
  } catch (err) {
    console.warn('Erro ao processar envio para a planilha:', err);
  }
}


