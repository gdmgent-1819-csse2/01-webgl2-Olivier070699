export default class Matrix2
{
    constructor() {
        this.items = items || [
            a[0], a[1],
            a[2], a[3],
        ]
    }

    add2(b)
    {
        const a = this.items
        this.items = [
            a[0] + b[0], a[1] + b[1],
            a[2] + b[2], a[3] + b[3],
        ]
    }


    sub2(b)
    {
        const a = this.items
        this.items = [
            a[0] - b[0], a[1] - b[1],
            a[2] - b[2], a[3] - b[3],
        ]
    }


    mul2(b)
    {
        const a = this.items
        const c = []

        this.items = [
            c[0] = a[0] * b[0] + a[1] * b[3],
            c[1] = a[0] * b[0] + a[1] * b[3],
            c[2] = a[2] * b[0] + a[3] * b[2],
            c[3] = a[2] * b[0] + a[3] * b[2],
            this.items = c,
        ]
    }

    rot2(d){
        d *= Math.PI / 180;
        const cos = Math.cos(d);
        const sin = Math.sin(d);

        const result = [
            cos, -sin,
            sin, cos,
        ]
        this.mul2(result);
    }
}