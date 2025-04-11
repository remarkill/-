const { useState, useEffect } = React;
const { 
  ChevronLeft, 
  Share2, 
  Utensils, 
  Soup, 
  Cake, 
  Fish, 
  Drumstick,
  Settings, 
  PenLine, 
  Plus, 
  Trash2, 
  Heart,
  Clock,
  History,
  Globe
} = lucide;

const FoodLotteryApp = () => {
  // Colors
  const colors = {
    pink: '#fff6f6',
    lavender: '#e8e6f0',
    green: '#e5f3e2',
    teal: '#daf0f0',
    purple: '#866e7b'
  };

  // States
  const [language, setLanguage] = useState('cn');
  const [foods, setFoods] = useState([
    { 
      id: 1, 
      name: { cn: '麻辣火锅', en: 'Spicy Hot Pot', jp: '麻辣火鍋' }, 
      desc: { cn: '暖暖的火锅', en: 'Warm and comforting hot pot', jp: '温かい火鍋' }, 
      calories: 650, 
      color: colors.teal, 
      icon: 'Soup' 
    },
    { 
      id: 2, 
      name: { cn: '红烧肉', en: 'Braised Pork', jp: '豚の角煮' }, 
      desc: { cn: '香甜软糯', en: 'Sweet and tender', jp: '甘くて柔らかい' }, 
      calories: 450, 
      color: colors.green, 
      icon: 'Drumstick' 
    },
    { 
      id: 3, 
      name: { cn: '小笼包', en: 'Soup Dumplings', jp: '小籠包' }, 
      desc: { cn: '每一个都充满爱意', en: 'Each one filled with love', jp: '愛情がこもった一つ一つ' }, 
      calories: 320, 
      color: colors.lavender, 
      icon: 'Cake' 
    },
    { 
      id: 4, 
      name: { cn: '水煮鱼', en: 'Boiled Fish', jp: '水煮魚' }, 
      desc: { cn: '酸辣爽口', en: 'Sour, spicy and refreshing', jp: '酸っぱくて辛くて爽やか' }, 
      calories: 380, 
      color: colors.teal, 
      icon: 'Fish' 
    }
  ]);
  
 const [selectedFood, setSelectedFood] = useState(null);
  const [spinning, setSpinning] = useState(false);
  const [view, setView] = useState('home');
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({ name: '', desc: '', calories: '', icon: 'cake' });
  const [history, setHistory] = useState([]);
  const [showIconDropdown, setShowIconDropdown] = useState(false);
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);

  // 从本地存储加载数据
  useEffect(() => {
    const savedFoods = localStorage.getItem('foods');
    if (savedFoods) {
      setFoods(JSON.parse(savedFoods));
    }
    
    const savedHistory = localStorage.getItem('history');
    if (savedHistory) {
      setHistory(JSON.parse(savedHistory));
    }
    
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);
  
  // 保存数据到本地存储
  useEffect(() => {
    localStorage.setItem('foods', JSON.stringify(foods));
  }, [foods]);
  
  useEffect(() => {
    localStorage.setItem('history', JSON.stringify(history));
  }, [history]);
  
  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  // Sweet messages with translations
  const messages = {
    cn: [
      "乐公主，希望这顿美食能让你的一天更加美好 ♡",
      "乐公主，今天和你一起吃这个，感觉世界都变得更美好了",
      "和我的乐公主分享美食的每一刻都是我的幸福时光",
      "为我最爱的乐公主准备的美食选择，希望你喜欢",
      "美食虽好，但都比不上乐公主的笑容甜美"
    ],
    en: [
      "Princess Le, I hope this meal makes your day more wonderful ♡",
      "Princess Le, eating this with you today makes the world more beautiful",
      "Every moment sharing food with my Princess Le is my happiness",
      "A food choice prepared for my beloved Princess Le, hope you like it",
      "Food is good, but nothing compares to Princess Le's sweet smile"
    ],
    jp: [
      "楽プリンセス、この食事があなたの一日をより素晴らしいものにしますように ♡",
      "楽プリンセス、今日あなたとこれを食べると、世界がより美しくなります",
      "私の楽プリンセスと食事を共有する一瞬一瞬が私の幸せな時間です",
      "最愛の楽プリンセスのために用意した食事の選択、気に入ってくれると嬉しいです",
      "食事は素晴らしいですが、楽プリンセスの甘い笑顔には及びません"
    ]
  };
