import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { ArrowLeft, Save, Moon, Sun, Download, Trash2 } from 'lucide-react';
import { InputHiFi } from '../components/library/InputHiFi';
import { ButtonHiFi } from '../components/library/ButtonHiFi';
import { useTheme } from '../context/ThemeContext';

export function SettingsHiFi() {
  const navigate = useNavigate();
  const { isDark, toggleTheme } = useTheme();
  
  const [profileData, setProfileData] = useState({
    firstName: 'Jan',
    lastName: 'Kowalski',
    email: 'jan.kowalski@firma.pl',
    phone: '+48 123 456 789'
  });

  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const [passwordErrors, setPasswordErrors] = useState<Record<string, string>>({});

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Zapisano profil:', profileData);
    alert('✓ Profil został zaktualizowany');
  };

  const handleChangePassword = (e: React.FormEvent) => {
    e.preventDefault();
    
    const errors: Record<string, string> = {};
    
    if (!passwordData.currentPassword) {
      errors.currentPassword = 'Obecne hasło jest wymagane';
    }
    if (!passwordData.newPassword) {
      errors.newPassword = 'Nowe hasło jest wymagane';
    } else if (passwordData.newPassword.length < 8) {
      errors.newPassword = 'Hasło musi mieć min. 8 znaków';
    }
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      errors.confirmPassword = 'Hasła nie są identyczne';
    }
    
    if (Object.keys(errors).length > 0) {
      setPasswordErrors(errors);
      return;
    }
    
    console.log('Zmieniono hasło');
    alert('✓ Hasło zostało zmienione');
    setPasswordData({ currentPassword: '', newPassword: '', confirmPassword: '' });
    setPasswordErrors({});
  };

  return (
    <div className="min-h-screen bg-[var(--color-surface-background)]">
      {/* Header */}
      <motion.header 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-[var(--color-surface-card)] border-b border-[var(--color-border)]"
      >
        <div className="max-w-[1440px] mx-auto px-[80px] py-[24px]">
          <div className="flex items-center gap-[16px]">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/')}
              className="w-[40px] h-[40px] rounded-[var(--radius-lg)] bg-[var(--color-surface-background)] flex items-center justify-center text-[var(--color-text-primary)] hover:bg-[var(--color-muted)] transition-colors"
            >
              <ArrowLeft size={20} />
            </motion.button>
            <div>
              <h1 className="text-[var(--color-text-primary)]">Ustawienia</h1>
              <p className="text-[var(--color-text-secondary)] body-2">Zarządzaj swoim kontem i preferencjami</p>
            </div>
          </div>
        </div>
      </motion.header>

      <div className="max-w-[1440px] mx-auto px-[80px] py-[40px]">
        {/* Breadcrumb */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-[32px] flex items-center gap-[8px] text-[14px]"
        >
          <span 
            className="text-[var(--color-text-secondary)] cursor-pointer hover:text-[var(--color-primary-default)] transition-colors"
            onClick={() => navigate('/')}
          >
            Dashboard
          </span>
          <span className="text-[var(--color-text-secondary)]">/</span>
          <span className="text-[var(--color-text-primary)] font-medium">Ustawienia</span>
        </motion.div>

        <div className="max-w-[800px] space-y-[32px]">
          {/* Profile Form */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="bg-[var(--color-surface-card)] rounded-[var(--radius-lg)] shadow-[var(--shadow-md)] p-[40px]"
          >
            <h2 className="text-[var(--color-text-primary)] mb-[24px]">Dane osobowe</h2>
            
            <form onSubmit={handleSaveProfile}>
              <div className="grid grid-cols-2 gap-[24px] mb-[24px]">
                <InputHiFi 
                  label="Imię"
                  value={profileData.firstName}
                  onChange={(e) => setProfileData({ ...profileData, firstName: e.target.value })}
                />
                <InputHiFi 
                  label="Nazwisko"
                  value={profileData.lastName}
                  onChange={(e) => setProfileData({ ...profileData, lastName: e.target.value })}
                />
              </div>

              <div className="mb-[24px]">
                <InputHiFi 
                  label="Email"
                  type="email"
                  value={profileData.email}
                  onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
                  helperText="Adres email używany do logowania i powiadomień"
                />
              </div>

              <div className="mb-[32px]">
                <InputHiFi 
                  label="Telefon"
                  value={profileData.phone}
                  onChange={(e) => setProfileData({ ...profileData, phone: e.target.value })}
                />
              </div>

              <div className="flex justify-end">
                <ButtonHiFi type="submit" variant="primary" icon={Save}>
                  Zapisz zmiany
                </ButtonHiFi>
              </div>
            </form>
          </motion.div>

          {/* Password Change */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-[var(--color-surface-card)] rounded-[var(--radius-lg)] shadow-[var(--shadow-md)] p-[40px]"
          >
            <h2 className="text-[var(--color-text-primary)] mb-[24px]">Zmiana hasła</h2>
            
            <form onSubmit={handleChangePassword}>
              <div className="space-y-[24px] mb-[32px]">
                <InputHiFi 
                  label="Obecne hasło"
                  type="password"
                  placeholder="••••••••"
                  value={passwordData.currentPassword}
                  onChange={(e) => setPasswordData({ ...passwordData, currentPassword: e.target.value })}
                  error={passwordErrors.currentPassword}
                />

                <InputHiFi 
                  label="Nowe hasło"
                  type="password"
                  placeholder="••••••••"
                  value={passwordData.newPassword}
                  onChange={(e) => setPasswordData({ ...passwordData, newPassword: e.target.value })}
                  error={passwordErrors.newPassword}
                  helperText="Min. 8 znaków, wielkie i małe litery, cyfry"
                />

                <InputHiFi 
                  label="Potwierdź nowe hasło"
                  type="password"
                  placeholder="••••••••"
                  value={passwordData.confirmPassword}
                  onChange={(e) => setPasswordData({ ...passwordData, confirmPassword: e.target.value })}
                  error={passwordErrors.confirmPassword}
                />
              </div>

              <div className="flex justify-end">
                <ButtonHiFi type="submit" variant="primary" icon={Save}>
                  Zmień hasło
                </ButtonHiFi>
              </div>
            </form>
          </motion.div>

          {/* Theme Toggle */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-[var(--color-surface-card)] rounded-[var(--radius-lg)] shadow-[var(--shadow-md)] p-[40px]"
          >
            <h2 className="text-[var(--color-text-primary)] mb-[24px]">Wygląd aplikacji</h2>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-[16px]">
                <div className={`w-[48px] h-[48px] rounded-[var(--radius-lg)] flex items-center justify-center ${
                  isDark ? 'bg-[var(--color-primary-default)]' : 'bg-[var(--color-muted)]'
                }`}>
                  {isDark ? <Moon size={24} className="text-white" /> : <Sun size={24} className="text-[var(--color-text-secondary)]" />}
                </div>
                <div>
                  <div className="text-[var(--color-text-primary)] font-medium mb-[4px]">
                    {isDark ? 'Ciemny motyw' : 'Jasny motyw'}
                  </div>
                  <div className="text-[var(--color-text-secondary)] text-[14px]">
                    {isDark ? 'Redukuje zmęczenie oczu w ciemnym otoczeniu' : 'Lepiej widoczny w jasnym otoczeniu'}
                  </div>
                </div>
              </div>
              
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={toggleTheme}
                className={`relative inline-block w-[56px] h-[32px] rounded-full transition-colors ${
                  isDark ? 'bg-[var(--color-primary-default)]' : 'bg-[var(--color-border)]'
                }`}
              >
                <motion.span 
                  layout
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  className={`absolute top-[4px] w-[24px] h-[24px] bg-white rounded-full shadow-[var(--shadow-sm)] ${
                    isDark ? 'left-[28px]' : 'left-[4px]'
                  }`}
                />
              </motion.button>
            </div>
          </motion.div>

          {/* Account Actions */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-[var(--color-surface-card)] rounded-[var(--radius-lg)] shadow-[var(--shadow-md)] p-[40px]"
          >
            <h2 className="text-[var(--color-text-primary)] mb-[24px]">Zarządzanie kontem</h2>
            
            <div className="space-y-[16px]">
              <div className="flex items-center justify-between py-[16px] border-b border-[var(--color-border)]">
                <div>
                  <div className="text-[var(--color-text-primary)] font-medium mb-[4px]">Eksportuj dane</div>
                  <div className="text-[var(--color-text-secondary)] text-[14px]">Pobierz kopię wszystkich swoich danych</div>
                </div>
                <ButtonHiFi variant="secondary" icon={Download}>
                  Eksportuj
                </ButtonHiFi>
              </div>

              <div className="flex items-center justify-between py-[16px]">
                <div>
                  <div className="text-[var(--color-semantic-error)] font-medium mb-[4px]">Usuń konto</div>
                  <div className="text-[var(--color-text-secondary)] text-[14px]">Trwale usuń konto i wszystkie dane</div>
                </div>
                <ButtonHiFi 
                  variant="danger"
                  icon={Trash2}
                  onClick={() => {
                    if (confirm('Czy na pewno chcesz usunąć konto? Ta operacja jest nieodwracalna.')) {
                      alert('Funkcja w wersji demo');
                    }
                  }}
                >
                  Usuń konto
                </ButtonHiFi>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
