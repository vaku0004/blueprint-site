import React, { useState } from 'react';
import { 
  Truck, 
  Users, 
  TrendingUp, 
  Zap, 
  CheckCircle, 
  ArrowRight, 
  Menu,
  X,
  Target,
  Cpu,
  UserCheck,
  ChevronDown // Добавлен для аккордеона
} from 'lucide-react';

// --- Components ---

const Button = ({ children, variant = 'primary', className = '', onClick }) => {
  const baseStyle = "px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2 active:scale-95";
  const variants = {
    primary: "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 hover:from-blue-500 hover:to-indigo-500",
    secondary: "bg-white/10 text-white backdrop-blur-md border border-white/10 hover:bg-white/20 hover:border-white/20",
    outline: "border border-zinc-700 text-zinc-300 hover:border-zinc-500 hover:text-white"
  };

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} onClick={onClick}>
      {children}
    </button>
  ); 
};

const Card = ({ children, className = '' }) => (
  <div className={`bg-zinc-900/50 backdrop-blur-sm border border-white/5 rounded-3xl p-6 ${className}`}>
    {children}
  </div>
);

const Badge = ({ children }) => (
  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-4 inline-block">
    {children}
  </span>
);

// --- Sections ---
/* ===== SVG ICONS (INLINE) ===== */
/* ===== SVG ICONS (INLINE) ===== */
const LogoStack = ({ className = "" }) => (
  <svg viewBox="0 0 40 48" xmlns="http://www.w3.org/2000/svg" className={className}>
    <g clipRule="evenodd" fillRule="evenodd">
      <path
        d="m34.5868 8.40061-9.6868-2.59556c-.6687-.17919-1.2108.23679-1.2108.92911v10.02854c0 .6923.5421 1.3988 1.2108 1.578l9.6868 2.5955c.6687.1792 1.2109-.2368 1.2109-.9291v-10.02848z"
        fill="#8098f9"
      />
      <path
        d="m26.9812 16.5707-12.1085-3.2444c-.6687-.1792-1.2109.2368-1.2109.9291v12.5356c0 .6923.5422 1.3988 1.2109 1.578l12.1085 3.2445c.6687.1792 1.2108-.2368 1.2108-.9291v-12.5356z"
        fill="#6172f3"
      />
      <path
        d="m19.3736 24.7409-14.53021-3.8934c-.66873-.1792-1.21085.2368-1.21085.9291v15.0428c0 .6923.54212 1.3988 1.21085 1.578l14.53021 3.8933c.6687.1792 1.2108-.2368 1.2108-.9291v-15.0427z"
        fill="#444ce7"
      />
    </g>
  </svg>
);

const LogoWordmark = ({ className = "" }) => (
  <svg viewBox="0 0 188 48" xmlns="http://www.w3.org/2000/svg" className={className}>
    <g fill="currentColor">
      <path d="m0 15.8981h17.3455l-17.0613 17.0613 2.7564 2.7564 17.0613-17.0613v17.3455h.1104l3.7877-3.7877v-15.9638l-4.2485-4.2485h-15.966z" />
    </g>
  </svg>
);

const LogoCircle = ({ className = "" }) => (
  <svg viewBox="0 0 197 48" xmlns="http://www.w3.org/2000/svg" className={className}>
    <g fill="currentColor">
      <path
        clipRule="evenodd"
        fillRule="evenodd"
        d="m0 24c15.2548 0 24-8.7452 24-24 0 15.2548 8.7452 24 24 24-15.2548 0-24 8.7452-24 24 0-15.2548-8.7452-24-24-24z"
      />
    </g>
  </svg>
);

/* ===== TRUST SECTION ===== */
const TrustSection = () => {
  const logos = [
    { name: "North Star Logistics", Icon: LogoStack },
    { name: "TransGlobal Freight", Icon: LogoWordmark },
    { name: "Eagle Transport Co.", Icon: LogoCircle },
    { name: "Pacific Hauling", Icon: LogoStack },
    { name: "Midwest Express", Icon: LogoWordmark },
    { name: "Rocky Mountain Fleet", Icon: LogoCircle }
  ];

  return (
    <section className="px-4 py-16 bg-zinc-900/30 border-t border-b border-white/5">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Trusted by Top Trucking Fleets
        </h2>

        <p className="text-xl text-zinc-400 mb-12 max-w-3xl mx-auto">
          Fleets and recruiting teams rely on our system to build predictable
          driver-hiring pipelines without job boards or costly recruiters.
        </p>

        {/* Logos Block */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-8 max-w-6xl mx-auto">
          {logos.map(({ name, Icon }, index) => (
            <div
              key={index}
              className="group flex flex-col items-center gap-3 grayscale hover:grayscale-0 transition-all duration-500"
            >
              {/* ICON */}
              <div className="flex items-center justify-center h-10 w-full">
                <Icon className="h-8 w-auto max-w-[110px] block mx-auto text-white/70 transition-colors group-hover:text-white" />
              </div>

              {/* COMPANY NAME */}
              <span className="text-xs font-medium text-zinc-500 text-center transition-colors leading-tight group-hover:text-white">
                {name}
              </span>
            </div>
          ))}
        </div>

        <p className="text-sm text-zinc-500 mt-12">
          Trusted by regional and large carriers managing 25–250+ trucks.
        </p>
      </div>
    </section>
  );
};
const HomeSection = ({ setPage }) => (
  // Added space-y-24 to separate the new section
  <div className="space-y-24 animate-in fade-in slide-in-from-bottom-4 duration-700">
    {/* Hero - UPDATED */}
    <section className="relative pt-10 text-center max-w-4xl mx-auto px-4">
      <Badge>A Proven 3-Step System</Badge>
      <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6 leading-tight">
        Hire CDL drivers you’re <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">not competing for</span>
      </h1>
      <p className="text-xl text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed">
        A proven 3-step system that helps trucking companies attract, qualify, and hire drivers — without job boards or recruiters.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button onClick={() => setPage('contact')}>
          Book a Strategy Call
          <ArrowRight size={18} />
        </Button>
        <Button variant="secondary" onClick={() => setPage('how-it-works')}>
          See how it works
        </Button>
      </div>
      
      {/* Abstract Dashboard Graphic - Truck Driver Image */}
      <div className="mt-16 relative">
        <div className="absolute inset-0 bg-blue-500/20 blur-[100px] rounded-full opacity-50 pointer-events-none" />
        <img 
          // Обновлено изображение на водителя грузовика в кабине
          // Используем прямой URL для IpNMxycrk2o и обновленное русское описание alt
          src="https://plus.unsplash.com/premium_photo-1670650045802-4e0d3a3a4d19?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="Профессиональный водитель грузовика, улыбающийся рядом со своим полуприцепом." 
          className="relative rounded-3xl border border-white/10 shadow-2xl shadow-black/50 w-full object-cover h-[400px] opacity-80 object-center" 
        />
        <div className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 bg-zinc-950 border border-zinc-800 p-4 rounded-2xl flex gap-8 shadow-xl whitespace-nowrap overflow-hidden max-w-[90vw]">
           <div className="text-center">
             <div className="text-2xl font-bold text-white">14 Days</div>
             <div className="text-xs text-zinc-500">Avg. Time to Hire</div>
           </div>
           <div className="w-px bg-zinc-800"></div>
           <div className="text-center">
             <div className="text-2xl font-bold text-blue-400">Class A</div>
             <div className="text-xs text-zinc-500">Qualified Leads</div>
           </div>
        </div>
      </div>
    </section>

    {/* Problem / Solution Grid (Existing Content) */}
    <section className="px-4">
      <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        <Card className="bg-red-500/5 border-red-500/10">
          <div className="p-2 bg-red-500/10 w-fit rounded-lg mb-4 text-red-400">
            <X size={24} />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">The Old Method</h3>
          <ul className="space-y-3 text-zinc-400">
            <li className="flex gap-2"><span>•</span> Expensive and empty leads from Job Boards</li>
            <li className="flex gap-2"><span>•</span> Endless calls to uninterested candidates</li>
            <li className="flex gap-2"><span>•</span> Dependent on recruiter's luck</li>
            <li className="flex gap-2"><span>•</span> High Churn Rate</li>
          </ul>
        </Card>
        
        <Card className="bg-emerald-500/5 border-emerald-500/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/20 blur-[60px]" />
          <div className="p-2 bg-emerald-500/10 w-fit rounded-lg mb-4 text-emerald-400">
            <CheckCircle size={24} />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">The Blueprint Method</h3>
          <ul className="space-y-3 text-zinc-300">
            <li className="flex gap-2"><CheckCircle size={16} className="mt-1 text-emerald-500"/> Automated Screening Funnel</li>
            <li className="flex gap-2"><CheckCircle size={16} className="mt-1 text-emerald-500"/> Candidates ready to hit the road</li>
            <li className="flex gap-2"><CheckCircle size={16} className="mt-1 text-emerald-500"/> Predictable Cost-per-Hire</li>
            <li className="flex gap-2"><CheckCircle size={16} className="mt-1 text-emerald-500"/> The system stays with you</li>
          </ul>
        </Card>
      </div>
    </section>

    {/* New 3-Card System Section - Сокращенные заголовки и текст */}
    <section className="px-4">
      <div className="text-center max-w-xl mx-auto mb-12">
        <h2 className="text-3xl font-bold text-white">The 3-Step Blueprint System</h2>
        <p className="text-zinc-400 mt-2">The proven process to attract and qualify CDL Class A drivers.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {[
          {
            step: "STEP 1",
            // Сокращенный заголовок
            title: "1. Target Hidden Drivers", 
            // Сокращенное описание
            desc: "Most fleets chase the same drivers on job boards. We target a hidden pool of qualified CDL drivers in your specific lanes and terminal areas.",
            // Сокращенный результат
            outcome: "Higher response rate from exclusive talent pool.", 
            icon: Target,
            color: "blue"
          },
          {
            step: "STEP 2",
            // Сокращенный заголовок
            title: "2. Engage & Qualify Leads", 
            // Сокращенное описание
            desc: "We use targeted messaging to get interested drivers to show interest immediately, eliminating the long wait for applications.",
            // Сокращенный результат
            outcome: "Less time wasted on unqualified applicants.", 
            icon: Cpu,
            color: "indigo"
          },
          {
            step: "STEP 3",
            // Сокращенный заголовок
            title: "3. Automate Screening & Hiring", 
            // Сокращенное описание
            desc: "Automation handles instant pre-screening, follow-ups, and interview scheduling, drastically reducing manual work and no-shows.",
            // Сокращенный результат
            outcome: "Faster hires with maximum attendance.", 
            icon: Zap,
            color: "emerald"
          }
        ].map((item, index) => (
          <Card key={index} className="flex flex-col relative overflow-hidden h-full">
            <div className={`p-2 w-fit rounded-lg mb-4 text-${item.color}-400 bg-${item.color}-500/10`}>
              {React.createElement(item.icon, { size: 24 })}
            </div>
            <span className={`text-sm font-semibold mb-3 text-${item.color}-400`}>{item.step}</span>
            <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
            <p className="text-zinc-400 mb-6 flex-1">{item.desc}</p>
            
            <div className="border-t border-white/5 pt-4">
              <div className="flex items-center gap-2 text-sm font-medium text-white mb-2">
                <CheckCircle size={14} className={`text-${item.color}-400`} />
                Outcome
              </div>
              <p className="text-zinc-300 text-sm italic">{item.outcome}</p>
            </div>
          </Card>
        ))}
      </div>
    </section>
    
    {/* Trust Section added here */}
    <TrustSection />
  </div>
);

// --- Components for HowItWorksSection ---

const TimelineSection = () => (
  <div className="max-w-4xl mx-auto px-4 py-16">
    <div className="text-center mb-12">
      <h3 className="text-3xl font-bold text-white mb-2">What Happens in the First 30 Days (Timeline)</h3>
      <p className="text-zinc-400">This creates a predictable hiring rhythm instead of random results.</p>
    </div>
    <ol className="relative border-l border-indigo-500/50 space-y-10 ml-4 md:ml-0">
      {[
        { week: 'Week 1', title: 'Campaign Setup & Launch', desc: 'Campaign setup, targeting, and launch.' },
        { week: 'Week 2', title: 'Driver Screening Starts', desc: 'Drivers start raising their hands and get screened automatically.' },
        { week: 'Week 3', title: 'Interviews Scheduled', desc: 'Interviews scheduled without manual follow-ups.' },
        { week: 'Week 4', title: 'Hiring & First Runs', desc: 'Drivers hired and first runs scheduled.' },
      ].map((item, index) => (
        <li key={index} className="mb-10 ml-6">
          <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ring-8 ring-zinc-950 bg-indigo-600/50 border border-indigo-500 text-white font-bold text-sm">
            {index + 1}
          </span>
          <h4 className="text-xl font-semibold text-white">{item.week}</h4>
          <p className="text-lg text-indigo-400 mt-1 mb-2">{item.title}</p>
          <p className="text-zinc-400">{item.desc}</p>
        </li>
      ))}
    </ol>
  </div>
);

const AIVsHumanSection = () => (
  <div className="max-w-6xl mx-auto px-4 py-16">
    <div className="text-center mb-12">
      <h3 className="text-3xl font-bold text-white mb-2">AI Removes the Busy Work</h3>
      <p className="text-zinc-400">You stay in control. AI handles the repetitive tasks.</p>
    </div>
    <div className="grid md:grid-cols-2 gap-6">
      <Card className="border-blue-500/20 bg-blue-900/10">
        <div className="flex items-center gap-3 mb-4">
          <Cpu size={24} className="text-blue-400" />
          <h4 className="text-xl font-bold text-white">AI Handles:</h4>
        </div>
        <ul className="space-y-3 text-zinc-300 ml-4 list-disc marker:text-blue-500">
          <li>Initial screening and verification</li>
          <li>Qualification rules application</li>
          <li>Follow-ups and reminders (SMS/Email)</li>
        </ul>
      </Card>
      <Card className="border-emerald-500/20 bg-emerald-900/10">
        <div className="flex items-center gap-3 mb-4">
          <Users size={24} className="text-emerald-400" />
          <h4 className="text-xl font-bold text-white">Your Team Handles:</h4>
        </div>
        <ul className="space-y-3 text-zinc-300 ml-4 list-disc marker:text-emerald-500">
          <li>Final interviews</li>
          <li>Final hiring decisions</li>
          <li>Culture and fit assessment</li>
        </ul>
      </Card>
    </div>
  </div>
);


const HowItWorksSection = () => (
  // Updated max-width for better display of the new sections
  <div className="max-w-6xl mx-auto py-10 animate-in fade-in slide-in-from-bottom-8 duration-700">
    <div className="text-center mb-16 px-4">
      <Badge>Process</Badge>
      <h2 className="text-4xl font-bold text-white mb-4">How the System Works</h2>
      <p className="text-zinc-400">From cold traffic to first run in 3 steps.</p>
    </div>

    {/* Original 3-Step Process (kept without change) */}
    <div className="grid gap-8 px-4">
      {[
        {
          icon: <Target size={32} />,
          title: "1. Targeting & Acquisition",
          desc: "We don't post jobs on Craigslist. We run targeted social media campaigns aimed specifically at CDL Class A drivers with 2+ years of experience in your region.",
          color: "blue"
        },
        {
          icon: <Cpu size={32} />,
          title: "2. AI Screening",
          desc: "Our automated system instantly verifies drivers: safety violations (PSP), experience, and license type. Recruiters only receive pre-qualified candidates.",
          color: "indigo"
        },
        {
          icon: <UserCheck size={32} />,
          title: "3. Hire & Onboarding",
          desc: "The driver is automatically scheduled for an interview in the recruiter's calendar. The system sends reminders to boost interview attendance.",
          color: "emerald"
        }
      ].map((step, idx) => (
        <Card key={idx} className="relative group hover:bg-zinc-800/50 transition-colors">
          <div className="flex flex-col md:flex-row gap-6 items-start">
             <div className={`p-4 rounded-2xl bg-${step.color}-500/10 text-${step.color}-400 shrink-0`}>
               {step.icon}
             </div>
             <div>
               <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
               <p className="text-zinc-400 leading-relaxed">{step.desc}</p>
             </div>
          </div>
        </Card>
      ))}
    </div>

    {/* New Timeline Section */}
    <TimelineSection />

    {/* New AI vs Human Section */}
    <AIVsHumanSection />
  </div>
);

// --- New About Page Components ---

const CEOSummarySection = () => (
  // Removed py-16 to control spacing in the parent AboutSection
  <div className="max-w-6xl mx-auto px-4">
    <div className="grid md:grid-cols-2 gap-12 items-center">
      {/* Text Content (Left Side) */}
      <div className="space-y-6">
        <h2 className="text-5xl font-bold text-white leading-tight">
          In 2018 <br />
          That's how <br />
          <span className="text-blue-400">GetTruckDrivers</span> <br />
          was born.
        </h2>
        <p className="text-zinc-400 leading-relaxed">
          Canada and the US are currently facing a huge deficit of drivers. With the aging driving force and fewer people entering the industry, the problem of driver shortages is climbing day by day.
        </p>
        <p className="text-zinc-300 font-medium leading-relaxed">
          GetTruckDrivers.com helps and coaches struggling trucking companies grow and find high-caliber drivers through strategic outreach and powerful marketing.
        </p>
        <p className="text-zinc-300 font-medium leading-relaxed">
          My mission is to help as many ethical trucking companies grow at unprecedented levels.
        </p>
        <p className="text-blue-400 font-semibold cursor-pointer hover:underline pt-4">
          Join me in this movement.
        </p>
      </div>
      
      {/* Image (Right Side) - kept h-[500px] for size consistency */}
      <div className="relative h-[500px] w-full">
        <img 
          src="https://plus.unsplash.com/premium_photo-1683121132274-953b07f17ec7?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="Профессиональный портрет генерального директора." 
          className="absolute inset-0 object-cover w-full h-full rounded-3xl shadow-2xl shadow-black/50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/20 to-transparent rounded-3xl"></div>
      </div>
    </div>
  </div>
);

const TeamMemberCard = ({ name, title, imageUrl }) => (
  <div className="relative group overflow-hidden rounded-2xl bg-zinc-900/50 border border-white/5 shadow-lg">
    <img 
      src={imageUrl} 
      alt={name} 
      className="w-full h-64 object-cover object-top transition-transform duration-500 group-hover:scale-105"
      // Fallback placeholder image URL
      onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/400x400/3f3f46/ffffff?text=Team+Member" }}
    />
    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
      <h4 className="text-lg font-bold text-white">{name}</h4>
      <p className="text-sm text-blue-300">{title}</p>
    </div>
  </div>
);

const TeamSection = () => {
    // Обновленные URL-адреса изображений для реалистичного вида
    const teamMembers = [
        { name: "Amrit Dhingraaj", title: "CEO", imageUrl: "https://images.unsplash.com/photo-1630433595897-f284875f62ad?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDU3fHx8ZW58MHx8fHx8" },
        { name: "Mark Stulzer", title: "President", imageUrl: "https://plus.unsplash.com/premium_photo-1722859288966-b00ef70df64b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fHBvcnRyYWl0fGVufDB8fDB8fHww" },
        { name: "Patrick Doohan", title: "Sr. Client Success Manager", imageUrl: "https://plus.unsplash.com/premium_photo-1664536392779-049ba8fde933?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDczfHx8ZW58MHx8fHx8" },
        { name: "Justin Craddock", title: "Client Success Manager", imageUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHBvcnRyYWl0fGVufDB8fDB8fHww" },
        { name: "Courtney Green", title: "Customer Success Representative", imageUrl: "https://plus.unsplash.com/premium_photo-1689977927774-401b12d137d6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTg5fHxwb3J0cmFpdHxlbnwwfHwwfHx8MA%3D%3D" },
        { name: "John Vosper", title: "Business Development Representative", imageUrl: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTYzfHxwb3J0cmFpdHxlbnwwfHwwfHx8MA%3D%3D" },
        { name: "Sara Shergold", title: "Lead Operations Coordinator", imageUrl: "https://images.unsplash.com/photo-1557053908-4793c484d06f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIwfHxwb3J0cmFpdHxlbnwwfHwwfHx8MA%3D%3D" },
        { name: "Angelica Venancio", title: "Operations Coordinator", imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { name: "Syed Raza", title: "Lead Tech", imageUrl: "https://plus.unsplash.com/premium_photo-1682096252599-e8536cd97d2b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D" },
        { name: "Ali Raza", title: "Tech Associate", imageUrl: "https://images.unsplash.com/photo-1624395213043-fa2e123b2656?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTk0fHxwb3J0cmFpdHxlbnwwfHwwfHx8MA%3D%3D" },
    ];

    return (
        // Removed mt-16 and py-16, relying on parent for spacing
        <div className="max-w-6xl mx-auto px-4"> 
            <div className="text-center mb-12">
                <h3 className="text-4xl font-bold text-white mb-2">Meet the Team</h3>
                <p className="text-zinc-400">The people behind the automation and the results.</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                {teamMembers.map((member, index) => (
                    <TeamMemberCard key={index} {...member} />
                ))}
            </div>
        </div>
    );
};

const MissionSectionComponent = () => (
    // Uses max-w-6xl container for consistency
    <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
           {/* Image container with fixed height for visual balance with CEO photo */}
           <div className="relative h-[500px] w-full"> 
             <div className="absolute inset-0 bg-blue-600 rounded-3xl rotate-3 opacity-20"></div>
             <img 
               // Изображение командной работы в офисе
               src="https://plus.unsplash.com/premium_photo-1661297439055-379a011a8f5c?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
               alt="Professional team collaborating in a modern office." 
               className="relative rounded-3xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-500 w-full h-full object-cover"
             />
           </div>
           
           {/* Text Content */}
           <div>
             <h3 className="text-2xl font-bold text-white mb-4">We Are More Than Just Marketers</h3>
             <p className="text-zinc-400 mb-6 leading-relaxed">
               Blueprint was founded by former dispatchers and small trucking company owners. We experienced firsthand the pain of idle trucks and empty promises from recruiting agencies.
             </p>
             <p className="text-zinc-400 leading-relaxed">
               Our mission is to give trucking companies the tools for independent, predictable, and scalable hiring. We believe technology can solve the logistics staffing crisis permanently.
             </p>
           </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          {['Transparency', 'Speed', 'Innovation', 'Results'].map((val) => (
            <div key={val} className="p-4 bg-white/5 rounded-xl text-center text-white font-medium border border-white/5">
              {val}
            </div>
          ))}
        </div>
    </div>
);


const AboutSection = () => (
  // space-y-24 controls the vertical spacing between major sections
  <div className="max-w-6xl mx-auto py-10 space-y-24 animate-in fade-in slide-in-from-bottom-8 duration-700">
    
    <div className="text-center">
      <Badge>About Us</Badge>
    </div>
    
    {/* CEO Section - Consistent 2-column layout and image size */}
    <CEOSummarySection />
    
    {/* Mission Section - Now uses consistent 2-column layout and image size */}
    <MissionSectionComponent />

    {/* Team Section - Now relies on parent spacing (space-y-24) */}
    <TeamSection />
  </div>
);

const ProgramsSection = ({ setActivePage }) => (
  <div className="max-w-6xl mx-auto px-4 py-10 animate-in fade-in slide-in-from-bottom-8 duration-700">
    <div className="text-center mb-16">
      <Badge>Partnership</Badge>
      <h2 className="text-4xl font-bold text-white mb-4">Choose Your Growth Pace</h2>
      <p className="text-zinc-400">Solutions for small fleets and large carriers.</p>
    </div>

    <div className="grid md:grid-cols-3 gap-6">
      {/* Card 1 */}
      <Card className="flex flex-col">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-white">Setup & Launch</h3>
          <p className="text-zinc-500 text-sm">For Starting Out</p>
        </div>
        <div className="text-3xl font-bold text-white mb-6">$2,500 <span className="text-sm font-normal text-zinc-500">/ one-time fee</span></div>
        <ul className="space-y-4 mb-8 flex-1 text-zinc-300 text-sm">
          <li className="flex gap-2"><CheckCircle size={16} className="text-blue-500"/> Ad Campaign Setup</li>
          <li className="flex gap-2"><CheckCircle size={16} className="text-blue-500"/> Job Landing Page Creation</li>
          <li className="flex gap-2"><CheckCircle size={16} className="text-blue-500"/> Basic CRM System</li>
          <li className="flex gap-2"><CheckCircle size={16} className="text-zinc-600"/> Recruiter Support</li>
        </ul>
        <Button variant="outline" className="w-full" onClick={() => window.open('https://example.com/contact', '_blank')}>Select</Button>
      </Card>

      {/* Card 2 - Featured */}
      <Card className="flex flex-col border-blue-500/30 bg-blue-900/10 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white text-xs px-3 py-1 rounded-full font-bold">
          POPULAR
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-bold text-white">Growth Partner</h3>
          <p className="text-blue-200/70 text-sm">For Active Hiring</p>
        </div>
        <div className="text-3xl font-bold text-white mb-6">$4,000 <span className="text-sm font-normal text-zinc-500">/ month</span></div>
        <ul className="space-y-4 mb-8 flex-1 text-zinc-300 text-sm">
          <li className="flex gap-2"><CheckCircle size={16} className="text-blue-400"/> Everything in Setup</li>
          <li className="flex gap-2"><CheckCircle size={16} className="text-blue-400"/> SMS/Email Automation</li>
          <li className="flex gap-2"><CheckCircle size={16} className="text-blue-400"/> AI-Powered Candidate Screening</li>
          <li className="flex gap-2"><CheckCircle size={16} className="text-blue-400"/> Weekly Reporting</li>
        </ul>
        <Button variant="primary" className="w-full" onClick={() => setActivePage('contact')}>Start Growing</Button>
      </Card>

      {/* Card 3 */}
      <Card className="flex flex-col">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-white">Enterprise Fleet</h3>
          <p className="text-zinc-500 text-sm">50+ Trucks</p>
        </div>
        <div className="text-3xl font-bold text-white mb-6">Custom</div>
        <ul className="space-y-4 mb-8 flex-1 text-zinc-300 text-sm">
          <li className="flex gap-2"><CheckCircle size={16} className="text-blue-500"/> Full Recruitment Outsourcing</li>
          <li className="flex gap-2"><CheckCircle size={16} className="text-blue-500"/> ATS Integration (Tenstreet)</li>
          <li className="flex gap-2"><CheckCircle size={16} className="text-blue-500"/> HR Team Training</li>
          <li className="flex gap-2"><CheckCircle size={16} className="text-blue-500"/> Hiring Guarantee</li>
        </ul>
        <Button variant="outline" className="w-full" onClick={() => setActivePage('contact')}>Discuss</Button>
      </Card>
    </div>
  </div>
);

// --- New Testimonial Components ---

const TestimonialCard = ({ quote, fleetName, fleetSize, personName, personTitle, personImageUrl, videoText, videoUrlPlaceholder }) => (
    <Card className="flex flex-col lg:flex-row gap-6 p-4 md:p-8 hover:shadow-blue-500/10 hover:shadow-xl transition-shadow duration-300">
        
        {/* Left Side: Quote, Logo, Info */}
        <div className="flex-1 space-y-6">
            <blockquote className="text-3xl font-bold text-white leading-snug">
                <span className="text-blue-500 text-5xl font-extrabold mr-2">"</span>
                {quote}
            </blockquote>

            {/* Fleet Info (Mock Logo Placeholder) */}
            <div className="flex items-center gap-4 border-t border-white/5 pt-4">
                {/* Mock Logo (Replace with actual SVG/Image if available) */}
                <div className="h-10 w-10 flex items-center justify-center bg-zinc-800 rounded-full text-xs font-bold text-blue-400 border border-blue-500/20">
                    {fleetName.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                    <p className="text-lg font-bold text-white">{fleetName}</p>
                    <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-400">
                        {fleetSize} TRUCK FLEET
                    </span>
                </div>
            </div>

            {/* Person Info */}
            <div className="flex items-center gap-3">
                <img 
                    src={personImageUrl} 
                    alt={personName} 
                    className="w-12 h-12 rounded-full object-cover" 
                    onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/48x48/1e293b/ffffff?text=User" }}
                />
                <div>
                    <p className="font-semibold text-white">{personName}</p>
                    <p className="text-sm text-zinc-400">{personTitle}</p>
                </div>
            </div>
        </div>

        {/* Right Side: Video Placeholder */}
        <div className="lg:w-96 w-full shrink-0 relative rounded-2xl overflow-hidden shadow-2xl bg-black flex items-center justify-center aspect-video">
             <img 
                src={videoUrlPlaceholder} 
                alt="Testimonial video thumbnail" 
                className="w-full h-full object-cover opacity-70"
                onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x337/1e293b/ffffff?text=Video+Testimonial+Mockup" }}
             />
             <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <div className="p-4 bg-white/20 backdrop-blur-sm rounded-full cursor-pointer hover:bg-white/30 transition-colors">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-white">
                        <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V5H6v14zm2.5-4.5l5-3.5-5-3.5v7z"/>
                    </svg>
                </div>
             </div>
             <span className="absolute top-4 left-4 text-white text-xs font-bold bg-blue-600 px-3 py-1 rounded-full">{videoText}</span>
        </div>
    </Card>
);


const TestimonialsSection = () => {
    const testimonials = [
        {
            quote: "35 drivers hired and counting!",
            fleetName: "Collins Trucking Co. Inc.",
            fleetSize: "115+",
            personName: "Dakota Collins",
            personTitle: "VP Finance",
            personImageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Реалистичное изображение
            videoText: "35 DRIVERS HIRED",
            // Изображение, связанное с дальнобойщиками
            videoUrlPlaceholder: "https://images.unsplash.com/photo-1521404499839-5ed4d2621021?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            quote: "I can get as many leads as I want!",
            fleetName: "Pride Transport",
            fleetSize: "525+",
            personName: "Steve Schelin",
            personTitle: "Director of Recruiting, Pride Transport",
            personImageUrl: "https://images.unsplash.com/photo-1522202176988-66273c827cd8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Реалистичное изображение
            videoText: "UNLIMITED LEADS",
            // Изображение, связанное с рекрутерами/диспетчерами
            videoUrlPlaceholder: "https://images.unsplash.com/photo-1628108502573-0495d46114a1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
    ];

    return (
        <section className="max-w-6xl mx-auto px-4 py-16 border-t border-white/5">
            <div className="text-center mb-12">
                <Badge>SUCCESS STORIES</Badge>
                <h2 className="text-4xl font-bold text-white mb-2">Don't Just Take Our Word For It</h2>
                <p className="text-zinc-400">See real results from fleets just like yours.</p>
            </div>
            <div className="space-y-8">
                {testimonials.map((t, index) => (
                    <TestimonialCard key={index} {...t} />
                ))}
            </div>
        </section>
    );
};


const ResultsSection = () => (
  <div className="max-w-5xl mx-auto px-4 py-10 animate-in fade-in slide-in-from-bottom-8 duration-700">
    <div className="text-center mb-16">
      <Badge>Results</Badge>
      <h2 className="text-4xl font-bold text-white mb-4">The Numbers Speak Louder</h2>
      <p className="text-zinc-400">Real metrics from our clients last quarter.</p>
    </div>

    <div className="grid md:grid-cols-2 gap-8 mb-12">
      <Card className="flex flex-col justify-between h-64 bg-gradient-to-br from-zinc-900 to-zinc-800">
        <div className="flex justify-between items-start">
          <div>
            <div className="text-zinc-400 text-sm mb-1">Reduction in Cost-per-Hire</div>
            <div className="text-5xl font-bold text-white">-40%</div>
          </div>
          <TrendingUp className="text-emerald-500" size={32} />
        </div>
        <p className="text-sm text-zinc-500">Clients save an average of $1200 per hire compared to traditional agencies.</p>
      </Card>

      <Card className="flex flex-col justify-between h-64 bg-gradient-to-br from-zinc-900 to-zinc-800">
        <div className="flex justify-between items-start">
          <div>
            <div className="text-zinc-400 text-sm mb-1">Time-to-Fill Speed</div>
            <div className="text-5xl font-bold text-white">7 Days</div>
          </div>
          <Zap className="text-yellow-500" size={32} />
        </div>
        <p className="text-sm text-zinc-500">From ad launch to first driver in orientation.</p>
      </Card>
    </div>

    <div className="grid md:grid-cols-3 gap-6 mb-20"> {/* Increased bottom margin for separation */}
       <div className="bg-zinc-900/30 p-6 rounded-2xl border border-white/5">
         <div className="text-4xl font-bold text-blue-500 mb-2">350+</div>
         <div className="text-zinc-300">Drivers Hired in 2024</div>
       </div>
       <div className="bg-zinc-900/30 p-6 rounded-2xl border border-white/5">
         <div className="text-4xl font-bold text-indigo-500 mb-2">92%</div>
         <div className="text-zinc-300">Retention Rate (3 mo.)</div>
       </div>
       <div className="bg-zinc-900/30 p-6 rounded-2xl border border-white/5">
         <div className="text-4xl font-bold text-emerald-500 mb-2">50</div>
         <div className="text-zinc-300">States Covered</div>
       </div>
    </div>
    
    {/* NEW SECTION: Testimonials */}
    <TestimonialsSection />
    
  </div>
);

// --- New FAQ Components ---

const faqData = [
    {
        q: "Is this right for my fleet?",
        a: "Our system works best for fleets operating 25 to 250+ trucks hiring Class A drivers. If you have fewer than 25 trucks, we can offer a customized launch program."
    },
    {
        q: "How is this different—and safer—than hiring a recruitment or marketing agency?",
        a: "Agencies often sell you leads. We sell you a system. You own all the infrastructure (landing pages, funnels, automation). If you stop working with an agency, you're left with nothing. With Blueprint, the system stays with you, ensuring predictability, not dependency."
    },
    {
        q: "What measurable results will I see, and how soon?",
        a: "On average, our clients see the first qualified candidates within 7-14 days of launch and hire the first drivers within 30 days. Key metrics are reducing cost-per-hire (by an average of 40%) and predictable staffing."
    },
    {
        q: "How does your AI actually find and qualify the 92% of *currently employed* drivers everyone else misses?",
        a: "We don't use traditional job boards. Our system uses targeted social media campaigns aimed at drivers showing interest in switching jobs but who aren't actively searching. The AI instantly applies PSP rules and experience requirements, leaving your recruiter with only ready-to-hire candidates."
    },
    {
        q: "How much time or technical effort will this require from my team?",
        a: "Minimal. We set up the entire system for you. Your recruiting team will only spend time on final interviews, not on cold calls or sifting through applications."
    },
    {
        q: "What if you can't fill my trucks or a hired driver quits early?",
        a: "We offer guarantees in our premium programs. If a hired driver quits within 90 days, we commit to providing a qualified replacement. We focus on results, not just clicks."
    },
    {
        q: "What is the price—and are there hidden costs?",
        a: "The pricing is transparent and depends on the selected program (see 'Programs' section). There are no hidden fees. We charge a monthly fee for software and service, and you pay the advertising budget directly to the ad platforms."
    }
];

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-white/5">
            <button 
                className="flex justify-between items-center w-full py-4 text-left font-semibold text-white hover:text-blue-400 transition-colors"
                onClick={() => setIsOpen(!isOpen)}
            >
                {question}
                <ChevronDown size={20} className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180 text-blue-400' : 'rotate-0 text-zinc-500'}`} />
            </button>
            <div 
                className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100 py-3' : 'max-h-0 opacity-0'}`}
                style={{ maxHeight: isOpen ? '999px' : '0' }} // Используем большое значение для плавной анимации
            >
                <p className="text-zinc-400 pr-6 pb-2 leading-relaxed text-sm">{answer}</p>
            </div>
        </div>
    );
};


const FAQSection = () => (
    <section className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-4 inline-block">
                HIRING QUESTIONS? READ THIS
            </span>
            <h2 className="text-4xl font-bold text-white mb-2">Frequently Asked Questions</h2>
        </div>
        <div className="bg-zinc-900/50 backdrop-blur-sm border border-white/5 rounded-3xl p-4 md:p-8 space-y-2">
            {faqData.map((item, index) => (
                <FAQItem key={index} question={item.q} answer={item.a} />
            ))}
        </div>
    </section>
);


const ContactSection = () => (
  <div className="max-w-6xl mx-auto py-10 space-y-16 animate-in fade-in duration-700">
    
    <div className="max-w-3xl mx-auto px-4 text-center">
        <Badge>Next Step</Badge>
        <h2 className="text-4xl font-bold text-white mb-4">Book Your Strategy Call</h2>
        <p className="text-zinc-400">
          Ready to take control of your driver recruitment? Schedule a free 15-minute call to discuss your fleet's needs and see a live demo of the Blueprint system.
        </p>
    </div>

    <div className="max-w-3xl mx-auto px-4">
      <Card className="p-8 bg-zinc-900/80">
        <h3 className="text-2xl font-bold text-white mb-4 text-center">Start the Conversation</h3>
        <p className="text-zinc-400 mb-6 text-center">No obligation, just data-driven insights for your fleet.</p>
        
        {/* Mock form/call to action area */}
        <div className="space-y-4">
          <input 
            type="text" 
            placeholder="Your Work Email" 
            className="w-full p-3 rounded-xl bg-zinc-800 border border-zinc-700 text-white placeholder-zinc-500 focus:ring-blue-500 focus:border-blue-500" 
          />
          <input 
            type="text" 
            placeholder="Company Name" 
            className="w-full p-3 rounded-xl bg-zinc-800 border border-zinc-700 text-white placeholder-zinc-500 focus:ring-blue-500 focus:border-blue-500" 
          />
          <Button 
            className="w-full"
            onClick={() => {
              // Placeholder for booking logic
              console.log('Strategy call booked!');
            }}
          >
            Request Strategy Call
          </Button>
        </div>
        <p className="text-xs text-zinc-600 mt-4 text-center">We respect your privacy. No spam, ever.</p>
      </Card>
    </div>

    {/* Новая секция FAQ */}
    <FAQSection />
  </div>
);


// --- Main App Component ---

const App = () => {
  const [activePage, setActivePage] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'how-it-works', label: 'How It Works' },
    { id: 'programs', label: 'Programs' },
    { id: 'results', label: 'Results' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' }, // Added Contact
  ];

  const renderPage = () => {
    switch(activePage) {
      case 'home': return <HomeSection setPage={setActivePage} />;
      case 'how-it-works': return <HowItWorksSection />;
      case 'programs': return <ProgramsSection setActivePage={setActivePage} />;
      case 'results': return <ResultsSection />;
      case 'about': return <AboutSection />;
      case 'contact': return <ContactSection />; // Added Contact Section
      default: return <HomeSection setPage={setActivePage} />;
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-blue-500/30">
      
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-zinc-950/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo - Renamed to Blueprint (1 word, 2 colors) */}
            <div 
              className="flex items-center gap-2 font-bold text-xl cursor-pointer"
              onClick={() => setActivePage('home')}
            >
              <div className="bg-blue-600 p-1.5 rounded-lg">
                <Truck size={20} className="text-white" />
              </div>
              {/* Объединенный текст в одно слово, без пробела */}
              <span>Blue<span className="text-blue-500">print</span></span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex gap-1 bg-zinc-900/50 p-1 rounded-full border border-white/5">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActivePage(item.id)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                    activePage === item.id 
                      ? 'bg-zinc-800 text-white shadow-sm' 
                      : 'text-zinc-400 hover:text-white hover:bg-zinc-800/50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Desktop CTA - Updated text and link */}
            <div className="hidden md:block">
              <button 
                className="text-sm font-medium bg-white text-zinc-900 px-4 py-2 rounded-lg hover:bg-zinc-200 transition-colors"
                onClick={() => setActivePage('contact')}
              >
                Book a Call
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden p-2 text-zinc-400"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-zinc-950 border-b border-zinc-800 animate-in slide-in-from-top-2">
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActivePage(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-3 rounded-xl ${
                    activePage === item.id 
                      ? 'bg-zinc-900 text-white' 
                      : 'text-zinc-400'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4 border-t border-zinc-900 mt-4">
                 <button 
                   className="w-full text-center font-medium bg-blue-600 text-white px-4 py-3 rounded-xl"
                   onClick={() => {
                     setActivePage('contact');
                     setIsMobileMenuOpen(false);
                   }}
                 >
                  Book a Call
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content Area */}
      <main className="pt-32 pb-20 min-h-screen relative overflow-hidden">
        {/* Background Gradients */}
        <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-900/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-900/10 rounded-full blur-[120px]" />
        </div>

        {renderPage()}
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 bg-zinc-900/30 pt-16 pb-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-2">
              <div className="flex items-center gap-2 font-bold text-xl mb-4 text-white">
                <Truck size={20} className="text-blue-500" />
                {/* Объединенный текст в одно слово, без пробела */}
                <span>Blue<span className="text-blue-500">print</span></span>
              </div>
              <p className="text-zinc-500 max-w-sm">
                Automated hiring platform for US and Canadian trucking companies. Forget empty leads and high turnover.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Menu</h4>
              <ul className="space-y-2 text-zinc-500">
                <li className="hover:text-blue-400 cursor-pointer" onClick={() => setActivePage('programs')}>Programs</li>
                <li className="hover:text-blue-400 cursor-pointer" onClick={() => setActivePage('results')}>Results</li>
                <li className="hover:text-blue-400 cursor-pointer" onClick={() => setActivePage('about')}>About Us</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-zinc-500">
                <li>hello@blueprint.ai</li>
                <li>+1 (555) 123-4567</li>
                <li>Winnipeg, MB</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-zinc-600 text-sm">
            <div>© 2025 Blueprint Inc. All rights reserved.</div>
            <div className="flex gap-4 mt-4 md:mt-0">
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App; 