/**
 * Agent System API Client
 * Handles all communication with the agent backend
 */

const API_BASE_URL = import.meta.env.VITE_AGENT_API_URL || 'http://localhost:3001/api';

// Generate or retrieve session ID
export const getSessionId = (): string => {
  let sessionId = sessionStorage.getItem('session_id');
  if (!sessionId) {
    sessionId = crypto.randomUUID();
    sessionStorage.setItem('session_id', sessionId);
  }
  return sessionId;
};

// Generate or retrieve user ID
export const getUserId = (): string => {
  let userId = localStorage.getItem('user_id');
  if (!userId) {
    userId = crypto.randomUUID();
    localStorage.setItem('user_id', userId);
  }
  return userId;
};

// Get device info
export const getDeviceInfo = () => {
  const ua = navigator.userAgent;
  const isMobile = /Mobile|Android|iPhone|iPad/.test(ua);
  
  let browser = 'unknown';
  if (ua.includes('Chrome')) browser = 'chrome';
  else if (ua.includes('Firefox')) browser = 'firefox';
  else if (ua.includes('Safari')) browser = 'safari';
  else if (ua.includes('Edge')) browser = 'edge';

  let os = 'unknown';
  if (ua.includes('Windows')) os = 'windows';
  else if (ua.includes('Mac')) os = 'macos';
  else if (ua.includes('Linux')) os = 'linux';
  else if (ua.includes('Android')) os = 'android';
  else if (ua.includes('iOS') || ua.includes('iPhone') || ua.includes('iPad')) os = 'ios';

  return {
    deviceType: isMobile ? 'mobile' : 'desktop',
    browser,
    os,
    userAgent: ua
  };
};

// Analytics API
export const analyticsAPI = {
  trackEvent: async (eventName: string, metadata?: Record<string, any>) => {
    try {
      const deviceInfo = getDeviceInfo();
      await fetch(`${API_BASE_URL}/analytics/events`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sessionId: getSessionId(),
          userId: getUserId(),
          eventType: 'user_action',
          eventName,
          pagePath: window.location.pathname,
          metadata,
          ...deviceInfo,
          referrer: document.referrer
        })
      });
    } catch (error) {
      console.error('Analytics tracking error:', error);
    }
  },

  createSession: async () => {
    try {
      const deviceInfo = getDeviceInfo();
      const response = await fetch(`${API_BASE_URL}/analytics/sessions`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: getUserId(),
          referrer: document.referrer,
          trafficSource: document.referrer ? 'referral' : 'direct',
          ...deviceInfo
        })
      });
      return await response.json();
    } catch (error) {
      console.error('Session creation error:', error);
      return { sessionId: getSessionId() };
    }
  },

  updateSession: async (pageViews: number, isBounce: boolean) => {
    try {
      await fetch(`${API_BASE_URL}/analytics/sessions/${getSessionId()}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ pageViews, isBounce })
      });
    } catch (error) {
      console.error('Session update error:', error);
    }
  }
};

// Lead Generation API
export const leadsAPI = {
  createLead: async (leadData: {
    name: string;
    email: string;
    phone?: string;
    company?: string;
    subject?: string;
    message?: string;
    formType?: string;
  }) => {
    try {
      const response = await fetch(`${API_BASE_URL}/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...leadData,
          sessionId: getSessionId(),
          source: 'contact_form'
        })
      });
      return await response.json();
    } catch (error) {
      console.error('Lead creation error:', error);
      throw error;
    }
  }
};

// Social Sharing API
export const sharingAPI = {
  trackShare: async (platform: string, contentUrl: string, contentTitle?: string) => {
    try {
      await fetch(`${API_BASE_URL}/sharing`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sessionId: getSessionId(),
          platform,
          contentUrl,
          contentTitle,
          referrer: window.location.href
        })
      });
    } catch (error) {
      console.error('Share tracking error:', error);
    }
  }
};

// Retention API
export const retentionAPI = {
  subscribe: async (email: string, name?: string, source?: string) => {
    try {
      const response = await fetch(`${API_BASE_URL}/retention/subscribe`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          name,
          source: source || 'website'
        })
      });
      return await response.json();
    } catch (error) {
      console.error('Subscription error:', error);
      throw error;
    }
  }
};

// UX API
export const uxAPI = {
  getGreeting: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/ux/greeting?userId=${getUserId()}`);
      const data = await response.json();
      return data.greeting;
    } catch (error) {
      return 'Hello';
    }
  },

  trackInteraction: async (interactionType: string) => {
    try {
      await fetch(`${API_BASE_URL}/ux/interaction`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: getUserId(),
          interactionType
        })
      });
    } catch (error) {
      console.error('Interaction tracking error:', error);
    }
  }
};

// Recommendations API
export const recommendationsAPI = {
  getRecommendations: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/recommendations`);
      const data = await response.json();
      return data.recommendations;
    } catch (error) {
      console.error('Recommendations error:', error);
      return [];
    }
  }
};

