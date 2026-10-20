#1A1A1A
#FFFFFF
#1a1a1abd

<!-- код для меню которая подтсравивается под фон -->
<!-- всё что нужно менять это

цвет фона меню:                        const [navColor, setNavColor] = useState('#FFFFFF'); 
------------------------------------------------------------------------------------------
цвет текста меню:                      const [textColor, setTextColor] = useState('#1A1A1A');
------------------------------------------------------------------------------------------
массив idк кому нужно применить стили: const darkIds = ['dark_1', 'dark_2']; 
  (здесь нужно зайти в комонент и вставить id у верхнего div
      например: <div className={classes.section} id="dark_1"> 
  )
------------------------------------------------------------------------------------------
если хочется через :root стили, то надо сделать им доступ вот так:
  // Получаем root css стили
    const rootStyles = getComputedStyle(document.documentElement);
  
  // и сделать лучше 4 варианта чтобы не думать с инверсией
    const lightBg = rootStyles.getPropertyValue('--bg-color').trim();  // #FFFFFF
    const lightText = rootStyles.getPropertyValue('--text-color').trim(); // #1A1A1A
    const darkBg = rootStyles.getPropertyValue('--bg-color-dark').trim();    // #1A1A1A
    const darkText = rootStyles.getPropertyValue('--text-color-dark').trim(); // #FFFFFF

  // сделать замену в 5 пункте мол если выбрана темная то темную, иначе подставить значения под белую тему
    if (isCurrentlyOnDark) {
      setNavColor(darkBg);
      setTextColor(darkText);
    } else {
      setNavColor(lightBg);
      setTextColor(lightText);
    }
 -->

// Изначальное состояние: белый фон, темный текст
  const [navColor, setNavColor] = useState('#FFFFFF'); 
  const [textColor, setTextColor] = useState('#1A1A1A');

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          // 1. Собираем все ID темных блоков в массив
          const darkIds = ['dark_1', 'dark_2']; 
          
          // 2. Сразу ищем их в DOM
          const darkBlocks = darkIds.map(id => document.getElementById(id));

          // 3. Флаг по умолчанию
          let isCurrentlyOnDark = false;

          // 4. Проходим циклом по всем найденным блокам
          darkBlocks.forEach(block => {
            // Проверяем: существует ли блок И коснулся ли он навбара
            if (block && block.getBoundingClientRect().top < 60) {
              isCurrentlyOnDark = true;
            }
          });

          // 5. Ставим стили (здесь логика остается прежней)
          if (isCurrentlyOnDark) {
            setNavColor('#1A1A1A');
            setTextColor('#FFFFFF');
          } else {
            setNavColor('#FFFFFF');
            setTextColor('#1A1A1A');
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


<!-- --------------------------------------- -->
<!-- метод по созданию из #fff222 в hsla с твоим значением  % -->

  const procent = 0.08;
  // Функция перевода (вставь её перед компонентом)
  const hexToHsl = (hex) => {
    let r = 0, g = 0, b = 0;
    if (hex.length === 4) {
      r = parseInt(hex[1] + hex[1], 16);
      g = parseInt(hex[2] + hex[2], 16);
      b = parseInt(hex[3] + hex[3], 16);
    } else if (hex.length === 7) {
      r = parseInt(hex.slice(1, 3), 16);
      g = parseInt(hex.slice(3, 5), 16);
      b = parseInt(hex.slice(5, 7), 16);
    }
    r /= 255; g /= 255; b /= 255;
    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;

    if (max === min) {
      h = s = 0; // achromatic
    } else {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
        case g: h = (b - r) / d + 2; break;
        case b: h = (r - g) / d + 4; break;
      }
      h /= 6;
    }

    const hslH = Math.round(h * 360);
    const hslS = Math.round(s * 100);
    const hslL = Math.round(l * 100);
    
    return [hslH, hslS, hslL];
  };

  const [h, s, l] = hexToHsl(textColor);
  
  // Собираем строку для границы: hsla(0, 0%, 10%, 0.08)
  const borderColor = `hsla(${h}, ${s}%, ${l}%, ${procent})`;