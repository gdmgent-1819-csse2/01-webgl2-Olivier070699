export default class Vector3 {
    /**
     * 3D VECTOR
     * @param {*} x 
     * @param {*} y 
     * @param {*} z 
     */
    constructor(x, y, z, w) {
        this.x = Number(x) || 0;
        this.y = Number(y) || 0;
        this.z = Number(z) || 0;
        this.w = Number(w) || 0;
    }

    norm4() {
        return Math.sqrt(this.x ** 2 + this.y ** 2 + this.z ** 2 + this.w ** 2)
    }

    normConvert4() {
        const norm = Math.sqrt(this.x ** 2 + this.y ** 2 + this.z ** 2 + this.w ** 2)
        return (this.x/norm + this.y/norm + this.z/norm + this.w/norm)
    }

    add4(v) {
        this.x += v.x
        this.y += v.y
        this.z += v.z
        this.w += v.w
    }

    sub4(v) {
        this.x -= v.x
        this.y -= v.y 
        this.z -= v.z
        this.w -= v.w
    }

    scaler4(a) {
        this.x *= a.x
        this.y *= a.y
        this.z *= a.z
        this.w *= a.w
    }

    dot4(v) {
        return (this.x * v.x) + (this.y * v.y) + (this.z * v.z) + (this.w * v.w)
    }
}