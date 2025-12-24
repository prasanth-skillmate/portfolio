import { MessageCircle } from 'lucide-react';

const WhatsAppFloat = () => {
  const whatsappMessage = encodeURIComponent("Hi, Just checked your website. Shall we have a quick call?");
  const whatsappUrl = `https://wa.me/919840969548?text=${whatsappMessage}`;
  
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 md:bottom-6 right-4 sm:right-6 z-40 group"
      aria-label="Chat on WhatsApp"
    >
      <div className="flex items-center gap-2 sm:gap-3 bg-green-500 hover:bg-green-600 text-white px-3 py-2.5 sm:px-4 sm:py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
        <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
        <span className="hidden sm:inline font-mono text-sm font-semibold">Chat on WhatsApp</span>
        <div className="absolute -top-1 -right-1 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-400 rounded-full animate-pulse" />
      </div>
    </a>
  );
};

export default WhatsAppFloat;

