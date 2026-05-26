export default function Home() {
  const faqs = [
    {
      q: "How does the reaction role system work?",
      a: "You configure which emoji on which message grants which role. When a member reacts, the bot instantly assigns the role. When they remove the reaction, the role is removed."
    },
    {
      q: "Do I need to keep my computer on for the bot to work?",
      a: "No. The bot runs on our servers 24/7. Once configured, it works automatically without any action on your part."
    },
    {
      q: "Can I set up multiple reaction-role mappings?",
      a: "Yes. You can create unlimited mappings across multiple messages and channels in your server from the dashboard."
    }
  ];

  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      {/* Hero */}
      <section className="text-center mb-20">
        <div className="inline-block bg-[#58a6ff] bg-opacity-10 border border-[#58a6ff] border-opacity-30 rounded-full px-4 py-1 text-[#58a6ff] text-sm mb-6">
          Discord Productivity Tool
        </div>
        <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
          Automate Discord Role Assignments<br />
          <span className="text-[#58a6ff]">via Reactions</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Stop manually assigning roles. Set up reaction-role mappings once and let the bot handle every assignment and removal automatically — for servers of any size.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-lg"
        >
          Get Started — $15/mo
        </a>
        <p className="text-[#8b949e] text-sm mt-3">Cancel anytime. Instant setup.</p>
      </section>

      {/* Features strip */}
      <section className="grid grid-cols-3 gap-4 mb-20">
        {[
          { icon: "⚡", label: "Instant role sync" },
          { icon: "🎛️", label: "Visual dashboard" },
          { icon: "♾️", label: "Unlimited mappings" }
        ].map((f) => (
          <div key={f.label} className="bg-[#161b22] border border-[#30363d] rounded-lg p-4 text-center">
            <div className="text-2xl mb-2">{f.icon}</div>
            <div className="text-sm text-[#c9d1d9]">{f.label}</div>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-xl p-8 max-w-sm mx-auto text-center">
          <div className="text-[#58a6ff] font-semibold mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$15</div>
          <div className="text-[#8b949e] mb-6">/month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited reaction-role rules",
              "Multi-server support",
              "Real-time role sync",
              "Dashboard analytics",
              "Priority support"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-[#c9d1d9]">
                <span className="text-[#58a6ff]">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Subscribe Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="bg-[#161b22] border border-[#30363d] rounded-lg p-6">
              <h3 className="font-semibold text-white mb-2">{faq.q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-sm mt-16">
        &copy; {new Date().getFullYear()} Discord Reaction Role Automator. All rights reserved.
      </footer>
    </main>
  );
}
