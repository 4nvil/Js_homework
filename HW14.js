var services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн",
    price: function() {
        let totalPrice = 0;
        for (let service in this) {
            if (typeof this[service] === 'string') {
                // Видаляємо "грн" з рядка та перетворюємо його в число
                totalPrice += parseInt(this[service].replace(" грн", ""));
            }
        }
        return totalPrice;
    },
    minPrice: function() {
        let min = 0;
        for (let service in this) {
            if (typeof this[service] === 'string') {
                let price = parseInt(this[service].replace(" грн", ""));
                if (price < min) {
                    min = price;
                }
            }
        }
        return min;
    },
    maxPrice: function() {
        let max = 0;
        for (let service in this) {
            if (typeof this[service] === 'string') {
                let price = parseInt(this[service].replace(" грн", ""));
                if (price > max) {
                    max = price;
                }
            }
        }
        return max;
    }
};

console.log("Загальна вартість наданих послуг:", services.price() + " грн");
console.log("Мінімальна вартість послуги:", services.minPrice() + " грн");
console.log("Максимальна вартість послуги:", services.maxPrice() + " грн");

services['Розбити скло'] = "200 грн";

console.log("Загальна вартість наданих послуг:", services.price() + " грн");
console.log("Мінімальна вартість послуги:", services.minPrice() + " грн");
console.log("Максимальна вартість послуги:", services.maxPrice() + " грн");
