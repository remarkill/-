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
// UI text translations
  const uiText = {
    cn: {
      history: "历史",
      settings: "设置",
      whatToEat: "今天吃什么？",
      startLottery: "开始抽奖",
      pickFood: "为你挑选今天的美食 ♡",
      drawing: "正在抽取...",
      findingFood: "为你寻找最适合今天的美食...",
      back: "返回",
      todayFood: "今日美食",
      drawAgain: "重新抽奖",
      shareResult: "分享结果",
      noHistory: "暂无历史记录",
      foodManagement: "美食管理",
      addNewFood: "添加新美食",
      editFood: "编辑美食",
      addFood: "添加美食",
      selectIcon: "选择图标",
      soup: "汤类",
      meat: "肉类",
      fish: "鱼类",
      dessert: "甜点/其他",
      foodName: "美食名称",
      description: "描述",
      calories: "热量 (千卡)",
      cancel: "取消",
      save: "保存",
      alertKeepOne: "至少保留一种食物",
      alertFillNameDesc: "请填写名称和描述",
      alertValidCalories: "请填写有效的热量值",
      shareAlert: "今天吃",
      kcal: "千卡",
      language: "语言",
      chinese: "中文",
      english: "英文",
      japanese: "日文",
      deleteHistory: "删除记录"
    },
    en: {
      history: "History",
      settings: "Settings",
      whatToEat: "What to eat today?",
      startLottery: "Start Lottery",
      pickFood: "Pick today's food for you ♡",
      drawing: "Drawing...",
      findingFood: "Finding the perfect food for today...",
      back: "Back",
      todayFood: "Today's Food",
      drawAgain: "Draw Again",
      shareResult: "Share Result",
      noHistory: "No history yet",
      foodManagement: "Food Management",
      addNewFood: "Add New Food",
      editFood: "Edit Food",
      addFood: "Add Food",
      selectIcon: "Select Icon",
      soup: "Soup",
      meat: "Meat",
      fish: "Fish",
      dessert: "Dessert/Other",
      foodName: "Food Name",
      description: "Description",
      calories: "Calories (kcal)",
      cancel: "Cancel",
      save: "Save",
      alertKeepOne: "Please keep at least one food item",
      alertFillNameDesc: "Please enter name and description",
      alertValidCalories: "Please enter a valid calorie value",
      shareAlert: "Let's eat",
      kcal: "kcal",
      language: "Language",
      chinese: "Chinese",
      english: "English",
      japanese: "Japanese",
      deleteHistory: "Delete Record"
    },
    jp: {
      history: "履歴",
      settings: "設定",
      whatToEat: "今日は何を食べる？",
      startLottery: "抽選開始",
      pickFood: "今日のお食事を選びます ♡",
      drawing: "抽選中...",
      findingFood: "今日にぴったりの食事を探しています...",
      back: "戻る",
      todayFood: "今日の食事",
      drawAgain: "もう一度抽選",
      shareResult: "結果をシェア",
      noHistory: "履歴がありません",
      foodManagement: "食事管理",
      addNewFood: "新しい食事を追加",
      editFood: "食事を編集",
      addFood: "食事を追加",
      selectIcon: "アイコン選択",
      soup: "スープ",
      meat: "肉類",
      fish: "魚類",
      dessert: "デザート/その他",
      foodName: "食事名",
      description: "説明",
      calories: "カロリー (kcal)",
      cancel: "キャンセル",
      save: "保存",
      alertKeepOne: "少なくとも1つの食事を保持してください",
      alertFillNameDesc: "名前と説明を入力してください",
      alertValidCalories: "有効なカロリー値を入力してください",
      shareAlert: "今日は",
      kcal: "kcal",
      language: "言語",
      chinese: "中国語",
      english: "英語",
      japanese: "日本語",
      deleteHistory: "記録を削除"
    }
  };
