import { Phone, MessageCircle } from 'lucide-react';
import { useState } from 'react';
import CallbackModal from './CallbackModal';
import ChatBot from './ChatBot';

export default function StickyContactBar() {
  const [showCallbackModal, setShowCallbackModal] = useState(false);
  const [showChatBot, setShowChatBot] = useState(false);

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white shadow-lg border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-3 py-1.5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            <button
              onClick={() => setShowCallbackModal(true)}
              className="flex items-center justify-center gap-1.5 bg-[#0066FF] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#0052CC] transition-all"
            >
              <div className="bg-white rounded-full p-1">
                <Phone className="w-3 h-3 text-[#0066FF]" />
              </div>
              <span>Request a Callback</span>
            </button>

            <a
              href="tel:1800-212-7688"
              className="flex items-center justify-center gap-1.5 bg-white text-gray-900 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 transition-all border border-gray-300"
            >
              <div className="bg-[#0066FF] rounded-full p-1">
                <Phone className="w-3 h-3 text-white" />
              </div>
              <span className="hidden sm:inline text-xs">Call us on </span>
              <span className="font-semibold">1800-212-7688</span>
            </a>

            <button
              onClick={() => setShowChatBot(true)}
              className="flex items-center justify-center gap-1.5 bg-[#0066FF] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#0052CC] transition-all"
            >
              <div className="bg-white rounded-full p-1">
                <MessageCircle className="w-3 h-3 text-[#0066FF]" />
              </div>
              <span>Live Chat</span>
            </button>
          </div>
        </div>
      </div>

      <CallbackModal
        isOpen={showCallbackModal}
        onClose={() => setShowCallbackModal(false)}
      />

      <ChatBot
        isOpen={showChatBot}
        onClose={() => setShowChatBot(false)}
      />
    </>
  );
}
