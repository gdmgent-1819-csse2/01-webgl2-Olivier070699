export default class Matrix2
{
    constructor() {
        this.items = items || [
            a[0], a[1], a[2],
            a[3], a[4], a[5],
            a[6], a[7], a[8],
        ]
    }

    add3(b)
    {
        const a = this.items
        this.items = [
            a[0] + b[0], a[1] + b[1], a[2] + b[2],
            a[3] + b[3], a[4] + b[4], a[5] + b[5],
            a[6] + b[6], a[7] + b[7], a[8] + b[8],
        ]
    }


    sub3(b)
    {
        const a = this.items
        this.items = [
            a[0] - b[0], a[1] - b[1], a[2] - b[2],
            a[3] - b[3], a[4] - b[4], a[5] - b[5],
            a[6] - b[6], a[7] - b[7], a[8] - b[8],
        ]
    }


    mul3(b)
    {
        const a = this.items
        const c = []

        this.items = [
            c[0] = a[0] * b[0] + a[1] * b[3] + a[2] * b[6],
            c[1] = a[0] * b[1] + a[1] * b[4] + a[2] * b[7],
            c[2] = a[0] * b[2] + a[3] * b[5] + a[2] * b[8],

            c[3] = a[3] * b[0] + a[4] * b[3] + a[5] * b[6],
            c[4] = a[3] * b[1] + a[4] * b[4] + a[5] * b[7],
            c[5] = a[3] * b[2] + a[4] * b[5] + a[5] * b[8], 

            c[6] = a[6] * b[0] + a[7] * b[3] + a[8] * b[6],
            c[7] = a[6] * b[1] + a[7] * b[4] + a[8] * b[7],
            c[8] = a[6] * b[2] + a[7] * b[5] + a[8] * b[8],
            this.items = c,
        ]
    }

    rot3(d){
        d *= Math.PI / 180;
        const cos = Math.cos(d);
        const sin = Math.sin(d);

        const result = [
            cos, -sin, 0,
            sin, cos, 0,
            0, 0, 1
        ]
        this.mul3(result);
    }
}