import React from 'react';

const ContactPage: React.FC = () => {
  const contactFormLink = "https://forms.gle/RJmMyWPVmdzQsrAM9";
  const aljabrLogoUrl = "https://i.ibb.co/LVPRKw8/logo.png";
  const socialLinks = {
    linkedin: "#", // Placeholder link
    twitter: "#",  // Placeholder link
  };

  return (
    <main className="min-h-screen relative flex items-center justify-center p-4 font-sans bg-gray-100 text-gray-800 overflow-hidden">
      <div className="absolute inset-0 z-0">
          <div className="absolute top-0 -left-12 w-96 h-96 bg-teal-200 rounded-full filter blur-3xl opacity-50 animate-float"></div>
          <div className="absolute top-1/4 -right-12 w-96 h-96 bg-cyan-200 rounded-full filter blur-3xl opacity-50 animate-float animation-delay-2000"></div>
          <div className="absolute -bottom-16 left-1/4 w-96 h-96 bg-green-200 rounded-full filter blur-3xl opacity-60 animate-float animation-delay-4000"></div>
      </div>
      
      <div 
        className="relative z-10 bg-white/70 backdrop-blur-lg border border-gray-200 rounded-3xl shadow-xl p-8 md:p-12 max-w-lg w-full text-center
                   transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10"
      >
        
        <img 
          src={aljabrLogoUrl} 
          alt="شعار شركات الجبر" 
          className="mx-auto mb-8 w-60" 
        />
        
        <h1 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
          مرحباً بكم في شركات الجبر
        </h1>
        
        <p className="text-gray-600 mb-10 leading-relaxed text-base">
          يسعدنا اهتمامكم بالتواصل معنا. يرجى الضغط على الزر أدناه للانتقال إلى نموذج التواصل.
        </p>
        
        <a
          href={contactFormLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-x-3 bg-gradient-to-r from-cyan-500 to-teal-500
                     text-white font-bold py-3 px-10 rounded-lg text-lg
                     transition-all duration-300 ease-in-out
                     transform hover:scale-105 hover:shadow-lg hover:shadow-teal-500/40 ring-2 ring-transparent hover:ring-white/50"
        >
          <span>تواصل معنا</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform -scale-x-100" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </a>

        <div className="mt-10 pt-6 border-t border-gray-200/80">
          <p className="text-sm text-gray-500 mb-4">
            تابعنا على شبكات التواصل الاجتماعي
          </p>
          <div className="flex justify-center items-center gap-x-6">
            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="text-gray-400 hover:text-cyan-600 transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter Profile" className="text-gray-400 hover:text-teal-600 transition-colors duration-300">
               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                 <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.627l-5.21-6.815-6.041 6.815h-3.308l7.73-8.805-7.956-10.69h6.766l4.575 6.15zm-2.433 1.25h-2.07l12.44 16.5h2.07l-12.44-16.5z"/>
               </svg>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

const App: React.FC = () => {
  return <ContactPage />;
};

export default App;
