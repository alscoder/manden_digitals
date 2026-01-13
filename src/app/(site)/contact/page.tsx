"use client";

import { Button } from '@/components/Button';
import { ImageWithFallback } from '@/components/Image';
import { useLanguage } from '@/context/useLanguage';
import { MessageSquare, Mail, Phone, MapPin, Clock, Send, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { useState, type ChangeEvent, type FormEvent } from 'react';


export default function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', company: '', subject: '', message: '' });
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-gradient-to-br from-[#4A3933] via-[#3A2923] to-[#2A1913] dark:from-[#1A1412] dark:via-[#0A0402] dark:to-black">
        {/* Background Image */}
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1712159018726-4564d92f3ec2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b21lciUyMHNlcnZpY2UlMjBzdXBwb3J0fGVufDF8fHx8MTc2ODMwODY4NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Customer Support"
            className="w-full h-full object-cover opacity-30 dark:opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#4A3933]/95 via-[#3A2923]/85 to-[#4A3933]/95 dark:from-black/95 dark:via-black/85 dark:to-black/95" />
        </div>

        {/* Animated Background */}
        <div className="absolute inset-0">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 50, 0],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-[#D4AF37]/10 to-transparent rounded-full blur-3xl dark:from-[#D4AF37]/15"
          />
          <motion.div
            animate={{
              scale: [1.1, 1, 1.1],
              rotate: [0, 45, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-[#D4AF37]/5 rounded-full blur-3xl dark:bg-[#D4AF37]/10"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-[#D4AF37]/20 backdrop-blur-sm border border-[#D4AF37]/30 text-[#D4AF37] px-4 py-2 rounded-full text-sm mb-6"
            >
              <MessageSquare size={16} />
              <span>Get In Touch</span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white mb-6">
              {t('contactTitle')}
            </h1>
            <p className="text-xl text-neutral-200 leading-relaxed">
              {t('contactSubtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white p-6 rounded-2xl border border-neutral-200 hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-neutral-900 mb-6">{t('getInTouchTitle')}</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="text-[#D4AF37]" size={20} />
                    </div>
                    <div>
                      <div className="text-sm text-neutral-500 mb-1">{t('email')}</div>
                      <a href="mailto:info@mandendigital.com" className="text-neutral-900 hover:text-[#D4AF37] transition-colors">
                        info@mandendigital.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="text-[#D4AF37]" size={20} />
                    </div>
                    <div>
                      <div className="text-sm text-neutral-500 mb-1">{t('phone')}</div>
                      <a href="tel:+1234567890" className="text-neutral-900 hover:text-[#D4AF37] transition-colors">
                        +1 234 567 8900
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-[#D4AF37]" size={20} />
                    </div>
                    <div>
                      <div className="text-sm text-neutral-500 mb-1">{t('location')}</div>
                      <div className="text-neutral-900">{t('globalServices')}</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="text-[#D4AF37]" size={20} />
                    </div>
                    <div>
                      <div className="text-sm text-neutral-500 mb-1">{t('businessHours')}</div>
                      <div className="text-neutral-900 text-sm">
                        {t('monFri')}<br />
                        {t('saturday')}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-[#4A3933] text-white p-6 rounded-2xl"
              >
                <MessageSquare className="text-[#D4AF37] mb-4" size={32} />
                <h3 className="text-white mb-2">{t('quickResponse')}</h3>
                <p className="text-neutral-200 text-sm mb-4">
                  {t('quickResponseDesc')}
                </p>
                <p className="text-neutral-200 text-sm">
                  {t('urgentMatters')}
                </p>
              </motion.div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white p-8 rounded-2xl border border-neutral-200 hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-2xl text-neutral-900 mb-6">{t('sendMessage')}</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm text-neutral-700 mb-2">
                        {t('fullName')} *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent outline-none transition-all"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm text-neutral-700 mb-2">
                        {t('emailAddress')} *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent outline-none transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm text-neutral-700 mb-2">
                        {t('company')}
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent outline-none transition-all"
                        placeholder=""
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm text-neutral-700 mb-2">
                        {t('subject')} *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent outline-none transition-all"
                      >
                        <option value="">{t('selectSubject')}</option>
                        <option value="services">{t('servicesInquiry')}</option>
                        <option value="training">{t('trainingPrograms')}</option>
                        <option value="project">{t('projectDiscussion')}</option>
                        <option value="support">{t('supportInquiry')}</option>
                        <option value="partnership">{t('partnership')}</option>
                        <option value="other">{t('other')}</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm text-neutral-700 mb-2">
                      {t('message')} *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent outline-none transition-all resize-none"
                      placeholder={t('messagePlaceholder')}
                    />
                  </div>

                  <div>
                    <Button type="submit" variant="primary" className="w-full md:w-auto">
                      <span className="inline-flex items-center gap-2">
                        <Send size={18} />
                        {t('send')}
                      </span>
                    </Button>
                  </div>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: t('exploreServicesCard'), desc: t('exploreServicesCardDesc'), btn: t('viewServices'), href: '/services' },
              { title: t('trainingProgramsCard'), desc: t('trainingProgramsCardDesc'), btn: t('viewTraining'), href: '/training' },
              { title: t('ourPortfolio'), desc: t('ourPortfolioDesc'), btn: t('viewProjects'), href: '/projects' }
            ].map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="text-center p-6 bg-neutral-50 rounded-2xl border border-neutral-200 hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-neutral-900 mb-3">{card.title}</h3>
                <p className="text-neutral-600 text-sm mb-4">{card.desc}</p>
                <Button href={card.href} variant="outline" className="w-full">
                  <span className="inline-flex items-center gap-2">
                    {card.btn}
                    <ArrowRight size={16} />
                  </span>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
