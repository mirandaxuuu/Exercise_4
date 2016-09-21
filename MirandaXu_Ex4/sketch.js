function setup(){
  createCanvas(1100,800);
  background(227,216,184);
}

function draw(){
  noStroke();
  fill(134,106,146);
  ellipse(480,400,200,200); //purple circle in the middle
  fill(225,206,77);
  quad(450,0,530,130,560,100,490,0); //yellow rect on top
  
  strokeWeight(2);
  stroke(160,98,41);
  fill(154,162,123,150);
  ellipse(790,550,300,300);
  fill(222,175,71,120);
  triangle(780,200,600,420,840,480); //green and yellow combinition
  
  stroke(0,0,0);
  fill(161,123,87);
  triangle(750,0,760,0,880,220);
  fill(150,134,108);
  triangle(800,0,810,0,870,110);
  triangle(920,0,930,0,970,80);//three spikes on top
  
  fill(117,34,18);
  rect(920,630,85,80);//red square
  
  fill(246,239,221);
  arc(405,200,250,250,-PI,0,CHORD);//right semi-circle
  strokeWeight(8);
  stroke(195,59,37);
  arc(150,200,250,250,-PI,0,CHORD);//left semi-circle
  
  strokeWeight(3);
  stroke(0,0,0);
  noFill();
  arc(0,350,220,220,-HALF_PI,0);
  arc(110,460,220,220,-PI,0.5);
  arc(220,620,220,220,-PI,0.1); //three arcs on the left
  
  strokeWeight(10);
  stroke(225,206,77,100);
  arc(0,350,220,220,-HALF_PI,0);
  arc(110,460,220,220,-PI,0.5);
  arc(220,620,220,220,-PI,0.1);
  
  stroke(0,0,0);
  strokeWeight(5);
  line(0,200,780,200);
  line(200,400,720,400);
  line(350,600,750,600); //three horizontal lines
  line(10,100,10,800); //verticle line on the left
  line(380,0,550,700);
  
  strokeWeight(3);
  line(0,290,200,50);
  line(0,300,200,60);
  line(0,320,200,75); //group of lines on upper left
  line(0,500,200,220);
  line(0,520,210,230);
  line(0,540,220,235); //group of lines below
  line(700,0,1100,700); //line on the right
  
  strokeWeight(5);
  line(965,665,1030,665);
  line(965,675,1030,675);//lines across red square
  
  strokeWeight(10);
  line(330,0,780,500);
  
  strokeWeight(2);
  line(0,0,80,60); //upper left corner
  
  strokeWeight(15);
  line(1000,0,1020,10); //upper right corner
  
  strokeWeight(3);
  fill(147,144,125);
  quad(0,200,3,210,180,80,170,70);
  fill(0,0,0);
  quad(180,80,170,70,250,10,260,20);
  fill(206,65,20);
  quad(250,10,260,20,290,0,270,0);//thick colorful line. upper left
  
}