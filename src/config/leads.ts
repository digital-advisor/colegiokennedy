// Configuração para envio de leads para o Google Sheets via Apps Script Web App
export const GOOGLE_SHEETS_WEBAPP_URL: string = 
  ((import.meta as any).env?.VITE_GOOGLE_SHEETS_WEBAPP_URL as string) || 
  "https://script.google.com/macros/s/AKfycbwsi0AXx1oInGMB7C9HfF6E4rvg1ZIADdqlehqw4owPw3JLfEQ2hbKjHNAH54GbB_ClnA/exec";

export interface SendLeadParams {
  tipo: 'agendamento' | 'whatsapp';
  nome?: string;
  whatsapp?: string;
  serie?: string;
  origem?: string;
}

export function sendLeadToGoogleSheets(params: SendLeadParams) {
  if (!GOOGLE_SHEETS_WEBAPP_URL) {
    console.warn('⚠️ [Leads] URL do Google Apps Script ainda não configurada.');
    return;
  }
  try {
    const paramsMap = new URLSearchParams({
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
      keepalive: true,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
      },
      body: paramsMap.toString(),
    }).catch((err) => {
      console.warn('Erro ao enviar evento para a planilha:', err);
    });
  } catch (err) {
    console.warn('Erro ao processar envio para a planilha:', err);
  }
}


