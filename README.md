# Laboratorium 8 — Implementacja dostępności: ARIA i semantyczny HTML

## Opis zadania

Celem laboratorium było przeprowadzenie refaktoryzacji aplikacji z poprzednich laboratoriów pod kątem dostępności zgodnej z WCAG 2.1 AA. Zakres prac obejmował poprawę semantyki HTML, dodanie odpowiednich atrybutów ARIA, implementację skip linka, live regionu oraz focus trapu w modalu.

Aplikacja została rozbudowana i poprawiona tak, aby była łatwiejsza w obsłudze dla użytkowników korzystających z klawiatury oraz technologii asystujących, takich jak czytniki ekranu.

## Zakres wykonanych zmian

### 1. Semantyczny HTML5

W widokach aplikacji zastąpiono niesemantyczne kontenery bardziej odpowiednimi elementami HTML5.

Zastosowano między innymi:

- `main` jako główny obszar treści strony,
- `header` jako nagłówek widoku,
- `nav` dla ścieżek nawigacji i filtrów,
- `section` dla logicznych sekcji strony,
- `article` dla samodzielnych bloków treści,
- `aside` dla informacji dodatkowych,
- `footer` dla akcji formularzy i widoków,
- `fieldset` oraz `legend` dla grup pól formularzy,
- `dl`, `dt`, `dd` dla metadanych zadania.

Dzięki temu struktura dokumentu jest czytelniejsza dla przeglądarki, czytników ekranu i narzędzi audytujących dostępność.

### 2. Atrybuty ARIA

Dodano atrybuty ARIA tam, gdzie sama semantyka HTML nie była wystarczająca.

Zastosowano między innymi:

- `aria-label` dla przycisków ikon i sekcji bez widocznego nagłówka,
- `aria-labelledby` do powiązania sekcji z nagłówkami,
- `aria-describedby` do powiązania pól i formularzy z opisami,
- `aria-current="page"` dla aktywnego elementu breadcrumb,
- `aria-current="step"` dla aktywnego kroku formularza rejestracji,
- `aria-invalid` dla pól formularzy z błędami,
- `aria-required` dla pól wymaganych,
- `aria-hidden="true"` dla ikon dekoracyjnych,
- `aria-modal="true"` i `role="dialog"` dla modala.

Unikano nadmiarowego użycia ARIA tam, gdzie wystarczał natywny element HTML, np. `button`, `form`, `nav`, `header` lub `main`.

### 3. Skip navigation link

Dodano link pomijający nawigację:

```tsx
<a href="#main-content" className="skip-link">
  Przejdź do treści głównej
</a>
```

Link jest ukryty wizualnie w stanie domyślnym i pojawia się po otrzymaniu fokusu klawiaturowego. Po naciśnięciu `Enter` przenosi użytkownika do elementu:

```tsx
<main id="main-content" tabIndex={-1}>
```

Dzięki temu użytkownik korzystający z klawiatury może szybko przejść do właściwej treści strony.

### 4. ARIA live region

Dodano regiony statusu informujące czytniki ekranu o dynamicznych zmianach w aplikacji.

Przykładowe zastosowania:

- informowanie o liczbie wyników wyszukiwania i aktywnym filtrze w dashboardzie,
- informowanie o zmianie kroku w formularzu rejestracji,
- informowanie o sukcesie lub błędzie w ustawieniach profilu.

Przykład:

```tsx
<p className="visually-hidden" role="status" aria-atomic="true">
  {liveRegionMessage}
</p>
```

Region jest ukryty wizualnie, ale dostępny dla czytników ekranu.

### 5. Focus trap w modalu

Dodano komponent `FocusTrap`, który utrzymuje fokus klawiaturowy wewnątrz modala.

Zaimplementowane zachowania:

- po otwarciu modala fokus trafia do pierwszego elementu interaktywnego,
- `Tab` przechodzi po elementach wewnątrz modala,
- `Shift + Tab` działa w odwrotnej kolejności,
- fokus nie wychodzi poza modal,
- `Escape` zamyka modal,
- po zamknięciu fokus wraca do elementu, który otworzył modal.

Modal został wykorzystany między innymi przy informacjach RODO w formularzu rejestracji.

## Zmienione lub dodane elementy aplikacji

### Komponenty dostępności

Dodano:

```txt
src/app/components/accessibility/FocusTrap.tsx
src/app/components/accessibility/ModalDialog.tsx
```

`FocusTrap.tsx` odpowiada za obsługę fokusu wewnątrz modala.

`ModalDialog.tsx` odpowiada za semantyczną strukturę modala:

- `role="dialog"`,
- `aria-modal="true"`,
- `aria-labelledby`,
- przycisk zamykania,
- obsługę kliknięcia w tło.

### Formularz rejestracji

W formularzu rejestracji z Lab 7 dodano i poprawiono:

- `main id="main-content"`,
- `aria-labelledby` dla głównego nagłówka,
- live region informujący o aktualnym kroku,
- aktywny krok z `aria-current="step"`,
- semantyczne sekcje i pola formularza,
- modal RODO z focus trapem,
- poprawne komunikaty błędów z `role="alert"`.

### Dashboard

W dashboardzie poprawiono:

- strukturę na `main`, `header`, `section`, `nav`, `ul`, `li`,
- formularz wyszukiwania z `role="search"`,
- ukrytą etykietę dla pola wyszukiwania,
- `aria-controls` dla listy wyników,
- live region ogłaszający liczbę znalezionych zadań,
- przyciski ikon z `aria-label`,
- ikony dekoracyjne z `aria-hidden="true"`,
- aktywne filtry z `aria-pressed`.

### Widoki formularzy i ustawień

Poprawiono dostępność i semantykę w widokach:

- dodawanie zadania,
- dodawanie zadania HiFi,
- ustawienia profilu,
- filtrowanie i sortowanie,
- szczegóły zadania,
- szczegóły zadania HiFi.

Wprowadzono:

- `fieldset` i `legend` dla grup formularzy,
- `nav` dla breadcrumbów,
- `aria-current="page"` dla aktualnej strony,
- `footer` dla akcji formularzy,
- `role="status"` dla komunikatów,
- dostępne przełączniki i przyciski ikon.

## Klasy CSS dodane na potrzeby dostępności

Dodano klasę do ukrywania treści wizualnie, ale pozostawiania jej dostępnej dla czytników ekranu:

```css
.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
```

Dodano również styl skip linka:

```css
.skip-link {
  position: absolute;
  top: -48px;
  left: 12px;
  z-index: 9999;
  padding: 10px 16px;
  border-radius: 8px;
  background: #0043ff;
  color: #ffffff;
  font-weight: 700;
  text-decoration: none;
}

.skip-link:focus {
  top: 12px;
}
```

## Testy manualne

Aplikację należy sprawdzić wyłącznie za pomocą klawiatury.

### Skip link

- Po pierwszym naciśnięciu `Tab` pojawia się link „Przejdź do treści głównej”.
- Po naciśnięciu `Enter` fokus przechodzi do `main id="main-content"`.
- Link znika po utracie fokusu.

### Nawigacja klawiaturą

- Wszystkie przyciski, linki i pola formularzy są dostępne przez `Tab`.
- Kolejność fokusu odpowiada kolejności wizualnej.
- Fokus jest widoczny na elementach interaktywnych.
- Przyciski ikon mają nazwę dostępną przez `aria-label` albo widoczny tekst.

### Wyszukiwanie i live region

- Pole wyszukiwania ma etykietę powiązaną przez `htmlFor`.
- Po zmianie tekstu wyszukiwania aktualizuje się lista zadań.
- Czytnik ekranu otrzymuje komunikat o liczbie znalezionych wyników.

### Modal

- Otwarcie modala przenosi fokus do środka.
- `Tab` i `Shift + Tab` krążą wyłącznie wewnątrz modala.
- `Escape` zamyka modal.
- Po zamknięciu fokus wraca do elementu otwierającego modal.

## Testy automatyczne

Do końcowej weryfikacji należy użyć:

- Lighthouse w Chrome DevTools,
- axe DevTools,
- Accessibility Tree w Chrome DevTools.

Oczekiwane wyniki:

- Lighthouse Accessibility: minimum 90 punktów,
- axe DevTools: brak błędów `critical` i `serious`,
- każdy element interaktywny ma poprawne `Name`, `Role` i `State`.

## Podsumowanie

W ramach Laboratorium 8 aplikacja została dostosowana do wymagań dostępności WCAG 2.1 AA. Poprawiono strukturę HTML, dodano atrybuty ARIA, wdrożono skip link, live regiony oraz dostępny modal z focus trapem. Aplikacja jest lepiej obsługiwana klawiaturą i bardziej czytelna dla technologii asystujących.
