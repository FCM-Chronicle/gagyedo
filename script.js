// 가계도 문제 데이터 - 모두 3세대 가정형
const problems = [
    {
        id: 1,
        title: "문제 1: 기본 3세대 (양쪽 조부모)",
        difficulty: "easy",
        description: "양쪽 조부모가 모두 있는 3세대 가계도입니다. 열성 형질의 유전 양상을 분석하세요.",
        members: [
            // 1세대 - 조부모
            { id: 1, x: 200, y: 80, gender: 'male', affected: false, genotype: 'Aa' },
            { id: 2, x: 300, y: 80, gender: 'female', affected: false, genotype: 'Aa' },
            { id: 3, x: 600, y: 80, gender: 'male', affected: false, genotype: 'Aa' },
            { id: 4, x: 700, y: 80, gender: 'female', affected: false, genotype: 'Aa' },
            // 2세대 - 부모
            { id: 5, x: 250, y: 220, gender: 'male', affected: false, genotype: 'Aa' },
            { id: 6, x: 650, y: 220, gender: 'female', affected: false, genotype: 'Aa' },
            // 3세대 - 자녀
            { id: 7, x: 350, y: 360, gender: 'male', affected: false, genotype: 'AA' },
            { id: 8, x: 450, y: 360, gender: 'female', affected: true, genotype: 'aa' },
            { id: 9, x: 550, y: 360, gender: 'male', affected: false, genotype: 'Aa' }
        ],
        connections: [
            { from: 1, to: 2, type: 'marriage' },
            { from: 3, to: 4, type: 'marriage' },
            { from: 5, to: 6, type: 'marriage' },
            { parent1: 1, parent2: 2, children: [5] },
            { parent1: 3, parent2: 4, children: [6] },
            { parent1: 5, parent2: 6, children: [7, 8, 9] }
        ]
    },
    {
        id: 2,
        title: "문제 2: 한쪽 조부모만 있는 가계도",
        difficulty: "easy",
        description: "아버지 쪽 조부모만 있는 3세대 가계도입니다.",
        members: [
            // 1세대
            { id: 1, x: 250, y: 80, gender: 'male', affected: false, genotype: 'Aa' },
            { id: 2, x: 350, y: 80, gender: 'female', affected: false, genotype: 'Aa' },
            // 2세대
            { id: 3, x: 300, y: 220, gender: 'male', affected: false, genotype: 'Aa' },
            { id: 4, x: 500, y: 220, gender: 'female', affected: true, genotype: 'aa' },
            // 3세대
            { id: 5, x: 300, y: 360, gender: 'female', affected: false, genotype: 'Aa' },
            { id: 6, x: 400, y: 360, gender: 'male', affected: true, genotype: 'aa' },
            { id: 7, x: 500, y: 360, gender: 'female', affected: false, genotype: 'Aa' }
        ],
        connections: [
            { from: 1, to: 2, type: 'marriage' },
            { from: 3, to: 4, type: 'marriage' },
            { parent1: 1, parent2: 2, children: [3] },
            { parent1: 3, parent2: 4, children: [5, 6, 7] }
        ]
    },
    {
        id: 3,
        title: "문제 3: 두 가족의 3세대",
        difficulty: "medium",
        description: "2세대에 형제가 각각 결혼하여 자녀를 둔 복잡한 가계도입니다.",
        members: [
            // 1세대
            { id: 1, x: 250, y: 60, gender: 'male', affected: false, genotype: 'Aa' },
            { id: 2, x: 350, y: 60, gender: 'female', affected: false, genotype: 'Aa' },
            { id: 3, x: 550, y: 60, gender: 'male', affected: false, genotype: 'AA' },
            { id: 4, x: 650, y: 60, gender: 'female', affected: false, genotype: 'Aa' },
            // 2세대
            { id: 5, x: 200, y: 200, gender: 'male', affected: false, genotype: 'AA' },
            { id: 6, x: 300, y: 200, gender: 'female', affected: true, genotype: 'aa' },
            { id: 7, x: 400, y: 200, gender: 'male', affected: false, genotype: 'Aa' },
            { id: 8, x: 500, y: 200, gender: 'female', affected: false, genotype: 'Aa' },
            // 3세대
            { id: 9, x: 150, y: 340, gender: 'female', affected: false, genotype: 'Aa' },
            { id: 10, x: 250, y: 340, gender: 'male', affected: true, genotype: 'aa' },
            { id: 11, x: 400, y: 340, gender: 'male', affected: false, genotype: 'Aa' },
            { id: 12, x: 500, y: 340, gender: 'female', affected: false, genotype: 'Aa' }
        ],
        connections: [
            { from: 1, to: 2, type: 'marriage' },
            { from: 3, to: 4, type: 'marriage' },
            { from: 5, to: 6, type: 'marriage' },
            { from: 7, to: 8, type: 'marriage' },
            { parent1: 1, parent2: 2, children: [5, 7] },
            { parent1: 3, parent2: 4, children: [8] },
            { parent1: 5, parent2: 6, children: [9, 10] },
            { parent1: 7, parent2: 8, children: [11, 12] }
        ]
    },
    {
        id: 4,
        title: "문제 4: 대가족 3세대",
        difficulty: "medium",
        description: "3세대에 많은 자녀가 있는 대가족 가계도입니다.",
        members: [
            // 1세대
            { id: 1, x: 200, y: 70, gender: 'male', affected: false, genotype: 'Aa' },
            { id: 2, x: 300, y: 70, gender: 'female', affected: false, genotype: 'Aa' },
            { id: 3, x: 600, y: 70, gender: 'male', affected: false, genotype: 'Aa' },
            { id: 4, x: 700, y: 70, gender: 'female', affected: false, genotype: 'Aa' },
            // 2세대
            { id: 5, x: 250, y: 210, gender: 'male', affected: false, genotype: 'Aa' },
            { id: 6, x: 650, y: 210, gender: 'female', affected: false, genotype: 'Aa' },
            // 3세대
            { id: 7, x: 250, y: 350, gender: 'male', affected: false, genotype: 'AA' },
            { id: 8, x: 350, y: 350, gender: 'female', affected: false, genotype: 'Aa' },
            { id: 9, x: 450, y: 350, gender: 'male', affected: true, genotype: 'aa' },
            { id: 10, x: 550, y: 350, gender: 'female', affected: false, genotype: 'Aa' },
            { id: 11, x: 650, y: 350, gender: 'male', affected: false, genotype: 'AA' }
        ],
        connections: [
            { from: 1, to: 2, type: 'marriage' },
            { from: 3, to: 4, type: 'marriage' },
            { from: 5, to: 6, type: 'marriage' },
            { parent1: 1, parent2: 2, children: [5] },
            { parent1: 3, parent2: 4, children: [6] },
            { parent1: 5, parent2: 6, children: [7, 8, 9, 10, 11] }
        ]
    },
    {
        id: 5,
        title: "문제 5: 열성 형질이 많은 가계도",
        difficulty: "medium",
        description: "여러 세대에 걸쳐 열성 형질 보유자가 나타나는 가계도입니다.",
        members: [
            // 1세대
            { id: 1, x: 200, y: 70, gender: 'male', affected: true, genotype: 'aa' },
            { id: 2, x: 300, y: 70, gender: 'female', affected: false, genotype: 'Aa' },
            { id: 3, x: 600, y: 70, gender: 'male', affected: false, genotype: 'Aa' },
            { id: 4, x: 700, y: 70, gender: 'female', affected: true, genotype: 'aa' },
            // 2세대
            { id: 5, x: 250, y: 210, gender: 'male', affected: true, genotype: 'aa' },
            { id: 6, x: 650, y: 210, gender: 'female', affected: true, genotype: 'aa' },
            // 3세대
            { id: 7, x: 350, y: 350, gender: 'female', affected: true, genotype: 'aa' },
            { id: 8, x: 450, y: 350, gender: 'male', affected: true, genotype: 'aa' },
            { id: 9, x: 550, y: 350, gender: 'female', affected: true, genotype: 'aa' }
        ],
        connections: [
            { from: 1, to: 2, type: 'marriage' },
            { from: 3, to: 4, type: 'marriage' },
            { from: 5, to: 6, type: 'marriage' },
            { parent1: 1, parent2: 2, children: [5] },
            { parent1: 3, parent2: 4, children: [6] },
            { parent1: 5, parent2: 6, children: [7, 8, 9] }
        ]
    },
    {
        id: 6,
        title: "문제 6: 복잡한 양쪽 조부모",
        difficulty: "hard",
        description: "양쪽 조부모가 모두 있고 2세대에 형제자매가 있는 복잡한 가계도입니다.",
        members: [
            // 1세대
            { id: 1, x: 150, y: 60, gender: 'male', affected: false, genotype: 'Aa' },
            { id: 2, x: 250, y: 60, gender: 'female', affected: false, genotype: 'Aa' },
            { id: 3, x: 650, y: 60, gender: 'male', affected: false, genotype: 'AA' },
            { id: 4, x: 750, y: 60, gender: 'female', affected: false, genotype: 'Aa' },
            // 2세대
            { id: 5, x: 150, y: 200, gender: 'male', affected: false, genotype: 'AA' },
            { id: 6, x: 250, y: 200, gender: 'female', affected: true, genotype: 'aa' },
            { id: 7, x: 350, y: 200, gender: 'male', affected: false, genotype: 'Aa' },
            { id: 8, x: 650, y: 200, gender: 'female', affected: false, genotype: 'Aa' },
            // 3세대
            { id: 9, x: 200, y: 340, gender: 'male', affected: false, genotype: 'Aa' },
            { id: 10, x: 300, y: 340, gender: 'female', affected: true, genotype: 'aa' },
            { id: 11, x: 450, y: 340, gender: 'female', affected: false, genotype: 'Aa' },
            { id: 12, x: 550, y: 340, gender: 'male', affected: false, genotype: 'AA' }
        ],
        connections: [
            { from: 1, to: 2, type: 'marriage' },
            { from: 3, to: 4, type: 'marriage' },
            { from: 5, to: 6, type: 'marriage' },
            { from: 7, to: 8, type: 'marriage' },
            { parent1: 1, parent2: 2, children: [5, 6] },
            { parent1: 3, parent2: 4, children: [8] },
            { parent1: 5, parent2: 6, children: [9, 10] },
            { parent1: 7, parent2: 8, children: [11, 12] }
        ]
    },
    {
        id: 7,
        title: "문제 7: 격세유전 패턴",
        difficulty: "medium",
        description: "1세대는 우성, 2세대도 우성, 3세대에 열성이 나타나는 가계도입니다.",
        members: [
            // 1세대
            { id: 1, x: 200, y: 70, gender: 'male', affected: false, genotype: 'Aa' },
            { id: 2, x: 300, y: 70, gender: 'female', affected: false, genotype: 'Aa' },
            { id: 3, x: 600, y: 70, gender: 'male', affected: false, genotype: 'Aa' },
            { id: 4, x: 700, y: 70, gender: 'female', affected: false, genotype: 'Aa' },
            // 2세대
            { id: 5, x: 250, y: 210, gender: 'male', affected: false, genotype: 'Aa' },
            { id: 6, x: 650, y: 210, gender: 'female', affected: false, genotype: 'Aa' },
            // 3세대
            { id: 7, x: 300, y: 350, gender: 'female', affected: false, genotype: 'AA' },
            { id: 8, x: 400, y: 350, gender: 'male', affected: true, genotype: 'aa' },
            { id: 9, x: 500, y: 350, gender: 'female', affected: false, genotype: 'Aa' },
            { id: 10, x: 600, y: 350, gender: 'male', affected: false, genotype: 'Aa' }
        ],
        connections: [
            { from: 1, to: 2, type: 'marriage' },
            { from: 3, to: 4, type: 'marriage' },
            { from: 5, to: 6, type: 'marriage' },
            { parent1: 1, parent2: 2, children: [5] },
            { parent1: 3, parent2: 4, children: [6] },
            { parent1: 5, parent2: 6, children: [7, 8, 9, 10] }
        ]
    },
    {
        id: 8,
        title: "문제 8: 어머니 쪽 조부모만",
        difficulty: "easy",
        description: "어머니 쪽 조부모만 있는 3세대 가계도입니다.",
        members: [
            // 1세대
            { id: 1, x: 550, y: 80, gender: 'male', affected: false, genotype: 'Aa' },
            { id: 2, x: 650, y: 80, gender: 'female', affected: false, genotype: 'Aa' },
            // 2세대
            { id: 3, x: 300, y: 220, gender: 'male', affected: false, genotype: 'AA' },
            { id: 4, x: 600, y: 220, gender: 'female', affected: false, genotype: 'Aa' },
            // 3세대
            { id: 5, x: 350, y: 360, gender: 'male', affected: false, genotype: 'AA' },
            { id: 6, x: 450, y: 360, gender: 'female', affected: false, genotype: 'Aa' },
            { id: 7, x: 550, y: 360, gender: 'male', affected: true, genotype: 'aa' }
        ],
        connections: [
            { from: 1, to: 2, type: 'marriage' },
            { from: 3, to: 4, type: 'marriage' },
            { parent1: 1, parent2: 2, children: [4] },
            { parent1: 3, parent2: 4, children: [5, 6, 7] }
        ]
    },
    {
        id: 9,
        title: "문제 9: 3가족 확장형",
        difficulty: "hard",
        description: "2세대에 3명의 형제자매가 각각 가정을 꾸린 대가족입니다.",
        members: [
            // 1세대
            { id: 1, x: 250, y: 50, gender: 'male', affected: false, genotype: 'Aa' },
            { id: 2, x: 350, y: 50, gender: 'female', affected: false, genotype: 'Aa' },
            { id: 3, x: 550, y: 50, gender: 'male', affected: false, genotype: 'Aa' },
            { id: 4, x: 650, y: 50, gender: 'female', affected: false, genotype: 'Aa' },
            { id: 5, x: 850, y: 50, gender: 'male', affected: false, genotype: 'AA' },
            { id: 6, x: 950, y: 50, gender: 'female', affected: false, genotype: 'Aa' },
            // 2세대
            { id: 7, x: 200, y: 190, gender: 'male', affected: false, genotype: 'Aa' },
            { id: 8, x: 400, y: 190, gender: 'female', affected: false, genotype: 'Aa' },
            { id: 9, x: 600, y: 190, gender: 'male', affected: false, genotype: 'Aa' },
            { id: 10, x: 800, y: 190, gender: 'female', affected: false, genotype: 'Aa' },
            // 3세대
            { id: 11, x: 150, y: 330, gender: 'female', affected: false, genotype: 'AA' },
            { id: 12, x: 250, y: 330, gender: 'male', affected: true, genotype: 'aa' },
            { id: 13, x: 500, y: 330, gender: 'male', affected: false, genotype: 'Aa' },
            { id: 14, x: 600, y: 330, gender: 'female', affected: true, genotype: 'aa' },
            { id: 15, x: 800, y: 330, gender: 'male', affected: false, genotype: 'AA' }
        ],
        connections: [
            { from: 1, to: 2, type: 'marriage' },
            { from: 3, to: 4, type: 'marriage' },
            { from: 5, to: 6, type: 'marriage' },
            { from: 7, to: 8, type: 'marriage' },
            { from: 9, to: 10, type: 'marriage' },
            { parent1: 1, parent2: 2, children: [7] },
            { parent1: 3, parent2: 4, children: [8, 9] },
            { parent1: 5, parent2: 6, children: [10] },
            { parent1: 7, parent2: 8, children: [11, 12] },
            { parent1: 9, parent2: 10, children: [13, 14] },
            { parent1: 9, parent2: 10, children: [15] }
        ]
    },
    {
        id: 10,
        title: "문제 10: 양쪽 대가족",
        difficulty: "hard",
        description: "양쪽 조부모의 자녀가 많고 3세대도 많은 복잡한 대가족입니다.",
        members: [
            // 1세대
            { id: 1, x: 150, y: 60, gender: 'male', affected: false, genotype: 'Aa' },
            { id: 2, x: 250, y: 60, gender: 'female', affected: false, genotype: 'Aa' },
            { id: 3, x: 650, y: 60, gender: 'male', affected: false, genotype: 'Aa' },
            { id: 4, x: 750, y: 60, gender: 'female', affected: false, genotype: 'Aa' },
            // 2세대
            { id: 5, x: 100, y: 200, gender: 'male', affected: false, genotype: 'AA' },
            { id: 6, x: 200, y: 200, gender: 'female', affected: false, genotype: 'Aa' },
            { id: 7, x: 300, y: 200, gender: 'male', affected: true, genotype: 'aa' },
            { id: 8, x: 550, y: 200, gender: 'female', affected: false, genotype: 'Aa' },
            { id: 9, x: 650, y: 200, gender: 'male', affected: false, genotype: 'Aa' },
            { id: 10, x: 750, y: 200, gender: 'female', affected: false, genotype: 'AA' },
            // 3세대
            { id: 11, x: 200, y: 340, gender: 'male', affected: false, genotype: 'AA' },
            { id: 12, x: 300, y: 340, gender: 'female', affected: false, genotype: 'Aa' },
            { id: 13, x: 500, y: 340, gender: 'male', affected: false, genotype: 'Aa' },
            { id: 14, x: 600, y: 340, gender: 'female', affected: true, genotype: 'aa' },
            { id: 15, x: 700, y: 340, gender: 'male', affected: false, genotype: 'Aa' }
        ],
        connections: [
            { from: 1, to: 2, type: 'marriage' },
            { from: 3, to: 4, type: 'marriage' },
            { from: 5, to: 6, type: 'marriage' },
            { from: 7, to: 8, type: 'marriage' },
            { from: 9, to: 10, type: 'marriage' },
            { parent1: 1, parent2: 2, children: [5, 6, 7] },
            { parent1: 3, parent2: 4, children: [8, 9, 10] },
            { parent1: 5, parent2: 6, children: [11, 12] },
            { parent1: 7, parent2: 8, children: [13, 14] },
            { parent1: 9, parent2: 10, children: [15] }
        ]
    },
    {
        id: 11,
        title: "문제 11: 균형잡힌 3세대",
        difficulty: "medium",
        description: "양쪽이 균형잡힌 전형적인 3세대 가계도입니다.",
        members: [
            // 1세대
            { id: 1, x: 200, y: 70, gender: 'male', affected: false, genotype: 'Aa' },
            { id: 2, x: 300, y: 70, gender: 'female', affected: false, genotype: 'Aa' },
            { id: 3, x: 600, y: 70, gender: 'male', affected: false, genotype: 'Aa' },
            { id: 4, x: 700, y: 70, gender: 'female', affected: false, genotype: 'Aa' },
            // 2세대
            { id: 5, x: 250, y: 210, gender: 'male', affected: false, genotype: 'Aa' },
            { id: 6, x: 350, y: 210, gender: 'female', affected: false, genotype: 'AA' },
            { id: 7, x: 550, y: 210, gender: 'male', affected: false, genotype: 'Aa' },
            { id: 8, x: 650, y: 210, gender: 'female', affected: false, genotype: 'Aa' },
            // 3세대
            { id: 9, x: 200, y: 350, gender: 'male', affected: false, genotype: 'AA' },
            { id: 10, x: 300, y: 350, gender: 'female', affected: false, genotype: 'Aa' },
            { id: 11, x: 500, y: 350, gender: 'male', affected: true, genotype: 'aa' },
            { id: 12, x: 600, y: 350, gender: 'female', affected: false, genotype: 'Aa' },
            { id: 13, x: 700, y: 350, gender: 'male', affected: false, genotype: 'Aa' }
        ],
        connections: [
            { from: 1, to: 2, type: 'marriage' },
            { from: 3, to: 4, type: 'marriage' },
            { from: 5, to: 6, type: 'marriage' },
            { from: 7, to: 8, type: 'marriage' },
            { parent1: 1, parent2: 2, children: [5, 6] },
            { parent1: 3, parent2: 4, children: [7, 8] },
            { parent1: 5, parent2: 6, children: [9, 10] },
            { parent1: 7, parent2: 8, children: [11, 12, 13] }
        ]
    },
    {
        id: 12,
        title: "문제 12: 최종 도전",
        difficulty: "hard",
        description: "4가족이 연결된 매우 복잡한 3세대 가계도입니다. 모든 분석 기술을 동원하세요!",
        members: [
            // 1세대
            { id: 1, x: 150, y: 50, gender: 'male', affected: false, genotype: 'Aa' },
            { id: 2, x: 250, y: 50, gender: 'female', affected: false, genotype: 'Aa' },
            { id: 3, x: 450, y: 50, gender: 'male', affected: true, genotype: 'aa' },
            { id: 4, x: 550, y: 50, gender: 'female', affected: false, genotype: 'Aa' },
            { id: 5, x: 750, y: 50, gender: 'male', affected: false, genotype: 'AA' },
            { id: 6, x: 850, y: 50, gender: 'female', affected: false, genotype: 'Aa' },
            // 2세대
            { id: 7, x: 100, y: 190, gender: 'male', affected: false, genotype: 'Aa' },
            { id: 8, x: 200, y: 190, gender: 'female', affected: true, genotype: 'aa' },
            { id: 9, x: 300, y: 190, gender: 'male', affected: false, genotype: 'AA' },
            { id: 10, x: 450, y: 190, gender: 'female', affected: true, genotype: 'aa' },
            { id: 11, x: 600, y: 190, gender: 'male', affected: false, genotype: 'Aa' },
            { id: 12, x: 750, y: 190, gender: 'female', affected: false, genotype: 'Aa' },
            // 3세대
            { id: 13, x: 50, y: 330, gender: 'female', affected: false, genotype: 'Aa' },
            { id: 14, x: 150, y: 330, gender: 'male', affected: true, genotype: 'aa' },
            { id: 15, x: 300, y: 330, gender: 'female', affected: false, genotype: 'Aa' },
            { id: 16, x: 450, y: 330, gender: 'male', affected: true, genotype: 'aa' },
            { id: 17, x: 600, y: 330, gender: 'female', affected: false, genotype: 'Aa' },
            { id: 18, x: 700, y: 330, gender: 'male', affected: false, genotype: 'AA' }
        ],
        connections: [
            { from: 1, to: 2, type: 'marriage' },
            { from: 3, to: 4, type: 'marriage' },
            { from: 5, to: 6, type: 'marriage' },
            { from: 7, to: 8, type: 'marriage' },
            { from: 9, to: 10, type: 'marriage' },
            { from: 11, to: 12, type: 'marriage' },
            { parent1: 1, parent2: 2, children: [7, 8] },
            { parent1: 3, parent2: 4, children: [9, 10] },
            { parent1: 5, parent2: 6, children: [11, 12] },
            { parent1: 7, parent2: 8, children: [13, 14] },
            { parent1: 9, parent2: 10, children: [15, 16] },
            { parent1: 11, parent2: 12, children: [17, 18] }
        ]
    }
];

// 현재 선택된 문제
let currentProblem = null;
let userAnswers = {};
let selectedMember = null;

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
    selectedMember = null;
    
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
        
        // 선택된 개체는 강조 표시
        if (selectedMember === member.id) {
            ctx.strokeStyle = '#667eea';
            ctx.lineWidth = 5;
        } else {
            ctx.strokeStyle = '#2d3748';
            ctx.lineWidth = 3;
        }

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
        
        // 사용자가 입력한 유전자형 표시
        const userAnswer = userAnswers[member.id];
        if (userAnswer && userAnswer !== 'unknown') {
            ctx.fillStyle = '#667eea';
            ctx.font = 'bold 14px sans-serif';
            ctx.fillText(userAnswer, member.x, member.y + 40);
        }
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

// 캔버스 클릭 이벤트
document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('pedigreeCanvas');
    
    canvas.addEventListener('click', (e) => {
        if (!currentProblem) return;
        
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        // 클릭한 위치에 있는 개체 찾기
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

// 개체 위에 드롭다운 표시
function showDropdownAtMember(member, clientX, clientY) {
    selectedMember = member.id;
    drawPedigree();
    
    // 기존 드롭다운 제거
    hideDropdown();
    
    // 새 드롭다운 생성
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
    
    // 위치 설정 (개체 위쪽에 표시)
    dropdown.style.left = `${clientX - 75}px`;
    dropdown.style.top = `${clientY - 100}px`;
    
    // 드롭다운 포커스
    const select = dropdown.querySelector('select');
    setTimeout(() => select.focus(), 100);
}

// 드롭다운 숨기기
function hideDropdown() {
    const dropdown = document.getElementById('floating-dropdown');
    if (dropdown) {
        dropdown.remove();
    }
}

// 드롭다운에서 답변 저장
function saveAnswerFromDropdown(memberId, answer) {
    userAnswers[memberId] = answer;
    
    // 목록의 선택 박스도 업데이트
    const listSelect = document.getElementById(`answer-${memberId}`);
    if (listSelect) {
        listSelect.value = answer;
    }
    
    // 선택된 답변을 가계도에 표시
    drawPedigree();
    
    // 드롭다운 숨기기
    setTimeout(() => hideDropdown(), 300);
}

// 구성원 목록 업데이트
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
        
        // 카드 클릭시 해당 개체 선택
        card.addEventListener('click', (e) => {
            if (e.target.tagName !== 'SELECT') {
                selectMember(member.id);
            }
        });
        
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
        selectedMember = null;
        
        // 모든 선택 박스 초기화
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
