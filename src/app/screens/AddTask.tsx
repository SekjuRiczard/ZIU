import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { Input } from '../components/library/Input';
import { Button } from '../components/library/Button';

export function AddTask() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    dueDate: '',
    priority: 'medium'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Symulacja zapisu
    console.log('Zapisano zadanie:', formData);
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      {/* Header */}
      <header className="bg-white border-b border-[#E0E0E0]">
        <div className="max-w-[1440px] mx-auto px-[80px] py-[24px]">
          <h1 className="text-[#333333]">Dodaj Nowe Zadanie</h1>
        </div>
      </header>

      <div className="max-w-[1440px] mx-auto px-[80px] py-[40px]">
        <div className="max-w-[800px]">
          {/* Breadcrumb */}
          <div className="mb-[32px] flex items-center gap-[8px] text-[#999999]">
            <span 
              className="cursor-pointer hover:text-[#333333]"
              onClick={() => navigate('/')}
            >
              Dashboard
            </span>
            <span>/</span>
            <span className="text-[#333333]">Dodaj zadanie</span>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-white border border-[#E0E0E0] p-[40px]">
            <div className="mb-[24px]">
              <Input 
                label="Tytuł zadania *"
                placeholder="Wprowadź tytuł zadania"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                required
              />
            </div>

            <div className="mb-[24px]">
              <label className="block mb-[8px] text-[#333333]">Opis zadania</label>
              <textarea 
                className="w-full px-[16px] py-[12px] min-h-[120px] bg-white border border-[#D0D0D0] text-[#333333] focus:outline-none focus:border-[#999999]"
                placeholder="Lorem ipsum dolor sit amet..."
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              />
            </div>

            <div className="mb-[24px]">
              <Input 
                label="Termin wykonania *"
                type="date"
                value={formData.dueDate}
                onChange={(e) => setFormData({ ...formData, dueDate: e.target.value })}
                required
              />
            </div>

            <div className="mb-[40px]">
              <label className="block mb-[16px] text-[#333333]">Priorytet *</label>
              <div className="flex gap-[16px]">
                {['low', 'medium', 'high'].map((priority) => (
                  <label 
                    key={priority}
                    className="flex items-center gap-[8px] cursor-pointer"
                  >
                    <input 
                      type="radio"
                      name="priority"
                      value={priority}
                      checked={formData.priority === priority}
                      onChange={(e) => setFormData({ ...formData, priority: e.target.value })}
                      className="w-[20px] h-[20px]"
                    />
                    <span className="text-[#666666]">
                      {priority === 'low' ? 'Niski' : priority === 'medium' ? 'Średni' : 'Wysoki'}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-[16px] justify-end">
              <Button 
                type="button"
                variant="secondary"
                onClick={() => navigate('/')}
              >
                Anuluj
              </Button>
              <Button 
                type="submit"
                variant="primary"
              >
                Zapisz zadanie
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
