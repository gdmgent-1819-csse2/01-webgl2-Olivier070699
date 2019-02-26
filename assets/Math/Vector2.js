export default class Vector2
{
    /**
     * 2D VECTOR
     * @param {*} x 
     * @param {*} y 
     */
    constructor(x, y)
    {
        this.x = Number(x) || 0;
        this.y = Number(y) || 0;
    }

    norm2() {
        return Math.sqrt(this.x**2 + this.y**2)
    }

    add2(v) {
        this.x += v.x
        this.y += v.y
    }

    sub2(v) {
        this.x -= v.x
        this.y -= v.y  
    }

    scaler2(a) {
        this.x *= a.x
        this.y *= a.y
    }

    dot2(v) {
        return (this.x * v.x) + (this.y * v.y)
    }
}