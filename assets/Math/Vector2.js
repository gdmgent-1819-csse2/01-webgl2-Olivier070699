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

    norm() {
        return Math.sqrt(this.x**2 + this.y**2)
    }

    add(v) {
        this.x += v.x
        this.y += v.y
    }

    sub(v) {
        this.x -= v.x
        this.y -= v.y  
    }

    scaler(a) {
        this.x *= a.x
        this.y *= a.y
    }

    dot(v) {
        return (this.x * v.x) + (this.y * v.y)
    }
}