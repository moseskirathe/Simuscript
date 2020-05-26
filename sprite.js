class Sprite {
    constructor(name, x, y, width, height) {
        this.name = name;
        this.type;
        this.likes;
        this.scared_of;
        this.drops;

        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        // direction  0 - up, 1 - bottom, 2 - left, 3 - right
        this.direction = 3;
    }

    // todo add likes / and fears

     move() {
        this.direction = Math.floor(Math.random() * 4);

         if (this.x >= (this.width - 1)) {
             this.x --;
         } else if (this.x <= 0) {
             this.x ++;
         } else if (this.y >= (this.height - 1)) {
             this.y --;
         } else if (this.y <= 0) {
             this.y ++;
         }

         switch(this.direction) {
             // up
             case 0:
                 this.y --;
                 break;
             // down
             case 1:
                 this.y ++;
                 break;
             // left
             case 2:
                 this.x --;
                 break;
             // right
             case 3:
                 this.x ++;
                 break;
             default:
         }
     }


}