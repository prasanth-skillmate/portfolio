import { useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { analyticsAPI, getSessionId } from '@/lib/agents';

/**
 * Hook for tracking page views and user interactions
 */
export const useAnalytics = () => {
  const location = useLocation();

  // Track page view on route change
  useEffect(() => {
    analyticsAPI.trackEvent('page_view', {
      page: location.pathname,
      title: document.title
    });
  }, [location]);

  // Track clicks
  const trackClick = useCallback((elementId: string, metadata?: Record<string, any>) => {
    analyticsAPI.trackEvent('click', {
      elementId,
      ...metadata
    });
  }, []);

  // Track form interactions
  const trackFormInteraction = useCallback((formName: string, action: string) => {
    analyticsAPI.trackEvent('form_interaction', {
      formName,
      action
    });
  }, []);

  // Track scroll depth
  const trackScroll = useCallback((depth: number) => {
    analyticsAPI.trackEvent('scroll', {
      depth: `${depth}%`
    });
  }, []);

  // Track time on page
  useEffect(() => {
    const startTime = Date.now();
    
    return () => {
      const timeSpent = Math.round((Date.now() - startTime) / 1000);
      analyticsAPI.trackEvent('time_on_page', {
        seconds: timeSpent,
        page: location.pathname
      });
    };
  }, [location]);

  return {
    trackClick,
    trackFormInteraction,
    trackScroll,
    trackEvent: analyticsAPI.trackEvent
  };
};

