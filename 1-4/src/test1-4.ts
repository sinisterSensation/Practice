// task1
function test1 (x: number, y: number):boolean {
    if ((x > 0.75 && x < 2.5) && (x > 0.75 && y < 2.5)) {
        return true;
    }
    return false;
}

console.log(test1(0.7, 6))
console.log(test1(2, 1))
console.log(test1(6, 6))

//task2
function SolveLn(x: number) {
    let full = Math.log(1 + x);
    let notfull = 0;
    
    for (let n = 1; n <= 20; n++) {
    notfull += (Math.pow(-1, n - 1) * Math.pow(x, n)) / n;
    }
    
    console.log(`Точное значение: ${full}`);
    console.log(`Вычисленное значение: ${Math.round(notfull * 1000) / 1000}`);
    }
    
    SolveLn(0.4)


//task3
function test3 (mat1: number[][], mat2: number[][]): number[][] {
    const c1 = mat1[0][0] * mat2[0][0] + mat1[0][1] * mat2[1][0]  
    const c2 = mat1[0][0] * mat2[0][1] + mat1[0][1] * mat2[1][1]  
    const c3 = mat1[1][0] * mat2[0][0] + mat1[1][1] * mat2[1][0]  
    const c4 = mat1[1][0] * mat2[0][1] + mat1[1][1] * mat2[1][1]  
    
    return [[c1,c2],[c3,c4]];
}

console.log(test3([[1, 2], [3, 4]], [[5, 6], [7, 8]]))



// task4
const fibonachi = ((n: number): number => {
    if (n <= 1) {
        // console.error('error: n <= 1!!!')
        return n;
    } 
    return fibonachi(n - 1) + fibonachi(n - 2);
})

console.log(fibonachi(20))
