import { Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-secondary to-accent" />
              <span className="text-xl font-bold">AI Resume Screener</span>
            </div>
            <p className="text-sm text-primary-foreground/80 max-w-md">
              Automate resume screening with AI. Save time, eliminate bias, and hire smarter.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><a href="/" className="hover:text-primary-foreground transition-colors">Home</a></li>
              <li><a href="/upload" className="hover:text-primary-foreground transition-colors">Upload</a></li>
              <li><a href="/dashboard" className="hover:text-primary-foreground transition-colors">Dashboard</a></li>
              <li><a href="/about" className="hover:text-primary-foreground transition-colors">About</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-secondary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} AI Resume Screener. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
