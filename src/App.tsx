import React, { useState, useEffect } from 'react';
import { 
  Dumbbell, 
  Users, 
  Clock, 
  MapPin, 
  Phone, 
  Star, 
  ChevronRight, 
  Menu, 
  X, 
  CheckCircle2, 
  Instagram, 
  Facebook, 
  Twitter,
  Calendar,
  Award,
  Zap,
  Target
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Programs', href: '#programs' },
    { name: 'Trainers', href: '#trainers' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Timetable', href: '#timetable' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-zinc-950/90 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="bg-lime-400 p-1.5 rounded-lg">
            <Dumbbell className="text-zinc-950 w-6 h-6" />
          </div>
          <span className="text-2xl font-black tracking-tighter italic">GOALS<span className="text-lime-400">GYM</span></span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-semibold uppercase tracking-widest hover:text-lime-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button className="bg-lime-400 text-zinc-950 px-6 py-2 rounded-full font-bold text-sm uppercase tracking-wider hover:bg-lime-300 transition-all active:scale-95">
            Join Now
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-zinc-900 border-b border-zinc-800 py-8 px-6 md:hidden flex flex-col gap-6"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsMenuOpen(false)}
                className="text-lg font-bold uppercase tracking-widest hover:text-lime-400"
              >
                {link.name}
              </a>
            ))}
            <button className="bg-lime-400 text-zinc-950 w-full py-4 rounded-xl font-bold uppercase tracking-wider">
              Join Now
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop" 
          alt="Gym Background" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/70 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <div className="flex items-center gap-2 mb-6">
            <div className="h-[2px] w-12 bg-lime-400"></div>
            <span className="text-lime-400 font-bold uppercase tracking-[0.3em] text-sm">Best Gym in Kollam</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black italic uppercase leading-[0.9] mb-8">
            Build Your <br />
            <span className="text-lime-400">Ultimate</span> Body
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl mb-10 max-w-lg leading-relaxed">
            Unleash your potential with state-of-the-art equipment, expert coaching, and a community that pushes you to be your best.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-lime-400 text-zinc-950 px-10 py-5 rounded-xl font-black uppercase tracking-wider hover:bg-lime-300 transition-all flex items-center justify-center gap-2 group">
              Join Now <ChevronRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border-2 border-white/20 hover:border-lime-400 px-10 py-5 rounded-xl font-black uppercase tracking-wider transition-all flex items-center justify-center gap-2">
              Book Free Trial
            </button>
          </div>

          <div className="mt-16 flex items-center gap-8">
            <div className="flex flex-col">
              <span className="text-3xl font-black text-white">4.8</span>
              <div className="flex text-lime-400">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <span className="text-zinc-500 text-xs uppercase font-bold mt-1">125+ Reviews</span>
            </div>
            <div className="h-12 w-[1px] bg-zinc-800"></div>
            <div className="flex flex-col">
              <span className="text-3xl font-black text-white">1000+</span>
              <span className="text-zinc-500 text-xs uppercase font-bold mt-1">Active Members</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-10 right-10 hidden lg:block">
        <motion.div 
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="bg-zinc-900/80 backdrop-blur-md border border-white/10 p-6 rounded-2xl shadow-2xl"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-lime-400 flex items-center justify-center">
              <Zap className="text-zinc-950" />
            </div>
            <div>
              <p className="text-xs text-zinc-400 font-bold uppercase tracking-wider">Next Session</p>
              <p className="text-lg font-black italic">HIIT Training - 04:00 PM</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Programs = () => {
  const programs = [
    {
      title: "Strength Training",
      desc: "Build muscle and increase power with our extensive range of free weights and machines.",
      icon: <Dumbbell className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1581009146145-b5ef03a7403f?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Cardio Excellence",
      desc: "Boost your endurance and heart health with top-tier treadmills, cycles, and rowers.",
      icon: <Zap className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?q=80&w=1974&auto=format&fit=crop"
    },
    {
      title: "Personal Coaching",
      desc: "Get customized workout plans and 1-on-1 attention from our certified expert trainers.",
      icon: <Target className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Group Classes",
      desc: "Join high-energy group sessions that keep you motivated and accountable.",
      icon: <Users className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1571902258032-6e5e5d2911ad?q=80&w=1912&auto=format&fit=crop"
    }
  ];

  return (
    <section id="programs" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-lime-400 font-bold uppercase tracking-[0.3em] text-sm mb-4">Our Programs</h2>
          <p className="text-4xl md:text-6xl font-black italic uppercase">Push Your <span className="text-lime-400">Limits</span></p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -10 }}
              className="group relative h-[450px] overflow-hidden rounded-3xl"
            >
              <img 
                src={program.image} 
                alt={program.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent"></div>
              <div className="absolute bottom-0 p-8 w-full">
                <div className="bg-lime-400 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-zinc-950 shadow-xl shadow-lime-400/20">
                  {program.icon}
                </div>
                <h3 className="text-2xl font-black italic uppercase mb-3">{program.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {program.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Trainers = () => {
  const trainers = [
    {
      name: "Alex Rivera",
      role: "Strength Specialist",
      image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=1974&auto=format&fit=crop"
    },
    {
      name: "Sarah Johnson",
      role: "HIIT & Cardio Expert",
      image: "https://images.unsplash.com/photo-1548690312-e3b507d17a4d?q=80&w=1974&auto=format&fit=crop"
    },
    {
      name: "Mike Chen",
      role: "Bodybuilding Coach",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  return (
    <section id="trainers" className="py-24 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl">
            <h2 className="text-lime-400 font-bold uppercase tracking-[0.3em] text-sm mb-4">Expert Team</h2>
            <p className="text-4xl md:text-6xl font-black italic uppercase">Train With The <span className="text-lime-400">Best</span></p>
          </div>
          <button className="border-b-2 border-lime-400 text-lime-400 font-bold uppercase tracking-widest pb-2 hover:text-white hover:border-white transition-all">
            View All Trainers
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {trainers.map((trainer, index) => (
            <div key={index} className="group">
              <div className="relative h-[500px] overflow-hidden rounded-3xl mb-6">
                <img 
                  src={trainer.image} 
                  alt={trainer.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent opacity-60"></div>
                <div className="absolute bottom-6 left-6 flex gap-3">
                  <div className="w-10 h-10 rounded-full bg-zinc-900/80 backdrop-blur-md flex items-center justify-center hover:bg-lime-400 hover:text-zinc-950 transition-colors cursor-pointer">
                    <Instagram size={18} />
                  </div>
                  <div className="w-10 h-10 rounded-full bg-zinc-900/80 backdrop-blur-md flex items-center justify-center hover:bg-lime-400 hover:text-zinc-950 transition-colors cursor-pointer">
                    <Facebook size={18} />
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-black italic uppercase">{trainer.name}</h3>
              <p className="text-lime-400 font-bold uppercase tracking-widest text-xs mt-1">{trainer.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      price: "999",
      period: "Month",
      features: ["Access to Gym Floor", "Locker Room Access", "Free Wi-Fi", "1 Fitness Assessment"],
      popular: false
    },
    {
      name: "Pro",
      price: "1999",
      period: "Month",
      features: ["All Basic Features", "Group Classes Included", "Personalized Workout Plan", "Nutrition Guide", "Priority Support"],
      popular: true
    },
    {
      name: "Elite",
      price: "4999",
      period: "3 Months",
      features: ["All Pro Features", "2 Personal Training Sessions", "Body Composition Analysis", "Guest Passes", "Exclusive Merch"],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-lime-400 font-bold uppercase tracking-[0.3em] text-sm mb-4">Pricing Plans</h2>
          <p className="text-4xl md:text-6xl font-black italic uppercase">Choose Your <span className="text-lime-400">Path</span></p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative p-10 rounded-3xl border ${plan.popular ? 'bg-zinc-900 border-lime-400 shadow-2xl shadow-lime-400/10' : 'bg-zinc-900/50 border-white/5'}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-lime-400 text-zinc-950 px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest">
                  Most Popular
                </div>
              )}
              <h3 className="text-xl font-bold uppercase tracking-widest mb-6">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-zinc-400 text-2xl font-bold">₹</span>
                <span className="text-6xl font-black italic">{plan.price}</span>
                <span className="text-zinc-500 font-bold uppercase text-xs tracking-widest">/ {plan.period}</span>
              </div>
              <ul className="space-y-4 mb-10">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center gap-3 text-zinc-400">
                    <CheckCircle2 className="text-lime-400" size={18} />
                    <span className="text-sm font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className={`w-full py-4 rounded-xl font-black uppercase tracking-widest transition-all ${plan.popular ? 'bg-lime-400 text-zinc-950 hover:bg-lime-300' : 'bg-white/5 hover:bg-white/10 text-white'}`}>
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Timetable = () => {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const schedule = [
    { time: "06:00 AM", activity: "Power Yoga", trainer: "Sarah" },
    { time: "08:00 AM", activity: "HIIT Blast", trainer: "Alex" },
    { time: "10:00 AM", activity: "Strength", trainer: "Mike" },
    { time: "04:00 PM", activity: "Cardio", trainer: "Alex" },
    { time: "06:00 PM", activity: "CrossFit", trainer: "Mike" },
    { time: "08:00 PM", activity: "Zumba", trainer: "Sarah" },
  ];

  return (
    <section id="timetable" className="py-24 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-lime-400 font-bold uppercase tracking-[0.3em] text-sm mb-4">Weekly Schedule</h2>
          <p className="text-4xl md:text-6xl font-black italic uppercase">Never Miss A <span className="text-lime-400">Beat</span></p>
        </div>

        <div className="bg-zinc-950 rounded-3xl overflow-hidden border border-white/5 shadow-2xl">
          <div className="grid grid-cols-7 border-b border-white/5">
            <div className="p-6 bg-zinc-900 font-black italic uppercase text-zinc-500 text-sm border-r border-white/5">Time</div>
            {days.map(day => (
              <div key={day} className="p-6 text-center font-black italic uppercase text-sm border-r border-white/5 last:border-0">{day}</div>
            ))}
          </div>
          {schedule.map((row, i) => (
            <div key={i} className="grid grid-cols-7 border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors">
              <div className="p-6 bg-zinc-900/50 font-bold text-zinc-400 text-xs border-r border-white/5 flex items-center">{row.time}</div>
              {days.map(day => (
                <div key={day} className="p-6 text-center border-r border-white/5 last:border-0">
                  <p className="font-black italic uppercase text-xs text-white">{row.activity}</p>
                  <p className="text-[10px] text-lime-400 font-bold uppercase tracking-widest mt-1">{row.trainer}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    {
      name: "Biyon Binoy",
      text: "I’ve been working out at this gym for a few months now, and I’ve honestly had such a great experience. The atmosphere is super motivating—everyone’s focused on their goals but still friendly and respectful.",
      rating: 5
    },
    {
      name: "Lekshmi J S",
      text: "Very good place... Friendly atmosphere... Especially trainer... Very supportive and encouraging... Wide range of cardio and gym machineries... Well maintained and clean atmosphere...",
      rating: 5
    },
    {
      name: "Jay",
      text: "The overall atmosphere at GOALS GYM is both motivating and welcoming. The cleanliness, state-of-the-art equipment, and positive energy create an environment conducive to achieving fitness goals.",
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-zinc-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/3">
            <h2 className="text-lime-400 font-bold uppercase tracking-[0.3em] text-sm mb-4">Testimonials</h2>
            <p className="text-4xl md:text-6xl font-black italic uppercase mb-8">What Our <span className="text-lime-400">Members</span> Say</p>
            <div className="flex items-center gap-4">
              <div className="flex text-lime-400">
                {[...Array(5)].map((_, i) => <Star key={i} size={24} fill="currentColor" />)}
              </div>
              <span className="text-2xl font-black italic">4.8/5</span>
            </div>
            <p className="text-zinc-500 font-bold uppercase tracking-widest text-xs mt-2">Based on 125+ Google Reviews</p>
          </div>

          <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.slice(0, 2).map((review, index) => (
              <div key={index} className="bg-zinc-900 p-8 rounded-3xl border border-white/5">
                <div className="flex text-lime-400 mb-6">
                  {[...Array(review.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-zinc-400 italic mb-8 leading-relaxed">"{review.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-lime-400/10 flex items-center justify-center text-lime-400 font-black italic">
                    {review.name[0]}
                  </div>
                  <p className="font-black italic uppercase tracking-wider">{review.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-lime-400 font-bold uppercase tracking-[0.3em] text-sm mb-4">Contact Us</h2>
            <p className="text-4xl md:text-6xl font-black italic uppercase mb-10">Start Your <span className="text-lime-400">Journey</span> Today</p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-zinc-950 flex items-center justify-center text-lime-400 shrink-0">
                  <MapPin size={28} />
                </div>
                <div>
                  <p className="text-zinc-500 font-bold uppercase tracking-widest text-xs mb-1">Location</p>
                  <p className="text-lg font-bold">1st floor, above SBI ATM, Elampallor, Mukkada, Kundara, Kerala 691501</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-zinc-950 flex items-center justify-center text-lime-400 shrink-0">
                  <Phone size={28} />
                </div>
                <div>
                  <p className="text-zinc-500 font-bold uppercase tracking-widest text-xs mb-1">Phone</p>
                  <p className="text-lg font-bold">097393 40008</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-zinc-950 flex items-center justify-center text-lime-400 shrink-0">
                  <Clock size={28} />
                </div>
                <div>
                  <p className="text-zinc-500 font-bold uppercase tracking-widest text-xs mb-1">Opening Hours</p>
                  <p className="text-lg font-bold">Mon - Sat: 05:00 AM - 10:00 PM</p>
                  <p className="text-lg font-bold">Sun: Closed</p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-8 bg-lime-400 rounded-3xl text-zinc-950">
              <p className="text-sm font-black uppercase tracking-widest mb-2">Special Offer</p>
              <p className="text-3xl font-black italic uppercase leading-tight">Get 20% Off On Your First 3 Months!</p>
            </div>
          </div>

          <div className="bg-zinc-950 p-10 rounded-3xl border border-white/5">
            <h3 className="text-2xl font-black italic uppercase mb-8">Book A Free Session</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Full Name</label>
                  <input type="text" className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-lime-400 transition-colors" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Phone Number</label>
                  <input type="tel" className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-lime-400 transition-colors" placeholder="+91 00000 00000" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Select Program</label>
                <select className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-lime-400 transition-colors appearance-none">
                  <option>Strength Training</option>
                  <option>Cardio Blast</option>
                  <option>Personal Coaching</option>
                  <option>Yoga & Flexibility</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Message (Optional)</label>
                <textarea className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-lime-400 transition-colors h-32 resize-none" placeholder="Tell us about your fitness goals..."></textarea>
              </div>
              <button className="w-full bg-lime-400 text-zinc-950 py-5 rounded-xl font-black uppercase tracking-widest hover:bg-lime-300 transition-all shadow-xl shadow-lime-400/20">
                Send Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-zinc-950 pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 mb-8">
              <div className="bg-lime-400 p-1.5 rounded-lg">
                <Dumbbell className="text-zinc-950 w-6 h-6" />
              </div>
              <span className="text-2xl font-black tracking-tighter italic">GOALS<span className="text-lime-400">GYM</span></span>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed mb-8">
              The ultimate fitness destination in Kundara. We provide the best equipment, expert trainers, and a motivating environment to help you reach your fitness goals.
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-lime-400 hover:text-zinc-950 transition-all cursor-pointer">
                <Instagram size={20} />
              </div>
              <div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-lime-400 hover:text-zinc-950 transition-all cursor-pointer">
                <Facebook size={20} />
              </div>
              <div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-lime-400 hover:text-zinc-950 transition-all cursor-pointer">
                <Twitter size={20} />
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-black italic uppercase mb-8">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="text-zinc-500 hover:text-lime-400 transition-colors text-sm font-bold uppercase tracking-widest">Home</a></li>
              <li><a href="#programs" className="text-zinc-500 hover:text-lime-400 transition-colors text-sm font-bold uppercase tracking-widest">Programs</a></li>
              <li><a href="#trainers" className="text-zinc-500 hover:text-lime-400 transition-colors text-sm font-bold uppercase tracking-widest">Trainers</a></li>
              <li><a href="#pricing" className="text-zinc-500 hover:text-lime-400 transition-colors text-sm font-bold uppercase tracking-widest">Pricing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black italic uppercase mb-8">Support</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-zinc-500 hover:text-lime-400 transition-colors text-sm font-bold uppercase tracking-widest">FAQ</a></li>
              <li><a href="#" className="text-zinc-500 hover:text-lime-400 transition-colors text-sm font-bold uppercase tracking-widest">Privacy Policy</a></li>
              <li><a href="#" className="text-zinc-500 hover:text-lime-400 transition-colors text-sm font-bold uppercase tracking-widest">Terms of Service</a></li>
              <li><a href="#contact" className="text-zinc-500 hover:text-lime-400 transition-colors text-sm font-bold uppercase tracking-widest">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black italic uppercase mb-8">Newsletter</h4>
            <p className="text-zinc-500 text-sm mb-6">Subscribe to get fitness tips and special offers.</p>
            <div className="flex gap-2">
              <input type="email" placeholder="Email Address" className="bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-lime-400 w-full" />
              <button className="bg-lime-400 text-zinc-950 p-3 rounded-xl hover:bg-lime-300 transition-all">
                <ChevronRight />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-zinc-600 text-xs font-bold uppercase tracking-widest">
            © 2024 GOALS GYM. All Rights Reserved.
          </p>
          <p className="text-zinc-600 text-xs font-bold uppercase tracking-widest">
            Designed for Excellence
          </p>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="bg-zinc-950 text-white font-sans selection:bg-lime-400 selection:text-zinc-950 scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <Programs />
        <Trainers />
        <Pricing />
        <Timetable />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
