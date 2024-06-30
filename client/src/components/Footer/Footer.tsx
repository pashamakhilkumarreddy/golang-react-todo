import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import './styles.css';

const PageFooter: React.FC = () => {
  const { t } = useTranslation();

  const socialLinks = useMemo(() => [
    { href: "#", icon: <FaFacebookF />, label: "Facebook" },
    { href: "#", icon: <FaTwitter />, label: "Twitter" },
    { href: "#", icon: <FaInstagram />, label: "Instagram" },
  ], []);
  return (
    <footer className="footer has-background-white pt-5 pb-5">
      <div className="container">
        <div className="columns is-multiline is-vcentered is-mobile">
          <div className="column is-12-mobile is-12-desktop p-1">
            <div className="is-flex is-justify-content-space-evenly content has-text-centered">
              <h3 className="title is-5 mb-0">{t('general.footer.heading')}</h3>
              <p>&copy; {t('general.footer.copyright')}</p>
            </div>
          </div>
          <div className="column is-12-mobile is-12-desktop has-text-centered p-1">
            <div className="is-flex is-justify-content-center">
              {socialLinks.map(({ href, icon, label }) => (
                <a href={href} className="mx-2" key={label}>
                  <span className="icon is-medium">
                    {icon}
                  </span>
                  <span className="sr-only">{label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default PageFooter;
