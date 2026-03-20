import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { ArrowLeft, Save, X, Calendar as CalendarIcon } from 'lucide-react';
import { InputHiFi } from '../components/library/InputHiFi';
import { ButtonHiFi } from '../components/library/ButtonHiFi';

export function AddTaskHiFi() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    dueDate: '',
    priority: 'medium',
    category: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const validateField = (name: string, value: string) => {
    if (name === 'title' && !value.trim()) {
      return 'Tytuł zadania jest wymagany';
    }
    if (name === 'dueDate' && !value) {
      return 'Data wykonania jest wymagana';
    }
    return '';
  };

  const handleBlur = (name: string) => {
    setTouched({ ...touched, [name]: true });
    const error = validateField(name, formData[name as keyof typeof formData]);
    setErrors({ ...errors, [name]: error });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newErrors: Record<string, string> = {};
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key as keyof typeof formData]);
      if (error) newErrors[key] = error;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setTouched({ title: true, dueDate: true, description: true, priority: true, category: true });
      return;
    }

    console.log('Zapisano zadanie:', formData);
    navigate('/');
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
              <h1 className="text-[var(--color-text-primary)]">Dodaj Nowe Zadanie</h1>
              <p className="text-[var(--color-text-secondary)] body-2">Wypełnij formularz, aby utworzyć zadanie</p>
            </div>
          </div>
        </div>
      </motion.header>

      <div className="max-w-[1440px] mx-auto px-[80px] py-[40px]">
        <div className="max-w-[800px]">
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
            <span className="text-[var(--color-text-primary)] font-medium">Dodaj zadanie</span>
          </motion.div>

          {/* Form */}
          <motion.form 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            onSubmit={handleSubmit} 
            className="bg-[var(--color-surface-card)] rounded-[var(--radius-lg)] shadow-[var(--shadow-md)] p-[40px]"
          >
            <div className="space-y-[24px]">
              <InputHiFi 
                label="Tytuł zadania *"
                placeholder="np. Przygotować prezentację projektu"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                onBlur={() => handleBlur('title')}
                error={touched.title ? errors.title : ''}
                required
              />

              <div>
                <label className="block mb-[8px] text-[var(--color-text-primary)]">Opis zadania</label>
                <textarea 
                  className="w-full px-[16px] py-[12px] min-h-[120px] rounded-[var(--radius-lg)] bg-[var(--color-input-background)] border border-[var(--color-border)] text-[var(--color-text-primary)] focus:border-[var(--color-border-focus)] focus:outline-none focus:shadow-[0_0_0_3px_rgba(30,64,175,0.1)] transition-all resize-none"
                  placeholder="Szczegółowy opis zadania, kontekst i wymagania..."
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                />
              </div>

              <div className="grid grid-cols-2 gap-[24px]">
                <InputHiFi 
                  label="Termin wykonania *"
                  type="date"
                  value={formData.dueDate}
                  onChange={(e) => setFormData({ ...formData, dueDate: e.target.value })}
                  onBlur={() => handleBlur('dueDate')}
                  error={touched.dueDate ? errors.dueDate : ''}
                  required
                />

                <InputHiFi 
                  label="Kategoria"
                  placeholder="np. Frontend, Backend"
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                />
              </div>

              <div>
                <label className="block mb-[16px] text-[var(--color-text-primary)]">Priorytet *</label>
                <div className="flex gap-[16px]">
                  {[
                    { value: 'low', label: 'Niski', color: 'blue' },
                    { value: 'medium', label: 'Średni', color: 'yellow' },
                    { value: 'high', label: 'Wysoki', color: 'red' }
                  ].map((priority) => (
                    <motion.label 
                      key={priority.value}
                      whileHover={{ scale: 1.02 }}
                      className={`flex-1 cursor-pointer`}
                    >
                      <input 
                        type="radio"
                        name="priority"
                        value={priority.value}
                        checked={formData.priority === priority.value}
                        onChange={(e) => setFormData({ ...formData, priority: e.target.value })}
                        className="peer hidden"
                      />
                      <div className={`px-[20px] py-[12px] rounded-[var(--radius-lg)] border-2 transition-all text-center peer-checked:border-[var(--color-primary-default)] peer-checked:bg-[var(--color-primary-default)] peer-checked:text-white ${
                        formData.priority === priority.value 
                          ? '' 
                          : 'border-[var(--color-border)] text-[var(--color-text-secondary)] hover:border-[var(--color-primary-default)]'
                      }`}>
                        {priority.label}
                      </div>
                    </motion.label>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-[16px] justify-end mt-[40px] pt-[32px] border-t border-[var(--color-border)]">
              <ButtonHiFi 
                type="button"
                variant="secondary"
                size="medium"
                icon={X}
                onClick={() => navigate('/')}
              >
                Anuluj
              </ButtonHiFi>
              <ButtonHiFi 
                type="submit"
                variant="primary"
                size="medium"
                icon={Save}
              >
                Zapisz zadanie
              </ButtonHiFi>
            </div>
          </motion.form>
        </div>
      </div>
    </div>
  );
}
