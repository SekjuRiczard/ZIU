import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { Input } from '../components/library/Input';
import { Button } from '../components/library/Button';

export function Settings() {
  const navigate = useNavigate();
  
  const [profileData, setProfileData] = useState({
    firstName: 'Jan',
    lastName: 'Kowalski',
    email: 'jan.kowalski@example.com',
    phone: '+48 123 456 789'
  });

  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const [darkMode, setDarkMode] = useState(false);

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Zapisano profil:', profileData);
    alert('Profil zaktualizowany');
  };

  const handleChangePassword = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      alert('Hasła nie są identyczne');
      return;
    }
    console.log('Zmieniono hasło');
    alert('Hasło zostało zmienione');
    setPasswordData({ currentPassword: '', newPassword: '', confirmPassword: '' });
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      {/* Header */}
      <header className="bg-white border-b border-[#E0E0E0]">
        <div className="max-w-[1440px] mx-auto px-[80px] py-[24px]">
          <h1 className="text-[#333333]">Ustawienia Profilu</h1>
        </div>
      </header>

      <div className="max-w-[1440px] mx-auto px-[80px] py-[40px]">
        {/* Breadcrumb */}
        <div className="mb-[32px] flex items-center gap-[8px] text-[#999999]">
          <span 
            className="cursor-pointer hover:text-[#333333]"
            onClick={() => navigate('/')}
          >
            Dashboard
          </span>
          <span>/</span>
          <span className="text-[#333333]">Ustawienia</span>
        </div>

        <div className="max-w-[800px] space-y-[32px]">
          {/* Profile Form */}
          <div className="bg-white border border-[#E0E0E0] p-[40px]">
            <h2 className="mb-[24px] text-[#333333]">Dane osobowe</h2>
            
            <form onSubmit={handleSaveProfile}>
              <div className="grid grid-cols-2 gap-[24px] mb-[24px]">
                <Input 
                  label="Imię"
                  value={profileData.firstName}
                  onChange={(e) => setProfileData({ ...profileData, firstName: e.target.value })}
                />
                <Input 
                  label="Nazwisko"
                  value={profileData.lastName}
                  onChange={(e) => setProfileData({ ...profileData, lastName: e.target.value })}
                />
              </div>

              <div className="mb-[24px]">
                <Input 
                  label="Email"
                  type="email"
                  value={profileData.email}
                  onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
                />
              </div>

              <div className="mb-[32px]">
                <Input 
                  label="Telefon"
                  value={profileData.phone}
                  onChange={(e) => setProfileData({ ...profileData, phone: e.target.value })}
                />
              </div>

              <div className="flex justify-end">
                <Button type="submit" variant="primary">
                  Zapisz zmiany
                </Button>
              </div>
            </form>
          </div>

          {/* Password Change */}
          <div className="bg-white border border-[#E0E0E0] p-[40px]">
            <h2 className="mb-[24px] text-[#333333]">Zmiana hasła</h2>
            
            <form onSubmit={handleChangePassword}>
              <div className="mb-[24px]">
                <Input 
                  label="Obecne hasło"
                  type="password"
                  placeholder="••••••••"
                  value={passwordData.currentPassword}
                  onChange={(e) => setPasswordData({ ...passwordData, currentPassword: e.target.value })}
                />
              </div>

              <div className="mb-[24px]">
                <Input 
                  label="Nowe hasło"
                  type="password"
                  placeholder="••••••••"
                  value={passwordData.newPassword}
                  onChange={(e) => setPasswordData({ ...passwordData, newPassword: e.target.value })}
                />
              </div>

              <div className="mb-[32px]">
                <Input 
                  label="Potwierdź nowe hasło"
                  type="password"
                  placeholder="••••••••"
                  value={passwordData.confirmPassword}
                  onChange={(e) => setPasswordData({ ...passwordData, confirmPassword: e.target.value })}
                />
              </div>

              <div className="flex justify-end">
                <Button type="submit" variant="primary">
                  Zmień hasło
                </Button>
              </div>
            </form>
          </div>

          {/* Theme Toggle */}
          <div className="bg-white border border-[#E0E0E0] p-[40px]">
            <h2 className="mb-[24px] text-[#333333]">Wygląd aplikacji</h2>
            
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[#333333] mb-[4px]">Ciemny motyw</div>
                <div className="text-[#999999] text-[14px]">Przełącz interfejs na ciemny tryb</div>
              </div>
              
              <label className="relative inline-block w-[56px] h-[32px] cursor-pointer">
                <input 
                  type="checkbox"
                  checked={darkMode}
                  onChange={(e) => setDarkMode(e.target.checked)}
                  className="opacity-0 w-0 h-0"
                />
                <span 
                  className={`absolute inset-0 transition-all ${
                    darkMode ? 'bg-[#666666]' : 'bg-[#D0D0D0]'
                  }`}
                >
                  <span 
                    className={`absolute top-[4px] left-[4px] w-[24px] h-[24px] bg-white transition-transform ${
                      darkMode ? 'translate-x-[24px]' : ''
                    }`}
                  />
                </span>
              </label>
            </div>
          </div>

          {/* Account Actions */}
          <div className="bg-white border border-[#E0E0E0] p-[40px]">
            <h2 className="mb-[24px] text-[#333333]">Zarządzanie kontem</h2>
            
            <div className="space-y-[16px]">
              <div className="flex items-center justify-between py-[16px] border-b border-[#E0E0E0]">
                <div>
                  <div className="text-[#333333] mb-[4px]">Eksportuj dane</div>
                  <div className="text-[#999999] text-[14px]">Pobierz kopię swoich danych</div>
                </div>
                <Button variant="secondary">
                  Eksportuj
                </Button>
              </div>

              <div className="flex items-center justify-between py-[16px]">
                <div>
                  <div className="text-[#333333] mb-[4px]">Usuń konto</div>
                  <div className="text-[#999999] text-[14px]">Trwale usuń konto i wszystkie dane</div>
                </div>
                <Button 
                  variant="secondary"
                  onClick={() => {
                    if (confirm('Czy na pewno chcesz usunąć konto? Ta operacja jest nieodwracalna.')) {
                      alert('Funkcja w wersji demo');
                    }
                  }}
                >
                  Usuń konto
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
