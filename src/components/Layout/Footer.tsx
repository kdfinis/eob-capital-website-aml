
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16 px-6">
      <div className="container max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <span className="text-2xl font-garamond font-medium text-ivory-200">
                EOB CAP
              </span>
            </Link>
            <p className="text-slate-400 text-sm">
              Regulatory infrastructure for tomorrow's capital.
            </p>
          </div>

          <div>
            <h3 className="font-medium text-ivory-100 mb-4">Products</h3>
            <ul className="space-y-2">
              <li><Link to="/aml-tool" className="text-slate-400 hover:text-ivory-100 transition-colors">AML Tool</Link></li>
              <li><Link to="/pepp" className="text-slate-400 hover:text-ivory-100 transition-colors">PEPP</Link></li>
              <li><Link to="/eltif" className="text-slate-400 hover:text-ivory-100 transition-colors">ELTIF</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-ivory-100 mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#vision" className="text-slate-400 hover:text-ivory-100 transition-colors">About</a></li>
              <li><a href="#regulatory" className="text-slate-400 hover:text-ivory-100 transition-colors">Compliance</a></li>
              <li><a href="#contact" className="text-slate-400 hover:text-ivory-100 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-ivory-100 mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="text-slate-400 hover:text-ivory-100 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-slate-400 hover:text-ivory-100 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">
              © {new Date().getFullYear()} EOB Capital. All rights reserved.
            </p>
            <p className="text-slate-500 text-xs mt-4 md:mt-0">
              Built for institutions. Ready for auditors.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
