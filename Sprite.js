class Sprite {

    constructor(name, type, x, y, width, height) {
        this.name = name;
        this.type = type;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        this.likes = null;
        this.scared_of = null;
        this.drops = null;
        this.drop_counter = 0;
        this.collects = null;

        // direction  0 - north, 1 - south, 2 - west, 3 - east
        this.direction = 3;
        this.moves = false;


    }

    // todo add likes / and fears

     random_move() {
         if (this.moves) {
             this.drop_counter++;
             this.direction = Math.floor(Math.random() * 4);
             if (this.x >= (this.width - 1)) {
                 this.x--;
             } else if (this.x <= 0) {
                 this.x++;
             } else if (this.y >= (this.height - 1)) {
                 this.y--;
             } else if (this.y <= 0) {
                 this.y++;
             }

             switch (this.direction) {
                 // up
                 case 0:
                     this.y--;
                     break;
                 // down
                 case 1:
                     this.y++;
                     break;
                 // left
                 case 2:
                     this.x--;
                     break;
                 // right
                 case 3:
                     this.x++;
                     break;
                 default:
             }
         }
     }

    move_in_direction(dir) {
        if (this.moves) {
            this.drop_counter++;
            this.direction = dir;
            if (this.x >= (this.width - 1)) {
                this.x--;
            } else if (this.x <= 0) {
                this.x++;
            } else if (this.y >= (this.height - 1)) {
                this.y--;
            } else if (this.y <= 0) {
                this.y++;
            }

            switch (this.direction) {
                // up
                case 0:
                    this.y--;
                    break;
                // down
                case 1:
                    this.y++;
                    break;
                // left
                case 2:
                    this.x--;
                    break;
                // right
                case 3:
                    this.x++;
                    break;
                default:
            }
        }
    }

    setAttributes(attributes) {
        console.log(attributes);
        if (attributes !== null) {
            this.likes = attributes.likes;
            this.scared_of = attributes.scared_of;
            this.drops = attributes.drops;
            this.collects = attributes.collects;
            this.moves = attributes.moves;
        }
    }


}