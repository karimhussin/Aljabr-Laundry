import React from 'react';

const ContactPage: React.FC = () => {
  const contactFormLink = "https://forms.gle/RJmMyWPVmdzQsrAM9";
  const aljabrLogoUrl = "https://saudipedia.com/saudipedia/uploads/images/2023/11/06/74629.jpg";

  return (
    <main className="min-h-screen flex items-center justify-center p-4 font-sans text-gray-800 animated-gradient">
      <div className="bg-bubbles">
        {/* Create 10 bubble elements */}
        {[...Array(10)].map((_, i) => <span key={i}></span>)}
      </div>
      <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 max-w-lg w-full text-center transform transition-all duration-500 hover:shadow-2xl relative z-10">
        <img src={aljabrLogoUrl} alt="ALJABR Logo" className="mx-auto mb-8 w-56" />
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          مرحباً بكم في شركات الجبر
        </h1>
        <p className="text-gray-600 mb-8 leading-relaxed">
          يسعدنا اهتمامكم بالتواصل معنا. يرجى الضغط على الزر أدناه للانتقال إلى نموذج التواصل.
        </p>
        <a
          href={contactFormLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#009cde] hover:bg-[#008ac7] text-white font-bold py-3 px-10 rounded-lg text-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
        >
          تواصل معنا
        </a>
      </div>
    </main>
  );
};

const App: React.FC = () => {
  return <ContactPage />;
};

export default App;