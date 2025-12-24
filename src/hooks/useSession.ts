import { useEffect } from 'react';
import { analyticsAPI, getSessionId } from '@/lib/agents';

/**
 * Hook for managing user sessions
 */
export const useSession = () => {
  useEffect(() => {
    // Create session on mount
    analyticsAPI.createSession();

    // Track page views
    let pageViews = 1;
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        pageViews++;
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Update session on unload
    const handleBeforeUnload = () => {
      const isBounce = pageViews <= 1;
      analyticsAPI.updateSession(pageViews, isBounce);
    };
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('beforeunload', handleBeforeUnload);
      
      // Final update
      const isBounce = pageViews <= 1;
      analyticsAPI.updateSession(pageViews, isBounce);
    };
  }, []);

  return {
    sessionId: getSessionId()
  };
};

