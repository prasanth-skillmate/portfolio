import { createContext, useContext, useEffect, ReactNode } from 'react';
import { useSession } from '@/hooks/useSession';
import { useAnalytics } from '@/hooks/useAnalytics';
import { uxAPI, getUserId } from '@/lib/agents';

interface AgentContextType {
  userId: string;
  sessionId: string;
}

const AgentContext = createContext<AgentContextType | undefined>(undefined);

export const AgentProvider = ({ children }: { children: ReactNode }) => {
  const { sessionId } = useSession();
  useAnalytics(); // Initialize analytics tracking
  const userId = getUserId();

  // Track page load
  useEffect(() => {
    uxAPI.trackInteraction('page_load');
  }, []);

  return (
    <AgentContext.Provider value={{ userId, sessionId }}>
      {children}
    </AgentContext.Provider>
  );
};

export const useAgent = () => {
  const context = useContext(AgentContext);
  if (!context) {
    throw new Error('useAgent must be used within AgentProvider');
  }
  return context;
};

