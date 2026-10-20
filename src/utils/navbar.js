import { useEffect, useState } from "react";

export const useNavColor = () => {
  // Сначала пустые значения, заполним их в useEffect
  const [navColor, setNavColor] = useState("");
  const [textColor, setTextColor] = useState("");

  useEffect(() => {
    const root = document.documentElement;
    const g = (name) => getComputedStyle(root).getPropertyValue(name).trim();

    // Читаем переменные один раз при монтировании
    const lightBg = g("--bg-color");
    const lightText = g("--text-color");
    const darkBg = g("--bg-color-dark");
    const darkText = g("--text-color-dark");

    // Сразу ставим светлый режим как дефолт (чтобы не было прозрачного навбара)
    setNavColor(lightBg);
    setTextColor(lightText);

    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;

      requestAnimationFrame(() => {
        const darkBlocks = document.querySelectorAll(".section--dark");
        let isCurrentlyOnDark = false;

        darkBlocks.forEach((block) => {
          const rect = block.getBoundingClientRect();

          // Логика: верх блока ниже низа навбара И низ блока выше начала экрана
          if (rect.top <= 60 && rect.bottom >= 60) {
            isCurrentlyOnDark = true;
          }
        });

        if (isCurrentlyOnDark) {
          setNavColor(darkBg);
          setTextColor(darkText);
        } else {
          setNavColor(lightBg);
          setTextColor(lightText);
        }

        ticking = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { navColor, textColor };
};
