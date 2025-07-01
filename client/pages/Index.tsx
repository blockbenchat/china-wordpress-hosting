import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  Server,
  Shield,
  Zap,
  Globe,
  Clock,
  Star,
} from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-ocean-green rounded-lg flex items-center justify-center">
                  <Server className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-ocean-green">
                  ARZ Host
                </span>
              </div>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <a
                href="https://arzhost.com/region-based-vps/"
                className="text-sm font-medium hover:text-ocean-green transition-colors"
              >
                VPS Region
              </a>
              <a
                href="https://arzhost.com/vps/"
                className="text-sm font-medium hover:text-ocean-green transition-colors"
              >
                VPS Server Hong Kong
              </a>
              <a
                href="https://arzhost.com/lifetime-web-hosting/"
                className="text-sm font-medium hover:text-ocean-green transition-colors"
              >
                Lifetime Web Hosting
              </a>
              <a
                href="https://www.arzhost.com/about-us/"
                className="text-sm font-medium hover:text-ocean-green transition-colors"
              >
                About Us
              </a>
              <a
                href="https://www.arzhost.com/contact-us/"
                className="text-sm font-medium hover:text-ocean-green transition-colors"
              >
                Contact
              </a>
            </nav>

            <Button asChild className="bg-ocean-green hover:bg-ocean-green/90">
              <a href="https://arzhost.com/vps/">Get Started</a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-sand-yellow/20 via-background to-ocean-blue/5">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Badge
              variant="secondary"
              className="mb-6 bg-ocean-blue/10 text-ocean-blue border-ocean-blue/20"
            >
              China‑Ready VPS Hosting
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Power your site from inside China—
              <span className="text-ocean-green">
                fast, compliant, and always on
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Low‑latency servers, ICP‑license assistance, and enterprise‑grade
              security in one affordable package.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-ocean-green hover:bg-ocean-green/90 text-white text-lg px-8 py-6"
            >
              <a href="https://arzhost.com/vps/">Launch My China VPS →</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              💡 Why Host Inside Mainland China?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-ocean-blue/10 hover:border-ocean-blue/30 transition-colors">
              <CardHeader>
                <Zap className="w-8 h-8 text-ocean-blue mb-2" />
                <CardTitle className="text-lg">Ultra‑Low Latency</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Pages open in milliseconds for visitors across Beijing,
                  Shanghai, Shenzhen, and beyond—no Great‑Firewall slow‑downs.
                </p>
              </CardContent>
            </Card>

            <Card className="border-mango-orange/10 hover:border-mango-orange/30 transition-colors">
              <CardHeader>
                <Globe className="w-8 h-8 text-mango-orange mb-2" />
                <CardTitle className="text-lg">
                  Baidu & Local‑SEO Boost
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Search engines rank sites hosted on Chinese IPs higher, giving
                  you front‑page visibility for local keywords.
                </p>
              </CardContent>
            </Card>

            <Card className="border-ocean-green/10 hover:border-ocean-green/30 transition-colors">
              <CardHeader>
                <Shield className="w-8 h-8 text-ocean-green mb-2" />
                <CardTitle className="text-lg">Legal Compliance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We walk you through ICP filing, keeping your brand 100% in
                  line with MIIT regulations.
                </p>
              </CardContent>
            </Card>

            <Card className="border-ocean-blue/10 hover:border-ocean-blue/30 transition-colors">
              <CardHeader>
                <Server className="w-8 h-8 text-ocean-blue mb-2" />
                <CardTitle className="text-lg">Chinese CDN Access</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Nationwide content delivery ensures lightning‑fast image,
                  video, and file loads—even during peak traffic.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-sand-yellow/10">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              📦 VPS Plans & Pricing — Powered by{" "}
              <a
                href="https://arzhost.com/"
                className="text-ocean-green hover:underline"
              >
                ARZ Host
              </a>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {[
              {
                name: "Starter VPS",
                cpu: "1 vCore",
                ram: "2 GB",
                storage: "20 GB",
                price: "$12.50",
              },
              {
                name: "Value VPS",
                cpu: "1 vCore",
                ram: "2 GB",
                storage: "40 GB",
                price: "$16.00",
              },
              {
                name: "Essential VPS",
                cpu: "2 vCores",
                ram: "4 GB",
                storage: "80 GB",
                price: "$34.00",
                popular: true,
              },
              {
                name: "Comfort VPS",
                cpu: "4 vCores",
                ram: "8 GB",
                storage: "160 GB",
                price: "$54.00",
              },
              {
                name: "Elite VPS",
                cpu: "8 vCores",
                ram: "8–32 GB",
                storage: "160–640 GB",
                price: "$60.00+",
              },
            ].map((plan, index) => (
              <Card
                key={index}
                className={`relative ${plan.popular ? "border-ocean-green shadow-lg scale-105" : "border-gray-200"}`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-ocean-green text-white">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-lg">{plan.name}</CardTitle>
                  <div className="text-3xl font-bold text-ocean-green">
                    {plan.price}
                  </div>
                  <CardDescription>Monthly Price*</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-ocean-green" />
                    <span className="text-sm">
                      {plan.cpu} / {plan.ram}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-ocean-green" />
                    <span className="text-sm">{plan.storage} NVMe SSD</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-ocean-green" />
                    <span className="text-sm">250 Mbit Bandwidth</span>
                  </div>
                  <Button
                    asChild
                    className="w-full mt-4 bg-ocean-green hover:bg-ocean-green/90"
                  >
                    <a href="https://arzhost.com/vps/">Choose Plan</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <p className="text-center text-sm text-muted-foreground mt-8">
            *Pricing verified July 1 2025.{" "}
            <a
              href="https://arzhost.com/"
              className="text-ocean-green hover:underline"
            >
              arzhost.com
            </a>
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              🔑 What's Included—Every Plan
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Full Root Access – Install any OS or software stack; you're in total control.",
              "NVMe‑Backed Storage – Up to 6× faster reads/writes than SATA SSDs for snappy databases and CMSs.",
              "KVM Virtualization ��� Dedicated CPU & RAM, isolated from noisy neighbors for stable performance.",
              "DDoS Shield – Always‑on mitigation keeps your site online when attacks strike.",
              "24/7 Bilingual Support – Mandarin & English engineers on live chat, email, and phone.",
              "Weekly Snapshots – Automated backups with single‑click restores safeguard your data.",
            ].map((feature, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-ocean-green mt-0.5 flex-shrink-0" />
                <p className="text-muted-foreground">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plan Recommendations */}
      <section className="py-20 bg-sand-yellow/10">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              🎯 Which Plan Fits You?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Starter / Value</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Perfect for personal blogs, small business sites, or staging
                  servers. Two gigs of RAM keep WordPress, Joomla, or Ghost
                  running smoothly while NVMe drives slash load times.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Essential</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  A dual‑core boost for growing stores or SaaS MVPs. Handles
                  moderate traffic, small databases, and light API workloads
                  without breaking the bank.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Comfort</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Quad‑core muscle and 8 GB RAM deliver headroom for
                  high‑traffic e‑commerce, multiple client sites, or real‑time
                  apps. Great choice when uptime and speed drive revenue.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Elite</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Enterprise horsepower for large catalogs, media platforms, or
                  regional clusters. Scale RAM to 32 GB and storage to 640 GB as
                  demand spikes—no migration needed.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ⚙️ From Checkout to Go‑Live—in Three Steps
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-ocean-green rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Pick a Plan</h3>
              <p className="text-muted-foreground">
                Order online; servers provision in minutes.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-ocean-blue rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Submit ICP Docs</h3>
              <p className="text-muted-foreground">
                We review and file with MIIT, guiding every requirement.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-mango-orange rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Deploy & Scale</h3>
              <p className="text-muted-foreground">
                Upload your code, attach a Chinese CDN, and expand resources
                anytime from your dashboard.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              size="lg"
              className="bg-ocean-green hover:bg-ocean-green/90 text-white text-lg px-8 py-6"
            >
              <a href="https://arzhost.com/vps/">Get Started →</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-sand-yellow/10">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Watch How It Works
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.youtube.com/embed/p8qVXz_2mPI"
                title="ARZ Host VPS Hosting Demo"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ⭐ Client Stories
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-mango-orange text-mango-orange"
                    />
                  ))}
                </div>
                <blockquote className="text-lg mb-4">
                  "Switching to a mainland VPS cut our page load from 4s to
                  under 1s. Baidu rankings jumped within weeks."
                </blockquote>
                <cite className="text-muted-foreground">
                  — Liang Z., Head of E‑Commerce, Shenzhen
                </cite>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-mango-orange text-mango-orange"
                    />
                  ))}
                </div>
                <blockquote className="text-lg mb-4">
                  "The ARZ team made the ICP process painless. Our China
                  microsite was live ahead of schedule and under budget."
                </blockquote>
                <cite className="text-muted-foreground">
                  — Rachel M., Global Marketing Director
                </cite>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-sand-yellow/10">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ❓ Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {[
              {
                question: "Do I really need an ICP license?",
                answer:
                  "Yes. Any public website hosted on a Chinese server must display a valid ICP number. Hosting without one risks takedown by local ISPs. We handle the paperwork, translations, and direct submission so you can focus on launch day.",
              },
              {
                question: "Can a foreign‑owned company apply for ICP?",
                answer:
                  "Absolutely. You'll need a Chinese‑registered business entity or a local partner; we'll outline acceptable structures, gather the required ID & corporate docs, and liaise with MIIT until approval comes through (typically 2–3 weeks).",
              },
              {
                question: "What if my traffic suddenly spikes?",
                answer:
                  "Our on‑demand scaling adds CPU, RAM, or storage in seconds, with no downtime. Combined with unmetered 250 Mbit bandwidth and optional Chinese CDN nodes, your site stays quick—even during flash sales or viral campaigns.",
              },
              {
                question: "Is the VPS fully managed?",
                answer:
                  "By default, servers are self‑managed to give you maximum freedom. If you prefer hands‑off operations, add a managed‑service pack and our sysadmins will handle updates, hardening, and monitoring 24/7—backed by strict SLAs.",
              },
              {
                question: "How secure is my data?",
                answer:
                  "Each instance lives in an isolated KVM container with its own firewall. Weekly snapshots plus optional daily backups let you roll back any time. Enterprise‑grade DDoS filtering and 24/7 security ops keep threats at bay.",
              },
            ].map((faq, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-ocean-green text-white">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            🌟 Ready to Dominate the Chinese Market?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Launch a compliant, high‑performance VPS today—backed by local
            expertise and global‑grade infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="text-lg px-8 py-6"
            >
              <a href="https://arzhost.com/vps/">Start My China VPS</a>
            </Button>
            <div className="flex items-center space-x-4 text-white/80">
              <span>Live Chat</span>
              <span>|</span>
              <span>+86‑400‑123‑4567</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-ocean-green rounded-lg flex items-center justify-center">
                  <Server className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">ARZ Host</span>
              </div>
              <p className="text-gray-400 mb-4">
                Professional{" "}
                <a
                  href="https://arzhost.com/vps/"
                  className="text-ocean-green hover:underline"
                >
                  vps hosting hong kong
                </a>{" "}
                and China VPS solutions.
              </p>
              <div className="space-y-2 text-sm text-gray-400">
                <p>
                  Website:{" "}
                  <a
                    href="https://arzhost.com/"
                    className="text-ocean-green hover:underline"
                  >
                    arzhost.com
                  </a>
                </p>
                <p>Phone: +1 (631) 594-8060</p>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="https://arzhost.com/region-based-vps/"
                    className="hover:text-white transition-colors"
                  >
                    VPS Region
                  </a>
                </li>
                <li>
                  <a
                    href="https://arzhost.com/vps/"
                    className="hover:text-white transition-colors"
                  >
                    VPS Server Hong Kong
                  </a>
                </li>
                <li>
                  <a
                    href="https://arzhost.com/lifetime-web-hosting/"
                    className="hover:text-white transition-colors"
                  >
                    Lifetime Web Hosting
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="https://www.arzhost.com/about-us/"
                    className="hover:text-white transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.arzhost.com/contact-us/"
                    className="hover:text-white transition-colors"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="https://www.arzhost.com/terms-conditions/"
                    className="hover:text-white transition-colors"
                  >
                    Terms and Conditions
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.arzhost.com/privacy-policy/"
                    className="hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.arzhost.com/disclaimer/"
                    className="hover:text-white transition-colors"
                  >
                    Disclaimer
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 ARZ Host. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
