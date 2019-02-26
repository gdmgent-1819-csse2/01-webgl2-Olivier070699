import Vector2 from "../Math/Vector2.js"

export default class Application
{
    constructor()
    {
        console.info('WebGL2 Demo')
        const v1 = new Vector2
        const v2 = new Vector2(1.5, 2.5)
        console.log('start:', v1, v2)

        v1.sub(v2)
        console.log(v1, v2)
        
        v1.scalar(v2)
        console.log(v1, v2)

        console.log('norm of v1:', v1.norm())
        const v3 = new Vector2(3,5)
        const v4 = new Vector2(5,3)
        const v5 = new Vector2(-3, -5)
        
        console.log('v3 . v4:', v3.dot(v4))
        console.log('v5 . v6:', v3.dot(v5))
    }
}
