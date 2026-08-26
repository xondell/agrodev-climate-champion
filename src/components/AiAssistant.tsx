import { Bot, MessageCircle, Send, Sparkles, X } from "lucide-react";
import { FormEvent, useState } from "react";
import { askAgroHelp } from "@/lib/agrohelp-ai";

type Message = { role: "assistant" | "user"; text: string };

const welcome =
  "Hi! I’m AgroHelp, your farming assistant. Ask me about field data, irrigation, crop protection or product traceability.";

export function AiAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [messages, setMessages] = useState<Message[]>([{ role: "assistant", text: welcome }]);

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const question = input.trim();
    if (!question) return;

    const nextMessages = [...messages, { role: "user" as const, text: question }];
    setMessages(nextMessages);
    setInput("");
    setIsSending(true);

    try {
      const { reply } = await askAgroHelp({ data: { messages: nextMessages.slice(-10) } });
      setMessages((current) => [...current, { role: "assistant", text: reply }]);
    } catch {
      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          text: "I can’t connect to AgroHelp AI right now. Please try again in a moment.",
        },
      ]);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 sm:bottom-6 sm:right-6">
      {isOpen && (
        <section
          className="mb-3 flex h-[min(32rem,calc(100vh-6.5rem))] w-[calc(100vw-2rem)] max-w-sm flex-col overflow-hidden rounded-3xl border border-border bg-background shadow-2xl"
          aria-label="AgroHelp AI assistant"
        >
          <header className="flex items-center justify-between bg-primary px-4 py-3 text-primary-foreground">
            <div className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary-foreground/15">
                <Bot size={20} />
              </span>
              <div>
                <p className="font-display font-bold">AgroHelp AI</p>
                <p className="text-xs opacity-75">Farm guidance, anytime</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="grid h-9 w-9 place-items-center rounded-lg transition-colors hover:bg-primary-foreground/15"
              aria-label="Close assistant"
            >
              <X size={19} />
            </button>
          </header>

          <div className="flex-1 space-y-3 overflow-y-auto bg-secondary/30 p-4">
            {messages.map((message, index) => (
              <p
                key={`${message.role}-${index}`}
                className={`max-w-[88%] rounded-2xl px-3.5 py-2.5 text-sm leading-6 ${
                  message.role === "user"
                    ? "ml-auto rounded-br-md bg-primary text-primary-foreground"
                    : "rounded-bl-md bg-card text-foreground shadow-sm"
                }`}
              >
                {message.text}
              </p>
            ))}
            {isSending && (
              <p className="w-max rounded-2xl rounded-bl-md bg-card px-3.5 py-2.5 text-sm text-muted-foreground shadow-sm">
                AgroHelp is thinking...
              </p>
            )}
          </div>

          <div className="border-t border-border bg-background p-3">
            <div className="mb-2 flex gap-2 overflow-x-auto pb-1">
              {["When should I irrigate?", "How does QR traceability work?"].map((prompt) => (
                <button
                  key={prompt}
                  type="button"
                  onClick={() => setInput(prompt)}
                  className="shrink-0 rounded-full border border-border px-3 py-1.5 text-xs font-medium text-primary transition-colors hover:bg-secondary"
                >
                  {prompt}
                </button>
              ))}
            </div>
            <form onSubmit={submit} className="flex gap-2">
              <input
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Ask AgroHelp..."
                aria-label="Your question for AgroHelp"
                className="min-w-0 flex-1 rounded-xl border border-input bg-background px-3 py-2 text-sm outline-none ring-ring/30 placeholder:text-muted-foreground focus:ring-2"
              />
              <button
                type="submit"
                className="grid h-10 w-10 place-items-center rounded-xl bg-accent text-accent-foreground transition-transform hover:-translate-y-0.5 disabled:opacity-50"
                aria-label="Send question"
                disabled={!input.trim() || isSending}
              >
                <Send size={17} />
              </button>
            </form>
          </div>
        </section>
      )}

      {!isOpen && (
        <p className="mb-2 ml-auto w-max max-w-[15rem] rounded-xl bg-background px-3 py-2 text-xs font-medium text-foreground shadow-lg ring-1 ring-border">
          Need farm guidance?
        </p>
      )}
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        className="ml-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-xl transition-transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-primary/25"
        aria-label={isOpen ? "Close AgroHelp AI assistant" : "Open AgroHelp AI assistant"}
        aria-expanded={isOpen}
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
        {!isOpen && <Sparkles className="absolute right-1 top-1 text-accent" size={15} fill="currentColor" />}
      </button>
    </div>
  );
}
