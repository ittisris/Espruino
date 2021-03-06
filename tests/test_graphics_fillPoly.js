var g = Graphics.createArrayBuffer(32,32,8);
g.dump = _=>{
  var s = "";
  var b = new Uint8Array(g.buffer);
  var n = 0;
  for (var y=0;y<g.getHeight();y++) {
    s+="\n";
    for (var x=0;x<g.getWidth();x++) 
      s+=".#XO+"[b[n++]];
  }
  return s;
}
g.print = _=>{
  print("`"+g.dump()+"`");
}
var ok = true;
function SHOULD_BE(a) {
  var b = g.dump();
  if (a!=b) {
    console.log("GOT :"+b+"\nSHOULD BE:"+a+"\n================");
    ok = false;
  }
}

g.clear();
g.setColor(1);
g.fillPoly([ 16, 0, 31, 31, 26, 31, 16, 12, 6, 28, 0, 27 ]);
SHOULD_BE(`
................................
................#...............
...............##...............
...............###..............
..............####..............
..............#####.............
.............######.............
............########............
............########............
...........##########...........
...........##########...........
..........############..........
.........#############..........
.........#######.######.........
........#######..######.........
........#######...######........
.......#######.....#####........
......#######......######.......
......#######.......#####.......
.....#######........######......
.....######..........#####......
....#######..........######.....
...#######............#####.....
...#######............######....
..#######..............#####....
..######...............######...
.#######................#####...
#######.................######..
.........................#####..
.........................######.
..........................#####.
................................`);

g.clear();
g.setColor(1);
g.fillPoly([16,2, 30,16, 16,30, 2,16]);
SHOULD_BE(`
................................
................................
................................
...............##...............
..............####..............
.............######.............
............########............
...........##########...........
..........############..........
.........##############.........
........################........
.......##################.......
......####################......
.....######################.....
....########################....
...##########################...
..############################..
...##########################...
....########################....
.....######################.....
......####################......
.......##################.......
........################........
.........##############.........
..........############..........
...........##########...........
............########............
.............######.............
..............####..............
...............##...............
................................
................................`);

g.clear();
g.setColor(1);
g.fillPoly([16,2, 30,12, 16,30, 2,20]);
SHOULD_BE(`
................................
................................
................................
................##..............
...............####.............
..............#######...........
.............#########..........
.............##########.........
............#############.......
...........###############......
..........##################....
.........####################...
.........#####################..
........######################..
.......######################...
......######################....
......#####################.....
.....######################.....
....######################......
...######################.......
..######################........
....###################.........
.....##################.........
.......###############..........
........#############...........
.........###########............
...........#########............
............#######.............
..............####..............
...............##...............
................................
................................`);


g.clear();
g.setColor(1);
g.fillPoly([4,4, 27,4, 27,27, 4,27]);
SHOULD_BE(`
................................
................................
................................
................................
....#######################.....
....#######################.....
....#######################.....
....#######################.....
....#######################.....
....#######################.....
....#######################.....
....#######################.....
....#######################.....
....#######################.....
....#######################.....
....#######################.....
....#######################.....
....#######################.....
....#######################.....
....#######################.....
....#######################.....
....#######################.....
....#######################.....
....#######################.....
....#######################.....
....#######################.....
....#######################.....
................................
................................
................................
................................
................................`);

g.clear();
g.setFont("Vector",32);
g.setColor(1);
g.drawString("X");
SHOULD_BE(`
................................
................................
####............####............
.####..........####.............
..####........####..............
..####........####..............
...####......####...............
....####....####................
....####....####................
.....####..####.................
......########..................
......########..................
.......######...................
........####....................
........####....................
.......######...................
......########..................
......########..................
.....####..####.................
....####....####................
....####....####................
...####......####...............
..####........####..............
..####........####..............
.####..........####.............
####............####............
................................
................................
................................
................................
................................
................................`);

g.clear();
g.setColor(1);
g.fillPoly([ 12, 0, 18, 0, 18, 15, 30, 24, 27, 30, 18, 24, 18, 36, 12, 36, 12, 24, 3, 30, 0, 24, 12, 15, 12, 0 ]);
SHOULD_BE(`
............######..............
............######..............
............######..............
............######..............
............######..............
............######..............
............######..............
............######..............
............######..............
............######..............
............######..............
............######..............
............######..............
............######..............
............######..............
............######..............
...........#########............
..........###########...........
........##############..........
.......#################........
......###################.......
....######################......
...#########################....
..###########################...
##############################..
.##########.######..##########..
.########...######...########...
..######....######.....######...
..####......######......####....
...##.......######........##....
............######..............
............######..............`);

g.clear();
g.setColor(1).fillPoly([16,2, 30,16, 16,30, 2,16]);
g.setColor(2).drawPoly([16,2, 30,16, 16,30, 2,16, 16,2]);
SHOULD_BE(`
................................
................................
................X...............
...............X#X..............
..............X###X.............
.............X#####X............
............X#######X...........
...........X#########X..........
..........X###########X.........
.........X#############X........
........X###############X.......
.......X#################X......
......X###################X.....
.....X#####################X....
....X#######################X...
...X#########################X..
..X###########################X.
...X#########################X..
....X#######################X...
.....X#####################X....
......X###################X.....
.......X#################X......
........X###############X.......
.........X#############X........
..........X###########X.........
...........X#########X..........
............X#######X...........
.............X#####X............
..............X###X.............
...............X#X..............
................X...............
................................`);

g.clear();
g.setColor(1).fillPoly([16,2, 30,12, 16,30, 2,20]);
g.setColor(2).drawPoly([16,2, 30,12, 16,30, 2,20, 16,2]);
SHOULD_BE(`
................................
................................
................X...............
...............X#XX.............
..............X####X............
..............X#####X...........
.............X#######XX.........
............X##########X........
...........X############XX......
...........X##############X.....
..........X################X....
.........X##################XX..
........X#####################X.
.......X#####################X..
.......X####################X...
......X#####################X...
.....X#####################X....
....X#####################X.....
....X####################X......
...X#####################X......
..X#####################X.......
...XX##################X........
.....X################X.........
......X##############X..........
.......XX############X..........
.........X##########X...........
..........XX#######X............
............X#####X.............
.............X####X.............
..............XX#X..............
................X...............
................................`);

g.clear();
g.setColor(1).fillPoly([1,1, 15,2, 16,16, 2,15]);
g.setColor(2).fillPoly([15,2, 29,3, 30,17, 16,16]);
g.setColor(3).fillPoly([2,15, 16,16, 17,30, 3,29]);
g.setColor(4).fillPoly([16,16, 30,17, 31,31, 17,30]);
SHOULD_BE(`
................................
................................
..#############.................
..##############XXXXXXXXXXXXX...
..##############XXXXXXXXXXXXXX..
..##############XXXXXXXXXXXXXX..
..##############XXXXXXXXXXXXXX..
..##############XXXXXXXXXXXXXX..
..##############XXXXXXXXXXXXXX..
..##############XXXXXXXXXXXXXX..
..##############XXXXXXXXXXXXXX..
..##############XXXXXXXXXXXXXX..
..##############XXXXXXXXXXXXXX..
..##############XXXXXXXXXXXXXX..
..##############XXXXXXXXXXXXXX..
..##############XXXXXXXXXXXXXX..
...OOOOOOOOOOOOOXXXXXXXXXXXXXX..
...OOOOOOOOOOOOOO+++++++++++++..
...OOOOOOOOOOOOOO++++++++++++++.
...OOOOOOOOOOOOOO++++++++++++++.
...OOOOOOOOOOOOOO++++++++++++++.
...OOOOOOOOOOOOOO++++++++++++++.
...OOOOOOOOOOOOOO++++++++++++++.
...OOOOOOOOOOOOOO++++++++++++++.
...OOOOOOOOOOOOOO++++++++++++++.
...OOOOOOOOOOOOOO++++++++++++++.
...OOOOOOOOOOOOOO++++++++++++++.
...OOOOOOOOOOOOOO++++++++++++++.
...OOOOOOOOOOOOOO++++++++++++++.
...OOOOOOOOOOOOOO++++++++++++++.
.................++++++++++++++.
................................`);

result = ok;
