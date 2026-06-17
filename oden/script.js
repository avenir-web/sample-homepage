document.addEventListener('DOMContentLoaded', () => {
    // ヘッダーのスクロール演出（トップのみ .header に scrolled を付与）
    const header = document.getElementById('header');
    if (header && !header.classList.contains('header--solid')) {
        window.addEventListener('scroll', () => {
            header.classList.toggle('scrolled', window.scrollY > 50);
        });
    }

    // ページ内アンカーのスムーズスクロール
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                const offset = target.getBoundingClientRect().top + window.scrollY - 80;
                window.scrollTo({ top: offset, behavior: 'smooth' });
            }
        });
    });

    // フェードイン
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) { entry.target.classList.add('visible'); obs.unobserve(entry.target); }
        });
    }, { threshold: 0.12 });
    document.querySelectorAll('.fade-in-up').forEach(el => observer.observe(el));
});

// モバイルナビ
function toggleNav() {
    document.getElementById('spNav').classList.toggle('open');
}

/* =========================================================
   予約カレンダー（空席状況 ○△✕／2週間はランダム、以降は○）
   ※ 実データではなく、日付から決定的に生成したサンプル表示です
   ========================================================= */
(function () {
    const grid = document.getElementById('calGrid');
    if (!grid) return;

    const title = document.getElementById('calTitle');
    const prevBtn = document.getElementById('calPrev');
    const nextBtn = document.getElementById('calNext');
    const slotBox = document.getElementById('slotBox');
    const slotGrid = document.getElementById('slotGrid');
    const slotDateLabel = document.getElementById('slotDateLabel');
    const selSummary = document.getElementById('selSummary');
    const summaryText = document.getElementById('summaryText');
    const selectedDateInput = document.getElementById('selectedDate');
    const selectedTimeInput = document.getElementById('selectedTime');

    const TIMES = ['17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00'];
    const DOW = ['日', '月', '火', '水', '木', '金', '土'];

    const today = new Date(); today.setHours(0, 0, 0, 0);
    const todayKey = ymd(today);
    let viewYear = today.getFullYear();
    let viewMonth = today.getMonth();
    const minMonthIndex = viewYear * 12 + viewMonth;

    let selectedKey = null;
    let selectedTime = null;

    function ymd(d) {
        return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
    }

    // 日付文字列から決定的な擬似乱数（0〜1）。再描画しても同じ結果になります。
    function seeded(str, salt) {
        let h = 2166136261;
        const s = str + '|' + (salt || '');
        for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); }
        h ^= h >>> 13; h = Math.imul(h, 0x5bd1e995); h ^= h >>> 15;
        return ((h >>> 0) % 100000) / 100000;
    }

    function getStatus(d) {
        const key = ymd(d);
        if (key < todayKey) return 'past';
        if (d.getDay() === 0) return 'holiday';          // 日曜は定休
        const diffDays = Math.round((d - today) / 86400000);
        if (diffDays <= 14) {                            // 今日から2週間はランダム
            const r = seeded(key, 'status');
            if (r < 0.55) return 'full';
            if (r < 0.85) return 'partial';
            return 'closed';
        }
        return 'full';                                   // 2週間以降はすべて空席あり
    }

    function availableTimes(key) {
        return TIMES.filter((t, i) => seeded(key, 'slot' + i) > 0.45);
    }

    function render() {
        grid.innerHTML = '';
        title.textContent = viewYear + '年 ' + (viewMonth + 1) + '月';
        prevBtn.disabled = (viewYear * 12 + viewMonth) <= minMonthIndex;

        DOW.forEach((w, i) => {
            const el = document.createElement('div');
            el.className = 'cal-dow' + (i === 0 ? ' sun' : i === 6 ? ' sat' : '');
            el.textContent = w;
            grid.appendChild(el);
        });

        const startDow = new Date(viewYear, viewMonth, 1).getDay();
        const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
        for (let i = 0; i < startDow; i++) {
            const e = document.createElement('div');
            e.className = 'cal-cell empty';
            grid.appendChild(e);
        }
        for (let day = 1; day <= daysInMonth; day++) {
            const d = new Date(viewYear, viewMonth, day);
            const key = ymd(d);
            const st = getStatus(d);
            const cell = document.createElement('div');
            cell.className = 'cal-cell st-' + st;
            const mark = st === 'full' ? '○' : st === 'partial' ? '△' : st === 'closed' ? '✕' : st === 'holiday' ? '休' : '';
            cell.innerHTML = '<span class="d-num">' + day + '</span>' + (mark ? '<span class="mark">' + mark + '</span>' : '');
            if (st === 'full' || st === 'partial') {
                cell.classList.add('selectable');
                if (key === selectedKey) cell.classList.add('selected');
                cell.addEventListener('click', () => selectDate(key, d, st));
            }
            grid.appendChild(cell);
        }
    }

    function selectDate(key, d, st) {
        selectedKey = key;
        selectedTime = null;
        selectedDateInput.value = key;
        selectedTimeInput.value = '';
        render();

        const label = (d.getMonth() + 1) + '月' + d.getDate() + '日（' + DOW[d.getDay()] + '）';
        slotDateLabel.textContent = label;
        const avail = st === 'partial' ? availableTimes(key) : TIMES.slice();
        slotGrid.innerHTML = '';
        if (avail.length === 0) {
            slotGrid.innerHTML = '<p class="slot-empty">あいにく満席です。別の日をお選びください。</p>';
        } else {
            TIMES.forEach(t => {
                const b = document.createElement('button');
                b.type = 'button'; b.className = 'slot'; b.textContent = t;
                if (!avail.includes(t)) b.disabled = true;
                else b.addEventListener('click', () => selectTime(t, b, label));
                slotGrid.appendChild(b);
            });
        }
        slotBox.style.display = 'block';
        updateSummary(label);
        slotBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    function selectTime(t, btn, label) {
        selectedTime = t;
        selectedTimeInput.value = t;
        slotGrid.querySelectorAll('.slot').forEach(s => s.classList.remove('on'));
        btn.classList.add('on');
        updateSummary(label);
    }

    function updateSummary(label) {
        if (!selectedKey) return;
        summaryText.textContent = label + (selectedTime ? '　' + selectedTime + '〜' : '（お時間をお選びください）');
        selSummary.classList.add('show');
    }

    prevBtn.addEventListener('click', () => {
        if ((viewYear * 12 + viewMonth) > minMonthIndex) {
            viewMonth--; if (viewMonth < 0) { viewMonth = 11; viewYear--; }
            render();
        }
    });
    nextBtn.addEventListener('click', () => {
        viewMonth++; if (viewMonth > 11) { viewMonth = 0; viewYear++; }
        render();
    });

    render();
})();
