// 가계도 문제 데이터
const problems = [
    {
        id: 1,
        title: "문제 1: 기본 열성 유전",
        difficulty: "easy",
        description: "우성 형질을 가진 부모에게서 열성 형질을 가진 자녀가 태어났습니다. 각 개체의 유전자형을 분석하세요.",
        members: [
            { id: 1, x: 300, y: 100, gender: 'male', affected: false, genotype: 'Aa' },
            { id: 2, x: 400, y: 100, gender: 'female', affected: false, genotype: 'Aa' },
            { id: 3, x: 250, y: 250, gender: 'male', affected: false, genotype: 'AA' },
            { id: 4, x: 350, y: 250, gender: 'female', affected: true, genotype: 'aa' },
            { id: 5, x: 450, y: 250, gender: 'male', affected: false, genotype: 'Aa' }
        ],
        connections: [
            { from: 1, to: 2, type: 'marriage' },
            { parent1: 1, parent2: 2, children: [3, 4, 5] }
        ]
    },
    {
        id: 2,
        title: "문제 2: 2세대 가계도",
        difficulty: "easy",
        description: "열성 형질 보유자와 우성 형질 보유자의 결혼으로 태어난 자녀들을 분석하세요.",
        members: [
            { id: 1, x: 300, y: 100, gender: 'male', affected: true, genotype: 'aa' },
            { id: 2, x: 400, y: 100, gender: 'female', affected: false, genotype: 'AA' },
            { id: 3, x: 250, y: 250, gender: 'male', affected: false, genotype: 'Aa' },
            { id: 4, x: 350, y: 250, gender: 'female', affected: false, genotype: 'Aa' },
            { id: 5, x: 450, y: 250, gender: 'male', affected: false, genotype: 'Aa' }
        ],
        connections: [
            { from: 1, to: 2, type: 'marriage' },
            { parent1: 1, parent2: 2, children: [3, 4, 5] }
        ]
    },
    {
        id: 3,
        title: "문제 3: 복잡한 2세대",
        difficulty: "medium",
        description: "두 쌍의 부부가 있는 가계도입니다. 형질의 유전 방식을 파악하세요.",
        members: [
            { id: 1, x: 200, y: 80, gender: 'male', affected: false, genotype: 'Aa' },
            { id: 2, x: 300, y: 80, gender: 'female', affected: true, genotype: 'aa' },
            { id: 3, x: 500, y: 80, gender: 'male', affected: false, genotype: 'AA' },
            { id: 4, x: 600, y: 80, gender: 'female', affected: false, genotype: 'Aa' },
            { id: 5, x: 150, y: 220, gender: 'female', affected: false, genotype: 'Aa' },
            { id: 6, x: 250, y: 220, gender: 'male', affected: true, genotype: 'aa' },
            { id: 7, x: 550, y: 220, gender: 'male', affected: false, genotype: 'AA' },
            { id: 8, x: 650, y: 220, gender: 'female', affected: false, genotype: 'Aa' }
        ],
        connections: [
            { from: 1, to: 2, type: 'marriage' },
            { from: 3, to: 4, type: 'marriage' },
            { parent1: 1, parent2: 2, children: [5, 6] },
            { parent1: 3, parent2: 4, children: [7, 8] }
        ]
    },
    {
        id: 4,
        title: "문제 4: 3세대 가계도 (기본)",
        difficulty: "medium",
        description: "3세대에 걸친 유전 양상을 분석하세요. 확실한 것부터 찾아보세요!",
        members: [
            { id: 1, x: 350, y: 70, gender: 'male', affected: false, genotype: 'Aa' },
            { id: 2, x: 450, y: 70, gender: 'female', affected: false, genotype: 'Aa' },
            { id: 3, x: 300, y: 200, gender: 'male', affected: false, genotype: 'AA' },
            { id: 4, x: 400, y: 200, gender: 'female', affected: true, genotype: 'aa' },
            { id: 5, x: 500, y: 200, gender: 'male', affected: false, genotype: 'Aa' },
            { id: 6, x: 250, y: 350, gender: 'female', affected: false, genotype: 'Aa' },
            { id: 7, x: 350, y: 350, gender: 'male', affected: true, genotype: 'aa' },
            { id: 8, x: 450, y: 350, gender: 'female', affected: false, genotype: 'Aa' }
        ],
        connections: [
            { from: 1, to: 2, type: 'marriage' },
            { parent1: 1, parent2: 2, children: [3, 4, 5] },
            { from: 3, to: 4, type: 'marriage' },
            { parent1: 3, parent2: 4, children: [6, 7, 8] }
        ]
    },
    {
        id: 5,
        title: "문제 5: 열성 형질 보유자가 많은 가계도",
        difficulty: "medium",
        description: "여러 개체가 열성 형질을 보유하고 있습니다. 유전자형을 정확히 판단하세요.",
        members: [
            { id: 1, x: 250, y: 80, gender: 'male', affected: true, genotype: 'aa' },
            { id: 2, x: 350, y: 80, gender: 'female', affected: false, genotype: 'Aa' },
            { id: 3, x: 550, y: 80, gender: 'male', affected: false, genotype: 'Aa' },
            { id: 4, x: 650, y: 80, gender: 'female', affected: true, genotype: 'aa' },
            { id: 5, x: 200, y: 220, gender: 'male', affected: true, genotype: 'aa' },
            { id: 6, x: 300, y: 220, gender: 'female', affected: false, genotype: 'Aa' },
            { id: 7, x: 400, y: 220, gender: 'male', affected: false, genotype: 'Aa' },
            { id: 8, x: 600, y: 220, gender: 'female', affected: true, genotype: 'aa' },
            { id: 9, x: 700, y: 220, gender: 'male', affected: false, genotype: 'Aa' }
        ],
        connections: [
            { from: 1, to: 2, type: 'marriage' },
            { from: 3, to: 4, type: 'marriage' },
            { parent1: 1, parent2: 2, children: [5, 6, 7] },
            { parent1: 3, parent2: 4, children: [8, 9] }
        ]
    },
    {
        id: 6,
        title: "문제 6: 3세대 확장형",
        difficulty: "hard",
        description: "3세대에 걸쳐 여러 가족이 있는 복잡한 가계도입니다.",
        members: [
            { id: 1, x: 350, y: 60, gender: 'male', affected: false, genotype: 'Aa' },
            { id: 2, x: 450, y: 60, gender: 'female', affected: false, genotype: 'Aa' },
            { id: 3, x: 250, y: 180, gender: 'male', affected: false, genotype: 'AA' },
            { id: 4, x: 350, y: 180, gender: 'female', affected: true, genotype: 'aa' },
            { id: 5, x: 450, y: 180, gender: 'male', affected: false, genotype: 'Aa' },
            { id: 6, x: 550, y: 180, gender: 'female', affected: false, genotype: 'Aa' },
            { id: 7, x: 200, y: 320, gender: 'female', affected: false, genotype: 'Aa' },
            { id: 8, x: 300, y: 320, gender: 'male', affected: true, genotype: 'aa' },
            { id: 9, x: 400, y: 320, gender: 'female', affected: false, genotype: 'Aa' },
            { id: 10, x: 500, y: 320, gender: 'male', affected: false, genotype: 'AA' },
            { id: 11, x: 600, y: 320, gender: 'female', affected: true, genotype: 'aa' }
        ],
        connections: [
            { from: 1, to: 2, type: 'marriage' },
            { parent1: 1, parent2: 2, children: [3, 4, 5, 6] },
            { from: 3, to: 4, type: 'marriage' },
            { from: 5, to: 6, type: 'marriage' },
            { parent1: 3, parent2: 4, children: [7, 8, 9] },
            { parent1: 5, parent2: 6, children: [10, 11] }
        ]
    },
    {
        id: 7,
        title: "문제 7: 격세유전 패턴",
        difficulty: "medium",
        description: "1세대는 우성, 2세대에 열성 형질 보유자가 나타납니다.",
        members: [
            { id: 1, x: 300, y: 80, gender: 'male', affected: false, genotype: 'Aa' },
            { id: 2, x: 400, y: 80, gender: 'female', affected: false, genotype: 'Aa' },
            { id: 3, x: 200, y: 220, gender: 'male', affected: false, genotype: 'AA' },
            { id: 4, x: 300, y: 220, gender: 'female', affected: false, genotype: 'Aa' },
            { id: 5, x: 400, y: 220, gender: 'male', affected: true, genotype: 'aa' },
            { id: 6, x: 500, y: 220, gender: 'female', affected: false, genotype: 'Aa' }
        ],
        connections: [
            { from: 1, to: 2, type: 'marriage' },
            { parent1: 1, parent2: 2, children: [3, 4, 5, 6] }
        ]
    },
    {
        id: 8,
        title: "문제 8: 간단한 가계도",
        difficulty: "easy",
        description: "열성 형질 보유자가 한 명만 있는 간단한 가계도입니다.",
        members: [
            { id: 1, x: 300, y: 100, gender: 'male', affected: false, genotype: 'Aa' },
            { id: 2, x: 400, y: 100, gender: 'female', affected: false, genotype: 'Aa' },
            { id: 3, x: 250, y: 250, gender: 'male', affected: false, genotype: 'AA' },
            { id: 4, x: 350, y: 250, gender: 'female', affected: false, genotype: 'Aa' },
            { id: 5, x: 450, y: 250, gender: 'male', affected: true, genotype: 'aa' }
        ],
        connections: [
            { from: 1, to: 2, type: 'marriage' },
            { parent1: 1, parent2: 2, children: [3, 4, 5] }
        ]
    },
    {
        id: 9,
        title: "문제 9: 혼합형 가계도",
        difficulty: "hard",
        description: "복잡한 가계도입니다. 각 세대별로 신중하게 분석하세요.",
        members: [
            { id: 1, x: 200, y: 60, gender: 'male', affected: false, genotype: 'Aa' },
            { id: 2, x: 300, y: 60, gender: 'female', affected: false, genotype: 'Aa' },
            { id: 3, x: 500, y: 60, gender: 'male', affected: true, genotype: 'aa' },
            { id: 4, x: 600, y: 60, gender: 'female', affected: false, genotype: 'Aa' },
            { id: 5, x: 150, y: 200, gender: 'female', affected: false, genotype: 'AA' },
            { id: 6, x: 250, y: 200, gender: 'male', affected: false, genotype: 'Aa' },
            { id: 7, x: 350, y: 200, gender: 'female', affected: true, genotype: 'aa' },
            { id: 8, x: 550, y: 200, gender: 'male', affected: true, genotype: 'aa' },
            { id: 9, x: 650, y: 200, gender: 'female', affected: false, genotype: 'Aa' },
            { id: 10, x: 200, y: 350, gender: 'male', affected: false, genotype: 'AA' },
            { id: 11, x: 300, y: 350, gender: 'female', affected: true, genotype: 'aa' },
            { id: 12, x: 600, y: 350, gender: 'male', affected: false, genotype: 'Aa' }
        ],
        connections: [
            { from: 1, to: 2, type: 'marriage' },
            { from: 3, to: 4, type: 'marriage' },
            { parent1: 1, parent2: 2, children: [5, 6, 7] },
            { parent1: 3, parent2: 4, children: [8, 9] },
            { from: 5, to: 6, type: 'marriage' },
            { from: 8, to: 9, type: 'marriage' },
            { parent1: 5, parent2: 6, children: [10, 11] },
            { parent1: 8, parent2: 9, children: [12] }
        ]
    },
    {
        id: 10,
        title: "문제 10: 대가족 가계도",
        difficulty: "hard",
        description: "여러 명의 자녀가 있는 대가족입니다. 유전자형을 꼼꼼히 분석하세요.",
        members: [
            { id: 1, x: 400, y: 80, gender: 'male', affected: false, genotype: 'Aa' },
            { id: 2, x: 500, y: 80, gender: 'female', affected: false, genotype: 'Aa' },
            { id: 3, x: 200, y: 240, gender: 'male', affected: false, genotype: 'AA' },
            { id: 4, x: 300, y: 240, gender: 'female', affected: false, genotype: 'Aa' },
            { id: 5, x: 400, y: 240, gender: 'male', affected: true, genotype: 'aa' },
            { id: 6, x: 500, y: 240, gender: 'female', affected: false, genotype: 'Aa' },
            { id: 7, x: 600, y: 240, gender: 'male', affected: false, genotype: 'AA' },
            { id: 8, x: 700, y: 240, gender: 'female', affected: true, genotype: 'aa' }
        ],
        connections: [
            { from: 1, to: 2, type: 'marriage' },
            { parent1: 1, parent2: 2, children: [3, 4, 5, 6, 7, 8] }
        ]
    },
    {
        id: 11,
        title: "문제 11: 모두 우성인 가족",
        difficulty: "easy",
        description: "열성 형질 보유자가 없는 가족입니다. AA와 Aa를 구분할 수 있나요?",
        members: [
            { id: 1, x: 300, y: 100, gender: 'male', affected: false, genotype: 'AA' },
            { id: 2, x: 400, y: 100, gender: 'female', affected: false, genotype: 'AA' },
            { id: 3, x: 250, y: 250, gender: 'male', affected: false, genotype: 'AA' },
            { id: 4, x: 350, y: 250, gender: 'female', affected: false, genotype: 'AA' },
            { id: 5, x: 450, y: 250, gender: 'male', affected: false, genotype: 'AA' }
        ],
        connections: [
            { from: 1, to: 2, type: 'marriage' },
            { parent1: 1, parent2: 2, children: [3, 4, 5] }
        ]
    },
    {
        id: 12,
        title: "문제 12: 최종 도전",
        difficulty: "hard",
        description: "4세대에 걸친 대가족 가계도입니다. 모든 분석 기술을 활용하세요!",
        members: [
            { id: 1, x: 450, y: 50, gender: 'male', affected: false, genotype: 'Aa' },
            { id: 2, x: 550, y: 50, gender: 'female', affected: false, genotype: 'Aa' },
            { id: 3, x: 350, y: 160, gender: 'male', affected: false, genotype: 'AA' },
            { id: 4, x: 450, y: 160, gender: 'female', affected: true, genotype: 'aa' },
            { id: 5, x: 550, y: 160, gender: 'male', affected: false, genotype: 'Aa' },
            { id: 6, x: 650, y: 160, gender: 'female', affected: false, genotype: 'Aa' },
            { id: 7, x: 300, y: 290, gender: 'female', affected: false, genotype: 'Aa' },
            { id: 8, x: 400, y: 290, gender: 'male', affected: true, genotype: 'aa' },
            { id: 9, x: 500, y: 290, gender: 'female', affected: false, genotype: 'Aa' },
            { id: 10, x: 600, y: 290, gender: 'male', affected: false, genotype: 'AA' },
            { id: 11, x: 700, y: 290, gender: 'female', affected: false, genotype: 'Aa' },
            { id: 12, x: 350, y: 430, gender: 'male', affected: false, genotype: 'Aa' },
            { id: 13, x: 450, y: 430, gender: 'female', affected: true, genotype: 'aa' },
            { id: 14, x: 650, y: 430, gender: 'male', affected: false, genotype: 'AA' }
        ],
        connections: [
            { from: 1, to: 2, type: 'marriage' },
            { parent1: 1, parent2: 2, children: [3, 4, 5, 6] },
            { from: 3, to: 4, type: 'marriage' },
            { from: 5, to: 6, type: 'marriage' },
            { parent1: 3, parent2: 4, children: [7, 8, 9] },
            { parent1: 5, parent2: 6, children: [10, 11] },
            { from: 7, to: 8, type: 'marriage' },
            { from: 10, to: 11, type: 'marriage' },
            { parent1: 7, parent2: 8, children: [12, 13] },
            { parent1: 10, parent2: 11, children: [14] }
        ]
    }
];

// 현재 선택된 문제
let currentProblem = null;
let userAnswers = {};

// 페이지 로드 시 문제 목록 표시
window.addEventListener('DOMContentLoaded', () => {
    displayProblemList();
});

// 문제 목록 표시
function displayProblemList() {
    const grid = document.getElementById('problemGrid');
    grid.innerHTML = '';

    problems.forEach(problem => {
        const card = document.createElement('div');
        card.className = 'problem-card';
        card.onclick = () => loadProblem(problem.id);

        const difficultyClass = problem.difficulty === 'easy' ? 'easy' : 
                               problem.difficulty === 'medium' ? 'medium' : 'hard';
        const difficultyText = problem.difficulty === 'easy' ? '쉬움' : 
                              problem.difficulty === 'medium' ? '보통' : '어려움';

        card.innerHTML = `
            <span class="difficulty ${difficultyClass}">${difficultyText}</span>
            <h4>${problem.title}</h4>
            <p>${problem.description}</p>
        `;

        grid.appendChild(card);
    });
}

// 문제 로드
function loadProblem(problemId) {
    currentProblem = problems.find(p => p.id === problemId);
    if (!currentProblem) return;

    userAnswers = {};
    
    document.getElementById('currentProblem').style.display = 'block';
    document.getElementById('problemTitle').textContent = currentProblem.title;
    document.getElementById('problemDescription').textContent = currentProblem.description;
    document.getElementById('results').style.display = 'none';
    document.getElementById('hintBox').style.display = 'none';

    drawPedigree();
    updateMemberList();

    // 문제로 스크롤
    document.getElementById('currentProblem').scrollIntoView({ behavior: 'smooth' });
}

// 가계도 그리기
function drawPedigree() {
    if (!currentProblem) return;

    const canvas = document.getElementById('pedigreeCanvas');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 연결선 먼저 그리기
    currentProblem.connections.forEach(conn => {
        if (conn.type === 'marriage') {
            const member1 = currentProblem.members.find(m => m.id === conn.from);
            const member2 = currentProblem.members.find(m => m.id === conn.to);
            
            ctx.strokeStyle = '#4a5568';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(member1.x, member1.y);
            ctx.lineTo(member2.x, member2.y);
            ctx.stroke();
        } else if (conn.children) {
            const parent1 = currentProblem.members.find(m => m.id === conn.parent1);
            const parent2 = currentProblem.members.find(m => m.id === conn.parent2);
            const midX = (parent1.x + parent2.x) / 2;
            const midY = (parent1.y + parent2.y) / 2;

            conn.children.forEach(childId => {
                const child = currentProblem.members.find(m => m.id === childId);
                
                ctx.strokeStyle = '#4a5568';
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.moveTo(midX, midY);
                ctx.lineTo(midX, midY + 30);
                ctx.lineTo(child.x, midY + 30);
                ctx.lineTo(child.x, child.y - 30);
                ctx.stroke();
            });
        }
    });

    // 개체 그리기
    currentProblem.members.forEach(member => {
        ctx.lineWidth = 3;
        ctx.strokeStyle = '#2d3748';

        if (member.gender === 'male') {
            // 사각형
            ctx.strokeRect(member.x - 25, member.y - 25, 50, 50);
            
            if (member.affected) {
                // 빗금 패턴
                ctx.fillStyle = ctx.createPattern(createHatchPattern(), 'repeat');
                ctx.fillRect(member.x - 25, member.y - 25, 50, 50);
            }
        } else {
            // 원
            ctx.beginPath();
            ctx.arc(member.x, member.y, 25, 0, Math.PI * 2);
            ctx.stroke();
            
            if (member.affected) {
                ctx.save();
                ctx.clip();
                ctx.fillStyle = ctx.createPattern(createHatchPattern(), 'repeat');
                ctx.fillRect(member.x - 25, member.y - 25, 50, 50);
                ctx.restore();
            }
        }

        // ID 표시
        ctx.fillStyle = '#2d3748';
        ctx.font = 'bold 16px sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(member.id, member.x, member.y);
    });
}

// 빗금 패턴 생성
function createHatchPattern() {
    const patternCanvas = document.createElement('canvas');
    patternCanvas.width = 10;
    patternCanvas.height = 10;
    const pctx = patternCanvas.getContext('2d');
    
    pctx.strokeStyle = '#2d3748';
    pctx.lineWidth = 2;
    pctx.beginPath();
    pctx.moveTo(0, 10);
    pctx.lineTo(10, 0);
    pctx.stroke();
    
    return patternCanvas;
}

// 구성원 목록 업데이트
function updateMemberList() {
    if (!currentProblem) return;

    const list = document.getElementById('memberList');
    list.innerHTML = '';

    currentProblem.members.forEach(member => {
        const card = document.createElement('div');
        card.className = `member-card ${member.affected ? 'affected' : ''}`;
        
        const genderIcon = member.gender === 'male' ? '♂️' : '♀️';
        const genderClass = member.gender === 'male' ? 'male' : 'female';
        const phenotype = member.affected ? '열성 형질' : '우성 형질';
        
        card.innerHTML = `
            <div class="member-info">
                <div class="gender-icon ${genderClass}">${genderIcon}</div>
                <span>개체 ${member.id} (${phenotype})</span>
            </div>
            <select id="answer-${member.id}" onchange="saveAnswer(${member.id}, this.value)">
                <option value="">선택하세요</option>
                <option value="AA">AA (우성 동형접합)</option>
                <option value="Aa">Aa (이형접합)</option>
                <option value="aa">aa (열성 동형접합)</option>
                <option value="unknown">모름</option>
            </select>
        `;
        
        list.appendChild(card);
    });
}

// 답변 저장
function saveAnswer(memberId, answer) {
    userAnswers[memberId] = answer;
}

// 채점하기
function checkAnswers() {
    if (!currentProblem) return;

    let correct = 0;
    let total = 0;
    const details = [];

    currentProblem.members.forEach(member => {
        const userAnswer = userAnswers[member.id];
        if (userAnswer && userAnswer !== 'unknown') {
            total++;
            if (userAnswer === member.genotype) {
                correct++;
                details.push(`<div class="result-item">개체 ${member.id}: ✅ 정답 (${member.genotype})</div>`);
            } else {
                details.push(`<div class="result-item">개체 ${member.id}: ❌ 오답 - 입력: ${userAnswer}, 정답: ${member.genotype}</div>`);
            }
        }
    });

    if (total === 0) {
        alert('유전자형을 선택해주세요!');
        return;
    }

    const resultsDiv = document.getElementById('results');
    const percentage = Math.round((correct / total) * 100);
    
    let emoji = '💯';
    let message = '완벽합니다!';
    if (percentage < 50) {
        emoji = '😢';
        message = '조금 더 연습해보세요!';
    } else if (percentage < 80) {
        emoji = '😊';
        message = '잘 하고 있어요!';
    } else if (percentage < 100) {
        emoji = '🎉';
        message = '거의 다 맞혔어요!';
    }

    resultsDiv.innerHTML = `
        <h2>${emoji} 채점 결과</h2>
        <p>${message}</p>
        <p style="font-size: 2em; font-weight: bold; margin: 20px 0;">정답률: ${percentage}% (${correct}/${total})</p>
        <div class="result-details">
            ${details.join('')}
        </div>
    `;
    resultsDiv.style.display = 'block';
    
    // 결과로 스크롤
    resultsDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// 힌트 보기
function showHintBox() {
    const hintBox = document.getElementById('hintBox');
    hintBox.style.display = hintBox.style.display === 'none' ? 'block' : 'none';
    
    if (hintBox.style.display === 'block') {
        hintBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
}

// 문제 초기화
function resetProblem() {
    if (!currentProblem) return;
    
    if (confirm('입력한 답변을 모두 지우고 다시 풀까요?')) {
        userAnswers = {};
        
        // 모든 선택 박스 초기화
        currentProblem.members.forEach(member => {
            const select = document.getElementById(`answer-${member.id}`);
            if (select) {
                select.value = '';
            }
        });
        
        document.getElementById('results').style.display = 'none';
        document.getElementById('hintBox').style.display = 'none';
    }
}
