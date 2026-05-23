# Audyt dostępności — axe DevTools GUI

Audyt wykonano za pomocą rozszerzenia **axe DevTools GUI** w Chrome DevTools dla strony głównej aplikacji TodoApp. Narzędzie wykryło 3 problemy typu **Moderate** oraz dodatkowo zweryfikowano strukturę nagłówków wtyczką **HeadingsMap**.

---

## 1. Heading levels should only increase by one

**Błąd:** Struktura nagłówków przeskakiwała poziomy. W aplikacji występowała kolejność nagłówków `h1 -> h2 -> h5`, co zaburzało logiczną strukturę dokumentu dla czytników ekranu.

**Zrzut błędu:**

![axe GUI — heading levels](./public/axeGui1.png)

**Naprawa:** Liczby w kartach statystyk nie powinny być nagłówkami. Elementy oznaczone jako `h5` zostały zamienione na zwykłe elementy tekstowe, np. `p` albo `strong`. Dzięki temu nagłówki opisują sekcje strony, a nie wartości statystyczne.

```tsx
// Przed
<h5 className="stat-card__value">3</h5>

// Po
<p className="stat-card__value">3</p>
```

---

## 2. All page content should be contained by landmarks

**Błąd:** Część zawartości strony znajdowała się poza semantycznymi landmarkami HTML. Problem dotyczył między innymi skip linka oraz struktury layoutu.

**Zrzut błędu:**

![axe GUI — landmarks](./public/axeGui2.png)

**Naprawa:** Dodano wspólny `Layout`, w którym nawigacja znajduje się w `header`, a główna treść aplikacji w `main`. Dzięki temu zawartość strony jest poprawnie osadzona w semantycznych obszarach.

```tsx
<header className="app-header">
  <a href="#main-content" className="skip-link">
    Przejdź do treści głównej
  </a>

  <Nav />
</header>

<main id="main-content" tabIndex={-1}>
  <Outlet />
</main>
```

---

## 3. The skip-link target should exist and be focusable

**Błąd:** Skip link wskazywał na `#main-content`, ale w wyrenderowanym DOM nie było poprawnego elementu docelowego albo layout z tym elementem nie był używany w routingu.

**Zrzut błędu:**

![axe GUI — skip link target](./public/axeGui3.png)

**Naprawa:** Layout został podpięty jako główny wrapper w konfiguracji routingu. Dzięki temu każda podstrona renderuje się wewnątrz:

```tsx
<main id="main-content" tabIndex={-1}>
  <Outlet />
</main>
```

Dodatkowo usunięto zduplikowany layout z ekranu dashboardu, który powodował podwójne renderowanie nawigacji.

```tsx
export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        Component: Lab4Dashboard,
      },
      {
        path: "todos",
        Component: Lab4Dashboard,
      },
      {
        path: "filter",
        Component: FilterSort,
      },
      {
        path: "settings",
        Component: SettingsHiFi,
      },
    ],
  },
]);
```

---

## 4. Wtyczka HeadingsMap — niespójna struktura nagłówków

**Błąd:** Wtyczka HeadingsMap potwierdziła niespójną strukturę nagłówków: `1 -> 2 -> 5`. Oznaczało to, że po nagłówku drugiego poziomu następował od razu nagłówek piątego poziomu.

**Zrzut błędu:**

![HeadingsMap — heading problem](./public/HeadingProblem.png)

```tsx
// Przed
<h5>{totalTasks}</h5>
<h5>{completedTasks}</h5>
<h5>{pendingTasks}</h5>

// Po
<h3>{totalTasks}</h3>
<h3>{completedTasks}</3>
<h3>{pendingTasks}</h3>
```

---

## Podsumowanie

Po analizie axe DevTools GUI naprawiono trzy główne problemy dostępności:

- poprawiono strukturę nagłówków,
- dodano semantyczne landmarki `header` i `main`,
- poprawiono skip link oraz jego focusowalny target.

Po zmianach aplikacja posiada czytelniejszą strukturę dokumentu, poprawny mechanizm pomijania nawigacji oraz lepsze wsparcie dla użytkowników korzystających z klawiatury i czytników ekranu.
