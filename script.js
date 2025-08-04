// 1. Создаем массив с 12 случайными оценками от 1 до 100
const grades = Array.from({length: 12}, () => Math.floor(Math.random() * 100) + 1);

console.log("Сгенерированные оценки:", grades);

// 2. Рассчитываем средний балл (используем reduce для суммирования)
const averageGrade = grades.reduce((sum, grade) => sum + grade, 0) / grades.length;
console.log("Средний балл:", averageGrade.toFixed(2)); // Округляем до 2 знаков

// 3. Находим максимальный балл (используем Math.max с spread оператором)
const maxGrade = Math.max(...grades);
console.log("Максимальный балл:", maxGrade);

// 4. Находим минимальный балл (используем Math.min с spread оператором)
const minGrade = Math.min(...grades);
console.log("Минимальный балл:", minGrade);

// 5. Считаем количество положительных оценок (>= 60)
const positiveGrades = grades.filter(grade => grade >= 60);
console.log("Количество положительных оценок (A/B):", positiveGrades.length);

// 6. Считаем количество отрицательных оценок (< 60)
const negativeGrades = grades.filter(grade => grade < 60);
console.log("Количество отрицательных оценок (C/D/E):", negativeGrades.length);

// 7. Преобразуем числовые оценки в буквенные
const letterGrades = grades.map(grade => {
    if (grade >= 80) return "A";
    if (grade >= 60) return "B";
    if (grade >= 40) return "C";
    if (grade >= 20) return "D";
    return "E";
});

console.log("Буквенные оценки:", letterGrades);

// Дополнительно: выводим все данные в виде таблицы
console.table({
    "Все оценки": grades,
    "Буквенные оценки": letterGrades,
    "Средний балл": averageGrade.toFixed(2),
    "Максимальный балл": maxGrade,
    "Минимальный балл": minGrade,
    "Положительные оценки (A/B)": positiveGrades.length,
    "Отрицательные оценки (C/D/E)": negativeGrades.length
});