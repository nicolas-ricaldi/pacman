// List of features to build

// 1) Have JS display the world if brick/coin/etc DONE!!!
// 2) Have the pacman move up and down


    
    var world = [
        [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
        [2,0,2,1,1,1,1,1,3,2,1,1,1,1,1,1,1,2,3,2],
        [2,1,2,1,2,2,2,2,1,2,1,2,1,2,1,1,1,2,1,2],
        [2,1,2,1,1,2,3,2,1,2,1,2,2,2,2,2,1,2,1,2],
        [2,1,2,2,1,1,1,2,1,2,1,1,1,2,3,2,1,2,1,2],
        [2,1,2,1,1,2,2,2,1,1,1,2,2,2,1,2,1,1,1,2],
        [2,1,2,1,1,1,1,2,1,2,1,1,1,1,1,2,2,1,1,2],
        [2,1,2,2,2,2,1,2,1,1,1,2,2,2,1,1,2,1,1,2],
        [2,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,2,1,1,2],
        [2,2,2,2,2,2,1,2,2,1,2,2,1,1,1,1,1,1,1,2],
        [2,1,1,1,1,1,3,2,0,0,0,2,1,2,2,2,2,2,2,2],
        [2,1,2,2,2,2,1,2,0,0,0,2,1,1,2,1,1,2,3,2],
        [2,1,1,1,1,2,1,2,2,2,2,2,1,1,1,1,1,1,1,2],
        [2,2,2,2,3,2,1,1,1,1,1,1,1,2,2,2,2,1,2,2],
        [2,1,1,1,1,2,1,1,1,2,1,1,1,1,1,1,1,1,3,2],
        [2,1,2,2,2,2,1,1,1,2,1,2,2,2,1,2,2,1,2,2],
        [2,3,1,1,1,1,1,1,1,2,1,1,1,1,1,1,2,1,0,2],
        [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]
    ];

    var pacman = {
        x: 1,
        y: 1
    };

    var msPacman = {
        x: 18,
        y: 16
    };

    var ghosts = [
        { 
            x: 8,
            y: 11
        },
        {
            x: 10,
            y: 11
        },
        { 
            x: 9,
            y: 11
        }
    ];

    var score = 0;
    var mScore = 0;
    var pacmanCanMove = true;
    var msPacmanCanMove = true;


    function displayWorld(){
        var output = "";

        for(var i = 0; i < world.length; i++){
            output += "\n<div class='row'>\n"; 
            for(var j = 0; j < world[i].length; j++){
                if(world[i][j] == 2){
                    output += "<div class='brick'></div>";
                }else if(world[i][j] == 1){
                    output += "<div class='coin'></div>";
                }else if(world[i][j] == 0){
                    output += "<div class='empty'></div>";
                }else if(world[i][j] == 3){
                    output += "<div class='cherry'></div>";
                }
                // output = output + world[i][j];
            }
            output += "\n</div>";
        }
        //console.log(output);
        document.getElementById('world').innerHTML = output;
    } 
    
    function displayPacman(){
        document.getElementById('pacman').style.left = pacman.x*20+"px";
        document.getElementById('pacman').style.top = pacman.y*20+"px";

     }

     function displayMsPacman(){
        document.getElementById('msPacman').style.left = msPacman.x*20+"px";
        document.getElementById('msPacman').style.top = msPacman.y*20+"px";
     }

    function displayGhosts(){   

        var i = 0;

        for(var i = 0; i < ghosts.length; i++){
            document.getElementById('ghost'+(i+1)).style.left = ghosts[i].x*20+"px";
            document.getElementById('ghost'+(i+1)).style.top = ghosts[i].y*20+"px";
        }
    }


    function displayScore(){
        document.getElementById('score').innerHTML = "Pacman: " +score;
        document.getElementById('mScore').innerHTML = "Ms.Pacman: " +mScore;
    }

    // displays all the elements of the game 
    displayGhosts();
    displayPacman();
    displayMsPacman();
    displayScore();
    displayWorld();

    document.onkeydown = function(e){

    // logic to move Pacman

        if(pacmanCanMove){
            if(e.keyCode == 37 && world[pacman.y][pacman.x-1] != 2){ // Move Left
                pacman.x--;
                document.getElementById('pacman').style.transform = "rotate(180deg)";
            }
            if(e.keyCode == 39 && world[pacman.y][pacman.x+1] != 2){ // Move Right
                pacman.x++;
                document.getElementById('pacman').style.transform = "rotate(0deg)";
            }
            if(e.keyCode == 38 && world[pacman.y-1][pacman.x] != 2){ // Move Up
                pacman.y--;
                document.getElementById('pacman').style.transform = "rotate(-90deg)";
            }
            if(e.keyCode == 40 && world[pacman.y+1][pacman.x] != 2){ // Move Down 
                pacman.y++;
                document.getElementById('pacman').style.transform = "rotate(90deg)";
            }

            if(world[pacman.y][pacman.x] == 1){
                world[pacman.y][pacman.x] = 0;
                score+=10;
                displayWorld();
                displayScore();
            }

            if(world[pacman.y][pacman.x] == 3){
                world[pacman.y][pacman.x] = 0;
                score+=20;
                displayWorld();
                displayScore();
            }
        }

        // W = 87
        // A = 65
        // S = 83
        // D = 68
        // Logic to move Ms. Pacman

        if(msPacmanCanMove){
            if(e.keyCode == 65 && world[msPacman.y][msPacman.x-1] != 2){ // Move Left
                msPacman.x--;
                document.getElementById('msPacman').style.transform = "";
            }
            if(e.keyCode == 68 && world[msPacman.y][msPacman.x+1] != 2){ // Move Right
                msPacman.x++;
                document.getElementById('msPacman').style.transform = "scaleX(-1)";
            }
            if(e.keyCode == 87 && world[msPacman.y-1][msPacman.x] != 2){ // Move Up
                msPacman.y--;
                document.getElementById('msPacman').style.transform = "rotate(90deg)";
            }
            if(e.keyCode == 83 && world[msPacman.y+1][msPacman.x] != 2){ // Move Down 
                msPacman.y++;
                document.getElementById('msPacman').style.transform = "rotate(-90deg)";
            }

            if(world[msPacman.y][msPacman.x] == 1){
                world[msPacman.y][msPacman.x] = 0;
                mScore+=10;
                displayWorld();
                displayScore();
            }

            if(world[msPacman.y][msPacman.x] == 3){
                world[msPacman.y][msPacman.x] = 0;
                mScore+=20;
                displayWorld();
                displayScore();
            }

        }

        checkCollisions();
        // re displays after movement
        displayPacman(); 
        displayMsPacman();
    }

    // each random number is a direction 
    function ghostMovement(){
        // console.log("ghost movement func activated");
        for(var i = 0; i < ghosts.length; i++){
            var dir = getRandomInt() + 1;
            // console.log(dir);
            moveGhost(i, dir);
        }

        checkCollisions();
    }

    function checkCollisions(){
        // checks if pacman touches a ghost
        for(var i = 0; i < ghosts.length; i++){
            if(pacman.x == ghosts[i].x && pacman.y == ghosts[i].y){
            document.getElementById('pacman').style.display = "none";
            console.log('Dead!!!');
            pacmanCanMove = false;
            // console.log(world[pacman.x][pacman.y] + ' ' + '==' + ' ' +world[ghosts[0].x][ghosts[0].y]);
            }
        }

        // checks if Ms. Pacman touches a ghost
        for(var i = 0; i < ghosts.length; i++){
            if(msPacman.x == ghosts[i].x && msPacman.y == ghosts[i].y){
            document.getElementById('msPacman').style.display = "none";
            console.log('Dead!!!');
            msPacmanCanMove = false;
            // console.log(world[pacman.x][pacman.y] + ' ' + '==' + ' ' +world[ghosts[0].x][ghosts[0].y]);
            }
        }
    }

    function getRandomInt() {
        return Math.floor(Math.random() * Math.floor(4));
    }

    function moveGhost(i, dir){
        if(dir == 1){ // move up
            moveGhostUp(i);
        }
        if (dir == 2){ // move down
            moveGhostDown(i);
        }
        if (dir == 3){ // move left
            moveGhostLeft(i);
        }
        if (dir == 4){ // move right
            moveGhostRight(i);
        }
    }

    function moveGhostUp(i){
        if (world[ghosts[i].y+1][ghosts[i].x] != 2) {
            ghosts[i].y++;
        }
    }

    function moveGhostDown(i){
        if(world[ghosts[i].y-1][ghosts[i].x] != 2) {
            ghosts[i].y--;
        }
    }
    
    function moveGhostRight(i){
        if(world[ghosts[i].y][ghosts[i].x+1] != 2){
            ghosts[i].x++;
        }
    }
    
    function moveGhostLeft(i){
        if(world[ghosts[i].y][ghosts[i].x-1] != 2){
            ghosts[i].x--;
        }
    }

    const interval = setInterval(function() {
        ghostMovement()
        // console.log("interval working");
        displayGhosts();
    }, 150);