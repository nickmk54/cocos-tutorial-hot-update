import { _decorator, Component, Node, sp } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('GamePanel')
export class GamePanel extends Component {
    @property(sp.Skeleton)
    private eSpine: sp.Skeleton = null;

    start() {

    }

    onClickAtt() {
        this.eSpine.setAnimation(0, 'attack', false);
        this.eSpine.addAnimation(0, 'idle', true);
    }

    update(deltaTime: number) {
        
    }
}

