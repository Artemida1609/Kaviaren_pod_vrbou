import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { contactInfo } from '../data/cafeInfo';

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <footer className="bg-gradient-to-br from-espresso-900 via-espresso-800 to-espresso-900 text-latte-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {/* About */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-serif font-bold mb-4 text-crema-300">
              Kaviareň pod Vŕbou
            </h3>
            <p className="text-latte-200 text-sm leading-relaxed">
              Útulná kaviareň v srdci Bratislavy, kde sa stretáva tradícia s modernitou.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-4 text-crema-300">Rýchle odkazy</h3>
            <ul className="space-y-3 text-sm">
              {[
                { path: '/menu', label: 'Ponuka' },
                { path: '/about', label: 'O nás' },
                { path: '/gallery', label: 'Galéria' },
                { path: '/contact', label: 'Kontakt' },
              ].map((link, index) => (
                <motion.li
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link 
                    to={link.path} 
                    className="text-latte-200 hover:text-crema-300 transition-colors inline-block hover:translate-x-1 transform duration-200"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-4 text-crema-300">Kontakt</h3>
            <ul className="space-y-3 text-sm text-latte-200">
              {[
                { icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z', text: contactInfo.address, link: false },
                { icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z', text: contactInfo.phone, link: true, href: `tel:${contactInfo.phone}` },
                { icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z', text: contactInfo.email, link: true, href: `mailto:${contactInfo.email}` },
                { icon: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z', text: 'Facebook', link: true, href: contactInfo.facebook, external: true },
              ].map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-start group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0 text-crema-400 group-hover:text-crema-300 transition-colors">
                    {item.icon.includes('M24') ? (
                      <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
                        <path d={item.icon} />
                      </svg>
                    ) : (
                      <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                      </svg>
                    )}
                  </div>
                  {item.link ? (
                    <a 
                      href={item.href} 
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noopener noreferrer" : undefined}
                      className="hover:text-crema-300 transition-colors inline-block hover:translate-x-1 transform duration-200"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span>{item.text}</span>
                  )}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        <motion.div 
          className="mt-8 pt-8 border-t border-espresso-700 text-center text-sm text-latte-300"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <p>&copy; {new Date().getFullYear()} Kaviareň pod Vŕbou. Všetky práva vyhradené.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

