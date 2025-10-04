// 확장된 가계도 문제 데이터 - 30개
const problems = [
    {
        id: 1,
        title: "문제 1: 기본 3세대",
        difficulty: "easy",
        description: "양쪽 조부모가 모두 있는 3세대 가계도입니다.",
        members: [
            { id: 1, x: 200, y: 80, gender: 'male', affected: false, genotype: 'Aa' },
            { id: 2, x: 300, y: 80, gender: 'female', affected: false, genotype: 'Aa' },
            { id: 3, x: 600, y: 80, gender: 'male', affected: false, genotype: 'Aa' },
            { id: 4, x: 700, y: 80, gender: 'female', affected: false, genotype: 'Aa' },
            { id: 5, x: 250, y: 220, gender: 'male', affected: true, genotype: 'aa' },
            { id: 6, x: 650, y: 220, gender: 'female', affected: false, genotype: 'Aa' },
            { id: 7, x: 350, y: 360, gender: 'male', affected: true, genotype: 'aa' },
            { id: 8, x: 450, y: 360, gender: 'female', affected: false, genotype: 'Aa' }
        ],
        connections: [
            { from: 1, to: 2, type: 'marriage' },
            { from: 3, to: 4, type: 'marriage' },
            { from: 5, to: 6, type: 'marriage' },
            { parent1: 1, parent2: 2, children: [5] },
            { parent1: 3, parent2: 4, children: [6] },
            { parent1: 5, parent2: 6, children: [7, 8] }
        ]
    },
    {
        id: 2,
        title: "문제 2: 한쪽 조부모",
        difficulty: "easy",
        description: "아버지 쪽 조부모만 있는 3세대 가계도입니다.",
        members: [
            { id: 1, x: 250, y: 80, gender: 'male', affected: false, genotype: 'Aa' },
            { id: 2, x: 350, y: 80, gender: 'female', affected: false, genotype: 'Aa' },
            { id: 3, x: 300, y: 220, gender: 'male', affected: false, genotype: 'Aa' },
            { id: 4, x: 500, y: 220, gender: 'female', affected: true, genotype: 'aa' },
            { id: 5, x: 350, y: 360, gender: 'female', affected: false, genotype: 'Aa' },
            { id: 6, x: 450, y: 360, gender: 'male', affected: true, genotype: 'aa' }
        ],
        connections: [
            { from: 1, to: 2, type: 'marriage' },
            { from: 3, to: 4, type: 'marriage' },
            { parent1: 1, parent2: 2, children: [3] },
            { parent1: 3, parent2: 4, children: [5, 6] }
        ]
    },
    {
        id: 17,
        title: "문제 17: 1세대부터 열성",
        difficulty: "medium",
        description: "1세대부터 열성 형질이 나타나는 가계도입니다.",
        members: [
            { id: 1, x: 250, y: 80, gender: 'male', affected: true, genotype: 'aa' },
            { id: 2, x: 350, y: 80, gender: 'female', affected: false, genotype: 'Aa' },
            { id: 3, x: 600, y: 80, gender: 'male', affected: false, genotype: 'Aa' },
            { id: 4, x: 700, y: 80, gender: 'female', affected: true, genotype: 'aa' },
            { id: 5, x: 300, y: 220, gender: 'male', affected: true, genotype: 'aa' },
            { id: 6, x: 650, y: 220, gender: 'female', affected: true, genotype: 'aa' },
            { id: 7, x: 400, y: 360, gender: 'male', affected: true, genotype: 'aa' },
            { id: 8, x: 550, y: 360, gender: 'female', affected: true, genotype: 'aa' }
        ],
        connections: [
            { from: 1, to: 2, type: 'marriage' },
            { from: 3, to: 4, type: 'marriage' },
            { from: 5, to: 6, type: 'marriage' },
            { parent1: 1, parent2: 2, children: [5] },
            { parent1: 3, parent2: 4, children: [6] },
            { parent1: 5, parent2: 6, children: [7, 8] }
        ]
    }
];

let currentProblem = null;
let userAnswers = {};
let selectedMember = null;

window.addEventListener('DOMContentLoaded', () => {
    displayProblemList();
});

// 랜덤 문제 로드 함수
function loadRandomProblem() {
    const randomIndex = Math.floor(Math.random() * problems.length);
    loadProblem(problems[randomIndex].id);
}

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

function loadProblem(problemId) {
    currentProblem = problems.find(p => p.id === problemId);
    if (!currentProblem) return;

    userAnswers = {};
    selectedMember = null;
    
    document.getElementById('currentProblem').style.display = 'block';
    document.getElementById('problemTitle').textContent = currentProblem.title;
    document.getElementById('problemDescription').textContent = currentProblem.description;
    document.getElementById('results').style.display = 'none';
    document.getElementById('hintBox').style.display = 'none';

    drawPedigree();
    updateMemberList();

    document.getElementById('currentProblem').scrollIntoView({ behavior: 'smooth' });
}

function drawPedigree() {
    if (!currentProblem) return;

    const canvas = document.getElementById('pedigreeCanvas');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

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

    currentProblem.members.forEach(member => {
        ctx.lineWidth = 3;
        
        if (selectedMember === member.id) {
            ctx.strokeStyle = '#667eea';
            ctx.lineWidth = 5;
        } else {
            ctx.strokeStyle = '#2d3748';
            ctx.lineWidth = 3;
        }

        if (member.gender === 'male') {
            ctx.strokeRect(member.x - 25, member.y - 25, 50, 50);
            
            if (member.affected) {
                ctx.fillStyle = ctx.createPattern(createHatchPattern(), 'repeat');
                ctx.fillRect(member.x - 25, member.y - 25, 50, 50);
            }
        } else {
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

        ctx.fillStyle = '#2d3748';
        ctx.font = 'bold 16px sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(member.id, member.x, member.y);
        
        const userAnswer = userAnswers[member.id];
        if (userAnswer && userAnswer !== 'unknown') {
            ctx.fillStyle = '#667eea';
            ctx.font = 'bold 14px sans-serif';
            ctx.fillText(userAnswer, member.x, member.y + 40);
        }
    });
}

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

document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('pedigreeCanvas');
    
    canvas.addEventListener('click', (e) => {
        if (!currentProblem) return;
        
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const clickedMember = currentProblem.members.find(member => {
            const dx = x - member.x;
            const dy = y - member.y;
            return Math.sqrt(dx * dx + dy * dy) < 25;
        });
        
        if (clickedMember) {
            showDropdownAtMember(clickedMember, e.clientX, e.clientY);
        } else {
            hideDropdown();
        }
    });
});

function showDropdownAtMember(member, clientX, clientY) {
    selectedMember = member.id;
    drawPedigree();
    
    hideDropdown();
    
    const dropdown = document.createElement('div');
    dropdown.id = 'floating-dropdown';
    dropdown.className = 'floating-dropdown';
    
    const currentAnswer = userAnswers[member.id] || '';
    
    dropdown.innerHTML = `
        <div class="dropdown-header">개체 ${member.id}</div>
        <select id="floating-select" onchange="saveAnswerFromDropdown(${member.id}, this.value)">
            <option value="" ${currentAnswer === '' ? 'selected' : ''}>선택하세요</option>
            <option value="AA" ${currentAnswer === 'AA' ? 'selected' : ''}>AA</option>
            <option value="Aa" ${currentAnswer === 'Aa' ? 'selected' : ''}>Aa</option>
            <option value="aa" ${currentAnswer === 'aa' ? 'selected' : ''}>aa</option>
            <option value="unknown" ${currentAnswer === 'unknown' ? 'selected' : ''}>모름</option>
        </select>
    `;
    
    document.body.appendChild(dropdown);
    
    dropdown.style.left = `${clientX - 75}px`;
    dropdown.style.top = `${clientY - 100}px`;
    
    const select = dropdown.querySelector('select');
    setTimeout(() => select.focus(), 100);
}

function hideDropdown() {
    const dropdown = document.getElementById('floating-dropdown');
    if (dropdown) {
        dropdown.remove();
    }
}

function saveAnswerFromDropdown(memberId, answer) {
    userAnswers[memberId] = answer;
    
    const listSelect = document.getElementById(`answer-${memberId}`);
    if (listSelect) {
        listSelect.value = answer;
    }
    
    drawPedigree();
    setTimeout(() => hideDropdown(), 300);
}

function updateMemberList() {
    if (!currentProblem) return;

    const list = document.getElementById('memberList');
    list.innerHTML = '';

    currentProblem.members.forEach(member => {
        const card = document.createElement('div');
        card.className = `member-card ${member.affected ? 'affected' : ''}`;
        card.id = `card-${member.id}`;
        
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
        
        card.addEventListener('click', (e) => {
            if (e.target.tagName !== 'SELECT') {
                selectedMember = member.id;
                drawPedigree();
            }
        });
        
        list.appendChild(card);
    });
}

function saveAnswer(memberId, answer) {
    userAnswers[memberId] = answer;
    drawPedigree();
}

function checkAnswers() {
    if (!currentProblem) return;

    const unanswered = [];
    currentProblem.members.forEach(member => {
        const userAnswer = userAnswers[member.id];
        if (!userAnswer || userAnswer === '') {
            unanswered.push(member.id);
        }
    });

    if (unanswered.length > 0) {
        alert(`모든 개체의 유전자형을 입력해주세요!\n입력하지 않은 개체: ${unanswered.join(', ')}\n\n모르는 경우 "모름"을 선택하세요.`);
        return;
    }

    let correct = 0;
    let total = currentProblem.members.length;
    const details = [];

    currentProblem.members.forEach(member => {
        const userAnswer = userAnswers[member.id];
        
        if (userAnswer === 'unknown') {
            const canBeDetermined = canDetermineGenotype(member);
            
            if (!canBeDetermined) {
                correct++;
                details.push(`<div class="result-item">개체 ${member.id}: ✅ 정답 - 확정할 수 없음</div>`);
            } else {
                details.push(`<div class="result-item">개체 ${member.id}: ❌ 오답 - 확정 가능함, 정답: ${member.genotype}</div>`);
            }
        } else {
            if (userAnswer === member.genotype) {
                correct++;
                details.push(`<div class="result-item">개체 ${member.id}: ✅ 정답 (${member.genotype})</div>`);
            } else {
                details.push(`<div class="result-item">개체 ${member.id}: ❌ 오답 - 입력: ${userAnswer}, 정답: ${member.genotype}</div>`);
            }
        }
    });

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
    resultsDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function canDetermineGenotype(member) {
    if (member.affected) return true;
    
    const hasAffectedChild = hasChildWithGenotype(member, 'aa');
    if (hasAffectedChild) return true;
    
    const hasAffectedParent = hasParentWithGenotype(member, 'aa');
    if (hasAffectedParent) return true;
    
    const spouseIsAffected = isSpouseAffected(member);
    const allChildrenUnaffected = areAllChildrenUnaffected(member);
    if (spouseIsAffected && allChildrenUnaffected && hasChildren(member)) return true;
    
    return false;
}

function hasChildWithGenotype(member, genotype) {
    const childConnections = currentProblem.connections.filter(conn => 
        conn.parent1 === member.id || conn.parent2 === member.id
    );
    
    for (const conn of childConnections) {
        if (conn.children) {
            for (const childId of conn.children) {
                const child = currentProblem.members.find(m => m.id === childId);
                if (child && child.genotype === genotype) return true;
            }
        }
    }
    return false;
}

function hasParentWithGenotype(member, genotype) {
    const parentConnection = currentProblem.connections.find(conn => 
        conn.children && conn.children.includes(member.id)
    );
    
    if (parentConnection) {
        const parent1 = currentProblem.members.find(m => m.id === parentConnection.parent1);
        const parent2 = currentProblem.members.find(m => m.id === parentConnection.parent2);
        
        if ((parent1 && parent1.genotype === genotype) || (parent2 && parent2.genotype === genotype)) {
            return true;
        }
    }
    return false;
}

function isSpouseAffected(member) {
    const marriageConn = currentProblem.connections.find(conn => 
        conn.type === 'marriage' && (conn.from === member.id || conn.to === member.id)
    );
    
    if (marriageConn) {
        const spouseId = marriageConn.from === member.id ? marriageConn.to : marriageConn.from;
        const spouse = currentProblem.members.find(m => m.id === spouseId);
        return spouse && spouse.affected;
    }
    return false;
}

function areAllChildrenUnaffected(member) {
    const childConnections = currentProblem.connections.filter(conn => 
        (conn.parent1 === member.id || conn.parent2 === member.id) && conn.children
    );
    
    if (childConnections.length === 0) return false;
    
    for (const conn of childConnections) {
        for (const childId of conn.children) {
            const child = currentProblem.members.find(m => m.id === childId);
            if (child && child.affected) return false;
        }
    }
    return true;
}

function hasChildren(member) {
    const childConnections = currentProblem.connections.filter(conn => 
        (conn.parent1 === member.id || conn.parent2 === member.id) && conn.children
    );
    return childConnections.length > 0 && childConnections.some(conn => conn.children.length > 0);
}

function showHintBox() {
    const hintBox = document.getElementById('hintBox');
    hintBox.style.display = hintBox.style.display === 'none' ? 'block' : 'none';
    
    if (hintBox.style.display === 'block') {
        hintBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
}

function resetProblem() {
    if (!currentProblem) return;
    
    if (confirm('입력한 답변을 모두 지우고 다시 풀까요?')) {
        userAnswers = {};
        selectedMember = null;
        
        currentProblem.members.forEach(member => {
            const select = document.getElementById(`answer-${member.id}`);
            if (select) {
                select.value = '';
            }
        });
        
        document.getElementById('results').style.display = 'none';
        document.getElementById('hintBox').style.display = 'none';
        drawPedigree();
    }
}
