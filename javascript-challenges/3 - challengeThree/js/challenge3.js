let width = 10;
let length = 10;
let map = [];
let sub_pos = [];
let boat_pos = [];

function select_char(i, y) {
    let water = "💧";
    let boat = "⛴";
    let submarine = "👾";
    let rand = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
    let pos = [];

    if (rand == 1) {
        pos[0] = i;
        pos[1] = y;
        boat_pos.push(pos);
        return boat;
    }
    else if (rand == 2) {
        pos[0] = i;
        pos[1] = y;
        sub_pos.push(pos);
        return submarine;
    }
    else {
        return water;
    }
}

function find_sub(boat_pos, sub_pos) {
    let score = 0;
    boat_pos.forEach(boat => {
        sub_pos.forEach(sub => {
            if (boat[0] == sub[0] - 1 || boat[0] == sub[0] + 1) {
                if (boat[1] == sub[1]) {
                    score++;
                    console.log(`${boat[0]}|${sub[0]}\n${boat[1]}|${sub[1]}`);
                }
            }
            if (boat[1] == sub[1] - 1 || boat[1] == sub[1] + 1) {
                if (boat[0] == sub[0]) {
                    score++;
                    console.log(`${boat[0]}|${sub[0]}\n${boat[1]}|${sub[1]}`);
                }
            }
        });
    });
    return score;
}

function draw_map() {
    for (let i = 0; i <= width; i++) {
        let line = [];
        let div = document.createElement('div');
        for (let y = 0; y <= length; y++) {
            line[y] = select_char(i, y);
        }
        div.textContent = line;
        document.body.appendChild(div);
        map.push(line);
    }
}

draw_map();
find_sub(boat_pos, sub_pos);
