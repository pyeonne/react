const meal = {
    한식: '불고기',
    중식: '멘보샤',
    일식: '초밥',
    양식: '스테이크',
    인도식: '카레',
};

const getMeal = mealType => meal[mealType] || '굶기';

console.log(getMeal('중식'));
console.log(getMeal());
