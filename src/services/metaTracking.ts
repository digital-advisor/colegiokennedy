import { META_PIXEL_ID, META_CAPI_TOKEN } from '../config/meta';

export interface MetaLeadData {
  eventName?: 'Lead' | 'Contact';
  contentName: string;
  contentCategory?: string;
  name?: string;
  phone?: string;
  origem?: string;
  serie?: string;
}

/**
 * Converte uma string em hash SHA-256 hexadecimal (exigência da Meta)
 */
async function hashSha256(value: string): Promise<string> {
  const normalized = value.trim().toLowerCase();
  const encoder = new TextEncoder();
  const data = encoder.encode(normalized);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');
}

/**
 * Normaliza número de telefone brasileiro para formato internacional (55XXXXXXXXXXX)
 */
function normalizePhone(phone: string): string {
  const digits = phone.replace(/\D/g, '');
  if (digits.length === 10 || digits.length === 11) {
    return `55${digits}`;
  }
  return digits;
}

/**
 * Lê cookies de rastreamento do navegador (_fbp e _fbc)
 */
function getCookie(name: string): string | undefined {
  if (typeof document === 'undefined') return undefined;
  const match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
  return match ? decodeURIComponent(match[3]) : undefined;
}

/**
 * Disparo Híbrido e Deduplicado (Meta Pixel no Navegador + Meta Conversions API CAPI)
 */
export async function trackMetaConversion(data: MetaLeadData) {
  const eventName = data.eventName || 'Lead';
  const eventId = `lead_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
  const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://colegiokennedy.com.br';

  // 1. DISPARO CLIENT-SIDE: Meta Pixel no navegador
  if (typeof window !== 'undefined') {
    const win = window as any;
    if (typeof win.fbq === 'function') {
      win.fbq(
        'track',
        eventName,
        {
          content_name: data.contentName,
          content_category: data.contentCategory || data.serie || data.origem,
          status: 'Lead Qualificado',
          origem: data.origem,
        },
        { eventID: eventId }
      );
    }

    // 2. DISPARO NO GOOGLE TAG MANAGER (DataLayer)
    win.dataLayer = win.dataLayer || [];
    win.dataLayer.push({
      event: 'meta_lead_conversion',
      event_id: eventId,
      meta_event_name: eventName,
      content_name: data.contentName,
      lead_name: data.name || '',
      lead_phone: data.phone || '',
      origem: data.origem || '',
    });
  }

  // 3. DISPARO SERVER-SIDE: Meta Conversions API (CAPI)
  if (!META_PIXEL_ID || !META_CAPI_TOKEN) {
    return;
  }

  try {
    const userData: Record<string, any> = {
      client_user_agent: typeof navigator !== 'undefined' ? navigator.userAgent : 'Mozilla/5.0',
    };

    // Lê _fbp e _fbc para máxima correspondência (EMQ)
    const fbp = getCookie('_fbp');
    if (fbp) userData.fbp = fbp;

    const fbc = getCookie('_fbc');
    if (fbc) userData.fbc = fbc;

    // Normaliza e criptografa em SHA-256 Telefone e Nome
    if (data.phone) {
      const normalizedPhone = normalizePhone(data.phone);
      if (normalizedPhone) {
        userData.ph = [await hashSha256(normalizedPhone)];
      }
    }

    if (data.name) {
      const firstName = data.name.trim().split(' ')[0];
      if (firstName) {
        userData.fn = [await hashSha256(firstName)];
      }
    }

    const payload = {
      data: [
        {
          event_name: eventName,
          event_time: Math.floor(Date.now() / 1000),
          event_id: eventId,
          event_source_url: currentUrl,
          action_source: 'website',
          user_data: userData,
          custom_data: {
            content_name: data.contentName,
            content_category: data.contentCategory || data.serie || data.origem || 'Matrículas',
            status: 'Lead Qualificado',
            origem: data.origem,
          },
        },
      ],
    };

    fetch(`https://graph.facebook.com/v19.0/${META_PIXEL_ID}/events?access_token=${META_CAPI_TOKEN}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      keepalive: true,
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((resJson) => {
        if (resJson.error) {
          console.warn('⚠️ [Meta CAPI Warning]:', resJson.error.message);
        }
      })
      .catch((err) => {
        console.warn('⚠️ [Meta CAPI Error]:', err);
      });
  } catch (err) {
    console.warn('⚠️ [Meta Tracking Exception]:', err);
  }
}
