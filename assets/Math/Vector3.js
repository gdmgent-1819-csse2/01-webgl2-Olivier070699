export default class Vector3 {
    /**
     * 3D VECTOR
     * @param {*} x 
     * @param {*} y 
     * @param {*} z 
     */
    constructor(x, y, z) {
        this.x = Number(x) || 0;
        this.y = Number(y) || 0;
        this.z = Number(z) || 0;
    }

    norm3() {
        return Math.sqrt(this.x ** 2 + this.y ** 2 + this.z ** 2)
    }

    normConvert3() {
        const norm = Math.sqrt(this.x ** 2 + this.y ** 2 + this.z ** 2)
        return (this.x/norm + this.y/norm + this.z/norm)
    }

    add3(v) {
        this.x += v.x
        this.y += v.y
        this.z += v.z
    }

    sub3(v) {
        this.x -= v.x
        this.y -= v.y 
        this.z -= v.z
    }

    scaler3(a) {
        this.x *= a.x
        this.y *= a.y
        this.z *= a.z
    }

    dot3(v) {
        return (this.x * v.x) + (this.y * v.y) + (this.z * v.z)
    }
}