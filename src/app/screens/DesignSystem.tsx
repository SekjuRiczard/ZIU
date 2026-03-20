import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { ArrowLeft, Plus, Save, Trash2, AlertCircle } from 'lucide-react';
import { ButtonHiFi } from '../components/library/ButtonHiFi';
import { InputHiFi } from '../components/library/InputHiFi';
import { TaskCardHiFi } from '../components/library/TaskCardHiFi';
import { useTheme } from '../context/ThemeContext';

export function DesignSystem() {
  const navigate = useNavigate();
  const { isDark } = useTheme();
  const [showError, setShowError] = useState(false);

  const sampleTask = {
    id: 'sample',
    title: 'Przykładowe zadanie projektowe',
    description: 'To jest opis przykładowego zadania, który pokazuje jak wygląda karta w systemie.',
    priority: 'medium' as const,
    dueDate: '25 marca 2026',
    status: 'active' as const,
    category: 'Design',
    hasImage: true,
    imageUrl: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=400&h=300&fit=crop'
  };

  return (
    <div className="min-h-screen bg-[var(--color-surface-background)]">
      {/* Header */}
      <motion.header 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-[var(--color-surface-card)] border-b border-[var(--color-border)] sticky top-0 z-50"
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
              <h1 className="text-[var(--color-text-primary)]">Design System - Hi-Fi</h1>
              <p className="text-[var(--color-text-secondary)] body-2">
                Dokumentacja komponentów i systemu projektowego
              </p>
            </div>
          </div>
        </div>
      </motion.header>

      <div className="max-w-[1440px] mx-auto px-[80px] py-[40px]">
        <div className="space-y-[64px]">
          {/* Color System */}
          <section>
            <h2 className="text-[var(--color-text-primary)] mb-[8px]">System Kolorów</h2>
            <p className="text-[var(--color-text-secondary)] body-2 mb-[32px]">
              Obsługa Light Mode i Dark Mode z semantycznymi tokenami
            </p>

            <div className="grid grid-cols-2 gap-[32px]">
              <div>
                <h4 className="text-[var(--color-text-primary)] mb-[16px]">Primary Colors</h4>
                <div className="space-y-[12px]">
                  <div className="flex items-center gap-[16px]">
                    <div className="w-[80px] h-[80px] rounded-[var(--radius-lg)] bg-[var(--color-primary-default)] shadow-[var(--shadow-md)]"></div>
                    <div>
                      <div className="text-[var(--color-text-primary)] font-medium">Primary Default</div>
                      <div className="text-[var(--color-text-secondary)] caption">
                        {isDark ? '#60A5FA' : '#1E40AF'}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-[16px]">
                    <div className="w-[80px] h-[80px] rounded-[var(--radius-lg)] bg-[var(--color-primary-hover)] shadow-[var(--shadow-md)]"></div>
                    <div>
                      <div className="text-[var(--color-text-primary)] font-medium">Primary Hover</div>
                      <div className="text-[var(--color-text-secondary)] caption">
                        {isDark ? '#93C5FD' : '#1E3A8A'}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-[var(--color-text-primary)] mb-[16px]">Semantic Colors</h4>
                <div className="space-y-[12px]">
                  <div className="flex items-center gap-[16px]">
                    <div className="w-[80px] h-[80px] rounded-[var(--radius-lg)] bg-[var(--color-semantic-error)] shadow-[var(--shadow-md)]"></div>
                    <div>
                      <div className="text-[var(--color-text-primary)] font-medium">Error</div>
                      <div className="text-[var(--color-text-secondary)] caption">
                        {isDark ? '#F87171' : '#DC2626'}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-[16px]">
                    <div className="w-[80px] h-[80px] rounded-[var(--radius-lg)] bg-[var(--color-semantic-success)] shadow-[var(--shadow-md)]"></div>
                    <div>
                      <div className="text-[var(--color-text-primary)] font-medium">Success</div>
                      <div className="text-[var(--color-text-secondary)] caption">
                        {isDark ? '#34D399' : '#059669'}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Typography */}
          <section>
            <h2 className="text-[var(--color-text-primary)] mb-[8px]">Typografia</h2>
            <p className="text-[var(--color-text-secondary)] body-2 mb-[32px]">
              Font: Inter, 9 stylów tekstowych z określoną hierarchią
            </p>

            <div className="bg-[var(--color-surface-card)] rounded-[var(--radius-lg)] shadow-[var(--shadow-md)] p-[40px] space-y-[24px]">
              <div>
                <h1>H1 - Heading 1 (40px, Bold, LH 120%)</h1>
                <div className="text-[var(--color-text-secondary)] caption mt-[8px]">
                  font-size: 40px, font-weight: 700
                </div>
              </div>
              <div>
                <h2>H2 - Heading 2 (32px, Bold, LH 125%)</h2>
                <div className="text-[var(--color-text-secondary)] caption mt-[8px]">
                  font-size: 32px, font-weight: 700
                </div>
              </div>
              <div>
                <h3>H3 - Heading 3 (24px, Semi-bold, LH 130%)</h3>
                <div className="text-[var(--color-text-secondary)] caption mt-[8px]">
                  font-size: 24px, font-weight: 600
                </div>
              </div>
              <div>
                <h4>H4 - Heading 4 (20px, Semi-bold, LH 130%)</h4>
                <div className="text-[var(--color-text-secondary)] caption mt-[8px]">
                  font-size: 20px, font-weight: 600
                </div>
              </div>
              <div>
                <h5>H5 - Heading 5 (16px, Semi-bold, LH 140%)</h5>
                <div className="text-[var(--color-text-secondary)] caption mt-[8px]">
                  font-size: 16px, font-weight: 600
                </div>
              </div>
              <div>
                <h6>H6 - Heading 6 (14px, Semi-bold, LH 140%)</h6>
                <div className="text-[var(--color-text-secondary)] caption mt-[8px]">
                  font-size: 14px, font-weight: 600
                </div>
              </div>
              <div>
                <p>Body 1 - Paragraf (16px, Regular, LH 150%)</p>
                <div className="text-[var(--color-text-secondary)] caption mt-[8px]">
                  font-size: 16px, font-weight: 400
                </div>
              </div>
              <div>
                <p className="body-2">Body 2 - Mniejszy paragraf (14px, Regular, LH 150%)</p>
                <div className="text-[var(--color-text-secondary)] caption mt-[8px]">
                  font-size: 14px, font-weight: 400
                </div>
              </div>
              <div>
                <p className="caption">Caption - Podpis (12px, Regular, LH 160%)</p>
                <div className="text-[var(--color-text-secondary)] caption mt-[8px]">
                  font-size: 12px, font-weight: 400
                </div>
              </div>
            </div>
          </section>

          {/* Button Component */}
          <section>
            <h2 className="text-[var(--color-text-primary)] mb-[8px]">Button (Przycisk)</h2>
            <p className="text-[var(--color-text-secondary)] body-2 mb-[32px]">
              5 wariantów × 3 rozmiary, obsługa ikon, hover animations
            </p>

            <div className="bg-[var(--color-surface-card)] rounded-[var(--radius-lg)] shadow-[var(--shadow-md)] p-[40px] space-y-[32px]">
              {/* Variants */}
              <div>
                <h4 className="text-[var(--color-text-primary)] mb-[16px]">Warianty</h4>
                <div className="flex flex-wrap gap-[16px]">
                  <ButtonHiFi variant="primary">Primary</ButtonHiFi>
                  <ButtonHiFi variant="secondary">Secondary</ButtonHiFi>
                  <ButtonHiFi variant="ghost">Ghost</ButtonHiFi>
                  <ButtonHiFi variant="danger">Danger</ButtonHiFi>
                  <ButtonHiFi variant="disabled">Disabled</ButtonHiFi>
                </div>
              </div>

              {/* Sizes */}
              <div>
                <h4 className="text-[var(--color-text-primary)] mb-[16px]">Rozmiary</h4>
                <div className="flex items-end gap-[16px]">
                  <ButtonHiFi variant="primary" size="small">Small (32px)</ButtonHiFi>
                  <ButtonHiFi variant="primary" size="medium">Medium (40px)</ButtonHiFi>
                  <ButtonHiFi variant="primary" size="large">Large (48px)</ButtonHiFi>
                </div>
              </div>

              {/* With Icons */}
              <div>
                <h4 className="text-[var(--color-text-primary)] mb-[16px]">Z ikonami</h4>
                <div className="flex flex-wrap gap-[16px]">
                  <ButtonHiFi variant="primary" icon={Plus}>Dodaj zadanie</ButtonHiFi>
                  <ButtonHiFi variant="secondary" icon={Save}>Zapisz</ButtonHiFi>
                  <ButtonHiFi variant="danger" icon={Trash2}>Usuń</ButtonHiFi>
                </div>
              </div>
            </div>
          </section>

          {/* Input Component */}
          <section>
            <h2 className="text-[var(--color-text-primary)] mb-[8px]">Input (Pole tekstowe)</h2>
            <p className="text-[var(--color-text-secondary)] body-2 mb-[32px]">
              4 stany: Default, Focused, Error, Disabled + animacje walidacji
            </p>

            <div className="bg-[var(--color-surface-card)] rounded-[var(--radius-lg)] shadow-[var(--shadow-md)] p-[40px] space-y-[24px] max-w-[600px]">
              <InputHiFi 
                label="Default State"
                placeholder="Wprowadź tekst..."
                helperText="Pomocniczy tekst pod polem"
              />

              <InputHiFi 
                label="Focused State"
                placeholder="Kliknij aby zobaczyć focus"
                state="focused"
                helperText="Border 2px + cień podczas focus"
              />

              <div>
                <InputHiFi 
                  label="Error State"
                  placeholder="Błędna wartość"
                  error={showError ? "To pole jest wymagane" : ""}
                />
                <ButtonHiFi 
                  variant="secondary" 
                  size="small"
                  className="mt-[12px]"
                  onClick={() => setShowError(!showError)}
                >
                  {showError ? 'Ukryj' : 'Pokaż'} błąd
                </ButtonHiFi>
              </div>

              <InputHiFi 
                label="Disabled State"
                placeholder="Pole wyłączone"
                state="disabled"
                helperText="40% opacity, cursor not-allowed"
              />
            </div>
          </section>

          {/* Card Component */}
          <section>
            <h2 className="text-[var(--color-text-primary)] mb-[8px]">Card (Karta zadania)</h2>
            <p className="text-[var(--color-text-secondary)] body-2 mb-[32px]">
              Auto Layout, obrazy opcjonalne, cień 0 2px 8px, corner radius 12px, hover animations
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
              <TaskCardHiFi task={sampleTask} />
              <TaskCardHiFi task={{ ...sampleTask, id: '2', status: 'completed', hasImage: false }} />
              <TaskCardHiFi task={{ ...sampleTask, id: '3', status: 'overdue', priority: 'high' }} />
            </div>
          </section>

          {/* Micro-interactions */}
          <section>
            <h2 className="text-[var(--color-text-primary)] mb-[8px]">Micro-interactions</h2>
            <p className="text-[var(--color-text-secondary)] body-2 mb-[32px]">
              Animacje hover, walidacja błędów, Smart Animate przejścia
            </p>

            <div className="bg-[var(--color-surface-card)] rounded-[var(--radius-lg)] shadow-[var(--shadow-md)] p-[40px]">
              <ul className="space-y-[12px] text-[var(--color-text-secondary)]">
                <li className="flex items-center gap-[12px]">
                  <div className="w-[8px] h-[8px] rounded-full bg-[var(--color-semantic-success)]"></div>
                  <span>Button hover - scale 1.02, tap scale 0.98</span>
                </li>
                <li className="flex items-center gap-[12px]">
                  <div className="w-[8px] h-[8px] rounded-full bg-[var(--color-semantic-success)]"></div>
                  <span>Input error - ikona pojawia się z animacją scale + helper text fade in</span>
                </li>
                <li className="flex items-center gap-[12px]">
                  <div className="w-[8px] h-[8px] rounded-full bg-[var(--color-semantic-success)]"></div>
                  <span>Card hover - podniesienie o 4px + zwiększenie cienia</span>
                </li>
                <li className="flex items-center gap-[12px]">
                  <div className="w-[8px] h-[8px] rounded-full bg-[var(--color-semantic-success)]"></div>
                  <span>Transition między ekranami - fade + slide animations</span>
                </li>
                <li className="flex items-center gap-[12px]">
                  <div className="w-[8px] h-[8px] rounded-full bg-[var(--color-semantic-success)]"></div>
                  <span>FAB button - spring animation z delay</span>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
