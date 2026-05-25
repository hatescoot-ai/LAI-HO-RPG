const images = {
    q1: { src: "images/q1_lai_he_doctor_1779345418357.png", source: "AI 生成：賴和與日治時期醫生形象" },
    q2: { src: "images/q2_japanese_police_1779345436585.png", source: "AI 生成：日治時期警察 (大人)" },
    q3: { src: "images/q3_baojia_system_1779345454558.png", source: "AI 生成：保甲制度下的台灣村民" },
    q4: { src: "images/q4_dual_oppression_1779345472862.png", source: "AI 生成：日治時期農民受警察壓迫" },
    q5: { src: "images/q5_sugarcane_farmers_1779345491629.png", source: "AI 生成：日治時期台灣蔗農勞作" },
    q6: { src: "images/q6_steelyard_1779345506765.png", source: "AI 生成：象徵公平的傳統稱仔" },
    q7: { src: "images/q7_qin_decan_1779345522924.png", source: "AI 生成：悲苦的台灣農民秦得參" },
    q8: { src: "images/q8_tenant_farmer_1779345537996.png", source: "AI 生成：疲憊的台灣佃農" },
    q9: { src: "images/q9_land_taken_1779345555626.png", source: "AI 生成：失去土地的農民" },
    q10: { src: "images/q10_wife_pawning_1779345574266.png", source: "AI 生成：典當金花的妻子" },
    q11: { src: "images/q11_buying_steelyard_1779345606559.png", source: "AI 生成：購買新稱仔與青菜" },
    q12: { src: "images/q12_vegetable_stall_1779345624273.png", source: "AI 生成：充滿微薄希望的菜攤生意" },
    q13: { src: "images/q13_police_market_1779345638295.png", source: "AI 生成：巡警在市場巡視" },
    q14: { src: "images/q14_asking_money_1779345656196.png", source: "AI 生成：向巡警討青菜錢" },
    q15: { src: "images/q15_inspecting_scale_1779345675035.png", source: "AI 生成：巡警挑剔稱仔不準" },
    q16: { src: "images/q16_official_steelyard_1779345693826.png", source: "AI 生成：度量衡專賣局的合法稱仔" },
    q17: { src: "images/q17_breaking_scale_1779345709687.png", source: "AI 生成：巡警蠻橫折斷稱仔" },
    q18: { src: "images/q18_dragged_away_1779373763312.png", source: "AI 生成：被警察帶回法辦的農民" },
    q19: { src: "images/q19_court_verdict_1779373781164.png", source: "AI 生成：法官判處不公的刑罰" },
    q20: { src: "images/q20_jail_cell_1779373796414.png", source: "AI 生成：在獄中堅拒認罪的秦得參" },
    q21: { src: "images/q21_new_years_jail_1779373809571.png", source: "AI 生成：除夕夜被關押的悲涼" },
    q22: { src: "images/q22_wife_borrowing_1779373824351.png", source: "AI 生成：四處奔波借錢的妻子" },
    q23: { src: "images/q23_despair_after_release_1779373856463.png", source: "AI 生成：出獄後感到無盡絕望" },
    q24: { src: "images/q24_leaving_house_1779373870887.png", source: "AI 生成：深夜離家的絕望背影" },
    q25: { src: "images/q25_murder_street_1779373887995.png", source: "AI 生成：夜巡警吏遇害的街頭悲劇" }
};

const questions = [
    { level: "第一關：日治時期的背景知識", question: "賴和被譽為「台灣新文學之父」，他的職業背景是？", options: ["警察", "醫生", "教師", "律師"], answer: 1, hint: "賴和懸壺濟世，常為窮苦人家免費治病。", img: images.q1 },
    { level: "第一關：日治時期的背景知識", question: "日治時期台灣人稱呼日本警察為「大人」，這反映了當時警察的何種地位？", options: ["親切如同長輩", "受過高等教育", "權力極大，猶如土皇帝", "大多由當地仕紳擔任"], answer: 2, hint: "警察掌握行政、司法等多種權力，對人民有絕對權威。", img: images.q2 },
    { level: "第一關：日治時期的背景知識", question: "日治時期台灣實行「保甲制度」，其主要目的是什麼？", options: ["推廣農業技術", "加強社會控制與連坐", "促進地方自治", "提升公共衛生"], answer: 1, hint: "十戶為一甲，十甲為一保，互相監視。", img: images.q3 },
    { level: "第一關：日治時期的背景知識", question: "賴和在《一桿「稱仔」》中，主要想控訴日本殖民統治的哪一個面向？", options: ["教育制度的不公", "經濟壓榨與法制雙重壓迫", "交通建設的落後", "醫療資源的分配不均"], answer: 1, hint: "小說中主角既受經濟貧困之苦，又受警察以法律之名迫害。", img: images.q4 },
    { level: "第一關：日治時期的背景知識", question: "當時許多台灣農民被迫成為「製糖會社」的蔗農，這被稱為？", options: ["工業化轉型", "農業升級", "第一憨，種甘蔗互會社磅", "自由貿易"], answer: 2, hint: "反映蔗農受到糖廠在秤重和價格上的剝削。", img: images.q5 },
    { level: "第一關：日治時期的背景知識", question: "小說標題《一桿「稱仔」》中的「稱仔」，在文學上象徵著什麼？", options: ["公平與正義", "農產品的重量", "做生意的技巧", "家庭的溫暖"], answer: 0, hint: "法庭的象徵也是天平，代表法律本應公平。", img: images.q6 },
    { level: "第二關：課文內容分析(上)－人物與背景", question: "主角的名字叫「秦得參」，這個名字的諧音暗示了他的命運？", options: ["勤得生", "真的慘", "情德深", "親得財"], answer: 1, hint: "台灣話諧音，直接點出人物的悲劇性。", img: images.q7 },
    { level: "第二關：課文內容分析(上)－人物與背景", question: "秦得參原本是做什麼工作的？", options: ["糖廠工人", "租地耕種的佃農", "市場賣菜的商人", "幫傭"], answer: 1, hint: "因為製糖會社的剝削，他後來才轉行。", img: images.q8 },
    { level: "第二關：課文內容分析(上)－人物與背景", question: "秦得參為什麼不再繼續種田了？", options: ["身體不好無法負荷", "土地被洪水淹沒", "受不了糖廠剝削且被地主收回土地", "想去城市賺大錢"], answer: 2, hint: "地主把土地轉租給會社，佃農失去生計。", img: images.q9 },
    { level: "第二關：課文內容分析(上)－人物與背景", question: "秦得參的妻子為了讓他能做點小生意，犧牲了什麼？", options: ["娘家給的土地", "陪嫁的金花", "多年的積蓄", "珍貴的衣服"], answer: 1, hint: "典當了首飾來換取資本。", img: images.q10 },
    { level: "第二關：課文內容分析(上)－人物與背景", question: "秦得參用妻子典當的錢，買了什麼生財工具？", options: ["一台推車", "一把鋒利的菜刀", "一桿稱仔和一些青菜", "一個店面"], answer: 2, hint: "這是小說標題的由來。", img: images.q11 },
    { level: "第二關：課文內容分析(上)－人物與背景", question: "秦得參剛開始賣菜時，生意狀況如何？", options: ["慘不忍睹", "生意不錯，讓他看到一絲希望", "被其他攤商排擠", "菜全爛了賣不出去"], answer: 1, hint: "剛開始他還覺得日子過得去，有過新年的氛圍。", img: images.q12 },
    { level: "第三關：課文內容分析(中)－巡警的索求與衝突", question: "巡警在市場巡視時，對秦得參有什麼舉動？", options: ["稱讚他的菜很漂亮", "向他索取保護費", "想白拿他的青菜", "幫他維持秩序"], answer: 2, hint: "巡警習慣在市場白吃白拿。", img: images.q13 },
    { level: "第三關：課文內容分析(中)－巡警的索求與衝突", question: "秦得參面對巡警索討青菜的反應是什麼？", options: ["立刻雙手奉上", "大聲斥責巡警", "表示要算錢（討秤）", "轉身就跑"], answer: 2, hint: "他不明白巡警的潛規則，傻傻地說要秤重算錢。", img: images.q14 },
    { level: "第三關：課文內容分析(中)－巡警的索求與衝突", question: "巡警因為沒拿到免費的青菜，惱羞成怒找了什麼藉口處罰秦得參？", options: ["說他菜不新鮮", "指控他阻礙交通", "指控他違反度量衡規則（稱仔不準）", "說他態度不佳"], answer: 2, hint: "用法律條文來報復。", img: images.q15 },
    { level: "第三關：課文內容分析(中)－巡警的索求與衝突", question: "秦得參的新稱仔是從哪裡來的？有不準確的問題嗎？", options: ["路邊撿的，確實不準", "向度量衡專賣局買的，完全合法準確", "自己做的，可能不準", "向朋友借的，尚且新新的"], answer: 3, hint: "稱仔是向鄰居/朋友借來的，而且還很新。", img: images.q16 },
    { level: "第三關：課文內容分析(中)－巡警的索求與衝突", question: "巡警為毀滅證據，對秦得參的稱仔做了什麼事？", options: ["沒收帶走", "丟到水溝裡", "當場折斷", "拿去賣掉"], answer: 2, hint: "折斷了代表公平正義的稱仔。", img: images.q17 },
    { level: "第三關：課文內容分析(中)－巡警的索求與衝突", question: "衝突過後，秦得參被帶到了哪裡？", options: ["醫院", "警察局（衙門）", "村長家", "法院"], answer: 1, hint: "他被帶回派出所法辦。", img: images.q18 },
    { level: "第四關：課文內容分析(下)－悲劇的結局與反思", question: "在法庭上，法官最後判決秦得參如何處置？", options: ["無罪釋放", "罰款或入獄三天", "終身監禁", "沒收所有財產"], answer: 1, hint: "他面臨繳錢或坐牢的選擇。", img: images.q19 },
    { level: "第四關：課文內容分析(下)－悲劇的結局與反思", question: "秦得參得知判決後，最初的決定是什麼？", options: ["立刻繳清罰款", "抗訴到底", "寧可入獄也不繳錢，因為覺得自己沒錯", "逃跑"], answer: 2, hint: "他覺得自己冤枉，寧願坐牢也不願認罪罰錢。", img: images.q20 },
    { level: "第四關：課文內容分析(下)－悲劇的結局與反思", question: "秦得參入獄的時間點，剛好遇到哪一個重要的傳統節日？", options: ["端午節", "中秋節", "清明節", "除夕（過年）"], answer: 3, hint: "本應是全家團圓的日子。", img: images.q21 },
    { level: "第四關：課文內容分析(下)－悲劇的結局與反思", question: "是誰四處奔走借錢，把秦得參贖出監獄的？", options: ["他的朋友", "他的妻子", "地主", "另一位好心警察"], answer: 1, hint: "妻子不忍心他在牢裡過年。", img: images.q22 },
    { level: "第四關：課文內容分析(下)－悲劇的結局與反思", question: "秦得參出獄回家後，心境發生了什麼變化？", options: ["感到慶幸與家人團聚", "決定改行做大生意", "感到無比的屈辱、絕望與悲憤", "原諒了巡警"], answer: 2, hint: "他覺得生不如死，喪失了活下去的尊嚴。", img: images.q23 },
    { level: "第四關：課文內容分析(下)－悲劇的結局與反思", question: "除夕夜，秦得參趁妻子熟睡時做了什麼事？", options: ["離家出走去外地", "懷抱著最後的覺悟", "把剩下的錢全偷走", "自己煮了一頓豐盛的年夜飯"], answer: 1, hint: "悲劇的最高潮，他走向了反抗與毀滅。", img: images.q24 },
    { level: "第四關：課文內容分析(下)－悲劇的結局與反思", question: "小說結尾提到「市上亦盛傳著，一個夜巡的警吏，被殺在道上」，暗示了什麼？", options: ["治安太差", "秦得參殺了警察後可能自殺，完成悲壯的反抗", "那是另一起無關的案件", "警察之間內鬨"], answer: 1, hint: "弱者最後用生命發出的微弱卻致命的怒吼。", img: images.q25 }
];

// UI Elements
const startScreen = document.getElementById('start-screen');
const hud = document.getElementById('hud');
const dialogueBox = document.getElementById('dialogue-box');
const dialogueText = document.getElementById('dialogue-text');
const choicePanel = document.getElementById('choice-panel');
const sceneImage = document.getElementById('scene-image');
const notificationBanner = document.getElementById('notification-banner');

// Stats & Student Info
let currentScore = 0;
let currentStamina = 100;
let currentDignity = 100;
let currentQuestionIndex = 0;
let typingInterval;

let studentClass = "";
let studentId = "";
let currentAttempts = 0;
let answerDetails = [];

// Initialize
document.getElementById('start-btn').addEventListener('click', startGame);

function startGame() {
    const classInput = document.getElementById('class-input').value.trim();
    const idInput = document.getElementById('student-id-input').value.trim();

    if (!classInput || !idInput) {
        alert("請輸入「班級」與「學號或姓名」才能開始測驗！");
        return;
    }

    studentClass = classInput;
    studentId = idInput;
    answerDetails = [];

    startScreen.style.opacity = 0;
    setTimeout(() => {
        startScreen.classList.add('hidden');
        hud.classList.remove('hidden');
        currentScore = 0;
        currentStamina = 100;
        currentDignity = 100;
        currentQuestionIndex = 0;
        currentAttempts = 0;
        updateHUD();
        loadQuestion();
    }, 500);
}

function updateHUD() {
    document.getElementById('stat-money').innerText = currentScore;
    
    const staminaBar = document.getElementById('bar-stamina');
    staminaBar.style.width = currentStamina + "%";
    staminaBar.style.backgroundColor = currentStamina < 30 ? "#e74c3c" : "#2ecc71";
    
    const dignityBar = document.getElementById('bar-dignity');
    dignityBar.style.width = currentDignity + "%";
    dignityBar.style.backgroundColor = currentDignity < 30 ? "#e74c3c" : "#f1c40f";
}

function showNotification(text) {
    notificationBanner.innerText = text;
    notificationBanner.classList.remove('hidden');
    setTimeout(() => {
        notificationBanner.classList.add('hidden');
    }, 2000);
}

function applyDamage() {
    let damage = 20; // fixed damage for wrong answer
    currentStamina -= damage;
    currentDignity -= damage;
    
    if (currentStamina < 0) currentStamina = 0;
    if (currentDignity < 0) currentDignity = 0;
    
    updateHUD();
    showNotification(`體力 -${damage} | 尊嚴 -${damage}`);

    // Trigger Animations
    const enemySprite = document.getElementById('enemy-sprite');
    const playerSprite = document.getElementById('player-sprite');
    
    // Lunge animation
    enemySprite.classList.remove('anim-attack-lunge');
    void enemySprite.offsetWidth; // Reflow
    enemySprite.classList.add('anim-attack-lunge');
    
    // Hit animation after lunge reaches
    setTimeout(() => {
        playerSprite.classList.remove('anim-damage-hit');
        void playerSprite.offsetWidth;
        playerSprite.classList.add('anim-damage-hit');
        
        document.body.classList.remove('shake', 'fade-black');
        void document.body.offsetWidth;
        document.body.classList.add('shake');
        
        // Floating damage numbers
        const layer = document.getElementById('damage-text-layer');
        const txts = [`-${damage} 體力`, `-${damage} 尊嚴`];
        txts.forEach((txt, idx) => {
            setTimeout(() => {
                const dmg = document.createElement('div');
                dmg.className = 'damage-float-text';
                dmg.textContent = txt;
                layer.appendChild(dmg);
                setTimeout(() => dmg.remove(), 1500);
            }, idx * 200);
        });
    }, 150);
}

function typeText(element, htmlContent, speed = 20) {
    clearInterval(typingInterval);
    element.innerHTML = "";
    
    // Create a temporary div to parse HTML content
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = htmlContent;
    
    let i = 0;
    let currentHtml = "";
    let inTag = false;
    
    const fullStr = tempDiv.innerHTML;
    
    return new Promise((resolve) => {
        typingInterval = setInterval(() => {
            if (i < fullStr.length) {
                if (fullStr.charAt(i) === '<') inTag = true;
                currentHtml += fullStr.charAt(i);
                if (fullStr.charAt(i) === '>') inTag = false;
                
                if (!inTag) {
                    element.innerHTML = currentHtml;
                }
                i++;
            } else {
                clearInterval(typingInterval);
                resolve();
            }
        }, speed);
    });
}

function handleGameOver(type) {
    dialogueBox.classList.add('hidden');
    choicePanel.classList.add('hidden');
    document.getElementById('character-layer').style.display = 'none';
    document.getElementById('damage-text-layer').style.display = 'none';
    
    if (type === "bad") {
        sceneImage.src = "";
        document.body.style.backgroundColor = "#000";
        sendDataToGoogleSheet("遊戲結束 (死亡)");
        setTimeout(() => {
            alert(`【Game Over】\n你的體力與尊嚴已消耗殆盡...\n秦得參倒在了體制的壓迫之下。\n最終分數：${currentScore}`);
            location.reload();
        }, 500);
    } else if (type === "true") {
        sceneImage.src = images.q25.src;
        sendDataToGoogleSheet("完美通關 (True End)");
        setTimeout(() => {
            alert(`【True End - 覺醒與反抗】\n你撐過了所有的考驗！\n即使面對壓迫，仍保有尊嚴的反抗。\n最終分數：${currentScore}/100`);
            location.reload();
        }, 1000);
    }
}

async function loadQuestion() {
    if (currentStamina <= 0 || currentDignity <= 0) {
        handleGameOver("bad");
        return;
    }
    
    if (currentQuestionIndex >= questions.length) {
        handleGameOver("true");
        return;
    }

    const q = questions[currentQuestionIndex];
    currentAttempts = 0; // reset attempts for the new question
    
    // Set Image
    sceneImage.src = q.img.src;
    sceneImage.style.opacity = 0;
    setTimeout(() => sceneImage.style.opacity = 1, 100);

    // Character Layer Logic
    // Show enemy if question mentions police, landlord, judge, etc.
    const enemyKeywords = ["警察", "巡警", "地主", "法官", "大人"];
    let hasEnemy = enemyKeywords.some(kw => q.question.includes(kw) || q.hint.includes(kw));
    document.getElementById('enemy-sprite').style.opacity = hasEnemy ? 1 : 0;

    // Show Text
    dialogueBox.classList.remove('hidden');
    choicePanel.classList.add('hidden'); // hide during typing
    
    const narrative = `<span style="color:#ffcc00;">[ ${q.level} ]</span><br><br>${q.question}`;
    await typeText(dialogueText, narrative, 15);
    
    showChoices(q);
}

function showChoices(q) {
    choicePanel.innerHTML = "";
    q.options.forEach((optText, index) => {
        const btn = document.createElement('button');
        btn.className = 'choice-btn';
        btn.innerText = optText;
        btn.onclick = () => {
            if (index === q.answer) {
                // Correct - Option A: calculate score based on attempts
                let points = 0;
                if (currentAttempts === 0) points = 4;
                else if (currentAttempts === 1) points = 2;
                else if (currentAttempts === 2) points = 1;
                else points = 0;
                
                currentScore += points;
                updateHUD();
                
                // Record details
                answerDetails.push(`Q${currentQuestionIndex + 1}: 錯 ${currentAttempts} 次 (得 ${points} 分)`);
                
                showNotification(`✔️ 正確！獲得 ${points} 分。推進劇情...`);
                currentQuestionIndex++;
                loadQuestion();
            } else {
                // Wrong
                currentAttempts++;
                applyDamage();
                
                // Show Hint
                const hintHTML = `<span style="color:#ffcc00;">[ ${q.level} ]</span><br><br>${q.question}<br><br><span style="color:#ff5555;">💥 選擇錯誤！</span><br><span style="color:#aaa;">💡 提示：${q.hint}</span>`;
                dialogueText.innerHTML = hintHTML;
                
                // If dead after damage, go to game over
                if (currentStamina <= 0 || currentDignity <= 0) {
                    answerDetails.push(`Q${currentQuestionIndex + 1}: 錯 ${currentAttempts} 次 (失敗結束)`);
                    setTimeout(() => handleGameOver("bad"), 2000);
                }
            }
        };
        choicePanel.appendChild(btn);
    });
    choicePanel.classList.remove('hidden');
}

function sendDataToGoogleSheet(status) {
    const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbxRPu3YIjL6R-yyBkgaLBqW2xkudxnuSPUkjyURRBoKk2g1lHxNY5DrHGikuh9UzOs9Kg/exec";
    
    const payload = {
        studentClass: studentClass,
        studentId: studentId,
        score: currentScore,
        details: `狀態: ${status}\n` + answerDetails.join("\n")
    };

    fetch(WEB_APP_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
    }).then(() => {
        console.log("成績已成功傳送！");
    }).catch(err => {
        console.error("傳送成績失敗：", err);
    });
}
