import React from 'react';
import { useNavigate } from 'react-router';
import { Button } from '../components/library/Button';
import { Input } from '../components/library/Input';
import { TaskCard } from '../components/library/TaskCard';

export function ComponentLibrary() {
  const navigate = useNavigate();

  const sampleTask = {
    id: 'sample',
    title: 'Przykładowe zadanie',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.',
    priority: 'medium' as const,
    dueDate: '2026-03-25',
    status: 'default' as const
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      {/* Header */}
      <header className="bg-white border-b border-[#E0E0E0]">
        <div className="max-w-[1440px] mx-auto px-[80px] py-[24px]">
          <h1 className="text-[#333333]">Biblioteka Komponentów</h1>
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
          <span className="text-[#333333]">Biblioteka komponentów</span>
        </div>

        <div className="space-y-[48px]">
          {/* Button Component */}
          <section className="bg-white border border-[#E0E0E0] p-[40px]">
            <h2 className="mb-[8px] text-[#333333]">Button (Przycisk)</h2>
            <p className="mb-[32px] text-[#666666]">Komponent przycisku z dwoma wariantami: Primary i Secondary</p>
            
            <div className="space-y-[24px]">
              <div>
                <h4 className="mb-[16px] text-[#999999]">Wariant: Primary</h4>
                <div className="p-[24px] bg-[#F9F9F9] inline-block">
                  <Button variant="primary">Przycisk Primary</Button>
                </div>
                <div className="mt-[8px] text-[14px] text-[#999999]">
                  Wypełnienie: #E0E0E0, Padding: 24px × 12px
                </div>
              </div>

              <div>
                <h4 className="mb-[16px] text-[#999999]">Wariant: Secondary</h4>
                <div className="p-[24px] bg-[#F9F9F9] inline-block">
                  <Button variant="secondary">Przycisk Secondary</Button>
                </div>
                <div className="mt-[8px] text-[14px] text-[#999999]">
                  Obramowanie: 1px #333333, Padding: 24px × 12px
                </div>
              </div>
            </div>
          </section>

          {/* Input Component */}
          <section className="bg-white border border-[#E0E0E0] p-[40px]">
            <h2 className="mb-[8px] text-[#333333]">Input (Pole tekstowe)</h2>
            <p className="mb-[32px] text-[#666666]">Komponent pola tekstowego z trzema wariantami: Default, Error, Disabled</p>
            
            <div className="space-y-[24px] max-w-[400px]">
              <div>
                <h4 className="mb-[16px] text-[#999999]">Wariant: Default</h4>
                <Input 
                  variant="default" 
                  placeholder="Wprowadź tekst..."
                  label="Pole tekstowe"
                />
                <div className="mt-[8px] text-[14px] text-[#999999]">
                  Obramowanie: 1px #D0D0D0, Min. wysokość: 48px
                </div>
              </div>

              <div>
                <h4 className="mb-[16px] text-[#999999]">Wariant: Error</h4>
                <Input 
                  variant="error" 
                  placeholder="Błędne dane..."
                  label="Pole z błędem"
                />
                <div className="mt-[8px] text-[14px] text-[#999999]">
                  Obramowanie: 2px #CC0000 (czerwone)
                </div>
              </div>

              <div>
                <h4 className="mb-[16px] text-[#999999]">Wariant: Disabled</h4>
                <Input 
                  variant="disabled" 
                  placeholder="Pole wyłączone"
                  label="Pole nieaktywne"
                />
                <div className="mt-[8px] text-[14px] text-[#999999]">
                  Tło: #F5F5F5, Opacity: 60%, Kursor: not-allowed
                </div>
              </div>
            </div>
          </section>

          {/* TaskCard Component */}
          <section className="bg-white border border-[#E0E0E0] p-[40px]">
            <h2 className="mb-[8px] text-[#333333]">Card (Karta zadania)</h2>
            <p className="mb-[32px] text-[#666666]">Komponent karty zadania z trzema wariantami: Default, Completed, Overdue</p>
            
            <div className="space-y-[24px]">
              <div>
                <h4 className="mb-[16px] text-[#999999]">Wariant: Default</h4>
                <div className="max-w-[400px]">
                  <TaskCard task={sampleTask} />
                </div>
                <div className="mt-[8px] text-[14px] text-[#999999]">
                  Obramowanie: 1px #D0D0D0, Padding: 24px
                </div>
              </div>

              <div>
                <h4 className="mb-[16px] text-[#999999]">Wariant: Completed</h4>
                <div className="max-w-[400px]">
                  <TaskCard task={{ ...sampleTask, status: 'completed' }} />
                </div>
                <div className="mt-[8px] text-[14px] text-[#999999]">
                  Tytuł przekreślony, Opacity: 70%
                </div>
              </div>

              <div>
                <h4 className="mb-[16px] text-[#999999]">Wariant: Overdue</h4>
                <div className="max-w-[400px]">
                  <TaskCard task={{ ...sampleTask, status: 'overdue' }} />
                </div>
                <div className="mt-[8px] text-[#999999] text-[14px]">
                  Lewe obramowanie: 4px #666666
                </div>
              </div>
            </div>
          </section>

          {/* Grid System Info */}
          <section className="bg-white border border-[#E0E0E0] p-[40px]">
            <h2 className="mb-[8px] text-[#333333]">System siatki 8pt</h2>
            <p className="mb-[32px] text-[#666666]">Wszystkie odstępy i wymiary są wielokrotnością 8px</p>
            
            <div className="grid grid-cols-4 gap-[16px]">
              <div className="text-center">
                <div className="w-[8px] h-[8px] bg-[#E0E0E0] mx-auto mb-[8px]"></div>
                <div className="text-[14px] text-[#666666]">8px</div>
              </div>
              <div className="text-center">
                <div className="w-[16px] h-[16px] bg-[#E0E0E0] mx-auto mb-[8px]"></div>
                <div className="text-[14px] text-[#666666]">16px</div>
              </div>
              <div className="text-center">
                <div className="w-[24px] h-[24px] bg-[#E0E0E0] mx-auto mb-[8px]"></div>
                <div className="text-[14px] text-[#666666]">24px</div>
              </div>
              <div className="text-center">
                <div className="w-[32px] h-[32px] bg-[#E0E0E0] mx-auto mb-[8px]"></div>
                <div className="text-[14px] text-[#666666]">32px</div>
              </div>
            </div>

            <div className="mt-[24px] p-[16px] bg-[#F9F9F9]">
              <div className="text-[14px] text-[#666666]">
                <strong>Layout Grid:</strong><br />
                Kolumny: 12 kolumn, Margin = 80px, Gutter = 24px<br />
                Wiersze: Count = Auto, Height = 8px, Gutter = 0px
              </div>
            </div>
          </section>
        </div>

        <div className="mt-[40px]">
          <Button 
            variant="secondary"
            onClick={() => navigate('/')}
          >
            Powrót do Dashboard
          </Button>
        </div>
      </div>
    </div>
  );
}
