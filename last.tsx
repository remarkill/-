import { useState } from 'react';
import { 
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
} from 'lucide-react';

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
      icon: <Soup /> 
    },
    { 
      id: 2, 
      name: { cn: '红烧肉', en: 'Braised Pork', jp: '豚の角煮' }, 
      desc: { cn: '香甜软糯', en: 'Sweet and tender', jp: '甘くて柔らかい' }, 
      calories: 450, 
      color: colors.green, 
      icon: <Drumstick /> 
    },
    { 
      id: 3, 
      name: { cn: '小笼包', en: 'Soup Dumplings', jp: '小籠包' }, 
      desc: { cn: '每一个都充满爱意', en: 'Each one filled with love', jp: '愛情がこもった一つ一つ' }, 
      calories: 320, 
      color: colors.lavender, 
      icon: <Cake /> 
    },
    { 
      id: 4, 
      name: { cn: '水煮鱼', en: 'Boiled Fish', jp: '水煮魚' }, 
      desc: { cn: '酸辣爽口', en: 'Sour, spicy and refreshing', jp: '酸っぱくて辛くて爽やか' }, 
      calories: 380, 
      color: colors.teal, 
      icon: <Fish /> 
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

  // Toggle language
  const toggleLanguage = () => {
    if (language === 'cn') {
      setLanguage('en');
    } else if (language === 'en') {
      setLanguage('jp');
    } else {
      setLanguage('cn');
    }
  };
  
  // Language display
  const getLanguageDisplay = () => {
    return language === 'cn' ? '中' : language === 'en' ? 'EN' : '日';
  };
  
  // Delete single history entry
  const deleteHistoryItem = (id) => {
    setHistory(history.filter(item => item.id !== id));
  };

  // Start lottery
  const startLottery = () => {
    if (foods.length === 0) return;
    
    setSpinning(true);
    setView('spinning');
    
    let count = 0;
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * foods.length);
      setSelectedFood(foods[randomIndex]);
      count++;
      
      if (count >= 10) {
        clearInterval(interval);
        const winner = foods[Math.floor(Math.random() * foods.length)];
        setSelectedFood(winner);
        
        // Save history
        const now = new Date();
        const date = `${now.getFullYear()}-${(now.getMonth() + 1).toString().padStart(2, '0')}-${now.getDate().toString().padStart(2, '0')} ${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
        const messageArray = messages[language];
        const message = messageArray[Math.floor(Math.random() * messageArray.length)];
        
        setHistory([
          { id: Date.now(), food: winner, date, message, language },
          ...history
        ]);
        
        setTimeout(() => {
          setSpinning(false);
          setView('result');
        }, 300);
      }
    }, 150);
  };

  // UI rendering based on current view
  if (view === 'home') {
    return (
      <div className="min-h-screen p-6" style={{ backgroundColor: colors.pink }}>
        <div className="flex justify-between mb-4">
          <button
            onClick={() => setView('history')}
            className="p-2 rounded-full flex items-center"
          >
            <History size={20} style={{ color: history.length === 0 ? colors.purple : colors.purple }} />
            <span className="ml-1 text-sm font-bold" style={{ color: colors.purple }}>
              {uiText[language].history}
            </span>
          </button>
          
          <button
            onClick={() => setView('settings')}
            className="p-2 rounded-full"
          >
            <Settings size={20} style={{ color: colors.purple }} />
          </button>
        </div>
        
        <div className="flex flex-col items-center">
          <h1 className="text-4xl font-bold mb-10 text-center" style={{ color: colors.purple }}>
            {uiText[language].whatToEat}
          </h1>
          
          <div className="relative w-64 h-64 mb-10">
            <div className="absolute w-56 h-56 rounded-full border-4 border-dashed" style={{ 
              borderColor: colors.lavender,
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)'
            }}></div>
            
            <div className="absolute w-48 h-48 rounded-full" style={{ 
              background: `linear-gradient(45deg, ${colors.lavender}, ${colors.teal})`,
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <div className="w-40 h-40 rounded-full bg-white flex items-center justify-center">
                <div className="flex flex-col items-center">
                  <Utensils size={40} style={{ color: colors.purple }} />
                  <Heart size={20} style={{ color: colors.lavender, marginTop: 8 }} />
                </div>
              </div>
            </div>
          </div>
          
          <button
            onClick={startLottery}
            className="py-3 px-10 rounded-full text-lg font-bold text-white mb-6"
            style={{ backgroundColor: colors.purple }}
            disabled={foods.length === 0}
          >
            {uiText[language].startLottery}
          </button>
          
          <p style={{ color: colors.purple }}>{uiText[language].pickFood}</p>
        </div>
      </div>
    );
  }
  
  if (view === 'spinning') {
    return (
      <div className="min-h-screen p-6 flex flex-col items-center justify-center" style={{ backgroundColor: colors.pink }}>
        <h2 className="text-3xl font-bold mb-10 text-center" style={{ color: colors.purple }}>
          {uiText[language].drawing}
        </h2>
        
        <div className="w-64 h-64 mb-8">
          {selectedFood && (
            <div 
              className="w-full h-full rounded-3xl flex flex-col items-center justify-center p-6"
              style={{ backgroundColor: selectedFood.color }}
            >
              <div className="mb-4 p-4 bg-white rounded-full">
                {selectedFood.icon}
              </div>
              <span className="text-2xl font-bold text-center" style={{ color: colors.purple }}>
                {selectedFood.name[language]}
              </span>
            </div>
          )}
        </div>
        
        <p className="animate-pulse text-center" style={{ color: colors.purple }}>
          {uiText[language].findingFood}
        </p>
      </div>
    );
  }
  
  if (view === 'result' && selectedFood) {
    return (
      <div className="min-h-screen p-6 flex flex-col items-center justify-center" style={{ backgroundColor: colors.pink }}>
        <div className="max-w-md w-full bg-white rounded-2xl overflow-hidden">
          <div 
            className="p-4 flex items-center justify-between"
            style={{ backgroundColor: selectedFood.color }}
          >
            <button 
              onClick={() => setView('home')}
              className="flex items-center"
            >
              <ChevronLeft size={20} style={{ color: colors.purple }} />
              <span className="font-bold" style={{ color: colors.purple }}>{uiText[language].back}</span>
            </button>
            <h2 className="text-xl font-bold" style={{ color: colors.purple }}>{uiText[language].todayFood}</h2>
            <div className="w-10"></div>
          </div>
          
          <div className="p-6">
            <div className="flex flex-col items-center mb-6">
              <div 
                className="w-28 h-28 rounded-full mb-4 flex items-center justify-center"
                style={{ backgroundColor: selectedFood.color }}
              >
                {React.cloneElement(selectedFood.icon, { size: 48 })}
              </div>
              
              <div className="px-4 py-1 rounded-full text-sm font-bold mb-4" style={{ 
                backgroundColor: selectedFood.color,
                color: colors.purple
              }}>
                {selectedFood.calories} {uiText[language].kcal}
              </div>
              
              <h1 className="text-3xl font-bold mb-4 text-center" style={{ color: colors.purple }}>
                {selectedFood.name[language]}
              </h1>
              
              <p className="text-center mb-4" style={{ color: colors.purple }}>
                {selectedFood.desc[language]}
              </p>
              
              <p className="text-center text-sm italic" style={{ color: colors.purple }}>
                {messages[language][Math.floor(Math.random() * messages[language].length)]}
              </p>
            </div>
            
            <div className="flex justify-between gap-4">
              <button
                onClick={() => setView('home')}
                className="flex-1 py-3 rounded-full font-bold"
                style={{ backgroundColor: colors.green, color: colors.purple }}
              >
                {uiText[language].drawAgain}
              </button>
              <button
                onClick={() => alert(`${uiText[language].shareAlert} ${selectedFood.name[language]}!`)}
                className="flex-1 py-3 rounded-full font-bold flex items-center justify-center"
                style={{ backgroundColor: selectedFood.color, color: colors.purple }}
              >
                <Share2 size={18} className="mr-2" />
                {uiText[language].shareResult}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  // History view
  if (view === 'history') {
    return (
      <div className="min-h-screen" style={{ backgroundColor: colors.pink }}>
        <div 
          className="p-4 flex items-center justify-between"
          style={{ borderBottom: `1px solid ${colors.lavender}` }}
        >
          <button 
            onClick={() => setView('home')}
            className="flex items-center"
          >
            <ChevronLeft size={20} style={{ color: colors.purple }} />
            <span className="font-bold" style={{ color: colors.purple }}>{uiText[language].back}</span>
          </button>
          <h2 className="text-xl font-bold" style={{ color: colors.purple }}>{uiText[language].history}</h2>
          <div className="w-10"></div>
        </div>
        
        <div className="p-4">
          {history.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-64">
              <Clock size={48} style={{ color: colors.purple, opacity: 0.7 }} />
              <p className="mt-4 text-center font-bold" style={{ color: colors.purple }}>
                {uiText[language].noHistory}
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {history.map(item => (
                <div 
                  key={item.id} 
                  className="bg-white rounded-2xl p-4"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <div 
                        className="w-12 h-12 rounded-full mr-3 flex items-center justify-center"
                        style={{ backgroundColor: item.food.color }}
                      >
                        {item.food.icon && React.cloneElement(item.food.icon, { size: 20 })}
                      </div>
                      <div>
                        <h3 className="font-bold" style={{ color: colors.purple }}>
                          {item.food.name[language]}
                        </h3>
                        <p className="text-xs" style={{ color: colors.purple }}>
                          {item.date}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="text-sm font-bold px-3 py-1 rounded-full mr-2" 
                        style={{ backgroundColor: item.food.color, color: colors.purple }}>
                        {item.food.calories} {uiText[language].kcal}
                      </div>
                      <button 
                        onClick={() => deleteHistoryItem(item.id)}
                        className="p-2 rounded-full bg-pink-50"
                      >
                        <Trash2 size={16} style={{ color: colors.purple }} />
                      </button>
                    </div>
                  </div>
                  <p className="text-sm mt-2" style={{ color: colors.purple }}>
                    {item.message}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }
  
  // Settings view
  if (view === 'settings') {
    return (
      <div className="min-h-screen" style={{ backgroundColor: colors.pink }}>
        <div 
          className="p-4 flex items-center justify-between"
          style={{ borderBottom: `1px solid ${colors.lavender}` }}
        >
          <button 
            onClick={() => setView('home')}
            className="flex items-center"
          >
            <ChevronLeft size={20} style={{ color: colors.purple }} />
            <span className="font-bold" style={{ color: colors.purple }}>{uiText[language].back}</span>
          </button>
          <h2 className="text-xl font-bold" style={{ color: colors.purple }}>{uiText[language].foodManagement}</h2>
          <button
            onClick={toggleLanguage}
            className="flex items-center justify-center bg-white rounded-full shadow-sm"
            style={{ width: '32px', height: '32px' }}
          >
            <Globe size={16} style={{ color: colors.purple }} />
            <span className="text-xs font-bold absolute" style={{ color: colors.purple, marginTop: '14px' }}>
              {getLanguageDisplay()}
            </span>
          </button>
        </div>
        
        <div className="p-4">
          {/* Language Selection */}
          <div className="bg-white rounded-2xl p-4 mb-6">
            <div className="flex items-center justify-between">
              <h3 className="font-bold" style={{ color: colors.purple }}>{uiText[language].language}</h3>
              
              <div className="relative" style={{ width: '120px' }}>
                <button
                  onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
                  className="p-2 bg-white rounded-lg border flex items-center justify-between"
                  style={{ borderColor: colors.lavender, width: '100%' }}
                >
                  <span className="text-sm font-bold" style={{ color: colors.purple }}>
                    {language === 'cn' ? '中文' : language === 'en' ? 'English' : '日本語'}
                  </span>
                  <ChevronLeft size={14} style={{ 
                    color: colors.purple, 
                    transform: showLanguageDropdown ? 'rotate(-90deg)' : 'rotate(90deg)',
                    transition: 'transform 0.3s'
                  }} />
                </button>
                
                {showLanguageDropdown && (
                  <div className="absolute right-0 mt-1 p-2 bg-white rounded-lg shadow-lg border z-10" 
                       style={{ borderColor: colors.lavender, width: '100%' }}>
                    <div className="space-y-2">
                      <button
                        onClick={() => {
                          setLanguage('cn');
                          setShowLanguageDropdown(false);
                        }}
                        className="w-full p-2 rounded-lg flex items-center justify-between hover:bg-gray-100"
                      >
                        <span className="text-sm" style={{ color: colors.purple }}>中文</span>
                        {language === 'cn' && (
                          <div className="w-4 h-4 rounded-full" style={{ backgroundColor: colors.lavender }}></div>
                        )}
                      </button>
                      
                      <button
                        onClick={() => {
                          setLanguage('en');
                          setShowLanguageDropdown(false);
                        }}
                        className="w-full p-2 rounded-lg flex items-center justify-between hover:bg-gray-100"
                      >
                        <span className="text-sm" style={{ color: colors.purple }}>English</span>
                        {language === 'en' && (
                          <div className="w-4 h-4 rounded-full" style={{ backgroundColor: colors.lavender }}></div>
                        )}
                      </button>
                      
                      <button
                        onClick={() => {
                          setLanguage('jp');
                          setShowLanguageDropdown(false);
                        }}
                        className="w-full p-2 rounded-lg flex items-center justify-between hover:bg-gray-100"
                      >
                        <span className="text-sm" style={{ color: colors.purple }}>日本語</span>
                        {language === 'jp' && (
                          <div className="w-4 h-4 rounded-full" style={{ backgroundColor: colors.lavender }}></div>
                        )}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          <button
            onClick={() => {
              setEditing({
                id: null,
                name: { cn: '', en: '', jp: '' },
                desc: { cn: '', en: '', jp: '' },
                calories: '',
                color: colors.lavender,
                icon: <Cake />
              });
              setForm({ name: '', desc: '', calories: '', icon: 'cake' });
              setView('edit');
            }}
            className="w-full py-3 rounded-2xl font-bold flex items-center justify-center mb-6"
            style={{ backgroundColor: colors.lavender, color: colors.purple }}
          >
            <Plus size={18} className="mr-2" />
            {uiText[language].addNewFood}
          </button>
          
          <div className="space-y-4">
            {foods.map(food => (
              <div 
                key={food.id} 
                className="bg-white rounded-2xl p-4 flex items-center justify-between"
              >
                <div className="flex items-center flex-1">
                  <div 
                    className="w-12 h-12 rounded-full mr-3 flex items-center justify-center"
                    style={{ backgroundColor: food.color }}
                  >
                    {food.icon}
                  </div>
                  <div className="mr-2 flex-1">
                    <h3 className="font-bold" style={{ color: colors.purple }}>
                      {food.name[language]}
                    </h3>
                    <p className="text-xs" style={{ color: colors.purple }}>
                      {food.desc[language]}
                    </p>
                  </div>
                  <div className="text-sm font-bold px-3 py-1 rounded-full" 
                    style={{ backgroundColor: food.color, color: colors.purple }}>
                    {food.calories} {uiText[language].kcal}
                  </div>
                </div>
                
                <div className="flex ml-4">
                  <button
                    onClick={() => {
                      // Edit food
                      setEditing(food);
                      
                      // Determine current icon type
                      let iconType = 'cake';
                      if (food.icon.type === Soup) iconType = 'soup';
                      else if (food.icon.type === Drumstick) iconType = 'drumstick';
                      else if (food.icon.type === Fish) iconType = 'fish';
                      else if (food.icon.type === Cake) iconType = 'cake';
                      
                      setForm({
                        name: food.name[language],
                        desc: food.desc[language],
                        calories: food.calories.toString(),
                        icon: iconType
                      });
                      setView('edit');
                    }}
                    className="p-2 rounded-full mr-1"
                  >
                    <PenLine size={16} style={{ color: colors.purple }} />
                  </button>
                  <button
                    onClick={() => {
                      // Delete food
                      if (foods.length <= 1) {
                        alert(uiText[language].alertKeepOne);
                        return;
                      }
                      setFoods(foods.filter(f => f.id !== food.id));
                    }}
                    className="p-2 rounded-full"
                  >
                    <Trash2 size={16} style={{ color: colors.purple }} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  
  // Edit view
  if (view === 'edit') {
    return (
      <div className="min-h-screen" style={{ backgroundColor: colors.pink }}>
        <div 
          className="p-4 flex items-center justify-between"
          style={{ borderBottom: `1px solid ${colors.lavender}` }}
        >
          <button 
            onClick={() => setView('settings')}
            className="flex items-center"
          >
            <ChevronLeft size={20} style={{ color: colors.purple }} />
            <span className="font-bold" style={{ color: colors.purple }}>{uiText[language].back}</span>
          </button>
          <h2 className="text-xl font-bold" style={{ color: colors.purple }}>
            {editing && editing.id ? uiText[language].editFood : uiText[language].addFood}
          </h2>
          <button
            onClick={toggleLanguage}
            className="flex items-center justify-center bg-white rounded-full shadow-sm"
            style={{ width: '32px', height: '32px' }}
          >
            <Globe size={16} style={{ color: colors.purple }} />
            <span className="text-xs font-bold absolute" style={{ color: colors.purple, marginTop: '14px' }}>
              {getLanguageDisplay()}
            </span>
          </button>
        </div>
        
        <div className="p-6">
          <div className="flex justify-center mb-6">
            <div 
              className="w-20 h-20 rounded-full flex items-center justify-center"
              style={{ backgroundColor: editing ? editing.color : colors.lavender }}
            >
              {(() => {
                switch(form.icon) {
                  case 'soup': return <Soup size={32} style={{ color: colors.purple }} />;
                  case 'drumstick': return <Drumstick size={32} style={{ color: colors.purple }} />;
                  case 'fish': return <Fish size={32} style={{ color: colors.purple }} />;
                  case 'cake': default: return <Cake size={32} style={{ color: colors.purple }} />;
                }
              })()}
            </div>
          </div>
          
          <div className="mb-6 relative">
            <label className="block text-sm font-medium mb-2" style={{ color: colors.purple }}>
              {uiText[language].selectIcon}
            </label>
            <button
              onClick={() => setShowIconDropdown(!showIconDropdown)}
              className="w-full p-3 bg-white rounded-lg border flex items-center justify-between"
              style={{ borderColor: colors.lavender }}
            >
              <div className="flex items-center">
                {form.icon === 'soup' && <Soup size={20} style={{ color: colors.purple }} />}
                {form.icon === 'drumstick' && <Drumstick size={20} style={{ color: colors.purple }} />}
                {form.icon === 'fish' && <Fish size={20} style={{ color: colors.purple }} />}
                {form.icon === 'cake' && <Cake size={20} style={{ color: colors.purple }} />}
                <span className="ml-2 text-sm" style={{ color: colors.purple }}>
                  {form.icon === 'soup' && uiText[language].soup}
                  {form.icon === 'drumstick' && uiText[language].meat}
                  {form.icon === 'fish' && uiText[language].fish}
                  {form.icon === 'cake' && uiText[language].dessert}
                </span>
              </div>
              <ChevronLeft size={16} style={{ 
                color: colors.purple, 
                transform: showIconDropdown ? 'rotate(-90deg)' : 'rotate(90deg)',
                transition: 'transform 0.3s'
              }} />
            </button>
            
            {showIconDropdown && (
              <div className="absolute w-full mt-1 p-2 bg-white rounded-lg shadow-lg border z-10" style={{ borderColor: colors.lavender }}>
                <div className="space-y-2">
                  <button
                    onClick={() => {
                      setForm({...form, icon: 'soup'});
                      setShowIconDropdown(false);
                    }}
                    className="w-full p-2 rounded-lg flex items-center hover:bg-gray-100"
                  >
                    <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: colors.teal }}>
                      <Soup size={16} style={{ color: colors.purple }} />
                    </div>
                    <span className="ml-2 text-sm" style={{ color: colors.purple }}>{uiText[language].soup}</span>
                  </button>
                  
                  <button
                    onClick={() => {
                      setForm({...form, icon: 'drumstick'});
                      setShowIconDropdown(false);
                    }}
                    className="w-full p-2 rounded-lg flex items-center hover:bg-gray-100"
                  >
                    <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: colors.green }}>
                      <Drumstick size={16} style={{ color: colors.purple }} />
                    </div>
                    <span className="ml-2 text-sm" style={{ color: colors.purple }}>{uiText[language].meat}</span>
                  </button>
                  
                  <button
                    onClick={() => {
                      setForm({...form, icon: 'fish'});
                      setShowIconDropdown(false);
                    }}
                    className="w-full p-2 rounded-lg flex items-center hover:bg-gray-100"
                  >
                    <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: colors.teal }}>
                      <Fish size={16} style={{ color: colors.purple }} />
                    </div>
                    <span className="ml-2 text-sm" style={{ color: colors.purple }}>{uiText[language].fish}</span>
                  </button>
                  
                  <button
                    onClick={() => {
                      setForm({...form, icon: 'cake'});
                      setShowIconDropdown(false);
                    }}
                    className="w-full p-2 rounded-lg flex items-center hover:bg-gray-100"
                  >
                    <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: colors.lavender }}>
                      <Cake size={16} style={{ color: colors.purple }} />
                    </div>
                    <span className="ml-2 text-sm" style={{ color: colors.purple }}>{uiText[language].dessert}</span>
                  </button>
                </div>
              </div>
            )}
          </div>
          
          <div className="space-y-4 mb-6">
            <div>
              <label className="block text-sm font-medium mb-1" style={{ color: colors.purple }}>
                {uiText[language].foodName}
              </label>
              <input 
                type="text"
                value={form.name}
                onChange={(e) => setForm({...form, name: e.target.value})}
                className="w-full p-2 rounded-lg border"
                placeholder="e.g., Hot Pot"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1" style={{ color: colors.purple }}>
                {uiText[language].description}
              </label>
              <input 
                type="text"
                value={form.desc}
                onChange={(e) => setForm({...form, desc: e.target.value})}
                className="w-full p-2 rounded-lg border"
                placeholder="e.g., Warm hot pot, just like my feelings for you"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1" style={{ color: colors.purple }}>
                {uiText[language].calories}
              </label>
              <input 
                type="number"
                value={form.calories}
                onChange={(e) => setForm({...form, calories: e.target.value})}
                className="w-full p-2 rounded-lg border"
                placeholder="e.g., 450"
              />
            </div>
          </div>
          
          <div className="flex gap-3">
            <button
              onClick={() => setView('settings')}
              className="flex-1 py-2 rounded-full font-bold"
              style={{ backgroundColor: colors.pink, color: colors.purple }}
            >
              {uiText[language].cancel}
            </button>
            <button
              onClick={() => {
                // Save food
                if (!form.name || !form.desc) {
                  alert(uiText[language].alertFillNameDesc);
                  return;
                }
                
                if (!form.calories || isNaN(parseInt(form.calories))) {
                  alert(uiText[language].alertValidCalories);
                  return;
                }
                
                const calories = parseInt(form.calories);
                
                // Get selected icon
                let foodIcon;
                switch(form.icon) {
                  case 'soup':
                    foodIcon = <Soup />;
                    break;
                  case 'drumstick':
                    foodIcon = <Drumstick />;
                    break;
                  case 'fish':
                    foodIcon = <Fish />;
                    break;
                  case 'cake':
                  default:
                    foodIcon = <Cake />;
                    break;
                }
                
                if (editing && editing.id) {
                  // Update existing food - preserve other languages
                  const updatedName = { ...editing.name };
                  const updatedDesc = { ...editing.desc };
                  
                  // Only update the current language
                  updatedName[language] = form.name;
                  updatedDesc[language] = form.desc;
                  
                  setFoods(foods.map(f => 
                    f.id === editing.id 
                      ? { ...editing, name: updatedName, desc: updatedDesc, calories, icon: foodIcon }
                      : f
                  ));
                } else {
                  // Add new food - set all languages to the current input
                  const nameObj = {
                    cn: form.name,
                    en: form.name,
                    jp: form.name
                  };
                  
                  const descObj = {
                    cn: form.desc,
                    en: form.desc,
                    jp: form.desc
                  };
                  
                  setFoods([...foods, {
                    id: Date.now(),
                    name: nameObj,
                    desc: descObj,
                    calories,
                    color: colors.lavender,
                    icon: foodIcon
                  }]);
                }
                
                setEditing(null);
                setView('settings');
              }}
              className="flex-1 py-2 rounded-full font-bold"
              style={{ backgroundColor: colors.green, color: colors.purple }}
            >
              {uiText[language].save}
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen p-6 flex items-center justify-center" style={{ backgroundColor: colors.pink }}>
      <p style={{ color: colors.purple }}>Loading...</p>
    </div>
  );
};

export default FoodLotteryApp;